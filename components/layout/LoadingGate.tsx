"use client";

import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

type LoadingGateProps = {
  children: React.ReactNode;
  delayMs?: number;
};

export default function LoadingGate({
  children,
  delayMs = 3000,
}: LoadingGateProps) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const preloadLinks: HTMLLinkElement[] = [];
    const addPreload = (href: string, as: string, type?: string) => {
      if (document.head.querySelector(`link[data-preload="${href}"]`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = href;
      link.as = as;
      if (type) {
        link.type = type;
      }
      link.setAttribute("data-preload", href);
      if (as === "image") {
        link.setAttribute("fetchpriority", "high");
      }
      document.head.appendChild(link);
      preloadLinks.push(link);
    };

    addPreload("/hiro.mp4", "video", "video/mp4");
    addPreload("/baymax.png", "image");

    const timer = window.setTimeout(() => {
      setFadeOut(true);
    }, delayMs);

    const removeTimer = window.setTimeout(() => {
      setShowOverlay(false);
    }, delayMs + 700);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(removeTimer);
      preloadLinks.forEach((link) => link.remove());
    };
  }, [delayMs]);

  return (
    <div className="relative">
      {children}
      {showOverlay ? (
        <div
          className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-background text-foreground transition-transform duration-700 ease-out ${
            fadeOut ? "translate-y-full pointer-events-none" : "translate-y-0"
          }`}
          aria-hidden={fadeOut}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Loading
            </span>
            <Spinner className="size-6 text-foreground/80" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
