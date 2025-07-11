import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/emmanuel-charley-portfolio/', // Matches your GitHub repo name
});
