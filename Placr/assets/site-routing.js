/* UI language is independent of the user's App Store country. */
(function (root) {
  "use strict";
  var SUPPORTED = ["zh-Hans", "zh-Hant", "zh-HK", "ja", "en", "de", "es", "fr", "it", "pt-BR", "ko"];
  function normalize(raw) {
    var value = String(raw || "").toLowerCase();
    if (!value) return "en";
    if (/^zh-(hant-hk|hk|mo)/.test(value)) return "zh-HK";
    if (/^zh-(hant|tw)/.test(value)) return "zh-Hant";
    if (/^zh/.test(value)) return "zh-Hans";
    if (/^ja/.test(value)) return "ja";
    if (/^ko/.test(value)) return "ko";
    if (/^pt/.test(value)) return "pt-BR";
    if (/^de/.test(value)) return "de";
    if (/^es/.test(value)) return "es";
    if (/^fr/.test(value)) return "fr";
    if (/^it/.test(value)) return "it";
    // Fall back to the closest supported prefix before defaulting to English.
    for (var i = 0; i < SUPPORTED.length; i++) {
      if (value === SUPPORTED[i].toLowerCase()) return SUPPORTED[i];
    }
    return "en";
  }
  function readLanguage() {
    var query = new URLSearchParams(location.search).get("lang");
    if (query) return normalize(query);
    // Support links shared before language URLs were standardized.
    var hash = location.hash.slice(1);
    if (hash && normalize(hash) && !document.getElementById(hash)) {
      if (/^[a-z]{2}(-[a-z0-9]+)?$/i.test(hash)) return normalize(hash);
    }
    try {
      var saved = localStorage.getItem("placr.lang");
      if (saved) return normalize(saved);
    } catch (_) {}
    return normalize(navigator.language);
  }
  function rememberLanguage(language, updateURL) {
    try { localStorage.setItem("placr.lang", language); } catch (_) {}
    if (updateURL) {
      var url = new URL(location.href);
      url.searchParams.set("lang", language);
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
  }
  function storeURL(country) {
    var region = /^(cn|hk|tw|us|gb|au|ca|jp|kr|fr|de|es|it|br)$/.test(country || "") ? country + "/" : "";
    return "https://apps.apple.com/" + region + "app/id6799345303";
  }
  root.PlacrRouting = { normalize: normalize, readLanguage: readLanguage, rememberLanguage: rememberLanguage, storeURL: storeURL };
})(typeof window !== "undefined" ? window : globalThis);
