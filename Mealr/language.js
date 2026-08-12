(() => {
  const supported = ["zh-Hans", "zh-Hant", "en"];
  const aliases = { "zh-CN": "zh-Hans", "zh-SG": "zh-Hans", "zh-TW": "zh-Hant", "zh-HK": "zh-Hant", "en-US": "en", "en-GB": "en" };

  function normalizeLanguage(value) {
    if (!value) return null;
    if (supported.includes(value)) return value;
    if (aliases[value]) return aliases[value];
    const lower = value.toLowerCase();
    if (lower.startsWith("zh-tw") || lower.startsWith("zh-hk") || lower.includes("hant")) return "zh-Hant";
    if (lower.startsWith("zh")) return "zh-Hans";
    if (lower.startsWith("en")) return "en";
    return null;
  }

  function browserLanguage() {
    for (const value of navigator.languages || [navigator.language]) {
      const normalized = normalizeLanguage(value);
      if (normalized) return normalized;
    }
    return "en";
  }

  function showLanguage(language, updateHash = false) {
    const active = normalizeLanguage(language) || "en";
    document.documentElement.lang = active;
    document.querySelectorAll("[data-language]").forEach(panel => {
      const isActive = panel.dataset.language === active;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
      if (isActive && panel.dataset.title) document.title = panel.dataset.title;
    });
    document.querySelectorAll("[data-set-language]").forEach(button => {
      const isActive = button.dataset.setLanguage === active;
      button.setAttribute("aria-pressed", String(isActive));
      button.classList.toggle("is-active", isActive);
    });
    document.querySelectorAll("[data-localized-link]").forEach(link => {
      link.href = `${link.dataset.localizedLink}#${encodeURIComponent(active)}`;
    });
    if (updateHash) history.replaceState(null, "", `#${encodeURIComponent(active)}`);
  }

  const hashLanguage = normalizeLanguage(decodeURIComponent(location.hash.slice(1)));
  document.querySelectorAll("[data-set-language]").forEach(button => button.addEventListener("click", () => {
    showLanguage(button.dataset.setLanguage, true);
    document.querySelector("main")?.focus({ preventScroll: true });
  }));
  window.addEventListener("hashchange", () => showLanguage(decodeURIComponent(location.hash.slice(1))));
  showLanguage(hashLanguage || browserLanguage());
})();
