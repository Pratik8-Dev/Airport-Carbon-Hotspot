import { useEffect, useState } from 'react';
import { Card, CardContent, Slider, Typography } from '@mui/material';
import type { AnalysisParams, SimulationResult } from '@acp/contracts';
import { PARAM_LIMITS, EMISSION_FACTORS } from '@acp/contracts';
import { api } from './api';
import { BeforeAfterChart } from './BeforeAfterChart';
import { ErrorState, KindBadge, LoadingSkeleton } from './StateViews';

interface Props { apiBaseUrl: string; initialDays: number; showSensitivity: boolean }

const ELECTRICITY_EMISSION_FACTOR = EMISSION_FACTORS.electricity;
const SIMULATION_DEBOUNCE_MS = 250;

interface ParameterSliderProps {
  id: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

/** A single labelled, accessible slider used to adjust one analytical assumption. */
function ParameterSlider({ id, label, unit, min, max, step, value, onChange }: ParameterSliderProps) {
  return (
    <div style={{ minWidth: 220, flex: '1 1 220px' }}>
      <label htmlFor={id} style={{ display: 'block' }}>{label}: {value} {unit}</label>
      <Slider
        id={id} min={min} max={max} step={step} value={value} valueLabelDisplay="auto" aria-label={label}
        onChange={(_, nextValue) => onChange(nextValue as number)}
      />
    </div>
  );
}

export function SimulationPanel({ apiBaseUrl, initialDays, showSensitivity }: Props) {
  const [params, setParams] = useState<AnalysisParams>({
    idleThresholdMinutes: 15, analysisDays: initialDays, equipmentEfficiencyPct: 85,
    emissionFactor: ELECTRICITY_EMISSION_FACTOR.value,
  });
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [errorCode, setErrorCode] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const debounceTimer = setTimeout(() => {
      api.simulate(apiBaseUrl, params, abortController.signal).then(
        (simulationResult) => {
          if (!abortController.signal.aborted) { setResult(simulationResult); setErrorCode(null); }
        },
        (error: unknown) => {
          if (!abortController.signal.aborted) setErrorCode((error as { code?: string }).code ?? 'NETWORK');
        },
      );
    }, SIMULATION_DEBOUNCE_MS);
    return () => { clearTimeout(debounceTimer); abortController.abort(); };
  }, [apiBaseUrl, params]);

  const setParam = (key: keyof AnalysisParams, value: number): void => setParams((prev) => ({ ...prev, [key]: value }));

  return (
    <Card aria-labelledby="sim-title">
      <CardContent sx={{ display: 'grid', gap: 2 }}>
      <Typography id="sim-title" variant="h5" component="h3" fontWeight={600}>Before-and-after simulation</Typography>
      <Typography component="p">Adjust analytical assumptions only. These inputs never control or signal any airport equipment.</Typography>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <ParameterSlider
          id="sim-idle" label="Eligible idle threshold" unit="min"
          min={PARAM_LIMITS.idleThresholdMinutes.min} max={PARAM_LIMITS.idleThresholdMinutes.max} step={5}
          value={params.idleThresholdMinutes} onChange={(value) => setParam('idleThresholdMinutes', value)}
        />
        <ParameterSlider
          id="sim-ef" label="Emission factor (synthetic)" unit={ELECTRICITY_EMISSION_FACTOR.unit}
          min={ELECTRICITY_EMISSION_FACTOR.min} max={ELECTRICITY_EMISSION_FACTOR.max} step={0.01}
          value={params.emissionFactor ?? ELECTRICITY_EMISSION_FACTOR.value} onChange={(value) => setParam('emissionFactor', value)}
        />
        <ParameterSlider
          id="sim-days" label="Analysis period" unit="days"
          min={PARAM_LIMITS.analysisDays.min} max={PARAM_LIMITS.analysisDays.max} step={1}
          value={params.analysisDays} onChange={(value) => setParam('analysisDays', value)}
        />
        <ParameterSlider
          id="sim-eff" label="Equipment efficiency assumption" unit="%"
          min={PARAM_LIMITS.equipmentEfficiencyPct.min} max={PARAM_LIMITS.equipmentEfficiencyPct.max} step={5}
          value={params.equipmentEfficiencyPct} onChange={(value) => setParam('equipmentEfficiencyPct', value)}
        />
      </div>
      {errorCode && <ErrorState code={errorCode} />}
      {!result && !errorCode && <LoadingSkeleton label="Running simulation" />}
      {result && (
        <div aria-live="polite">
          <BeforeAfterChart baseline={result.baselineKgCO2e} simulated={result.simulatedKgCO2e} />
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 6 }}>
            <li>Baseline: <strong>{result.baselineKgCO2e.toLocaleString('en-US')} kgCO2e</strong> <KindBadge kind={result.valueKinds.baseline} /></li>
            <li>Simulated post-intervention: <strong>{result.simulatedKgCO2e.toLocaleString('en-US')} kgCO2e</strong> <KindBadge kind={result.valueKinds.simulated} /></li>
            <li>Absolute reduction: <strong>{result.reductionKgCO2e.toLocaleString('en-US')} kgCO2e</strong> ({result.reductionPct}%) <KindBadge kind={result.valueKinds.reduction} /></li>
            <li>Energy estimate: {result.avoidedEnergy.amount.toLocaleString('en-US')} {result.avoidedEnergy.unit}; cost estimate: {result.estimatedCostSaving.amount.toLocaleString('en-US')} {result.estimatedCostSaving.currency} (synthetic)</li>
            {showSensitivity && (
              <li>
                Assumption sensitivity: <strong>{result.sensitivity.level}</strong>. Reduction range across validated
                assumption bounds: {result.sensitivity.lowKgCO2e.toLocaleString('en-US')} to {result.sensitivity.highKgCO2e.toLocaleString('en-US')} kgCO2e.
              </li>
            )}
          </ul>
          <Typography variant="h6" component="h4" fontWeight={600}>Calculation summary</Typography>
          <ol>{result.calculationSummary.map((line) => <li key={line}>{line}</li>)}</ol>
          <Typography variant="body2">This is a simulated estimate, not a measured or guaranteed outcome. No reduction has occurred.</Typography>
        </div>
      )}
      </CardContent>
    </Card>
  );
}
