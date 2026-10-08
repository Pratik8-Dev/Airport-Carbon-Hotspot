import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@acp/contracts': fileURLToPath(new URL('../contracts/src/index.ts', import.meta.url)) } },
  build: {
    sourcemap: false, // no production source maps unless explicitly approved
    target: 'es2022',
    lib: { entry: 'src/remote.tsx', formats: ['es'], fileName: () => 'remoteEntry.js' },
    chunkSizeWarningLimit: 700,
  },
  define: process.env['VITEST'] ? {} : { 'process.env.NODE_ENV': JSON.stringify('production') },
  preview: { cors: { origin: ['http://localhost:4200'] }, headers: { 'X-Content-Type-Options': 'nosniff' } },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    include: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
    server: { deps: { inline: [/@mui/] } },
  },
});
