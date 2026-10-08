import { Card, CardContent, Tooltip, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface KpiCardProps {
  label: string;
  value: string;
  caption?: string;
  hint?: string;
  badge?: ReactNode;
}

export function KpiCard({ label, value, caption, hint, badge }: KpiCardProps) {
  const body = (
    <Card role="group" aria-label={`${label}: ${value}`} sx={{ minWidth: 200, flex: '1 1 200px' }}>
      <CardContent sx={{ display: 'grid', gap: 1 }}>
        <Typography variant="body2" color="text.secondary">{label}</Typography>
        <Typography variant="h4" component="p" fontWeight={600}>{value}</Typography>
        {caption && <Typography variant="body2">{caption}</Typography>}
        {badge}
      </CardContent>
    </Card>
  );
  return hint ? <Tooltip title={hint} describeChild>{body}</Tooltip> : body;
}
