import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Served from the root of a custom domain (and at root during local dev).
  base: '/',
  publicDir: 'Public',
})
