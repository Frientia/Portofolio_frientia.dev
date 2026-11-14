"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { process } from "../lib/content";
import { scrollToId } from "../lib/scroll";
import { MaskHeading, Reveal } from "./ui/Reveal";
import { FigLabel, TINTS } from "./ui/Bits";

/** Isi preview sebuah "file" (text/code/sheet/design). */
function FileBody({ file }) {
  const tint = TINTS[file.tint] || TINTS.pink;

  if (file.kind === "design") {
    return (
      <div className={`h-full w-full ${tint.bg} p-5`}>
        <div className="mx-auto flex h-full max-w-sm flex-col gap-3">
          <div className="h-3 w-2/5 rounded-full bg-ink/15" />
          <div className="h-16 rounded-xl bg-card/80" />
          <div className="grid flex-1 grid-cols-2 gap-3">
            <div className="rounded-xl bg-pink/80" />
            <div className="rounded-xl bg-sky/80" />
            <div className="rounded-xl bg-mint/80" />
            <div className="rounded-xl bg-butter/80" />
          </div>
          <div className="h-8 w-24 rounded-full bg-accent/80" />
        </div>
      </div>
    );
  }

  if (file.kind === "sheet") {
    const rows = file.preview;
    return (
      <div className={`h-full w-full ${tint.bg} p-4`}>
        <table className="w-full border-collapse overflow-hidden rounded-lg bg-card text-left text-xs">
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>
                {r.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`border border-ink/10 px-3 py-2 font-mono ${
                      ri === 0 ? "bg-ink text-bg font-bold" : "text-ink"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // text / code
  return (
    <div className={`h-full w-full ${tint.bg} p-5`}>
      <pre className="h-full overflow-hidden font-mono text-[0.78rem] leading-relaxed">
        {file.preview.map((line, i) => (
          <div
            key={i}
            className={
              line.trim().startsWith("//")
                ? "text-ink-soft italic"
                : line.startsWith("<?")
                ? "text-accent"
                : "text-ink"
            }
          >
            <span className="mr-3 inline-block w-4 select-none text-right text-ink/25">
              {i + 1}
            </span>
            {line || "\u00A0"}
          </div>
        ))}
      </pre>
    </div>
  );
}

/** Jendela file: chrome (titik + nama file) + body. */
function FileWindow({ file, className = "", bodyClassName = "h-56" }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-ink/10 bg-card ${className}`}
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div className="flex items-center gap-2 border-b border-ink/10 bg-bg/60 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-butter" />
          <span className="h-2.5 w-2.5 rounded-full bg-mint" />
        </span>
        <span className="font-mono-label ml-2 text-ink-soft">{file.name}</span>
      </div>
      <div className={bodyClassName}>
        <FileBody file={file} />
      </div>
    </div>
  );
}

export default function Process() {
  const reduced = useReducedMotion();
  const steps = process.steps;
  const [active, setActive] = useState(0);
  const stepsRef = useRef(null);

  // Langkah aktif mengikuti scroll: progress container -> index.
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.max(
      0,
      Math.min(steps.length - 1, Math.floor(v * steps.length))
    );
    setActive((prev) => (prev === idx ? prev : idx));
  });

  return (
    <section id="process" className="relative scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 md:pt-32">
        <Reveal className="mb-6">
          <FigLabel fig={process.fig} title={process.figTitle} />
        </Reveal>
        <MaskHeading as="h2" lines={process.heading} className="display-section text-ink" />
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-6xl gap-10 px-5 pb-24 md:mt-16 md:grid-cols-2 md:gap-14 md:pb-32">
        {/* Langkah 01–04 */}
        <div ref={stepsRef}>
          {steps.map((s, i) => {
            const isActive = active === i;
            const tint = TINTS[s.file.tint] || TINTS.pink;
            return (
              <motion.div
                key={s.no}
                id={`process-step-${i}`}
                initial={reduced ? false : { opacity: 0.45 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.4 }}
                className="scroll-mt-40 border-l-2 py-8 pl-6 md:min-h-[52vh] md:py-12"
                style={{ borderColor: isActive ? "var(--accent)" : "rgba(53,50,44,0.12)" }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-display text-3xl transition-colors md:text-4xl ${
                      isActive ? "text-accent" : "text-ink/25"
                    }`}
                  >
                    {s.no}
                  </span>
                  <h3 className="font-display text-2xl uppercase text-ink md:text-3xl">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                  {s.body}
                </p>

                {/* Preview inline khusus mobile */}
                <div className="mt-5 md:hidden">
                  <FileWindow file={s.file} bodyClassName="h-44" />
                </div>

                {/* Penanda langkah aktif (desktop) */}
                <motion.span
                  aria-hidden
                  className={`mt-4 hidden h-1 rounded-full ${tint.bg} md:block`}
                  initial={false}
                  animate={{ width: isActive ? 96 : 32, opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Panel sticky + tab file (desktop) */}
        <div className="hidden md:block">
          <div className="sticky top-28">
            {/* Tab file */}
            <div className="mb-3 flex flex-wrap gap-2">
              {steps.map((s, i) => (
                <button
                  key={s.file.name}
                  type="button"
                  onClick={() => scrollToId(`process-step-${i}`, -140)}
                  aria-current={active === i}
                  className={`font-mono-label rounded-full border px-3 py-1.5 transition-colors ${
                    active === i
                      ? "border-ink bg-ink text-bg"
                      : "border-ink/10 bg-card text-ink-soft hover:border-accent"
                  }`}
                >
                  {s.file.name}
                </button>
              ))}
            </div>

            <motion.div
              key={active}
              initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <FileWindow file={steps[active].file} bodyClassName="h-[24rem]" />
            </motion.div>

            <p className="font-mono-label mt-4 text-ink-soft">
              Step {steps[active].no} · {steps[active].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
