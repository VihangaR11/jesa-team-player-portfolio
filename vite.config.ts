import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/jesa-team-player-portfolio/',
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate', includeAssets: ['favicon.png'],
    manifest: {
      name: 'Vihanga Rathnayake — JESA Team Player Portfolio', short_name: 'Vihanga Team',
      description: 'Evidence-led portfolio for the JESA Best Team Player category.',
      theme_color: '#060d1a', background_color: '#060d1a', display: 'standalone',
      scope: '/jesa-team-player-portfolio/', start_url: '/jesa-team-player-portfolio/',
      icons: [
        { src: '/jesa-team-player-portfolio/favicon.png', sizes: '192x192', type: 'image/png' },
        { src: '/jesa-team-player-portfolio/favicon.png', sizes: '512x512', type: 'image/png' },
      ],
    },
  })],
});
