self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Deja pasar todas las peticiones en vivo hacia Google Apps Script
  e.respondWith(fetch(e.request));
});
