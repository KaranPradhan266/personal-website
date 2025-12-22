"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
    };
  }, []);

  return null;
}
