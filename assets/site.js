(() => {
  'use strict';
  const html = document.documentElement;
  const button = document.getElementById('lang-btn');
  const titles = {
    en: 'TUYA PA — Geriatric & Primary Care in Sebastian & Vero Beach',
    es: 'TUYA PA — Atención geriátrica y primaria en Sebastian y Vero Beach'
  };
  function setLanguage(lang) {
    html.lang = lang;
    document.title = titles[lang];
    button.textContent = lang === 'en' ? 'Español' : 'English';
    button.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
    button.lang = lang === 'en' ? 'es' : 'en';
    document.querySelectorAll('[data-label-en]').forEach(el => el.setAttribute('aria-label', el.getAttribute('data-label-' + lang)));
    document.querySelectorAll('[data-alt-en]').forEach(el => el.alt = el.getAttribute('data-alt-' + lang));
  }
  let saved = 'en';
  try { saved = localStorage.getItem('tuya-lang') || 'en'; } catch { /* Storage may be disabled. */ }
  setLanguage(saved === 'es' ? 'es' : 'en');
  button.hidden = false;
  button.addEventListener('click', () => {
    const next = html.lang === 'en' ? 'es' : 'en';
    setLanguage(next);
    try { localStorage.setItem('tuya-lang', next); } catch { /* The toggle still works without storage. */ }
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
