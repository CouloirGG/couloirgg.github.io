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

/* Email links: copy the address instead of relying on a mail app being set up. */
(() => {
  let toast, hideTimer;
  const show = (html) => {
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'cgg-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.innerHTML = html;
    toast.classList.add('show');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => toast.classList.remove('show'), 7000);
  };
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="mailto:"]');
    if (!link || link.hasAttribute('data-mail-direct') || !navigator.clipboard) return;
    event.preventDefault();
    const href = link.getAttribute('href');
    const address = href.slice(7).split('?')[0];
    const subject = new URLSearchParams(href.split('?')[1] || '').get('subject');
    navigator.clipboard.writeText(address).then(() => {
      const hint = subject ? ` Use the subject "${subject}".` : '';
      show(`<strong>${address}</strong> copied. Paste it into your email.${hint} <a href="${href}" data-mail-direct>Open mail app</a>`);
    }, () => { window.location.href = href; });
  });
})();
