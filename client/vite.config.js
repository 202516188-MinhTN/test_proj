import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Khi React gọi tới /api, nó sẽ tự động hiểu là gọi tới http://localhost:5000/api
      '/api': 'http://localhost:5000'
    }
  }
})
