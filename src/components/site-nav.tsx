import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`mx-auto rounded-3xl border border-border/70 bg-card/85 backdrop-blur-md transition-all duration-500 lg:rounded-full ${
          scrolled
            ? "max-w-4xl shadow-[0_18px_40px_-22px_oklch(0.28_0.05_265_/_0.55)]"
            : "max-w-6xl shadow-[var(--shadow-lift)]"
        }`}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-2 sm:gap-4 sm:px-5 sm:py-2.5">
          <a href="#top" className="group flex min-w-0 items-center gap-2 sm:gap-2.5">
            <span className="press grid size-8 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground group-hover:rotate-[-8deg]">
              MS
            </span>
            <span className="truncate font-display text-sm font-bold tracking-tight sm:text-base">
              Mostafa Samir
            </span>
          </a>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-swipe relative rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ThemeToggle />

            <a
              href="#contact"
              aria-label="Available Q3 2026 — get in touch"
              title="Available Q3 2026"
              className={`press sheen hidden shrink-0 items-center justify-center gap-2 rounded-full bg-primary py-2 text-xs font-semibold tracking-wide whitespace-nowrap text-primary-foreground uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:inline-flex ${
                scrolled ? "size-9 px-0" : "px-4"
              }`}
            >
              <span className="blink-dot size-1.5 shrink-0 rounded-full bg-brand-yellow" />
              <span
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  scrolled ? "max-w-0 opacity-0" : "max-w-[12rem] opacity-100"
                }`}
              >
                Available Q3 2026
              </span>
            </a>


            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="press relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border border-border bg-secondary text-foreground lg:hidden"
            >
              <Menu
                className={`absolute size-4 transition-all duration-300 ease-out ${
                  open ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                className={`absolute size-4 transition-all duration-300 ease-out ${
                  open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t border-border/70 px-3 pt-2 pb-3">
              <ul className="grid gap-1">
                {links.map((link, i) => (
                  <li
                    key={link.href}
                    className={`transition-all duration-300 ease-out ${
                      open ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"
                    }`}
                    style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-3 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={`press sheen mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold tracking-wide text-primary-foreground uppercase transition-all duration-300 ease-out sm:hidden ${
                  open ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${60 + links.length * 45}ms` : "0ms" }}
              >
                <span className="blink-dot size-1.5 shrink-0 rounded-full bg-brand-yellow" />
                Available Q3 2026
              </a>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
}
