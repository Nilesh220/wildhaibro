"use client";

import { cn } from "@/lib/utils";

export function ArrowBox({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center border border-current transition-all duration-200",
        "hover:bg-wild-orange hover:text-ink hover:border-wild-orange",
        "group cursor-pointer",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        width={size * 0.5}
        height={size * 0.5}
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="transition-transform duration-200 group-hover:rotate-45"
      >
        <line x1="4" y1="12" x2="12" y2="4" />
        <polyline points="6 4 12 4 12 10" />
      </svg>
    </div>
  );
}
