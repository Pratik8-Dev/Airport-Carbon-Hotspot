import '@testing-library/jest-dom/vitest';
import { expect } from 'vitest';
import * as axeMatchers from 'vitest-axe/matchers';

expect.extend(axeMatchers);

class RO { observe(): void {} unobserve(): void {} disconnect(): void {} }
(globalThis as unknown as { ResizeObserver: typeof RO }).ResizeObserver = RO;
