import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { api } from './api';
import { useRemote } from './context';
import { AdvisoryBanner, ErrorState, LoadingSkeleton, SyntheticBadge } from './StateViews';
import { useAsync } from './useAsync';

export default function MethodologyView() {
  const { props } = useRemote();
  const state = useAsync((signal) => api.methodology(props.apiBaseUrl, signal), [props.apiBaseUrl]);
  if (state.status === 'loading') return <LoadingSkeleton label="Loading methodology" />;
  if (state.status === 'error') return <ErrorState code={state.code} />;
  const methodology = state.data;
  return (
    <section aria-labelledby="m-title" style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Typography id="m-title" variant="h4" component="h2" fontWeight={600}>Methodology and assumptions</Typography>
        <SyntheticBadge />
      </div>
      <Typography>Rule version {methodology.ruleVersion}; dataset {methodology.datasetId}.</Typography>
      <Card>
        <CardContent>
        <Typography variant="h5" component="h3" fontWeight={600}>How the hotspot is selected</Typography>
        <Typography component="p">{methodology.selectionExplanation}</Typography>
        <Typography component="p">{methodology.confidenceExplanation}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
        <Typography variant="h5" component="h3" fontWeight={600}>Formulas</Typography>
        <TableContainer><Table aria-label="Formulas">
          <TableHead><TableRow><TableCell component="th" scope="col">Name</TableCell><TableCell component="th" scope="col">Formula</TableCell><TableCell component="th" scope="col">Variables and units</TableCell><TableCell component="th" scope="col">Rounding</TableCell></TableRow></TableHead>
          <TableBody>
            {methodology.formulas.map((formula) => (
              <TableRow key={formula.name}>
                <TableCell>{formula.name}</TableCell><TableCell><code>{formula.formula}</code></TableCell>
                <TableCell>{formula.variables.join('; ')} ({formula.source})</TableCell><TableCell>{formula.rounding}</TableCell>
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
            {methodology.emissionFactors.map((factor) => (
              <TableRow key={factor.energyType}><TableCell>{factor.energyType}</TableCell><TableCell>{factor.value} {factor.unit}</TableCell><TableCell>{factor.min} to {factor.max}</TableCell></TableRow>
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
            {methodology.fields.map((field) => (
              <TableRow key={field.name}><TableCell>{field.name}</TableCell><TableCell>{field.type}</TableCell><TableCell>{field.unit}</TableCell><TableCell>{field.description}</TableCell><TableCell>{field.validation}</TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
        <Typography variant="h5" component="h3" fontWeight={600}>Data sources, assumptions and limitations</Typography>
        <ul>{[...methodology.dataSources, ...methodology.assumptions, ...methodology.limitations].map((note) => <li key={note}>{note}</li>)}</ul>
        <Typography component="p">{methodology.retention}</Typography>
        </CardContent>
      </Card>
      <AdvisoryBanner text={methodology.safetyStatement} />
    </section>
  );
}
