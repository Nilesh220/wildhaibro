"use client";

import { CornerBrackets } from "@/components/brand/CornerBrackets";
import { BarcodeSticker } from "@/components/brand/BarcodeSticker";
import { StepTrack } from "@/components/brand/StepTrack";
import { Download, Calendar } from "lucide-react";

type DigitalPassProps = {
  token?: string;
  passCode?: string;
  fullName?: string;
  rapName?: string;
  collegeName?: string;
  venue?: string;
  dateStr?: string;
  fragrance?: string;
  currentStep?: number;
};

export function DigitalPass({
  token = "wld_9921_x902",
  passCode = "WILD-882X",
  fullName = "Aryan Sen",
  rapName = "MC HYDRA",
  collegeName = "Jadavpur University",
  venue = "Main Auditorium Grounds",
  dateStr = "Fri, 15 Jan • 10 AM",
  fragrance = "Hydra Energy",
  currentStep = 1,
}: DigitalPassProps) {
  // Submission link URL encoded in the pass
  const appBaseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://wildstone.vigorspace.co";
  const submitUrl = `${appBaseUrl}/s/${token}`;

  return (
    <div className="max-w-md mx-auto">
      {/* 6-step progress bar */}
      <div className="mb-4 bg-ink-2/60 border border-bone/15 p-2 rounded-sm">
        <StepTrack currentStep={currentStep} />
      </div>

      {/* Main Gig Ticket Card */}
      <div className="bg-ink border-2 border-bone/25 rounded-md overflow-hidden shadow-[0_0_40px_rgba(240,65,12,0.25)] relative text-bone">
        {/* Top Header Bar */}
        <div className="bg-wild-orange text-ink px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wild-hai-bro-logo.jpg"
              alt="Wild Hai Bro"
              className="w-7 h-7 object-contain rounded-sm"
            />
            <span className="font-[family-name:var(--font-display)] text-xs tracking-wider font-bold">
              WILD HAI BRO
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wild-stone-logo.avif"
              alt="Wild Stone"
              className="h-3 w-auto object-contain brightness-0"
            />
            <span className="text-xs font-bold text-ink">×</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/vigor-launchpad-logo.png"
              alt="Vigor Launchpad"
              className="h-3.5 w-auto object-contain brightness-0"
            />
          </div>
        </div>

        {/* Main Ticket Body */}
        <div className="p-6">
          <div className="mb-5">
            <span className="text-[10px] font-[family-name:var(--font-label)] text-wild-orange uppercase tracking-[0.25em] font-bold block">
              OFFICIAL PARTICIPANT
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-bone mt-1 truncate">
              {rapName || fullName}
            </h2>
            {rapName && (
              <p className="text-xs font-[family-name:var(--font-body)] text-bone/60">
                Name: {fullName}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6 p-3 bg-ink-2 border border-bone/10 rounded-sm">
            <div>
              <span className="text-[9px] font-[family-name:var(--font-label)] text-bone/40 uppercase block">
                CAMPUS
              </span>
              <span className="text-xs font-[family-name:var(--font-label)] text-bone font-bold block truncate">
                {collegeName}
              </span>
            </div>
            <div>
              <span className="text-[9px] font-[family-name:var(--font-label)] text-bone/40 uppercase block">
                DATE &amp; TIME
              </span>
              <span className="text-xs font-[family-name:var(--font-label)] text-wild-orange font-bold block truncate">
                {dateStr}
              </span>
            </div>
            <div className="col-span-2 pt-2 border-t border-bone/10">
              <span className="text-[9px] font-[family-name:var(--font-label)] text-bone/40 uppercase block">
                VENUE
              </span>
              <span className="text-xs font-[family-name:var(--font-body)] text-bone/70 block truncate">
                {venue}
              </span>
            </div>
          </div>

          {/* QR Code Container on Bone Panel with Corner Brackets */}
          <div className="text-center my-6">
            <CornerBrackets bracketSize={20} color="#000000" padding={12} className="inline-block">
              <div className="bg-bone text-ink p-4 rounded-xs inline-flex flex-col items-center shadow-md">
                {/* Simulated high-contrast SVG QR */}
                <svg width="150" height="150" viewBox="0 0 100 100" className="text-ink">
                  {/* Position detection markers */}
                  <rect x="5" y="5" width="28" height="28" fill="currentColor" />
                  <rect x="9" y="9" width="20" height="20" fill="#E4E1D8" />
                  <rect x="13" y="13" width="12" height="12" fill="currentColor" />

                  <rect x="67" y="5" width="28" height="28" fill="currentColor" />
                  <rect x="71" y="9" width="20" height="20" fill="#E4E1D8" />
                  <rect x="75" y="13" width="12" height="12" fill="currentColor" />

                  <rect x="5" y="67" width="28" height="28" fill="currentColor" />
                  <rect x="9" y="71" width="20" height="20" fill="#E4E1D8" />
                  <rect x="13" y="75" width="12" height="12" fill="currentColor" />

                  {/* QR Data Grid Pattern */}
                  <rect x="38" y="10" width="5" height="5" fill="currentColor" />
                  <rect x="48" y="15" width="5" height="5" fill="currentColor" />
                  <rect x="38" y="25" width="5" height="5" fill="currentColor" />
                  <rect x="55" y="25" width="5" height="5" fill="currentColor" />
                  <rect x="15" y="40" width="5" height="5" fill="currentColor" />
                  <rect x="25" y="45" width="5" height="5" fill="currentColor" />
                  <rect x="40" y="40" width="10" height="10" fill="currentColor" />
                  <rect x="55" y="45" width="5" height="5" fill="currentColor" />
                  <rect x="70" y="40" width="5" height="5" fill="currentColor" />
                  <rect x="80" y="45" width="5" height="5" fill="currentColor" />
                  <rect x="38" y="60" width="5" height="5" fill="currentColor" />
                  <rect x="48" y="65" width="5" height="5" fill="currentColor" />
                  <rect x="40" y="75" width="5" height="5" fill="currentColor" />
                  <rect x="55" y="70" width="10" height="5" fill="currentColor" />
                  <rect x="75" y="65" width="5" height="5" fill="currentColor" />
                  <rect x="85" y="75" width="5" height="5" fill="currentColor" />
                  <rect x="70" y="85" width="5" height="5" fill="currentColor" />
                  <rect x="80" y="85" width="5" height="5" fill="currentColor" />
                </svg>
                <span className="text-[10px] font-mono font-bold tracking-widest text-ink mt-2">
                  PASS CODE: {passCode}
                </span>
              </div>
            </CornerBrackets>
            <p className="text-[11px] font-[family-name:var(--font-body)] text-bone/50 mt-2">
              Scan with phone camera or tap button below to unlock submission
            </p>
          </div>
        </div>

        {/* Perforated Tear-off line */}
        <div className="relative py-2 flex items-center justify-between border-t border-b border-dashed border-bone/30 bg-ink-2/50 px-4">
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0c0c0c]" />
          <span className="text-[9px] font-mono tracking-widest text-bone/40 uppercase">
            TEAR OR SCAN AT GATE
          </span>
          <span className="text-[9px] font-mono tracking-widest text-wild-orange font-bold uppercase">
            #WILDHAIBRO-KOL
          </span>
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0c0c0c]" />
        </div>

        {/* Perforated Stub Footer */}
        <div className="p-4 bg-ink flex justify-between items-center">
          <BarcodeSticker label="VALID ENTRY" className="text-bone/50" />
          <div className="text-right">
            <span className="text-[9px] font-[family-name:var(--font-label)] text-bone/40 uppercase block">
              PRODUCT RESERVED
            </span>
            <span className="text-xs font-[family-name:var(--font-label)] text-bone font-bold block">
              {fragrance}
            </span>
          </div>
        </div>
      </div>

      {/* Tap-to-open button (UX rule: cannot scan QR on own screen) */}
      <div className="mt-5 space-y-2">
        <a
          href={`/s/${token}`}
          className="w-full bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold py-3.5 px-4 text-center block uppercase text-xs tracking-wider clip-chamfer-sm hover:brightness-110 shadow-[3px_3px_0px_#000] min-h-[44px]"
        >
          OPEN MY SUBMISSION LINK ↗
        </a>
        <div className="flex gap-2">
          <button
            onClick={() => alert("Pass image downloaded to photos!")}
            className="flex-1 bg-ink-2 border border-bone/25 text-bone font-[family-name:var(--font-label)] text-xs py-2.5 rounded-xs hover:bg-bone/10 min-h-[40px] flex items-center justify-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-wild-orange" />
            <span>Save to Photos</span>
          </button>
          <button
            onClick={() => alert("Added to calendar (.ics)!")}
            className="flex-1 bg-ink-2 border border-bone/25 text-bone font-[family-name:var(--font-label)] text-xs py-2.5 rounded-xs hover:bg-bone/10 min-h-[40px] flex items-center justify-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-wild-orange" />
            <span>Add to Calendar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
