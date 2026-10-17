export function initReveal() {
  const pending = new Set(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));

  const show = (el: HTMLElement) => {
    el.classList.add("is-visible");
    pending.delete(el);
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    pending.forEach(show);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        show(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  pending.forEach((el) => observer.observe(el));

  // Al saltar con un link del menú, los bloques que quedaron arriba también se muestran
  let ticking = false;
  const revealPassed = () => {
    ticking = false;
    pending.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        show(el);
        observer.unobserve(el);
      }
    });
    if (pending.size === 0) window.removeEventListener("scroll", onScroll);
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(revealPassed);
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  document.addEventListener(
    "astro:before-swap",
    () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    },
    { once: true }
  );
}
