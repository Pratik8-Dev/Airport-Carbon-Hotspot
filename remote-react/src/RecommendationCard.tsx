import { useState } from 'react';
import {
  Button, Card, CardContent, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Typography,
} from '@mui/material';
import type { Recommendation } from '@acp/contracts';
import { AdvisoryBanner } from './StateViews';

interface Props { recommendation: Recommendation; onSelect: () => void }

const List = ({ title, items }: { title: string; items: string[] }) => (
  <section>
    <Typography variant="h6" component="h4" fontWeight={600}>{title}</Typography>
    <ul style={{ marginTop: 4 }}>{items.map((i) => <li key={i}>{i}</li>)}</ul>
  </section>
);

export function RecommendationCard({ recommendation: r, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  return (
    <Card aria-labelledby="rec-title">
      <CardContent sx={{ display: 'grid', gap: 1.5 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography id="rec-title" variant="h5" component="h3" fontWeight={600}>Recommended operational intervention</Typography>
        <Chip color="warning" label="Advisory only" />
        <Chip variant="outlined" label="Human review required" />
      </div>
      <Typography component="p">{r.action}</Typography>
      <Typography component="p"><strong>Rationale: </strong>{r.rationale}</Typography>
      <Typography component="p">
        <strong>Expected reduction (simulated estimate): </strong>{r.expectedReductionKgCO2e.toLocaleString('en-US')} kgCO2e
      </Typography>
      <Typography component="p"><strong>Effort / cost: </strong>{r.effort} ({r.costCategory})</Typography>
      <List title="Assumptions" items={r.assumptions} />
      <List title="Dependencies" items={r.dependencies} />
      <List title="Operational limitations" items={r.limitations} />
      <Typography component="p"><strong>Reversibility: </strong>{r.reversibility}</Typography>
      <Typography component="p"><strong>Human review: </strong>{r.humanReview}</Typography>
      <AdvisoryBanner text={r.disclaimer} />
      <Button variant="contained" disabled={selected} onClick={() => setOpen(true)}>
            {selected ? 'Marked for review' : 'Mark for operational review'}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="review-dialog-title">
            <DialogTitle id="review-dialog-title">Mark for operational review?</DialogTitle>
            <DialogContent>
              This only flags the recommendation for review by authorised operations and safety personnel. It does not
              change, schedule or control any airport equipment or procedure.
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => { setSelected(true); setOpen(false); onSelect(); }}>Confirm</Button>
            </DialogActions>
      </Dialog>
      </CardContent>
    </Card>
  );
}
