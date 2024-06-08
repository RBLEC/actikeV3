document.addEventListener('DOMContentLoaded', function() {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('navbar');

  burger.addEventListener('click', function() {
    this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
    nav.classList.toggle('active');
  });
});
