"use client";

import { footer, marquee, profile } from "../lib/content";
import { scrollToId } from "../lib/scroll";
import Marquee from "./Marquee";
import LocalClock from "./ui/LocalClock";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 bg-card/50">
      {/* Marquee penutup */}
      <div className="border-b border-ink/10 py-4">
        <Marquee
          items={marquee.footer}
          separator={marquee.separator}
          reverse
          duration={36}
          itemClassName="font-display text-xl uppercase text-ink md:text-3xl"
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-display text-base text-ink">{profile.wordmark}</p>
          <p className="text-sm text-ink-soft">{footer.credit}</p>
          <p className="font-mono-label text-ink-soft">
            {footer.note} · © {footer.year}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono-label inline-flex items-center gap-2 rounded-full border border-ink/10 bg-bg px-3 py-1.5 text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-accent2" aria-hidden />
            <LocalClock
              timezone={profile.localTimezone}
              label={profile.localTimeLabel}
            />
          </span>
          <button
            type="button"
            onClick={() => scrollToId("hero")}
            aria-label="Kembali ke atas"
            className="group grid h-11 w-11 place-items-center rounded-full bg-ink text-bg transition-colors hover:bg-accent"
          >
            <ArrowUp
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
