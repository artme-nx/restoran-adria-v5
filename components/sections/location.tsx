export function Location() {
  return (
    <section id="lokacija" className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32 lg:px-12">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <p className="text-label text-muted-foreground">Lokacija i rezervacije</p>
          <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-[var(--tracking-display)] md:text-5xl">
            Nađite nas na
            <br />
            <em className="text-gold italic">rivi</em>.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Restoran Adria stoji na glavnoj vodičkoj šetnici, uz sam privez
            brodica — mjesto se ne mijenja, ni pogled na otoke.
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <dl className="grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-2">
            <div>
              <dt className="text-label text-muted-foreground">Adresa</dt>
              <dd className="mt-2 text-lg text-foreground">
                Obala Matice hrvatske 8
                <br />
                22211 Vodice, Hrvatska
              </dd>
            </div>
            <div>
              <dt className="text-label text-muted-foreground">Telefon</dt>
              <dd className="mt-2 text-lg text-foreground">
                <a href="tel:+38522441543" className="transition-colors hover:text-gold">
                  +385 22 441 543
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-label text-muted-foreground">Radno vrijeme</dt>
              <dd className="mt-2 text-lg text-foreground">
                Svaki dan, 12:00 — 24:00
                <br />
                <span className="text-sm text-muted-foreground">Sezonski, travanj — listopad</span>
              </dd>
            </div>
            <div>
              <dt className="text-label text-muted-foreground">Kapacitet</dt>
              <dd className="mt-2 text-lg text-foreground">
                60 unutra · 130 na terasi
              </dd>
            </div>
          </dl>

          <a
            href="tel:+38522441543"
            className="text-label mt-10 inline-flex rounded-full bg-[var(--button-primary-bg)] px-7 py-3.5 text-[var(--button-primary-fg)] transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)]"
          >
            Rezerviraj stol
          </a>
        </div>
      </div>
    </section>
  );
}
