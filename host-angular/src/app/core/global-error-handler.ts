import { ErrorHandler, Injectable, inject } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private readonly notices = inject(NotificationService);

  handleError(error: unknown): void {
    // Structured, redacted diagnostic: error name only, never messages, payloads or tokens.
    console.error(JSON.stringify({ event: 'host-error', name: (error as Error | undefined)?.name ?? 'Unknown' }));
    this.notices.push('error', 'Something went wrong. Please try again or contact support.');
  }
}
