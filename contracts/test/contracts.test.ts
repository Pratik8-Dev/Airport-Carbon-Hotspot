import { describe, expect, it } from 'vitest';
import {
  CalcError, DEFAULT_PARAMS, NO_SAFE_RECOMMENDATION, SYNTHETIC_RECORDS, analyze, avoidableEmissions, energyEmissions,
  idleEmissions, overview, recommend, reductionPercentage, roundKg, round1, simulate, assertUnits, EMISSION_FACTORS,
  EVENT_NAMES, parseEventDetail, isAllowedRemoteUrl, isCompatibleRemote, CONTRACT_VERSION,
} from '../src';
import type { OperationalRecord } from '../src';

const code = (fn: () => unknown): string | undefined => {
  try { fn(); } catch (e) { return (e as CalcError).code; }
  return undefined;
};

describe('calculations', () => {
  it('computes energy and idle emissions', () => {
    expect(energyEmissions(100, 0.4)).toBeCloseTo(40);
    expect(idleEmissions(2, 4.5, 2.7)).toBeCloseTo(24.3);
  });
  it('computes avoidable emissions and percentage', () => {
    expect(avoidableEmissions(100, 70)).toBe(30);
    expect(reductionPercentage(30, 100)).toBe(30);
  });
  it('handles zero baseline', () => expect(reductionPercentage(0, 0)).toBe(0));
  it('rejects missing, negative and out-of-range values', () => {
    expect(code(() => energyEmissions(null, 0.4))).toBe('MISSING_VALUE');
    expect(code(() => energyEmissions(-1, 0.4))).toBe('NEGATIVE_VALUE');
    expect(code(() => energyEmissions(Infinity, 0.4))).toBe('OUT_OF_RANGE');
    expect(code(() => avoidableEmissions(10, 20))).toBe('OUT_OF_RANGE');
  });
  it('rejects unit mismatch', () => {
    expect(code(() => assertUnits('electricity', 'L/h', EMISSION_FACTORS.electricity))).toBe('UNIT_MISMATCH');
  });
  it('rounds without false precision', () => {
    expect(roundKg(1234.56)).toBe(1235);
    expect(round1(12.345)).toBe(12.3);
  });
});

describe('hotspot analysis', () => {
  it('selects exactly one hotspot (gate auxiliary power, PIER-B)', () => {
    const a = analyze(SYNTHETIC_RECORDS);
    expect(a.candidates.filter((c) => c.selected)).toHaveLength(1);
    expect(a.hotspot?.categoryId).toBe('gate-aux-power');
    expect(a.hotspot?.zoneId).toBe('PIER-B');
    expect(a.hotspot!.confidence).toBeGreaterThanOrEqual(a.confidenceThreshold);
  });
  it('never selects safety-critical groups', () => {
    const a = analyze(SYNTHETIC_RECORDS);
    const crit = a.candidates.filter((c) => c.zoneId === 'EXIT-PATHS' || c.zoneId === 'APRON-EMERG');
    crit.forEach((c) => expect(c.selected).toBe(false));
  });
  it('returns no safe recommendation when data is incomplete', () => {
    const broken: OperationalRecord[] = SYNTHETIC_RECORDS.map((r) => ({ ...r, operatingHours: null, idleHours: null, quality: 'missing' }));
    const a = analyze(broken);
    expect(a.hotspot).toBeNull();
    expect(a.noRecommendationMessage).toBe(NO_SAFE_RECOMMENDATION);
    expect(recommend(a, null).recommendation).toBeNull();
  });
  it('returns no safe recommendation below the confidence threshold', () => {
    const lowQuality = SYNTHETIC_RECORDS.map((r) => ({ ...r, quality: 'derived' as const }));
    const noDays = analyze(lowQuality.filter((r) => r.day === 29));
    expect(noDays.hotspot).toBeNull();
  });
});

describe('simulation', () => {
  it('reduces emissions and labels values', () => {
    const s = simulate(SYNTHETIC_RECORDS, 'gate-aux-power', 'PIER-B', {});
    expect(s.simulatedKgCO2e).toBeLessThan(s.baselineKgCO2e);
    expect(s.baselineKgCO2e - s.simulatedKgCO2e).toBe(s.reductionKgCO2e);
    expect(s.valueKinds.simulated).toBe('simulated');
    expect(s.disclaimer).toMatch(/Advisory only/);
  });
  it('validates input ranges', () => {
    expect(code(() => simulate(SYNTHETIC_RECORDS, 'gate-aux-power', 'PIER-B', { emissionFactor: 5 }))).toBe('OUT_OF_RANGE');
    expect(code(() => simulate(SYNTHETIC_RECORDS, 'gate-aux-power', 'PIER-B', { idleThresholdMinutes: -1 }))).toBe('OUT_OF_RANGE');
    expect(code(() => simulate(SYNTHETIC_RECORDS, 'gate-aux-power', 'PIER-B', { analysisDays: 3 }))).toBe('OUT_OF_RANGE');
  });
  it('a longer threshold lowers the reduction', () => {
    const a = simulate(SYNTHETIC_RECORDS, 'gate-aux-power', 'PIER-B', { idleThresholdMinutes: 5 });
    const b = simulate(SYNTHETIC_RECORDS, 'gate-aux-power', 'PIER-B', { idleThresholdMinutes: 45 });
    expect(b.reductionKgCO2e).toBeLessThan(a.reductionKgCO2e);
    expect(DEFAULT_PARAMS.idleThresholdMinutes).toBe(15);
  });
});

describe('overview', () => {
  it('sums categories', () => {
    const o = overview(SYNTHETIC_RECORDS);
    expect(o.categories).toHaveLength(5);
    expect(Math.abs(o.categories.reduce((a, c) => a + c.kgCO2e, 0) - o.totalKgCO2e)).toBeLessThan(5);
  });
});

describe('event contract', () => {
  it('validates payloads at runtime', () => {
    expect(parseEventDetail(EVENT_NAMES.analysisStarted, { v: 1, correlationId: 'abc-1' })).not.toBeNull();
    expect(parseEventDetail(EVENT_NAMES.analysisStarted, { v: 2, correlationId: 'abc-1' })).toBeNull();
    expect(parseEventDetail(EVENT_NAMES.analysisFailed, { v: 1, correlationId: 'x', code: 'BAD' })).toBeNull();
    expect(parseEventDetail(EVENT_NAMES.analysisCompleted, { v: 1, correlationId: 'x', hotspotFound: true, reductionKgCO2e: -1 })).toBeNull();
    expect(parseEventDetail(EVENT_NAMES.recommendationSelected, { v: 1, correlationId: 'x', categoryId: '<script>', zoneId: 'Z' })).toBeNull();
  });
  it('checks remote allowlist and version', () => {
    expect(isAllowedRemoteUrl('http://localhost:4201/remoteEntry.js', ['http://localhost:4201'])).toBe(true);
    expect(isAllowedRemoteUrl('https://evil.example/remoteEntry.js', ['http://localhost:4201'])).toBe(false);
    expect(isCompatibleRemote({ contractVersion: CONTRACT_VERSION + 1, mount: () => ({ update() {}, unmount() {} }) })).toBe(false);
  });
});
