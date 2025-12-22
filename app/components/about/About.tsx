"use client";

import { useEffect, useState } from "react";

const words = ["growing", "evolving", "progressing", "learning", "refining"];
const maxWordLength = Math.max(...words.map((word) => word.length));

export default function About() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setIsVisible(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setIsVisible(true);
      }, 220);
    }, 2800);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section aria-label="About" className="space-y-4 text-left">
      <>
      <h2>Karan Pradhan</h2>
      <p className="text-foreground">
        Building thoughtfully,
        <span
          className={`ml-1 inline-block text-right font-semibold text-orange-300 transition-opacity duration-300 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {words[index]}
        </span>{" "}
        between who we are and who we aspire to become.
      </p>
      </>
      
    </section>
  );
}
