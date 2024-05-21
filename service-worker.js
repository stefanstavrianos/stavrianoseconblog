self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('static-cache').then(cache => {
      return cache.addAll([
        './',
        './styles.css',
        './script.js',
        './icon-192x192.png',
        './icon-512x512.png',
        './offline.html',
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => {
      return caches.match('./offline.html');
    })
  );
});
