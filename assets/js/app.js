document.addEventListener('DOMContentLoaded', function() {
    // Add console logging for debugging
    console.log("DOM fully loaded and parsed");
    
    // Register service worker for offline functionality
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/assets/js/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    }
    
    // PWA installation
    let deferredPrompt;
    const installPWA = document.getElementById('installPWA');
    const offlineNotification = document.getElementById('offlineNotification');
    
    // Show install button if PWA is installable
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later
        deferredPrompt = e;
        // Show the install button
        if (offlineNotification) {
            offlineNotification.style.display = 'block';
        }
    });
    
    // Handle install button click
    if (installPWA) {
        installPWA.addEventListener('click', async () => {
            if (!deferredPrompt) {
                return;
            }
            // Show the install prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);
            // We've used the prompt, and can't use it again, throw it away
            deferredPrompt = null;
            // Hide the install button
            offlineNotification.style.display = 'none';
        });
    }
    
    // Display notification if app is in standalone mode (PWA installed)
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
        console.log('Application is running in standalone mode (PWA installed)');
        // You could add specific PWA installed behaviors here
    }
    
    // Listen for network status changes
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    // Initial check
    updateOnlineStatus();
    
    // Ensure the a11y panel is hidden on page load
    const a11yPanel = document.querySelector('.a11y-panel');
    if (a11yPanel) {
        a11yPanel.style.display = 'none';
    }
    
    // Mobile header/footer auto-hide functionality
    setupMobileHeaderFooterVisibility();
    
    // Auto-hide burger menu functionality
    setupAutoHideMobileMenu();
    
    // Theme toggling
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', themeToggle.checked);
    });

    // Check for saved theme preference or set dark mode as default
    if (localStorage.getItem('darkMode') === null) {
        // No saved preference, set dark mode as default
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
        localStorage.setItem('darkMode', 'true');
    } else if (localStorage.getItem('darkMode') === 'true') {
        // User previously selected dark mode
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else {
        // User previously selected light mode
        document.body.classList.remove('dark-mode');
        themeToggle.checked = false;
    }

    // Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log("Nav link clicked:", this.getAttribute('href'));
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Load the content based on the href
            const sectionId = this.getAttribute('href').substring(1);
            loadContent(sectionId);
            
            // Close mobile sidebar if open
            if (window.innerWidth <= 992) {
                const sidebar = document.querySelector('.sidebar');
                const header = document.querySelector('header');
                const footer = document.querySelector('footer');
                const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
                
                // Remove open class from sidebar
                sidebar.classList.remove('open');
                
                // Change icon back to bars
                if (mobileNavToggle && mobileNavToggle.querySelector('i')) {
                    mobileNavToggle.querySelector('i').className = 'fas fa-bars';
                }
                
                // Remove menu-open class from body
                document.body.classList.remove('menu-open');
                
                // Hide header and footer with delay
                setTimeout(() => {
                    header.classList.remove('visible');
                    footer.classList.remove('visible');
                }, 1000);
                
                // Allow scrolling again
                document.body.style.overflow = '';
                
                // Clear auto-hide timer when clicking navigation links
                clearAutoHideMenuTimer();
            }
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });

    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            const sidebar = document.querySelector('.sidebar');
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            
            // Toggle sidebar
            sidebar.classList.toggle('open');
            
            // Toggle icon between bars and X
            const icon = this.querySelector('i');
            if (sidebar.classList.contains('open')) {
                icon.className = 'fas fa-times';
                
                // Always show header and footer when sidebar is open on mobile
                if (window.innerWidth <= 992) {
                    header.classList.add('visible');
                    footer.classList.add('visible');
                    
                    // Add menu-open class to body to ensure header stays visible
                    document.body.classList.add('menu-open');
                    
                    // Force the body to not scroll when sidebar is open
                    document.body.style.overflow = 'hidden';
                    
                    // Start auto-hide timer for the menu
                    startAutoHideMenuTimer();
                }
            } else {
                icon.className = 'fas fa-bars';
                
                // Auto-hide header and footer when sidebar is closed on mobile
                if (window.innerWidth <= 992) {
                    // Remove menu-open class from body
                    document.body.classList.remove('menu-open');
                    
                    // Small delay to avoid immediate hiding
                    setTimeout(() => {
                        header.classList.remove('visible');
                        footer.classList.remove('visible');
                    }, 1000);
                    
                    // Allow scrolling again
                    document.body.style.overflow = '';
                    
                    // Clear auto-hide timer when menu is manually closed
                    clearAutoHideMenuTimer();
                }
            }
        });
    }
    
    // Mobile accessibility toggle
    const a11yToggle = document.querySelector('.a11y-toggle');
    if (a11yToggle) {
        a11yToggle.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent document click event from firing
            const panel = document.querySelector('.a11y-panel');
            
            // Toggle panel
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
                
                // When opening the accessibility panel, ensure header/footer are NOT visible
                // to prevent overlay issues on mobile devices
                if (window.innerWidth <= 992) {
                    const header = document.querySelector('header');
                    const footer = document.querySelector('footer');
                    
                    // Hide header and footer when accessibility panel is opened
                    header.classList.remove('visible');
                    footer.classList.remove('visible');
                }
            }
            
            // Dispatch event for matrix background
            document.dispatchEvent(accessibilityChangeEvent);
        });
    }
    
    // Close button for accessibility panel
    const a11yPanelClose = document.querySelector('.a11y-panel-close');
    if (a11yPanelClose) {
        a11yPanelClose.addEventListener('click', function() {
            const panel = document.querySelector('.a11y-panel');
            panel.style.display = 'none';
            
            // Ensure header/footer remain hidden when closing the panel on mobile
            if (window.innerWidth <= 992) {
                const header = document.querySelector('header');
                const footer = document.querySelector('footer');
                
                // Keep header and footer hidden when closing accessibility panel
                header.classList.remove('visible');
                footer.classList.remove('visible');
            }
            
            // Dispatch event for matrix background
            document.dispatchEvent(accessibilityChangeEvent);
        });
    }
    
    // Close accessibility panel when clicking outside of it
    document.addEventListener('click', function(event) {
        const panel = document.querySelector('.a11y-panel');
        const toggle = document.querySelector('.a11y-toggle');
        
        // If panel is visible and click is outside panel and not on the toggle button
        if (panel && panel.style.display === 'block' && 
            !panel.contains(event.target) && 
            event.target !== toggle && 
            !toggle.contains(event.target)) {
            panel.style.display = 'none';
            
            // Ensure header/footer remain hidden when closing the panel on mobile
            if (window.innerWidth <= 992) {
                const header = document.querySelector('header');
                const footer = document.querySelector('footer');
                
                // Keep header and footer hidden when closing accessibility panel
                header.classList.remove('visible');
                footer.classList.remove('visible');
            }
            
            // Dispatch event for matrix background
            document.dispatchEvent(accessibilityChangeEvent);
        }
        
        // Close sidebar menu when clicking outside of it
        const sidebar = document.querySelector('.sidebar');
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        
        // Only close if sidebar is open, click is outside sidebar, and not on the toggle button
        if (sidebar && sidebar.classList.contains('open') && 
            !sidebar.contains(event.target) && 
            event.target !== mobileNavToggle && 
            !mobileNavToggle.contains(event.target) &&
            window.innerWidth <= 992) {
            
            console.log("Closing sidebar from outside click");
            
            // Close the sidebar
            sidebar.classList.remove('open');
            
            // Reset the toggle icon
            if (mobileNavToggle && mobileNavToggle.querySelector('i')) {
                mobileNavToggle.querySelector('i').className = 'fas fa-bars';
            }
            
            // Reset body states
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            
            // Hide header and footer with a small delay
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            
            setTimeout(() => {
                if (header) header.classList.remove('visible');
                if (footer) footer.classList.remove('visible');
            }, 1000);
            
            // Clear auto-hide menu timer
            clearAutoHideMenuTimer();
        }
    });
    
    // Accessibility controls setup
    setupAccessibilityControls();
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();

    // Load initial content (last visited section or About by default)
    const lastVisitedSection = localStorage.getItem('lastVisitedSection') || 'about';
    loadContent(lastVisitedSection);
    
    // Also update the active navigation link
    const activeLink = document.querySelector(`.nav-links a[href="#${lastVisitedSection}"]`);
    if (activeLink) {
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
    
    // Initialize Matrix background effect
    initMatrixBackground();

    // Resources dropdown functionality
    initResourcesDropdown();
    
    // Initialize Linux Tutor chat functionality
    initLinuxTutorChat();
});

// Create custom event for accessibility changes
const accessibilityChangeEvent = new Event('accessibilityChange');

// Setup accessibility controls
function setupAccessibilityControls() {
    // High contrast mode
    const highContrastToggle = document.getElementById('highContrastToggle');
    highContrastToggle.addEventListener('change', function() {
        document.body.classList.toggle('high-contrast-mode');
        localStorage.setItem('highContrast', highContrastToggle.checked);
        
        // Sync with mobile controls
        if (document.getElementById('mobileHighContrastToggle')) {
            document.getElementById('mobileHighContrastToggle').checked = highContrastToggle.checked;
        }
        
        // Dispatch event for matrix background
        document.dispatchEvent(accessibilityChangeEvent);
    });
    
    // Text size controls
    const normalText = document.getElementById('normalText');
    const largeText = document.getElementById('largeText');
    const extraLargeText = document.getElementById('extraLargeText');
    
    normalText.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.remove('large-text', 'extra-large-text');
            localStorage.setItem('textSize', 'normal');
            
            // Sync with mobile controls
            if (document.getElementById('mobileTextSize')) {
                document.getElementById('mobileTextSize').value = 'normal';
            }
        }
    });
    
    largeText.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.remove('extra-large-text');
            document.body.classList.add('large-text');
            localStorage.setItem('textSize', 'large');
            
            // Sync with mobile controls
            if (document.getElementById('mobileTextSize')) {
                document.getElementById('mobileTextSize').value = 'large';
            }
        }
    });
    
    extraLargeText.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.remove('large-text');
            document.body.classList.add('extra-large-text');
            localStorage.setItem('textSize', 'extra-large');
            
            // Sync with mobile controls
            if (document.getElementById('mobileTextSize')) {
                document.getElementById('mobileTextSize').value = 'extra-large';
            }
        }
    });
    
    // Dyslexia-friendly font
    const dyslexiaFont = document.getElementById('dyslexiaFont');
    dyslexiaFont.addEventListener('change', function() {
        document.body.classList.toggle('dyslexia-font');
        localStorage.setItem('dyslexiaFont', dyslexiaFont.checked);
        
        // Sync with mobile controls
        if (document.getElementById('mobileDyslexiaFont')) {
            document.getElementById('mobileDyslexiaFont').checked = dyslexiaFont.checked;
        }
        
        // Force a repaint on mobile devices to ensure font change applies
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            document.body.style.display = 'none';
            setTimeout(() => {
                document.body.style.display = '';
            }, 5);
        }
    });
    
    // Focus mode
    const focusMode = document.getElementById('focusMode');
    focusMode.addEventListener('change', function() {
        document.body.classList.toggle('focus-mode');
        localStorage.setItem('focusMode', focusMode.checked);
        
        // Sync with mobile controls
        if (document.getElementById('mobileFocusMode')) {
            document.getElementById('mobileFocusMode').checked = focusMode.checked;
        }
    });
    
    // Calm mode (reduced animations)
    const calmMode = document.getElementById('calmMode');
    calmMode.addEventListener('change', function() {
        document.body.classList.toggle('calm-mode');
        localStorage.setItem('calmMode', calmMode.checked);
        
        // Sync with mobile controls
        if (document.getElementById('mobileCalmMode')) {
            document.getElementById('mobileCalmMode').checked = calmMode.checked;
        }
        
        // Dispatch event for matrix background
        document.dispatchEvent(accessibilityChangeEvent);
    });
    
    // Matrix background toggle
    const matrixToggle = document.getElementById('matrixToggle');
    if (matrixToggle) {
        matrixToggle.addEventListener('change', function() {
            document.body.classList.toggle('matrix-off', !matrixToggle.checked);
            localStorage.setItem('matrixEnabled', matrixToggle.checked);
            
            // Sync with mobile controls
            if (document.getElementById('mobileMatrixToggle')) {
                document.getElementById('mobileMatrixToggle').checked = matrixToggle.checked;
            }
            
            // Dispatch event for matrix background
            document.dispatchEvent(accessibilityChangeEvent);
        });
    }
    
    // Matrix opacity slider
    const matrixOpacity = document.getElementById('matrixOpacity');
    if (matrixOpacity) {
        matrixOpacity.addEventListener('input', function() {
            const opacity = matrixOpacity.value / 100;
            document.documentElement.style.setProperty('--matrix-opacity', opacity);
            localStorage.setItem('matrixOpacity', matrixOpacity.value);
            
            // Sync with mobile controls
            if (document.getElementById('mobileMatrixOpacity')) {
                document.getElementById('mobileMatrixOpacity').value = matrixOpacity.value;
            }
            
            // Dispatch event for matrix background
            document.dispatchEvent(accessibilityChangeEvent);
        });
    }
    
    // Matrix speed slider
    const matrixSpeed = document.getElementById('matrixSpeed');
    if (matrixSpeed) {
        matrixSpeed.addEventListener('input', function() {
            localStorage.setItem('matrixSpeed', matrixSpeed.value);
            
            // Sync with mobile controls
            if (document.getElementById('mobileMatrixSpeed')) {
                document.getElementById('mobileMatrixSpeed').value = matrixSpeed.value;
            }
            
            // Dispatch event for matrix background
            document.dispatchEvent(accessibilityChangeEvent);
        });
    }
    
    // Load saved accessibility preferences
    loadAccessibilityPreferences();
}

// Setup keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        // Only apply if not in an input field or textarea
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
            // Alt+H: Toggle high contrast mode
            if (event.altKey && event.key === 'h') {
                const highContrastToggle = document.getElementById('highContrastToggle');
                highContrastToggle.checked = !highContrastToggle.checked;
                highContrastToggle.dispatchEvent(new Event('change'));
            }
            
            // Alt+D: Toggle dyslexia font
            if (event.altKey && event.key === 'd') {
                const dyslexiaFont = document.getElementById('dyslexiaFont');
                dyslexiaFont.checked = !dyslexiaFont.checked;
                dyslexiaFont.dispatchEvent(new Event('change'));
            }
            
            // Alt+F: Toggle focus mode
            if (event.altKey && event.key === 'f') {
                const focusMode = document.getElementById('focusMode');
                focusMode.checked = !focusMode.checked;
                focusMode.dispatchEvent(new Event('change'));
            }
            
            // Alt+L: Increase text size (cycle through options)
            if (event.altKey && event.key === 'l') {
                if (document.body.classList.contains('extra-large-text')) {
                    document.getElementById('normalText').checked = true;
                    document.getElementById('normalText').dispatchEvent(new Event('change'));
                } else if (document.body.classList.contains('large-text')) {
                    document.getElementById('extraLargeText').checked = true;
                    document.getElementById('extraLargeText').dispatchEvent(new Event('change'));
                } else {
                    document.getElementById('largeText').checked = true;
                    document.getElementById('largeText').dispatchEvent(new Event('change'));
                }
            }
            
            // Alt+S: Open search box
            if (event.altKey && event.key === 's') {
                document.getElementById('searchInput').focus();
                event.preventDefault();
            }
        }
    });
}

// Update progress indicator
function updateProgressIndicator() {
    // Calculate progress based on viewed content
    const totalTopics = document.querySelectorAll('.topic').length;
    const viewedTopics = JSON.parse(localStorage.getItem('viewedTopics') || '[]').length;
    
    let progress = 0;
    if (totalTopics > 0) {
        progress = Math.min(Math.round((viewedTopics / totalTopics) * 100), 100);
    }
    
    // Update progress bar in accessibility panel only, not the audio player
    const progressIndicator = document.querySelectorAll('.a11y-panel .progress-indicator');
    progressIndicator.forEach(indicator => {
        indicator.style.width = `${progress}%`;
        indicator.textContent = `${progress}%`;
    });
}

// Add topic to viewed list
function markTopicAsViewed(topicId) {
    let viewedTopics = JSON.parse(localStorage.getItem('viewedTopics') || '[]');
    
    if (!viewedTopics.includes(topicId)) {
        viewedTopics.push(topicId);
        localStorage.setItem('viewedTopics', JSON.stringify(viewedTopics));
        updateProgressIndicator();
    }
}

// Load content for the specified section
function loadContent(sectionId) {
    console.log("Loading content for section:", sectionId);
    const contentArea = document.querySelector('.content');
    contentArea.innerHTML = '<div id="loading">Loading content...</div>';
    
    // Save the current section to localStorage for page reload memory
    localStorage.setItem('lastVisitedSection', sectionId);
    
    resetMobileMenu();
    
    // Update active navigation link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
    
    // Fetch the content data
    fetch(`content/${sectionId}.html`)
        .then(response => {
            console.log("Fetch response status:", response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            console.log("Content loaded successfully");
            if (!html || html.trim() === '') {
                throw new Error('Content file is empty');
            }
            contentArea.innerHTML = html;
            
            // After content is loaded, set up interactive elements
            console.log("Setting up interactive elements");
            setupCollapsibleSections();
            setupCodeCopyButtons();
            setupQuizzes();
            
            // Ensure modals are properly initialized
            console.log("Setting up modals after content load");
            setTimeout(() => {
                setupModals();
            }, 100);
            
            enhanceContentForAccessibility();
            
            // Initialize resources dropdown after content load
            console.log("Setting up resources dropdown");
            initResourcesDropdown();
            
            // Apply syntax highlighting to code blocks
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
            
            // Track progress
            markTopicAsViewed(sectionId);
            updateProgressIndicator();
        })
        .catch(error => {
            console.error("Error loading content:", error);
            contentArea.innerHTML = `
                <div class="error">
                    <h2>Error Loading Content</h2>
                    <p>${error.message}</p>
                    <p>Debug information:</p>
                    <ul>
                        <li>Requested section: ${sectionId}</li>
                        <li>File path: content/${sectionId}.html</li>
                        <li>Error type: ${error.name}</li>
                    </ul>
                    <p>Possible solutions:</p>
                    <ul>
                        <li>Make sure the content directory exists</li>
                        <li>Check that content/${sectionId}.html exists and is not empty</li>
                        <li>Verify file permissions allow reading the content file</li>
                    </ul>
                </div>
            `;
        });
}

// Enhance content for accessibility
function enhanceContentForAccessibility() {
    // Add summary boxes to each section
    const topics = document.querySelectorAll('.topic:not(.quiz-topic)');
    topics.forEach((topic, index) => {
        // Add unique ID to each topic for keyboard navigation
        const topicId = `topic-${index}`;
        topic.id = topicId;
        
        // Track viewed topics for progress indicator
        topic.addEventListener('click', function() {
            if (this.classList.contains('expanded')) {
                markTopicAsViewed(topicId);
            }
        });
        
        // Add key concept highlighting
        const contentDiv = topic.querySelector('.topic-content');
        if (contentDiv) {
            // Add concept definitions as key concepts
            const paragraphs = contentDiv.querySelectorAll('p');
            paragraphs.forEach(paragraph => {
                // Look for paragraphs containing definitions (typically with strong tags)
                if (paragraph.querySelector('strong')) {
                    const strongElements = paragraph.querySelectorAll('strong');
                    strongElements.forEach(strong => {
                        // Add tooltip if not already wrapped
                        if (!strong.closest('.tooltip')) {
                            // Create tooltip only for key terms
                            const term = strong.textContent.trim();
                            if (term.length > 0 && term.length < 30) {
                                strong.classList.add('highlighted-text');
                            }
                        }
                    });
                }
            });
            
            // Add section summary at the end of each topic (if topic has enough content)
            if (contentDiv.textContent.length > 300) {
                const header = topic.querySelector('.topic-header h3');
                if (header) {
                    const title = header.textContent;
                    const summary = document.createElement('div');
                    summary.className = 'section-summary';
                    summary.innerHTML = `
                        <h4>Summary: ${title}</h4>
                        <p>This section covers the key concepts and essential information about ${title.toLowerCase()}.</p>
                    `;
                    contentDiv.appendChild(summary);
                }
            }
        }
    });
    
    // Add keyboard shortcut indicators
    document.querySelectorAll('.key-shortcut').forEach(shortcut => {
        shortcut.innerHTML = `<span class="keyboard-shortcut">${shortcut.innerHTML}</span>`;
    });
}

// Set up collapsible sections
function setupCollapsibleSections() {
    const topics = document.querySelectorAll('.topic');
    console.log("Setting up collapsible sections. Found:", topics.length);
    
    topics.forEach(topic => {
        const header = topic.querySelector('.topic-header');
        
        header.addEventListener('click', function() {
            console.log("Topic header clicked");
            topic.classList.toggle('expanded');
        });
    });
}

// Set up copy buttons for code blocks
function setupCodeCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre');
    console.log("Setting up copy buttons. Found code blocks:", codeBlocks.length);
    
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.textContent = 'Copy';
        
        copyButton.addEventListener('click', function() {
            const code = block.querySelector('code') || block;
            navigator.clipboard.writeText(code.textContent).then(() => {
                // Visual feedback
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            });
        });
        
        block.appendChild(copyButton);
    });
}

// Set up quiz interactions
function setupQuizzes() {
    const quizzes = document.querySelectorAll('.quiz-container');
    console.log("Setting up quizzes. Found:", quizzes.length);
    
    quizzes.forEach(quiz => {
        const options = quiz.querySelectorAll('.quiz-option');
        const feedback = quiz.querySelector('.quiz-feedback');
        const checkButton = quiz.querySelector('.quiz-button');
        
        options.forEach(option => {
            option.addEventListener('click', function() {
                // Clear all selections first
                options.forEach(opt => opt.classList.remove('selected', 'wrong'));
                
                // Mark this option as selected
                option.classList.add('selected');
            });
        });
        
        if (checkButton) {
            checkButton.addEventListener('click', function() {
                const selectedOption = quiz.querySelector('.quiz-option.selected');
                
                if (selectedOption) {
                    if (selectedOption.dataset.correct === 'true') {
                        feedback.classList.remove('incorrect');
                        feedback.classList.add('correct');
                        feedback.textContent = 'Correct! Well done.';
                    } else {
                        feedback.classList.remove('correct');
                        feedback.classList.add('incorrect');
                        feedback.textContent = 'Incorrect. Try again!';
                        selectedOption.classList.add('wrong');
                    }
                    
                    // Find next quiz and scroll to it if it exists
                    const nextQuiz = quiz.nextElementSibling;
                    if (nextQuiz && nextQuiz.classList.contains('quiz-container')) {
                        setTimeout(() => {
                            nextQuiz.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 1000);
                    }
                } else {
                    feedback.classList.remove('correct');
                    feedback.classList.add('incorrect');
                    feedback.textContent = 'Please select an answer.';
                }
            });
        }
    });
}

// Set up modal interactions
function setupModals() {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    console.log("Setting up modals. Found triggers:", modalTriggers.length);
    
    modalTriggers.forEach(trigger => {
        const modalId = trigger.getAttribute('data-modal');
        console.log("Setting up modal trigger for:", modalId);
        
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            console.log("Modal trigger clicked for:", modalId, "Modal found:", modal ? "yes" : "no");
            
            if (modal) {
                modal.style.display = 'block';
                document.body.classList.add('modal-open');
            } else {
                console.error("Modal not found with ID:", modalId);
            }
        });
    });
    
    // Set up close buttons
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal[style*="display: block"]');
            openModals.forEach(modal => {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
            });
        }
    });
}

// Search functionality
function performSearch(query) {
    if (!query.trim()) {
        console.log("Empty search query, ignoring");
        return;
    }
    
    console.log("Performing search for:", query);
    query = query.toLowerCase();
    const contentArea = document.querySelector('.content');
    
    // Check if content area exists
    if (!contentArea) {
        console.error("Content area element not found");
        return;
    }
    
    contentArea.innerHTML = '<div id="loading">Searching...</div>';
    
    // First, get all content sections
    const fetchPromises = [
        fetch('content/shell-scripting.html').then(r => r.ok ? r.text() : Promise.reject(`Failed to fetch shell-scripting.html: ${r.status}`)),
        fetch('content/user-administration.html').then(r => r.ok ? r.text() : Promise.reject(`Failed to fetch user-administration.html: ${r.status}`)),
        fetch('content/scheduling-jobs.html').then(r => r.ok ? r.text() : Promise.reject(`Failed to fetch scheduling-jobs.html: ${r.status}`)),
        fetch('content/linux-security.html').then(r => r.ok ? r.text() : Promise.reject(`Failed to fetch linux-security.html: ${r.status}`)),
        fetch('content/admin-tasks.html').then(r => r.ok ? r.text() : Promise.reject(`Failed to fetch admin-tasks.html: ${r.status}`)),
        fetch('content/file-systems.html').then(r => r.ok ? r.text() : Promise.reject(`Failed to fetch file-systems.html: ${r.status}`)),
        fetch('content/networking.html').then(r => r.ok ? r.text() : Promise.reject(`Failed to fetch networking.html: ${r.status}`)),
        fetch('content/pseudocode-standard.html').then(r => r.ok ? r.text() : Promise.reject(`Failed to fetch pseudocode-standard.html: ${r.status}`))
    ];
    
    Promise.all(fetchPromises)
    .then(responses => {
        console.log("All content sections fetched successfully");
        // Combine all content for searching
        const parser = new DOMParser();
        const results = [];
        
        const sectionNames = [
            'Shell Scripting', 
            'User & System Administration', 
            'Scheduling Jobs', 
            'Linux Security & Hardening', 
            'Performing Admin Tasks',
            'File Systems & Storage',
            'Linux Networking',
            'Pseudocode Standard'
        ];
        
        const sectionIds = [
            'shell-scripting',
            'user-administration',
            'scheduling-jobs',
            'linux-security',
            'admin-tasks',
            'file-systems',
            'networking',
            'pseudocode-standard'
        ];
        
        responses.forEach((html, index) => {
            try {
                const doc = parser.parseFromString(html, 'text/html');
                const sectionName = sectionNames[index];
                const sectionId = sectionIds[index];
                
                // Extract text content for searching
                const textContent = doc.body.textContent.toLowerCase();
                if (textContent.includes(query)) {
                    // Find specific matches
                    const headings = doc.querySelectorAll('h2, h3');
                    headings.forEach(heading => {
                        const headingText = heading.textContent.toLowerCase();
                        if (headingText.includes(query)) {
                            results.push({
                                section: sectionName,
                                sectionId: sectionId,
                                heading: heading.textContent,
                                type: 'heading',
                                id: heading.id || null
                            });
                        }
                    });
                    
                    // Look for matches in paragraphs
                    const paragraphs = doc.querySelectorAll('p');
                    paragraphs.forEach(p => {
                        const pText = p.textContent.toLowerCase();
                        if (pText.includes(query)) {
                            results.push({
                                section: sectionName,
                                sectionId: sectionId,
                                text: p.textContent,
                                type: 'paragraph',
                                id: p.closest('section')?.id || null
                            });
                        }
                    });
                    
                    // Look for matches in code blocks
                    const codeBlocks = doc.querySelectorAll('pre');
                    codeBlocks.forEach(code => {
                        const codeText = code.textContent.toLowerCase();
                        if (codeText.includes(query)) {
                            results.push({
                                section: sectionName,
                                sectionId: sectionId,
                                text: 'Code example containing "' + query + '"',
                                type: 'code',
                                id: code.closest('section')?.id || null
                            });
                        }
                    });
                }
            } catch (e) {
                console.error(`Error processing search in section ${index}:`, e);
            }
        });
        
        // Display search results
        if (results.length > 0) {
            displaySearchResults(results, query);
        } else {
            contentArea.innerHTML = `
                <div class="search-results">
                    <h2>Search Results</h2>
                    <p>No results found for "${query}".</p>
                    <button class="quiz-button" onclick="loadContent('about')">Back to Content</button>
                </div>
            `;
        }
    })
    .catch(error => {
        console.error("Error during search:", error);
        contentArea.innerHTML = `
            <div class="error">
                <h2>Error During Search</h2>
                <p>${error}</p>
                <p>Please check the browser console for more details.</p>
                <button class="quiz-button" onclick="loadContent('about')">Back to Content</button>
            </div>
        `;
    });
}

// Display search results
function displaySearchResults(results, query) {
    const contentArea = document.querySelector('.content');
    if (!contentArea) {
        console.error("Content area not found when trying to display search results");
        return;
    }
    
    let resultsHTML = `
        <div class="search-results">
            <h2>Search Results for "${query}"</h2>
            <p>Found ${results.length} results:</p>
            <ul>
    `;
    
    results.forEach(result => {
        // Use the explicitly stored sectionId instead of converting from name
        const sectionId = result.sectionId;
        const elementId = result.id || '';
        
        if (result.type === 'heading') {
            resultsHTML += `
                <li>
                    <strong>In ${result.section}:</strong> 
                    <a href="#" onclick="navigateToResult('${sectionId}', '${elementId}'); return false;">
                        ${highlightText(result.heading, query)}
                    </a>
                </li>
            `;
        } else if (result.type === 'paragraph') {
            resultsHTML += `
                <li>
                    <strong>In ${result.section}:</strong> 
                    <a href="#" onclick="navigateToResult('${sectionId}', '${elementId}'); return false;">
                        ${highlightText(result.text.substring(0, 100), query)}...
                    </a>
                </li>
            `;
        } else if (result.type === 'code') {
            resultsHTML += `
                <li>
                    <strong>In ${result.section}:</strong> 
                    <a href="#" onclick="navigateToResult('${sectionId}', '${elementId}'); return false;">
                        ${result.text}
                    </a>
                </li>
            `;
        }
    });
    
    resultsHTML += `
            </ul>
            <button class="quiz-button" onclick="loadContent('about')">Back to Content</button>
        </div>
    `;
    
    contentArea.innerHTML = resultsHTML;
}

// Highlight search terms in text
function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Navigate to a specific search result
function navigateToResult(sectionId, elementId) {
    console.log(`Navigating to section: ${sectionId}, element: ${elementId}`);
    
    // Load the content for that section
    loadContent(sectionId);
    
    // Wait for content to load then scroll to element
    setTimeout(() => {
        if (elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                
                // Highlight the element briefly
                element.classList.add('highlight');
                setTimeout(() => {
                    element.classList.remove('highlight');
                }, 2000);
            } else {
                console.warn(`Element with ID ${elementId} not found after loading section ${sectionId}`);
            }
        }
    }, 500);
}

// Expose functions to global scope
window.loadContent = loadContent;
window.navigateToResult = navigateToResult;

// Matrix background effect
function initMatrixBackground() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Make canvas full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Keep the background dark in both light and dark mode
    function updateCanvasBackground() {
        // Always keep a dark background for the matrix effect
        canvas.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    }
    
    // Initial background update
    updateCanvasBackground();
    
    // Update background when theme changes
    document.addEventListener('accessibilityChange', updateCanvasBackground);
    
    // Characters to use (mostly Japanese katakana and digits with some symbols)
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789+-*=<>[]();:,.\'"|\\/_!@#$%^&{}~`';
    const charArray = chars.split('');
    
    // Number of columns (depends on font size)
    const fontSize = 12; // Smaller font size for denser effect
    const columns = Math.ceil(canvas.width / fontSize) + 1; // Add 1 to ensure full coverage
    
    // Array to track the y position of each column
    const drops = [];
    
    // Initialize drops with staggered start positions
    for (let i = 0; i < columns; i++) {
        // Stagger initial positions for more natural effect
        drops[i] = Math.random() * -canvas.height;
    }
    
    // Set color based on theme
    function getMatrixColor() {
        const darkMode = document.body.classList.contains('dark-mode');
        const highContrast = document.body.classList.contains('high-contrast-mode');
        
        if (darkMode && highContrast) {
            return '#88ddff'; // Brighter blue in dark high contrast
        } else if (darkMode) {
            return '#0fcc41'; // Brighter green in dark mode
        } else if (highContrast) {
            return '#0088ff'; // Brighter blue in high contrast light mode
        } else {
            return '#0fcc41'; // Use the same green as dark mode in light mode
        }
    }
    
    // Drawing function
    function draw() {
        // Always use a dark semi-transparent background fill regardless of theme
        ctx.fillStyle = `rgba(0, 0, 0, 0.07)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = `${fontSize}px monospace`;
        ctx.fillStyle = getMatrixColor();
        
        // Create leading brighter characters
        const leadColor = getMatrixColor();
        // Use the same trail color regardless of theme
        const trailColor = 'rgba(0, 255, 70, 0.5)';
        
        // Draw characters
        for (let i = 0; i < drops.length; i++) {
            // Pick a random character
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            
            // Make the lead character brighter
            if (Math.random() > 0.98) {
                ctx.fillStyle = '#ffffff'; // Pure white highlights
            } else if (Math.random() > 0.85) {
                ctx.fillStyle = leadColor;
            } else {
                ctx.fillStyle = trailColor; // Trail characters
            }
            
            // Draw the character
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // Reset drop position if it's below screen or randomly
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
                drops[i] = 0;
            } else if (drops[i] * fontSize > canvas.height * 2) {
                // Force reset if too far down (ensures no gaps)
                drops[i] = 0;
            }
            
            // Increment drop position with varying speeds
            drops[i] += Math.random() * 0.5 + 0.5;
        }
    }
    
    // Update Matrix color when theme changes
    const themeObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                // Theme changed, color will update in next animation frame
            }
        });
    });
    
    // Observe body for class changes (theme toggles)
    themeObserver.observe(document.body, {
        attributes: true
    });
    
    // Resize handling
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Recalculate columns and drops
        const columns = Math.ceil(canvas.width / fontSize) + 1;
        
        // Adjust drops array
        while (drops.length > columns) {
            drops.pop();
        }
        
        while (drops.length < columns) {
            drops.push(Math.random() * -canvas.height);
        }
    });
    
    // Animation speed based on accessibility
    function getAnimationSpeed() {
        const calmMode = document.body.classList.contains('calm-mode');
        const matrixOff = document.body.classList.contains('matrix-off');
        
        if (calmMode || matrixOff) return null; // Don't animate in calm mode or if matrix is off
        
        // Use the slider value if available, otherwise use default
        const speedSlider = document.getElementById('matrixSpeed') || document.getElementById('mobileMatrixSpeed');
        if (speedSlider) {
            return 60 - parseInt(speedSlider.value); // Invert the value (lower = faster)
        }
        
        return 25; // Default speed (milliseconds)
    }
    
    // Animation loop
    let animationInterval = null;
    
    function updateAnimation() {
        const speed = getAnimationSpeed();
        
        // Clear existing interval
        if (animationInterval) {
            clearInterval(animationInterval);
            animationInterval = null;
        }
        
        // Set new interval if not in calm mode
        if (speed !== null) {
            animationInterval = setInterval(draw, speed);
        }
    }
    
    // Initial setup
    updateAnimation();
    
    // Update animation when accessibility settings change
    document.addEventListener('accessibilityChange', updateAnimation);
}

// Load saved accessibility preferences
function loadAccessibilityPreferences() {
    // High contrast mode
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast-mode');
        document.getElementById('highContrastToggle').checked = true;
    }
    
    // Text size
    const textSize = localStorage.getItem('textSize');
    if (textSize) {
        if (textSize === 'large') {
            document.body.classList.add('large-text');
            document.getElementById('largeText').checked = true;
        } else if (textSize === 'extra-large') {
            document.body.classList.add('extra-large-text');
            document.getElementById('extraLargeText').checked = true;
        }
    }
    
    // Dyslexia-friendly font
    if (localStorage.getItem('dyslexiaFont') === 'true') {
        document.body.classList.add('dyslexia-font');
        document.getElementById('dyslexiaFont').checked = true;
    }
    
    // Focus mode
    if (localStorage.getItem('focusMode') === 'true') {
        document.body.classList.add('focus-mode');
        document.getElementById('focusMode').checked = true;
    }
    
    // Calm mode
    if (localStorage.getItem('calmMode') === 'true') {
        document.body.classList.add('calm-mode');
        document.getElementById('calmMode').checked = true;
    }
    
    // Matrix background
    if (localStorage.getItem('matrixEnabled') === 'false') {
        document.body.classList.add('matrix-off');
        if (document.getElementById('matrixToggle')) {
            document.getElementById('matrixToggle').checked = false;
        }
    }
    
    // Matrix opacity
    const savedOpacity = localStorage.getItem('matrixOpacity');
    if (savedOpacity) {
        const opacity = parseInt(savedOpacity) / 100;
        document.documentElement.style.setProperty('--matrix-opacity', opacity);
        
        if (document.getElementById('matrixOpacity')) {
            document.getElementById('matrixOpacity').value = savedOpacity;
        }
    }
    
    // Matrix speed
    const savedSpeed = localStorage.getItem('matrixSpeed');
    if (savedSpeed && document.getElementById('matrixSpeed')) {
        document.getElementById('matrixSpeed').value = savedSpeed;
    }
    
    // Dispatch event for matrix background
    document.dispatchEvent(accessibilityChangeEvent);
}

// Setup mobile header/footer visibility functionality
function setupMobileHeaderFooterVisibility() {
    // Only apply on mobile devices
    if (window.innerWidth <= 992) {
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const content = document.querySelector('.content');
        let hideTimeout;

        // Initially show header on page load then hide after delay
        header.classList.add('visible');
        footer.classList.add('visible');
        
        // Hide after a short delay
        setTimeout(() => {
            header.classList.remove('visible');
            footer.classList.remove('visible');
        }, 3000);
        
        // Show header/footer when content area is clicked
        if (content) {
            content.addEventListener('click', function(e) {
                // Only handle direct clicks on content area or its children
                // excluding interactive elements
                if (e.target.tagName !== 'A' && 
                    e.target.tagName !== 'BUTTON' && 
                    !e.target.closest('.quiz-option') && 
                    !e.target.closest('.topic-header')) {
                    
                    // Show header and footer
                    header.classList.add('visible');
                    footer.classList.add('visible');
                    
                    // Clear any existing timeout
                    clearTimeout(hideTimeout);
                    
                    // Hide after a delay
                    hideTimeout = setTimeout(() => {
                        header.classList.remove('visible');
                        footer.classList.remove('visible');
                    }, 3000);
                }
            });
        }

        // Show header/footer when buttons are clicked
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        
        if (mobileNavToggle) {
            mobileNavToggle.addEventListener('click', function() {
                header.classList.add('visible');
                footer.classList.add('visible');
                
                // Clear any existing timeout
                clearTimeout(hideTimeout);
                
                // Keep visible while sidebar is open, hide when closed
                const sidebar = document.querySelector('.sidebar');
                
                // Toggle sidebar open/closed status being handled elsewhere
                // This just ensures header/footer visibility matches sidebar status
                if (sidebar && sidebar.classList.contains('open')) {
                    // Always keep header/footer visible when sidebar is open
                    clearTimeout(hideTimeout); 
                    
                    // Make sure they're fully visible
                    header.classList.add('visible');
                    footer.classList.add('visible');
                    
                    // Reset auto-hide menu timer when interacting with header/footer
                    resetAutoHideMenuTimer();
                } else {
                    // Hide after a delay when sidebar is closed
                    hideTimeout = setTimeout(() => {
                        // Only hide if the sidebar is still closed
                        if (!sidebar.classList.contains('open')) {
                            header.classList.remove('visible');
                            footer.classList.remove('visible');
                        }
                    }, 3000);
                }
            });
        }
        
        // Add touch event to reset auto-hide timer when touching the header or footer
        header.addEventListener('touchstart', function() {
            // If sidebar is open, reset the auto-hide timer
            const sidebar = document.querySelector('.sidebar');
            if (sidebar && sidebar.classList.contains('open')) {
                resetAutoHideMenuTimer();
            }
        });
        
        footer.addEventListener('touchstart', function() {
            // If sidebar is open, reset the auto-hide timer
            const sidebar = document.querySelector('.sidebar');
            if (sidebar && sidebar.classList.contains('open')) {
                resetAutoHideMenuTimer();
            }
        });
        
        // Update on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth <= 992) {
                // Mobile - maintain current state
            } else {
                // Desktop - always show header and footer
                header.classList.add('visible');
                footer.classList.add('visible');
                clearTimeout(hideTimeout);
            }
        });

        // Handle menu link clicks for proper header/footer behavior
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 992) {
                    // Reset mobile menu icon
                    if (mobileNavToggle && mobileNavToggle.querySelector('i')) {
                        mobileNavToggle.querySelector('i').className = 'fas fa-bars';
                    }
                    
                    // Remove menu-open class from body
                    document.body.classList.remove('menu-open');
                    
                    // Set timeout to hide header/footer
                    clearTimeout(hideTimeout);
                    hideTimeout = setTimeout(() => {
                        header.classList.remove('visible');
                        footer.classList.remove('visible');
                    }, 3000);
                }
            });
        });
    }
}

function resetMobileMenu() {
    if (window.innerWidth <= 992) {
        const sidebar = document.querySelector('.sidebar');
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        
        // Reset sidebar state
        sidebar.classList.remove('open');
        
        // Reset menu icon
        if (mobileNavToggle && mobileNavToggle.querySelector('i')) {
            mobileNavToggle.querySelector('i').className = 'fas fa-bars';
        }
        
        // Reset body classes
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
        
        // Clear auto-hide timer when menu is reset
        clearAutoHideMenuTimer();
    }
}

// Helper functions for modals that can be called directly from HTML
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

// Close modals when escape key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal[style*="display: block"]');
        openModals.forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.classList.remove('modal-open');
    }
});

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});

// Handle online/offline status changes
function updateOnlineStatus() {
    const statusDisplay = document.createElement('div');
    statusDisplay.className = 'connection-status';
    statusDisplay.style.position = 'fixed';
    statusDisplay.style.top = '60px';
    statusDisplay.style.right = '10px';
    statusDisplay.style.padding = '8px 15px';
    statusDisplay.style.borderRadius = '4px';
    statusDisplay.style.zIndex = '10000';
    statusDisplay.style.fontSize = '14px';
    statusDisplay.style.transition = 'opacity 0.5s';
    
    if (navigator.onLine) {
        statusDisplay.textContent = 'Back online';
        statusDisplay.style.backgroundColor = 'var(--success-color)';
        statusDisplay.style.color = 'white';
        
        // If we're back online, try to sync any stored data
        if ('serviceWorker' in navigator && 'SyncManager' in window) {
            navigator.serviceWorker.ready
                .then(registration => {
                    return registration.sync.register('sync-progress');
                })
                .catch(err => console.log('Sync registration failed:', err));
        }
    } else {
        statusDisplay.textContent = 'Offline mode - content still available';
        statusDisplay.style.backgroundColor = 'var(--accent-color)';
        statusDisplay.style.color = 'white';
    }
    
    // Remove any existing status displays
    document.querySelectorAll('.connection-status').forEach(el => el.remove());
    
    // Add the new status display
    document.body.appendChild(statusDisplay);
    
    // Remove after a few seconds
    setTimeout(() => {
        statusDisplay.style.opacity = '0';
        setTimeout(() => {
            statusDisplay.remove();
        }, 500);
    }, 3000);
}

// Setup auto-hide functionality for the mobile menu (burger menu)
let autoHideMenuTimeout;
let autoHideProgressInterval;
function setupAutoHideMenuTimer() {
    // This ensures variables are only declared once
    window.addEventListener('mousemove', resetAutoHideMenuTimer);
    window.addEventListener('touchstart', resetAutoHideMenuTimer);
    window.addEventListener('keydown', resetAutoHideMenuTimer);
    window.addEventListener('scroll', resetAutoHideMenuTimer);
    
    // When the sidebar is open, any user activity should reset the timer
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.addEventListener('mousemove', resetAutoHideMenuTimer);
        sidebar.addEventListener('touchstart', resetAutoHideMenuTimer);
        sidebar.addEventListener('click', resetAutoHideMenuTimer);
    }
}

function startAutoHideMenuTimer() {
    // Clear any existing timer first
    clearAutoHideMenuTimer();
    
    // Create or get the auto-hide progress indicator
    let progressIndicator = document.querySelector('.menu-auto-hide-progress');
    if (!progressIndicator) {
        progressIndicator = document.createElement('div');
        progressIndicator.className = 'menu-auto-hide-progress';
        progressIndicator.setAttribute('title', 'Menu will auto-hide after inactivity');
        
        // Add the progress indicator to the sidebar
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.appendChild(progressIndicator);
        }
    }
    
    // Reset the progress
    progressIndicator.style.width = '100%';
    
    // Create a progress animation
    const autoHideDuration = 10000; // 10 seconds
    const updateInterval = 100; // Update every 100ms
    let timeRemaining = autoHideDuration;
    
    // Clear any existing interval
    if (autoHideProgressInterval) {
        clearInterval(autoHideProgressInterval);
    }
    
    // Start the progress animation
    autoHideProgressInterval = setInterval(() => {
        timeRemaining -= updateInterval;
        const percentRemaining = (timeRemaining / autoHideDuration) * 100;
        
        if (progressIndicator) {
            progressIndicator.style.width = `${percentRemaining}%`;
        }
        
        if (timeRemaining <= 0) {
            clearInterval(autoHideProgressInterval);
        }
    }, updateInterval);
    
    // Set new timer to auto close menu after inactivity
    autoHideMenuTimeout = setTimeout(() => {
        const sidebar = document.querySelector('.sidebar');
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        
        if (sidebar && sidebar.classList.contains('open')) {
            console.log("Auto-hiding mobile menu due to inactivity");
            
            // Close the sidebar
            sidebar.classList.remove('open');
            
            // Reset the toggle icon
            if (mobileNavToggle && mobileNavToggle.querySelector('i')) {
                mobileNavToggle.querySelector('i').className = 'fas fa-bars';
            }
            
            // Reset body states
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            
            // Hide header and footer with a small delay
            setTimeout(() => {
                const header = document.querySelector('header');
                const footer = document.querySelector('footer');
                
                if (header) header.classList.remove('visible');
                if (footer) footer.classList.remove('visible');
            }, 1000);
            
            // Remove progress indicator
            if (progressIndicator) {
                progressIndicator.remove();
            }
        }
    }, autoHideDuration); // Auto-hide after 10 seconds of inactivity
}

function resetAutoHideMenuTimer() {
    // Only reset if the menu is actually open
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
        clearAutoHideMenuTimer();
        startAutoHideMenuTimer();
    }
}

function clearAutoHideMenuTimer() {
    if (autoHideMenuTimeout) {
        clearTimeout(autoHideMenuTimeout);
        autoHideMenuTimeout = null;
    }
    
    if (autoHideProgressInterval) {
        clearInterval(autoHideProgressInterval);
        autoHideProgressInterval = null;
    }
}

function setupAutoHideMobileMenu() {
    // Initialize the auto-hide timer setup
    setupAutoHideMenuTimer();
    
    // Also reset timer when content inside the menu is interacted with
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', resetAutoHideMenuTimer);
        link.addEventListener('focus', resetAutoHideMenuTimer);
    });
}

// Resources dropdown functionality
function initResourcesDropdown() {
    const dropdownHeader = document.querySelector('.resources-dropdown .dropdown-header');
    const container = document.querySelector('.resources-container');
    
    if (dropdownHeader && container) {
        dropdownHeader.addEventListener('click', () => {
            dropdownHeader.classList.toggle('active');
            container.classList.toggle('active');
        });
    }
}

// Linux Tutor chat functionality
function initLinuxTutorChat() {
    // Chat elements
    const chatToggle = document.querySelector('.linux-chat-toggle');
    const chatPanel = document.querySelector('.linux-chat-panel');
    const chatPanelClose = document.querySelector('.chat-panel-close');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const fileInput = document.getElementById('fileInput');
    const filePreview = document.getElementById('filePreview');
    const fileInfo = document.getElementById('fileInfo');
    const removeFileButton = document.querySelector('.remove-file');
    
    // Chat state variables
    let selectedFile = null;
    const chatHistory = JSON.parse(localStorage.getItem('linuxTutorChatHistory') || '[]');
    
    // Load chat history if it exists
    if (chatHistory.length > 0) {
        loadChatHistory();
    }
    
    // Toggle chat panel visibility
    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            chatPanel.classList.toggle('open');
            
            // When opening the chat, focus on the input field
            if (chatPanel.classList.contains('open')) {
                setTimeout(() => {
                    chatInput.focus();
                }, 300);
            }
        });
    }
    
    // Close chat panel
    if (chatPanelClose) {
        chatPanelClose.addEventListener('click', () => {
            chatPanel.classList.remove('open');
        });
    }
    
    // Send message when pressing Enter in input field
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }
    
    // Send message when clicking send button
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }
    
    // File attachment handling
    if (fileInput) {
        fileInput.addEventListener('change', handleFileSelection);
    }
    
    // Remove file attachment
    if (removeFileButton) {
        removeFileButton.addEventListener('click', () => {
            selectedFile = null;
            filePreview.style.display = 'none';
            fileInput.value = '';
        });
    }
    
    // Function to send message to n8n webhook
    function sendMessage() {
        const message = chatInput.value.trim();
        
        // Don't send empty messages
        if (message === '' && !selectedFile) {
            return;
        }
        
        // Display user message in chat
        addMessageToChat(message, 'user');
        
        // Clear input field
        chatInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Prepare data for webhook
        const data = {
            message: message
        };
        
        // Add file if present
        if (selectedFile) {
            // If file is small enough, convert to base64 and include in payload
            if (selectedFile.size <= 500000) { // 500KB limit
                const reader = new FileReader();
                reader.onload = function(e) {
                    data.file = {
                        name: selectedFile.name,
                        type: selectedFile.type,
                        content: e.target.result.split(',')[1] // Remove data URL prefix
                    };
                    
                    // Reset file selection
                    selectedFile = null;
                    filePreview.style.display = 'none';
                    
                    // Send to webhook
                    sendToWebhook(data);
                };
                reader.readAsDataURL(selectedFile);
            } else {
                // For larger files, just send metadata
                data.file = {
                    name: selectedFile.name,
                    type: selectedFile.type,
                    size: selectedFile.size,
                    tooLarge: true
                };
                
                // Reset file selection
                selectedFile = null;
                filePreview.style.display = 'none';
                
                // Send to webhook
                sendToWebhook(data);
            }
        } else {
            // No file, just send the message
            sendToWebhook(data);
        }
    }
    
    // Function to send data to webhook
    function sendToWebhook(data) {
        console.log('Sending data to webhook:', data); // Debug: Log what we're sending
        
        // Simplify the data structure to ensure it's properly formatted
        const simplifiedData = {
            message: typeof data.message === 'string' ? data.message : 'No message provided'
        };
        
        console.log('Simplified data being sent:', simplifiedData);
        
        // Add timestamp to prevent caching issues
        const timestamp = new Date().getTime();
        fetch(`https://n8n.emmi.zone/webhook/5f241c28-3e09-4a97-a00d-579fed1935ba?_=${timestamp}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(simplifiedData)
        })
        .then(async response => {
            console.log('Response status:', response.status); // Debug: Log response status
            console.log('Response headers:', [...response.headers.entries()]); // Debug: Log response headers
            
            const text = await response.text();
            console.log('Raw response:', text); // Log the raw response
            
            let json;
            try {
                // Handle empty responses first
                if (!text || text.trim() === '') {
                    console.log('Empty response from server, using default'); // Debug
                    json = { response: "I received your message and am processing it. Please wait a moment..." }; // Better default message
                } else {
                    // Try to parse as JSON
                    json = JSON.parse(text);
                    console.log('Parsed JSON response:', json); // Debug: Log parsed response
                    
                    // Handle various response formats
                    if (json && typeof json === 'object') {
                        // Direct response format
                        if (json.response && typeof json.response === 'string') {
                            // Already in the right format
                        }
                        // Message format
                        else if (json.message && typeof json.message === 'string') {
                            json = { response: json.message };
                        }
                        // Output format from AI Agent
                        else if (json.output && typeof json.output === 'string') {
                            json = { response: json.output };
                        }
                        // Try to find any string property that might be a response
                        else {
                            const findStringProperty = (obj, depth = 0) => {
                                if (depth > 5) return null; // Prevent infinite recursion
                                
                                for (const key in obj) {
                                    if (typeof obj[key] === 'string') {
                                        return obj[key];
                                    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                                        const result = findStringProperty(obj[key], depth + 1);
                                        if (result) return result;
                                    }
                                }
                                return null;
                            };
                            
                            const foundString = findStringProperty(json);
                            if (foundString) {
                                json = { response: foundString };
                            } else {
                                // If we can't find any string, use a default response
                                json = { response: "I received your message!" };
                            }
                        }
                    }
                }
            } catch (e) {
                console.error('JSON parse error:', e); // Debug: Log parsing error
                // If parsing fails but we have text, try to use it as the response
                if (text && text.trim() !== '') {
                    console.log('Could not parse JSON, using raw text'); // Debug
                    json = { response: text };
                } else {
                    console.log('Empty or invalid response, using default'); // Debug
                    json = { response: "I received your message and am processing it. Please wait a moment..." };
                }
            }
            
            if (!response.ok) {
                throw new Error(`Server returned ${response.status}: ${JSON.stringify(json)}`);
            }
            
            // Handle different response formats
            if (json.response) {
                return json; // If response has a response field
            } else if (typeof json === 'string') {
                return { response: json }; // If response is a string
            } else if (typeof json === 'object') {
                // Check if any property in the object could be used as a response
                const possibleResponseKeys = Object.keys(json).filter(key => 
                    typeof json[key] === 'string' || typeof json[key] === 'number');
                
                if (possibleResponseKeys.length > 0) {
                    return { response: json[possibleResponseKeys[0]] };
                }
                return { response: JSON.stringify(json) }; // If response is an object
            }
            
            return { response: "I received your message!" }; // Fallback response
        })
        .then(data => {
            removeTypingIndicator();
            addMessageToChat(data.response, 'ai');
            chatMessages.scrollTop = chatMessages.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
            removeTypingIndicator();
            addMessageToChat("I received your message but had trouble processing the response.", 'ai');
            chatMessages.scrollTop = chatMessages.scrollHeight;
        });
    }
    
    // Function to handle file selection
    function handleFileSelection() {
        if (fileInput.files.length > 0) {
            selectedFile = fileInput.files[0];
            
            // Display file info
            fileInfo.textContent = `${selectedFile.name} (${formatFileSize(selectedFile.size)})`;
            filePreview.style.display = 'flex';
            
            // Add icon based on file type
            let fileIcon = document.createElement('i');
            fileIcon.className = getFileIcon(selectedFile.type);
            fileIcon.style.marginRight = '10px';
            fileIcon.style.color = 'var(--secondary-color)';
            
            // Remove previous icon if exists
            const existingIcon = fileInfo.querySelector('i');
            if (existingIcon) {
                fileInfo.removeChild(existingIcon);
            }
            
            // Add icon to file info
            fileInfo.insertBefore(fileIcon, fileInfo.firstChild);
        }
    }
    
    // Helper function to get appropriate icon for file type
    function getFileIcon(fileType) {
        if (fileType.includes('image')) {
            return 'fas fa-file-image';
        } else if (fileType.includes('pdf')) {
            return 'fas fa-file-pdf';
        } else if (fileType.includes('word') || fileType.includes('document')) {
            return 'fas fa-file-word';
        } else if (fileType.includes('excel') || fileType.includes('sheet')) {
            return 'fas fa-file-excel';
        } else if (fileType.includes('text') || fileType.includes('plain')) {
            return 'fas fa-file-alt';
        } else if (fileType.includes('zip') || fileType.includes('compressed')) {
            return 'fas fa-file-archive';
        } else if (fileType.includes('code') || fileType.includes('javascript') || fileType.includes('html') || fileType.includes('css')) {
            return 'fas fa-file-code';
        } else {
            return 'fas fa-file';
        }
    }
    
    // Helper function to format file size
    function formatFileSize(bytes) {
        if (bytes < 1024) {
            return bytes + ' bytes';
        } else if (bytes < 1048576) {
            return (bytes / 1024).toFixed(1) + ' KB';
        } else {
            return (bytes / 1048576).toFixed(1) + ' MB';
        }
    }
    
    // Function to add message to chat
    function addMessageToChat(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${sender}-message`;
        
        const contentElement = document.createElement('div');
        contentElement.className = 'message-content';
        
        // Format code blocks and preserve line breaks
        const formattedMessage = formatMessageText(message);
        contentElement.innerHTML = formattedMessage;
        
        messageElement.appendChild(contentElement);
        chatMessages.appendChild(messageElement);
        
        // Store in chat history
        chatHistory.push({ message, sender });
        localStorage.setItem('linuxTutorChatHistory', JSON.stringify(chatHistory));
        
        // Scroll to bottom of chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Helper function to format message text with code blocks and line breaks
    function formatMessageText(text) {
        if (!text) return '';
        
        // First, handle any code blocks (text between backticks)
        let formatted = text.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // Aggressively remove all '**' characters - multiple approaches
        // 1. Standard pattern replacement
        formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '$1');
        
        // 2. Global replacement of all remaining '**' sequences
        formatted = formatted.replace(/\*\*/g, '');
        
        // 3. Handle any remaining single asterisks that might be left
        formatted = formatted.replace(/\*/g, '');
        
        // Replace line breaks with <br>
        formatted = formatted.replace(/\n/g, '<br>');
        
        console.log('Original text:', text);
        console.log('Formatted text:', formatted);
        
        return formatted;
    }
    
    // Function to show typing indicator
    function showTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.className = 'chat-message ai-message typing-indicator';
        typingElement.innerHTML = '<div class="message-content"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
        chatMessages.appendChild(typingElement);
        
        // Scroll to bottom of chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    // Function to load chat history
    function loadChatHistory() {
        chatMessages.innerHTML = ''; // Clear existing messages
        
        chatHistory.forEach(item => {
            addMessageToChat(item.message, item.sender);
        });
    }
    
    // Add CSS for typing indicator (dots animation)
    const style = document.createElement('style');
    style.textContent = `
        .typing-indicator .message-content {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
        }
        
        .typing-indicator .dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: var(--text-color);
            margin: 0 3px;
            opacity: 0.7;
            animation: typing-dot 1.3s infinite ease-in-out;
        }
        
        .typing-indicator .dot:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .typing-indicator .dot:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes typing-dot {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-5px); }
        }
        
        .chat-message code {
            background-color: var(--code-background);
            padding: 2px 5px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.9em;
            white-space: pre-wrap;
            word-break: break-word;
            overflow-wrap: anywhere;
            display: inline-block;
            max-width: 100%;
        }
    `;
    document.head.appendChild(style);
}
