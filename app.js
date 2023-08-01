const navSlide = () => {
  const burger = document.querySelector('.bars');
  const nav = document.querySelector('.menu');
  const navLinks = document.querySelectorAll('.menu li');
  const closeMobileNav = document.querySelector('.fa-close');
  burger.addEventListener('click', () => {
    nav.classList.add('nav-active');
  });
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach(() => nav.classList.remove('nav-active'));
    });
  });
  closeMobileNav.addEventListener('click', () => {
    nav.classList.remove('nav-active');
  });
};
navSlide();
