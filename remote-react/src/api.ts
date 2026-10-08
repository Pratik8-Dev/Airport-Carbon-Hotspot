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

const isPlainObject = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null;
const isFiniteNumber = (value: unknown): boolean => typeof value === 'number' && Number.isFinite(value);

// Lightweight runtime guards: the remote never trusts the network shape.
export const guards = {
  overview: (value: unknown): value is OverviewResponse =>
    isPlainObject(value) && isFiniteNumber(value['totalKgCO2e']) && Array.isArray(value['categories']) &&
    isPlainObject(value['quality']) && isPlainObject(value['meta']),
  analysis: (value: unknown): value is AnalysisResponse =>
    isPlainObject(value) && Array.isArray(value['candidates']) && 'hotspot' in value && isPlainObject(value['audit']),
  recommendation: (value: unknown): value is RecommendationResponse =>
    isPlainObject(value) && 'recommendation' in value && isPlainObject(value['audit']),
  simulation: (value: unknown): value is SimulationResult =>
    isPlainObject(value) && isFiniteNumber(value['baselineKgCO2e']) && isFiniteNumber(value['simulatedKgCO2e']) &&
    isFiniteNumber(value['reductionKgCO2e']) && isFiniteNumber(value['reductionPct']),
  methodology: (value: unknown): value is MethodologyResponse =>
    isPlainObject(value) && Array.isArray(value['formulas']) && Array.isArray(value['fields']),
};

const DEFAULT_REQUEST_TIMEOUT_MS = 8000;

interface RequestOptions<T> {
  method?: 'GET' | 'POST';
  body?: unknown;
  signal?: AbortSignal;
  guard: (value: unknown) => value is T;
  correlationId?: string;
  timeoutMs?: number;
}

export async function request<T>(baseUrl: string, path: string, options: RequestOptions<T>): Promise<T> {
  const correlationId = options.correlationId ?? newCorrelationId();
  const timeoutController = new AbortController();
  const timeoutHandle = setTimeout(() => timeoutController.abort('timeout'), options.timeoutMs ?? DEFAULT_REQUEST_TIMEOUT_MS);
  const abortOnCallerSignal = (): void => timeoutController.abort('caller');
  options.signal?.addEventListener('abort', abortOnCallerSignal);
  try {
    const headers: Record<string, string> = { 'X-Correlation-ID': correlationId, Accept: 'application/json' };
    if (options.method === 'POST') {
      headers['Content-Type'] = 'application/json';
      headers['X-Requested-With'] = 'acp';
    }
    const response = await fetch(`${baseUrl}${path}`, {
      method: options.method ?? 'GET', headers, credentials: 'include', signal: timeoutController.signal,
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
    });
    if (!response.ok) throw new ApiFailure(response.status >= 500 ? 'SERVER' : 'INVALID_DATA', correlationId);
    const payload: unknown = await response.json();
    if (!options.guard(payload)) throw new ApiFailure('INVALID_DATA', correlationId);
    return payload;
  } catch (error) {
    if (error instanceof ApiFailure) throw error;
    if (options.signal?.aborted) throw error;
    if (timeoutController.signal.aborted) throw new ApiFailure('TIMEOUT', correlationId);
    throw new ApiFailure(error instanceof SyntaxError ? 'INVALID_DATA' : 'NETWORK', correlationId);
  } finally {
    clearTimeout(timeoutHandle);
    options.signal?.removeEventListener('abort', abortOnCallerSignal);
  }
}

export const api = {
  overview: (baseUrl: string, periodDays: number, signal?: AbortSignal) =>
    request(baseUrl, `/api/v1/emissions/overview?periodDays=${encodeURIComponent(periodDays)}`, { guard: guards.overview, signal }),
  analysis: (baseUrl: string, correlationId: string, signal?: AbortSignal) =>
    request(baseUrl, '/api/v1/hotspots/analysis', { guard: guards.analysis, signal, correlationId }),
  recommendation: (baseUrl: string, signal?: AbortSignal) =>
    request(baseUrl, '/api/v1/recommendations/current', { guard: guards.recommendation, signal }),
  simulate: (baseUrl: string, params: Partial<AnalysisParams>, signal?: AbortSignal) =>
    request(baseUrl, '/api/v1/simulations', { method: 'POST', body: params, guard: guards.simulation, signal }),
  methodology: (baseUrl: string, signal?: AbortSignal) =>
    request(baseUrl, '/api/v1/methodology', { guard: guards.methodology, signal }),
};

export type { EventName };
