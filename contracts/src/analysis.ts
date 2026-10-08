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

/** Weights used by {@link calculateConfidence}; must sum to 1 so the result stays within [0, confidenceCap]. */
const CONFIDENCE_WEIGHT_COMPLETENESS = 0.4;
const CONFIDENCE_WEIGHT_MEASURED_SHARE = 0.3;
const CONFIDENCE_WEIGHT_REPEATABILITY = 0.3;
/** Confidence never reaches absolute certainty, even with perfect synthetic evidence. */
const CONFIDENCE_CAP = 0.95;
/** Overall dataset completeness at or above this ratio is reported as "complete" rather than "partial". */
const COMPLETE_DATA_COMPLETENESS_THRESHOLD = 0.95;
/** Sensitivity-band thresholds (relative spread between the low and high bound) used by {@link simulate}. */
const SENSITIVITY_LOW_SPREAD_THRESHOLD = 0.25;
const SENSITIVITY_MEDIUM_SPREAD_THRESHOLD = 0.5;
/** How far the equipment-efficiency assumption is nudged up/down to compute the sensitivity bounds. */
const SENSITIVITY_EFFICIENCY_DELTA_PCT = 10;
const MINUTES_PER_HOUR = 60;

const getCategoryLabel = (categoryId: CategoryId): string =>
  CATEGORIES.find((category) => category.id === categoryId)?.label ?? categoryId;

/** Builds the stable key used to group {@link OperationalRecord}s by category and zone. */
const buildGroupKey = (categoryId: CategoryId, zoneId: string): string => `${categoryId}|${zoneId}`;

export function validateParams(input: Partial<AnalysisParams>, energyType?: EnergyType): AnalysisParams {
  const mergedParams: AnalysisParams = { ...DEFAULT_PARAMS, ...input };
  for (const paramKey of ['idleThresholdMinutes', 'analysisDays', 'equipmentEfficiencyPct'] as const) {
    if (typeof mergedParams[paramKey] !== 'number') throw new CalcError('MISSING_VALUE', `${paramKey} must be a number`);
    assertRange(paramKey, mergedParams[paramKey], PARAM_LIMITS[paramKey].min, PARAM_LIMITS[paramKey].max);
  }
  if (mergedParams.emissionFactor !== undefined) {
    if (typeof mergedParams.emissionFactor !== 'number') throw new CalcError('MISSING_VALUE', 'emissionFactor must be a number');
    const emissionFactor = EMISSION_FACTORS[energyType ?? 'electricity'];
    assertRange('emissionFactor', mergedParams.emissionFactor, emissionFactor.min, emissionFactor.max);
  }
  return mergedParams;
}

/** Non-cryptographic djb2 hash, used only to fingerprint audit inputs for traceability (never for security). */
export function inputsHash(value: unknown): string {
  const serialized = JSON.stringify(value);
  let hash = 5381;
  for (let charIndex = 0; charIndex < serialized.length; charIndex++) {
    hash = ((hash << 5) + hash + serialized.charCodeAt(charIndex)) | 0;
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
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

/** Per category+zone group accumulator built by {@link aggregateByGroup}. Internal to this module. */
interface GroupAggregate {
  categoryId: CategoryId;
  zoneId: string;
  energyType: EnergyType;
  recordCount: number;
  validRecordCount: number;
  measuredRecordCount: number;
  baselineKg: number;
  eligibleIdleHours: number;
  avoidableKg: number;
  avoidedEnergy: number;
  eligibleDays: Set<number>;
  hasEligibleRecords: boolean;
}

/** Sums valid vs. total record counts across groups, used to derive a completeness ratio. */
function sumRecordCompleteness(groups: readonly GroupAggregate[]): { totalRecords: number; validRecords: number } {
  return groups.reduce(
    (totals, group) => ({
      totalRecords: totals.totalRecords + group.recordCount,
      validRecords: totals.validRecords + group.validRecordCount,
    }),
    { totalRecords: 0, validRecords: 0 },
  );
}

function calculateRecordEmissionsKg(record: OperationalRecord, emissionFactorValue: number): number {
  const emissionFactor = EMISSION_FACTORS[record.energyType];
  assertUnits(record.energyType, record.rateUnit, emissionFactor);
  return record.energyType === 'electricity'
    ? energyEmissions(assertValue('operatingHours', record.operatingHours) * record.rate, emissionFactorValue)
    : idleEmissions(record.operatingHours, record.rate, emissionFactorValue);
}

/**
 * Aggregates operational records into one {@link GroupAggregate} per category+zone, restricted to the
 * requested analysis window. Records that fail validation (missing or inconsistent values) are skipped and
 * only lower the group's completeness; they never throw out of this function.
 */
function aggregateByGroup(
  records: OperationalRecord[], params: AnalysisParams, emissionFactorOverrideType?: EnergyType,
): Map<string, GroupAggregate> {
  const firstIncludedDay = DATASET_DAYS - params.analysisDays;
  const idleThresholdHours = params.idleThresholdMinutes / MINUTES_PER_HOUR;
  const efficiencyRatio = params.equipmentEfficiencyPct / 100;
  const groups = new Map<string, GroupAggregate>();

  for (const record of records) {
    if (record.day < firstIncludedDay) continue;
    const groupKey = buildGroupKey(record.categoryId, record.zoneId);
    let group = groups.get(groupKey);
    if (!group) {
      group = {
        categoryId: record.categoryId, zoneId: record.zoneId, energyType: record.energyType,
        recordCount: 0, validRecordCount: 0, measuredRecordCount: 0, baselineKg: 0, eligibleIdleHours: 0,
        avoidableKg: 0, avoidedEnergy: 0, eligibleDays: new Set(), hasEligibleRecords: false,
      };
      groups.set(groupKey, group);
    }
    group.recordCount++;
    const isSafeToReduce = record.alternativeAvailable && !record.safetyCritical;
    if (isSafeToReduce) group.hasEligibleRecords = true;

    try {
      if (record.quality === 'missing') throw new CalcError('MISSING_VALUE', 'missing');
      const idleHours = assertValue('idleHours', record.idleHours);
      const operatingHours = assertValue('operatingHours', record.operatingHours);
      if (idleHours > operatingHours) throw new CalcError('OUT_OF_RANGE', 'idle exceeds operating hours');

      const emissionFactorValue = emissionFactorOverrideType === record.energyType && params.emissionFactor !== undefined
        ? params.emissionFactor : EMISSION_FACTORS[record.energyType].value;
      group.baselineKg += calculateRecordEmissionsKg(record, emissionFactorValue);
      group.validRecordCount++;
      if (record.quality === 'measured') group.measuredRecordCount++;

      if (isSafeToReduce) {
        const eligibleOverageHours = Math.max(0, idleHours - idleThresholdHours);
        if (eligibleOverageHours > 0) {
          group.eligibleIdleHours += eligibleOverageHours;
          group.avoidedEnergy += eligibleOverageHours * record.rate * efficiencyRatio;
          group.avoidableKg += calculateRecordEmissionsKg({ ...record, operatingHours: eligibleOverageHours }, emissionFactorValue) * efficiencyRatio;
          group.eligibleDays.add(record.day);
        }
      }
    } catch (error) {
      // An invalid record is excluded from the baseline and lowers completeness; any other error is unexpected and rethrown.
      if (!(error instanceof CalcError)) throw error;
    }
  }
  return groups;
}

/** Evidence-strength score in [0, {@link CONFIDENCE_CAP}]; higher means the pattern is better supported by data, not that it is certain. */
function calculateConfidence(completeness: number, measuredShare: number, repeatability: number): number {
  return round2(Math.min(
    CONFIDENCE_CAP,
    CONFIDENCE_WEIGHT_COMPLETENESS * completeness +
      CONFIDENCE_WEIGHT_MEASURED_SHARE * measuredShare +
      CONFIDENCE_WEIGHT_REPEATABILITY * repeatability,
  ));
}

/** Converts one {@link GroupAggregate} into the public {@link CandidateGroup} shape (selection fields left blank). */
function toCandidateGroup(group: GroupAggregate, totalEmissionsKg: number, analysisDays: number): CandidateGroup {
  const completeness = group.recordCount === 0 ? 0 : group.validRecordCount / group.recordCount;
  const measuredShare = group.validRecordCount === 0 ? 0 : group.measuredRecordCount / group.validRecordCount;
  const repeatability = group.eligibleDays.size / analysisDays;
  return {
    categoryId: group.categoryId, label: getCategoryLabel(group.categoryId), zoneId: group.zoneId,
    kgCO2e: roundKg(group.baselineKg), eligibleIdleHours: round1(group.eligibleIdleHours),
    avoidableKgCO2e: roundKg(group.avoidableKg),
    contributionPct: totalEmissionsKg === 0 ? 0 : round1((group.baselineKg / totalEmissionsKg) * 100),
    confidence: calculateConfidence(completeness, measuredShare, repeatability),
    confidenceBreakdown: {
      completeness: round2(completeness), measuredShare: round2(measuredShare), repeatability: round2(repeatability),
    },
    safetyEligible: group.hasEligibleRecords && group.avoidableKg > 0,
    selected: false,
    reason: '',
  };
}

/** Explains, in plain language, why a candidate was or was not selected as the hotspot. */
function explainCandidateOutcome(candidate: CandidateGroup, isSelected: boolean): string {
  if (isSelected) return 'Largest estimated avoidable emissions among safety-eligible groups that meet the confidence threshold.';
  if (!candidate.safetyEligible) return 'Not eligible: no safe lower-emission alternative, or the function is safety-critical or not reducible.';
  if (candidate.confidence < CONFIDENCE_THRESHOLD) return 'Evidence strength is below the confidence threshold.';
  return 'Eligible, but its estimated avoidable emissions are lower than the selected group.';
}

export function analyze(records: OperationalRecord[], correlationId = 'n/a', now = new Date()): AnalysisResponse {
  const params = DEFAULT_PARAMS;
  const groupStats = [...aggregateByGroup(records, params).values()];
  const totalEmissionsKg = groupStats.reduce((sum, group) => sum + group.baselineKg, 0);
  const { totalRecords, validRecords } = sumRecordCompleteness(groupStats);
  const overallCompleteness = totalRecords === 0 ? 0 : validRecords / totalRecords;

  const candidates: CandidateGroup[] = groupStats.map((group) => toCandidateGroup(group, totalEmissionsKg, params.analysisDays));

  const avoidableKgByGroupKey = new Map(groupStats.map((group) => [buildGroupKey(group.categoryId, group.zoneId), group.avoidableKg]));
  const eligibleCandidates = candidates
    .filter((candidate) => candidate.safetyEligible && candidate.confidence >= CONFIDENCE_THRESHOLD)
    .sort((candidateA, candidateB) => {
      const avoidableA = avoidableKgByGroupKey.get(buildGroupKey(candidateA.categoryId, candidateA.zoneId)) ?? 0;
      const avoidableB = avoidableKgByGroupKey.get(buildGroupKey(candidateB.categoryId, candidateB.zoneId)) ?? 0;
      return avoidableB - avoidableA;
    });
  const selectedCandidate = overallCompleteness >= MIN_COMPLETENESS ? eligibleCandidates[0] : undefined;

  for (const candidate of candidates) {
    const isSelected = candidate === selectedCandidate;
    candidate.selected = isSelected;
    candidate.reason = explainCandidateOutcome(candidate, isSelected);
  }
  candidates.sort((candidateA, candidateB) => candidateB.avoidableKgCO2e - candidateA.avoidableKgCO2e);

  const audit = makeAudit(correlationId, { params, datasetId: DATASET_ID }, now);
  let hotspot: Hotspot | null = null;
  if (selectedCandidate) {
    const winningGroupStats = groupStats.find(
      (group) => group.categoryId === selectedCandidate.categoryId && group.zoneId === selectedCandidate.zoneId,
    )!;
    const avgEligibleIdleMinutesPerRecord = round1(
      (winningGroupStats.eligibleIdleHours / Math.max(1, winningGroupStats.validRecordCount)) * MINUTES_PER_HOUR,
    );
    hotspot = {
      ...selectedCandidate,
      baselinePeriod: { days: params.analysisDays, label: `Last ${params.analysisDays} days of the synthetic month` },
      supportingPattern:
        `Eligible idle time beyond ${params.idleThresholdMinutes} minutes occurs on ${winningGroupStats.eligibleDays.size} of ` +
        `${params.analysisDays} days (about ${avgEligibleIdleMinutesPerRecord} minutes per record), where a lower-emission alternative is available.`,
      selectionReason:
        `${selectedCandidate.label} in ${selectedCandidate.zoneId} has the largest estimated avoidable emissions ` +
        `(${selectedCandidate.avoidableKgCO2e} kgCO2e) among eligible groups, with confidence ${selectedCandidate.confidence} ` +
        `(threshold ${CONFIDENCE_THRESHOLD}).`,
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
  const groupStats = [...aggregateByGroup(records, { ...DEFAULT_PARAMS, analysisDays: days }).values()];
  const emissionsByCategoryId = new Map<CategoryId, number>();
  groupStats.forEach((group) => emissionsByCategoryId.set(group.categoryId, (emissionsByCategoryId.get(group.categoryId) ?? 0) + group.baselineKg));
  const totalEmissionsKg = [...emissionsByCategoryId.values()].reduce((sum, value) => sum + value, 0);
  const categories: CategorySummary[] = CATEGORIES.map((category) => ({
    categoryId: category.id, label: category.label, kgCO2e: roundKg(emissionsByCategoryId.get(category.id) ?? 0),
    sharePct: totalEmissionsKg === 0 ? 0 : round1(((emissionsByCategoryId.get(category.id) ?? 0) / totalEmissionsKg) * 100),
  }));
  const { totalRecords, validRecords } = sumRecordCompleteness(groupStats);
  const completeness = totalRecords === 0 ? 0 : validRecords / totalRecords;
  return {
    meta: AIRPORT_META, periodDays: days, totalKgCO2e: roundKg(totalEmissionsKg), categories,
    quality: {
      completenessPct: round1(completeness * 100),
      status: completeness >= COMPLETE_DATA_COMPLETENESS_THRESHOLD ? 'complete' : completeness >= MIN_COMPLETENESS ? 'partial' : 'insufficient',
    },
    valueKind: 'derived',
    syntheticNotice: 'Synthetic data: all values are fictional and for demonstration only.',
  };
}

export function simulate(
  records: OperationalRecord[], categoryId: CategoryId, zoneId: string, input: Partial<AnalysisParams>,
  correlationId = 'n/a', now = new Date(),
): SimulationResult {
  const energyType = records.find((record) => record.categoryId === categoryId && record.zoneId === zoneId)?.energyType;
  if (!energyType) throw new CalcError('MISSING_VALUE', 'hotspot group has no records');
  const params = validateParams(input, energyType);
  const groupKey = buildGroupKey(categoryId, zoneId);
  const runScenario = (scenarioParams: AnalysisParams) => aggregateByGroup(records, scenarioParams, energyType).get(groupKey);

  const baselineGroupStats = runScenario(params);
  if (!baselineGroupStats) throw new CalcError('MISSING_VALUE', 'no data in the selected period');
  const baselineEmissionsKg = baselineGroupStats.baselineKg;
  const reductionKg = baselineGroupStats.avoidableKg;
  const simulatedEmissionsKg = baselineEmissionsKg - reductionKg;
  avoidableEmissions(baselineEmissionsKg, simulatedEmissionsKg);

  const emissionFactor = EMISSION_FACTORS[energyType];
  const lowBoundAvoidableKg = runScenario({
    ...params, emissionFactor: emissionFactor.min,
    equipmentEfficiencyPct: Math.max(50, params.equipmentEfficiencyPct - SENSITIVITY_EFFICIENCY_DELTA_PCT),
  })?.avoidableKg ?? 0;
  const highBoundAvoidableKg = runScenario({
    ...params, emissionFactor: emissionFactor.max,
    equipmentEfficiencyPct: Math.min(100, params.equipmentEfficiencyPct + SENSITIVITY_EFFICIENCY_DELTA_PCT),
  })?.avoidableKg ?? 0;
  const sensitivitySpread = highBoundAvoidableKg === 0
    ? 0 : (highBoundAvoidableKg - lowBoundAvoidableKg) / ((highBoundAvoidableKg + lowBoundAvoidableKg) / 2);
  const energyUnit = energyType === 'electricity' ? 'kWh' : 'L';
  const appliedEmissionFactor = params.emissionFactor ?? emissionFactor.value;
  const audit = makeAudit(correlationId, { categoryId, zoneId, params }, now);
  return {
    params,
    baselineKgCO2e: roundKg(baselineEmissionsKg),
    simulatedKgCO2e: roundKg(baselineEmissionsKg) - roundKg(reductionKg),
    reductionKgCO2e: roundKg(reductionKg),
    reductionPct: round1(reductionPercentage(reductionKg, baselineEmissionsKg)),
    avoidedEnergy: { amount: round1(baselineGroupStats.avoidedEnergy), unit: energyUnit },
    estimatedCostSaving: { amount: roundKg(baselineGroupStats.avoidedEnergy * UNIT_COST[energyType]), currency: 'SYN-USD' },
    sensitivity: {
      lowKgCO2e: roundKg(lowBoundAvoidableKg), highKgCO2e: roundKg(highBoundAvoidableKg),
      level: sensitivitySpread < SENSITIVITY_LOW_SPREAD_THRESHOLD ? 'low' : sensitivitySpread < SENSITIVITY_MEDIUM_SPREAD_THRESHOLD ? 'medium' : 'high',
    },
    valueKinds: { baseline: 'derived', simulated: 'simulated', reduction: 'simulated' },
    calculationSummary: [
      `Baseline = sum over valid records of operating hours × rate × emission factor (${appliedEmissionFactor} ${emissionFactor.unit}) = ${roundKg(baselineEmissionsKg)} kgCO2e (derived).`,
      `Eligible idle time = idle hours beyond ${params.idleThresholdMinutes} min on records with a safe lower-emission alternative = ${round1(baselineGroupStats.eligibleIdleHours)} h.`,
      `Simulated reduction = eligible idle energy × ${params.equipmentEfficiencyPct}% equipment efficiency × factor = ${roundKg(reductionKg)} kgCO2e (estimate).`,
      `Simulated post-intervention = baseline − reduction = ${roundKg(simulatedEmissionsKg)} kgCO2e (estimate).`,
      'Rounded to whole kgCO2e and one decimal for percentages and energy.',
    ],
    disclaimer: ADVISORY_DISCLAIMER,
    audit,
  };
}

export function recommend(analysis: AnalysisResponse, sim: SimulationResult | null): RecommendationResponse {
  const hotspot = analysis.hotspot;
  if (!hotspot || !sim) {
    return { recommendation: null, noRecommendationMessage: NO_SAFE_RECOMMENDATION, audit: analysis.audit };
  }
  const recommendation: Recommendation = {
    action:
      `Reduce unnecessary auxiliary-power operation at ${hotspot.zoneId} stands during eligible idle periods (longer than ` +
      `${sim.params.idleThresholdMinutes} minutes) by using available fixed electrical ground power, after authorised operational review.`,
    rationale: hotspot.supportingPattern,
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
