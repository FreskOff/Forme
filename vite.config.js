import { defineConfig } from 'vite';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html'
    }
  },
  server: {
    port: 3000,
    open: true
  },
  plugins: [
    imagemin({
      gifsicle: { optimizationLevel: 3 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.8, 0.9] },
      svgo: {
        plugins: [{ removeViewBox: false }]
      }
    })
  ]
});