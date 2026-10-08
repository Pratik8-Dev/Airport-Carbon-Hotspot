import { useEffect, useState } from 'react';

export type AsyncState<T> =
  | { status: 'loading' }
  | { status: 'error'; code: string }
  | { status: 'ready'; data: T };

/** Runs `load` once per dependency change, aborting the previous call; never updates state after unmount. */
export function useAsync<T>(load: (signal: AbortSignal) => Promise<T>, deps: unknown[]): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' });
  useEffect(() => {
    const abortController = new AbortController();
    setState({ status: 'loading' });
    load(abortController.signal).then(
      (data) => { if (!abortController.signal.aborted) setState({ status: 'ready', data }); },
      (error: unknown) => {
        if (abortController.signal.aborted) return;
        setState({ status: 'error', code: (error as { code?: string }).code ?? 'NETWORK' });
      },
    );
    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return state;
}
