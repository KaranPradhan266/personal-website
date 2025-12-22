"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  designation?: string;
  date?: string;
  imageSrc?: string;
  imageAlt?: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);
    updatePreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative w-full pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative pt-6 md:pt-[18px]"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          >
            <div className="h-10 absolute left-3 w-10 rounded-full bg-background flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-muted border border-border p-2" />
            </div>
            <div className="pl-20 pr-4 w-full">
              <div className="flex flex-wrap items-center gap-2">
                {item.imageSrc ? (
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt ?? ""}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-sm object-cover"
                    loading="lazy"
                  />
                ) : null}
                <h3 className="text-lg md:text-3xl font-semibold text-muted-foreground">
                  {item.title}
                </h3>
              </div>
              {item.date ? (
                <span className="mt-2 inline-flex rounded-md bg-orange-200/20 px-2 py-0.5 text-sm font-medium text-orange-200">
                  {item.date}
                </span>
              ) : null}
              {item.designation ? (
                <span className="mt-2 block text-sm font-medium text-foreground/80">
                  {item.designation}
                </span>
              ) : null}
              <div className="mt-4 text-justify text-base">
                {item.content}
              </div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
