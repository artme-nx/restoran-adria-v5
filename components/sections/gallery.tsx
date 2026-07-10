const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1756680967373-c3205a8a8b31?q=80&w=1600&auto=format&fit=crop",
    alt: "Terasa restorana s pogledom na more",
    span: "md:col-span-7",
  },
  {
    src: "https://images.unsplash.com/photo-1522443286374-01dc7e91433a?q=80&w=1200&auto=format&fit=crop",
    alt: "Pogled na luku i grad iznad mora",
    span: "md:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1496886951268-3dcd336e467e?q=80&w=1200&auto=format&fit=crop",
    alt: "Svježa riba pripremljena za posluživanje",
    span: "md:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1716003483250-37b509940352?q=80&w=1400&auto=format&fit=crop",
    alt: "Restoran uz obalu u sumrak",
    span: "md:col-span-7",
  },
];

export function Gallery() {
  return (
    <section id="ambijent" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32 lg:px-12">
      <p className="text-label text-muted-foreground">Ambijent — Terasa i riva</p>
      <h2 className="font-display mt-6 max-w-2xl text-4xl leading-[1.05] tracking-[var(--tracking-display)] md:text-5xl">
        Šezdeset mjesta unutra, sto trideset okrenuto moru.
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Klimatizirana sala prima 60 gostiju, a velika terasa uz rivu 130 —
        s pogledom na privezane brodice i otoke pred Vodicama. Ljeti se
        konoba otvara u podne i ostaje otvorena do ponoći.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        {IMAGES.map((img) => (
          <div
            key={img.src}
            className={`relative aspect-[4/3] overflow-hidden bg-muted md:aspect-auto md:min-h-[22rem] ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
