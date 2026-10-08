import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { APP_CONFIG } from './app-config';

/** Adds a correlation ID and sends cookies only to the configured API origin. Never touches tokens. */
export const correlationInterceptor: HttpInterceptorFn = (req, next) => {
  const cfg = inject(APP_CONFIG);
  if (!req.url.startsWith(cfg.apiBaseUrl)) return next(req);
  return next(
    req.clone({
      setHeaders: { 'X-Correlation-ID': req.headers.get('X-Correlation-ID') ?? crypto.randomUUID() },
      withCredentials: true,
    }),
  );
};
