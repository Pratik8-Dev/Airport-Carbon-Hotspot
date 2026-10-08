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
const hits = new Map<string, { count: number; reset: number }>();

const log = (event: string, fields: Record<string, string | number>): void =>
  console.log(JSON.stringify({ ts: new Date().toISOString(), event, ...fields })); // never logs payloads or tokens

function send(res: ServerResponse, status: number, body: unknown, cid: string, origin?: string): void {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Correlation-ID': cid,
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

const fail = (res: ServerResponse, status: number, code: string, message: string, cid: string, origin?: string): void =>
  send(res, status, { error: { code, message, correlationId: cid } } satisfies ApiError, cid, origin);

function readBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks: Buffer[] = [];
    req.on('data', (c: Buffer) => {
      size += c.length;
      if (size > MAX_BODY_BYTES) { reject(new Error('TOO_LARGE')); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => {
      try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {}); }
      catch { reject(new Error('BAD_JSON')); }
    });
  });
}

const SIM_KEYS = ['idleThresholdMinutes', 'analysisDays', 'emissionFactor', 'equipmentEfficiencyPct'];

const server = createServer(async (req, res) => {
  const cid = /^[A-Za-z0-9._-]{8,64}$/.test(String(req.headers['x-correlation-id'] ?? ''))
    ? String(req.headers['x-correlation-id']) : randomUUID();
  const origin = req.headers.origin;
  const url = new URL(req.url ?? '/', 'http://localhost');
  const ip = req.socket.remoteAddress ?? 'unknown';
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || h.reset < now) hits.set(ip, { count: 1, reset: now + RATE_LIMIT.windowMs });
  else if (++h.count > RATE_LIMIT.max) return fail(res, 429, 'RATE_LIMITED', 'Too many requests.', cid, origin);

  log('request', { method: req.method ?? '', path: url.pathname, correlationId: cid });

  if (req.method === 'OPTIONS') {
    if (!origin || !ALLOWED_ORIGINS.includes(origin)) return fail(res, 403, 'CORS_DENIED', 'Origin not allowed.', cid);
    res.writeHead(204, {
      'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Correlation-ID, X-Requested-With', 'Vary': 'Origin',
    });
    return void res.end();
  }
  if (origin && !ALLOWED_ORIGINS.includes(origin)) return fail(res, 403, 'CORS_DENIED', 'Origin not allowed.', cid);

  try {
    if (req.method === 'GET' && url.pathname === '/api/v1/health') {
      return send(res, 200, { status: 'ok', datasetId: DATASET_ID, synthetic: true }, cid, origin);
    }
    if (req.method === 'GET' && url.pathname === '/api/v1/emissions/overview') {
      const raw = url.searchParams.get('periodDays');
      const days = raw === null ? undefined : Number(raw);
      return send(res, 200, overview(SYNTHETIC_RECORDS, days), cid, origin);
    }
    if (req.method === 'GET' && url.pathname === '/api/v1/hotspots/analysis') {
      return send(res, 200, analyze(SYNTHETIC_RECORDS, cid), cid, origin);
    }
    if (req.method === 'GET' && url.pathname === '/api/v1/recommendations/current') {
      const a = analyze(SYNTHETIC_RECORDS, cid);
      const sim = a.hotspot ? simulate(SYNTHETIC_RECORDS, a.hotspot.categoryId, a.hotspot.zoneId, {}, cid) : null;
      return send(res, 200, recommend(a, sim), cid, origin);
    }
    if (req.method === 'GET' && url.pathname === '/api/v1/methodology') {
      return send(res, 200, METHODOLOGY, cid, origin);
    }
    if (req.method === 'POST' && url.pathname === '/api/v1/simulations') {
      if (req.headers['x-requested-with'] !== 'acp') return fail(res, 403, 'CSRF_CHECK_FAILED', 'Missing required header.', cid, origin);
      if (!String(req.headers['content-type'] ?? '').startsWith('application/json')) {
        return fail(res, 415, 'UNSUPPORTED_MEDIA_TYPE', 'Use application/json.', cid, origin);
      }
      const body = await readBody(req);
      if (typeof body !== 'object' || body === null || Array.isArray(body)) return fail(res, 400, 'INVALID_REQUEST', 'Body must be an object.', cid, origin);
      if (Object.keys(body).some((k) => !SIM_KEYS.includes(k))) return fail(res, 400, 'INVALID_REQUEST', 'Unknown field.', cid, origin);
      const a = analyze(SYNTHETIC_RECORDS, cid);
      if (!a.hotspot) return fail(res, 422, 'NO_SAFE_RECOMMENDATION', 'No safe recommendation can be generated from the available data.', cid, origin);
      validateParams(body as Partial<AnalysisParams>, 'electricity');
      return send(res, 200, simulate(SYNTHETIC_RECORDS, a.hotspot.categoryId, a.hotspot.zoneId, body as Partial<AnalysisParams>, cid), cid, origin);
    }
    return fail(res, 404, 'NOT_FOUND', 'Resource not found.', cid, origin);
  } catch (e) {
    if (e instanceof CalcError) return fail(res, 400, e.code, e.message, cid, origin);
    const msg = (e as Error).message;
    if (msg === 'TOO_LARGE') return fail(res, 413, 'PAYLOAD_TOO_LARGE', 'Payload too large.', cid, origin);
    if (msg === 'BAD_JSON') return fail(res, 400, 'INVALID_REQUEST', 'Malformed JSON.', cid, origin);
    log('error', { correlationId: cid, name: (e as Error).name });
    return fail(res, 500, 'INTERNAL_ERROR', 'Something went wrong. Please try again later.', cid, origin);
  }
});

server.listen(PORT, () => log('listening', { port: PORT }));
