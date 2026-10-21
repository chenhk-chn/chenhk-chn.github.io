// Progressive enhancement only: section links work without JavaScript. Keep the
// language hash intact so localized subpage links continue to use language.js.
(() => {
  "use strict";
  document.addEventListener("click", (event) => {
    const link = event.target.closest(".section-nav a[href^='#']");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.getAttribute("href").slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });
})();
