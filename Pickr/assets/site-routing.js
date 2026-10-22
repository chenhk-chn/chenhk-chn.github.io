/* UI language is independent of the user's App Store country. */
(function (root) {
  "use strict";
  function normalize(raw) {
    var value = String(raw || "").toLowerCase();
    if (/^zh-(hant|tw|hk|mo)/.test(value)) return "zh-Hant";
    if (/^zh/.test(value)) return "zh-Hans";
    if (/^ja/.test(value)) return "ja";
    if (/^ko/.test(value)) return "ko";
    return "en";
  }
  function readLanguage() {
    var query = new URLSearchParams(location.search).get("lang");
    if (query) return normalize(query);
    // Support links shared before language URLs were standardized.
    var hash = location.hash.slice(1);
    if (/^(zh(?:-[a-z]+)*|en|ja|ko|fr|de|es|it|pt(?:-[a-z]+)?)$/i.test(hash)) return normalize(hash);
    try {
      var saved = localStorage.getItem("pickr.lang");
      if (saved) return normalize(saved);
    } catch (_) {}
    return normalize(navigator.language);
  }
  function rememberLanguage(language, updateURL) {
    try { localStorage.setItem("pickr.lang", language); } catch (_) {}
    if (updateURL) {
      var url = new URL(location.href);
      url.searchParams.set("lang", language);
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
  }
  function storeURL(country) {
    var region = /^(cn|hk|tw|us|gb|au|ca|jp|kr|fr|de|es|it)$/.test(country || "") ? country + "/" : "";
    return "https://apps.apple.com/" + region + "app/id6813511457";
  }
  root.PickrRouting = { normalize: normalize, readLanguage: readLanguage, rememberLanguage: rememberLanguage, storeURL: storeURL };
})(typeof window !== "undefined" ? window : globalThis);
