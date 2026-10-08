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
  private readonly cfg = inject(APP_CONFIG);
  private readonly importer = inject(REMOTE_IMPORTER);
  private cached: Promise<RemoteModule> | null = null; // avoids duplicate network loads
  private failures = 0;
  private openUntil = 0;

  load(now: number = Date.now()): Promise<RemoteModule> {
    if (now < this.openUntil) return Promise.reject(new RemoteLoadError('CIRCUIT_OPEN'));
    if (!isAllowedRemoteUrl(this.cfg.remoteEntryUrl, this.cfg.remoteAllowlist)) {
      return Promise.reject(new RemoteLoadError('BLOCKED_URL'));
    }
    this.cached ??= this.loadOnce().catch((e: unknown) => {
      this.cached = null;
      this.failures++;
      if (this.failures >= FAILURE_THRESHOLD) this.openUntil = Date.now() + COOLDOWN_MS;
      throw e;
    });
    return this.cached;
  }

  /** Lets a user-initiated retry bypass the cool-down. */
  reset(): void {
    this.failures = 0;
    this.openUntil = 0;
    this.cached = null;
  }

  private async loadOnce(): Promise<RemoteModule> {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const timeout = new Promise<never>((_, reject) => {
      timer = setTimeout(() => reject(new RemoteLoadError('TIMEOUT')), this.cfg.remoteTimeoutMs);
    });
    try {
      const mod = (await Promise.race([this.importer(this.cfg.remoteEntryUrl), timeout])) as RemoteModule;
      if (!isCompatibleRemote(mod)) throw new RemoteLoadError('INCOMPATIBLE');
      this.failures = 0;
      return mod;
    } catch (e) {
      throw e instanceof RemoteLoadError ? e : new RemoteLoadError('LOAD_FAILED');
    } finally {
      clearTimeout(timer);
    }
  }
}
