/* ============================================================
   COCOON TRAINING ACADEMY — COMPLETE SHARED JAVASCRIPT
   script.js | v1.0 | ES6+ Vanilla, No Dependencies
   ============================================================ */

'use strict';

/* ============================================================
   SCHEDULE DATA
   ============================================================ */
const SCHEDULE_DATA = {
  monday: {
    morning: [
      { time: '06:00 AM', duration: '60 min', class: 'Zumba', title: 'Morning Energize', level: 'All Levels', instructor: 'Lakshmi Priya', spots: 'open' },
      { time: '08:30 AM', duration: '60 min', class: 'Zumba', title: 'Power Zumba Cardio', level: 'Intermediate', instructor: 'Meera Krishnan', spots: 'open' },
    ],
    evening: [
      { time: '05:00 PM', duration: '60 min', class: 'Zumba Kids Jr.', title: 'Junior Dance & Play', level: 'Ages 4&ndash;6', instructor: 'Divya Nair', spots: 'open' },
      { time: '06:45 PM', duration: '60 min', class: 'Zumba', title: 'Evening Groove Party', level: 'All Levels', instructor: 'Lakshmi Priya', spots: 'few' },
    ],
  },
  tuesday: {
    morning: [
      { time: '06:00 AM', duration: '60 min', class: 'Zumba', title: 'Sunrise Salsa Beat', level: 'All Levels', instructor: 'Meera Krishnan', spots: 'open' },
    ],
    evening: [
      { time: '05:00 PM', duration: '60 min', class: 'Zumba Kids', title: 'Zumba Kids Party', level: 'Beginner (Kids)', instructor: 'Divya Nair', spots: 'open' },
      { time: '07:30 PM', duration: '60 min', class: 'Zumba', title: 'Latin Dance Fusion', level: 'Intermediate', instructor: 'Meera Krishnan', spots: 'open' },
    ],
  },
  wednesday: {
    morning: [
      { time: '06:00 AM', duration: '60 min', class: 'Zumba', title: 'Morning Energize', level: 'All Levels', instructor: 'Lakshmi Priya', spots: 'open' },
      { time: '09:00 AM', duration: '60 min', class: 'Zumba Gold', title: 'Active Seniors Zumba', level: 'All Levels', instructor: 'Divya Nair', spots: 'open' },
    ],
    evening: [
      { time: '05:00 PM', duration: '60 min', class: 'Zumba Kids Jr.', title: 'Junior Groove Party', level: 'Ages 4&ndash;6', instructor: 'Divya Nair', spots: 'open' },
      { time: '07:00 PM', duration: '60 min', class: 'Zumba', title: 'Evening Groove Party', level: 'All Levels', instructor: 'Lakshmi Priya', spots: 'few' },
    ],
  },
  thursday: {
    morning: [
      { time: '06:00 AM', duration: '60 min', class: 'Zumba', title: 'Power Zumba Cardio', level: 'Intermediate', instructor: 'Meera Krishnan', spots: 'open' },
    ],
    evening: [
      { time: '05:00 PM', duration: '60 min', class: 'Zumba Kids', title: 'Zumba Kids Party', level: 'Beginner (Kids)', instructor: 'Divya Nair', spots: 'open' },
      { time: '07:45 PM', duration: '60 min', class: 'Zumba', title: 'Reggaeton Dance Beats', level: 'Intermediate', instructor: 'Uvanitha Kamaraj', spots: 'open' },
    ],
  },
  friday: {
    morning: [
      { time: '06:00 AM', duration: '60 min', class: 'Zumba', title: 'Morning Energize', level: 'All Levels', instructor: 'Lakshmi Priya', spots: 'open' },
    ],
    evening: [
      { time: '05:00 PM', duration: '60 min', class: 'Aqua Zumba', title: 'Aqua Pool Party', level: 'All Levels', instructor: 'Uvanitha Kamaraj', spots: 'open' },
      { time: '07:00 PM', duration: '60 min', class: 'Zumba', title: 'TGIF Dance fitness Party', level: 'All Levels', instructor: 'Lakshmi Priya', spots: 'open' },
      { time: '08:15 PM', duration: '60 min', class: 'Zumba', title: 'Evening Groove Party', level: 'All Levels', instructor: 'Lakshmi Priya', spots: 'open' },
    ],
  },
  saturday: {
    morning: [
      { time: '07:00 AM', duration: '90 min', class: 'Zumba', title: 'Weekend Dance Warrior', level: 'All Levels', instructor: 'Lakshmi Priya', spots: 'open' },
      { time: '10:30 AM', duration: '60 min', class: 'Zumba Gold', title: 'Active Seniors Zumba', level: 'All Levels', instructor: 'Divya Nair', spots: 'open' },
      { time: '12:00 PM', duration: '60 min', class: 'Zumba Kids', title: 'Zumba Kids Fun', level: 'Beginner (Kids)', instructor: 'Divya Nair', spots: 'few' },
    ],
    evening: [
      { time: '06:30 PM', duration: '90 min', class: 'Zumba', title: 'Saturday Night Dance Fever', level: 'All Levels', instructor: 'Lakshmi Priya', spots: 'open' },
    ],
  },
  sunday: {
    morning: [
      { time: '07:00 AM', duration: '60 min', class: 'Zumba', title: 'Sunday Sunrise Dance', level: 'All Levels', instructor: 'Uvanitha Kamaraj', spots: 'open' },
      { time: '11:00 AM', duration: '60 min', class: 'Zumba', title: 'Family Zumba Dance', level: 'All Levels', instructor: 'Lakshmi Priya', spots: 'few' },
    ],
    evening: [
      { time: '05:30 PM', duration: '60 min', class: 'Zumba', title: 'Evening Chill Groove', level: 'All Levels', instructor: 'Lakshmi Priya', spots: 'open' },
    ],
  },
};

/* ============================================================
   DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initPageTransition();
  initScrollProgress();
  initCustomCursor();
  initNavbar();
  initMobileDrawer();
  initReveal();
  initCounters();
  initMagneticButtons();
  initAccordion();
  initRipple();
  initBackToTop();
  initMarquee();
  initPageExitLinks();
  initCardTilt();
  initSchedule();
  initPricingToggle();
  initContactForm();
  initHeroWordCycle();
  initParallax();
  initActiveNav();
});

/* ============================================================
   1. PAGE LOAD TRANSITION
   ============================================================ */
function initPageTransition() {
  const overlay = document.getElementById('pageTransition');
  if (!overlay) return;

  // Fade out overlay on page load
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add('done');
    });
  });

  // Hero bg scale
  const heroBg = document.querySelector('.page-hero-bg');
  if (heroBg) {
    setTimeout(() => {
      const hero = document.querySelector('.page-hero');
      if (hero) hero.classList.add('loaded');
    }, 100);
  }
}

/* ============================================================
   2. DUAL CUSTOM CURSOR
   ============================================================ */
function initCustomCursor() {
  const outer = document.getElementById('curOuter');
  const inner = document.getElementById('curInner');

  if (!outer || !inner) return;

  // Hide on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    outer.style.display = 'none';
    inner.style.display = 'none';
    return;
  }

  let mouseX = 0, mouseY = 0;
  let outerX = 0, outerY = 0;
  let hasMoved = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!hasMoved) {
      outer.classList.add('cur-visible');
      inner.classList.add('cur-visible');
      hasMoved = true;
    }

    // Inner dot follows instantly
    inner.style.left = `${mouseX}px`;
    inner.style.top  = `${mouseY}px`;
  });

  // Outer ring lags behind
  function animateOuter() {
    const speed = 0.14;
    outerX += (mouseX - outerX) * speed;
    outerY += (mouseY - outerY) * speed;
    outer.style.left = `${outerX}px`;
    outer.style.top  = `${outerY}px`;
    requestAnimationFrame(animateOuter);
  }
  animateOuter();

  // Hover state on interactive elements
  const interactives = 'a, button, .card, .discipline-panel, .tab-btn, .day-tab, .pricing-card, .team-card, .accordion-trigger, input, textarea, select, .gallery-item, [data-cursor="hover"]';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactives)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactives)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.add('cursor-click');
  });

  document.addEventListener('mouseup', () => {
    document.body.classList.remove('cursor-click');
  });
}

/* ============================================================
   3. SCROLL PROGRESS BAR
   ============================================================ */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(pct, 100)}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/* ============================================================
   4. NAVBAR: SCROLL GLASS + MOBILE DRAWER + ACTIVE LINKS
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('nav');
  if (!navbar) return;

  let lastScroll = 0;
  let ticking = false;

  function handleNavScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleNavScroll);
      ticking = true;
    }
  }, { passive: true });

  handleNavScroll();
}

function initActiveNav() {
  const page = document.body.dataset.page || '';
  const allLinks = document.querySelectorAll('.nav-links a, .mobile-drawer a');

  allLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkPage = href.replace('.html', '').replace(/.*\//, '') || 'index';

    if (
      page === linkPage ||
      (page === 'index' && linkPage === 'index') ||
      (page === '' && href === 'index.html')
    ) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   5. MOBILE DRAWER
   ============================================================ */
function initMobileDrawer() {
  const burger  = document.getElementById('hamburger');
  const drawer  = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('nav-drawer-overlay');

  if (!burger || !drawer) return;

  function openDrawer() {
    burger.classList.add('open');
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    burger.classList.remove('open');
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    drawer.classList.contains('open') ? closeDrawer() : openDrawer();
  });

  // Close button listener
  const closeBtn = document.getElementById('drawerClose');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Close on drawer link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
}

/* ============================================================
   6. SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseFloat(el.dataset.delay || 0);

        setTimeout(() => {
          el.classList.add('visible');
        }, delay * 1000);

        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px',
  });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   7. COUNTER ANIMATION
   ============================================================ */
function animateCount(el, from, to, duration, suffix) {
  const start = performance.now();
  const isDecimal = String(to).includes('.');

  function update(timestamp) {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out expo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = from + (to - from) * eased;

    el.textContent = isDecimal
      ? current.toFixed(1)
      : Math.floor(current).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = isDecimal ? to.toFixed(1) : to.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('.count[data-to]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const to     = parseFloat(el.dataset.to);
        const from   = parseFloat(el.dataset.from || 0);
        const dur    = parseInt(el.dataset.duration || 1800);
        const suffix = el.dataset.suffix || '';

        animateCount(el, from, to, dur, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ============================================================
   8. MAGNETIC BUTTON EFFECT
   ============================================================ */
function initMagneticButtons() {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const magnetics = document.querySelectorAll('.btn-primary, .btn-ghost');

  magnetics.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 80;

      if (dist < maxDist) {
        const pull = (maxDist - dist) / maxDist;
        const moveX = dx * pull * 0.35;
        const moveY = dy * pull * 0.35;
        btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ============================================================
   9. ACCORDION
   ============================================================ */
function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  if (!items.length) return;

  items.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      items.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
        }
      });

      // Toggle current
      item.classList.toggle('open', !isOpen);
    });
  });
}

/* ============================================================
   10. RIPPLE EFFECT
   ============================================================ */
function initRipple() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-primary, .btn-ghost');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.5;
    const x    = e.clientX - rect.left - size / 2;
    const y    = e.clientY - rect.top  - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
    `;

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
}

/* ============================================================
   11. BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   12. MARQUEE PAUSE ON HOVER
   ============================================================ */
function initMarquee() {
  const strips = document.querySelectorAll('.marquee-strip');

  strips.forEach(strip => {
    const track = strip.querySelector('.marquee-track');
    if (!track) return;

    strip.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    strip.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  });
}

/* ============================================================
   13. PAGE EXIT LINK TRANSITIONS
   ============================================================ */
function initPageExitLinks() {
  const overlay = document.getElementById('page-overlay');
  if (!overlay) return;

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');

    // Skip anchors, external, javascript:, mailto:, tel:
    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('mailto') ||
      href.startsWith('tel') ||
      href.startsWith('javascript') ||
      href.startsWith('http') ||
      link.target === '_blank'
    ) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.style.transition = 'opacity 0.4s ease';
      overlay.style.opacity    = '1';
      overlay.style.pointerEvents = 'all';

      setTimeout(() => {
        window.location.href = href;
      }, 420);
    });
  });
}

/* ============================================================
   14. 3D CARD TILT
   ============================================================ */
function initCardTilt() {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const cards = document.querySelectorAll('.card, .pricing-card, .program-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const rx     = ((e.clientY - cy) / (rect.height / 2)) * -8;
      const ry     = ((e.clientX - cx) / (rect.width  / 2)) *  8;

      card.style.transform = `
        perspective(800px)
        rotateX(${rx}deg)
        rotateY(${ry}deg)
        translateY(-6px)
        scale(1.01)
      `;
      card.style.transition = 'transform 0.1s linear';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
    });
  });
}

/* ============================================================
   15. SCHEDULE SYSTEM
   ============================================================ */
function initSchedule() {
  const board   = document.getElementById('sch-board');
  const dayTabs = document.querySelectorAll('.day-tab');

  if (!board || !dayTabs.length) return;

  function renderSchedule(day) {
    const data = SCHEDULE_DATA[day];
    if (!data) return;

    const sections = [];

    ['morning', 'evening'].forEach(period => {
      const classes = data[period];
      if (!classes || !classes.length) return;

      const icon  = period === 'morning' ? '☀' : '🌙';
      const label = period === 'morning' ? 'MORNING SESSIONS' : 'EVENING SESSIONS';

      const cards = classes.map(cls => {
        const spotsLabel = cls.spots === 'open' ? 'Spots Available'
                         : cls.spots === 'few'  ? 'Few Spots Left'
                         : 'Class Full';
        const spotsClass = `spots-${cls.spots}`;
        const barClass   = cls.class.toLowerCase() === 'zumba' ? '' : 'toning';

        return `
          <div class="sch-card reveal" data-delay="0.05">
            <div class="sch-card-bar ${barClass}"></div>
            <div class="sch-card-body">
              <div class="sch-card-time">${cls.time}</div>
              <div class="sch-card-class">${cls.class} · ${cls.duration}</div>
              <div class="sch-card-title">${cls.title}</div>
              <div class="sch-card-meta">
                <span class="sch-card-tag">${cls.level}</span>
                <span class="sch-card-tag">${cls.instructor}</span>
                <span class="sch-card-tag ${spotsClass}">${spotsLabel}</span>
              </div>
            </div>
          </div>
        `;
      }).join('');

      sections.push(`
        <div class="sch-time-section">
          <div class="sch-time-label">${icon} ${label}</div>
          <div class="sch-grid">
            ${cards}
          </div>
        </div>
      `);
    });

    board.innerHTML = sections.join('');

    // Re-init reveal for newly injected cards
    board.querySelectorAll('.reveal').forEach(el => {
      const delay = parseFloat(el.dataset.delay || 0);
      setTimeout(() => {
        el.classList.add('visible');
      }, delay * 1000 + 50);
    });
  }

  // Tab switching
  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dayTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const day = tab.dataset.day;
      if (day) renderSchedule(day);
    });
  });

  // Auto-detect today or render Monday
  const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  const todayDay = days[new Date().getDay()];
  const todayTab = document.querySelector(`.day-tab[data-day="${todayDay}"]`);

  if (todayTab) {
    dayTabs.forEach(t => t.classList.remove('active'));
    todayTab.classList.add('active');
    renderSchedule(todayDay);
  } else {
    const firstTab = dayTabs[0];
    if (firstTab) {
      firstTab.classList.add('active');
      renderSchedule(firstTab.dataset.day || 'monday');
    }
  }
}

/* ============================================================
   16. PRICING TOGGLE (Monthly / Annual)
   ============================================================ */
function initPricingToggle() {
  const toggle    = document.getElementById('pricing-toggle');
  const monthlyEl = document.getElementById('label-monthly');
  const annualEl  = document.getElementById('label-annual');
  const prices    = document.querySelectorAll('.pricing-amount[data-monthly]');

  if (!toggle || !prices.length) return;

  let isAnnual = false;

  function updatePrices() {
    prices.forEach(el => {
      const monthly = el.dataset.monthly || '0';
      const annual  = el.dataset.annual  || '0';
      el.textContent = isAnnual ? annual : monthly;
    });

    if (monthlyEl) monthlyEl.classList.toggle('active', !isAnnual);
    if (annualEl)  annualEl.classList.toggle('active',   isAnnual);
    toggle.classList.toggle('active', isAnnual);
  }

  toggle.addEventListener('click', () => {
    isAnnual = !isAnnual;
    updatePrices();
  });

  updatePrices();
}

/* ============================================================
   17. CONTACT FORM HANDLER
   ============================================================ */
function initContactForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    if (btn) {
      btn.textContent = 'Sending…';
      btn.disabled    = true;
    }

    // Gather form data
    const data = {};
    new FormData(form).forEach((val, key) => {
      data[key] = val;
    });

    // Simulate async send (replace with actual API call)
    await handleForm(data);

    // Show success state
    form.style.display = 'none';
    if (success) {
      success.classList.add('show');
    }
  });
}

async function handleForm(data) {
  // Simulate network delay
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('[Cocoon Academy] Form submitted:', data);
      resolve({ ok: true });
    }, 1200);
  });
}

/* ============================================================
   18. HERO WORD CYCLE ANIMATION
   ============================================================ */
function initHeroWordCycle() {
  const cycleEl = document.querySelector('.word-cycle');
  if (!cycleEl) return;

  const words   = ['DANCE', 'SWEAT', 'SMILE', 'TRANSFORM', 'GROW', 'INSPIRE', 'THRIVE'];
  let current   = 0;

  // Build inner structure
  const wordSpan = document.createElement('span');
  wordSpan.className = 'word';
  wordSpan.textContent = words[0];
  cycleEl.innerHTML = '';
  cycleEl.appendChild(wordSpan);

  function cycleWord() {
    current = (current + 1) % words.length;

    // Animate out
    wordSpan.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    wordSpan.style.opacity    = '0';
    wordSpan.style.transform  = 'translateY(-20px)';

    setTimeout(() => {
      wordSpan.textContent = words[current];
      wordSpan.style.transform = 'translateY(20px)';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          wordSpan.style.opacity   = '1';
          wordSpan.style.transform = 'translateY(0)';
        });
      });
    }, 300);
  }

  setInterval(cycleWord, 2200);
}

/* ============================================================
   19. PARALLAX ON .page-hero BACKGROUNDS
   ============================================================ */
function initParallax() {
  const heroes = document.querySelectorAll('.page-hero');
  if (!heroes.length) return;

  // Disable on mobile
  if (window.matchMedia('(max-width: 768px)').matches) return;

  function updateParallax() {
    heroes.forEach(hero => {
      const bg   = hero.querySelector('.page-hero-bg');
      if (!bg) return;

      const rect = hero.getBoundingClientRect();
      const vis  = rect.top + rect.height;

      if (vis < 0 || rect.top > window.innerHeight) return;

      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const offset   = (progress - 0.5) * 80;

      bg.style.transform = `scale(1.08) translateY(${offset}px)`;
    });
  }

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();
}

/* ============================================================
   20. DISCIPLINE TAB FILTER (Classes Page)
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns    = document.querySelectorAll('.tab-btn[data-filter]');
  const progCards  = document.querySelectorAll('.program-card[data-class]');

  if (!tabBtns.length || !progCards.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      progCards.forEach(card => {
        const cardClass = (card.dataset.class || '').toLowerCase();
        if (filter === 'all' || cardClass === filter.toLowerCase()) {
          card.style.display = '';
          setTimeout(() => {
            card.style.opacity   = '1';
            card.style.transform = '';
          }, 50);
        } else {
          card.style.opacity   = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
});

/* ============================================================
   21. UTILITY: SHOW TOAST
   ============================================================ */
function showToast(message, icon = '✓', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
  });

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

/* ============================================================
   22. SMOOTH ANCHOR SCROLLING
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const offset = parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-h')) || 72;

      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
});

/* ============================================================
   23. LAZY LOADING IMAGES
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('img[data-src]');
  if (!imgs.length) return;

  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
        imgObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  imgs.forEach(img => imgObserver.observe(img));
});

/* ============================================================
   24. HERO PARALLAX MOUSE TRACKING (Home Hero)
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const heroVisual = document.querySelector('.hero-visual');
  if (!heroVisual) return;
  if (window.matchMedia('(max-width: 1024px)').matches) return;

  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const mx   = (e.clientX - cx) / rect.width;
    const my   = (e.clientY - cy) / rect.height;

    heroVisual.style.transform = `translate(${mx * 16}px, ${my * 10}px)`;
    heroVisual.style.transition = 'transform 0.15s linear';
  });

  heroSection.addEventListener('mouseleave', () => {
    heroVisual.style.transform  = '';
    heroVisual.style.transition = 'transform 0.8s cubic-bezier(0.16,1,0.3,1)';
  });
});

/* ============================================================
   25. GLOBAL KEYBOARD SHORTCUTS
   ============================================================ */
document.addEventListener('keydown', (e) => {
  // / to focus search (if exists)
  if (e.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
    const search = document.querySelector('[data-search-input]');
    if (search) {
      e.preventDefault();
      search.focus();
    }
  }

  // Escape closes modals / drawers
  if (e.key === 'Escape') {
    const drawer = document.getElementById('nav-drawer');
    if (drawer && drawer.classList.contains('open')) {
      const burger = document.querySelector('.nav-burger');
      if (burger) burger.click();
    }
  }
});

/* ============================================================
   26. STICKY SECTION HEADINGS HIGHLIGHT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll(`.nav-link[href*="${id}"]`).forEach(link => {
          link.classList.add('active');
        });
      } else {
        const id = entry.target.id;
        document.querySelectorAll(`.nav-link[href*="${id}"]`).forEach(link => {
          link.classList.remove('active');
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(sec => sectionObserver.observe(sec));
});

/* ============================================================
   27. PRICING CARD HOVER SOUND FEEDBACK (visual only)
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const pricingCards = document.querySelectorAll('.pricing-card');

  pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'all 0.35s cubic-bezier(0.16,1,0.3,1)';
    });
  });
});

/* ============================================================
   28. DYNAMIC YEAR IN FOOTER
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/* ============================================================
   29. FORM VALIDATION HELPERS
   ============================================================ */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[+]?[\d\s\-().]{7,}$/.test(phone);
}

function addFormValidation(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
    input.addEventListener('blur', () => {
      const value = input.value.trim();

      if (input.required && !value) {
        input.style.borderColor = '#e85a5a';
        return;
      }

      if (input.type === 'email' && value && !validateEmail(value)) {
        input.style.borderColor = '#e85a5a';
        return;
      }

      if (input.type === 'tel' && value && !validatePhone(value)) {
        input.style.borderColor = '#e85a5a';
        return;
      }

      input.style.borderColor = 'rgba(200,151,63,0.35)';
    });

    input.addEventListener('focus', () => {
      input.style.borderColor = '';
    });
  });
}

/* ============================================================
   30. INIT FORM VALIDATION ON CONTACT PAGE
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  addFormValidation('contact-form');
  addFormValidation('enroll-form');
});

/* ============================================================
   31. UTILITY: DEBOUNCE & THROTTLE
   ============================================================ */
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, limit) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if (now - last >= limit) {
      last = now;
      fn.apply(this, args);
    }
  };
}

/* ============================================================
   32. RESIZE HANDLER
   ============================================================ */
window.addEventListener('resize', debounce(() => {
  // Re-check magnetic buttons
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  if (isMobile) {
    document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
      btn.style.transform = '';
    });
  }
}, 250));

/* ============================================================
   33. EXPORT UTILITIES (for page-specific scripts)
   ============================================================ */
window.CocoonAcademy = {
  showToast,
  handleForm,
  animateCount,
  validateEmail,
  validatePhone,
  SCHEDULE_DATA,
};

/* ============================================================
   END OF script.js
   ============================================================ */
