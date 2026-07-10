import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-portfolio-domain.vercel.app', // update after deploying
  integrations: [tailwind()],
});
