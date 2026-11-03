// Adapted from Pickr's localized-link and language-panel workflow.
(() => {
  const supported = ["zh-Hans", "en"];
  const normalize = value => {
    if (!value) return null;
    if (value.toLowerCase().startsWith("zh")) return "zh-Hans";
    if (value.toLowerCase().startsWith("en")) return "en";
    return null;
  };
  const show = (value, update = false) => {
    const language = supported.includes(value) ? value : "zh-Hans";
    document.documentElement.lang = language;
    document.querySelectorAll("[data-language]").forEach(panel => {
      panel.hidden = panel.dataset.language !== language;
      if (!panel.hidden && panel.dataset.title) document.title = panel.dataset.title;
    });
    document.querySelectorAll("[data-localized-link]").forEach(link => {
      link.href = `${link.dataset.localizedLink}?lang=${encodeURIComponent(language)}`;
    });
    const select = document.querySelector("[data-language-select]");
    if (select) select.value = language;
    if (update) {
      const url = new URL(location.href);
      url.searchParams.set("lang", language);
      url.hash = "";
      history.replaceState(null, "", url);
    }
  };
  const resolve = () => normalize(location.hash.slice(1))
    || normalize(new URLSearchParams(location.search).get("lang"))
    || (navigator.languages || [navigator.language]).map(normalize).find(Boolean)
    || "zh-Hans";
  document.querySelector("[data-language-select]")?.addEventListener("change", event => {
    show(event.target.value, true);
    document.querySelector("main")?.focus({ preventScroll: true });
  });
  window.addEventListener("hashchange", () => show(resolve()));
  window.addEventListener("popstate", () => show(resolve()));
  show(resolve());
})();
