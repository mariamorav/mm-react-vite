import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://mariamorav.github.io/mm-react-vite/',
  plugins: [react()]
})
