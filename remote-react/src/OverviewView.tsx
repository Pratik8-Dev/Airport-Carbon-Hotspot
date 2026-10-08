import {
  Card, CardContent, Chip, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import { api } from './api';
import { useRemote } from './context';
import { KpiCard } from './KpiCard';
import { ErrorState, KindBadge, LoadingSkeleton, SyntheticBadge } from './StateViews';
import { useAsync } from './useAsync';

export default function OverviewView() {
  const { props } = useRemote();
  const state = useAsync((s) => api.overview(props.apiBaseUrl, props.filters.analysisDays, s), [props.apiBaseUrl, props.filters.analysisDays]);

  if (state.status === 'loading') return <LoadingSkeleton label="Loading overview" />;
  if (state.status === 'error') return <ErrorState code={state.code} />;
  const o = state.data;
  const q = o.quality;
  return (
    <section aria-labelledby="ov-title" style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography id="ov-title" variant="h4" component="h2" fontWeight={600}>Airport emissions overview</Typography>
        <SyntheticBadge />
      </div>
      <Typography>{o.syntheticNotice}</Typography>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <KpiCard label="Total simulated emissions" value={`${o.totalKgCO2e.toLocaleString('en-US')} kgCO2e`} caption="Derived from synthetic records" />
        <KpiCard label="Analysis period" value={`${o.periodDays} days`} caption={`${o.meta.airportId} / ${o.meta.terminalId} (fictional)`} />
        <KpiCard
          label="Data completeness"
          value={`${q.completenessPct}%`}
          caption={`Status: ${q.status}`}
          badge={<Chip size="small" color={q.status === 'complete' ? 'success' : 'warning'} label={q.status} />}
          hint="Share of records with valid values. Missing records are excluded, so totals may be understated."
        />
        <KpiCard label="Last dataset refresh" value={new Date(o.meta.datasetRefreshedAt).toISOString().slice(0, 10)} caption="Synthetic dataset timestamp (UTC)" />
      </div>
      <Card>
        <CardContent>
        <Typography variant="h5" component="h3" fontWeight={600} sx={{ mb: 2 }}>
          Emissions by operational category <KindBadge kind={o.valueKind} />
        </Typography>
        <TableContainer>
        <Table aria-label="Emissions by category">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="col">Category</TableCell>
              <TableCell component="th" scope="col">kgCO2e</TableCell>
              <TableCell component="th" scope="col">Share</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {o.categories.map((c) => (
              <TableRow key={c.categoryId}>
                <TableCell>{c.label}</TableCell>
                <TableCell>{c.kgCO2e.toLocaleString('en-US')}</TableCell>
                <TableCell>
                  <LinearProgress variant="determinate" value={c.sharePct} aria-label={`${c.label} share`} sx={{ maxWidth: 160, display: 'inline-block', verticalAlign: 'middle', width: '100%' }} />
                  {' '}{c.sharePct}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        </CardContent>
      </Card>
    </section>
  );
}
