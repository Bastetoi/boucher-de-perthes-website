import { defineConfig } from 'astro/config';

export default defineConfig({
  // Remplacer par le vrai domaine une fois acheté (ADR 0002).
  site: 'https://boucherdeperthes.fr',
  output: 'static',
  trailingSlash: 'never',
});
