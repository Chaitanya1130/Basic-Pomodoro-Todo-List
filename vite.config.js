import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base:'./'
=======
  build: {
    outDir: 'dist', // Ensure the output directory is set
  },
>>>>>>> af1c24c (Fix Vite build config for deployment)
})
