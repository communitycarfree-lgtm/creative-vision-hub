import { ArrowUpRight } from "lucide-react";

import heroEstate from "@/assets/hero-estate.jpg";

const stats = [
  {
    value: "4+",
    label: "Years",
    body: "Shipping property platforms, brokerage portals and PropTech systems.",
  },
  {
    value: "30+",
    label: "Projects",
    body: "Listing, CRM and real-time property products delivered end to end.",
  },
];

const wordmark = ["Mostafa", "Samir"];

export function Hero() {
  return (
    <section id="top" className="relative px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="relative isolate overflow-hidden rounded-3xl">
        {/* Backdrop */}
        <img
          src={heroEstate}
          alt="Modern luxury villa at golden hour with reflecting pool"
          width={1536}
          height={1024}
          className="hero-media absolute inset-0 size-full object-cover"
        />

        {/* Contrast scrim: fixed dark tone so text stays legible in both themes */}
        <div className="absolute inset-0 bg-gradient-to-b from-scrim/75 via-scrim/45 to-scrim/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-scrim/60 via-transparent to-scrim/45" />

        <div className="text-onmedia relative flex min-h-[92svh] flex-col justify-between gap-10 px-5 pt-28 pb-6 sm:px-8 sm:pt-36 sm:pb-8">
          {/* Top copy row */}
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <p
                className="hero-in text-[0.62rem] tracking-[0.22em] uppercase text-onmedia/80"
                style={{ "--d": "80ms" } as React.CSSProperties}
              >
                Since 2021
              </p>
              <h1
                className="hero-in mt-3 max-w-xl font-display text-3xl leading-[1.06] uppercase sm:text-5xl"
                style={{ "--d": "180ms" } as React.CSSProperties}
              >
                Engineering the platforms that move real estate
              </h1>
              <p
                className="hero-in mt-4 max-w-xs text-xs leading-relaxed text-onmedia/85"
                style={{ "--d": "300ms" } as React.CSSProperties}
              >
                I'm Mostafa Samir — senior full stack engineer building listing portals,
                multi-tenant brokerage platforms and property intelligence on .NET 8.
              </p>
            </div>

            <p
              className="hero-in hidden max-w-[9rem] text-right text-[0.62rem] leading-relaxed tracking-[0.14em] uppercase text-onmedia/80 sm:block"
              style={{ "--d": "380ms" } as React.CSSProperties}
            >
              Step Into The
              <br />
              Future Of
              <br />
              PropTech
            </p>
          </div>

          {/* Giant wordmark + glass stat cards */}
          <div className="relative">
            <div className="overflow-hidden sm:pr-60 lg:pr-64">
              <p className="pointer-events-none flex flex-wrap gap-x-[0.22em] font-display text-[clamp(2.6rem,12.5vw,10.5rem)] leading-[0.86] tracking-[-0.02em] uppercase">
                {wordmark.map((word, i) => (
                  <span
                    key={word}
                    className="hero-word"
                    style={{ "--d": `${420 + i * 120}ms` } as React.CSSProperties}
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>

            <div className="mt-6 flex flex-col items-stretch gap-3 sm:absolute sm:top-1/2 sm:right-0 sm:mt-0 sm:-translate-y-1/3 sm:items-end">
              {stats.map((s, i) => (
                <div
                  key={s.value}
                  className="hero-in group w-full rounded-2xl border border-onmedia/20 bg-scrim/45 p-5 backdrop-blur-md transition-[transform,background-color,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-onmedia/35 hover:bg-scrim/60 sm:w-56"
                  style={{ "--d": `${640 + i * 140}ms` } as React.CSSProperties}
                >
                  <div className="flex items-baseline gap-2">
                    <p className="font-display text-3xl transition-transform duration-500 ease-out group-hover:translate-x-0.5">
                      {s.value}
                    </p>
                    <p className="text-[0.6rem] tracking-[0.18em] uppercase text-onmedia/70">
                      {s.label}
                    </p>
                  </div>
                  <p className="mt-2 text-[0.7rem] leading-relaxed text-onmedia/85">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-wrap items-end justify-between gap-6">
            <p
              className="hero-in max-w-[10rem] text-[0.62rem] leading-relaxed tracking-[0.14em] uppercase text-onmedia/80"
              style={{ "--d": "820ms" } as React.CSSProperties}
            >
              I Build Speed, Security And Scale Into Every Property Platform
            </p>

            <a
              href="#portfolio"
              className="hero-in group focus-visible:ring-onmedia/70 inline-flex items-center gap-4 rounded-full border border-onmedia/20 bg-scrim/55 py-2 pr-2 pl-6 backdrop-blur-md transition-colors duration-300 outline-none hover:bg-scrim/75 focus-visible:ring-2 focus-visible:ring-offset-0"
              style={{ "--d": "900ms" } as React.CSSProperties}
            >
              <span className="text-[0.7rem] font-medium tracking-[0.18em] uppercase">
                Discover more
              </span>
              <span className="grid size-9 place-items-center rounded-full bg-onmedia text-scrim transition-transform duration-500 ease-out group-hover:rotate-45 group-active:scale-90">
                <ArrowUpRight className="size-4" />
              </span>
            </a>

            <p
              className="hero-in hidden max-w-[9rem] text-right text-[0.62rem] leading-relaxed tracking-[0.14em] uppercase text-onmedia/80 sm:block"
              style={{ "--d": "980ms" } as React.CSSProperties}
            >
              Available Worldwide · Tanta, Egypt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
