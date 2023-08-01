const navSlide = () => {
  const burger = document.querySelector('.bars');
  const nav = document.querySelector('.menu');
  const navLinks = document.querySelectorAll('.menu li a');
  const closeMobileNav = document.querySelector('.fa-close');
  const body = document.getElementById('the-body');
  burger.addEventListener('click', () => {
    nav.classList.add('nav-active');
    body.classList.add('overflow-hiden');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach(() => nav.classList.remove('nav-active'));
      body.classList.remove('overflow-hiden');
    });
  });
  closeMobileNav.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    body.classList.remove('overflow-hiden');
  });
};
navSlide();
