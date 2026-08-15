import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/jesa-team-player-portfolio/',
  plugins: [react()],
});
