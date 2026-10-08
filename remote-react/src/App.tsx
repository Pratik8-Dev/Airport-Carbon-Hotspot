import { Suspense, lazy } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import type { MountProps, ThemeName } from '@acp/contracts';
import { EVENT_NAMES } from '@acp/contracts';
import { RemoteContext, makePublisher } from './context';
import { ErrorBoundary } from './ErrorBoundary';
import { LoadingSkeleton } from './StateViews';
import { newCorrelationId } from './api';

const OverviewView = lazy(() => import('./OverviewView'));
const HotspotView = lazy(() => import('./HotspotView'));
const MethodologyView = lazy(() => import('./MethodologyView'));

const THEMES: Record<ThemeName, ReturnType<typeof createTheme>> = {
  light: createTheme({ palette: { mode: 'light', primary: { main: '#0f6cbd' } } }),
  dark: createTheme({ palette: { mode: 'dark', primary: { main: '#479ef5' } } }),
  'high-contrast': createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#ffff00', contrastText: '#000000' },
      background: { default: '#000000', paper: '#000000' },
      text: { primary: '#ffffff', secondary: '#ffffff' },
      divider: '#ffffff',
    },
    components: {
      MuiPaper: { styleOverrides: { root: { border: '1px solid #ffffff' } } },
      MuiButton: { styleOverrides: { root: { border: '2px solid currentColor' } } },
    },
  }),
};

interface Props { props: MountProps; eventTarget: EventTarget }

export function App({ props, eventTarget }: Props) {
  const publish = makePublisher(eventTarget);
  return (
    <ThemeProvider theme={THEMES[props.theme] ?? THEMES.light}>
      <CssBaseline />
      <RemoteContext.Provider value={{ props, publish }}>
        <ErrorBoundary
          key={props.view}
          onError={() => publish(EVENT_NAMES.analysisFailed, { v: 1, correlationId: newCorrelationId(), code: 'INVALID_DATA' })}
        >
          <Suspense fallback={<LoadingSkeleton />}>
            {props.view === 'overview' && <OverviewView />}
            {props.view === 'hotspot' && <HotspotView />}
            {props.view === 'methodology' && <MethodologyView />}
          </Suspense>
        </ErrorBoundary>
      </RemoteContext.Provider>
    </ThemeProvider>
  );
}
