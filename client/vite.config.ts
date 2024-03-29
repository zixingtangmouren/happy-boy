import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname),
  plugins: [react()],
  server: {
    middlewareMode: true,
  },
  appType: 'custom',
  base: '/static',
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
        }),
      ],
    },
  },
  build: {
    manifest: true,
    outDir: path.join(__dirname, '../server/app/public'),
    rollupOptions: {
      input: path.join(__dirname, 'src/main.tsx'),
    },
  },
});
