const CACHE="arya-journal-v5-16-header-asset-fix";
const FILES=["./","./index.html","./manifest.json","./assets/icon.svg","./assets/icon-192.png","./assets/icon-512.png","./assets/apple-touch-icon.png","./assets/reference-header.jpg","./arya-metal-logo.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match("./index.html")))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
