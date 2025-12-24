"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, PawPrint, Sun, X } from "lucide-react";

import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "#open-source", label: "Open Source" },
  { href: "https://www.analyticsvidhya.com/blog/author/karanpradhan266/", label: "Writings" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : "dark";

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const smoothScrollTo = (targetY: number, duration = 750) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    const start = performance.now();

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + diff * easeInOutQuad(progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleNavClick =
    (href: string, closeMenu?: boolean) =>
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#")) {
        if (closeMenu) {
          setMenuOpen(false);
        }
        return;
      }

      event.preventDefault();
      if (closeMenu) {
        setMenuOpen(false);
      }

      const target = document.querySelector(href);
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const header = document.querySelector("header");
      const headerOffset =
        header instanceof HTMLElement ? header.offsetHeight : 0;
      const targetY = Math.max(
        0,
        target.getBoundingClientRect().top + window.scrollY - headerOffset - 8
      );

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) {
        window.scrollTo(0, targetY);
        return;
      }

      history.pushState(null, "", href);
      smoothScrollTo(targetY, 750);
    };

  return (
    <header className="sticky top-0 z-40 bg-background/60 backdrop-blur-sm">
      <div className="mx-auto max-w-[700px] px-6 sm:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-semibold tracking-tight"
          >
            <PawPrint className="size-5" aria-hidden="true" />
            <span><b>Karan P</b></span>
          </Link>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick(link.href)}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="relative flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary text-foreground transition-colors hover:bg-secondary/80"
            >
              {theme === "dark" ? (
                <Sun className="size-4" aria-hidden="true" />
              ) : (
                <Moon className="size-4" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground md:hidden"
            >
              {menuOpen ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
            </button>
            <nav
              aria-label="Mobile"
              aria-hidden={!menuOpen}
              className={cn(
                "absolute right-0 top-12 z-10 w-56 rounded-2xl border border-border/60 bg-background/70 px-4 py-4 shadow-lg backdrop-blur transition-all duration-200 ease-out md:hidden",
                menuOpen
                  ? "translate-y-0 opacity-100 delay-75"
                  : "-translate-y-2 opacity-0 pointer-events-none"
              )}
            >
              <div className="flex flex-col gap-3 text-base font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick(link.href, true)}
                    className="text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
