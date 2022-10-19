import { defineConfig } from 'vite';
import path from 'node:path';
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const base = mode === 'production' ? '/' + path.basename(process.cwd()) + '/' : '/';

export default defineConfig({
  root: 'src',
  base,
  mode,
  publicDir: '../public',
  build: {
    outDir: '../dist',
    assetsDir: './'
  }
});
