import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Polling evita a queda do servidor por "EBUSY" quando o Windows bloqueia uma pasta
    watch: { usePolling: true, interval: 300 },
  },
})
