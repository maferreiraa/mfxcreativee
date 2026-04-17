document.body.classList.add('js-ready');

/* slider */
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let sliderInterval = null;

function showSlide(index) {
  if (!slides.length) return;

  slides.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  slides[index].classList.add('active');
  if (dots[index]) {
    dots[index].classList.add('active');
  }

  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function startSlider() {
  if (slides.length > 1) {
    sliderInterval = setInterval(nextSlide, 4500);
  }
}

function resetSlider() {
  if (sliderInterval) clearInterval(sliderInterval);
  startSlider();
}

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const index = Number(dot.dataset.slide);
    showSlide(index);
    resetSlider();
  });
});

showSlide(0);
startSlider();

/* animação segura */
const animatedItems = document.querySelectorAll('.animate-on-scroll');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  animatedItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.04}s`;
    observer.observe(item);
  });
} else {
  animatedItems.forEach((item) => item.classList.add('is-visible'));
}

/* navbar */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (!navbar) return;

  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* menu mobile */
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}