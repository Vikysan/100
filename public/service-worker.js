self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

// Cacheování statických souborů a HTML
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open('static-cache-v1').then(cache => 
      cache.match(event.request).then(response => {
        return response || fetch(event.request).then(networkResponse => {
          // Cacheuj pouze úspěšné odpovědi
          if (networkResponse.ok && event.request.url.startsWith(self.location.origin)) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        });
      })
    )
  );
});