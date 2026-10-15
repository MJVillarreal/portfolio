export function setupDropdown(buttonId: string, menuId: string) {
  const button = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);
  if (!button || !menu) return;

  const setOpen = (open: boolean) => {
    menu.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
  };

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const willOpen = !menu.classList.contains("open");
    setOpen(willOpen);
    if (willOpen) menu.querySelector<HTMLElement>("button, a")?.focus();
  });

  menu.addEventListener("click", () => setOpen(false));

  const controller = new AbortController();
  document.addEventListener(
    "click",
    (e) => {
      if (!menu.contains(e.target as Node)) setOpen(false);
    },
    { signal: controller.signal }
  );
  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape" && menu.classList.contains("open")) {
        setOpen(false);
        button.focus();
      }
    },
    { signal: controller.signal }
  );
  document.addEventListener("astro:before-swap", () => controller.abort(), {
    once: true,
  });
}
