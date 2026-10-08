import { useRef } from 'react';
import {
  Card, CardContent, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography,
} from '@mui/material';
import type { AnalysisResponse, RecommendationResponse } from '@acp/contracts';
import { EVENT_NAMES } from '@acp/contracts';
import { api, newCorrelationId } from './api';
import { useRemote } from './context';
import { KpiCard } from './KpiCard';
import { RecommendationCard } from './RecommendationCard';
import { SimulationPanel } from './SimulationPanel';
import { AdvisoryBanner, ErrorState, LoadingSkeleton, NoSafeRecommendation, SyntheticBadge } from './StateViews';
import { useAsync } from './useAsync';

interface Loaded { analysis: AnalysisResponse; recommendation: RecommendationResponse; cid: string }

export default function HotspotView() {
  const { props, publish } = useRemote();
  const cidRef = useRef(newCorrelationId());

  const state = useAsync<Loaded>(async (signal) => {
    const cid = cidRef.current;
    publish(EVENT_NAMES.analysisStarted, { v: 1, correlationId: cid });
    try {
      const [analysis, recommendation] = await Promise.all([
        api.analysis(props.apiBaseUrl, cid, signal),
        api.recommendation(props.apiBaseUrl, signal),
      ]);
      if (!signal.aborted) {
        publish(EVENT_NAMES.analysisCompleted, {
          v: 1, correlationId: cid, hotspotFound: analysis.hotspot !== null,
          reductionKgCO2e: recommendation.recommendation?.expectedReductionKgCO2e ?? null,
        });
      }
      return { analysis, recommendation, cid };
    } catch (e) {
      if (!signal.aborted) {
        const code = (e as { code?: string }).code;
        publish(EVENT_NAMES.analysisFailed, {
          v: 1, correlationId: cid,
          code: code === 'TIMEOUT' || code === 'INVALID_DATA' || code === 'SERVER' ? code : 'NETWORK',
        });
      }
      throw e;
    }
  }, [props.apiBaseUrl]);

  if (state.status === 'loading') return <LoadingSkeleton label="Analysing synthetic data" />;
  if (state.status === 'error') return <ErrorState code={state.code} />;

  const { analysis, recommendation, cid } = state.data;
  const h = analysis.hotspot;
  return (
    <section aria-labelledby="hs-title" style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography id="hs-title" variant="h4" component="h2" fontWeight={600}>Carbon hotspot analysis</Typography>
        <SyntheticBadge />
        <Chip color="warning" label="Advisory only" />
      </div>
      {!h || !recommendation.recommendation ? (
        <NoSafeRecommendation />
      ) : (
        <>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <KpiCard label="Operational source" value={h.label} caption={`Zone ${h.zoneId} (fictional)`} />
            <KpiCard label="Current emissions" value={`${h.kgCO2e.toLocaleString('en-US')} kgCO2e`} caption={h.baselinePeriod.label} />
            <KpiCard label="Estimated avoidable (simulated)" value={`${h.avoidableKgCO2e.toLocaleString('en-US')} kgCO2e`} caption={`${h.contributionPct}% of total emissions come from this source`} />
            <KpiCard
              label="Evidence strength"
              value={`${Math.round(h.confidence * 100)} / 100`}
              caption="Indicates evidence strength, not certainty"
              hint={`Confidence = 0.4 × completeness (${h.confidenceBreakdown.completeness}) + 0.3 × measured share (${h.confidenceBreakdown.measuredShare}) + 0.3 × repeatability (${h.confidenceBreakdown.repeatability}). Threshold ${analysis.confidenceThreshold}.`}
            />
          </div>
          <Card>
            <CardContent>
            <Typography variant="h5" component="h3" fontWeight={600}>Why this hotspot was selected</Typography>
            <Typography component="p">{h.selectionReason}</Typography>
            <Typography component="p"><strong>Supporting operational pattern: </strong>{h.supportingPattern}</Typography>
            <Typography variant="h6" component="h4" fontWeight={600}>Known uncertainties and limitations</Typography>
            <ul>{h.uncertainties.map((u) => <li key={u}>{u}</li>)}</ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
            <Typography variant="h5" component="h3" fontWeight={600}>Why other groups were not selected</Typography>
            <TableContainer>
            <Table aria-label="Candidate groups">
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="col">Source</TableCell>
                  <TableCell component="th" scope="col">Zone</TableCell>
                  <TableCell component="th" scope="col">Avoidable (kgCO2e)</TableCell>
                  <TableCell component="th" scope="col">Evidence</TableCell>
                  <TableCell component="th" scope="col">Outcome</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {analysis.candidates.map((c) => (
                  <TableRow key={`${c.categoryId}-${c.zoneId}`}>
                    <TableCell>{c.label}</TableCell>
                    <TableCell>{c.zoneId}</TableCell>
                    <TableCell>{c.avoidableKgCO2e.toLocaleString('en-US')}</TableCell>
                    <TableCell>{c.confidence}</TableCell>
                    <TableCell>
                      <Tooltip title={c.reason} describeChild>
                        <Chip tabIndex={0} size="small" variant={c.selected ? 'filled' : 'outlined'} color={c.selected ? 'primary' : 'default'} label={c.selected ? 'Selected' : 'Not selected'} />
                      </Tooltip>{' '}
                      <Typography variant="body2" component="span">{c.reason}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </TableContainer>
            </CardContent>
          </Card>
          <RecommendationCard
            recommendation={recommendation.recommendation}
            onSelect={() => publish(EVENT_NAMES.recommendationSelected, { v: 1, correlationId: cid, categoryId: h.categoryId, zoneId: h.zoneId })}
          />
          <SimulationPanel apiBaseUrl={props.apiBaseUrl} initialDays={props.filters.analysisDays} showSensitivity={props.featureFlags.showSensitivity} />
        </>
      )}
      <Typography variant="caption" display="block">
        Rule version {analysis.ruleVersion}; analysed {analysis.analysisTimestamp}; correlation {analysis.audit.correlationId}; inputs fingerprint {analysis.audit.inputsHash}.
      </Typography>
      <AdvisoryBanner text="Advisory only and based on synthetic data. Operational and safety procedures take precedence; authorised personnel must review any change." />
    </section>
  );
}
