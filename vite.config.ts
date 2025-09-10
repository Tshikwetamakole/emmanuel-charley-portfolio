import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative paths so assets load correctly on custom domains
export default defineConfig({
  base: './', // important: generates ./assets/... not /<repo>/assets/...
  plugins: [react()],
})
