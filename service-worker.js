// Service Worker para Calendario Lunar PWA
// Versión 1.0.0

const CACHE_NAME = 'calendario-lunar-v1';
const urlsToCache = [
  '/calendario-lunar-final.html',
  '/manifest.json'
];

// Instalación - cachear recursos
self.addEventListener('install', event => {
  console.log('[SW] Instalando Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cacheando archivos');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('[SW] Error al cachear:', err);
      })
  );
  self.skipWaiting();
});

// Activación - limpiar cachés viejos
self.addEventListener('activate', event => {
  console.log('[SW] Activando Service Worker...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Eliminando caché viejo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch - estrategia Network First, Cache Fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si la respuesta es válida, clonarla y guardarla en caché
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Si falla la red, buscar en caché
        return caches.match(event.request).then(response => {
          if (response) {
            console.log('[SW] Sirviendo desde caché:', event.request.url);
            return response;
          }
          // Si no está en caché y es HTML, mostrar página offline
          if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/calendario-lunar-final.html');
          }
        });
      })
  );
});

// Sincronización en segundo plano (opcional)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-events') {
    console.log('[SW] Sincronizando eventos...');
    // Aquí podrías sincronizar con Google Calendar cuando haya conexión
  }
});

// Notificaciones push (para futuro)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Nueva fase lunar',
    icon: '/icon-192.png',
    badge: '/icon-72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('🌙 Calendario Lunar', options)
  );
});
