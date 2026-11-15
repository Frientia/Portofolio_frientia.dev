"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile, marquee, contact } from "../lib/content";
import { scrollToId } from "../lib/scroll";
import { MaskHeading, Reveal } from "./ui/Reveal";
import { FigLabel, PillButton } from "./ui/Bits";
import Marquee from "./Marquee";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const reduced = useReducedMotion();
  const float = reduced
    ? {}
    : {
        animate: { y: [0, -10, 0] },
        transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-28 md:pt-32"
    >
      {/* Glow ungu subtil */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent opacity-[0.10] blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-accent2 opacity-[0.12] blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5">
        {/* Kicker + availability */}
        <Reveal className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <FigLabel fig={profile.kicker} />
          <span className="font-mono-label inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-3 py-1.5 text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            {profile.availability}
          </span>
        </Reveal>

        {/* Headline raksasa = nama */}
        <MaskHeading as="h1" lines={profile.headline} className="display-hero text-ink" />

        {/* Peran */}
        <Reveal delay={0.15} className="mt-6">
          <span className="font-display text-lg text-accent md:text-2xl">
            {profile.role}
          </span>
        </Reveal>

        {/* Tagline + CTA */}
        <Reveal
          delay={0.22}
          className="mt-6 flex flex-col gap-6 pb-10 md:flex-row md:items-end md:justify-between"
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

      {/* Foto, tilt halus */}
      <motion.div
        {...float}
        className="pointer-events-none absolute bottom-32 right-5 hidden w-40 -rotate-3 md:block lg:right-14 lg:w-48"
        style={{ zIndex: 5 }}
      >
        <div
          className="rounded-2xl border border-ink/10 bg-card p-2.5"
          style={{ boxShadow: "var(--shadow-lift)" }}
        >
          <img
            src={profile.photo}
            alt=""
            aria-hidden
            className="h-44 w-full rounded-xl object-cover lg:h-56"
          />
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
        className="absolute bottom-28 left-1/2 hidden -translate-x-1/2 text-ink-soft transition-colors hover:text-accent md:block"
      >
        <ArrowDown size={22} />
      </motion.button>

      {/* Marquee ticker */}
      <div className="relative mt-6 border-y border-ink/10 bg-card/40 py-3">
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
