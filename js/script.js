const header = document.getElementById('site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-navigation');
const year = document.getElementById('year');

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 24);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
  document.body.style.overflow = expanded ? '' : 'hidden';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });
});
