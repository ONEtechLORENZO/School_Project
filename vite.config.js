import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Served under /School_Project/ on GitHub Pages; at root during local dev.
  base: command === 'build' ? '/School_Project/' : '/',
  publicDir: 'Public',
}))
