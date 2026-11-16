"use client";

import { createElement } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  delay = 0,
  y = 26,
  x = 0,
  scale = 1,
  className = "",
  once = true,
  as = "div",
  ...rest
}) {
  const reduced = useReducedMotion();
  const Comp = motion[as] || motion.div;
  if (reduced) {
    return createElement(as, { className, ...rest }, children);
  }
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

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

export function MaskHeading({
  lines,
  as = "h2",
  className = "",
  lineClassName = "",
  stagger = 0.09,
  immediate = true,
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
                viewport: { once: true, margin: "0px 0px 25% 0px" },
              })}
          transition={{ duration: 0.7, delay: immediate ? 0.1 + i * stagger : i * stagger, ease: EASE }}
        >
          {line}
        </motion.span>
      </span>
    ))
  );
}

