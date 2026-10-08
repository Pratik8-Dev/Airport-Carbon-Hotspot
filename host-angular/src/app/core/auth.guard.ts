import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService, Role } from './auth.service';

/** Redirects unauthenticated users to the unavailable page (sign-in is owned by the identity provider). */
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.isAuthenticated() ? true : inject(Router).createUrlTree(['/unavailable']);
};

/** Least-privilege check: route data `role` must be held by the user. */
export const roleGuard: CanActivateFn = (route) => {
  const required = route.data['role'] as Role | undefined;
  const auth = inject(AuthService);
  if (!auth.isAuthenticated()) return inject(Router).createUrlTree(['/unavailable']);
  return !required || auth.hasRole(required) ? true : inject(Router).createUrlTree(['/access-denied']);
};
