"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile, contact } from "../lib/content";
import { scrollToId } from "../lib/scroll";
import { PillButton } from "./ui/Bits";
import LocalClock from "./ui/LocalClock";

export default function Header() {
  const reduced = useReducedMotion();
  const waHref = `https://wa.me/${contact.whatsapp}`;

  return (
    <motion.header
      initial={reduced ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full border border-ink/10 bg-bg/80 py-2 pl-2 pr-2 backdrop-blur-md md:pl-3 md:pr-3"
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        {/* Kiri: pill Tentang */}
        <button
          type="button"
          onClick={() => scrollToId("about")}
          className="font-mono-label rounded-full px-3 py-2 text-ink transition-colors hover:bg-lilac md:px-4"
        >
          Tentang
        </button>

        {/* Tengah: wordmark */}
        <button
          type="button"
          onClick={() => scrollToId("hero")}
          aria-label="Kembali ke atas"
          className="group absolute left-1/2 flex -translate-x-1/2 items-center gap-2"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-ink font-display text-[0.7rem] text-bg transition-colors group-hover:bg-accent md:h-8 md:w-8">
            {profile.initials}
          </span>
          <span className="hidden font-display text-sm tracking-tight text-ink sm:block md:text-base">
            {profile.wordmark}
          </span>
        </button>

        {/* Kanan: jam + CTA */}
        <div className="flex items-center gap-2 md:gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-ink/10 bg-card px-3 py-1.5 lg:inline-flex">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
            </span>
            <LocalClock
              timezone={profile.localTimezone}
              label={profile.localTimeLabel}
              className="font-mono-label text-ink-soft"
            />
          </span>
          <PillButton href={waHref} external ariaLabel="Hubungi lewat WhatsApp">
            <span className="hidden sm:inline">{contact.cta}</span>
            <span className="sm:hidden">Talk</span>
          </PillButton>
        </div>
      </div>
    </motion.header>
  );
}
