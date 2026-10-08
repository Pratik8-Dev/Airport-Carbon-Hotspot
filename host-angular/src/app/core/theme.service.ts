import { Injectable, computed, effect, signal } from '@angular/core';
import type { ThemeName } from '@acp/contracts';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<ThemeName>('light');
  readonly options: readonly ThemeName[] = ['light', 'dark', 'high-contrast'];
  readonly label = computed(() => this.theme().replace('-', ' '));

  constructor() {
    effect(() => document.documentElement.setAttribute('data-theme', this.theme()));
  }
}
