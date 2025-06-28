// vite.config.mts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/emmanuel-charley-portfolio/", // <<< must match repo name
})
