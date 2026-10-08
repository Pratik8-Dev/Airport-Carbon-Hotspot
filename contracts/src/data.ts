import type { CategoryInfo, EmissionFactor, OperationalRecord, AirportMeta, CategoryId, EnergyType } from './types';

export const DATASET_ID = 'SYN-ACH-2026-10-v1';
export const DATASET_DAYS = 30;

export const AIRPORT_META: AirportMeta = {
  airportId: 'FICT-APT-01',
  terminalId: 'TERM-A',
  name: 'Fictional Example Airport (synthetic)',
  synthetic: true,
  datasetRefreshedAt: '2026-10-01T00:00:00Z',
};

export const CATEGORIES: CategoryInfo[] = [
  { id: 'gate-aux-power', label: 'Gate auxiliary power' },
  { id: 'terminal-hvac', label: 'Terminal cooling and heating' },
  { id: 'ground-vehicles', label: 'Ground vehicle operations' },
  { id: 'terminal-lighting', label: 'Terminal lighting' },
  { id: 'passenger-transport', label: 'Passenger transport' },
];

// Demonstration factors only, not validated values.
export const EMISSION_FACTORS: Record<EnergyType, EmissionFactor> = {
  electricity: {
    energyType: 'electricity', unit: 'kgCO2e/kWh', value: 0.4, min: 0.2, max: 0.6, source: 'synthetic',
    note: 'Synthetic grid-mix factor for demonstration.',
  },
  diesel: {
    energyType: 'diesel', unit: 'kgCO2e/L', value: 2.7, min: 2.0, max: 3.2, source: 'synthetic',
    note: 'Synthetic diesel combustion factor for demonstration.',
  },
};

export const UNIT_COST: Record<EnergyType, number> = { electricity: 0.15, diesel: 1.2 }; // SYN-USD per kWh / per L

// Deterministic PRNG (mulberry32) so every run yields the same synthetic dataset.
function createSeededRandom(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let mixed = Math.imul(state ^ (state >>> 15), 1 | state);
    mixed = (mixed + Math.imul(mixed ^ (mixed >>> 7), 61 | mixed)) ^ mixed;
    return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
  };
}

interface SyntheticSource {
  categoryId: CategoryId;
  zoneId: string;
  recordsPerDay: number;
  operatingHoursRange: [number, number];
  idleShareRange: [number, number];
  rate: number;
  energyType: EnergyType;
  alternativeAvailable: boolean;
  safetyCritical: boolean;
  missingEveryNth: number; // every Nth record has a missing measurement (0 = none)
  derivedEveryNth: number;
}

const SYNTHETIC_SOURCES: SyntheticSource[] = [
  // Gate auxiliary power: aircraft APU/ground-power use on stands. Pier B stands have fixed power available.
  { categoryId: 'gate-aux-power', zoneId: 'PIER-B', recordsPerDay: 14, operatingHoursRange: [1.0, 2.2], idleShareRange: [0.4, 0.7], rate: 60, energyType: 'electricity', alternativeAvailable: true, safetyCritical: false, missingEveryNth: 37, derivedEveryNth: 9 },
  { categoryId: 'gate-aux-power', zoneId: 'PIER-C', recordsPerDay: 8, operatingHoursRange: [0.8, 1.7], idleShareRange: [0.05, 0.2], rate: 60, energyType: 'electricity', alternativeAvailable: true, safetyCritical: false, missingEveryNth: 41, derivedEveryNth: 9 },
  { categoryId: 'terminal-hvac', zoneId: 'ZONE-A3', recordsPerDay: 1, operatingHoursRange: [16, 20], idleShareRange: [0.05, 0.15], rate: 90, energyType: 'electricity', alternativeAvailable: true, safetyCritical: false, missingEveryNth: 11, derivedEveryNth: 4 },
  { categoryId: 'terminal-hvac', zoneId: 'ZONE-A1', recordsPerDay: 1, operatingHoursRange: [20, 24], idleShareRange: [0, 0.05], rate: 260, energyType: 'electricity', alternativeAvailable: false, safetyCritical: false, missingEveryNth: 0, derivedEveryNth: 5 },
  { categoryId: 'ground-vehicles', zoneId: 'APRON-EAST', recordsPerDay: 6, operatingHoursRange: [3, 5], idleShareRange: [0.15, 0.3], rate: 4.5, energyType: 'diesel', alternativeAvailable: true, safetyCritical: false, missingEveryNth: 29, derivedEveryNth: 6 },
  { categoryId: 'ground-vehicles', zoneId: 'APRON-EMERG', recordsPerDay: 2, operatingHoursRange: [1, 3], idleShareRange: [0.3, 0.6], rate: 6, energyType: 'diesel', alternativeAvailable: true, safetyCritical: true, missingEveryNth: 0, derivedEveryNth: 5 },
  { categoryId: 'terminal-lighting', zoneId: 'ZONE-A3', recordsPerDay: 1, operatingHoursRange: [16, 19], idleShareRange: [0.2, 0.4], rate: 35, energyType: 'electricity', alternativeAvailable: true, safetyCritical: false, missingEveryNth: 17, derivedEveryNth: 3 },
  { categoryId: 'terminal-lighting', zoneId: 'EXIT-PATHS', recordsPerDay: 1, operatingHoursRange: [24, 24], idleShareRange: [0.9, 1], rate: 12, energyType: 'electricity', alternativeAvailable: true, safetyCritical: true, missingEveryNth: 0, derivedEveryNth: 0 },
  { categoryId: 'passenger-transport', zoneId: 'SHUTTLE-LOOP', recordsPerDay: 4, operatingHoursRange: [5, 8], idleShareRange: [0.05, 0.15], rate: 5.5, energyType: 'diesel', alternativeAvailable: false, safetyCritical: false, missingEveryNth: 0, derivedEveryNth: 7 },
];

const round2 = (value: number): number => Math.round(value * 100) / 100;

export function generateRecords(seed = 2310): OperationalRecord[] {
  const nextRandom = createSeededRandom(seed);
  const records: OperationalRecord[] = [];
  let recordIndex = 0;
  for (const source of SYNTHETIC_SOURCES) {
    for (let day = 0; day < DATASET_DAYS; day++) {
      for (let recordInDay = 0; recordInDay < source.recordsPerDay; recordInDay++) {
        recordIndex++;
        const [minOperatingHours, maxOperatingHours] = source.operatingHoursRange;
        const operatingHours = minOperatingHours + nextRandom() * (maxOperatingHours - minOperatingHours);
        const [minIdleShare, maxIdleShare] = source.idleShareRange;
        const idleShare = minIdleShare + nextRandom() * (maxIdleShare - minIdleShare);
        const isMissing = source.missingEveryNth > 0 && recordIndex % source.missingEveryNth === 0;
        const isDerived = source.derivedEveryNth > 0 && recordIndex % source.derivedEveryNth === 0;
        records.push({
          recordId: `R-${String(recordIndex).padStart(5, '0')}`,
          day,
          categoryId: source.categoryId,
          zoneId: source.zoneId,
          operatingHours: isMissing ? null : round2(operatingHours),
          idleHours: isMissing ? null : round2(operatingHours * idleShare),
          rate: source.rate,
          rateUnit: source.energyType === 'electricity' ? 'kWh/h' : 'L/h',
          energyType: source.energyType,
          alternativeAvailable: source.alternativeAvailable,
          safetyCritical: source.safetyCritical,
          quality: isMissing ? 'missing' : isDerived ? 'derived' : 'measured',
        });
      }
    }
  }
  return records;
}

export const SYNTHETIC_RECORDS: OperationalRecord[] = generateRecords();
