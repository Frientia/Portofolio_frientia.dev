"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Ticker/marquee infinite horizontal. Isi diduplikasi 2x agar loop mulus
 * (translateX 0 -> -50%). Berhenti saat prefers-reduced-motion.
 */
export default function Marquee({
  items = [],
  separator = "•",
  reverse = false,
  duration = 30,
  className = "",
  itemClassName = "",
}) {
  const reduced = useReducedMotion();
  const loop = [...items, ...items];

  return (
    <div
      className={`marquee-paused relative flex w-full overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ "--marquee-duration": `${duration}s` }}
    >
      <div
        className={`flex w-max shrink-0 items-center ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={reduced ? { animation: "none" } : undefined}
      >
        {loop.map((text, i) => (
          <span
            key={i}
            className={`flex items-center whitespace-nowrap ${itemClassName}`}
          >
            <span>{text}</span>
            <span className="mx-5 text-accent md:mx-7" aria-hidden>
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
