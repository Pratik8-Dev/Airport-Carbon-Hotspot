import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { axe } from 'vitest-axe';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { SYNTHETIC_RECORDS, analyze, overview, recommend, simulate, EVENT_NAMES, listen, type MountProps } from '@acp/contracts';
import { KpiCard } from './KpiCard';
import { ErrorBoundary } from './ErrorBoundary';
import { BeforeAfterChart } from './BeforeAfterChart';
import { RecommendationCard } from './RecommendationCard';
import { NoSafeRecommendation } from './StateViews';
import { mount } from './remote';

const wrap = (ui: React.ReactElement) => render(
  <ThemeProvider theme={createTheme()}><CssBaseline />{ui}</ThemeProvider>,
);

const analysis = analyze(SYNTHETIC_RECORDS, 'test-cid-0001');
const sim = simulate(SYNTHETIC_RECORDS, 'gate-aux-power', 'PIER-B', {});
const rec = recommend(analysis, sim).recommendation!;

describe('KpiCard', () => {
  it('renders label and value accessibly', async () => {
    const { container } = wrap(<KpiCard label="Total" value="1,000 kgCO2e" caption="Derived" />);
    expect(screen.getByRole('group', { name: 'Total: 1,000 kgCO2e' })).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('BeforeAfterChart', () => {
  it('shows baseline and simulated values in an accessible table', () => {
    wrap(<BeforeAfterChart baseline={1000} simulated={700} />);
    expect(screen.getByText(/simulated reduction 300 kgCO2e/)).toBeInTheDocument();
    expect(screen.getByRole('table', { name: 'Chart data table' })).toHaveTextContent('Simulated estimate');
  });
});

describe('RecommendationCard', () => {
  it('renders advisory content and requires confirmation before selecting', async () => {
    const onSelect = vi.fn();
    wrap(<RecommendationCard recommendation={rec} onSelect={onSelect} />);
    expect(screen.getAllByText('Advisory only').length).toBeGreaterThan(0);
    expect(screen.getAllByText(/authorised airport operations and safety personnel/i).length).toBeGreaterThan(0);
    await userEvent.click(screen.getByRole('button', { name: 'Mark for operational review' }));
    expect(onSelect).not.toHaveBeenCalled();
    await userEvent.click(await screen.findByRole('button', { name: 'Confirm' }));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });
  it('shows the mandated message when no safe recommendation exists', () => {
    wrap(<NoSafeRecommendation />);
    expect(screen.getByText('No safe recommendation can be generated from the available data.')).toBeInTheDocument();
  });
});

describe('ErrorBoundary', () => {
  it('renders a generic fallback and reports the error', () => {
    const onError = vi.fn();
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const Boom = (): never => { throw new Error('secret detail'); };
    wrap(<ErrorBoundary onError={onError}><Boom /></ErrorBoundary>);
    expect(screen.getByRole('alert')).toHaveTextContent('could not be displayed');
    expect(screen.queryByText(/secret detail/)).toBeNull();
    expect(onError).toHaveBeenCalled();
  });
});

describe('remote mount contract', () => {
  const props = (view: MountProps['view']): MountProps => ({
    contractVersion: 1, view, apiBaseUrl: 'http://api.test', airportContext: { airportId: 'FICT-APT-01', terminalId: 'TERM-A' },
    filters: { analysisDays: 30 }, featureFlags: { showSensitivity: true }, theme: 'light', auth: { state: 'authenticated', roles: ['analyst'] },
  });
  afterEach(() => vi.unstubAllGlobals());

  const stubFetch = (fail = false) => vi.stubGlobal('fetch', vi.fn(async (url: string) => {
    if (fail) throw new TypeError('network');
    const path = new URL(url).pathname;
    const body = path.endsWith('overview') ? overview(SYNTHETIC_RECORDS)
      : path.endsWith('analysis') ? analysis
      : path.endsWith('current') ? recommend(analysis, sim)
      : sim;
    return new Response(JSON.stringify(body), { status: 200 });
  }));

  it('is idempotent and unmounts cleanly', () => {
    stubFetch();
    const container = document.createElement('div');
    document.body.append(container);
    const firstHandle = mount(container, props('overview'));
    const secondHandle = mount(container, props('overview'));
    expect(secondHandle).toBe(firstHandle);
    firstHandle.unmount();
    firstHandle.unmount(); // safe to call twice
    expect(container.childElementCount).toBe(0);
    container.remove();
  });

  it('publishes started and completed events for the hotspot view', async () => {
    stubFetch();
    const container = document.createElement('div');
    document.body.append(container);
    const seenEvents: string[] = [];
    const stopListening = listen(container, (name) => seenEvents.push(name));
    const handle = mount(container, props('hotspot'));
    await waitFor(() => expect(seenEvents).toContain(EVENT_NAMES.analysisCompleted));
    expect(seenEvents[0]).toBe(EVENT_NAMES.analysisStarted);
    stopListening();
    handle.unmount();
    container.remove();
  });

  it('publishes analysis-failed and shows an error state when the API is unavailable', async () => {
    stubFetch(true);
    const container = document.createElement('div');
    document.body.append(container);
    const seenEvents: string[] = [];
    const stopListening = listen(container, (name) => seenEvents.push(name));
    const handle = mount(container, props('hotspot'));
    await waitFor(() => expect(seenEvents).toContain(EVENT_NAMES.analysisFailed));
    expect(await screen.findByText('Unable to load data')).toBeInTheDocument();
    stopListening();
    handle.unmount();
    container.remove();
  });
});
