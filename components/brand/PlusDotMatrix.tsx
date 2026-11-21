import { cn } from "@/lib/utils";

export function PlusDotMatrix({
  rows = 5,
  cols = 5,
  className,
}: {
  rows?: number;
  cols?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("grid gap-2 opacity-30 select-none pointer-events-none", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, 8px)` }}
      aria-hidden
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <svg key={i} width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
          <rect x="3" y="0" width="2" height="8" />
          <rect x="0" y="3" width="8" height="2" />
        </svg>
      ))}
    </div>
  );
}
