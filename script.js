const hamburger = document.querySelector('.hamburger');

const navBar = document.querySelector('.contact-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
});

document.querySelectorAll('.cont-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navBar.classList.remove('active');
}));
