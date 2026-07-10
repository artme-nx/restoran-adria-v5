"use client";

import { useNav } from "@/components/nav-context";

const LINKS = [
  { href: "#prica", label: "Priča" },
  { href: "#jelovnik", label: "Jelovnik" },
  { href: "#ambijent", label: "Ambijent" },
  { href: "#recenzije", label: "Recenzije" },
  { href: "#lokacija", label: "Lokacija" },
];

export function SiteHeader() {
  const { open, setOpen } = useNav();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-12">
        <a href="#" aria-label="Restoran Adria — početna" className="flex items-baseline gap-3">
          <span className="font-display text-xl tracking-[var(--tracking-display)] italic">
            Adria
          </span>
          <span className="text-label hidden text-muted-foreground sm:inline">
            Vodice, od davnina na rivi
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-label transition-colors duration-(--duration-micro) hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+38522441543"
            className="text-label hidden rounded-full bg-[var(--button-primary-bg)] px-6 py-3 text-[var(--button-primary-fg)] transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)] md:block"
          >
            +385 22 441 543
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex aspect-square items-center justify-center bg-primary p-2 text-primary-foreground transition-colors duration-(--duration-micro) hover:bg-gold md:hidden"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 12h16" />
                <path d="M4 18h16" />
                <path d="M4 6h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
