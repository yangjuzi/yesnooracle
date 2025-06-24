import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readdirSync } from 'fs'

// Get all HTML files from the public directory
const publicHtmlFiles = readdirSync(resolve(__dirname, 'public'))
  .filter(file => file.endsWith('.html'))
  .reduce((acc, file) => {
    const name = file.slice(0, -5); // remove .html extension
    acc[name] = resolve(__dirname, 'public', file);
    return acc;
  }, {});

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...publicHtmlFiles
      }
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
}) 