import { InjectionToken } from '@angular/core';

export interface AppConfig {
  environmentName: 'local' | 'test' | 'production';
  apiBaseUrl: string;
  remoteEntryUrl: string;
  remoteAllowlist: readonly string[];
  remoteTimeoutMs: number;
  featureFlags: { showSensitivity: boolean };
  airportContext: { airportId: string; terminalId: string };
}

// Deployment would replace these values via build configuration (never secrets).
export const DEFAULT_APP_CONFIG: AppConfig = {
  environmentName: 'local',
  apiBaseUrl: 'http://localhost:4300',
  remoteEntryUrl: 'http://localhost:4201/remoteEntry.js',
  remoteAllowlist: ['http://localhost:4201'],
  remoteTimeoutMs: 8000,
  featureFlags: { showSensitivity: true },
  airportContext: { airportId: 'FICT-APT-01', terminalId: 'TERM-A' },
};

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG', { factory: () => DEFAULT_APP_CONFIG });
