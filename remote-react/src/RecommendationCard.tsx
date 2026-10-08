import { useState } from 'react';
import {
  Button, Card, CardContent, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Typography,
} from '@mui/material';
import type { Recommendation } from '@acp/contracts';
import { AdvisoryBanner } from './StateViews';

interface Props { recommendation: Recommendation; onSelect: () => void }

const TitledList = ({ title, items }: { title: string; items: string[] }) => (
  <section>
    <Typography variant="h6" component="h4" fontWeight={600}>{title}</Typography>
    <ul style={{ marginTop: 4 }}>{items.map((item) => <li key={item}>{item}</li>)}</ul>
  </section>
);

export function RecommendationCard({ recommendation, onSelect }: Props) {
  const [isReviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [isMarkedForReview, setMarkedForReview] = useState(false);
  return (
    <Card aria-labelledby="rec-title">
      <CardContent sx={{ display: 'grid', gap: 1.5 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography id="rec-title" variant="h5" component="h3" fontWeight={600}>Recommended operational intervention</Typography>
        <Chip color="warning" label="Advisory only" />
        <Chip variant="outlined" label="Human review required" />
      </div>
      <Typography component="p">{recommendation.action}</Typography>
      <Typography component="p"><strong>Rationale: </strong>{recommendation.rationale}</Typography>
      <Typography component="p">
        <strong>Expected reduction (simulated estimate): </strong>{recommendation.expectedReductionKgCO2e.toLocaleString('en-US')} kgCO2e
      </Typography>
      <Typography component="p"><strong>Effort / cost: </strong>{recommendation.effort} ({recommendation.costCategory})</Typography>
      <TitledList title="Assumptions" items={recommendation.assumptions} />
      <TitledList title="Dependencies" items={recommendation.dependencies} />
      <TitledList title="Operational limitations" items={recommendation.limitations} />
      <Typography component="p"><strong>Reversibility: </strong>{recommendation.reversibility}</Typography>
      <Typography component="p"><strong>Human review: </strong>{recommendation.humanReview}</Typography>
      <AdvisoryBanner text={recommendation.disclaimer} />
      <Button variant="contained" disabled={isMarkedForReview} onClick={() => setReviewDialogOpen(true)}>
            {isMarkedForReview ? 'Marked for review' : 'Mark for operational review'}
      </Button>
      <Dialog open={isReviewDialogOpen} onClose={() => setReviewDialogOpen(false)} aria-labelledby="review-dialog-title">
            <DialogTitle id="review-dialog-title">Mark for operational review?</DialogTitle>
            <DialogContent>
              This only flags the recommendation for review by authorised operations and safety personnel. It does not
              change, schedule or control any airport equipment or procedure.
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setReviewDialogOpen(false)}>Cancel</Button>
              <Button
                variant="contained"
                onClick={() => { setMarkedForReview(true); setReviewDialogOpen(false); onSelect(); }}
              >
                Confirm
              </Button>
            </DialogActions>
      </Dialog>
      </CardContent>
    </Card>
  );
}
