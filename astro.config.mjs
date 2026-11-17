import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  redirects: {
    '/productos/atún': '/productos/atun',
    '/content/certificaciones': '/certificaciones',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
