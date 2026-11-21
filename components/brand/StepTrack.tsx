import { cn } from "@/lib/utils";
import { copy } from "@/content/copy";

type StepTrackProps = {
  currentStep: number; // 0-5
  className?: string;
};

export function StepTrack({ currentStep, className }: StepTrackProps) {
  return (
    <nav
      className={cn("flex items-center gap-1 overflow-x-auto py-3 px-2 no-scrollbar", className)}
      aria-label="Progress"
    >
      {copy.steps.map((step, i) => {
        const isActive = i === currentStep;
        const isDone = i < currentStep;
        return (
          <div key={step} className="flex items-center gap-1 flex-shrink-0">
            <div
              className={cn(
                "flex items-center justify-center w-6 h-6 rounded-full text-xs font-[family-name:var(--font-label)] font-bold transition-colors",
                isActive && "bg-wild-orange text-ink shadow-[0_0_10px_rgba(240,65,12,0.5)]",
                isDone && "bg-bone text-ink",
                !isActive && !isDone && "bg-ink-2 text-bone/40 border border-bone/20"
              )}
              aria-current={isActive ? "step" : undefined}
            >
              {isDone ? "✓" : i + 1}
            </div>
            <span
              className={cn(
                "text-xs font-[family-name:var(--font-label)] uppercase tracking-wider whitespace-nowrap",
                isActive && "text-wild-orange font-bold",
                isDone && "text-bone",
                !isActive && !isDone && "text-bone/40"
              )}
            >
              {step}
            </span>
            {i < copy.steps.length - 1 && (
              <div
                className={cn(
                  "w-4 h-0.5 mx-1",
                  i < currentStep ? "bg-bone" : "bg-bone/20"
                )}
                aria-hidden
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
