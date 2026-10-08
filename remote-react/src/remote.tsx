import { createRoot, type Root } from 'react-dom/client';
import { CONTRACT_VERSION, type MountProps, type RemoteHandle } from '@acp/contracts';
import { App } from './App';

export const contractVersion = CONTRACT_VERSION;

const mounted = new WeakMap<HTMLElement, RemoteHandle>();

/** Mounts the remote into `container`. Idempotent: a second call on the same element returns the existing handle. */
export function mount(container: HTMLElement, props: MountProps): RemoteHandle {
  const existing = mounted.get(container);
  if (existing) {
    existing.update(props);
    return existing;
  }
  let root: Root | null = createRoot(container);
  const render = (p: MountProps): void => root?.render(<App props={p} eventTarget={container} />);
  render(props);
  const handle: RemoteHandle = {
    update: (p) => render(p),
    unmount: () => {
      if (!root) return;
      root.unmount();
      root = null;
      mounted.delete(container);
    },
  };
  mounted.set(container, handle);
  return handle;
}
