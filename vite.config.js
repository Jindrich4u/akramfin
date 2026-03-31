import { defineConfig } from 'vite';
import { readdirSync, statSync } from 'node:fs';
import { resolve, extname } from 'node:path';

function collectHtmlEntries(dir, base = dir, entries = {}) {
  for (const item of readdirSync(dir)) {
    if (item === 'dist' || item === 'node_modules' || item.startsWith('.')) continue;
    const fullPath = resolve(dir, item);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      collectHtmlEntries(fullPath, base, entries);
      continue;
    }

    if (extname(item) === '.html') {
      const key = fullPath
        .replace(base + '/', '')
        .replace(/\.html$/, '')
        .replace(/\//g, '-');
      entries[key] = fullPath;
    }
  }

  return entries;
}

export default defineConfig(() => {
  const root = resolve(__dirname);
  const input = collectHtmlEntries(root);

  return {
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      minify: 'terser',
      rollupOptions: { input }
    },
    publicDir: 'public'
  };
});
