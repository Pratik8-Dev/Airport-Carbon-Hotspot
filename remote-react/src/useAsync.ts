import { useEffect, useState } from 'react';

export type AsyncState<T> =
  | { status: 'loading' }
  | { status: 'error'; code: string }
  | { status: 'ready'; data: T };

/** Runs `load` once per dependency change, aborting the previous call; never updates state after unmount. */
export function useAsync<T>(load: (signal: AbortSignal) => Promise<T>, deps: unknown[]): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' });
  useEffect(() => {
    const ctrl = new AbortController();
    setState({ status: 'loading' });
    load(ctrl.signal).then(
      (data) => { if (!ctrl.signal.aborted) setState({ status: 'ready', data }); },
      (e: unknown) => {
        if (ctrl.signal.aborted) return;
        setState({ status: 'error', code: (e as { code?: string }).code ?? 'NETWORK' });
      },
    );
    return () => ctrl.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return state;
}
