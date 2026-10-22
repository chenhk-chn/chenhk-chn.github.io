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

  // 入场动效：首屏与各节主标题保持即刻可见；首屏以下的内部条目随滚动依次浮现。
  // 无 JS 或 prefers-reduced-motion 时内容直接可见。
  const targets = document.querySelectorAll(
    [
      ".reading-points li",
      ".reading-visual",
      ".pipeline li",
      ".feature-columns article",
      ".proofs figure",
      ".tool-list",
      ".qa",
      ".friend-card",
    ].join(", ")
  );

  const seenSections = new Map();
  targets.forEach((element) => {
    const section = element.closest(".section") || document.body;
    const index = seenSections.get(section) || 0;
    seenSections.set(section, index + 1);
    element.classList.add("reveal");
    element.style.setProperty("--d", `${Math.min(index * 65, 260)}ms`);
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );
    targets.forEach((element) => observer.observe(element));
  } else {
    targets.forEach((element) => element.classList.add("in"));
  }
})();
