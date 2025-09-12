import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // optional: suppress chunk warnings
  },
base: "/emmanuel-charley-portfolio/", // critical for GitHub Pages
});
