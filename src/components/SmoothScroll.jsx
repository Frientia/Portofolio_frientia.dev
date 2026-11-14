"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";

/**
 * Lenis smooth scroll global. Dinonaktifkan otomatis saat user memilih
 * prefers-reduced-motion. Mengintegrasikan Lenis dengan requestAnimationFrame.
 */
export default function SmoothScroll() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Ekspos Lenis agar anchor & komponen lain bisa scrollTo dengan mulus.
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = undefined;
    };
  }, [reduced]);

  return null;
}
