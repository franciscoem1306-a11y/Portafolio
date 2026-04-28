// FRANCISCO GONZALEZ — PORTFOLIO v2.0

console.log("%c PICKUP90s.dev — Motor encendido", "color:#b71c1c;font-size:14px;font-weight:bold;");

// Año dinámico
document.getElementById('anio').textContent = new Date().getFullYear();

// Odómetro animado
const odometro = document.getElementById('odometro');
let km = 0;
const maxKm = 100217;
const interval = setInterval(function() {
  km += Math.floor(Math.random() * 300 + 150);
  if (km >= maxKm) { km = maxKm; clearInterval(interval); }
  odometro.textContent = String(km).padStart(6, '0') + ' KM';
}, 55);

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
  });
});

// Nav link activo por sección
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      navLinks.forEach(function(l) {
        l.style.color = l.getAttribute('href') === ('#' + e.target.id) ? '#b71c1c' : '';
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(function(s) { observer.observe(s); });

// Efecto glitch inicial en hero
const heroH1 = document.querySelector('.hero h1');
if (heroH1) {
  setTimeout(function() {
    heroH1.style.textShadow = '6px 0 #b71c1c, -4px 0 #000';
    setTimeout(function() {
      heroH1.style.textShadow = '4px 4px 0 #000';
    }, 100);
  }, 700);
}

// Click físico en botón
document.querySelectorAll('.btn-primary').forEach(function(btn) {
  btn.addEventListener('click', function() {
    btn.style.transform = 'translate(2px,2px)';
    btn.style.boxShadow = '2px 2px 0 #000';
    setTimeout(function() {
      btn.style.transform = '';
      btn.style.boxShadow = '';
    }, 130);
  });
});

// Carrusel
const track = document.getElementById('track');
const dots = document.querySelectorAll('.dot');
let current = 0;
const total = 3;

function goTo(i) {
  current = (i + total) % total;
  track.style.transform = 'translateX(-' + (current * 100) + '%)';
  dots.forEach(function(d) { d.classList.remove('active'); });
  dots[current].classList.add('active');
}

document.getElementById('next').addEventListener('click', function() { goTo(current + 1); });
document.getElementById('prev').addEventListener('click', function() { goTo(current - 1); });
dots.forEach(function(d) {
  d.addEventListener('click', function() { goTo(parseInt(d.dataset.i)); });
});

console.log("%c Sistema OK — Listo para trabajo pesado", "color:#4caf50;font-size:11px;");