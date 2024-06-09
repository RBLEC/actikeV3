/*
document.addEventListener('DOMContentLoaded', function() {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('navbar');

  burger.addEventListener('click', function() {
    this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
    nav.classList.toggle('active');
  });
});
*/

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('rotate');
  });
});


