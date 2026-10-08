import { useEffect, useState } from 'react';
import { Card, CardContent, Slider, Typography } from '@mui/material';
import type { AnalysisParams, SimulationResult } from '@acp/contracts';
import { PARAM_LIMITS, EMISSION_FACTORS } from '@acp/contracts';
import { api } from './api';
import { BeforeAfterChart } from './BeforeAfterChart';
import { ErrorState, KindBadge, LoadingSkeleton } from './StateViews';

interface Props { apiBaseUrl: string; initialDays: number; showSensitivity: boolean }

const f = EMISSION_FACTORS.electricity;

export function SimulationPanel({ apiBaseUrl, initialDays, showSensitivity }: Props) {
  const [params, setParams] = useState<AnalysisParams>({
    idleThresholdMinutes: 15, analysisDays: initialDays, equipmentEfficiencyPct: 85, emissionFactor: f.value,
  });
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    const t = setTimeout(() => {
      api.simulate(apiBaseUrl, params, ctrl.signal).then(
        (r) => { if (!ctrl.signal.aborted) { setResult(r); setError(null); } },
        (e: unknown) => { if (!ctrl.signal.aborted) setError((e as { code?: string }).code ?? 'NETWORK'); },
      );
    }, 250);
    return () => { clearTimeout(t); ctrl.abort(); };
  }, [apiBaseUrl, params]);

  const slider = (id: string, label: string, key: keyof AnalysisParams, min: number, max: number, step: number, unit: string) => (
    <div style={{ minWidth: 220, flex: '1 1 220px' }}>
      <label htmlFor={id} style={{ display: 'block' }}>{label}: {params[key]} {unit}</label>
      <Slider id={id} min={min} max={max} step={step} value={params[key] as number}
        valueLabelDisplay="auto" aria-label={label}
        onChange={(_, value) => setParams((p) => ({ ...p, [key]: value as number }))} />
    </div>
  );

  return (
    <Card aria-labelledby="sim-title">
      <CardContent sx={{ display: 'grid', gap: 2 }}>
      <Typography id="sim-title" variant="h5" component="h3" fontWeight={600}>Before-and-after simulation</Typography>
      <Typography component="p">Adjust analytical assumptions only. These inputs never control or signal any airport equipment.</Typography>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {slider('sim-idle', 'Eligible idle threshold', 'idleThresholdMinutes', PARAM_LIMITS.idleThresholdMinutes.min, PARAM_LIMITS.idleThresholdMinutes.max, 5, 'min')}
        {slider('sim-ef', 'Emission factor (synthetic)', 'emissionFactor', f.min, f.max, 0.01, f.unit)}
        {slider('sim-days', 'Analysis period', 'analysisDays', PARAM_LIMITS.analysisDays.min, PARAM_LIMITS.analysisDays.max, 1, 'days')}
        {slider('sim-eff', 'Equipment efficiency assumption', 'equipmentEfficiencyPct', PARAM_LIMITS.equipmentEfficiencyPct.min, PARAM_LIMITS.equipmentEfficiencyPct.max, 5, '%')}
      </div>
      {error && <ErrorState code={error} />}
      {!result && !error && <LoadingSkeleton label="Running simulation" />}
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
          <ol>{result.calculationSummary.map((s) => <li key={s}>{s}</li>)}</ol>
          <Typography variant="body2">This is a simulated estimate, not a measured or guaranteed outcome. No reduction has occurred.</Typography>
        </div>
      )}
      </CardContent>
    </Card>
  );
}
