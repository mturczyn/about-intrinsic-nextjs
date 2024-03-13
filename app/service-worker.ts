// import { defaultCache } from '@serwist/next/browser'
import type { PrecacheEntry } from '@serwist/precaching'
// import { installSerwist } from '@serwist/sw'

declare const self: ServiceWorkerGlobalScope & {
    // Change this attribute's name to your `injectionPoint`.
    // `injectionPoint` is an InjectManifest option.
    // See https://serwist.pages.dev/docs/build/inject-manifest/configuring
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined
}

// It enables powerful features of auto caching vast amount of data
// to enhance performance on client side.
// installSerwist({
//     precacheEntries: self.__SW_MANIFEST,
//     skipWaiting: true,
//     clientsClaim: true,
//     navigationPreload: true,
//     runtimeCaching: defaultCache,
// })

const cacheName = 'about-intrinsic-nextjs'
const offlinePage = 'offline.html'

caches.open(cacheName).then((cache) => {
    cache.add(offlinePage)
})

// RespondWith must be called synchronously, but it accepts Promise resolving to Response object.
self.addEventListener('fetch', (e: FetchEvent) => {
    e.respondWith(
        fetch(e.request).catch(
            async () => (await caches.match(offlinePage)) as Response
        )
    )
})
