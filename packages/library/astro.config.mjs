// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';
import icon from "astro-icon";
import { cssWatcher } from '../../packages/shared/plugins/css-watcher.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4322
  },
  integrations: [
    icon({
      iconDir: path.resolve(__dirname, '../icons')
    }),
  ],
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
});
