import { cn } from "@/lib/utils";

export function BarcodeSticker({
  label = "KARMA",
  className,
}: {
  label?: string;
  className?: string;
}) {
  const bars = [2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 2, 1, 1, 2, 3, 1];

  return (
    <div className={cn("inline-flex flex-col items-center gap-0.5 select-none", className)}>
      <div className="flex items-end gap-px h-6">
        {bars.map((w, i) => (
          <div
            key={i}
            className="bg-current"
            style={{
              width: w,
              height: `${60 + ((i * 7) % 40)}%`,
            }}
          />
        ))}
      </div>
      <span className="font-[family-name:var(--font-label)] text-[8px] tracking-[0.25em] uppercase font-bold">
        {label}
      </span>
    </div>
  );
}
