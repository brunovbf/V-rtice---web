// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vertice-uy.netlify.app',
  integrations: [sitemap()],
  build: {
    // Netlify sirve /demos/veterinaria sin barra final
    format: 'directory',
  },
  image: {
    // Las capturas del handoff son PNG de 2880px; astro:assets las baja a webp
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
