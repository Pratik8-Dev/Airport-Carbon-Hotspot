import { Routes } from '@angular/router';
import { authGuard, roleGuard } from './core/auth.guard';

const remotePage = () => import('./pages/remote-page.component').then((m) => m.RemotePageComponent);

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  { path: 'overview', canActivate: [authGuard], data: { title: 'Overview', view: 'overview' }, loadComponent: remotePage },
  {
    path: 'hotspot-analysis',
    canActivate: [roleGuard],
    data: { title: 'Hotspot analysis', view: 'hotspot', role: 'analyst' },
    loadComponent: remotePage,
  },
  { path: 'methodology', canActivate: [authGuard], data: { title: 'Methodology', view: 'methodology' }, loadComponent: remotePage },
  {
    path: 'access-denied',
    data: { title: 'Access denied' },
    loadComponent: () => import('./pages/access-denied.component').then((m) => m.AccessDeniedComponent),
  },
  {
    path: 'unavailable',
    data: { title: 'Unavailable' },
    loadComponent: () => import('./pages/unavailable.component').then((m) => m.UnavailableComponent),
  },
  { path: '**', redirectTo: 'unavailable' },
];
