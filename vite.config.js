import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // <--- This line is the fix
    globals: true,
    setupFiles: './src/test/setup.js', // We will create this next
  },
})
