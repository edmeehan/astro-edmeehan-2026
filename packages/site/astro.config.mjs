import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';
import icon from "astro-icon";
import { cssWatcher } from '../../packages/shared/plugins/css-watcher.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@skele/components': path.resolve(__dirname, '../../packages/components'),
        '@skele/styles': path.resolve(__dirname, '../../packages/styles'),
        '@skele/plugins': path.resolve(__dirname, '../../packages/shared/plugins'),
      },
    },
    plugins: [
      cssWatcher()
    ],
  },
  integrations: [
    icon({
      iconDir: path.resolve(__dirname, '../icons')
    }),
  ],
});
