"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Humo — Your Way Out of Burnout"
            width={120}
            height={36}
            className="h-8 w-auto"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
          >
            How It Works
          </a>
          <a
            href="#resources"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
          >
            Learn
          </a>
          <a
            href="https://humo.health/assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
          >
            Self-Check
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Join Waitlist
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#how-it-works"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-foreground/70"
            >
              How It Works
            </a>
            <a
              href="#resources"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-foreground/70"
            >
              Learn
            </a>
            <a
              href="https://humo.health/assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/70"
            >
              Self-Check
            </a>
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
