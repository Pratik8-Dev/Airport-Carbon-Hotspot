import {
  ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, computed, effect, inject, input,
  output, signal, viewChild,
} from '@angular/core';
import { CONTRACT_VERSION, EVENT_NAMES, EventName, MountProps, RemoteHandle, RemoteView, listen } from '@acp/contracts';
import { APP_CONFIG } from '../core/app-config';
import { AuthService } from '../core/auth.service';
import { NotificationService } from '../core/notification.service';
import { RemoteLoaderService } from '../core/remote-loader.service';
import { ThemeService } from '../core/theme.service';

export interface RemoteEvent { name: EventName; correlationId: string }

/** Angular wrapper for the React remote: loads, mounts, updates props and cleans up. Knows nothing about React internals. */
@Component({
  selector: 'app-react-host',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div #container class="remote-container" [hidden]="state() !== 'ready'" data-testid="remote-container"></div>
    @switch (state()) {
      @case ('loading') {
        <p role="status" class="remote-status">Loading analysis module…</p>
      }
      @case ('failed') {
        <section class="fallback" role="alert" aria-labelledby="fb-title">
          <h2 id="fb-title">The analysis module is unavailable</h2>
          <p>
            The interactive analysis could not be loaded. This does not affect any airport system, because this tool is
            advisory only. Please try again or contact support.
          </p>
          <button type="button" (click)="retry()">Try again</button>
        </section>
      }
    }
  `,
  styles: `
    .remote-status, .fallback { padding: 16px; border: 1px solid var(--border); border-radius: 8px; background: var(--surface); }
    .fallback h2 { margin-top: 0; }
  `,
})
export class ReactHostComponent {
  readonly view = input.required<RemoteView>();
  readonly remoteEvent = output<RemoteEvent>();

  protected readonly state = signal<'loading' | 'ready' | 'failed'>('loading');

  private readonly container = viewChild.required<ElementRef<HTMLElement>>('container');
  private readonly cfg = inject(APP_CONFIG);
  private readonly loader = inject(RemoteLoaderService);
  private readonly theme = inject(ThemeService);
  private readonly auth = inject(AuthService);
  private readonly notices = inject(NotificationService);

  private handle: RemoteHandle | null = null;
  private stopListening: (() => void) | null = null;
  private destroyed = false;
  private starting = false;

  // Only non-sensitive, serialisable values are passed. No tokens or user identity.
  private readonly props = computed<MountProps>(() => ({
    contractVersion: CONTRACT_VERSION,
    view: this.view(),
    apiBaseUrl: this.cfg.apiBaseUrl,
    airportContext: this.cfg.airportContext,
    filters: { analysisDays: 30 },
    featureFlags: this.cfg.featureFlags,
    theme: this.theme.theme(),
    auth: { state: 'authenticated', roles: [...this.auth.roles()] },
  }));

  constructor() {
    inject(DestroyRef).onDestroy(() => this.teardown());
    afterNextRender(() => void this.start());
    effect(() => {
      const p = this.props();
      this.handle?.update(p);
    });
  }

  protected retry(): void {
    this.loader.reset();
    this.state.set('loading');
    void this.start();
  }

  private async start(): Promise<void> {
    if (this.starting || this.handle || this.destroyed) return; // prevents duplicate mounting
    this.starting = true;
    try {
      const remote = await this.loader.load();
      if (this.destroyed) return;
      const el = this.container().nativeElement;
      this.stopListening = listen(el, (name, detail) => this.onRemoteEvent(name, detail.correlationId));
      this.handle = remote.mount(el, this.props());
      this.state.set('ready');
    } catch {
      if (!this.destroyed) this.state.set('failed');
    } finally {
      this.starting = false;
    }
  }

  private onRemoteEvent(name: EventName, correlationId: string): void {
    this.remoteEvent.emit({ name, correlationId });
    if (name === EVENT_NAMES.analysisFailed) this.notices.push('error', 'The analysis could not be completed. Please try again later.');
    if (name === EVENT_NAMES.recommendationSelected) {
      this.notices.push('info', 'Recommendation marked for operational review. No equipment or procedure was changed.');
    }
  }

  private teardown(): void {
    this.destroyed = true;
    this.stopListening?.();
    this.stopListening = null;
    this.handle?.unmount();
    this.handle = null;
  }
}
