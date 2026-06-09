const paper = document.querySelector('.paper-sheet');
const ornek = document.getElementById('ornekParallax');
const storySection = document.getElementById('story');

// ---- STORY reveal ----
const storyObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) paper.classList.add('revealed');
  });
}, { threshold: 0.15 });

storyObserver.observe(storySection);

// ---- ORNEK rotation ----
let rotation = 0;
let lastY = window.scrollY;
let ticking = false;

function updateOrnek() {
  const delta = window.scrollY - lastY;
  rotation += delta * 0.05;
  ornek.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

  const storyTop = storySection.offsetTop;
  const isVisible = window.scrollY >= storyTop - window.innerHeight * 0.5;
  ornek.classList.toggle('visible', isVisible);

  lastY = window.scrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateOrnek);
    ticking = true;
  }
}, { passive: true });

// запуск при загрузке
updateOrnek();