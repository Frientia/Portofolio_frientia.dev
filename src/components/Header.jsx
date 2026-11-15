"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile, contact, nav } from "../lib/content";
import { scrollToId } from "../lib/scroll";
import { PillButton } from "./ui/Bits";
import LocalClock from "./ui/LocalClock";

export default function Header() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const waHref = `https://wa.me/${contact.whatsapp}`;

  useEffect(() => {
    const els = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        let best = null;
        entries.forEach((e) => {
          if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) {
            best = e;
          }
        });
        if (best) setActive(best.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <motion.header
        initial={reduced ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4"
      >
        <div
          className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-bg/70 py-2 pl-3 pr-2 backdrop-blur-xl md:rounded-full md:pl-4 md:pr-3"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <button
            type="button"
            onClick={() => go("hero")}
            aria-label="Kembali ke atas"
            className="group flex shrink-0 items-center gap-2"
          >
            <span className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-accent/40 transition-transform duration-300 group-hover:scale-105">
              <img
                src={profile.photo}
                alt=""
                aria-hidden
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden font-display text-sm tracking-tight text-ink sm:block md:text-base">
              {profile.wordmark}
            </span>
          </button>

          <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`link-sweep relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-accent" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-ink/10 bg-card px-3 py-1.5 xl:inline-flex">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <LocalClock
                timezone={profile.localTimezone}
                label={profile.localTimeLabel}
                className="font-mono-label text-ink-soft"
              />
            </span>

            <PillButton
              href={waHref}
              external
              ariaLabel="Hubungi lewat WhatsApp"
              className="hidden sm:inline-flex"
            >
              {contact.cta}
            </PillButton>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-card text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Navigasi mobile"
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 top-[4.5rem] z-40 mx-auto max-w-6xl rounded-2xl border border-ink/10 bg-bg/95 p-3 backdrop-blur-xl lg:hidden"
            style={{ boxShadow: "var(--shadow-lift)" }}
          >
            <ul className="grid grid-cols-2 gap-1">
              {nav.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => go(item.id)}
                      className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-accent/15 text-accent"
                          : "text-ink-soft hover:bg-card hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-ink/10 px-2 pt-3 sm:hidden">
              <LocalClock
                timezone={profile.localTimezone}
                label={profile.localTimeLabel}
                className="font-mono-label text-ink-soft"
              />
              <PillButton href={waHref} external ariaLabel="Hubungi lewat WhatsApp">
                {contact.cta}
              </PillButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

