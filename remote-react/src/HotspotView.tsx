import { useRef } from 'react';
import {
  Card, CardContent, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography,
} from '@mui/material';
import type { AnalysisResponse, RecommendationResponse } from '@acp/contracts';
import { EVENT_NAMES } from '@acp/contracts';
import { api, newCorrelationId, type FailureCode } from './api';
import { useRemote, type RemoteContextValue } from './context';
import { KpiCard } from './KpiCard';
import { RecommendationCard } from './RecommendationCard';
import { SimulationPanel } from './SimulationPanel';
import { AdvisoryBanner, ErrorState, LoadingSkeleton, NoSafeRecommendation, SyntheticBadge } from './StateViews';
import { useAsync } from './useAsync';

interface LoadedHotspotData { analysis: AnalysisResponse; recommendation: RecommendationResponse; correlationId: string }

/** Fetches the hotspot analysis and current recommendation together, publishing lifecycle events as it goes. */
async function loadHotspotData(
  apiBaseUrl: string, correlationId: string, publish: RemoteContextValue['publish'], signal: AbortSignal,
): Promise<LoadedHotspotData> {
  publish(EVENT_NAMES.analysisStarted, { v: 1, correlationId });
  try {
    const [analysis, recommendation] = await Promise.all([
      api.analysis(apiBaseUrl, correlationId, signal),
      api.recommendation(apiBaseUrl, signal),
    ]);
    if (!signal.aborted) {
      publish(EVENT_NAMES.analysisCompleted, {
        v: 1, correlationId, hotspotFound: analysis.hotspot !== null,
        reductionKgCO2e: recommendation.recommendation?.expectedReductionKgCO2e ?? null,
      });
    }
    return { analysis, recommendation, correlationId };
  } catch (error) {
    if (!signal.aborted) {
      const failureCode = (error as { code?: string }).code;
      const knownFailureCodes: FailureCode[] = ['TIMEOUT', 'INVALID_DATA', 'SERVER'];
      publish(EVENT_NAMES.analysisFailed, {
        v: 1, correlationId,
        code: (knownFailureCodes as string[]).includes(failureCode ?? '') ? (failureCode as FailureCode) : 'NETWORK',
      });
    }
    throw error;
  }
}

export default function HotspotView() {
  const { props, publish } = useRemote();
  const correlationIdRef = useRef(newCorrelationId());

  const state = useAsync<LoadedHotspotData>(
    (signal) => loadHotspotData(props.apiBaseUrl, correlationIdRef.current, publish, signal),
    [props.apiBaseUrl],
  );

  if (state.status === 'loading') return <LoadingSkeleton label="Analysing synthetic data" />;
  if (state.status === 'error') return <ErrorState code={state.code} />;

  const { analysis, recommendation, correlationId } = state.data;
  const hotspot = analysis.hotspot;
  return (
    <section aria-labelledby="hs-title" style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography id="hs-title" variant="h4" component="h2" fontWeight={600}>Carbon hotspot analysis</Typography>
        <SyntheticBadge />
        <Chip color="warning" label="Advisory only" />
      </div>
      {!hotspot || !recommendation.recommendation ? (
        <NoSafeRecommendation />
      ) : (
        <>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <KpiCard label="Operational source" value={hotspot.label} caption={`Zone ${hotspot.zoneId} (fictional)`} />
            <KpiCard label="Current emissions" value={`${hotspot.kgCO2e.toLocaleString('en-US')} kgCO2e`} caption={hotspot.baselinePeriod.label} />
            <KpiCard label="Estimated avoidable (simulated)" value={`${hotspot.avoidableKgCO2e.toLocaleString('en-US')} kgCO2e`} caption={`${hotspot.contributionPct}% of total emissions come from this source`} />
            <KpiCard
              label="Evidence strength"
              value={`${Math.round(hotspot.confidence * 100)} / 100`}
              caption="Indicates evidence strength, not certainty"
              hint={`Confidence = 0.4 × completeness (${hotspot.confidenceBreakdown.completeness}) + 0.3 × measured share (${hotspot.confidenceBreakdown.measuredShare}) + 0.3 × repeatability (${hotspot.confidenceBreakdown.repeatability}). Threshold ${analysis.confidenceThreshold}.`}
            />
          </div>
          <Card>
            <CardContent>
            <Typography variant="h5" component="h3" fontWeight={600}>Why this hotspot was selected</Typography>
            <Typography component="p">{hotspot.selectionReason}</Typography>
            <Typography component="p"><strong>Supporting operational pattern: </strong>{hotspot.supportingPattern}</Typography>
            <Typography variant="h6" component="h4" fontWeight={600}>Known uncertainties and limitations</Typography>
            <ul>{hotspot.uncertainties.map((uncertainty) => <li key={uncertainty}>{uncertainty}</li>)}</ul>
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
                {analysis.candidates.map((candidate) => (
                  <TableRow key={`${candidate.categoryId}-${candidate.zoneId}`}>
                    <TableCell>{candidate.label}</TableCell>
                    <TableCell>{candidate.zoneId}</TableCell>
                    <TableCell>{candidate.avoidableKgCO2e.toLocaleString('en-US')}</TableCell>
                    <TableCell>{candidate.confidence}</TableCell>
                    <TableCell>
                      <Tooltip title={candidate.reason} describeChild>
                        <Chip
                          tabIndex={0} size="small" variant={candidate.selected ? 'filled' : 'outlined'}
                          color={candidate.selected ? 'primary' : 'default'}
                          label={candidate.selected ? 'Selected' : 'Not selected'}
                        />
                      </Tooltip>{' '}
                      <Typography variant="body2" component="span">{candidate.reason}</Typography>
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
            onSelect={() => publish(EVENT_NAMES.recommendationSelected, { v: 1, correlationId, categoryId: hotspot.categoryId, zoneId: hotspot.zoneId })}
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
