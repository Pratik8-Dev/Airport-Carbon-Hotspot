import { Injectable, InjectionToken, inject } from '@angular/core';
import { RemoteModule, isAllowedRemoteUrl, isCompatibleRemote } from '@acp/contracts';
import { APP_CONFIG } from './app-config';

export type RemoteLoadErrorCode = 'BLOCKED_URL' | 'TIMEOUT' | 'LOAD_FAILED' | 'INCOMPATIBLE' | 'CIRCUIT_OPEN';

export class RemoteLoadError extends Error {
  constructor(readonly code: RemoteLoadErrorCode) {
    super(code);
    this.name = 'RemoteLoadError';
  }
}

/** Replaceable in tests. The default is a native ES-module dynamic import of the (allow-listed) remote entry. */
export const REMOTE_IMPORTER = new InjectionToken<(url: string) => Promise<unknown>>('REMOTE_IMPORTER', {
  factory: () => (url: string) => import(/* @vite-ignore */ url),
});

const FAILURE_THRESHOLD = 2;
const COOLDOWN_MS = 30_000;

@Injectable({ providedIn: 'root' })
export class RemoteLoaderService {
  private readonly appConfig = inject(APP_CONFIG);
  private readonly importer = inject(REMOTE_IMPORTER);
  private cached: Promise<RemoteModule> | null = null; // avoids duplicate network loads
  private consecutiveFailures = 0;
  private circuitOpenUntil = 0;

  load(now: number = Date.now()): Promise<RemoteModule> {
    if (now < this.circuitOpenUntil) return Promise.reject(new RemoteLoadError('CIRCUIT_OPEN'));
    if (!isAllowedRemoteUrl(this.appConfig.remoteEntryUrl, this.appConfig.remoteAllowlist)) {
      return Promise.reject(new RemoteLoadError('BLOCKED_URL'));
    }
    this.cached ??= this.loadOnce().catch((error: unknown) => {
      this.cached = null;
      this.consecutiveFailures++;
      if (this.consecutiveFailures >= FAILURE_THRESHOLD) this.circuitOpenUntil = Date.now() + COOLDOWN_MS;
      throw error;
    });
    return this.cached;
  }

  /** Lets a user-initiated retry bypass the cool-down. */
  reset(): void {
    this.consecutiveFailures = 0;
    this.circuitOpenUntil = 0;
    this.cached = null;
  }

  private async loadOnce(): Promise<RemoteModule> {
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;
    const timeout = new Promise<never>((_, reject) => {
      timeoutHandle = setTimeout(() => reject(new RemoteLoadError('TIMEOUT')), this.appConfig.remoteTimeoutMs);
    });
    try {
      const remoteModule = (await Promise.race([this.importer(this.appConfig.remoteEntryUrl), timeout])) as RemoteModule;
      if (!isCompatibleRemote(remoteModule)) throw new RemoteLoadError('INCOMPATIBLE');
      this.consecutiveFailures = 0;
      return remoteModule;
    } catch (error) {
      throw error instanceof RemoteLoadError ? error : new RemoteLoadError('LOAD_FAILED');
    } finally {
      clearTimeout(timeoutHandle);
    }
  }
}
