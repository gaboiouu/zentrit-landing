// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://astro.build/config
export default defineConfig({
  site: 'https://zentrit-landing.vercel.app',
  trailingSlash: 'always',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});