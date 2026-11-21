import { cn } from "@/lib/utils";

type HazardStripesProps = {
  className?: string;
  thin?: boolean;
  height?: number;
};

export function HazardStripes({ className, thin = false, height = 8 }: HazardStripesProps) {
  return (
    <div
      className={cn(thin ? "hazard-stripes-thin" : "hazard-stripes", className)}
      style={{ height }}
      role="separator"
      aria-hidden
    />
  );
}

export function HazardProgress({
  value,
  max,
  className,
}: {
  value: number;
  max: number;
  className?: string;
}) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={cn("h-3 bg-ink-2 overflow-hidden", className)} role="progressbar" aria-valuenow={value} aria-valuemax={max}>
      <div
        className="h-full hazard-stripes transition-[width] duration-300"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
