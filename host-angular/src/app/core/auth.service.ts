import { Injectable, computed, signal } from '@angular/core';

export type Role = 'viewer' | 'analyst';

/**
 * Demo session state. In production the identity provider (OIDC code flow + PKCE via a backend-for-frontend)
 * sets a Secure, HttpOnly, SameSite cookie; the host only learns coarse roles. No tokens are held in JS or storage.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly rolesSignal = signal<readonly Role[]>(['analyst']);
  readonly roles = this.rolesSignal.asReadonly();
  readonly isAuthenticated = computed(() => this.rolesSignal().length > 0);

  hasRole(role: Role): boolean {
    return this.rolesSignal().includes(role);
  }

  setRolesForDemo(roles: readonly Role[]): void {
    this.rolesSignal.set(roles);
  }
}
