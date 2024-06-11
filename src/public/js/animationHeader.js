document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  header.classList.add('visible');

  const heroContent = document.querySelector('.hero-content');
  heroContent.classList.add('initial');

  setTimeout(() => {
    heroContent.classList.add('show');
    heroContent.classList.remove('initial');
  }, 100);
});