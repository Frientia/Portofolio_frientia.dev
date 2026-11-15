"use client";

import { createElement } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/** Fade + slide saat masuk viewport (sekali). Instan bila reduced-motion. */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  x = 0,
  scale = 1,
  className = "",
  once = true,
  ...rest
}) {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Container yang men-stagger anak-anak <RevealItem>. */
export function Stagger({ children, className = "", stagger = 0.1, delay = 0 }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", y = 24 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Judul besar dengan reveal line-mask (clip tiap baris naik dari bawah).
 * `lines` = array string, tiap elemen jadi satu baris bermask.
 */
export function MaskHeading({
  lines,
  as = "h2",
  className = "",
  lineClassName = "",
  stagger = 0.09,
  immediate = false, // true = reveal saat mount (untuk hero / above-the-fold)
}) {
  const reduced = useReducedMotion();
  return createElement(
    as,
    { className },
    lines.map((line, i) => (
      <span className="line-mask" key={i}>
        <motion.span
          className={lineClassName}
          initial={reduced ? false : { y: "112%" }}
          {...(immediate
            ? { animate: reduced ? undefined : { y: "0%" } }
            : {
                whileInView: reduced ? undefined : { y: "0%" },
                viewport: { once: true, margin: "-60px" },
              })}
          transition={{ duration: 0.8, delay: immediate ? 0.1 + i * stagger : i * stagger, ease: EASE }}
        >
          {line}
        </motion.span>
      </span>
    ))
  );
}
