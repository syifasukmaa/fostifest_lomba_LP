const navEl = document.querySelector('.navbar');
const navBrand = document.querySelector('.navbar-brand');
const navLinksOutsideNavbar = document.querySelectorAll(
  '.nav-link:not(.nav .nav-link)'
);
const navLinksInsideNavbar = document.querySelectorAll('.nav-link');
const offcanvas = document.querySelector('.offcanvas');
const offcanvasNavLinks = offcanvas.querySelectorAll('.nav-link');

// Membuat style jika navbar di scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 56) {
    navEl.classList.add('navbar-scrolled');

    for (let i = 0; i < navLinksInsideNavbar.length; i++) {
      navLinksInsideNavbar[i].style.setProperty(
        'color',
        'rgb(219, 219, 219)',
        'important'
      );

      navLinksInsideNavbar[i].style.setProperty(
        'font-weight',
        '400',
        'important'
      );
    }

    for (let i = 0; i < navLinksOutsideNavbar.length; i++) {
      navLinksInsideNavbar[i].style.setProperty('color', 'black', 'important');

      navLinksInsideNavbar[i].style.setProperty(
        'font-weight',
        '500',
        'important'
      );
    }

    navBrand.style.setProperty('color', 'black', 'important');
  } else if (window.scrollY < 56) {
    navEl.classList.remove('navbar-scrolled');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          if (offcanvas.classList.contains('show')) {
            offcanvasNavLinks.forEach((link) => {
              // link.style.color = 'black';
              link.style.setProperty('color', 'black', 'important');
              link.style.setProperty('font-weight', '400', 'important');
            });
          } else {
            offcanvasNavLinks.forEach((link) => {
              link.style.color = '';
            });
          }
        }
      });
    });
    observer.observe(offcanvas, { attributes: true });

    for (let i = 0; i < navLinksInsideNavbar.length; i++) {
      navBrand.style.setProperty('color', '#fff', 'important');
      navLinksInsideNavbar[i].style.setProperty('color', '#fff', 'important');
    }
  }
});
