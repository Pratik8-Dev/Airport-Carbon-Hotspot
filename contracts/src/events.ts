// Framework-neutral, versioned contract between the Angular host and the React remote.
// No tokens, secrets or user identity are ever part of these messages.

export const CONTRACT_VERSION = 1;

export type ThemeName = 'light' | 'dark' | 'high-contrast';
export type RemoteView = 'overview' | 'hotspot' | 'methodology';

export interface MountProps {
  contractVersion: number;
  view: RemoteView;
  apiBaseUrl: string;
  airportContext: { airportId: string; terminalId: string };
  filters: { analysisDays: number };
  featureFlags: { showSensitivity: boolean };
  theme: ThemeName;
  // Only a coarse, non-identifying state; credentials travel via HTTP-only cookies, never here.
  auth: { state: 'authenticated'; roles: string[] };
}

export interface RemoteHandle {
  update(props: MountProps): void;
  unmount(): void;
}

export interface RemoteModule {
  contractVersion: number;
  mount(container: HTMLElement, props: MountProps): RemoteHandle;
}

export const EVENT_NAMES = {
  analysisStarted: 'acp.v1.analysis-started',
  analysisCompleted: 'acp.v1.analysis-completed',
  analysisFailed: 'acp.v1.analysis-failed',
  recommendationSelected: 'acp.v1.recommendation-selected',
} as const;

export type EventName = (typeof EVENT_NAMES)[keyof typeof EVENT_NAMES];

export interface AnalysisStartedDetail { v: 1; correlationId: string }
export interface AnalysisCompletedDetail { v: 1; correlationId: string; hotspotFound: boolean; reductionKgCO2e: number | null }
export interface AnalysisFailedDetail { v: 1; correlationId: string; code: 'TIMEOUT' | 'NETWORK' | 'INVALID_DATA' | 'SERVER' }
export interface RecommendationSelectedDetail { v: 1; correlationId: string; categoryId: string; zoneId: string }

export interface EventDetailMap {
  'acp.v1.analysis-started': AnalysisStartedDetail;
  'acp.v1.analysis-completed': AnalysisCompletedDetail;
  'acp.v1.analysis-failed': AnalysisFailedDetail;
  'acp.v1.recommendation-selected': RecommendationSelectedDetail;
}

const isPlainObject = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null;
const isSafeIdentifier = (value: unknown): value is string => typeof value === 'string' && /^[A-Za-z0-9._-]{1,64}$/.test(value);

/** Runtime validation of an incoming detail payload. Returns null when invalid. */
export function parseEventDetail<N extends EventName>(name: N, detail: unknown): EventDetailMap[N] | null {
  if (!isPlainObject(detail) || detail['v'] !== 1 || !isSafeIdentifier(detail['correlationId'])) return null;
  switch (name) {
    case EVENT_NAMES.analysisStarted:
      return detail as unknown as EventDetailMap[N];
    case EVENT_NAMES.analysisCompleted: {
      const reduction = detail['reductionKgCO2e'];
      const isValid = typeof detail['hotspotFound'] === 'boolean' &&
        (reduction === null || (typeof reduction === 'number' && Number.isFinite(reduction) && reduction >= 0));
      return isValid ? (detail as unknown as EventDetailMap[N]) : null;
    }
    case EVENT_NAMES.analysisFailed:
      return ['TIMEOUT', 'NETWORK', 'INVALID_DATA', 'SERVER'].includes(detail['code'] as string)
        ? (detail as unknown as EventDetailMap[N]) : null;
    case EVENT_NAMES.recommendationSelected:
      return isSafeIdentifier(detail['categoryId']) && isSafeIdentifier(detail['zoneId'])
        ? (detail as unknown as EventDetailMap[N]) : null;
    default:
      return null;
  }
}

export function emit<N extends EventName>(target: EventTarget, name: N, detail: EventDetailMap[N]): void {
  target.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
}

/** Registers listeners for every contract event on `target`; returns a cleanup function. */
export function listen(
  target: EventTarget,
  handler: <N extends EventName>(name: N, detail: EventDetailMap[N]) => void,
): () => void {
  const removeListeners = (Object.values(EVENT_NAMES) as EventName[]).map((name) => {
    const listener = (event: Event): void => {
      const detail = parseEventDetail(name, (event as CustomEvent).detail);
      if (detail) handler(name, detail as never);
    };
    target.addEventListener(name, listener);
    return () => target.removeEventListener(name, listener);
  });
  return () => removeListeners.forEach((removeListener) => removeListener());
}

const isSameMajorVersion = (remoteContractVersion: number): boolean => remoteContractVersion === CONTRACT_VERSION;
export const isCompatibleRemote = (remote: RemoteModule | undefined): remote is RemoteModule =>
  !!remote && typeof remote.mount === 'function' && isSameMajorVersion(remote.contractVersion);

export function isAllowedRemoteUrl(url: string, allowlist: readonly string[]): boolean {
  try {
    const parsedUrl = new URL(url);
    return allowlist.includes(parsedUrl.origin) && parsedUrl.pathname.endsWith('.js');
  } catch {
    return false;
  }
}
