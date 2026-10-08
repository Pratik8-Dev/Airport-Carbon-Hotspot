import type {
  AnalysisParams, AnalysisResponse, EventName, MethodologyResponse, OverviewResponse, RecommendationResponse,
  SimulationResult,
} from '@acp/contracts';

export type FailureCode = 'TIMEOUT' | 'NETWORK' | 'INVALID_DATA' | 'SERVER';

export class ApiFailure extends Error {
  constructor(public readonly code: FailureCode, public readonly correlationId: string) {
    super(code);
    this.name = 'ApiFailure';
  }
}

export const newCorrelationId = (): string => crypto.randomUUID();

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null;
const num = (v: unknown): boolean => typeof v === 'number' && Number.isFinite(v);

// Lightweight runtime guards: the remote never trusts the network shape.
export const guards = {
  overview: (v: unknown): v is OverviewResponse =>
    isObj(v) && num(v['totalKgCO2e']) && Array.isArray(v['categories']) && isObj(v['quality']) && isObj(v['meta']),
  analysis: (v: unknown): v is AnalysisResponse =>
    isObj(v) && Array.isArray(v['candidates']) && 'hotspot' in v && isObj(v['audit']),
  recommendation: (v: unknown): v is RecommendationResponse => isObj(v) && 'recommendation' in v && isObj(v['audit']),
  simulation: (v: unknown): v is SimulationResult =>
    isObj(v) && num(v['baselineKgCO2e']) && num(v['simulatedKgCO2e']) && num(v['reductionKgCO2e']) && num(v['reductionPct']),
  methodology: (v: unknown): v is MethodologyResponse => isObj(v) && Array.isArray(v['formulas']) && Array.isArray(v['fields']),
};

interface RequestOptions<T> {
  method?: 'GET' | 'POST';
  body?: unknown;
  signal?: AbortSignal;
  guard: (v: unknown) => v is T;
  correlationId?: string;
  timeoutMs?: number;
}

export async function request<T>(baseUrl: string, path: string, opts: RequestOptions<T>): Promise<T> {
  const cid = opts.correlationId ?? newCorrelationId();
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort('timeout'), opts.timeoutMs ?? 8000);
  const onAbort = (): void => ctrl.abort('caller');
  opts.signal?.addEventListener('abort', onAbort);
  try {
    const headers: Record<string, string> = { 'X-Correlation-ID': cid, Accept: 'application/json' };
    if (opts.method === 'POST') {
      headers['Content-Type'] = 'application/json';
      headers['X-Requested-With'] = 'acp';
    }
    const res = await fetch(`${baseUrl}${path}`, {
      method: opts.method ?? 'GET', headers, credentials: 'include', signal: ctrl.signal,
      body: opts.body === undefined ? undefined : JSON.stringify(opts.body),
    });
    if (!res.ok) throw new ApiFailure(res.status >= 500 ? 'SERVER' : 'INVALID_DATA', cid);
    const json: unknown = await res.json();
    if (!opts.guard(json)) throw new ApiFailure('INVALID_DATA', cid);
    return json;
  } catch (e) {
    if (e instanceof ApiFailure) throw e;
    if (opts.signal?.aborted) throw e;
    if (ctrl.signal.aborted) throw new ApiFailure('TIMEOUT', cid);
    throw new ApiFailure(e instanceof SyntaxError ? 'INVALID_DATA' : 'NETWORK', cid);
  } finally {
    clearTimeout(timer);
    opts.signal?.removeEventListener('abort', onAbort);
  }
}

export const api = {
  overview: (base: string, days: number, signal?: AbortSignal) =>
    request(base, `/api/v1/emissions/overview?periodDays=${encodeURIComponent(days)}`, { guard: guards.overview, signal }),
  analysis: (base: string, cid: string, signal?: AbortSignal) =>
    request(base, '/api/v1/hotspots/analysis', { guard: guards.analysis, signal, correlationId: cid }),
  recommendation: (base: string, signal?: AbortSignal) =>
    request(base, '/api/v1/recommendations/current', { guard: guards.recommendation, signal }),
  simulate: (base: string, params: Partial<AnalysisParams>, signal?: AbortSignal) =>
    request(base, '/api/v1/simulations', { method: 'POST', body: params, guard: guards.simulation, signal }),
  methodology: (base: string, signal?: AbortSignal) =>
    request(base, '/api/v1/methodology', { guard: guards.methodology, signal }),
};

export type { EventName };
