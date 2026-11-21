import { cn } from "@/lib/utils";

type CrosshairMarkerProps = {
  className?: string;
  size?: number;
};

export function CrosshairMarker({ className, size = 20 }: CrosshairMarkerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={cn("text-bone/40", className)}
      aria-hidden
    >
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1" />
      <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" />
      <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}
