/* Retire the previous offline-first portfolio service worker. */
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((names) => Promise.all(names.map((name) => caches.delete(name)))),
      self.registration.unregister(),
      self.clients.claim(),
    ]).then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => Promise.all(clients.map((client) => client.navigate(client.url)))),
  );
});
