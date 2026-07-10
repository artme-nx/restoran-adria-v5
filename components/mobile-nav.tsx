"use client";

import React from "react";
import { useNav } from "@/components/nav-context";

const LINKS = [
  { href: "#prica", label: "Priča" },
  { href: "#jelovnik", label: "Jelovnik" },
  { href: "#ambijent", label: "Ambijent" },
  { href: "#recenzije", label: "Recenzije" },
  { href: "#lokacija", label: "Lokacija" },
];

// Independent fixed overlay — a SIBLING of <SiteHeader>, not nested inside it.
// A backdrop-blur on a fixed header creates a new stacking/clip context that
// traps a nested mobile nav; keeping this as a top-level fixed element avoids
// that entirely.
export function MobileNav() {
  const { open, setOpen } = useNav();

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  return (
    <div
      id="mobile-nav"
      aria-hidden={!open}
      className={[
        "fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-md transition-opacity duration-(--duration-base) md:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
    >
      <div className="flex items-center justify-between px-4 py-4">
        <span className="font-display text-xl italic tracking-[var(--tracking-display)]">
          Adria
        </span>
        <button
          onClick={() => setOpen(false)}
          aria-label="Zatvori izbornik"
          className="flex aspect-square items-center justify-center bg-primary p-2 text-primary-foreground"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-1 flex-col items-center justify-center gap-8">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl italic tracking-[var(--tracking-display)] transition-colors duration-(--duration-micro) hover:text-gold"
          >
            {link.label}
          </a>
        ))}
        <a
          href="tel:+38522441543"
          onClick={() => setOpen(false)}
          className="text-label mt-4 rounded-full bg-[var(--button-primary-bg)] px-7 py-3.5 text-[var(--button-primary-fg)]"
        >
          Pozovi: +385 22 441 543
        </a>
      </nav>
    </div>
  );
}
