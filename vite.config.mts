/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/scripts/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
  build: {
    chunkSizeWarningLimit: 1000, // optional: suppress chunk warnings
  },
  // When deploying to a custom domain (charleyraluswinga.space) we serve at root
  base: "/",
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['buffer'],
  },
});
