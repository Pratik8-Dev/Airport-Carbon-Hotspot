import { Injectable, inject, signal } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface Notice { id: number; kind: 'info' | 'error'; text: string }

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly announcer = inject(LiveAnnouncer);
  private nextId = 1;
  readonly notices = signal<readonly Notice[]>([]);

  /** Only user-safe, generic text is accepted here: callers must never pass raw error details. */
  push(kind: Notice['kind'], text: string): void {
    this.notices.update((existingNotices) => [...existingNotices.slice(-2), { id: this.nextId++, kind, text }]);
    void this.announcer.announce(text, kind === 'error' ? 'assertive' : 'polite');
  }

  dismiss(id: number): void {
    this.notices.update((existingNotices) => existingNotices.filter((notice) => notice.id !== id));
  }
}
