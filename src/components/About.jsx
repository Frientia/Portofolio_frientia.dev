"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about, profile } from "../lib/content";
import { MaskHeading, Reveal, Stagger, StaggerItem } from "./ui/Reveal";
import { FigLabel, Chip } from "./ui/Bits";

const META = [
  { k: "Based in", v: "Indonesia" },
  { k: "Focus", v: "Backend → Full-stack" },
  { k: "Tools", v: "PHP · MySQL · JS · Git" },
];

export default function About() {
  const reduced = useReducedMotion();

  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-24 md:py-32"
    >
      <Reveal className="mb-10">
        <FigLabel fig={about.fig} title={about.figTitle} />
      </Reveal>

      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <div>
          <MaskHeading
            as="h2"
            lines={about.statement}
            className="display-section max-w-xl text-ink"
            lineClassName="text-[clamp(1.4rem,3.4vw,2.6rem)] leading-[1.15] font-body font-semibold normal-case tracking-normal"
          />

          <Stagger className="mt-8 flex flex-wrap gap-3" stagger={0.08}>
            {about.traits.map((t, i) => (
              <StaggerItem key={t}>
                <Chip tint={["pink", "mint", "sky"][i % 3]}>{t}</Chip>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
            {META.map((m) => (
              <div key={m.k} className="bg-card p-4">
                <p className="font-mono-label text-ink-soft">{m.k}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{m.v}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} x={30} className="relative mx-auto w-full max-w-sm">
          <motion.figure
            initial={reduced ? false : { rotate: -6, y: 20, opacity: 0 }}
            whileInView={{ rotate: -3, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            whileHover={reduced ? undefined : { rotate: 0, scale: 1.03 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[1.6rem] border border-ink/10 bg-card p-3 pb-12"
            style={{ boxShadow: "var(--shadow-lift)" }}
          >
            <img
              src={about.photo}
              alt={profile.name}
              className="h-72 w-full rounded-[1.1rem] object-cover md:h-80"
            />
            <figcaption className="font-mono-label absolute bottom-4 left-0 right-0 text-center text-ink-soft">
              {about.photoCaption}
            </figcaption>
          </motion.figure>

          <span
            className="absolute -right-2 -top-3 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-bg px-3 py-1.5"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            <span className="font-mono-label text-ink">Open to work</span>
          </span>
        </Reveal>
      </div>
    </section>
  );
}

