import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';

interface Props { baseline: number; simulated: number }

export function BeforeAfterChart({ baseline, simulated }: Props) {
  const theme = useTheme();
  const data = [
    { name: 'Baseline (derived)', kg: baseline },
    { name: 'After intervention (simulated)', kg: simulated },
  ];
  const reduction = baseline - simulated;
  return (
    <figure style={{ margin: 0 }} aria-label="Before-and-after emissions comparison">
      <figcaption>
        <Typography component="p" fontWeight={600}>
          Baseline {baseline.toLocaleString('en-US')} kgCO2e vs simulated {simulated.toLocaleString('en-US')} kgCO2e
          (simulated reduction {reduction.toLocaleString('en-US')} kgCO2e)
        </Typography>
      </figcaption>
      <div aria-hidden="true" style={{ width: '100%', height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 24, right: 16, left: 8, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
            <XAxis dataKey="name" stroke={theme.palette.text.primary} />
            <YAxis stroke={theme.palette.text.primary} unit=" kg" width={80} domain={[0, 'auto']} />
            {/* Each bar carries a value label and the table below repeats the data, so meaning is not colour-only. */}
            <Bar dataKey="kg" fill={theme.palette.primary.main} stroke={theme.palette.text.primary} isAnimationActive={false}>
              <LabelList dataKey="kg" position="top" formatter={(v: number) => `${v.toLocaleString('en-US')} kg`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <TableContainer component={Paper}>
      <Table size="small" aria-label="Chart data table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="col">Scenario</TableCell>
            <TableCell component="th" scope="col">kgCO2e</TableCell>
            <TableCell component="th" scope="col">Value type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow><TableCell>Baseline</TableCell><TableCell>{baseline.toLocaleString('en-US')}</TableCell><TableCell>Derived from synthetic records</TableCell></TableRow>
          <TableRow><TableCell>After intervention</TableCell><TableCell>{simulated.toLocaleString('en-US')}</TableCell><TableCell>Simulated estimate</TableCell></TableRow>
        </TableBody>
      </Table>
      </TableContainer>
    </figure>
  );
}
