import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Default port for Vite is 5173, but you can change it to 5175 or any other port
  }
})
