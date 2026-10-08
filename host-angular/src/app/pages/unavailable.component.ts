import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unavailable',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-labelledby="un-title">
      <h1 id="un-title">Service unavailable</h1>
      <p>This page is not available right now. No airport operations are affected because this tool is advisory only.</p>
      <a routerLink="/overview">Back to overview</a>
    </section>
  `,
})
export class UnavailableComponent {}
