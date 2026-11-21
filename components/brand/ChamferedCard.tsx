"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ChamferedCardProps = {
  children: ReactNode;
  className?: string;
  variant?: "bone" | "black" | "orange";
  size?: "sm" | "md" | "lg";
  withShadow?: boolean;
  withCrosshair?: boolean;
};

export function ChamferedCard({
  children,
  className,
  variant = "bone",
  size = "md",
  withShadow = true,
  withCrosshair = false,
}: ChamferedCardProps) {
  const bgColors = {
    bone: "bg-bone text-ink",
    black: "bg-ink-2 text-bone",
    orange: "bg-wild-orange text-ink",
  };

  const clipClass = size === "sm" ? "clip-chamfer-sm" : "clip-chamfer";

  return (
    <div className={cn("relative", withShadow && "mb-1 mr-1")}>
      {/* Shadow offset */}
      {withShadow && (
        <div
          className={cn(
            "absolute inset-0 translate-x-1.5 translate-y-1.5 bg-ink border border-bone/20",
            clipClass
          )}
          aria-hidden
        />
      )}
      {/* Main card */}
      <div
        className={cn(
          "relative",
          bgColors[variant],
          clipClass,
          size === "sm" && "p-3",
          size === "md" && "p-5",
          size === "lg" && "p-8",
          className
        )}
      >
        {/* Crosshair marker */}
        {withCrosshair && (
          <div className="absolute top-2 right-4" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              <line x1="8" y1="0" x2="8" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <line x1="0" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
            </svg>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
