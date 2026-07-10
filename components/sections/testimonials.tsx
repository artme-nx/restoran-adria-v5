const REVIEWS = [
  {
    quote:
      "The food itself was really tasty and fresh, lovely presentation — some of the best we've had in our time in Croatia.",
    meta: "Gost, Tripadvisor",
  },
  {
    quote:
      "We ate at Adria two days in a row — the food was excellent and the service was great, with very friendly staff.",
    meta: "Gost, Tripadvisor",
  },
  {
    quote:
      "Good food, cozy atmosphere and very friendly staff, right on the harbour — a recommended stop in Vodice.",
    meta: "Gost, Tripadvisor",
  },
];

export function Testimonials() {
  return (
    <section id="recenzije" className="border-t border-border bg-card/40 px-4 py-24 md:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-label text-muted-foreground">Recenzije</p>
            <h2 className="font-display mt-6 max-w-xl text-4xl leading-[1.05] tracking-[var(--tracking-display)] md:text-5xl">
              Što kažu gosti s rive.
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="font-display text-4xl italic text-gold">4.4/5</p>
            <p className="text-label mt-2 text-muted-foreground">
              349 recenzija · #6 od ~90 restorana u Vodicama
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-border pt-10 md:grid-cols-3 md:gap-10">
          {REVIEWS.map((r, i) => (
            <blockquote key={i} className="flex flex-col gap-6">
              <span aria-hidden className="font-display text-4xl italic leading-none text-gold">
                &ldquo;
              </span>
              <p className="text-base leading-relaxed text-foreground/90">{r.quote}</p>
              <cite className="text-label not-italic text-muted-foreground">{r.meta}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
