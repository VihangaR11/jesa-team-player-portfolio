import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// The portfolio previously installed an offline-first service worker. That can
// keep an old deployment visible after GitHub Pages has already published a new
// bundle, so remove legacy registrations and caches before future visits.
async function clearLegacyOfflineCache() {
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.unregister()));
  }

  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
  }
}

void clearLegacyOfflineCache();

const container = document.getElementById('root');
createRoot(container!).render(<App />);
