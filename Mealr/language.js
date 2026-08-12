const supported = ["zh-Hans", "zh-Hant", "en"];

function preferredLanguage() {
  const hash = location.hash.slice(1);
  if (supported.includes(hash)) return hash;
  const language = navigator.language.toLowerCase();
  if (language.startsWith("zh-tw") || language.startsWith("zh-hk") || language.startsWith("zh-mo")) return "zh-Hant";
  if (language.startsWith("zh")) return "zh-Hans";
  return "en";
}

function showLanguage(language) {
  const selected = supported.includes(language) ? language : "en";
  document.querySelectorAll(".language-panel").forEach(panel => {
    panel.hidden = panel.dataset.language !== selected;
  });
  const picker = document.querySelector("#language-picker");
  if (picker) picker.value = selected;
  document.documentElement.lang = selected;
  history.replaceState(null, "", `#${selected}`);
}

document.addEventListener("DOMContentLoaded", () => {
  showLanguage(preferredLanguage());
  document.querySelector("#language-picker")?.addEventListener("change", event => showLanguage(event.target.value));
});
