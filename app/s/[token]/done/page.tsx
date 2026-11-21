"use client";

import Link from "next/link";
import { CornerBrackets } from "@/components/brand/CornerBrackets";
import { BarcodeSticker } from "@/components/brand/BarcodeSticker";
import { StepTrack } from "@/components/brand/StepTrack";
import { HazardStripes } from "@/components/brand/HazardStripes";

export default function DonePage() {
  return (
    <div className="min-h-screen bg-ink text-bone py-10 px-4">
      {/* Top Bar */}
      <div className="max-w-xl mx-auto mb-6 flex justify-between items-center border-b border-bone/15 pb-4">
        <Link
          href="/"
          className="text-xs font-[family-name:var(--font-label)] text-wild-orange hover:underline font-bold"
        >
          ← BACK TO MICROSITE
        </Link>
        <span className="text-xs font-[family-name:var(--font-label)] text-wild-orange uppercase font-bold">
          STAGE 6 • WILD CERTIFIED
        </span>
      </div>

      <div className="max-w-xl mx-auto space-y-6">
        {/* Step Track */}
        <div className="bg-ink-2/70 border border-bone/15 p-2 rounded-sm">
          <StepTrack currentStep={5} />
        </div>

        {/* Big Certified Stamp Card */}
        <CornerBrackets bracketSize={28} color="#F0410C" padding={12} className="w-full">
          <div className="bg-ink-2 border-2 border-wild-orange p-8 clip-chamfer text-center shadow-[0_0_50px_rgba(240,65,12,0.2)]">
            {/* Stamp Graphic */}
            <div className="inline-block border-4 border-wild-orange text-wild-orange font-[family-name:var(--font-display)] text-2xl sm:text-3xl px-6 py-2 uppercase tracking-widest rotate-[-3deg] shadow-[0_0_20px_rgba(240,65,12,0.4)] mb-6 animate-[stamp_0.35s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
              WILD CERTIFIED
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-bone mb-2">
              YOU&apos;RE IN THE CYPHER.
            </h1>

            <p className="font-[family-name:var(--font-body)] text-xs sm:text-sm text-bone/70 max-w-md mx-auto mb-6 leading-relaxed">
              Your story screenshots have been submitted and tagged.
              Winners for Wild Stone perfumes will be announced across Kolkata campuses.
            </p>

            {/* Personalized Rap Name Card to Share to Story */}
            <div className="bg-ink border border-bone/20 p-5 rounded-sm text-left mb-6 relative overflow-hidden">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-[10px] font-[family-name:var(--font-label)] text-wild-orange uppercase tracking-[0.2em] font-bold block">
                    YOUR EXCLUSIVE RAP IDENTITY
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl text-bone mt-0.5">
                    MC HYDRA
                  </h3>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/wild-hai-bro-logo.jpg"
                  alt="Wild Hai Bro"
                  className="w-12 h-12 object-contain rounded-md border border-bone/20"
                />
              </div>

              <div className="space-y-1.5 text-xs font-[family-name:var(--font-body)] text-bone/80 border-t border-bone/10 pt-3">
                <p><span className="text-bone/50">Campus:</span> Jadavpur University</p>
                <p><span className="text-bone/50">Preferred Fragrance:</span> Wild Stone Hydra Energy EDP</p>
                <p><span className="text-bone/50">Fest Coupon (Sample):</span> <strong className="text-wild-orange font-mono">QEPRTX</strong> <span className="text-[10px] bg-wild-orange/20 text-wild-orange px-1 py-0.5 rounded-xs ml-1">PLACEHOLDER</span></p>
              </div>

              <div className="mt-4 pt-3 border-t border-bone/10 flex justify-between items-center">
                <BarcodeSticker label="CERTIFIED" className="text-bone/40" />
                <span className="text-[10px] font-[family-name:var(--font-label)] text-wild-orange">
                  VERIFIED BY @WILDHAIBRO
                </span>
              </div>
            </div>

            {/* Share to Story Button */}
            <div className="space-y-3">
              <button
                onClick={() => alert("Story card saved to photos! Open Instagram to share.")}
                className="w-full bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold text-sm uppercase py-3.5 px-4 clip-chamfer-sm hover:brightness-110 active:translate-x-0.5 shadow-[3px_3px_0px_#000] min-h-[48px]"
              >
                SHARE TO INSTAGRAM STORY ➔
              </button>
              <Link
                href="/"
                className="inline-block text-xs font-[family-name:var(--font-label)] text-bone/60 hover:text-bone underline"
              >
                Return to Campus Tour Home
              </Link>
            </div>
          </div>
        </CornerBrackets>

        <HazardStripes className="max-w-xs mx-auto" />
      </div>
    </div>
  );
}
