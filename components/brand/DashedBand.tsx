import { cn } from "@/lib/utils";

export function DashedBand({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-2 py-1", className)} aria-hidden>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="w-4 h-1.5 bg-ink rounded-sm flex-shrink-0" />
      ))}
    </div>
  );
}
