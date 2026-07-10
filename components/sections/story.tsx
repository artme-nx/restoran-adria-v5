export function Story() {
  return (
    <section id="prica" className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32 lg:px-12">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <p className="text-label text-muted-foreground">Priča — Tradicija na rivi</p>
          <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-[var(--tracking-display)] md:text-5xl">
            Isto mjesto na
            <br />
            <em className="text-gold italic">rivi</em>, godinama.
          </h2>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
          <p>
            Restoran Adria nalazi se na{" "}
            <span className="text-foreground">Obali Matice hrvatske 8</span>,
            na samoj vodičkoj rivi — tamo gdje šetnica gleda ravno na luku i
            otoke. Konoba je poznata po tome da drži tradiciju na starom
            mjestu: isti pogled na privezane brodice, ista terasa okrenuta
            zalasku sunca, isti naglasak na tome što stigne na tanjur.
          </p>
          <p>
            Jelovnik spaja klasike mediteransko-dalmatinske kuhinje s
            internacionalnim specijalitetima. Sva riblja delicija koja stigne
            na stol ulovljena je u Jadranskom moru, meso dolazi od provjerenih
            hrvatskih proizvođača, a povrće s obiteljskih OPG-ova iz okolice.
            Tjestenina se radi ručno, isto kao i pršut koji stoji na hladnim
            predjelima uz paški sir.
          </p>
          <p className="text-foreground/90">
            &ldquo;U Adriji su prije svega vodili računa o izboru
            namirnica&rdquo; — filozofija koja se osjeti u svakom tanjuru,
            od jednostavnog grilla do bogate vinske karte.
          </p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4 md:gap-8">
        {[
          { value: "60", label: "mjesta u sali" },
          { value: "130", label: "mjesta na terasi" },
          { value: "4.4/5", label: "ocjena, 349 recenzija" },
          { value: "12—24h", label: "svaki dan, sezonski" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl italic text-gold md:text-4xl">{stat.value}</p>
            <p className="text-label mt-2 text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
