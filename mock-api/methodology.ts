import { CONFIDENCE_THRESHOLD, DATASET_ID, EMISSION_FACTORS, MIN_COMPLETENESS, RULE_VERSION } from '../contracts/src';
import type { MethodologyResponse } from '../contracts/src';

export const METHODOLOGY: MethodologyResponse = {
  ruleVersion: RULE_VERSION,
  datasetId: DATASET_ID,
  dataSources: [
    'Synthetic operational activity records (gate power, HVAC, vehicles, lighting, shuttles), generated deterministically.',
    'Synthetic emission factors (demonstration values, not validated).',
  ],
  fields: [
    { name: 'operatingHours', type: 'number | null', unit: 'h', description: 'Hours the source operated in the record.', required: true, example: '1.4', validation: '>= 0, finite; null = missing' },
    { name: 'idleHours', type: 'number | null', unit: 'h', description: 'Hours within operating time with no identified operational need.', required: true, example: '0.7', validation: '0 <= idleHours <= operatingHours' },
    { name: 'rate', type: 'number', unit: 'kWh/h or L/h', description: 'Energy or fuel use per operating hour.', required: true, example: '60', validation: '>= 0; unit must match energy type' },
    { name: 'zoneId', type: 'string', unit: '-', description: 'Fictional zone identifier.', required: true, example: 'PIER-B', validation: '[A-Z0-9-]{1,32}' },
    { name: 'alternativeAvailable', type: 'boolean', unit: '-', description: 'A lower-emission alternative exists.', required: true, example: 'true', validation: 'boolean' },
    { name: 'safetyCritical', type: 'boolean', unit: '-', description: 'Safety, security, accessibility or emergency function; never eligible.', required: true, example: 'false', validation: 'boolean' },
    { name: 'quality', type: 'measured | derived | missing', unit: '-', description: 'Evidence quality of the record.', required: true, example: 'measured', validation: 'enum' },
  ],
  formulas: [
    { name: 'Energy emissions', formula: 'emissionsKgCO2e = energyKWh × emissionFactorKgCO2ePerKWh', variables: ['energyKWh (kWh) = operatingHours × rate', 'emissionFactor (kgCO2e/kWh)'], source: 'synthetic, configurable within validated range', rounding: 'Whole kgCO2e' },
    { name: 'Vehicle idling emissions', formula: 'emissionsKgCO2e = hours × fuelUsePerHour × fuelEmissionFactor', variables: ['hours (h)', 'fuelUsePerHour (L/h)', 'fuelEmissionFactor (kgCO2e/L)'], source: 'synthetic', rounding: 'Whole kgCO2e' },
    { name: 'Avoidable emissions', formula: 'avoidableEmissions = baselineEmissions - simulatedPostInterventionEmissions', variables: ['baselineEmissions (kgCO2e)', 'simulatedPostInterventionEmissions (kgCO2e)'], source: 'derived / simulated', rounding: 'Whole kgCO2e; simulated = rounded baseline - rounded reduction' },
    { name: 'Reduction percentage', formula: 'reductionPercentage = avoidableEmissions / baselineEmissions × 100', variables: ['avoidableEmissions (kgCO2e)', 'baselineEmissions (kgCO2e, zero baseline gives 0)'], source: 'simulated', rounding: 'One decimal' },
    { name: 'Eligible idle time', formula: 'max(0, idleHours - thresholdMinutes/60), only where alternativeAvailable and not safetyCritical', variables: ['thresholdMinutes (min, 5-60)'], source: 'configurable', rounding: 'One decimal hour' },
  ],
  emissionFactors: Object.values(EMISSION_FACTORS),
  assumptions: [
    'Equipment efficiency (default 85%) is the share of eligible idle energy assumed avoidable.',
    'Idle periods beyond the threshold are assumed not to be needed for safe operation; this requires human verification.',
    'Unit cost values are synthetic (SYN-USD).',
  ],
  limitations: [
    'Records with missing or invalid values are excluded, which understates totals.',
    'The data is synthetic; results do not describe any real airport.',
    'The simulation is an estimate, not a measured or guaranteed outcome.',
  ],
  confidenceExplanation:
    `Confidence = 0.4 × completeness + 0.3 × measured share + 0.3 × repeatability (share of days showing the pattern), capped at 0.95. ` +
    `It indicates evidence strength, not certainty. A hotspot needs confidence of at least ${CONFIDENCE_THRESHOLD} and overall completeness of at least ${MIN_COMPLETENESS * 100}%.`,
  selectionExplanation:
    'Groups (category and zone) are scored. Safety-critical or non-reducible groups are excluded; the eligible group with the largest estimated avoidable emissions that meets the confidence threshold is selected. Otherwise no recommendation is generated.',
  safetyStatement:
    'Analytical and advisory only. No connection to operational control systems. Operational and safety procedures take precedence; human review is mandatory.',
  retention: 'Synthetic data only; no personal data. Request logs keep only correlation IDs and are retained for 30 days.',
};
