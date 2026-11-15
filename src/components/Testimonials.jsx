"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "../lib/content";
import { MaskHeading, Reveal } from "./ui/Reveal";
import { FigLabel, TINTS } from "./ui/Bits";

export default function Testimonials() {
  const reduced = useReducedMotion();
  const items = testimonials.items;

  return (
    <section id="testimonials" className="relative scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 md:pt-32">
        <Reveal className="mb-6">
          <FigLabel fig={testimonials.fig} title={testimonials.figTitle} />
        </Reveal>
        <MaskHeading
          as="h2"
          lines={testimonials.heading}
          className="display-section text-ink"
        />
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-6xl gap-6 px-5 pb-24 md:mt-16 md:grid-cols-3 md:pb-32">
        {items.map((t, i) => {
          const tint = TINTS[t.tint] || TINTS.pink;
          const tilt = [-3, 2, -2][i % 3];
          return (
            <motion.figure
              key={t.name}
              initial={reduced ? false : { opacity: 0, y: 30, rotate: tilt }}
              whileInView={{ opacity: 1, y: 0, rotate: tilt }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={reduced ? undefined : { rotate: 0, y: -6 }}
              transition={{ duration: 0.6, delay: reduced ? 0 : i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-lift flex flex-col justify-between rounded-[1.6rem] border border-ink/10 bg-card p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div>
                <span
                  aria-hidden
                  className={`mb-3 inline-grid h-9 w-9 place-items-center rounded-full ${tint.bg} font-display text-lg text-ink`}
                >
                  &ldquo;
                </span>
                <blockquote className="text-[0.98rem] leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
                <img
                  src={t.avatar}
                  alt=""
                  aria-hidden
                  className={`h-11 w-11 rounded-full border-2 object-cover ${tint.bg}`}
                />
                <span>
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="font-mono-label block text-ink-soft">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
}
