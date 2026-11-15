import { defineConfig } from 'astro/config';
export default defineConfig({ site: process.env.SITE_URL || 'https://smartlion-waxlo.samsric8.chatgpt.site', output: 'static', server: { host: true }, vite: { server: { allowedHosts: ['terminal.local'] } } });
