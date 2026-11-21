import { cn } from "@/lib/utils";

export function CheckerBand({ className }: { className?: string }) {
  return (
    <div
      className={cn("checker-band h-4 w-full", className)}
      aria-hidden
    />
  );
}
