import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeader({
  index,
  eyebrow,
  title,
  lede,
  aside,
  tone = "light",
  className,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  aside?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <Reveal
      className={cn(
        "grid gap-8 border-t pt-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-12",
        dark ? "border-primary-foreground/20" : "border-border",
        className,
      )}
    >
      <div className="flex items-center gap-4 md:block">
        <span
          className={cn(
            "font-display text-2xl tabular-nums",
            dark ? "text-primary-foreground/45" : "text-muted-foreground/60",
          )}
        >
          {index}
        </span>
        <span
          className={cn(
            "eyebrow md:mt-3 md:block",
            dark && "!text-primary-foreground/55",
          )}
        >
          {eyebrow}
        </span>
      </div>

      <div className="max-w-2xl">
        <h2 className="text-balance text-[2.15rem] leading-[1.05] sm:text-5xl">
          {title}
        </h2>
        {lede ? (
          <p
            className={cn(
              "mt-5 max-w-xl text-[0.95rem] leading-relaxed",
              dark ? "text-primary-foreground/70" : "text-muted-foreground",
            )}
          >
            {lede}
          </p>
        ) : null}
      </div>

      {aside ? <div className="md:pt-2">{aside}</div> : null}
    </Reveal>
  );
}
