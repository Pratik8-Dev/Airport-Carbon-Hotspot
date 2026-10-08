import type { EmissionFactor, EnergyType, FactorUnit, RateUnit } from './types';

export type CalcErrorCode = 'MISSING_VALUE' | 'NEGATIVE_VALUE' | 'OUT_OF_RANGE' | 'UNIT_MISMATCH';

export class CalcError extends Error {
  constructor(public readonly code: CalcErrorCode, message: string) {
    super(message);
    this.name = 'CalcError';
  }
}

// Whole kg: avoids false precision for synthetic inputs.
export const roundKg = (v: number): number => Math.round(v);
// One decimal for percentages and energy quantities.
export const round1 = (v: number): number => Math.round(v * 10) / 10;
export const round2 = (v: number): number => Math.round(v * 100) / 100;

export function assertValue(name: string, v: number | null | undefined): number {
  if (v === null || v === undefined || Number.isNaN(v)) throw new CalcError('MISSING_VALUE', `${name} is missing`);
  if (!Number.isFinite(v)) throw new CalcError('OUT_OF_RANGE', `${name} must be finite`);
  if (v < 0) throw new CalcError('NEGATIVE_VALUE', `${name} must not be negative`);
  return v;
}

export function assertRange(name: string, v: number, min: number, max: number): number {
  if (!Number.isFinite(v) || v < min || v > max) {
    throw new CalcError('OUT_OF_RANGE', `${name} must be between ${min} and ${max}`);
  }
  return v;
}

const EXPECTED_UNITS: Record<EnergyType, { rate: RateUnit; factor: FactorUnit }> = {
  electricity: { rate: 'kWh/h', factor: 'kgCO2e/kWh' },
  diesel: { rate: 'L/h', factor: 'kgCO2e/L' },
};

export function assertUnits(energyType: EnergyType, rateUnit: RateUnit, factor: EmissionFactor): void {
  const exp = EXPECTED_UNITS[energyType];
  if (rateUnit !== exp.rate || factor.unit !== exp.factor || factor.energyType !== energyType) {
    throw new CalcError('UNIT_MISMATCH', `Unit mismatch for ${energyType}: ${rateUnit} with ${factor.unit}`);
  }
}

/** emissionsKgCO2e = energyKWh × emissionFactorKgCO2ePerKWh */
export function energyEmissions(energyKWh: number | null | undefined, factorKgPerKWh: number): number {
  return assertValue('energyKWh', energyKWh) * assertValue('emissionFactor', factorKgPerKWh);
}

/** emissionsKgCO2e = idleHours × fuelUsePerHour × fuelEmissionFactor */
export function idleEmissions(
  idleHours: number | null | undefined,
  fuelLitresPerHour: number,
  fuelFactorKgPerL: number,
): number {
  return assertValue('idleHours', idleHours) * assertValue('fuelUsePerHour', fuelLitresPerHour) *
    assertValue('fuelEmissionFactor', fuelFactorKgPerL);
}

/** avoidableEmissions = baselineEmissions - simulatedPostInterventionEmissions */
export function avoidableEmissions(baseline: number, simulated: number): number {
  assertValue('baselineEmissions', baseline);
  assertValue('simulatedEmissions', simulated);
  if (simulated > baseline) throw new CalcError('OUT_OF_RANGE', 'simulated emissions exceed baseline');
  return baseline - simulated;
}

/** reductionPercentage = avoidableEmissions / baselineEmissions × 100; a zero baseline yields 0 (no division). */
export function reductionPercentage(avoidable: number, baseline: number): number {
  assertValue('avoidableEmissions', avoidable);
  assertValue('baselineEmissions', baseline);
  if (baseline === 0) return 0;
  return (avoidable / baseline) * 100;
}
