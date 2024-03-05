import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      commonjs(),
      react(),
    ],
  server: {
    port: 3000,
    open: true,
  },
  assetsInclude: ['**/*.JPG'],
});
