(() => {
  const supported = ["zh-Hans", "zh-Hant", "zh-HK", "ja", "en"];
  const aliases = {
    "zh-CN": "zh-Hans",
    "zh-SG": "zh-Hans",
    "zh-TW": "zh-Hant",
    "zh-MO": "zh-HK",
    "en-US": "en",
    "en-GB": "en",
  };

  function normalizeLanguage(value) {
    if (!value) return null;
    if (supported.includes(value)) return value;
    if (aliases[value]) return aliases[value];

    const lower = value.toLowerCase();
    if (lower.startsWith("zh-hk") || lower.startsWith("zh-mo")) return "zh-HK";
    if (lower.startsWith("zh-tw") || lower.includes("hant")) return "zh-Hant";
    if (lower.startsWith("zh")) return "zh-Hans";
    if (lower.startsWith("ja")) return "ja";
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

  // hash 来自不受控的 URL 输入，`#%` 这类非法编码会让 decodeURIComponent
  // 直接抛 URIError。解析失败按"没有语言指示"处理，回落浏览器语言，
  // 不能让整个脚本死在初始化途中。
  function hashLanguage() {
    try {
      return normalizeLanguage(
        decodeURIComponent(window.location.hash.slice(1))
      );
    } catch {
      return null;
    }
  }

  let activeLanguage = hashLanguage() || browserLanguage();

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

    document.querySelectorAll("[data-set-language]").forEach((button) => {
      const isActive = button.dataset.setLanguage === activeLanguage;
      button.setAttribute("aria-pressed", String(isActive));
      button.classList.toggle("is-active", isActive);
    });

    document.querySelectorAll("[data-localized-link]").forEach((link) => {
      link.href = localizedTarget(link, activeLanguage);
    });

    if (updateHash) {
      history.replaceState(null, "", `#${encodeURIComponent(activeLanguage)}`);
    }
  }

  document.querySelectorAll("[data-set-language]").forEach((button) => {
    button.addEventListener("click", () => {
      showLanguage(button.dataset.setLanguage, true);
      document.querySelector("main")?.focus({ preventScroll: true });
    });
  });

  window.addEventListener("hashchange", () => {
    const language = hashLanguage();
    if (language) showLanguage(language);
  });

  showLanguage(activeLanguage);

  // 只有走到这一步（解析、监听、首屏激活全部成功）才给 <html> 加 .js，
  // CSS 的"隐藏非当前语言"规则才生效。脚本加载失败或中途抛错时，
  // 五种语言的正文保持全部可见——隐私和支持页宁可冗余也不空白。
  document.documentElement.classList.add("js");
})();
