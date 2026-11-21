"use client";

import { useState } from "react";
import { eventConfig } from "@/config/event";
import { CornerBrackets } from "@/components/brand/CornerBrackets";
import { HazardStripes } from "@/components/brand/HazardStripes";
import { Camera, Check } from "lucide-react";

type SubmissionFormProps = {
  participantName?: string;
  rapName?: string;
  collegeName?: string;
  isDemo?: boolean;
  onSuccess?: () => void;
};

export function SubmissionForm({
  participantName = "Aryan Sen",
  rapName = "MC HYDRA",
  collegeName = "Jadavpur University",
  isDemo = true,
  onSuccess,
}: SubmissionFormProps) {
  const [images, setImages] = useState<string[]>([]);
  const [tagConfirmed, setTagConfirmed] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    if (images.length + files.length > 5) {
      setError("Maximum 5 screenshots allowed.");
      return;
    }
    setError(null);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (images.length === 0) {
      setError("Please upload at least 1 story screenshot.");
      return;
    }
    if (!tagConfirmed) {
      setError("Please confirm your story tagged @wildhaibro.");
      return;
    }
    if (!selectedProduct) {
      setError("Please pick your preferred Wild Stone fragrance.");
      return;
    }

    setIsSubmitting(true);
    let cur = 0;
    const interval = setInterval(() => {
      cur += 25;
      setProgress(cur);
      if (cur >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          if (onSuccess) onSuccess();
        }, 400);
      }
    }, 250);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-8">
        <CornerBrackets bracketSize={28} color="#F0410C" padding={12} className="w-full">
          <div className="bg-ink border-2 border-wild-orange p-8 clip-chamfer text-bone">
            <div className="w-16 h-16 bg-wild-orange text-ink rounded-full flex items-center justify-center mx-auto mb-4 animate-[stamp_0.35s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
              <Check className="w-8 h-8 text-ink stroke-[3]" />
            </div>
            <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange tracking-[0.3em] uppercase font-bold block mb-1">
              STORY SUBMISSION COMPLETE
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-bone mb-3">
              WILD CERTIFIED!
            </h2>
            <p className="font-[family-name:var(--font-body)] text-xs sm:text-sm text-bone/70 mb-6 leading-relaxed">
              Yo {rapName || participantName}, your {images.length} story screenshot(s) are logged.
              Our team is verifying the @wildhaibro tag. If selected, your {selectedProduct.toUpperCase()} bottle will be reserved!
            </p>

            <a
              href="/s/demo-token/done"
              className="inline-block bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold px-8 py-3.5 uppercase text-xs tracking-wider clip-chamfer-sm hover:brightness-110"
            >
              View Certified Stamp &amp; Share ↗
            </a>
          </div>
        </CornerBrackets>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-ink-2 border border-bone/20 p-6 sm:p-10 clip-chamfer shadow-[0_0_35px_rgba(240,65,12,0.12)]">
      {/* Greeting */}
      <div className="mb-8 pb-4 border-b border-bone/15">
        <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange uppercase tracking-[0.25em] font-bold block mb-1">
          POST-EVENT SUBMISSION • /s/[TOKEN]
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl text-bone leading-tight">
          YO {rapName ? rapName.toUpperCase() : participantName.toUpperCase()}, DROP YOUR PROOF.
        </h2>
        <p className="font-[family-name:var(--font-body)] text-xs sm:text-sm text-bone/60 mt-1">
          Verified participant at <strong className="text-bone">{collegeName}</strong>. No retyping needed.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Upload box */}
        <div>
          <label className="block font-[family-name:var(--font-label)] text-xs text-bone uppercase tracking-wider font-bold mb-2">
            1. Story Screenshots (1 to 5 images) *
          </label>
          <div className="border-2 border-dashed border-bone/30 hover:border-wild-orange transition-colors p-6 text-center bg-ink cursor-pointer relative group rounded-sm">
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/heic"
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
            <Camera className="w-8 h-8 text-wild-orange mx-auto mb-2 group-hover:scale-110 transition-transform" strokeWidth={1.75} />
            <p className="font-[family-name:var(--font-label)] text-xs uppercase tracking-wider text-bone font-bold">
              TAP TO OPEN CAMERA ROLL OR DRAG HERE
            </p>
            <p className="font-[family-name:var(--font-body)] text-[11px] text-bone/50 mt-1">
              Supports JPG, PNG, WebP or iPhone HEIC (compressed automatically)
            </p>
          </div>

          {/* Previews */}
          {images.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4">
              {images.map((src, idx) => (
                <div key={idx} className="relative group aspect-[9/16] bg-ink rounded-xs overflow-hidden border border-bone/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Story ${idx + 1}`} className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-1 right-1 bg-ink/80 text-logo-red text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold hover:bg-logo-red hover:text-white transition-colors"
                  >
                    ×
                  </button>
                  <span className="absolute bottom-1 left-1 bg-ink/80 text-[9px] font-mono px-1 text-bone">
                    #{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tag confirmation checkbox */}
        <div className="bg-ink p-4 border border-bone/15 rounded-xs">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={tagConfirmed}
              onChange={(e) => setTagConfirmed(e.target.checked)}
              className="mt-0.5 accent-wild-orange w-4 h-4 cursor-pointer"
            />
            <span className="font-[family-name:var(--font-body)] text-xs sm:text-sm text-bone">
              I confirm that my posted Instagram story visibly tagged{" "}
              <strong className="text-wild-orange font-[family-name:var(--font-label)]">@wildhaibro</strong>. *
            </span>
          </label>
        </div>

        {/* 5 Bottles Picker */}
        <div>
          <label className="block font-[family-name:var(--font-label)] text-xs text-bone uppercase tracking-wider font-bold mb-2">
            2. Which Wild Stone product would you prefer? *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {eventConfig.products.map((p) => {
              const isSelected = selectedProduct === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedProduct(p.id)}
                  className={`p-3 text-center border transition-all rounded-xs relative group ${
                    isSelected
                      ? "border-wild-orange bg-wild-orange/15 shadow-[0_0_20px_rgba(240,65,12,0.4)]"
                      : "border-bone/15 bg-ink hover:border-bone/40"
                  }`}
                >
                  {/* Glowing background */}
                  {isSelected && (
                    <div
                      className="absolute inset-0 opacity-25 rounded-xs blur-md pointer-events-none"
                      style={{ backgroundColor: p.color }}
                    />
                  )}
                  <div
                    className="w-5 h-14 mx-auto mb-2 rounded-t-sm border border-white/20 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: p.color }}
                  />
                  <span className="block font-[family-name:var(--font-label)] text-xs text-bone uppercase font-bold truncate">
                    {p.name}
                  </span>
                  <span className="block text-[10px] font-[family-name:var(--font-body)] text-bone/50 mt-0.5">
                    EDP 100ML
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {error && (
          <p className="text-logo-red text-xs font-[family-name:var(--font-label)] font-bold animate-[shake_0.3s_ease-in-out]">
            {error}
          </p>
        )}

        {isSubmitting && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-[family-name:var(--font-label)] text-bone/60">
              <span>COMPRESSING &amp; UPLOADING...</span>
              <span>{progress}%</span>
            </div>
            <HazardStripes />
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-wild-orange text-ink font-[family-name:var(--font-display)] text-lg py-4 uppercase tracking-wider clip-chamfer-sm hover:brightness-110 active:translate-x-0.5 transition-all shadow-[4px_4px_0px_#000] min-h-[50px]"
        >
          {isSubmitting ? "DROPPING IT..." : "DROP IT ➔"}
        </button>
      </form>
    </div>
  );
}
