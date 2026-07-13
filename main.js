/* Greenloaning Biostudies v2 — main.js */

// Nav scroll state
const nav = document.querySelector('.site-nav');
function updateNav() {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.site-nav')) navLinks.classList.remove('open');
  });
}

// Hero background parallax + loaded class
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  heroBg.classList.add('loaded');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `scale(1) translateY(${y * 0.25}px)`;
  }, { passive: true });
}

// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Animated counter for stats
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const dur    = 1400;
  const start  = performance.now();
  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / dur, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const statObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      statObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num[data-target]').forEach(el => statObs.observe(el));

// Contact form submit (demo)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#3a9a3a';
    btn.disabled = true;
  });
}
