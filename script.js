// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveLink();
});

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// ── ACTIVE NAV LINK ──
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

// ── STATS COUNTER ──
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;
const statsSection = document.querySelector('.stats-section');

function animateStats() {
  if (statsAnimated) return;
  const rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    statsAnimated = true;
    statNumbers.forEach(el => {
      const target = parseInt(el.dataset.target);
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.round(current) + (target === 100 ? '+' : '+');
        if (current >= target) clearInterval(timer);
      }, 16);
    });
  }
}
window.addEventListener('scroll', animateStats);
animateStats();

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.service-card, .mv-card, .objective-card, .contact-form-wrap, .contact-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = '.revealed { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
});

// ── CONTACT FORM ──
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.7';
  setTimeout(() => {
    formSuccess.classList.add('visible');
    contactForm.reset();
    submitBtn.textContent = 'Enviar Solicitud →';
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    setTimeout(() => formSuccess.classList.remove('visible'), 5000);
  }, 1500);
});

// ── SERVICE CARD STAGGER ──
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
});
