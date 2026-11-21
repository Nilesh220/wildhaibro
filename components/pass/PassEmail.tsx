"use client";

import { CornerBrackets } from "@/components/brand/CornerBrackets";
import { BarcodeSticker } from "@/components/brand/BarcodeSticker";

export function PassEmailPreview() {
  return (
    <div className="max-w-xl mx-auto bg-black text-[#E4E1D8] font-sans p-6 rounded-md border border-neutral-800 shadow-2xl">
      {/* Email metadata header */}
      <div className="text-xs text-neutral-400 pb-4 mb-4 border-b border-neutral-800 flex justify-between">
        <div>
          <p><strong className="text-neutral-200">From:</strong> pass@wildhaibro.in</p>
          <p><strong className="text-neutral-200">Subject:</strong> Your Wild Hai Bro Kolkata Fest Pass is Here</p>
        </div>
        <span className="text-[10px] bg-neutral-900 border border-neutral-700 px-2 py-1 h-fit rounded text-neutral-300">
          React Email / Resend
        </span>
      </div>

      {/* Email Body Card */}
      <div className="bg-[#E4E1D8] text-black p-6 rounded-md">
        <div className="flex justify-between items-center pb-3 border-b border-black/20 mb-4">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wild-hai-bro-logo.jpg"
              alt="Wild Hai Bro"
              className="w-7 h-7 object-contain rounded"
            />
            <span className="font-bold text-sm tracking-widest text-[#F0410C]">
              WILD HAI BRO
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wild-stone-logo.avif"
              alt="Wild Stone"
              className="h-3.5 w-auto object-contain brightness-0"
            />
            <span className="text-xs font-bold text-black">×</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/vigor-launchpad-logo.png"
              alt="Vigor Launchpad"
              className="h-4 w-auto object-contain brightness-0"
            />
          </div>
        </div>

        <h2 className="text-2xl font-black mb-2 tracking-tight">
          YO ARYAN SEN, YOU&apos;RE IN THE CYPHER.
        </h2>
        <p className="text-xs text-black/80 mb-4 leading-relaxed">
          Your campus entry pass for <strong>Jadavpur University</strong> has been locked in.
          Show this QR code at the stall on event day to play games and claim your Wild Stone perfume.
        </p>

        {/* QR Block */}
        <div className="my-5 p-4 bg-black text-center rounded-sm">
          <div className="bg-[#E4E1D8] p-3 inline-block rounded">
            {/* SVG QR */}
            <svg width="120" height="120" viewBox="0 0 100 100" className="text-black">
              <rect x="5" y="5" width="28" height="28" fill="currentColor" />
              <rect x="9" y="9" width="20" height="20" fill="#E4E1D8" />
              <rect x="13" y="13" width="12" height="12" fill="currentColor" />
              <rect x="67" y="5" width="28" height="28" fill="currentColor" />
              <rect x="71" y="9" width="20" height="20" fill="#E4E1D8" />
              <rect x="75" y="13" width="12" height="12" fill="currentColor" />
              <rect x="5" y="67" width="28" height="28" fill="currentColor" />
              <rect x="9" y="71" width="20" height="20" fill="#E4E1D8" />
              <rect x="13" y="75" width="12" height="12" fill="currentColor" />
              <rect x="40" y="40" width="20" height="20" fill="currentColor" />
            </svg>
            <p className="font-mono text-[10px] font-bold text-black mt-1">PASS CODE: WILD-882X</p>
          </div>
          <p className="text-[11px] text-[#E4E1D8]/70 mt-2">
            Date: <strong>Fri, 15 Jan • 10:00 AM - 6:00 PM</strong><br />
            Venue: <strong>Main Auditorium Grounds</strong>
          </p>
        </div>

        {/* Big CTA */}
        <div className="text-center my-4">
          <a
            href="/pass/demo-token"
            className="inline-block bg-[#F0410C] text-black font-bold text-sm px-6 py-3 rounded uppercase tracking-wider shadow"
          >
            Open My Pass on Mobile ➔
          </a>
        </div>

        {/* Instructions */}
        <div className="bg-black/5 p-3 rounded text-xs text-black/75 space-y-1">
          <p><strong>What to do next:</strong></p>
          <p>1. Save the calendar invite attached (.ics) to your phone.</p>
          <p>2. Show up at the booth, roast a rapper, play playlist bingo.</p>
          <p>3. Post an IG story tagging <strong>@wildhaibro</strong> to qualify for perfumes.</p>
        </div>

        <div className="mt-5 pt-3 border-t border-black/15 flex justify-between items-center text-[10px] text-black/60">
          <span>Wild Stone × Vigor Launchpad</span>
          <span>pass_token: wld_9921_x902</span>
        </div>
      </div>
    </div>
  );
}
