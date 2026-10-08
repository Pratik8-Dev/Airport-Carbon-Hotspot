import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, provideRouter } from '@angular/router';
import { Component, signal } from '@angular/core';
import { EVENT_NAMES, RemoteHandle, RemoteModule, emit } from '@acp/contracts';
import { APP_CONFIG, DEFAULT_APP_CONFIG } from './core/app-config';
import { AuthService } from './core/auth.service';
import { authGuard, roleGuard } from './core/auth.guard';
import { correlationInterceptor } from './core/correlation.interceptor';
import { REMOTE_IMPORTER, RemoteLoaderService } from './core/remote-loader.service';
import { NotificationService } from './core/notification.service';
import { ReactHostComponent } from './shell/react-host.component';
import { routes } from './app.routes';

const route = (data: Record<string, unknown>) => ({ data }) as unknown as ActivatedRouteSnapshot;
const state = {} as RouterStateSnapshot;

describe('guards', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideRouter(routes)] }));

  it('allows analysts and denies viewers on the hotspot route', () => {
    const auth = TestBed.inject(AuthService);
    const router = TestBed.inject(Router);
    expect(TestBed.runInInjectionContext(() => roleGuard(route({ role: 'analyst' }), state))).toBe(true);
    auth.setRolesForDemo(['viewer']);
    const r = TestBed.runInInjectionContext(() => roleGuard(route({ role: 'analyst' }), state));
    expect(router.serializeUrl(r as ReturnType<Router['createUrlTree']>)).toBe('/access-denied');
  });

  it('redirects unauthenticated users to /unavailable', () => {
    TestBed.inject(AuthService).setRolesForDemo([]);
    const r = TestBed.runInInjectionContext(() => authGuard(route({}), state));
    expect(TestBed.inject(Router).serializeUrl(r as ReturnType<Router['createUrlTree']>)).toBe('/unavailable');
  });

  it('defines the required top-level routes', () => {
    const paths = routes.map((r) => r.path);
    ['overview', 'hotspot-analysis', 'methodology', 'access-denied', 'unavailable'].forEach((p) => expect(paths).toContain(p));
  });
});

describe('correlationInterceptor', () => {
  it('adds a correlation id and credentials only for the API origin', () => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptors([correlationInterceptor])), provideHttpClientTesting()],
    });
    const http = TestBed.inject(HttpClient);
    const ctl = TestBed.inject(HttpTestingController);
    http.get(`${DEFAULT_APP_CONFIG.apiBaseUrl}/api/v1/health`).subscribe();
    const req = ctl.expectOne(`${DEFAULT_APP_CONFIG.apiBaseUrl}/api/v1/health`);
    expect(req.request.headers.get('X-Correlation-ID')).toMatch(/[0-9a-f-]{36}/);
    expect(req.request.withCredentials).toBe(true);
    expect(req.request.headers.has('Authorization')).toBe(false);
    http.get('https://other.example/x').subscribe();
    const other = ctl.expectOne('https://other.example/x');
    expect(other.request.headers.has('X-Correlation-ID')).toBe(false);
  });
});

describe('RemoteLoaderService', () => {
  const okModule: RemoteModule = { contractVersion: 1, mount: () => ({ update() {}, unmount() {} }) };

  it('blocks non-allow-listed URLs', async () => {
    TestBed.configureTestingModule({
      providers: [{ provide: APP_CONFIG, useValue: { ...DEFAULT_APP_CONFIG, remoteEntryUrl: 'https://evil.example/remoteEntry.js' } }],
    });
    await expect(TestBed.inject(RemoteLoaderService).load()).rejects.toMatchObject({ code: 'BLOCKED_URL' });
  });

  it('rejects incompatible contract versions', async () => {
    TestBed.configureTestingModule({ providers: [{ provide: REMOTE_IMPORTER, useValue: async () => ({ ...okModule, contractVersion: 99 }) }] });
    await expect(TestBed.inject(RemoteLoaderService).load()).rejects.toMatchObject({ code: 'INCOMPATIBLE' });
  });

  it('times out and opens the circuit after repeated failures', async () => {
    TestBed.configureTestingModule({
      providers: [
        { provide: APP_CONFIG, useValue: { ...DEFAULT_APP_CONFIG, remoteTimeoutMs: 10 } },
        { provide: REMOTE_IMPORTER, useValue: () => new Promise(() => undefined) },
      ],
    });
    const loader = TestBed.inject(RemoteLoaderService);
    await expect(loader.load()).rejects.toMatchObject({ code: 'TIMEOUT' });
    await expect(loader.load()).rejects.toMatchObject({ code: 'TIMEOUT' });
    await expect(loader.load()).rejects.toMatchObject({ code: 'CIRCUIT_OPEN' });
  });

  it('loads once for concurrent callers', async () => {
    const importer = vi.fn(async () => okModule);
    TestBed.configureTestingModule({ providers: [{ provide: REMOTE_IMPORTER, useValue: importer }] });
    const loader = TestBed.inject(RemoteLoaderService);
    await Promise.all([loader.load(), loader.load()]);
    expect(importer).toHaveBeenCalledTimes(1);
  });
});

@Component({ imports: [ReactHostComponent], template: `<app-react-host [view]="view()" (remoteEvent)="events.push($event.name)" />` })
class HostFixture {
  view = signal<'overview' | 'hotspot'>('overview');
  events: string[] = [];
}

describe('ReactHostComponent', () => {
  const setup = (importer: () => Promise<unknown>) => {
    TestBed.configureTestingModule({ providers: [{ provide: REMOTE_IMPORTER, useValue: importer }] });
    const fixture = TestBed.createComponent(HostFixture);
    fixture.detectChanges();
    return fixture;
  };
  const flush = async (f: ReturnType<typeof setup>) => { await new Promise((r) => setTimeout(r)); f.detectChanges(); await f.whenStable(); };

  it('mounts once, transfers props, forwards validated events and unmounts on destroy', async () => {
    const handle: RemoteHandle = { update: vi.fn(), unmount: vi.fn() };
    const mount = vi.fn(() => handle);
    const fixture = setup(async () => ({ contractVersion: 1, mount }));
    await flush(fixture);
    expect(mount).toHaveBeenCalledTimes(1);
    const props = (mount.mock.calls[0] as unknown[])[1] as Record<string, unknown>;
    expect(props['view']).toBe('overview');
    expect(props['theme']).toBe('light');
    expect(JSON.stringify(props)).not.toMatch(/token/i);

    fixture.componentInstance.view.set('hotspot');
    fixture.detectChanges();
    expect(handle.update).toHaveBeenCalled();

    const el = fixture.nativeElement.querySelector('[data-testid="remote-container"]') as HTMLElement;
    emit(el, EVENT_NAMES.analysisCompleted, { v: 1, correlationId: 'abc-12345', hotspotFound: true, reductionKgCO2e: 10 });
    el.dispatchEvent(new CustomEvent(EVENT_NAMES.analysisStarted, { detail: { v: 9 } })); // invalid payload is ignored
    expect(fixture.componentInstance.events).toEqual([EVENT_NAMES.analysisCompleted]);

    emit(el, EVENT_NAMES.recommendationSelected, { v: 1, correlationId: 'abc-12345', categoryId: 'gate-aux-power', zoneId: 'PIER-B' });
    expect(TestBed.inject(NotificationService).notices().length).toBeGreaterThan(0);

    fixture.destroy();
    expect(handle.unmount).toHaveBeenCalledTimes(1);
    emit(el, EVENT_NAMES.analysisCompleted, { v: 1, correlationId: 'abc-12345', hotspotFound: true, reductionKgCO2e: 1 });
    expect(fixture.componentInstance.events.length).toBe(2); // listener removed
  });

  it('shows the fallback UI when the remote fails to load', async () => {
    const fixture = setup(async () => { throw new Error('boom'); });
    await flush(fixture);
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('The analysis module is unavailable');
    expect(text).not.toContain('boom');
  });
});
