// Cache names
const CACHE_NAME = 'linux-learning-v1';

// Files to cache for offline use
const filesToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/podcast-player.js',
  '/EMMI.png',
  '/buymeacoffee.png',
  '/linux_podcast.mp3',
  '/site.webmanifest',
  '/manifest.json',
  '/favicon/favicon.png',
  '/favicon/favicon.ico',
  
  // Content files - these are key for your PWA to work offline
  '/content/shell-scripting.html',
  '/content/user-administration.html',
  '/content/scheduling-jobs.html',
  '/content/linux-security.html',
  '/content/admin-tasks.html',
  '/content/pseudocode-standard.html'
];

// Install event - pre-cache all essential assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(filesToCache);
      })
      .catch(error => {
        console.error('Pre-caching failed:', error);
      })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Add response to cache
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(error => {
            console.error('Fetch failed:', error);
            // You could return a custom offline page here
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/');
            }
          });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheAllowlist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Handle offline synchronization when back online
self.addEventListener('sync', event => {
  if (event.tag === 'sync-progress') {
    console.log('[Service Worker] Syncing user progress...');
    // Here you would sync user progress from IndexedDB to server
    // Implementing this would require additional client-side code
  }
});

// Handle push notifications
self.addEventListener('push', event => {
  const data = event.data.json();
  console.log('[Service Worker] Push Received', data);
  
  const options = {
    body: data.body,
    icon: '/favicon/android-chrome-192x192.png',
    badge: '/favicon/favicon-32x32.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('Linux Learning Platform', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({type: 'window'}).then(windowClients => {
      // Check if there is already a window and navigate to URL
      for (const client of windowClients) {
        if (client.url === event.notification.data.url && 'focus' in client) {
          return client.focus();
        }
      }
      // Otherwise open a new window
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.url);
      }
    })
  );
}); 