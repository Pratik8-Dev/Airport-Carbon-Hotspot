import { Alert, AlertTitle, Chip, Skeleton, Typography } from '@mui/material';

export const NO_SAFE_RECOMMENDATION_TEXT = 'No safe recommendation can be generated from the available data.';

export function LoadingSkeleton({ label = 'Loading' }: { label?: string }) {
  return (
    <div role="status" aria-busy="true" aria-label={label}>
      <div style={{ display: 'grid', gap: 12 }}>
        <Skeleton variant="text" width="45%" height={40} />
        <Skeleton variant="rounded" height={112} />
        <Skeleton variant="rounded" height={112} />
      </div>
    </div>
  );
}

const MESSAGES: Record<string, string> = {
  TIMEOUT: 'The data service took too long to respond. Please try again.',
  NETWORK: 'The data service is currently unreachable. Please try again later.',
  INVALID_DATA: 'The data received could not be validated, so it is not shown.',
  SERVER: 'The data service reported a problem. Please try again later.',
};

export function ErrorState({ code }: { code: string }) {
  return (
    <Alert severity="error" role="alert">
      <AlertTitle>Unable to load data</AlertTitle>
        {MESSAGES[code] ?? MESSAGES['NETWORK']}
    </Alert>
  );
}

export function NoSafeRecommendation() {
  return (
    <Alert severity="info" role="status">
      <AlertTitle>{NO_SAFE_RECOMMENDATION_TEXT}</AlertTitle>
        Safety eligibility or evidence strength could not be established. Operational and safety procedures take precedence.
    </Alert>
  );
}

export function SyntheticBadge() {
  return <Chip variant="outlined" color="info" size="small" label="Synthetic data" />;
}

export function AdvisoryBanner({ text }: { text: string }) {
  return (
    <Alert severity="warning" role="note">
      <AlertTitle>Advisory only</AlertTitle>
      <Typography component="span">{text}</Typography>
    </Alert>
  );
}

export type Kind = 'measured' | 'derived' | 'simulated';

// Icon-free text label so the distinction does not rely on colour alone.
export function KindBadge({ kind }: { kind: Kind }) {
  const color = kind === 'measured' ? 'success' : kind === 'derived' ? 'primary' : 'warning';
  return <Chip variant="outlined" color={color} size="small" label={kind === 'simulated' ? 'Simulated estimate' : kind === 'derived' ? 'Derived' : 'Measured'} />;
}
