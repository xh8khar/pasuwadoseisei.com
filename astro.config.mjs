import { defineConfig } from 'astro/config';

const SITE = 'https://www.pasuwadoseisei.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto',
  },
  server: {
    host: true,
  },
  compressHTML: true,
  scopedStyleStrategy: 'class',
});
