"use client";

export function scrollToId(id, offset = -20) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  if (window.lenis) {
    window.lenis.scrollTo(el, { offset, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

