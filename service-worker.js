// service-worker.js

// Install event: cache logic or setup
self.addEventListener('install', event => {
  console.log('[Service Worker] Installed');
  self.skipWaiting(); // Optional: activate immediately
});

// Activate event: clean up or take control
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activated');
  self.clients.claim(); // Take control of all clients immediately
});

// Optional: Intercept all fetch requests
self.addEventListener('fetch', event => {
  // Example: Log every fetch request
  console.log('[Service Worker] Fetching:', event.request.url);

  // Example passthrough (you can intercept/cache here if needed)
  // event.respondWith(fetch(event.request));
});
