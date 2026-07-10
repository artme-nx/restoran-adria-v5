"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/site-header";

gsap.registerPlugin(ScrollTrigger);

const TITLE_LINES = [
  { text: "Riva, riba", indent: "", italic: false },
  { text: "i", indent: "", italic: false, inline: true },
  { text: "zlatni", indent: "", italic: true, inline: true },
  { text: "horizont", indent: "", italic: false },
];

export default function HeroSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from("[data-hero-line]", {
          yPercent: 110,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });

        gsap.from("[data-hero-fade]", {
          autoAlpha: 0,
          y: 24,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.06,
          delay: 0.35,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });

        gsap.to("[data-hero-bg]", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to("[data-hero-title]", {
          yPercent: -12,
          autoAlpha: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-background pb-24 text-foreground"
    >
      <SiteHeader />

      <div aria-hidden data-hero-bg className="absolute inset-0 -z-20 scale-110">
        <img
          src="https://images.unsplash.com/photo-1725830674531-794510b656e9?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[image:var(--hero-vignette)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[image:var(--hero-glow)]" />

      <div
        data-hero-fade
        className="text-label mx-auto mt-32 flex w-max max-w-full items-center gap-3 border border-border/70 bg-background/40 px-4 py-2 text-foreground/90 backdrop-blur-sm md:mt-40"
      >
        <span aria-hidden className="size-1.5 shrink-0 bg-gold" />
        <span>Obala Matice hrvatske 8 · Vodice</span>
      </div>

      <h1
        data-hero-title
        className="font-display mx-auto mt-8 w-full max-w-5xl px-4 text-center text-[length:var(--hero-title-size)] leading-[var(--hero-title-leading)] font-normal tracking-[var(--tracking-display)]"
      >
        <span className="block overflow-hidden">
          <span data-hero-line className="inline-block">
            Riva, riba
          </span>
        </span>
        <span className="block overflow-hidden">
          <span data-hero-line className="inline-block">
            i <em className="text-gold italic">zlatni</em> horizont
          </span>
        </span>
      </h1>

      <p
        data-hero-fade
        className="mx-auto mt-8 max-w-xl px-4 text-center text-base leading-relaxed text-muted-foreground"
      >
        Restoran Adria stoji na istom mjestu na vodičkoj rivi — tamo gdje se
        večeras sunce spušta iza otoka, a s njim i miris žara, friško ulovljene
        ribe i domaće tjestenine.
      </p>

      <div data-hero-fade className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-3 px-4 sm:flex-row">
        <a
          href="#jelovnik"
          className="text-label w-full rounded-full bg-[var(--button-primary-bg)] px-7 py-3.5 text-center text-[var(--button-primary-fg)] transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)] sm:w-auto"
        >
          Pogledaj jelovnik
        </a>
        <a
          href="tel:+38522441543"
          className="text-label flex w-full items-center justify-center gap-2 rounded-full border border-[var(--button-ghost-border)] px-7 py-3.5 transition-colors duration-(--duration-micro) hover:border-[var(--button-ghost-hover-border)] sm:w-auto"
        >
          <span>Rezervacija · +385 22 441 543</span>
        </a>
      </div>

      <div
        data-hero-fade
        className="text-label absolute inset-x-0 bottom-0 hidden items-center justify-between border-t border-border/60 bg-background/30 px-4 py-5 text-muted-foreground backdrop-blur-sm sm:flex md:px-16 lg:px-24 xl:px-32"
      >
        <span>60 mjesta unutra · 130 na terasi</span>
        <span>Mediteransko-dalmatinska kuhinja</span>
        <span>Otvoreno 12 — 24h</span>
      </div>
    </section>
  );
}
