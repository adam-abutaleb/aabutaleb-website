// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO(content): set to the real deployed URL so canonical + Open Graph URLs are absolute.
  site: 'https://example.com',
  vite: { plugins: [tailwindcss()] },
});
