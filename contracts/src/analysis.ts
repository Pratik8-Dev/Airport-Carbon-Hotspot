import { CATEGORIES, DATASET_DAYS, DATASET_ID, EMISSION_FACTORS, UNIT_COST } from './data';
import {
  CalcError, assertRange, assertUnits, assertValue, avoidableEmissions, energyEmissions, idleEmissions,
  reductionPercentage, round1, round2, roundKg,
} from './calc';
import type {
  AnalysisParams, AnalysisResponse, AuditRecord, CandidateGroup, CategoryId, CategorySummary, EnergyType,
  Hotspot, OperationalRecord, OverviewResponse, Recommendation, RecommendationResponse, SimulationResult,
} from './types';
import { AIRPORT_META } from './data';

export const RULE_VERSION = 'hotspot-rules-1.0.0';
export const CONFIDENCE_THRESHOLD = 0.6;
export const MIN_COMPLETENESS = 0.7;
export const NO_SAFE_RECOMMENDATION = 'No safe recommendation can be generated from the available data.';
export const ADVISORY_DISCLAIMER =
  'Advisory only. Based on synthetic data and simulated estimates, not measured outcomes. ' +
  'Operational and safety procedures take precedence and any change requires review and approval by authorised airport operations and safety personnel.';

export const DEFAULT_PARAMS: AnalysisParams = { idleThresholdMinutes: 15, analysisDays: 30, equipmentEfficiencyPct: 85 };

export const PARAM_LIMITS = {
  idleThresholdMinutes: { min: 5, max: 60 },
  analysisDays: { min: 7, max: DATASET_DAYS },
  equipmentEfficiencyPct: { min: 50, max: 100 },
} as const;

const labelOf = (id: CategoryId): string => CATEGORIES.find((c) => c.id === id)?.label ?? id;

export function validateParams(input: Partial<AnalysisParams>, energyType?: EnergyType): AnalysisParams {
  const p: AnalysisParams = { ...DEFAULT_PARAMS, ...input };
  for (const k of ['idleThresholdMinutes', 'analysisDays', 'equipmentEfficiencyPct'] as const) {
    if (typeof p[k] !== 'number') throw new CalcError('MISSING_VALUE', `${k} must be a number`);
    assertRange(k, p[k], PARAM_LIMITS[k].min, PARAM_LIMITS[k].max);
  }
  if (p.emissionFactor !== undefined) {
    if (typeof p.emissionFactor !== 'number') throw new CalcError('MISSING_VALUE', 'emissionFactor must be a number');
    const f = EMISSION_FACTORS[energyType ?? 'electricity'];
    assertRange('emissionFactor', p.emissionFactor, f.min, f.max);
  }
  return p;
}

export function inputsHash(value: unknown): string {
  const s = JSON.stringify(value);
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(16).padStart(8, '0');
}

export function makeAudit(correlationId: string, inputs: unknown, now = new Date()): AuditRecord {
  return {
    ruleVersion: RULE_VERSION,
    analysisTimestamp: now.toISOString(),
    correlationId,
    inputsHash: inputsHash(inputs),
    datasetId: DATASET_ID,
  };
}

interface Stats {
  categoryId: CategoryId;
  zoneId: string;
  energyType: EnergyType;
  total: number;
  valid: number;
  measured: number;
  baselineKg: number;
  eligibleIdleHours: number;
  avoidableKg: number;
  avoidedEnergy: number;
  eligibleDays: Set<number>;
  hasEligibleCandidates: boolean;
}

function recordKg(r: OperationalRecord, factor: number): number {
  const f = EMISSION_FACTORS[r.energyType];
  assertUnits(r.energyType, r.rateUnit, f);
  return r.energyType === 'electricity'
    ? energyEmissions(assertValue('operatingHours', r.operatingHours) * r.rate, factor)
    : idleEmissions(r.operatingHours, r.rate, factor);
}

function collect(
  records: OperationalRecord[], params: AnalysisParams, overrideType?: EnergyType,
): Map<string, Stats> {
  const firstDay = DATASET_DAYS - params.analysisDays;
  const thr = params.idleThresholdMinutes / 60;
  const eff = params.equipmentEfficiencyPct / 100;
  const map = new Map<string, Stats>();
  for (const r of records) {
    if (r.day < firstDay) continue;
    const key = `${r.categoryId}|${r.zoneId}`;
    let s = map.get(key);
    if (!s) {
      s = {
        categoryId: r.categoryId, zoneId: r.zoneId, energyType: r.energyType, total: 0, valid: 0, measured: 0,
        baselineKg: 0, eligibleIdleHours: 0, avoidableKg: 0, avoidedEnergy: 0, eligibleDays: new Set(),
        hasEligibleCandidates: false,
      };
      map.set(key, s);
    }
    s.total++;
    if (r.alternativeAvailable && !r.safetyCritical) s.hasEligibleCandidates = true;
    try {
      if (r.quality === 'missing') throw new CalcError('MISSING_VALUE', 'missing');
      const idle = assertValue('idleHours', r.idleHours);
      const op = assertValue('operatingHours', r.operatingHours);
      if (idle > op) throw new CalcError('OUT_OF_RANGE', 'idle exceeds operating hours');
      const ef = overrideType === r.energyType && params.emissionFactor !== undefined
        ? params.emissionFactor : EMISSION_FACTORS[r.energyType].value;
      s.baselineKg += recordKg(r, ef);
      s.valid++;
      if (r.quality === 'measured') s.measured++;
      if (r.alternativeAvailable && !r.safetyCritical) {
        const over = Math.max(0, idle - thr);
        if (over > 0) {
          s.eligibleIdleHours += over;
          s.avoidedEnergy += over * r.rate * eff;
          s.avoidableKg += recordKg({ ...r, operatingHours: over }, ef) * eff;
          s.eligibleDays.add(r.day);
        }
      }
    } catch (e) {
      if (!(e instanceof CalcError)) throw e; // invalid record is excluded and lowers completeness
    }
  }
  return map;
}

export function analyze(records: OperationalRecord[], correlationId = 'n/a', now = new Date()): AnalysisResponse {
  const params = DEFAULT_PARAMS;
  const stats = [...collect(records, params).values()];
  const totalKg = stats.reduce((a, s) => a + s.baselineKg, 0);
  const totals = stats.reduce((a, s) => ({ t: a.t + s.total, v: a.v + s.valid }), { t: 0, v: 0 });
  const overallCompleteness = totals.t === 0 ? 0 : totals.v / totals.t;

  const candidates: CandidateGroup[] = stats.map((s) => {
    const completeness = s.total === 0 ? 0 : s.valid / s.total;
    const measuredShare = s.valid === 0 ? 0 : s.measured / s.valid;
    const repeatability = s.eligibleDays.size / params.analysisDays;
    const confidence = round2(Math.min(0.95, 0.4 * completeness + 0.3 * measuredShare + 0.3 * repeatability));
    const safetyEligible = s.hasEligibleCandidates && s.avoidableKg > 0;
    return {
      categoryId: s.categoryId, label: labelOf(s.categoryId), zoneId: s.zoneId,
      kgCO2e: roundKg(s.baselineKg), eligibleIdleHours: round1(s.eligibleIdleHours),
      avoidableKgCO2e: roundKg(s.avoidableKg),
      contributionPct: totalKg === 0 ? 0 : round1((s.baselineKg / totalKg) * 100),
      confidence,
      confidenceBreakdown: {
        completeness: round2(completeness), measuredShare: round2(measuredShare), repeatability: round2(repeatability),
      },
      safetyEligible, selected: false, reason: '',
    };
  });

  const rawAvoidable = new Map(stats.map((s) => [`${s.categoryId}|${s.zoneId}`, s.avoidableKg]));
  const eligible = candidates
    .filter((c) => c.safetyEligible && c.confidence >= CONFIDENCE_THRESHOLD)
    .sort((a, b) => (rawAvoidable.get(`${b.categoryId}|${b.zoneId}`) ?? 0) - (rawAvoidable.get(`${a.categoryId}|${a.zoneId}`) ?? 0));
  const winner = overallCompleteness >= MIN_COMPLETENESS ? eligible[0] : undefined;

  for (const c of candidates) {
    if (c === winner) {
      c.selected = true;
      c.reason = 'Largest estimated avoidable emissions among safety-eligible groups that meet the confidence threshold.';
    } else if (!c.safetyEligible) {
      c.reason = 'Not eligible: no safe lower-emission alternative, or the function is safety-critical or not reducible.';
    } else if (c.confidence < CONFIDENCE_THRESHOLD) {
      c.reason = 'Evidence strength is below the confidence threshold.';
    } else {
      c.reason = 'Eligible, but its estimated avoidable emissions are lower than the selected group.';
    }
  }
  candidates.sort((a, b) => b.avoidableKgCO2e - a.avoidableKgCO2e);

  const audit = makeAudit(correlationId, { params, datasetId: DATASET_ID }, now);
  let hotspot: Hotspot | null = null;
  if (winner) {
    const s = stats.find((x) => x.categoryId === winner.categoryId && x.zoneId === winner.zoneId)!;
    const idleShare = round1((s.eligibleIdleHours / Math.max(1, s.valid)) * 60);
    hotspot = {
      ...winner,
      baselinePeriod: { days: params.analysisDays, label: `Last ${params.analysisDays} days of the synthetic month` },
      supportingPattern:
        `Eligible idle time beyond ${params.idleThresholdMinutes} minutes occurs on ${s.eligibleDays.size} of ` +
        `${params.analysisDays} days (about ${idleShare} minutes per record), where a lower-emission alternative is available.`,
      selectionReason:
        `${winner.label} in ${winner.zoneId} has the largest estimated avoidable emissions (${winner.avoidableKgCO2e} kgCO2e) ` +
        `among eligible groups, with confidence ${winner.confidence} (threshold ${CONFIDENCE_THRESHOLD}).`,
      uncertainties: [
        'Records with missing measurements are excluded, so totals may be understated.',
        'Idle time is derived from synthetic logs and may include periods with an operational need not captured in the data.',
        'Emission factors are synthetic demonstration values.',
        'Correlation in the data does not establish causation.',
      ],
    };
  }
  return {
    ruleVersion: RULE_VERSION, analysisTimestamp: audit.analysisTimestamp, confidenceThreshold: CONFIDENCE_THRESHOLD,
    hotspot, noRecommendationMessage: hotspot ? null : NO_SAFE_RECOMMENDATION, candidates, audit,
  };
}

export function overview(records: OperationalRecord[], periodDays = DATASET_DAYS): OverviewResponse {
  const days = assertRange('periodDays', periodDays, PARAM_LIMITS.analysisDays.min, PARAM_LIMITS.analysisDays.max);
  const stats = [...collect(records, { ...DEFAULT_PARAMS, analysisDays: days }).values()];
  const byCat = new Map<CategoryId, number>();
  stats.forEach((s) => byCat.set(s.categoryId, (byCat.get(s.categoryId) ?? 0) + s.baselineKg));
  const total = [...byCat.values()].reduce((a, b) => a + b, 0);
  const categories: CategorySummary[] = CATEGORIES.map((c) => ({
    categoryId: c.id, label: c.label, kgCO2e: roundKg(byCat.get(c.id) ?? 0),
    sharePct: total === 0 ? 0 : round1(((byCat.get(c.id) ?? 0) / total) * 100),
  }));
  const t = stats.reduce((a, s) => ({ t: a.t + s.total, v: a.v + s.valid }), { t: 0, v: 0 });
  const completeness = t.t === 0 ? 0 : t.v / t.t;
  return {
    meta: AIRPORT_META, periodDays: days, totalKgCO2e: roundKg(total), categories,
    quality: {
      completenessPct: round1(completeness * 100),
      status: completeness >= 0.95 ? 'complete' : completeness >= MIN_COMPLETENESS ? 'partial' : 'insufficient',
    },
    valueKind: 'derived',
    syntheticNotice: 'Synthetic data: all values are fictional and for demonstration only.',
  };
}

export function simulate(
  records: OperationalRecord[], categoryId: CategoryId, zoneId: string, input: Partial<AnalysisParams>,
  correlationId = 'n/a', now = new Date(),
): SimulationResult {
  const energyType = records.find((r) => r.categoryId === categoryId && r.zoneId === zoneId)?.energyType;
  if (!energyType) throw new CalcError('MISSING_VALUE', 'hotspot group has no records');
  const params = validateParams(input, energyType);
  const key = `${categoryId}|${zoneId}`;
  const run = (p: AnalysisParams) => collect(records, p, energyType).get(key);

  const base = run(params);
  if (!base) throw new CalcError('MISSING_VALUE', 'no data in the selected period');
  const baseline = base.baselineKg;
  const reduction = base.avoidableKg;
  const simulated = baseline - reduction;
  avoidableEmissions(baseline, simulated);

  const f = EMISSION_FACTORS[energyType];
  const low = run({ ...params, emissionFactor: f.min, equipmentEfficiencyPct: Math.max(50, params.equipmentEfficiencyPct - 10) })?.avoidableKg ?? 0;
  const high = run({ ...params, emissionFactor: f.max, equipmentEfficiencyPct: Math.min(100, params.equipmentEfficiencyPct + 10) })?.avoidableKg ?? 0;
  const spread = high === 0 ? 0 : (high - low) / ((high + low) / 2);
  const unit = energyType === 'electricity' ? 'kWh' : 'L';
  const ef = params.emissionFactor ?? f.value;
  const audit = makeAudit(correlationId, { categoryId, zoneId, params }, now);
  return {
    params,
    baselineKgCO2e: roundKg(baseline),
    simulatedKgCO2e: roundKg(baseline) - roundKg(reduction),
    reductionKgCO2e: roundKg(reduction),
    reductionPct: round1(reductionPercentage(reduction, baseline)),
    avoidedEnergy: { amount: round1(base.avoidedEnergy), unit },
    estimatedCostSaving: { amount: roundKg(base.avoidedEnergy * UNIT_COST[energyType]), currency: 'SYN-USD' },
    sensitivity: { lowKgCO2e: roundKg(low), highKgCO2e: roundKg(high), level: spread < 0.25 ? 'low' : spread < 0.5 ? 'medium' : 'high' },
    valueKinds: { baseline: 'derived', simulated: 'simulated', reduction: 'simulated' },
    calculationSummary: [
      `Baseline = sum over valid records of operating hours × rate × emission factor (${ef} ${f.unit}) = ${roundKg(baseline)} kgCO2e (derived).`,
      `Eligible idle time = idle hours beyond ${params.idleThresholdMinutes} min on records with a safe lower-emission alternative = ${round1(base.eligibleIdleHours)} h.`,
      `Simulated reduction = eligible idle energy × ${params.equipmentEfficiencyPct}% equipment efficiency × factor = ${roundKg(reduction)} kgCO2e (estimate).`,
      `Simulated post-intervention = baseline − reduction = ${roundKg(simulated)} kgCO2e (estimate).`,
      'Rounded to whole kgCO2e and one decimal for percentages and energy.',
    ],
    disclaimer: ADVISORY_DISCLAIMER,
    audit,
  };
}

export function recommend(analysis: AnalysisResponse, sim: SimulationResult | null): RecommendationResponse {
  const h = analysis.hotspot;
  if (!h || !sim) {
    return { recommendation: null, noRecommendationMessage: NO_SAFE_RECOMMENDATION, audit: analysis.audit };
  }
  const recommendation: Recommendation = {
    action:
      `Reduce unnecessary auxiliary-power operation at ${h.zoneId} stands during eligible idle periods (longer than ` +
      `${sim.params.idleThresholdMinutes} minutes) by using available fixed electrical ground power, after authorised operational review.`,
    rationale: h.supportingPattern,
    expectedReductionKgCO2e: sim.reductionKgCO2e,
    effort: 'Low',
    costCategory: 'Low: procedural review and briefing; no new equipment assumed',
    assumptions: [
      `Emission factor ${EMISSION_FACTORS.electricity.value} kgCO2e/kWh (synthetic).`,
      `${sim.params.equipmentEfficiencyPct}% of eligible idle energy is assumed avoidable.`,
      'Aircraft turnaround, cabin conditioning, and safety-critical operations are unaffected.',
    ],
    dependencies: ['Fixed ground power serviceable and assigned to the stand', 'Review by operations and safety personnel', 'Ground-handling coordination'],
    limitations: [
      'Applies only where it is operationally and safely permitted; weather, aircraft type and airline procedures may preclude it.',
      'Does not apply to safety-critical, emergency or security-related functions.',
      'Not an instruction; no equipment is controlled by this tool.',
    ],
    reversibility: 'Fully reversible: the current practice can be resumed at any time.',
    humanReview: 'Mandatory review and approval by authorised airport operations and safety personnel before any change.',
    advisoryOnly: true,
    disclaimer: ADVISORY_DISCLAIMER,
  };
  return { recommendation, noRecommendationMessage: null, audit: sim.audit };
}
