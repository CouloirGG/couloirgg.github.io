(() => {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  const toggle = nav.querySelector('.nav-toggle');
  const links = nav.querySelector('.nav-links');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) setOpen(false);
  });
  window.matchMedia('(min-width: 641px)').addEventListener('change', () => setOpen(false));
})();
