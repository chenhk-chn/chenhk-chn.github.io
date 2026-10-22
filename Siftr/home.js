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

  // 入场动效：每个区块的标题、文字、图片依次浮现一次。类名由脚本添加，
  // 无 JS 时内容原样显示；prefers-reduced-motion 由 home.css 兜底为直接可见。
  const targets = document.querySelectorAll(
    [
      ".hero-copy > *",
      ".hero-visual",
      ".section > h2",
      ".section > .wrap > h2",
      ".section-intro > *",
      ".reading-copy > *",
      ".reading-visual",
      ".pipeline li",
      ".feature-columns article",
      ".proofs figure",
      ".more-tools",
      ".qa",
      ".friend-card",
      ".closing .wrap > *",
    ].join(", ")
  );

  const seenSections = new Map();
  targets.forEach((element) => {
    const section = element.closest(".hero, .section") || document.body;
    const index = seenSections.get(section) || 0;
    seenSections.set(section, index + 1);
    element.classList.add("reveal");
    element.style.setProperty("--d", `${Math.min(index * 70, 280)}ms`);
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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    targets.forEach((element) => observer.observe(element));
  } else {
    targets.forEach((element) => element.classList.add("in"));
  }
})();
