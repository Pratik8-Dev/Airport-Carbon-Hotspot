import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-access-denied',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-labelledby="ad-title">
      <h1 id="ad-title">Access denied</h1>
      <p>Your account does not have permission to view this page. Contact your administrator if you need access.</p>
      <a routerLink="/overview">Back to overview</a>
    </section>
  `,
})
export class AccessDeniedComponent {}
