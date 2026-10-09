(() => {
  const supported = [
    "zh-Hans", "zh-Hant", "zh-HK", "en", "ja",
    "ko", "fr", "es", "it", "de", "pt-BR", "pt-PT",
    "nl", "pl", "sv", "da", "nb", "fi",
    "cs", "tr", "id", "vi", "th", "ru",
    "uk", "hu", "ro", "el", "ms", "hi",
  ];
  const aliases = {
    "zh-CN": "zh-Hans",
    "zh-SG": "zh-Hans",
    "zh-TW": "zh-Hant",
    "zh-Hant-HK": "zh-HK",
    "zh-MO": "zh-HK",
    "en-US": "en",
    "en-GB": "en",
    // 挪威语宏语言/尼诺斯克都落到书面语；in 是印尼语的旧代码
    "no": "nb",
    "no-NO": "nb",
    "nn": "nb",
    "nn-NO": "nb",
    "in": "id",
  };

  // 前缀匹配的尝试顺序：多段代码在前，避免 pt-PT 抢先匹配 pt-BR。
  const matchOrder = [
    "zh-Hant-HK", "zh-Hans", "zh-Hant", "zh-HK",
    "pt-BR", "pt-PT",
    "en", "ja", "ko", "fr", "es", "it", "de",
    "nl", "pl", "sv", "da", "nb", "fi",
    "cs", "tr", "id", "vi", "th", "ru",
    "uk", "hu", "ro", "el", "ms", "hi",
  ];

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
    return "en";
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
    activeLanguage = normalizeLanguage(language) || "en";
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
