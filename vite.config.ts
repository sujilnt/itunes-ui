import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@store': path.resolve(__dirname, 'src/store.ts'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@api': path.resolve(__dirname, 'src/api'),
      "@services": path.resolve(__dirname, 'src/services'),
      "@hooks": path.resolve(__dirname, 'src/hooks'),
    },
  },
  define: {
    API_URL: JSON.stringify('/api'),
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
