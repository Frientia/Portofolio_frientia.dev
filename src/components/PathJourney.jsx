"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { journey } from "../lib/content";
import { MaskHeading, Reveal } from "./ui/Reveal";
import { FigLabel, StickerBadge, SpeechBubble, ICONS } from "./ui/Bits";

/** Ubah titik-titik (viewBox 0..100) jadi path bezier halus (Catmull-Rom). */
function catmullRomPath(pts) {
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(
      2
    )}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

// Jalur desktop: meliuk ke arah tiap kartu (kiri 30 / kanan 70), bleed di ujung.
const N = journey.stops.length;
const desktopPts = [[50, -3]];
journey.stops.forEach((_, i) => {
  const y = ((i + 0.5) / N) * 100;
  const x = i % 2 === 0 ? 30 : 70;
  desktopPts.push([x, y]);
});
desktopPts.push([50, 103]);
const DESKTOP_D = catmullRomPath(desktopPts);

/** Satu pemberhentian: fade+scale masuk saat garis (progress) mencapainya. */
function PathStop({ stop, index, progress, alignRight }) {
  const reduced = useReducedMotion();
  const c = (index + 0.5) / N;
  const Icon = ICONS[stop.icon] || ICONS.Sparkles;

  const opacity = useTransform(progress, [c - 0.12, c - 0.01], [0, 1]);
  const scale = useTransform(progress, [c - 0.12, c - 0.01], [0.86, 1]);
  const y = useTransform(progress, [c - 0.12, c - 0.01], [40, 0]);

  const style = reduced ? undefined : { opacity, scale, y };
  const rotate = index % 2 === 0 ? -3 : 3;

  return (
    <div
      className={`relative flex min-h-[76vh] items-center md:min-h-[82vh] ${
        alignRight ? "md:justify-end" : "md:justify-start"
      }`}
    >
      <motion.div
        style={style}
        initial={reduced ? false : { opacity: 0 }}
        className="w-full md:w-[46%]"
      >
        <div
          className="rounded-[1.8rem] border border-ink/10 bg-card/85 p-6 backdrop-blur-sm md:p-8"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          {/* Judul raksasa 2 kata + badge menyelip */}
          <div
            className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${
              alignRight ? "md:justify-end" : ""
            }`}
          >
            <span className="font-display text-[clamp(1.9rem,5.2vw,3.4rem)] uppercase leading-[0.9] text-ink">
              {stop.word1}
            </span>
            <StickerBadge
              icon={Icon}
              tint={stop.tint}
              rotate={index % 2 === 0 ? -11 : 11}
              size={54}
            />
            <span className="font-display text-[clamp(1.9rem,5.2vw,3.4rem)] uppercase leading-[0.9] text-ink">
              {stop.word2}
            </span>
          </div>

          {/* Label mono */}
          <p
            className={`font-mono-label mt-4 text-ink-soft ${
              alignRight ? "md:text-right" : ""
            }`}
          >
            {String(index + 1).padStart(2, "0")} · {stop.label}
          </p>

          {/* Balon ucapan */}
          <SpeechBubble
            rotate={rotate}
            className={`mt-5 max-w-md ${alignRight ? "md:ml-auto" : ""}`}
          >
            {stop.bubble}
          </SpeechBubble>
        </div>
      </motion.div>
    </div>
  );
}

export default function PathJourney() {
  const stopsRef = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: stopsRef,
    offset: ["start start", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0.001, 1]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.001, 1]);

  return (
    <section id="journey" className="relative scroll-mt-24">
      {/* Intro */}
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 md:pt-32">
        <Reveal className="mb-6">
          <FigLabel fig={journey.fig} title={journey.figTitle} />
        </Reveal>
        <MaskHeading
          as="h2"
          lines={journey.heading}
          className="display-section max-w-3xl text-ink"
        />
        <Reveal delay={0.15} className="mt-6 max-w-xl">
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">
            {journey.intro}
          </p>
        </Reveal>
      </div>

      {/* Area jalur */}
      <div ref={stopsRef} className="relative mx-auto w-full max-w-6xl px-5 pb-24 md:pb-32">
        {/* Jalur desktop (meliuk) */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* ghost route */}
          <path
            d={DESKTOP_D}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={12}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          {/* drawn accent */}
          <motion.path
            d={DESKTOP_D}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={12}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: reduced ? 1 : pathLength }}
            initial={false}
          />
        </svg>

        {/* Timeline mobile (garis vertikal tetap tergambar) */}
        <div className="absolute bottom-6 left-[26px] top-6 w-[3px] md:hidden" aria-hidden="true">
          <div className="absolute inset-0 rounded-full bg-ink/10" />
          <motion.div
            className="absolute inset-x-0 top-0 origin-top rounded-full bg-accent"
            style={{ height: "100%", scaleY: reduced ? 1 : lineScale }}
          />
        </div>

        {/* Pemberhentian */}
        <div className="relative z-10">
          {journey.stops.map((stop, i) => (
            <PathStop
              key={stop.id}
              stop={stop}
              index={i}
              progress={scrollYProgress}
              alignRight={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
