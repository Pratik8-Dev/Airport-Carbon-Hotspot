# Airport Carbon Hotspot (synthetic data, advisory only)

Angular 21 host + React 19 / Material UI micro-frontend that finds **one** avoidable emissions hotspot
(gate auxiliary power at fictional `PIER-B`), recommends **one** intervention and simulates before/after emissions.

## Layout
- `contracts/` framework-neutral package: domain types, synthetic dataset, calculations, hotspot rules, versioned event/mount contract and validators (+ vitest tests).
- `mock-api/` Node mock REST API (`/api/v1/health|emissions/overview|hotspots/analysis|recommendations/current|methodology`, `POST /api/v1/simulations`).
- `remote-react/` React remote with Material UI, built as an ES module `remoteEntry.js` exporting `mount(container, props)` and `contractVersion`.
- `host-angular/` Angular shell (standalone components, signals, lazy routes, guards, interceptor, error handler, remote loader with allowlist/timeout/circuit breaker, wrapper component).

## Architecture decision
The prompt asks for Module Federation or Native Federation. Angular 21's esbuild builder and the Vite-built React remote
make a Webpack Module Federation setup incompatible without extra tooling, so this uses the Native Federation principle:
the remote is an independently built and deployed ES module, discovered via a configured URL, validated against an origin
allowlist and contract version, and loaded with a native dynamic `import()`. React is bundled inside the remote, so there
are no shared singletons and no host/remote version coupling. Production hardening: add a federation manifest and SRI/signature checks.

## Run
Requires Node 22. Install each package (use `--legacy-peer-deps` if npm fails): `npm i` in the root, `remote-react` and `host-angular`.
```
npm run api                              # root: http://localhost:4300
cd remote-react; npm run build; npm run serve   # http://localhost:4201
cd host-angular; npx ng serve            # http://localhost:4200
```
Tests: `npm run test:contracts` (root), `npm test` (remote-react), `npx ng test --no-watch` (host-angular).

## Method (all values synthetic)
`emissions = hours × rate × factor` (electricity 0.4 kgCO2e/kWh, diesel 2.7 kgCO2e/L, adjustable within validated ranges);
avoidable = baseline − simulated; reduction % = avoidable / baseline × 100. Safety-critical records are never eligible.
Confidence = 0.4·completeness + 0.3·measured share + 0.3·repeatability (threshold 0.6). If safety eligibility or evidence
is insufficient the UI shows "No safe recommendation can be generated from the available data."

## Safety, security, privacy
No connection to operational systems; no commands; human review mandatory. CSP, CORS allowlist, rate limit, 2 KB payload
limit, correlation IDs, no tokens in events or storage, no `dangerouslySetInnerHTML`, no production source maps. Run
`npm audit` per package in CI.

## Scope notes
Auth is a demo stub (`AuthService`); real deployments use an OIDC BFF with HttpOnly SameSite cookies. Not implemented:
CI pipeline files, separate integration test suite and full WCAG audit (axe checks cover KpiCard only).
