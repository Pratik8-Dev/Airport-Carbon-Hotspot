import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import { ThemeName } from '@acp/contracts';
import { APP_CONFIG } from './core/app-config';
import { NotificationService } from './core/notification.service';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly appConfig = inject(APP_CONFIG);
  protected readonly notices = inject(NotificationService);
  protected readonly theme = inject(ThemeService);
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);

  protected readonly nav = [
    { path: '/overview', label: 'Overview' },
    { path: '/hotspot-analysis', label: 'Hotspot analysis' },
    { path: '/methodology', label: 'Methodology' },
  ];

  protected readonly apiHealthy = signal<boolean | null>(null);

  protected readonly crumb = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => {
        let activeRoute = this.router.routerState.snapshot.root;
        while (activeRoute.firstChild) activeRoute = activeRoute.firstChild;
        return (activeRoute.data['title'] as string | undefined) ?? '';
      }),
    ),
    { initialValue: '' },
  );

  constructor() {
    this.http.get(`${this.appConfig.apiBaseUrl}/api/v1/health`).subscribe({
      next: () => this.apiHealthy.set(true),
      error: () => this.apiHealthy.set(false),
    });
  }

  protected setTheme(value: string): void {
    if ((this.theme.options as readonly string[]).includes(value)) this.theme.theme.set(value as ThemeName);
  }
}
