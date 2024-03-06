import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/static',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    // origin: 'http://127.0.0.1:7001',
  },
});
