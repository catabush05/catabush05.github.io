// Personal Portfolio Web    const names = ['Catalina Bush', 'Cata', '🐱', 'Catalina', 'Cat'];ite Implementation
// // Initialize the applicationpplication State
const AppState = {
    currentSection: 0,
    sections: [],
    isScrolling: false,
    slideshows: {}
};

// Configuration
const CONFIG = {
    snapDuration: 1000,
    slideTransition: 500
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
    setupNavigation();
    initializeSlideshows();
    initializeNameCarousel();
});

// Name Carousel functionality
function initializeNameCarousel() {
    const names = ['Catalina Bush', 'Cata', '🐈', 'Catalina', 'Cat'];
    let currentIndex = 0;
    let isAnimating = false;

    const centerElement = document.querySelector('.center-name');
    const leftArrow = document.querySelector('.carousel-left');
    const rightArrow = document.querySelector('.carousel-right');
    const container = document.querySelector('.carousel-container');

    if (!centerElement || !leftArrow || !rightArrow || !container) return;

    function updateCarousel(direction = null, animated = true) {
        const currentName = names[currentIndex];

        if (!animated) {
            // Instant update for initialization
            centerElement.textContent = currentName;
            return;
        }

        if (isAnimating) return;
        isAnimating = true;

        // Slide animation - move current text out
        if (direction === 'left') {
            centerElement.style.transform = 'translateX(-120%)';
            centerElement.style.opacity = '0';
        } else if (direction === 'right') {
            centerElement.style.transform = 'translateX(120%)';
            centerElement.style.opacity = '0';
        }

        setTimeout(() => {
            centerElement.textContent = currentName;

            // Start new text from well outside the visible area
            if (direction === 'left') {
                centerElement.style.transform = 'translateX(150%)';
                centerElement.style.opacity = '0';
            } else if (direction === 'right') {
                centerElement.style.transform = 'translateX(-150%)';
                centerElement.style.opacity = '0';
            }

            // Force reflow
            centerElement.offsetHeight;

            // Animate to center with fade-in
            centerElement.style.transform = 'translateX(0)';
            centerElement.style.opacity = '1';

            setTimeout(() => {
                isAnimating = false;
            }, 400);
        }, 200);
    }

    function moveLeft() {
        if (isAnimating) return;
        currentIndex = (currentIndex - 1 + names.length) % names.length;
        updateCarousel('left');
    }

    function moveRight() {
        if (isAnimating) return;
        currentIndex = (currentIndex + 1) % names.length;
        updateCarousel('right');
    }

    // Event listeners
    if (leftArrow) leftArrow.addEventListener('click', moveLeft);
    if (rightArrow) rightArrow.addEventListener('click', moveRight);

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            moveLeft();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            moveRight();
        }
    });

    // Initialize carousel without animation
    updateCarousel(null, false);
}

// Initialize the application

// Event listeners\n    if (leftArrow) leftArrow.addEventListener('click', moveLeft);\n    if (rightArrow) rightArrow.addEventListener('click', moveRight);\n\n    // Keyboard navigation\n    document.addEventListener('keydown', function (e) {\n        if (e.key === 'ArrowLeft') {\n            e.preventDefault();\n            moveLeft();\n        } else if (e.key === 'ArrowRight') {\n            e.preventDefault();\n            moveRight();\n        }\n    });\n\n    // Initialize carousel without animation\n    updateCarousel(null, false);\n}\n\n// Initialize the application
function initializeApp() {
    // Get all sections and convert to array
    AppState.sections = Array.from(document.querySelectorAll('.section'));

    // Set initial states
    updateActiveSection();
    updateLeftNavigator();

    // Force update on load
    setTimeout(() => {
        updateActiveSection();
    }, 100);
}

// Initialize all slideshow galleries
function initializeSlideshows() {
    const projectSections = ['project-1', 'project-2', 'project-3', 'project-4'];

    projectSections.forEach(projectId => {
        const container = document.querySelector(`#${projectId} .slideshow-container`);
        if (container) {
            AppState.slideshows[projectId] = {
                currentSlide: 0,
                slides: container.querySelectorAll('.slide'),
                dots: container.querySelectorAll('.dot')
            };
        }
    });
}

// Slideshow Functions
function changeSlide(projectId, direction) {
    const slideshow = AppState.slideshows[projectId];
    if (!slideshow) return;

    // Hide current slide
    slideshow.slides[slideshow.currentSlide].classList.remove('active');
    slideshow.dots[slideshow.currentSlide].classList.remove('active');

    // Calculate new slide index
    slideshow.currentSlide += direction;

    if (slideshow.currentSlide >= slideshow.slides.length) {
        slideshow.currentSlide = 0;
    } else if (slideshow.currentSlide < 0) {
        slideshow.currentSlide = slideshow.slides.length - 1;
    }

    // Show new slide
    slideshow.slides[slideshow.currentSlide].classList.add('active');
    slideshow.dots[slideshow.currentSlide].classList.add('active');
}

function currentSlide(projectId, slideNumber) {
    const slideshow = AppState.slideshows[projectId];
    if (!slideshow) return;

    // Hide current slide
    slideshow.slides[slideshow.currentSlide].classList.remove('active');
    slideshow.dots[slideshow.currentSlide].classList.remove('active');

    // Set new slide
    slideshow.currentSlide = slideNumber - 1;

    // Show new slide
    slideshow.slides[slideshow.currentSlide].classList.add('active');
    slideshow.dots[slideshow.currentSlide].classList.add('active');
}

// Setup navigation event listeners
function setupNavigation() {
    // Left navigator click events
    const leftNavIndicators = document.querySelectorAll('.nav-indicator');

    leftNavIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function (e) {
            e.preventDefault();

            const sectionId = this.dataset.section;
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                scrollToSection(targetSection);
            }
        });
    });

    // Scroll event to update active section
    window.addEventListener('scroll', throttle(updateActiveSection, 100));

    // Keyboard navigation
    document.addEventListener('keydown', handleKeydown);

    // Initial update
    updateActiveSection();
}

// Scroll to specific section smoothly
function scrollToSection(targetSection) {
    if (AppState.isScrolling) return;

    AppState.isScrolling = true;

    // Calculate position accounting for navbar
    const navbarHeight = 0;
    const targetPosition = targetSection.offsetTop - navbarHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    setTimeout(() => {
        AppState.isScrolling = false;
        updateActiveSection();
    }, 1000);
}

// Update active section based on scroll position
function updateActiveSection() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    let newActiveSection = 0;

    // Find which section is most visible
    AppState.sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const sectionHeight = rect.height;

        // Check if section is in view
        if (scrollTop >= sectionTop - windowHeight / 2 && scrollTop < sectionTop + sectionHeight - windowHeight / 2) {
            newActiveSection = index;
        }
    });

    if (newActiveSection !== AppState.currentSection) {
        AppState.currentSection = newActiveSection;
        updateLeftNavigator();
    }

    // Toggle navbar and left navigator colors based on current section
    const navbar = document.querySelector('.navbar');
    const leftNavigator = document.querySelector('.left-navigator');
    const heroSection = document.querySelector('#hero');
    const currentSectionElement = AppState.sections[newActiveSection];

    if (heroSection && navbar && leftNavigator) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const isScrolledPastHero = scrollTop > heroBottom - windowHeight / 2;

        // Check if we're on a dark background section
        const darkSections = ['project-3', 'project-4'];
        const isOnDarkSection = currentSectionElement && darkSections.includes(currentSectionElement.id);

        // Remove all navbar classes first
        navbar.classList.remove('scrolled', 'dark-section');
        leftNavigator.classList.remove('scrolled', 'dark-section');

        if (isOnDarkSection) {
            // On dark background sections, use white text
            navbar.classList.add('dark-section');
            leftNavigator.classList.add('dark-section');
        } else if (isScrolledPastHero) {
            // On light sections past hero, use dark text
            navbar.classList.add('scrolled');
            leftNavigator.classList.add('scrolled');
        }
        // If on hero section, no classes applied (uses default white)
    }
}

// Update left navigator active states
function updateLeftNavigator() {
    const leftNavIndicators = document.querySelectorAll('.nav-indicator');
    const currentSectionElement = AppState.sections[AppState.currentSection];

    if (!currentSectionElement) return;

    const currentSectionId = currentSectionElement.id;

    leftNavIndicators.forEach((indicator) => {
        const sectionId = indicator.dataset.section;

        if (sectionId === currentSectionId) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Handle keyboard navigation
function handleKeydown(e) {
    if (AppState.isScrolling) return;

    switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
            e.preventDefault();
            if (AppState.currentSection < AppState.sections.length - 1) {
                scrollToSection(AppState.sections[AppState.currentSection + 1]);
            }
            break;
        case 'ArrowUp':
        case 'PageUp':
            e.preventDefault();
            if (AppState.currentSection > 0) {
                scrollToSection(AppState.sections[AppState.currentSection - 1]);
            }
            break;
        case 'Home':
            e.preventDefault();
            scrollToSection(AppState.sections[0]);
            break;
        case 'End':
            e.preventDefault();
            scrollToSection(AppState.sections[AppState.sections.length - 1]);
            break;
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Setup navigation event listeners
// Setup navigation event listeners
function setupNavigation() {
    // Left navigator click events
    const leftNavIndicators = document.querySelectorAll('.nav-indicator');
    leftNavIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.dataset.section;
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                scrollToSection(targetSection);
            }
        });
    });

    // Scroll event to update active section
    window.addEventListener('scroll', throttle(updateActiveSection, 100));

    // Keyboard navigation
    document.addEventListener('keydown', handleKeydown);

    // Initial update
    updateActiveSection();
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Handle window resize
function handleResize() {
    updateActiveSection();
    updateLeftNavigator();
}

// Setup resize listener
window.addEventListener('resize', debounce(handleResize, 250));

// Export slideshow functions for global use
window.changeSlide = changeSlide;
window.currentSlide = currentSlide;