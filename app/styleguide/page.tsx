"use client";

import Link from "next/link";
import {
  ChamferedCard,
  CrosshairMarker,
  HazardStripes,
  HazardProgress,
  CheckerBand,
  DashedBand,
  PlusDotMatrix,
  GridSquare,
  ArrowBox,
  BarcodeSticker,
  CornerBrackets,
  StepTrack,
} from "@/components/brand";

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-ink text-bone p-6 sm:p-12 max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <header className="border-b-2 border-bone/20 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Link
            href="/"
            className="text-xs font-[family-name:var(--font-label)] text-wild-orange hover:underline font-bold"
          >
            ← BACK TO MICROSITE
          </Link>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl text-bone mt-2">
            DESIGN SYSTEM &amp; TOKENS
          </h1>
          <p className="font-[family-name:var(--font-body)] text-sm text-bone/60 mt-1">
            Wild Hai Bro × Vigor Launchpad Brand Kit &bull; Next.js Component Library
          </p>
        </div>
        <div className="bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold px-3 py-1 text-xs uppercase rounded-xs">
          PHASE 1 SPECIFICATION
        </div>
      </header>

      {/* 0. Official Brand Identity Assets */}
      <section className="bg-ink-2 p-6 border border-bone/20 rounded-sm">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-wild-orange uppercase tracking-wider mb-4">
          Brand Identity Assets (Deck Verified)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div className="bg-ink p-4 border border-bone/15 rounded-xs text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wild-hai-bro-logo.jpg"
              alt="Wild Hai Bro"
              className="h-20 w-auto mx-auto object-contain rounded"
            />
            <span className="text-xs font-[family-name:var(--font-label)] font-bold text-bone block mt-3">
              WILD HAI BRO LOGO
            </span>
            <span className="text-[10px] text-bone/40 font-mono">Dripping Red Hand + Graffiti</span>
          </div>

          <div className="bg-ink p-4 border border-bone/15 rounded-xs text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wild-stone-logo.avif"
              alt="Wild Stone"
              className="h-7 w-auto mx-auto object-contain my-6 brightness-110"
            />
            <span className="text-xs font-[family-name:var(--font-label)] font-bold text-bone block mt-3">
              WILD STONE LOGO
            </span>
            <span className="text-[10px] text-bone/40 font-mono">Official White Wordmark</span>
          </div>

          <div className="bg-ink p-4 border border-bone/15 rounded-xs text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/vigor-launchpad-logo.png"
              alt="Vigor Launchpad"
              className="h-10 w-auto mx-auto object-contain my-5 brightness-0 invert"
            />
            <span className="text-xs font-[family-name:var(--font-label)] font-bold text-bone block mt-3">
              VIGOR LAUNCHPAD LOGO
            </span>
            <span className="text-[10px] text-bone/40 font-mono">Rocket Emblem Mark</span>
          </div>
        </div>
      </section>

      {/* 1. Color Palette Tokens */}
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl text-wild-orange uppercase tracking-wider mb-4">
          1. Color Tokens (Sampled directly from campaign deck)
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { name: "--wild-orange", hex: "#F0410C", text: "text-black", desc: "Primary BG, CTAs, Highlights" },
            { name: "--bone", hex: "#E4E1D8", text: "text-black", desc: "Cards, Form Surfaces, Text" },
            { name: "--ink", hex: "#000000", text: "text-white", desc: "Main Backgrounds, Dark Text" },
            { name: "--ink-2", hex: "#0C0C0C", text: "text-white", desc: "Raised Black Surfaces" },
            { name: "--ember", hex: "#531604", text: "text-white", desc: "Deep Shadows, Gradients" },
            { name: "--logo-red", hex: "#E3262B", text: "text-white", desc: "Hand-sign Logo, Error Accents" },
          ].map((c) => (
            <div key={c.name} className="border border-bone/20 rounded-xs overflow-hidden">
              <div
                className={`h-20 p-2 flex items-end font-mono text-[10px] font-bold ${c.text}`}
                style={{ backgroundColor: c.hex }}
              >
                {c.hex}
              </div>
              <div className="p-2.5 bg-ink-2">
                <p className="font-[family-name:var(--font-label)] text-xs font-bold text-bone">{c.name}</p>
                <p className="font-[family-name:var(--font-body)] text-[10px] text-bone/50 mt-0.5">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Typography Hierarchy */}
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl text-wild-orange uppercase tracking-wider mb-4">
          2. Font System (next/font Google Fonts)
        </h2>
        <div className="space-y-4 bg-ink-2 p-6 border border-bone/15 rounded-sm">
          <div className="border-b border-bone/10 pb-4">
            <span className="text-xs font-[family-name:var(--font-label)] text-bone/40 uppercase">
              Display Font • Zen Dots
            </span>
            <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-bone mt-1">
              WILD HAI BRO • RECOGNISING THE RAW
            </p>
          </div>

          <div className="border-b border-bone/10 pb-4">
            <span className="text-xs font-[family-name:var(--font-label)] text-bone/40 uppercase">
              Label / Stamp Font • Goldman
            </span>
            <p className="font-[family-name:var(--font-label)] text-lg sm:text-xl text-wild-orange font-bold uppercase tracking-wider mt-1">
              DIGITAL AMPLIFICATION • PASS MIL GAYA • RAP COURT
            </p>
          </div>

          <div className="border-b border-bone/10 pb-4">
            <span className="text-xs font-[family-name:var(--font-label)] text-bone/40 uppercase">
              Body Font • Lexend
            </span>
            <p className="font-[family-name:var(--font-body)] text-sm sm:text-base text-bone/80 mt-1 max-w-2xl leading-relaxed">
              Rap has millions of players who never touch the mic. We turn fan behaviour into games they can play, compete in and share.
            </p>
          </div>

          <div>
            <span className="text-xs font-[family-name:var(--font-label)] text-bone/40 uppercase">
              Accent Font • Tourney
            </span>
            <p className="font-[family-name:var(--font-accent)] text-4xl text-bone/40 uppercase tracking-widest mt-1">
              HYPE • RAP • WILD
            </p>
          </div>
        </div>
      </section>

      {/* 3. Reusable Graphic Motifs */}
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl text-wild-orange uppercase tracking-wider mb-4">
          3. Reusable Brand Motifs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Motif 1: Chamfered Card */}
          <div className="bg-ink-2 p-4 border border-bone/10 rounded-sm">
            <span className="text-xs font-[family-name:var(--font-label)] text-bone/40 uppercase block mb-3">
              1. Chamfered Card (45° clip)
            </span>
            <ChamferedCard variant="orange" withCrosshair size="sm">
              <span className="font-[family-name:var(--font-label)] text-xs font-bold uppercase text-ink">
                Bone &amp; Orange Chamfer
              </span>
              <p className="font-[family-name:var(--font-body)] text-xs text-ink/80 mt-1">
                With 45° cut corners and offset shadow.
              </p>
            </ChamferedCard>
          </div>

          {/* Motif 2: Crosshairs & Corner Brackets */}
          <div className="bg-ink-2 p-4 border border-bone/10 rounded-sm">
            <span className="text-xs font-[family-name:var(--font-label)] text-bone/40 uppercase block mb-3">
              2. Crosshair &amp; Corner Brackets
            </span>
            <div className="flex items-center gap-4">
              <CornerBrackets bracketSize={20} color="#F0410C" padding={8}>
                <div className="px-4 py-2 bg-ink border border-bone/20 text-xs font-[family-name:var(--font-label)]">
                  QR FRAMING
                </div>
              </CornerBrackets>
              <CrosshairMarker size={28} className="text-wild-orange" />
              <ArrowBox size={32} className="text-bone" />
            </div>
          </div>

          {/* Motif 3: Hazard Stripes & Checker Band */}
          <div className="bg-ink-2 p-4 border border-bone/10 rounded-sm space-y-3">
            <span className="text-xs font-[family-name:var(--font-label)] text-bone/40 uppercase block">
              3. Hazard Stripes &amp; Checker Band
            </span>
            <HazardStripes height={10} />
            <CheckerBand />
            <DashedBand />
          </div>

          {/* Motif 4: Plus-Dot Matrix & Grid Square */}
          <div className="bg-ink-2 p-4 border border-bone/10 rounded-sm">
            <span className="text-xs font-[family-name:var(--font-label)] text-bone/40 uppercase block mb-2">
              4. Plus-Dot Matrix &amp; Grid Square
            </span>
            <div className="flex items-center gap-6">
              <PlusDotMatrix rows={4} cols={5} className="opacity-80 text-bone" />
              <GridSquare size={64} cells={4} className="opacity-60 text-bone" />
            </div>
          </div>

          {/* Motif 5: Barcode Sticker */}
          <div className="bg-ink-2 p-4 border border-bone/10 rounded-sm">
            <span className="text-xs font-[family-name:var(--font-label)] text-bone/40 uppercase block mb-2">
              5. Barcode Label
            </span>
            <div className="flex gap-4 items-center">
              <BarcodeSticker label="KARMA" className="text-bone" />
              <BarcodeSticker label="PASS-01" className="text-wild-orange" />
            </div>
          </div>

          {/* Motif 6: Progress Track */}
          <div className="bg-ink-2 p-4 border border-bone/10 rounded-sm">
            <span className="text-xs font-[family-name:var(--font-label)] text-bone/40 uppercase block mb-2">
              6. Hazard Progress
            </span>
            <HazardProgress value={4} max={6} className="my-2" />
            <span className="text-[10px] font-mono text-bone/50">STEP 4 OF 6</span>
          </div>
        </div>
      </section>

      {/* 4. Progress Stepper */}
      <section className="bg-ink-2 p-6 border border-bone/15 rounded-sm">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-wild-orange uppercase tracking-wider mb-4">
          4. 6-Step Participant Journey Track
        </h2>
        <StepTrack currentStep={2} />
      </section>
    </div>
  );
}
