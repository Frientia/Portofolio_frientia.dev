"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { works } from "../lib/content";
import { MaskHeading, Reveal } from "./ui/Reveal";
import { FigLabel, PillButton, TINTS } from "./ui/Bits";

export default function SelectedWorks() {
  const stackRef = useRef(null);
  const reduced = useReducedMotion();
  const items = works.items;
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(items.length - 1, Math.floor(v * items.length + 0.0001));
    setActive(idx);
  });

  return (
    <section id="works" className="relative scroll-mt-24">
      {/* Header section + counter sticky */}
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 md:pt-32">
        <Reveal className="mb-6">
          <FigLabel fig={works.fig} title={works.figTitle} />
        </Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <MaskHeading as="h2" lines={works.heading} className="display-section text-ink" />
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-base leading-relaxed text-ink-soft">{works.intro}</p>
          </Reveal>
        </div>
      </div>

      {/* Counter sticky */}
      <div className="sticky top-24 z-30 mx-auto mt-8 flex w-full max-w-6xl items-center justify-between px-5">
        <span className="font-mono-label rounded-full border border-ink/10 bg-card/90 px-4 py-2 text-ink backdrop-blur">
          {String(active + 1).padStart(2, "0")}
          <span className="opacity-40"> / {String(items.length).padStart(2, "0")}</span>
        </span>
        <span className="font-mono-label hidden text-ink-soft sm:block">
          Selected work — scroll
        </span>
      </div>

      {/* Tumpukan kartu */}
      <div ref={stackRef} className="relative mx-auto mt-6 max-w-5xl px-5 pb-24 md:pb-32">
        {items.map((item, i) => {
          const tint = TINTS[item.tint] || TINTS.pink;
          return (
            <div
              key={item.id}
              className="sticky mb-8"
              style={{ top: `calc(7rem + ${i * 1.1}rem)`, zIndex: i + 1 }}
            >
              <motion.article
                initial={reduced ? false : { opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="card-lift group grid overflow-hidden rounded-[1.8rem] border border-ink/10 bg-card md:grid-cols-2"
                style={{ boxShadow: "var(--shadow-lift)" }}
              >
                {/* Gambar */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block h-52 overflow-hidden ${tint.bg} md:h-full md:min-h-[22rem]`}
                  aria-label={`Buka repo ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110"
                  />
                  <span className="font-mono-label absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>

                {/* Konten */}
                <div className="flex flex-col justify-between gap-6 p-6 md:p-9">
                  <div>
                    <h3 className="font-display text-2xl uppercase leading-tight text-ink md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                      {item.description}
                    </p>

                    {/* Meta Role/Status/Year */}
                    <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-ink/10 pt-5">
                      {[
                        ["Role", item.role],
                        ["Status", item.status],
                        ["Year", item.year],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <dt className="font-mono-label text-ink-soft">{k}</dt>
                          <dd className="mt-1 text-sm font-semibold text-ink">{v}</dd>
                        </div>
                      ))}
                    </dl>

                    {/* Stack chips */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.stack.map((s) => (
                        <span
                          key={s}
                          className={`rounded-full ${tint.bg} px-3 py-1 text-xs font-medium text-ink`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <PillButton href={item.link} external variant="outline">
                      Lihat Repo
                    </PillButton>
                  </div>
                </div>
              </motion.article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
