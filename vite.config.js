import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Rick-Morty/",	
  plugins: [react()],
  server:{
    host: true,	  
  }
})
