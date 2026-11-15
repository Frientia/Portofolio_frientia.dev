"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Server,
  Database,
  Sparkles,
  GitBranch,
  Github,
  Facebook,
  Mail,
  MessageCircle,
  MapPin,
  Phone,
  Code2,
  Figma,
  FileText,
  Sheet,
  Star,
  Download,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";

/** Peta nama ikon (string di content.js) -> komponen lucide. */
export const ICONS = {
  Server,
  Database,
  Sparkles,
  GitBranch,
  Github,
  Facebook,
  Mail,
  MessageCircle,
  MapPin,
  Phone,
  ArrowUpRight,
  ArrowRight,
  Code2,
  Figma,
  FileText,
  Sheet,
  Star,
  Download,
  Award,
  GraduationCap,
  Briefcase,
};

/** Tint purple-family: nama -> kelas bg. (Nama warna dipertahankan dari konten.) */
export const TINTS = {
  pink: { bg: "bg-pink" },
  peach: { bg: "bg-peach" },
  mint: { bg: "bg-mint" },
  lilac: { bg: "bg-lilac" },
  butter: { bg: "bg-butter" },
  sky: { bg: "bg-sky" },
};

/** Label teknis monospace: "Fig. 01 · title". */
export function FigLabel({ fig, title, className = "" }) {
  return (
    <span
      className={`font-mono-label inline-flex items-center gap-2 text-ink-soft ${className}`}
    >
      <span aria-hidden className="text-accent">
        ●
      </span>
      {fig}
      {title ? <span className="opacity-50">·</span> : null}
      {title ? <span>{title}</span> : null}
    </span>
  );
}

/** Chip/pill trait. */
export function Chip({ children, tint = "pink", className = "" }) {
  const t = TINTS[tint] || TINTS.pink;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full ${t.bg} px-4 py-1.5 text-sm font-medium text-ink border border-ink/10 ${className}`}
    >
      {children}
    </span>
  );
}

/** Lingkaran berisi panah; berputar + bergeser saat hover pada induknya. */
export function ArrowCircle({
  icon: Icon = ArrowUpRight,
  className = "",
  size = 18,
}) {
  return (
    <span
      className={`grid place-items-center rounded-full bg-ink text-bg transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-45 ${className}`}
      style={{ width: "1.9em", height: "1.9em" }}
      aria-hidden
    >
      <Icon size={size} strokeWidth={2.4} />
    </span>
  );
}

/** Tombol/link pill dengan lingkaran panah. Render <a> bila ada href. */
export function PillButton({
  children,
  href,
  external = false,
  icon = ArrowUpRight,
  variant = "solid", // solid | outline
  className = "",
  onClick,
  ariaLabel,
  download = false,
}) {
  const reduced = useReducedMotion();
  const base =
    "group inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300";
  const skin =
    variant === "solid"
      ? "bg-accent text-bg hover:bg-accent2"
      : "bg-card text-ink border border-ink/10 hover:border-accent";

  const inner = (
    <>
      <span>{children}</span>
      <ArrowCircle
        icon={icon}
        className={variant === "solid" ? "bg-bg text-ink" : ""}
      />
    </>
  );

  const whileHover = reduced ? undefined : { scale: 1.03 };
  const whileTap = reduced ? undefined : { scale: 0.97 };

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download ? true : undefined}
        className={`${base} ${skin} ${className}`}
        whileHover={whileHover}
        whileTap={whileTap}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${base} ${skin} ${className}`}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {inner}
    </motion.button>
  );
}

/** Badge stiker: kotak membulat dirotasi dengan ikon + halo pastel. */
export function StickerBadge({
  icon: Icon = Star,
  tint = "pink",
  rotate = -10,
  size = 56,
  className = "",
}) {
  const t = TINTS[tint] || TINTS.pink;
  return (
    <span
      className={`relative grid shrink-0 place-items-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span
        className={`grid place-items-center rounded-[1rem] ${t.bg} border border-accent/25 text-accent`}
        style={{
          width: size,
          height: size,
          transform: `rotate(${rotate}deg)`,
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <Icon size={size * 0.46} strokeWidth={2.2} />
      </span>
    </span>
  );
}

/** Balon ucapan (kartu gelap), diputar halus. */
export function SpeechBubble({ children, rotate = 3, className = "" }) {
  return (
    <div
      className={`relative rounded-2xl border border-ink/10 bg-card px-5 py-4 text-[0.95rem] leading-relaxed text-ink-soft ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, boxShadow: "var(--shadow-soft)" }}
    >
      <span
        aria-hidden
        className="absolute -left-1.5 top-6 h-3 w-3 rotate-45 rounded-[2px] border-b border-l border-ink/10 bg-card"
      />
      {children}
    </div>
  );
}
