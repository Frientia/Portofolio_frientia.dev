"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faq } from "../lib/content";
import { MaskHeading, Reveal } from "./ui/Reveal";
import { FigLabel } from "./ui/Bits";
import { Plus } from "lucide-react";

export default function Faq() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(0);
  const items = faq.items;

  return (
    <section id="faq" className="relative scroll-mt-24">
      <div className="mx-auto w-full max-w-4xl px-5 pt-24 md:pt-32">
        <Reveal className="mb-6">
          <FigLabel fig={faq.fig} title={faq.figTitle} />
        </Reveal>
        <MaskHeading as="h2" lines={faq.heading} className="display-section text-ink" />
      </div>

      <div className="mx-auto mt-10 w-full max-w-4xl px-5 pb-24 md:pb-32">
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <li key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono-label text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-semibold text-ink transition-colors group-hover:text-accent md:text-xl">
                        {item.q}
                      </span>
                    </span>
                    <motion.span
                      aria-hidden
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/10 text-ink transition-colors group-hover:border-accent group-hover:text-accent"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      key="content"
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 pl-10 text-[0.98rem] leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

