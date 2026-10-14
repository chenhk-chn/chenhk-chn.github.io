(() => {
  const supported = ["zh-Hans", "zh-Hant", "zh-HK", "ja", "en", "ru", "fr", "ko", "de", "es"];
  const aliases = {
    "zh-CN": "zh-Hans",
    "zh-SG": "zh-Hans",
    "zh-TW": "zh-Hant",
    "zh-Hant-HK": "zh-HK",
    "zh-MO": "zh-HK",
    "en-US": "en",
    "en-GB": "en",
    // App 界面当前提供十种语言；所有中文变体按地区归到最近的面板。
    "no": "ru",
    "no-NO": "ru",
    "nn": "ru",
    "in": "ko",
  };

  // 前缀匹配的尝试顺序：多段代码在前，避免 zh-HK 抢先匹配 zh-Hans。
  const matchOrder = ["zh-Hant-HK", "zh-Hans", "zh-Hant", "zh-HK", "ja", "en", "ru", "fr", "ko", "de", "es"];

  function normalizeLanguage(value) {
    if (!value) return null;
    if (supported.includes(value)) return value;
    if (aliases[value]) return aliases[value];

    const lower = value.toLowerCase();
    if (aliases[lower]) return aliases[lower];
    if (lower.startsWith("zh")) {
      if (lower.startsWith("zh-hk") || lower.startsWith("zh-mo") || lower.includes("-hk")) return "zh-HK";
      if (lower.startsWith("zh-tw") || lower.includes("hant")) return "zh-Hant";
      return "zh-Hans";
    }
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
