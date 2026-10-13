(() => {
  const supported = ["zh-Hans", "en"];
  const aliases = {
    "zh-CN": "zh-Hans",
    "zh-SG": "zh-Hans",
    "zh-TW": "zh-Hans",
    "zh-HK": "zh-Hans",
    "zh-MO": "zh-Hans",
    "zh-Hant": "zh-Hans",
    "zh-Hant-HK": "zh-Hans",
    // App 界面目前只有简体中文；所有中文变体都落到简体面板。
    "en-US": "en",
    "en-GB": "en",
  };

  // 前缀匹配的尝试顺序。
  const matchOrder = ["zh-Hans", "en"];

  function normalizeLanguage(value) {
    if (!value) return null;
    if (supported.includes(value)) return value;
    if (aliases[value]) return aliases[value];

    const lower = value.toLowerCase();
    if (aliases[lower]) return aliases[lower];
    if (lower.startsWith("zh")) return "zh-Hans";
    for (const code of matchOrder) {
      if (lower.startsWith(code.toLowerCase())) return code;
    }
    return null;
  }

  function browserLanguage() {
    for (const value of navigator.languages || [navigator.language]) {
      const normalized = normalizeLanguage(value);
      if (normalized) return normalized;
    }
    return "zh-Hans";
  }

  const hashLanguage = normalizeLanguage(
    decodeURIComponent(window.location.hash.slice(1))
  );
  let activeLanguage = hashLanguage || browserLanguage();

  function localizedTarget(link, language) {
    const base = link.dataset.localizedLink;
    return `${base}#${encodeURIComponent(language)}`;
  }

  function showLanguage(language, updateHash = false) {
    activeLanguage = normalizeLanguage(language) || "zh-Hans";
    document.documentElement.lang = activeLanguage;

    document.querySelectorAll("[data-language]").forEach((panel) => {
      const isActive = panel.dataset.language === activeLanguage;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
      if (isActive && panel.dataset.title) {
        document.title = panel.dataset.title;
      }
    });

    const select = document.querySelector("[data-language-select]");
    if (select && select.value !== activeLanguage) {
      select.value = activeLanguage;
    }

    document.querySelectorAll("[data-localized-link]").forEach((link) => {
      link.href = localizedTarget(link, activeLanguage);
    });

    if (updateHash) {
      history.replaceState(null, "", `#${encodeURIComponent(activeLanguage)}`);
    }
  }

  document.querySelector("[data-language-select]")?.addEventListener("change", (event) => {
    showLanguage(event.target.value, true);
    document.querySelector("main")?.focus({ preventScroll: true });
  });

  window.addEventListener("hashchange", () => {
    const language = normalizeLanguage(
      decodeURIComponent(window.location.hash.slice(1))
    );
    if (language) showLanguage(language);
  });

  showLanguage(activeLanguage);
})();
