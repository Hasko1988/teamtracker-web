// Team Tracker — Language Switcher
// Dodavanje novog jezika: dodaj prijevod u translations.js i dugme u HTML header

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Ažuriraj aktivno dugme
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Sačuvaj izbor
  localStorage.setItem('tt-lang', lang);
  document.documentElement.lang = lang;
}

function initLang() {
  const urlParam = new URLSearchParams(window.location.search).get('lang');
  const saved = localStorage.getItem('tt-lang');
  const browser = navigator.language?.startsWith('bs') || navigator.language?.startsWith('hr') || navigator.language?.startsWith('sr') ? 'bs' : 'en';
  applyLang(urlParam || saved || browser);
}

document.addEventListener('DOMContentLoaded', initLang);
