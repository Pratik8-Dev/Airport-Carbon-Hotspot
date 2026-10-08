// Mock REST API. Synthetic data only; no connection to any operational system.
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { randomUUID } from 'node:crypto';
import {
  CalcError, DATASET_ID, SYNTHETIC_RECORDS, analyze, overview, recommend, simulate, validateParams,
} from '../contracts/src';
import type { ApiError, AnalysisParams } from '../contracts/src';
import { METHODOLOGY } from './methodology';

const PORT = Number(process.env['PORT'] ?? 4300);
const ALLOWED_ORIGINS = (process.env['ALLOWED_ORIGINS'] ?? 'http://localhost:4200,http://localhost:4201').split(',');
const MAX_BODY_BYTES = 2048;
const RATE_LIMIT = { windowMs: 60_000, max: 120 };
const CORRELATION_ID_PATTERN = /^[A-Za-z0-9._-]{8,64}$/;
const SIMULATION_PARAM_KEYS = ['idleThresholdMinutes', 'analysisDays', 'emissionFactor', 'equipmentEfficiencyPct'];
const requestCountsByIp = new Map<string, { count: number; windowResetAt: number }>();

const logEvent = (event: string, fields: Record<string, string | number>): void =>
  console.log(JSON.stringify({ ts: new Date().toISOString(), event, ...fields })); // never logs payloads or tokens

function sendJson(res: ServerResponse, status: number, body: unknown, correlationId: string, origin?: string): void {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Correlation-ID': correlationId,
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-store',
    'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
    'Referrer-Policy': 'no-referrer',
  };
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Access-Control-Allow-Credentials'] = 'true';
    headers['Access-Control-Expose-Headers'] = 'X-Correlation-ID';
    headers['Vary'] = 'Origin';
  }
  res.writeHead(status, headers);
  res.end(JSON.stringify(body));
}

const sendError = (res: ServerResponse, status: number, code: string, message: string, correlationId: string, origin?: string): void =>
  sendJson(res, status, { error: { code, message, correlationId } } satisfies ApiError, correlationId, origin);

function readJsonBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let receivedBytes = 0;
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => {
      receivedBytes += chunk.length;
      if (receivedBytes > MAX_BODY_BYTES) { reject(new Error('TOO_LARGE')); req.destroy(); return; }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {}); }
      catch { reject(new Error('BAD_JSON')); }
    });
  });
}

function resolveCorrelationId(req: IncomingMessage): string {
  const headerValue = String(req.headers['x-correlation-id'] ?? '');
  return CORRELATION_ID_PATTERN.test(headerValue) ? headerValue : randomUUID();
}

/** Simple fixed-window rate limiter keyed by client IP; returns true when the caller should be rejected. */
function isRateLimited(clientIp: string, now: number): boolean {
  const usage = requestCountsByIp.get(clientIp);
  if (!usage || usage.windowResetAt < now) {
    requestCountsByIp.set(clientIp, { count: 1, windowResetAt: now + RATE_LIMIT.windowMs });
    return false;
  }
  usage.count++;
  return usage.count > RATE_LIMIT.max;
}

function handlePreflight(res: ServerResponse, origin: string | undefined, correlationId: string): void {
  if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
    sendError(res, 403, 'CORS_DENIED', 'Origin not allowed.', correlationId);
    return;
  }
  res.writeHead(204, {
    'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Correlation-ID, X-Requested-With', 'Vary': 'Origin',
  });
  res.end();
}

async function handleCreateSimulation(
  req: IncomingMessage, res: ServerResponse, correlationId: string, origin: string | undefined,
): Promise<void> {
  if (req.headers['x-requested-with'] !== 'acp') {
    return sendError(res, 403, 'CSRF_CHECK_FAILED', 'Missing required header.', correlationId, origin);
  }
  if (!String(req.headers['content-type'] ?? '').startsWith('application/json')) {
    return sendError(res, 415, 'UNSUPPORTED_MEDIA_TYPE', 'Use application/json.', correlationId, origin);
  }
  const body = await readJsonBody(req);
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return sendError(res, 400, 'INVALID_REQUEST', 'Body must be an object.', correlationId, origin);
  }
  if (Object.keys(body).some((key) => !SIMULATION_PARAM_KEYS.includes(key))) {
    return sendError(res, 400, 'INVALID_REQUEST', 'Unknown field.', correlationId, origin);
  }
  const currentAnalysis = analyze(SYNTHETIC_RECORDS, correlationId);
  if (!currentAnalysis.hotspot) {
    return sendError(res, 422, 'NO_SAFE_RECOMMENDATION', 'No safe recommendation can be generated from the available data.', correlationId, origin);
  }
  const simulationParams = body as Partial<AnalysisParams>;
  validateParams(simulationParams, 'electricity');
  const result = simulate(SYNTHETIC_RECORDS, currentAnalysis.hotspot.categoryId, currentAnalysis.hotspot.zoneId, simulationParams, correlationId);
  sendJson(res, 200, result, correlationId, origin);
}

function handleGetRequest(req: IncomingMessage, res: ServerResponse, url: URL, correlationId: string, origin: string | undefined): boolean {
  switch (url.pathname) {
    case '/api/v1/health':
      sendJson(res, 200, { status: 'ok', datasetId: DATASET_ID, synthetic: true }, correlationId, origin);
      return true;
    case '/api/v1/emissions/overview': {
      const periodDaysParam = url.searchParams.get('periodDays');
      const periodDays = periodDaysParam === null ? undefined : Number(periodDaysParam);
      sendJson(res, 200, overview(SYNTHETIC_RECORDS, periodDays), correlationId, origin);
      return true;
    }
    case '/api/v1/hotspots/analysis':
      sendJson(res, 200, analyze(SYNTHETIC_RECORDS, correlationId), correlationId, origin);
      return true;
    case '/api/v1/recommendations/current': {
      const currentAnalysis = analyze(SYNTHETIC_RECORDS, correlationId);
      const simulationResult = currentAnalysis.hotspot
        ? simulate(SYNTHETIC_RECORDS, currentAnalysis.hotspot.categoryId, currentAnalysis.hotspot.zoneId, {}, correlationId)
        : null;
      sendJson(res, 200, recommend(currentAnalysis, simulationResult), correlationId, origin);
      return true;
    }
    case '/api/v1/methodology':
      sendJson(res, 200, METHODOLOGY, correlationId, origin);
      return true;
    default:
      return false;
  }
}

function handleUnexpectedError(res: ServerResponse, error: unknown, correlationId: string, origin: string | undefined): void {
  if (error instanceof CalcError) return sendError(res, 400, error.code, error.message, correlationId, origin);
  const message = (error as Error).message;
  if (message === 'TOO_LARGE') return sendError(res, 413, 'PAYLOAD_TOO_LARGE', 'Payload too large.', correlationId, origin);
  if (message === 'BAD_JSON') return sendError(res, 400, 'INVALID_REQUEST', 'Malformed JSON.', correlationId, origin);
  logEvent('error', { correlationId, name: (error as Error).name });
  sendError(res, 500, 'INTERNAL_ERROR', 'Something went wrong. Please try again later.', correlationId, origin);
}

const server = createServer(async (req, res) => {
  const correlationId = resolveCorrelationId(req);
  const origin = req.headers.origin;
  const url = new URL(req.url ?? '/', 'http://localhost');
  const clientIp = req.socket.remoteAddress ?? 'unknown';

  if (isRateLimited(clientIp, Date.now())) {
    return sendError(res, 429, 'RATE_LIMITED', 'Too many requests.', correlationId, origin);
  }

  logEvent('request', { method: req.method ?? '', path: url.pathname, correlationId });

  if (req.method === 'OPTIONS') return handlePreflight(res, origin, correlationId);
  if (origin && !ALLOWED_ORIGINS.includes(origin)) return sendError(res, 403, 'CORS_DENIED', 'Origin not allowed.', correlationId);

  try {
    if (req.method === 'GET' && handleGetRequest(req, res, url, correlationId, origin)) return;
    if (req.method === 'POST' && url.pathname === '/api/v1/simulations') {
      return await handleCreateSimulation(req, res, correlationId, origin);
    }
    sendError(res, 404, 'NOT_FOUND', 'Resource not found.', correlationId, origin);
  } catch (error) {
    handleUnexpectedError(res, error, correlationId, origin);
  }
});

server.listen(PORT, () => logEvent('listening', { port: PORT }));
