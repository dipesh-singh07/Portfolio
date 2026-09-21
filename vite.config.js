import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4173,
    strictPort: false,
    allowedHosts: [
      'portfolio-1-dul1.onrender.com',
      'portfolio-rcas.onrender.com',
      'localhost',
      '127.0.0.1',
    ],
  },
})