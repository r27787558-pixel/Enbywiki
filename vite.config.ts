import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub *project* pages are served from https://<user>.github.io/<repo>/.
// Override with VITE_BASE=/ for a user site, a custom domain, or another host.
const REPO_BASE = '/Enbywiki/';

/**
 * GitHub Pages has no server-side SPA rewrite, so any unknown path returns 404.
 * Shipping the built app as `404.html` lets deep links (e.g. /Enbywiki/docs/foo)
 * boot the SPA, which then routes correctly on the client.
 */
function spaFallbackPlugin(): Plugin {
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    writeBundle(options) {
      const outDir = options.dir ?? resolve(process.cwd(), 'dist');
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'));
    },
  };
}

export default defineConfig(({ command }) => ({
  // Dev always serves from the root; builds use the repository base path.
  base: process.env.VITE_BASE ?? (command === 'build' ? REPO_BASE : '/'),
  plugins: [react(), spaFallbackPlugin()],
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          markdown: ['react-markdown', 'remark-gfm', 'rehype-raw', 'rehype-slug'],
          i18n: ['i18next', 'react-i18next'],
        },
      },
    },
  },
}));
