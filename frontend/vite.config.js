import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import reactTeste from  '@vitejs/plugin-react' 
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // reactTeste()
  ],
  test : { 
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js'
  }
})
