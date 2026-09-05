(() => {
  'use strict';
  const html = document.documentElement;
  const languageButton = document.getElementById('lang-btn');
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  const mobile = window.matchMedia('(max-width: 720px)');
  const originalTitle = document.title;
  const spanishTitle = html.dataset.titleEs || 'TUYA PA — Atención geriátrica y primaria en Sebastian y Vero Beach';
  const navLinks = nav ? [...nav.querySelectorAll('a[href^="#"]')] : [];
  const sections = navLinks.map(link => document.getElementById(link.hash.slice(1)));
  const description = document.querySelector('meta[name="description"]');
  const originalDescription = description?.content;
  html.classList.add('js');

  function closeMenu(restoreFocus = false) {
    if (!nav || !menuButton) return;
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    if (restoreFocus) menuButton.focus();
  }

  function setLanguage(lang) {
    html.lang = lang;
    document.title = lang === 'es' ? spanishTitle : originalTitle;
    if (description && html.dataset.descriptionEs) {
      description.content = lang === 'es' ? html.dataset.descriptionEs : originalDescription;
    }
    if (languageButton) {
      languageButton.textContent = lang === 'en' ? 'Español' : 'English';
      languageButton.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
      languageButton.lang = lang === 'en' ? 'es' : 'en';
    }
    document.querySelectorAll('[data-label-en]').forEach(el => el.setAttribute('aria-label', el.getAttribute('data-label-' + lang)));
    document.querySelectorAll('[data-alt-en]').forEach(el => el.alt = el.getAttribute('data-alt-' + lang));
  }

  let saved = 'en';
  try { saved = localStorage.getItem('tuya-lang') || 'en'; } catch { /* Preferences are optional. */ }
  const queryLang = new URLSearchParams(location.search).get('lang');
  const initialLang = queryLang === 'es' || queryLang === 'en' ? queryLang : saved;
  setLanguage(initialLang === 'es' ? 'es' : 'en');
  if (queryLang === 'en' || queryLang === 'es') {
    try { localStorage.setItem('tuya-lang', queryLang); } catch { /* Keep working without storage. */ }
  }
  if (languageButton) {
    languageButton.hidden = false;
    languageButton.addEventListener('click', () => {
      const next = html.lang === 'en' ? 'es' : 'en';
      setLanguage(next);
      try { localStorage.setItem('tuya-lang', next); } catch { /* The toggle still works. */ }
      // Preserve existing parameters and anchors; language links can now be shared.
      const url = new URL(location.href);
      url.searchParams.set('lang', next);
      history.replaceState(null, '', url);
    });
  }

  if (nav && menuButton) {
    menuButton.hidden = false;
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('is-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!link) return;
      closeMenu();
      const heading = document.getElementById(link.hash.slice(1))?.querySelector('h2');
      if (heading) {
        heading.tabIndex = -1;
        requestAnimationFrame(() => heading.focus({ preventScroll: true }));
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });
    mobile.addEventListener('change', () => closeMenu(mobile.matches && nav.contains(document.activeElement)));

    let scheduled = false;
    function updateCurrentSection() {
      const header = document.querySelector('.site-header');
      const marker = (header?.getBoundingClientRect().height || 0) + 80;
      const active = sections.findIndex(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= marker && rect.bottom > marker;
      });
      navLinks.forEach((link, index) => {
        if (index === active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      scheduled = false;
    }
    window.addEventListener('scroll', () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(updateCurrentSection);
      }
    }, { passive: true });
    updateCurrentSection();
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
