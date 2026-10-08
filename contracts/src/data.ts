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

// Deterministic PRNG so every run yields the same synthetic dataset.
function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Source {
  categoryId: CategoryId;
  zoneId: string;
  perDay: number;
  opHours: [number, number];
  idleShare: [number, number];
  rate: number;
  energyType: EnergyType;
  alternativeAvailable: boolean;
  safetyCritical: boolean;
  missingEvery: number; // every Nth record has a missing measurement (0 = none)
  derivedEvery: number;
}

const SOURCES: Source[] = [
  // Gate auxiliary power: aircraft APU/ground-power use on stands. Pier B stands have fixed power available.
  { categoryId: 'gate-aux-power', zoneId: 'PIER-B', perDay: 14, opHours: [1.0, 2.2], idleShare: [0.4, 0.7], rate: 60, energyType: 'electricity', alternativeAvailable: true, safetyCritical: false, missingEvery: 37, derivedEvery: 9 },
  { categoryId: 'gate-aux-power', zoneId: 'PIER-C', perDay: 8, opHours: [0.8, 1.7], idleShare: [0.05, 0.2], rate: 60, energyType: 'electricity', alternativeAvailable: true, safetyCritical: false, missingEvery: 41, derivedEvery: 9 },
  { categoryId: 'terminal-hvac', zoneId: 'ZONE-A3', perDay: 1, opHours: [16, 20], idleShare: [0.05, 0.15], rate: 90, energyType: 'electricity', alternativeAvailable: true, safetyCritical: false, missingEvery: 11, derivedEvery: 4 },
  { categoryId: 'terminal-hvac', zoneId: 'ZONE-A1', perDay: 1, opHours: [20, 24], idleShare: [0, 0.05], rate: 260, energyType: 'electricity', alternativeAvailable: false, safetyCritical: false, missingEvery: 0, derivedEvery: 5 },
  { categoryId: 'ground-vehicles', zoneId: 'APRON-EAST', perDay: 6, opHours: [3, 5], idleShare: [0.15, 0.3], rate: 4.5, energyType: 'diesel', alternativeAvailable: true, safetyCritical: false, missingEvery: 29, derivedEvery: 6 },
  { categoryId: 'ground-vehicles', zoneId: 'APRON-EMERG', perDay: 2, opHours: [1, 3], idleShare: [0.3, 0.6], rate: 6, energyType: 'diesel', alternativeAvailable: true, safetyCritical: true, missingEvery: 0, derivedEvery: 5 },
  { categoryId: 'terminal-lighting', zoneId: 'ZONE-A3', perDay: 1, opHours: [16, 19], idleShare: [0.2, 0.4], rate: 35, energyType: 'electricity', alternativeAvailable: true, safetyCritical: false, missingEvery: 17, derivedEvery: 3 },
  { categoryId: 'terminal-lighting', zoneId: 'EXIT-PATHS', perDay: 1, opHours: [24, 24], idleShare: [0.9, 1], rate: 12, energyType: 'electricity', alternativeAvailable: true, safetyCritical: true, missingEvery: 0, derivedEvery: 0 },
  { categoryId: 'passenger-transport', zoneId: 'SHUTTLE-LOOP', perDay: 4, opHours: [5, 8], idleShare: [0.05, 0.15], rate: 5.5, energyType: 'diesel', alternativeAvailable: false, safetyCritical: false, missingEvery: 0, derivedEvery: 7 },
];

const round2 = (n: number): number => Math.round(n * 100) / 100;

export function generateRecords(seed = 2310): OperationalRecord[] {
  const rnd = mulberry32(seed);
  const out: OperationalRecord[] = [];
  let counter = 0;
  for (const s of SOURCES) {
    for (let day = 0; day < DATASET_DAYS; day++) {
      for (let k = 0; k < s.perDay; k++) {
        counter++;
        const op = s.opHours[0] + rnd() * (s.opHours[1] - s.opHours[0]);
        const share = s.idleShare[0] + rnd() * (s.idleShare[1] - s.idleShare[0]);
        const missing = s.missingEvery > 0 && counter % s.missingEvery === 0;
        const derived = s.derivedEvery > 0 && counter % s.derivedEvery === 0;
        out.push({
          recordId: `R-${String(counter).padStart(5, '0')}`,
          day,
          categoryId: s.categoryId,
          zoneId: s.zoneId,
          operatingHours: missing ? null : round2(op),
          idleHours: missing ? null : round2(op * share),
          rate: s.rate,
          rateUnit: s.energyType === 'electricity' ? 'kWh/h' : 'L/h',
          energyType: s.energyType,
          alternativeAvailable: s.alternativeAvailable,
          safetyCritical: s.safetyCritical,
          quality: missing ? 'missing' : derived ? 'derived' : 'measured',
        });
      }
    }
  }
  return out;
}

export const SYNTHETIC_RECORDS: OperationalRecord[] = generateRecords();
