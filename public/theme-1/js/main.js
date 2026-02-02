/**
 * TechVision IT Company - Main JavaScript
 * Handles all interactive functionality
 */

// ============================================
// DOM CONTENT LOADED
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavigation();
  initCounters();
  initAnimations();
  initMobileMenu();
  initFAQ();
  initContactForm();
  initSmoothScroll();
  initScrollEffects();
});

// ============================================
// PRELOADER
// ============================================
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      preloader.style.transition = 'opacity 0.5s, visibility 0.5s';
      
      // Trigger initial animations after preloader
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }, 800);
  });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Active link highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  mobileNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ============================================
// COUNTER ANIMATION
// ============================================
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (counters.length === 0) return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        animateCounter(counter, target);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  const duration = 2000;
  const start = 0;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (target - start) * easeOutQuart);

    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(updateCounter);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initAnimations() {
  // Intersection Observer for fade-in animations
  const animateElements = document.querySelectorAll('[class*="animate-"]');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach(el => observer.observe(el));
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // Animate hamburger to X
    const icon = menuBtn.querySelector('svg');
    if (mobileMenu.classList.contains('hidden')) {
      icon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      `;
    } else {
      icon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      `;
    }
  });

  // Close menu on link click
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.querySelector('svg').innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      `;
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      menuBtn.querySelector('svg').innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      `;
    }
  });
}

// ============================================
// FAQ ACCORDION
// ============================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-content');

    if (!button || !content) return;

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
      // Close all other FAQs
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherButton = otherItem.querySelector('.faq-button');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherButton && otherContent) {
            otherButton.setAttribute('aria-expanded', 'false');
            otherContent.classList.remove('open');
            otherContent.style.maxHeight = '0';
          }
        }
      });

      // Toggle current FAQ
      button.setAttribute('aria-expanded', !isExpanded);
      
      if (!isExpanded) {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.classList.remove('open');
        content.style.maxHeight = '0';
      }
    });
  });
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    `;
    submitBtn.disabled = true;

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success message
    showNotification('success', 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.');

    // Reset form
    form.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  });
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(type, message) {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `notification fixed top-24 right-4 z-50 px-6 py-4 rounded-lg shadow-lg max-w-sm transition-all duration-300 transform translate-x-full`;
  
  if (type === 'success') {
    notification.classList.add('bg-green-500', 'text-white');
  } else if (type === 'error') {
    notification.classList.add('bg-red-500', 'text-white');
  } else {
    notification.classList.add('bg-primary-500', 'text-white');
  }

  notification.innerHTML = `
    <div class="flex items-center gap-3">
      ${type === 'success' 
        ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
        : type === 'error'
        ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
        : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
      }
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  // Animate in
  requestAnimationFrame(() => {
    notification.classList.remove('translate-x-full');
  });

  // Remove after 5 seconds
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Navbar background
    if (currentScroll > 50) {
      navbar.querySelector('.absolute').classList.add('bg-dark-950/95');
      navbar.querySelector('.absolute').classList.remove('bg-dark-950/80');
    } else {
      navbar.querySelector('.absolute').classList.add('bg-dark-950/80');
      navbar.querySelector('.absolute').classList.remove('bg-dark-950/95');
    }

    lastScroll = currentScroll;
  });

  // Parallax effect for hero section
  const heroSection = document.querySelector('section');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = heroSection.querySelectorAll('[class*="absolute"]');
      
      parallaxElements.forEach((el, index) => {
        const speed = 0.1 * (index + 1);
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }
}

// ============================================
// PORTFOLIO FILTER
// ============================================
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.portfolio-filter');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterButtons.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-primary-500', 'text-white');
        btn.classList.add('bg-white/5', 'text-dark-300');
      });
      button.classList.add('active', 'bg-primary-500', 'text-white');
      button.classList.remove('bg-white/5', 'text-dark-300');

      // Filter items
      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.5s ease-out';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ============================================
// MAGNETIC BUTTONS (Optional Enhancement)
// ============================================
function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

  magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0)';
    });
  });
}

// ============================================
// LAZY LOAD IMAGES (Optional Enhancement)
// ============================================
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach(img => {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    });
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
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
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ============================================
// COPY TO CLIPBOARD
// ============================================
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      () => showNotification('success', 'Copied to clipboard!'),
      () => showNotification('error', 'Failed to copy')
    );
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showNotification('success', 'Copied to clipboard!');
    } catch (err) {
      showNotification('error', 'Failed to copy');
    }
    document.body.removeChild(textArea);
  }
}
