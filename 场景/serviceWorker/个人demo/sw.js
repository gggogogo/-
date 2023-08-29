self.addEventListener('install', (event) => {
  console.log('V1 installing…11', event);

  event.waitUntil(
    caches.open("static-v1").then(cache => cache.add("https://7.url.cn/fudao/pc/bd3fa67732209940a5ca1db12970e41e.png"))
  );
});

self.addEventListener('activate', (event) => {
  console.log('V1 now ready to handle fetches!12');
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
                return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});


