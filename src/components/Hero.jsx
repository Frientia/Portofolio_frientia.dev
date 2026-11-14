"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile, marquee, contact } from "../lib/content";
import { scrollToId } from "../lib/scroll";
import { MaskHeading, Reveal } from "./ui/Reveal";
import { FigLabel, PillButton } from "./ui/Bits";
import Marquee from "./Marquee";
import { ArrowDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduced = useReducedMotion();

  const float = (dur = 6, y = 12, delay = 0) =>
    reduced
      ? {}
      : {
          animate: { y: [0, -y, 0], rotate: [0, 1.2, 0] },
          transition: { duration: dur, repeat: Infinity, ease: "easeInOut", delay },
        };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-28 md:pt-32"
    >
      {/* Blob pastel dekoratif */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink opacity-50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-sky opacity-40 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5">
        {/* Kicker + availability */}
        <Reveal className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <FigLabel fig={profile.kicker} />
          <span className="font-mono-label inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-3 py-1.5 text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-accent2" aria-hidden />
            {profile.availability}
          </span>
        </Reveal>

        {/* Headline raksasa */}
        <MaskHeading
          as="h1"
          lines={profile.headline}
          className="display-hero text-ink"
        />

        {/* Nama + peran */}
        <Reveal delay={0.15} className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-2">
          <span className="font-display text-xl text-accent md:text-3xl">
            {profile.name}
          </span>
          <span className="font-mono-label pb-1 text-ink-soft">
            {profile.role} · Indonesia
          </span>
        </Reveal>

        {/* Tagline + CTA */}
        <Reveal
          delay={0.25}
          className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PillButton href={`https://wa.me/${contact.whatsapp}`} external>
              {contact.cta}
            </PillButton>
            <PillButton variant="outline" onClick={() => scrollToId("works")}>
              Lihat Karya
            </PillButton>
          </div>
        </Reveal>
      </div>

      {/* Foto stiker berserakan */}
      <motion.div
        {...float(7, 14)}
        className="pointer-events-none absolute right-6 top-24 hidden w-36 -rotate-6 md:block lg:right-16 lg:w-44"
        style={{ zIndex: 5 }}
      >
        <div className="rounded-[1.4rem] border border-white/70 bg-card p-2.5"
          style={{ boxShadow: "var(--shadow-lift)" }}>
          <img
            src={profile.photo}
            alt=""
            aria-hidden
            className="h-40 w-full rounded-[1rem] object-cover lg:h-52"
          />
          <p className="font-mono-label px-1 pb-1 pt-2 text-center text-ink-soft">
            that's me 👋
          </p>
        </div>
      </motion.div>

      <motion.div
        {...float(8, 10, 0.6)}
        className="pointer-events-none absolute bottom-40 left-4 hidden w-24 rotate-6 lg:block lg:w-28"
        style={{ zIndex: 5 }}
      >
        <div className="rounded-[1.2rem] border border-white/70 bg-card p-2"
          style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="grid h-20 place-items-center rounded-[0.9rem] bg-mint text-3xl lg:h-24">
            💻
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => scrollToId("about")}
        aria-label="Gulir ke bawah"
        {...(reduced
          ? {}
          : {
              animate: { y: [0, 8, 0] },
              transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
            })}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-ink-soft transition-colors hover:text-accent md:block"
      >
        <ArrowDown size={22} />
      </motion.button>

      {/* Marquee ticker */}
      <div className="relative mt-10 border-y border-ink/10 bg-card/60 py-3">
        <Marquee
          items={marquee.hero}
          separator={marquee.separator}
          duration={32}
          itemClassName="font-display text-lg uppercase text-ink md:text-2xl"
        />
      </div>
    </section>
  );
}
