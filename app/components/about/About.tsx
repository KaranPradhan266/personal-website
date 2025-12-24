"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const words = ["growing", "evolving", "progressing", "learning", "refining"];

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
    <section id="about" aria-label="About" className="space-y-4 text-left">
      <h2 className="text-[#F9FAFB] text-4xl sm:text-5xl">Karan Pradhan</h2>
      <div className="flex items-start justify-between gap-4">
        <p className="text-foreground">
          Building thoughtfully,
          <span
            className={`ml-1 inline-block text-right font-semibold text-[#F59E0B] transition-opacity duration-300 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {words[index]}
          </span>{" "}
          between who we are and who we aspire to become.
        </p>
        <Image
          src="/baymax.png"
          alt="Baymax"
          width={70}
          height={70}
          className="shrink-0"
        />
      </div>
      <div className="pt-4">
        <h3 className="inline-block border-b-2 border-foreground/60 pb-1">
          Education
        </h3>
        <div className="mt-4 space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Image
                  src="/scu_icon.jpeg"
                  alt="Santa Clara University"
                  width={30}
                  height={30}
                  className="rounded-sm"
                />
                Master of Science, Santa Clara University
              </h4>
            </div>
            <p className="text-sm font-medium text-teal-300">
              Computer Science and Engineering · 2023–2025
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Image
                  src="/charusat_icon.jpeg"
                  alt="Charusat University"
                  width={30}
                  height={30}
                  className="rounded-sm"
                />
                Bachelor's in Engineering, Charotar University of Science and Technology
              </h4>
            </div>
            <p className="text-sm font-medium text-teal-300">
              Computer Science and Engineering ·
              2018–2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
