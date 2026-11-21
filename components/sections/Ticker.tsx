"use client";

import { copy } from "@/content/copy";

export function Ticker() {
  const items = copy.ticker.items;

  return (
    <div
      className="hazard-stripes py-2.5 overflow-hidden border-y-2 border-ink select-none"
      role="marquee"
      aria-label="Campaign highlights"
    >
      <div className="flex animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
        {/* Double array for infinite marquee illusion */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-[family-name:var(--font-label)] font-bold text-sm md:text-base text-ink tracking-wider mx-4 flex items-center gap-3 bg-wild-orange/80 px-2 py-0.5 rounded-sm"
          >
            <span>•</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
