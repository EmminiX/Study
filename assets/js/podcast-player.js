document.addEventListener('DOMContentLoaded', function() {
  // Check if the audio file is available in the cache first
  checkAudioAvailability();
  // Elements
  const audio = document.getElementById('podcast');
  const playPauseBtn = document.querySelector('.play-pause-btn');
  const playPauseIcon = playPauseBtn.querySelector('i');
  const seekSlider = document.getElementById('seekSlider');
  const currentTimeEl = document.getElementById('currentTime');
  const durationEl = document.getElementById('duration');
  const progressIndicator = document.querySelector('.progress-indicator');
  const footer = document.querySelector('footer');
  const audioPlayer = document.querySelector('.audio-player');
  const audioPlayerToggle = document.querySelector('.audio-player-toggle');
  
  // Variables
  let isSeeking = false;
  let isPlayerCollapsed = false;
  let autoHideAudioTimeout;
  let autoHideAudioProgressInterval;
  
  // Listen for transition end on audio player to ensure buttons are positioned correctly
  if (audioPlayer) {
    audioPlayer.addEventListener('transitionend', function(e) {
      if (e.propertyName === 'transform') {
        // Recalculate layout when player animation finishes
        adjustLayout();
      }
    });
  }
  
  // Make sure toggle button is visible and properly styled
  function ensureToggleVisibility() {
    if (audioPlayerToggle) {
      audioPlayerToggle.style.display = 'flex';
      audioPlayerToggle.style.opacity = '1';
      audioPlayerToggle.style.visibility = 'visible';
      
      // Force browser to recognize the button by triggering a reflow
      audioPlayerToggle.getBoundingClientRect();
    }
  }
  
  // Toggle audio player visibility on mobile
  if (audioPlayerToggle) {
    audioPlayerToggle.addEventListener('click', function() {
      isPlayerCollapsed = !isPlayerCollapsed;
      
      if (isPlayerCollapsed) {
        audioPlayer.classList.add('collapsed');
        audioPlayerToggle.setAttribute('aria-label', 'Show audio player');
        audioPlayerToggle.querySelector('i').className = 'fas fa-chevron-up';
        localStorage.setItem('audioPlayerCollapsed', 'true');
        
        // Ensure toggle button is visible
        ensureToggleVisibility();
        
        // Announce to screen readers
        announceState('Audio player minimized');
        
        // Clear auto-hide when manually collapsed
        clearAutoHideAudioTimer();
      } else {
        audioPlayer.classList.remove('collapsed');
        audioPlayerToggle.setAttribute('aria-label', 'Hide audio player');
        audioPlayerToggle.querySelector('i').className = 'fas fa-chevron-down';
        localStorage.setItem('audioPlayerCollapsed', 'false');
        
        // Announce to screen readers
        announceState('Audio player expanded');
        
        // Start auto-hide timer when expanded
        startAutoHideAudioTimer();
      }
      
      // Adjust layout after toggling
      adjustLayout();
      
      // Force a recalculation of floating button positions based on new player state
      setTimeout(() => {
        adjustLayout();
      }, 100);
    });
  }
  
  // Check device type for initial load state
  if (audioPlayerToggle && audioPlayer) {
    const isMobile = window.innerWidth <= 768;
    
    // For desktop: always show expanded by default (ignoring localStorage)
    // For mobile: respect the user's saved preference
    if (!isMobile) {
      // Desktop - always expanded by default
      isPlayerCollapsed = false;
      audioPlayer.classList.remove('collapsed');
      audioPlayerToggle.setAttribute('aria-label', 'Hide audio player');
      audioPlayerToggle.querySelector('i').className = 'fas fa-chevron-down';
      localStorage.setItem('audioPlayerCollapsed', 'false');
    } else {
      // Mobile - check for saved state
      if (localStorage.getItem('audioPlayerCollapsed') === 'true') {
        isPlayerCollapsed = true;
        audioPlayer.classList.add('collapsed');
        audioPlayerToggle.setAttribute('aria-label', 'Show audio player');
        audioPlayerToggle.querySelector('i').className = 'fas fa-chevron-up';
        
        // Ensure toggle button is visible on initial load
        ensureToggleVisibility();
      } else {
        // If player is expanded by default on mobile, start auto-hide timer
        startAutoHideAudioTimer();
      }
    }
  }
  
  // Double-check toggle visibility after a short delay to ensure it's rendered
  setTimeout(ensureToggleVisibility, 500);
  
  // Auto-hide functionality for audio player
  function setupAutoHideAudioEvents() {
    // Reset timer on any interaction with the audio player
    audioPlayer.addEventListener('mousemove', resetAutoHideAudioTimer);
    audioPlayer.addEventListener('touchstart', resetAutoHideAudioTimer);
    audioPlayer.addEventListener('click', resetAutoHideAudioTimer);
    
    // Add events to specific controls
    if (playPauseBtn) playPauseBtn.addEventListener('click', resetAutoHideAudioTimer);
    if (seekSlider) {
      seekSlider.addEventListener('input', resetAutoHideAudioTimer);
      seekSlider.addEventListener('change', resetAutoHideAudioTimer);
    }
    
    // When audio is playing, don't auto-hide
    audio.addEventListener('play', function() {
      clearAutoHideAudioTimer();
    });
    
    audio.addEventListener('pause', function() {
      // Only start auto-hide timer on mobile
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        startAutoHideAudioTimer();
      }
    });
  }
  
  function startAutoHideAudioTimer() {
    // Only apply auto-hide on mobile devices
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      return; // Don't auto-hide on desktop
    }
    
    // Don't start auto-hide if player is already collapsed or audio is playing
    if (isPlayerCollapsed || !audio.paused) {
      return;
    }
    
    // Clear any existing timer first
    clearAutoHideAudioTimer();
    
    // Create or get the auto-hide progress indicator
    let progressIndicator = document.querySelector('.audio-auto-hide-progress');
    if (!progressIndicator) {
      progressIndicator = document.createElement('div');
      progressIndicator.className = 'audio-auto-hide-progress';
      progressIndicator.setAttribute('title', 'Audio player will auto-hide after inactivity');
      
      // Add the progress indicator to the audio player
      if (audioPlayer) {
        audioPlayer.appendChild(progressIndicator);
      }
    }
    
    // Reset the progress
    progressIndicator.style.width = '100%';
    
    // Create a progress animation
    const autoHideDuration = 8000; // 8 seconds
    const updateInterval = 100; // Update every 100ms
    let timeRemaining = autoHideDuration;
    
    // Clear any existing interval
    if (autoHideAudioProgressInterval) {
      clearInterval(autoHideAudioProgressInterval);
    }
    
    // Start the progress animation
    autoHideAudioProgressInterval = setInterval(() => {
      timeRemaining -= updateInterval;
      const percentRemaining = (timeRemaining / autoHideDuration) * 100;
      
      if (progressIndicator) {
        progressIndicator.style.width = `${percentRemaining}%`;
      }
      
      if (timeRemaining <= 0) {
        clearInterval(autoHideAudioProgressInterval);
      }
    }, updateInterval);
    
    // Set new timer to auto collapse audio player after inactivity
    autoHideAudioTimeout = setTimeout(() => {
      if (!isPlayerCollapsed && audio.paused) {
        // Auto-hiding audio player due to inactivity
        
        // Collapse the player
        isPlayerCollapsed = true;
        audioPlayer.classList.add('collapsed');
        if (audioPlayerToggle) {
          audioPlayerToggle.setAttribute('aria-label', 'Show audio player');
          audioPlayerToggle.querySelector('i').className = 'fas fa-chevron-up';
        }
        localStorage.setItem('audioPlayerCollapsed', 'true');
        
        // Ensure toggle button is visible
        ensureToggleVisibility();
        
        // Announce to screen readers
        announceState('Audio player auto-minimized');
        
        // Adjust layout after changing player state
        adjustLayout();
        
        // Force a second adjustment after a slight delay to ensure all positions update
        setTimeout(() => {
          adjustLayout();
        }, 300);
        
        // Remove progress indicator
        if (progressIndicator) {
          progressIndicator.remove();
        }
      }
    }, autoHideDuration);
  }
  
  function resetAutoHideAudioTimer() {
    // Only reset if the player is actually expanded
    if (!isPlayerCollapsed) {
      clearAutoHideAudioTimer();
      startAutoHideAudioTimer();
    }
  }
  
  function clearAutoHideAudioTimer() {
    if (autoHideAudioTimeout) {
      clearTimeout(autoHideAudioTimeout);
      autoHideAudioTimeout = null;
    }
    
    if (autoHideAudioProgressInterval) {
      clearInterval(autoHideAudioProgressInterval);
      autoHideAudioProgressInterval = null;
    }
    
    // Remove any existing progress indicator
    const progressIndicator = document.querySelector('.audio-auto-hide-progress');
    if (progressIndicator) {
      progressIndicator.remove();
    }
  }
  
  // Initialize auto-hide functionality
  setupAutoHideAudioEvents();
  
  // Ensure proper layout
  function adjustLayout() {
    const isMobile = window.innerWidth <= 768;
    
    // For mobile view
    if (isMobile) {
      // Only adjust if player is visible
      if (!isPlayerCollapsed) {
        // Ensure the player is visible
        audioPlayer.style.opacity = '1';
        
        // Adjust footer to not overlap with player
        footer.style.position = 'relative';
        footer.style.marginBottom = audioPlayer.offsetHeight + 'px';
        
        // Adjust container padding
        const container = document.querySelector('.container');
        if (container) {
          container.style.paddingBottom = (audioPlayer.offsetHeight + 50) + 'px';
        }
      } else {
        // If player is collapsed, reset some styles
        footer.style.marginBottom = '40px'; // Space for the collapsed player toggle
        
        const container = document.querySelector('.container');
        if (container) {
          container.style.paddingBottom = '40px';
        }
      }
      
      // Make sure the mobile buttons don't overlap with the player
      const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
      const a11yToggle = document.querySelector('.a11y-toggle');
      
      // Calculate bottom position based on player visibility
      let playerHeight = 0;
      
      if (!isPlayerCollapsed) {
        // Get actual height when expanded
        playerHeight = audioPlayer.offsetHeight || 100; // Default to 100px if height can't be determined
      } else {
        // Use minimal height when collapsed to account for the visible toggle
        playerHeight = 20;
      }
      
      // Add some extra padding
      const safetyMargin = 10;
      
      if (mobileNavToggle) {
        // Position burger menu button above player
        mobileNavToggle.style.bottom = (playerHeight + safetyMargin) + 'px';
        mobileNavToggle.style.right = '20px';
        mobileNavToggle.style.transition = 'bottom 0.3s ease';
      }
      
      if (a11yToggle) {
        // Position accessibility toggle button above burger menu (add height of burger menu + spacing)
        const burgerButtonHeight = 50; // Height of burger menu button
        const buttonSpacing = 15; // Space between buttons
        a11yToggle.style.bottom = (playerHeight + burgerButtonHeight + buttonSpacing + safetyMargin) + 'px';
        a11yToggle.style.right = '20px';
        a11yToggle.style.transition = 'bottom 0.3s ease';
      }

      // Adjust chat button position
      const chatToggle = document.querySelector('.linux-chat-toggle');
      if (chatToggle) {
        // Position chat button above a11y toggle
        const burgerButtonHeight = 50; // Height of burger menu button
        const a11yButtonHeight = 50; // Height of a11y button
        const buttonSpacing = 15; // Space between buttons
        chatToggle.style.bottom = (playerHeight + burgerButtonHeight + a11yButtonHeight + (buttonSpacing * 2) + safetyMargin) + 'px';
        chatToggle.style.right = '20px';
        chatToggle.style.transition = 'bottom 0.3s ease';
      }
    } else {
      // Desktop view
      
      // Apply collapsed state if needed
      if (isPlayerCollapsed) {
        audioPlayer.classList.add('collapsed');
      } else {
        audioPlayer.classList.remove('collapsed');
      }
      
      // Ensure the toggle button is visible on desktop
      if (audioPlayerToggle) {
        audioPlayerToggle.style.display = 'flex';
      }
      
      // Set footer and container styles for desktop
      footer.style.position = 'fixed';
      footer.style.marginBottom = '0';
      
      // Reset container padding to default
      const container = document.querySelector('.container');
      if (container) {
        container.style.paddingBottom = isPlayerCollapsed ? '20px' : '60px';
      }
    }
  }
  
  // Format time in MM:SS
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  
  // Offline audio handling
  function checkAudioAvailability() {
    const audioUrl = '/assets/audio/linux_podcast.mp3';
    
    // Check if we're offline
    if (!navigator.onLine) {
      console.log('Offline mode detected, checking cache for podcast audio');
      
      // If service worker and caches are supported
      if ('caches' in window) {
        caches.open('linux-learning-audio-v1')
          .then(cache => {
            return cache.match(audioUrl);
          })
          .then(response => {
            if (response) {
              console.log('Podcast audio found in cache, ready for offline playback');
              // Update UI to show audio is available offline
              const offlineIndicator = document.createElement('div');
              offlineIndicator.className = 'offline-available';
              offlineIndicator.textContent = 'Podcast available offline';
              offlineIndicator.style.color = 'var(--success-color)';
              offlineIndicator.style.fontSize = '12px';
              offlineIndicator.style.marginTop = '5px';
              offlineIndicator.style.textAlign = 'center';
              
              // Add indicator to player
              const playerInner = document.querySelector('.audio-player-inner');
              if (playerInner && !document.querySelector('.offline-available')) {
                playerInner.appendChild(offlineIndicator);
                
                // Auto-hide after 5 seconds
                setTimeout(() => {
                  offlineIndicator.style.opacity = '0';
                  setTimeout(() => {
                    offlineIndicator.remove();
                  }, 500);
                }, 5000);
              }
            } else {
              console.warn('Podcast audio not found in cache, offline playback not available');
              // Update UI to show audio is not available offline
              if (audioPlayer) {
                const warningIndicator = document.createElement('div');
                warningIndicator.className = 'offline-warning';
                warningIndicator.textContent = 'Podcast not available offline';
                warningIndicator.style.color = 'var(--warning-color)';
                warningIndicator.style.fontSize = '12px';
                warningIndicator.style.marginTop = '5px';
                warningIndicator.style.textAlign = 'center';
                
                // Add warning to player
                const playerInner = document.querySelector('.audio-player-inner');
                if (playerInner && !document.querySelector('.offline-warning')) {
                  playerInner.appendChild(warningIndicator);
                }
              }
            }
          })
          .catch(error => {
            console.error('Error checking cache for podcast audio:', error);
          });
      }
    } else {
      // If online, ensure the audio is cached for future offline use
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        // Fetch the audio to ensure it's cached
        fetch(audioUrl)
          .then(response => {
            console.log('Podcast audio fetched for caching');
          })
          .catch(error => {
            console.error('Error fetching podcast audio for cache:', error);
          });
      }
    }
  }
  
  // Handle network status changes for the podcast player
  window.addEventListener('online', function() {
    console.log('Back online, updating podcast availability');
    checkAudioAvailability();
  });
  
  window.addEventListener('offline', function() {
    console.log('Went offline, checking podcast availability');
    checkAudioAvailability();
  });
  
  // Update UI when audio metadata is loaded
  audio.addEventListener('loadedmetadata', function() {
    seekSlider.max = audio.duration;
    durationEl.textContent = formatTime(audio.duration);
    
    // Restore previous position if available
    const savedPosition = localStorage.getItem('podcastPosition');
    if (savedPosition && savedPosition < audio.duration) {
      audio.currentTime = savedPosition;
    }
    
    // Adjust layout once we know audio is loaded
    adjustLayout();
  });
  
  // Error handling for audio
  audio.addEventListener('error', function(e) {
    console.error('Audio error:', e);
    
    // Check if we're offline and provide a helpful message
    if (!navigator.onLine) {
      announceState('Cannot play podcast while offline. Please check your connection.');
      
      // Check if the audio is in the cache
      checkAudioAvailability();
    } else {
      announceState('Error playing podcast');
    }
  });
  
  // Play/Pause toggle
  playPauseBtn.addEventListener('click', function() {
    // Check if we're offline and if the audio is available
    if (!navigator.onLine) {
      checkAudioAvailability();
    }
    if (audio.paused) {
      audio.play();
      playPauseIcon.className = 'fas fa-pause';
    } else {
      audio.pause();
      playPauseIcon.className = 'fas fa-play';
    }
  });
  
  // Timeline seeking
  seekSlider.addEventListener('input', function() {
    isSeeking = true;
    currentTimeEl.textContent = formatTime(seekSlider.value);
  });
  
  seekSlider.addEventListener('change', function() {
    audio.currentTime = seekSlider.value;
    isSeeking = false;
  });
  
  // Update timeline and progress bar
  audio.addEventListener('timeupdate', function() {
    if (!isSeeking) {
      seekSlider.value = audio.currentTime;
      currentTimeEl.textContent = formatTime(audio.currentTime);
      
      // Update progress indicator width
      const progressPercentage = (audio.currentTime / audio.duration) * 100;
      progressIndicator.style.width = progressPercentage + '%';
      
      // Save position to localStorage
      localStorage.setItem('podcastPosition', audio.currentTime);
    }
  });
  
  // Reset when audio ends
  audio.addEventListener('ended', function() {
    playPauseIcon.className = 'fas fa-play';
    localStorage.removeItem('podcastPosition');
    
    // Start auto-hide timer when audio ends, but only on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      startAutoHideAudioTimer();
    }
  });
  
  // Preload metadata (needed for duration)
  if (audio) {
    audio.preload = 'metadata';
    
    // Try to prefetch some of the audio for better playback
    try {
      audio.load();
    } catch (e) {
      console.warn('Audio prefetch failed:', e);
    }
  }
  
  // Handle window resize
  window.addEventListener('resize', function() {
    adjustLayout();
    
    // Check if we need to remove auto-hide on desktop
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      // On desktop - clear any auto-hide timers
      clearAutoHideAudioTimer();
    } else {
      // On mobile - start auto-hide timer if conditions are right
      if (!isPlayerCollapsed && audio.paused) {
        startAutoHideAudioTimer();
      }
    }
  });
  
  // Initial layout adjustment
  adjustLayout();
  
  // Announcer for screen readers
  function announceState(message) {
    // Create a live region for announcements
    let announcer = document.getElementById('audio-player-announcer');
    if (!announcer) {
      announcer = document.createElement('div');
      announcer.id = 'audio-player-announcer';
      announcer.className = 'sr-only';
      announcer.setAttribute('aria-live', 'polite');
      document.body.appendChild(announcer);
    }
    
    // Set the message
    announcer.textContent = message;
    
    // Clear after a short time
    setTimeout(() => {
      announcer.textContent = '';
    }, 3000);
  }
});
