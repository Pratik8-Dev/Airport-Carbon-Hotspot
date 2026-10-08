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
  const state = useAsync((signal) => api.overview(props.apiBaseUrl, props.filters.analysisDays, signal), [props.apiBaseUrl, props.filters.analysisDays]);

  if (state.status === 'loading') return <LoadingSkeleton label="Loading overview" />;
  if (state.status === 'error') return <ErrorState code={state.code} />;
  const overview = state.data;
  const quality = overview.quality;
  return (
    <section aria-labelledby="ov-title" style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography id="ov-title" variant="h4" component="h2" fontWeight={600}>Airport emissions overview</Typography>
        <SyntheticBadge />
      </div>
      <Typography>{overview.syntheticNotice}</Typography>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <KpiCard label="Total simulated emissions" value={`${overview.totalKgCO2e.toLocaleString('en-US')} kgCO2e`} caption="Derived from synthetic records" />
        <KpiCard label="Analysis period" value={`${overview.periodDays} days`} caption={`${overview.meta.airportId} / ${overview.meta.terminalId} (fictional)`} />
        <KpiCard
          label="Data completeness"
          value={`${quality.completenessPct}%`}
          caption={`Status: ${quality.status}`}
          badge={<Chip size="small" color={quality.status === 'complete' ? 'success' : 'warning'} label={quality.status} />}
          hint="Share of records with valid values. Missing records are excluded, so totals may be understated."
        />
        <KpiCard label="Last dataset refresh" value={new Date(overview.meta.datasetRefreshedAt).toISOString().slice(0, 10)} caption="Synthetic dataset timestamp (UTC)" />
      </div>
      <Card>
        <CardContent>
        <Typography variant="h5" component="h3" fontWeight={600} sx={{ mb: 2 }}>
          Emissions by operational category <KindBadge kind={overview.valueKind} />
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
            {overview.categories.map((category) => (
              <TableRow key={category.categoryId}>
                <TableCell>{category.label}</TableCell>
                <TableCell>{category.kgCO2e.toLocaleString('en-US')}</TableCell>
                <TableCell>
                  <LinearProgress variant="determinate" value={category.sharePct} aria-label={`${category.label} share`} sx={{ maxWidth: 160, display: 'inline-block', verticalAlign: 'middle', width: '100%' }} />
                  {' '}{category.sharePct}%
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
