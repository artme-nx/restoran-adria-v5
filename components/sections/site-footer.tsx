export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <span className="font-display text-lg italic tracking-[var(--tracking-display)]">
          Adria
        </span>
        <span className="text-label text-muted-foreground">
          Obala Matice hrvatske 8, Vodice · +385 22 441 543
        </span>
        <span className="text-label text-muted-foreground">
          © 2026 Restoran Adria
        </span>
      </div>
    </footer>
  );
}
