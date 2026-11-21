import { cn } from "@/lib/utils";

export function GridSquare({
  size = 96,
  cells = 6,
  className,
}: {
  size?: number;
  cells?: number;
  className?: string;
}) {
  const cellSize = size / cells;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={cn("opacity-15 select-none pointer-events-none", className)}
      aria-hidden
    >
      {Array.from({ length: cells + 1 }).map((_, i) => (
        <g key={i}>
          <line
            x1={i * cellSize}
            y1={0}
            x2={i * cellSize}
            y2={size}
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <line
            x1={0}
            y1={i * cellSize}
            x2={size}
            y2={i * cellSize}
            stroke="currentColor"
            strokeWidth="0.75"
          />
        </g>
      ))}
    </svg>
  );
}
