const cacheName = 'about-intrinsic-nextjs'
const offlinePage = 'offline.html'

caches.open(cacheName).then((cache) => {
    cache.add(offlinePage)
})

// RespondWith must be called synchronously, but it accepts Promise resolving to Response object.
self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request).catch(() => caches.match(offlinePage)))
})
