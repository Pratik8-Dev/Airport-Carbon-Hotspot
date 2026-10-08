import { createContext, useContext } from 'react';
import type { EventDetailMap, EventName, MountProps } from '@acp/contracts';
import { emit } from '@acp/contracts';

export interface RemoteContextValue {
  props: MountProps;
  publish: <N extends EventName>(name: N, detail: EventDetailMap[N]) => void;
}

export const RemoteContext = createContext<RemoteContextValue | null>(null);

export function useRemote(): RemoteContextValue {
  const v = useContext(RemoteContext);
  if (!v) throw new Error('RemoteContext missing');
  return v;
}

export const makePublisher =
  (target: EventTarget): RemoteContextValue['publish'] =>
  (name, detail) => emit(target, name, detail);
