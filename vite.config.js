import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: 'codepen-clone',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    assetsDir: './'
  }
});
