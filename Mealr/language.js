(() => {
  const supported = ['zh-Hans', 'zh-Hant', 'zh-HK', 'ja', 'en'];
  function normalize(value) {
    if (!value) return null;
    if (supported.includes(value)) return value;
    const lower = value.toLowerCase();
    if (lower.startsWith('zh-hk') || lower.startsWith('zh-mo')) return 'zh-HK';
    if (lower.startsWith('zh-tw') || lower.includes('hant')) return 'zh-Hant';
    if (lower.startsWith('zh')) return 'zh-Hans';
    if (lower.startsWith('ja')) return 'ja';
    if (lower.startsWith('en')) return 'en';
    return null;
  }
  function hashLanguage() {
    try { return normalize(decodeURIComponent(location.hash.slice(1))); }
    catch { return null; }
  }
  function fromURL() {
    return normalize(new URL(location.href).searchParams.get('lang')) || hashLanguage();
  }
  function browserLanguage() {
    for (const language of navigator.languages || [navigator.language]) {
      const result = normalize(language);
      if (result) return result;
    }
    return 'en';
  }
  function showLanguage(language, updateURL = false) {
    const active = normalize(language) || 'en';
    document.documentElement.lang = active;
    document.querySelectorAll('[data-language]').forEach(panel => {
      const visible = panel.dataset.language === active;
      panel.hidden = !visible;
      panel.classList.toggle('is-active', visible);
      if (visible && panel.dataset.title) document.title = panel.dataset.title;
    });
    document.querySelectorAll('[data-set-language]').forEach(button => {
      const selected = button.dataset.setLanguage === active;
      button.setAttribute('aria-pressed', String(selected));
      button.classList.toggle('is-active', selected);
    });
    document.querySelectorAll('[data-localized-link]').forEach(link => {
      link.href = `${link.dataset.localizedLink}?lang=${encodeURIComponent(active)}`;
    });
    const select = document.querySelector('#language-select');
    if (select) select.value = active;
    if (updateURL) {
      const url = new URL(location.href);
      url.searchParams.set('lang', active);
      if (hashLanguage()) url.hash = '';
      else if (/^#(how|trends|faq)-/.test(url.hash)) url.hash = url.hash.replace(/-(zh-Hans|zh-Hant|zh-HK|ja|en)$/, `-${active}`);
      history.replaceState(null, '', url);
    }
    document.documentElement.classList.add('js');
    document.dispatchEvent(new CustomEvent('mealr:language', { detail: active }));
  }
  document.querySelectorAll('[data-set-language]').forEach(button => button.addEventListener('click', () => showLanguage(button.dataset.setLanguage, true)));
  document.querySelector('#language-select')?.addEventListener('change', event => showLanguage(event.target.value, true));
  window.addEventListener('hashchange', () => { const language = hashLanguage(); if (language) showLanguage(language); });
  window.addEventListener('popstate', () => showLanguage(fromURL() || browserLanguage()));
  showLanguage(fromURL() || browserLanguage());
})();
