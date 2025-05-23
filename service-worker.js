// Cache names
const CACHE_NAME = 'linux-learning-v3';
const AUDIO_CACHE_NAME = 'linux-learning-audio-v1';

// Files to cache for offline use
const filesToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/assets/css/styles.css',
  '/assets/js/app.js',
  '/assets/js/podcast-player.js',
  '/assets/js/quizDatabase.js',
  '/assets/images/EMMI.png',
  '/assets/images/buymeacoffee.png',
  '/config/site.webmanifest',
  '/config/manifest.json',
  '/favicon/favicon.png',
  '/favicon/favicon.ico',
  
  // Content files - these are key for your PWA to work offline
  '/content/about.html',
  '/content/shell-scripting.html',
  '/content/user-administration.html',
  '/content/scheduling-jobs.html',
  '/content/linux-security.html',
  '/content/admin-tasks.html',
  '/content/introduction-to-linux.html',
  '/content/file-systems.html',
  '/content/networking.html',
  '/content/pseudocode-standard.html'
];

// Install event - pre-cache all essential assets
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
  
  // Create a promise for caching regular assets
  const cacheRegularAssets = caches.open(CACHE_NAME)
    .then(cache => {
      console.log('[Service Worker] Opened main cache');
      return cache.addAll(filesToCache);
    })
    .catch(error => {
      console.error('[Service Worker] Pre-caching regular assets failed:', error);
    });
    
  // Create a separate promise for caching audio files
  const cacheAudioAssets = caches.open(AUDIO_CACHE_NAME)
    .then(cache => {
      console.log('[Service Worker] Opened audio cache');
      return cache.addAll([
        '/assets/audio/linux_podcast.mp3'
      ]);
    })
    .catch(error => {
      console.error('[Service Worker] Pre-caching audio failed:', error);
    });
  
  // Wait for both caching operations to complete
  event.waitUntil(Promise.all([cacheRegularAssets, cacheAudioAssets]));
});

// Fetch event - serve from cache or network with special handling for audio
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Special handling for audio files
  if (url.pathname.endsWith('.mp3') || url.pathname.includes('/audio/')) {
    event.respondWith(
      caches.open(AUDIO_CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
          // If audio is in cache, return it immediately
          if (response) {
            console.log('[Service Worker] Serving audio from cache:', event.request.url);
            return response;
          }
          
          // If not in cache, fetch from network and cache for future
          console.log('[Service Worker] Fetching audio from network:', event.request.url);
          return fetch(event.request.clone()).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              // Clone the response and cache it
              const responseToCache = networkResponse.clone();
              console.log('[Service Worker] Caching new audio resource:', event.request.url);
              cache.put(event.request, responseToCache);
            }
            return networkResponse;
          }).catch(error => {
            console.error('[Service Worker] Audio fetch failed:', error);
            // No specific fallback for audio yet
          });
        });
      })
    );
    return; // Exit early for audio files
  }
  
  // Regular handling for non-audio files
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          console.log('[Service Worker] Serving from cache:', event.request.url);
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();
        console.log('[Service Worker] Fetching resource:', event.request.url);

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
                console.log('[Service Worker] Caching new resource:', event.request.url);
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(error => {
            console.error('[Service Worker] Fetch failed:', error);
            
            // Return the offline page for HTML requests
            if (event.request.headers.get('accept').includes('text/html')) {
              console.log('[Service Worker] Returning offline page');
              return caches.match('/offline.html');
            }
          });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  
  // Take control of all clients immediately
  event.waitUntil(clients.claim());
  
  const cacheAllowlist = [CACHE_NAME, AUDIO_CACHE_NAME];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
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
