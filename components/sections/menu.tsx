const CATEGORIES = [
  {
    no: "01",
    title: "Iz mora",
    description:
      "Friško ulovljena riba iz Jadrana — brancin, škarpina i tuna steak s roštilja, lignje, škampi i miješani girice na žaru.",
    image:
      "https://images.unsplash.com/photo-1518732751612-2c0787ff5684?q=80&w=1400&auto=format&fit=crop",
    alt: "Riba na žaru s limunom",
  },
  {
    no: "02",
    title: "Hobotnica i hladna jela",
    description:
      "Salata od hobotnice, domaći pršut i paški sir, plata plodova mora — klasici koje gosti naručuju dva dana zaredom.",
    image:
      "https://images.unsplash.com/photo-1572438631563-a3429408a845?q=80&w=1400&auto=format&fit=crop",
    alt: "Hobotnica na tanjuru",
  },
  {
    no: "03",
    title: "Ručno rađena tjestenina",
    description:
      "Domaća tjestenina s morskim plodovima ili u tradicionalnim dalmatinskim umacima, uz svježi bosiljak i maslinovo ulje.",
    image:
      "https://images.unsplash.com/photo-1751151497799-8b4057a2638e?q=80&w=1400&auto=format&fit=crop",
    alt: "Tjestenina u umaku od rajčice",
  },
  {
    no: "04",
    title: "Vinska karta",
    description:
      "Bogata karta hrvatskih i stranih etiketa, biran uz jelovnik — od svježih bijelih uz školjke do punih crnih uz roštilj.",
    image:
      "https://images.unsplash.com/photo-1685526390988-9f6c074ee5d9?q=80&w=1400&auto=format&fit=crop",
    alt: "Čaša vina pri zalasku sunca",
  },
];

export function Menu() {
  return (
    <section id="jelovnik" className="border-t border-border bg-card/40 px-4 py-24 md:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-label text-muted-foreground">Jelovnik — Scena 02</p>
        <h2 className="font-display mt-6 max-w-2xl text-4xl leading-[1.05] tracking-[var(--tracking-display)] md:text-5xl">
          Riba iz mora, tjestenina iz ruke.
        </h2>

        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <div key={cat.no} className="group">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-(--duration-drift) ease-(--ease-tide) group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6 border-t border-border pt-4">
                <span className="text-label text-muted-foreground">{cat.no}</span>
                <h3 className="font-display flex-1 text-2xl tracking-[var(--tracking-display)] md:text-3xl">
                  {cat.title}
                </h3>
              </div>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Za desert — palačinke sa sladoledom, dalmatinska rožata i domaći
          kolači. Cijeli jelovnik i aktualne cijene dostupni su na upit na
          rezervaciju.
        </p>
      </div>
    </section>
  );
}
