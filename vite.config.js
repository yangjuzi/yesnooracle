import { defineConfig } from 'vite'

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
        main: './index.html',
        blog: './public/blog.html',
        'blog-7': './public/blog-7.html',
        'decision-tools': './public/decision-making-tools.html',
        'psychology': './public/psychology-insights.html',
        'learning': './public/learning-resources.html',
        'privacy': './public/privacy-policy.html'
      }
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
}) 