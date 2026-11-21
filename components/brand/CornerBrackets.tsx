"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CornerBracketsProps = {
  children: ReactNode;
  className?: string;
  bracketSize?: number;
  color?: string;
  padding?: number;
};

export function CornerBrackets({
  children,
  className,
  bracketSize = 24,
  color = "currentColor",
  padding = 8,
}: CornerBracketsProps) {
  const bracketStyle = {
    width: bracketSize,
    height: bracketSize,
  };

  return (
    <div className={cn("relative inline-block", className)} style={{ padding }}>
      {/* Top-left */}
      <svg
        style={{ ...bracketStyle, position: "absolute", top: 0, left: 0 }}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        aria-hidden
      >
        <polyline points="0,24 0,0 24,0" />
      </svg>
      {/* Top-right */}
      <svg
        style={{ ...bracketStyle, position: "absolute", top: 0, right: 0 }}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        aria-hidden
      >
        <polyline points="0,0 24,0 24,24" />
      </svg>
      {/* Bottom-left */}
      <svg
        style={{ ...bracketStyle, position: "absolute", bottom: 0, left: 0 }}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        aria-hidden
      >
        <polyline points="0,0 0,24 24,24" />
      </svg>
      {/* Bottom-right */}
      <svg
        style={{ ...bracketStyle, position: "absolute", bottom: 0, right: 0 }}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        aria-hidden
      >
        <polyline points="24,0 24,24 0,24" />
      </svg>
      {children}
    </div>
  );
}
