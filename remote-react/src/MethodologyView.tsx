import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { api } from './api';
import { useRemote } from './context';
import { AdvisoryBanner, ErrorState, LoadingSkeleton, SyntheticBadge } from './StateViews';
import { useAsync } from './useAsync';

export default function MethodologyView() {
  const { props } = useRemote();
  const state = useAsync((s) => api.methodology(props.apiBaseUrl, s), [props.apiBaseUrl]);
  if (state.status === 'loading') return <LoadingSkeleton label="Loading methodology" />;
  if (state.status === 'error') return <ErrorState code={state.code} />;
  const m = state.data;
  return (
    <section aria-labelledby="m-title" style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Typography id="m-title" variant="h4" component="h2" fontWeight={600}>Methodology and assumptions</Typography>
        <SyntheticBadge />
      </div>
      <Typography>Rule version {m.ruleVersion}; dataset {m.datasetId}.</Typography>
      <Card>
        <CardContent>
        <Typography variant="h5" component="h3" fontWeight={600}>How the hotspot is selected</Typography>
        <Typography component="p">{m.selectionExplanation}</Typography>
        <Typography component="p">{m.confidenceExplanation}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
        <Typography variant="h5" component="h3" fontWeight={600}>Formulas</Typography>
        <TableContainer><Table aria-label="Formulas">
          <TableHead><TableRow><TableCell component="th" scope="col">Name</TableCell><TableCell component="th" scope="col">Formula</TableCell><TableCell component="th" scope="col">Variables and units</TableCell><TableCell component="th" scope="col">Rounding</TableCell></TableRow></TableHead>
          <TableBody>
            {m.formulas.map((f) => (
              <TableRow key={f.name}>
                <TableCell>{f.name}</TableCell><TableCell><code>{f.formula}</code></TableCell>
                <TableCell>{f.variables.join('; ')} ({f.source})</TableCell><TableCell>{f.rounding}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
        <Typography variant="h5" component="h3" fontWeight={600}>Emission factors (synthetic demonstration values)</Typography>
        <TableContainer><Table aria-label="Emission factors">
          <TableHead><TableRow><TableCell component="th" scope="col">Energy type</TableCell><TableCell component="th" scope="col">Value</TableCell><TableCell component="th" scope="col">Allowed range</TableCell></TableRow></TableHead>
          <TableBody>
            {m.emissionFactors.map((e) => (
              <TableRow key={e.energyType}><TableCell>{e.energyType}</TableCell><TableCell>{e.value} {e.unit}</TableCell><TableCell>{e.min} to {e.max}</TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
        <Typography variant="h5" component="h3" fontWeight={600}>Input fields</Typography>
        <TableContainer><Table aria-label="Input fields">
          <TableHead><TableRow><TableCell component="th" scope="col">Field</TableCell><TableCell component="th" scope="col">Type</TableCell><TableCell component="th" scope="col">Unit</TableCell><TableCell component="th" scope="col">Description</TableCell><TableCell component="th" scope="col">Validation</TableCell></TableRow></TableHead>
          <TableBody>
            {m.fields.map((f) => (
              <TableRow key={f.name}><TableCell>{f.name}</TableCell><TableCell>{f.type}</TableCell><TableCell>{f.unit}</TableCell><TableCell>{f.description}</TableCell><TableCell>{f.validation}</TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
        <Typography variant="h5" component="h3" fontWeight={600}>Data sources, assumptions and limitations</Typography>
        <ul>{[...m.dataSources, ...m.assumptions, ...m.limitations].map((s) => <li key={s}>{s}</li>)}</ul>
        <Typography component="p">{m.retention}</Typography>
        </CardContent>
      </Card>
      <AdvisoryBanner text={m.safetyStatement} />
    </section>
  );
}
