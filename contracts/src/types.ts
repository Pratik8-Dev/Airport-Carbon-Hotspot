// Domain models shared by the mock API, the Angular host and the React remote.
// All values are SYNTHETIC and fictional.

export type CategoryId =
  | 'gate-aux-power'
  | 'terminal-hvac'
  | 'ground-vehicles'
  | 'terminal-lighting'
  | 'passenger-transport';

export type EnergyType = 'electricity' | 'diesel';
export type RateUnit = 'kWh/h' | 'L/h';
export type FactorUnit = 'kgCO2e/kWh' | 'kgCO2e/L';
export type DataQuality = 'measured' | 'derived' | 'missing';
export type ValueKind = 'measured' | 'derived' | 'simulated';

export interface EmissionFactor {
  energyType: EnergyType;
  unit: FactorUnit;
  value: number;
  min: number;
  max: number;
  source: 'synthetic';
  note: string;
}

export interface CategoryInfo {
  id: CategoryId;
  label: string;
}

export interface OperationalRecord {
  recordId: string;
  day: number; // 0..29, 29 = most recent day of the synthetic month
  categoryId: CategoryId;
  zoneId: string; // fictional zone identifier
  operatingHours: number | null; // null = missing measurement
  idleHours: number | null; // hours within operatingHours with no operational need identified
  rate: number; // energy or fuel use per operating hour
  rateUnit: RateUnit;
  energyType: EnergyType;
  alternativeAvailable: boolean; // a lower-emission alternative exists (e.g. fixed power, dimming)
  safetyCritical: boolean; // safety, security, accessibility or emergency function: never eligible
  quality: DataQuality;
}

export interface AirportMeta {
  airportId: string;
  terminalId: string;
  name: string;
  synthetic: true;
  datasetRefreshedAt: string;
}

export interface AnalysisParams {
  idleThresholdMinutes: number; // 5..60
  analysisDays: number; // 7..30
  emissionFactor?: number; // within the validated range of the hotspot energy type
  equipmentEfficiencyPct: number; // 50..100
}

export interface CategorySummary {
  categoryId: CategoryId;
  label: string;
  kgCO2e: number;
  sharePct: number;
}

export interface OverviewResponse {
  meta: AirportMeta;
  periodDays: number;
  totalKgCO2e: number;
  categories: CategorySummary[];
  quality: { completenessPct: number; status: 'complete' | 'partial' | 'insufficient' };
  valueKind: ValueKind;
  syntheticNotice: string;
}

export interface CandidateGroup {
  categoryId: CategoryId;
  label: string;
  zoneId: string;
  kgCO2e: number;
  eligibleIdleHours: number;
  avoidableKgCO2e: number;
  contributionPct: number;
  confidence: number;
  confidenceBreakdown: { completeness: number; measuredShare: number; repeatability: number };
  safetyEligible: boolean;
  selected: boolean;
  reason: string;
}

export interface Hotspot extends CandidateGroup {
  baselinePeriod: { days: number; label: string };
  supportingPattern: string;
  selectionReason: string;
  uncertainties: string[];
}

export interface AnalysisResponse {
  ruleVersion: string;
  analysisTimestamp: string;
  confidenceThreshold: number;
  hotspot: Hotspot | null;
  noRecommendationMessage: string | null;
  candidates: CandidateGroup[];
  audit: AuditRecord;
}

export interface Recommendation {
  action: string;
  rationale: string;
  expectedReductionKgCO2e: number;
  effort: 'Low' | 'Medium' | 'High';
  costCategory: string;
  assumptions: string[];
  dependencies: string[];
  limitations: string[];
  reversibility: string;
  humanReview: string;
  advisoryOnly: true;
  disclaimer: string;
}

export interface RecommendationResponse {
  recommendation: Recommendation | null;
  noRecommendationMessage: string | null;
  audit: AuditRecord;
}

export interface SimulationResult {
  params: AnalysisParams;
  baselineKgCO2e: number;
  simulatedKgCO2e: number;
  reductionKgCO2e: number;
  reductionPct: number;
  avoidedEnergy: { amount: number; unit: 'kWh' | 'L' };
  estimatedCostSaving: { amount: number; currency: 'SYN-USD' };
  sensitivity: {
    lowKgCO2e: number;
    highKgCO2e: number;
    level: 'low' | 'medium' | 'high';
  };
  valueKinds: { baseline: ValueKind; simulated: ValueKind; reduction: ValueKind };
  calculationSummary: string[];
  disclaimer: string;
  audit: AuditRecord;
}

export interface AuditRecord {
  ruleVersion: string;
  analysisTimestamp: string;
  correlationId: string;
  inputsHash: string; // non-cryptographic fingerprint of inputs, for traceability only
  datasetId: string;
}

export interface MethodologyResponse {
  ruleVersion: string;
  datasetId: string;
  dataSources: string[];
  fields: { name: string; type: string; unit: string; description: string; required: boolean; example: string; validation: string }[];
  formulas: { name: string; formula: string; variables: string[]; source: string; rounding: string }[];
  emissionFactors: EmissionFactor[];
  assumptions: string[];
  limitations: string[];
  confidenceExplanation: string;
  selectionExplanation: string;
  safetyStatement: string;
  retention: string;
}

export interface ApiError {
  error: { code: string; message: string; correlationId: string };
}
