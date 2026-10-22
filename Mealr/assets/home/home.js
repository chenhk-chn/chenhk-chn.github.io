(() => {
  function update(language) {
    const copy = window.MEALR_COPY[language];
    if (!copy) return;
    document.querySelectorAll('[data-copy]').forEach(node => { node.textContent = copy[node.dataset.copy]; });
    document.querySelectorAll('[data-nav]').forEach(node => { node.textContent = copy.nav[Number(node.dataset.nav)]; });
    document.querySelectorAll('[data-section]').forEach(node => { node.href = `#${node.dataset.section}-${language}`; });
    document.querySelector('meta[name="description"]').content = copy.intro;
    document.querySelector('meta[property="og:title"]').content = copy.title;
    document.querySelector('meta[property="og:description"]').content = copy.intro;
  }
  document.addEventListener('mealr:language', event => update(event.detail));
  update(document.documentElement.lang);
  document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {
    const panel = button.closest('[data-language]');
    const mode = button.dataset.view;
    const copy = window.MEALR_COPY[panel.dataset.language];
    panel.querySelectorAll('[data-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const image = panel.querySelector('.trend-image');
    image.src = `assets/home/trends-${mode}-light-framed.webp`;
    image.alt = `${copy.tabs[mode === 'energy' ? 0 : 1]} · ${copy.shot}`;
  }));
})();

// A small arrival, never a prerequisite for reading. No scroll locking or hidden content.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || reduced.matches) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (reduced.matches) continue;
      entry.target.animate([
        { opacity: 0.82, transform: 'translateY(12px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 420, easing: 'cubic-bezier(.2,.7,.2,1)' });
    }
  }, { threshold: .12 });
  document.querySelectorAll('.hero-copy, .screen-figure, .section-intro, .how-layout, .section-copy, .privacy-layout, .faq-list, .friends-heading').forEach(el => observer.observe(el));
  reduced.addEventListener('change', () => {
    if (reduced.matches) document.getAnimations().forEach(animation => animation.finish());
  });
})();

// One deployment setting controls every App Store entry. Empty stays visibly unavailable.
(() => {
  const candidate = window.MEALR_CONFIG?.appStoreURL;
  let destination = null;
  try {
    const url = new URL(candidate);
    if (url.protocol === 'https:' && url.hostname === 'apps.apple.com' && !url.username && !url.password) destination = url.href;
  } catch { /* Empty or invalid configuration: keep the native disabled buttons. */ }
  if (!destination) return;
  document.querySelectorAll('[data-store-link]').forEach(link => {
    link.href = destination;
    link.hidden = false;
  });
  document.querySelectorAll('[data-store-placeholder], [data-store-status]').forEach(element => { element.hidden = true; });
})();
