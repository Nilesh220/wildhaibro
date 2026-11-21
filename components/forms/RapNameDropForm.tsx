"use client";

import { useState } from "react";
import { kolkataColleges, formatEventDate, generateRapName, eventConfig } from "@/config/event";
import { CornerBrackets } from "@/components/brand/CornerBrackets";
import { BarcodeSticker } from "@/components/brand/BarcodeSticker";

type RapNameDropProps = {
  isDemo?: boolean;
  onSuccess?: (data: any) => void;
};

const topArtists = [
  "MC Stan",
  "Seedhe Maut",
  "DIVINE",
  "KR$NA",
  "Raftaar",
  "Badshah",
  "Travis Scott",
  "Kendrick Lamar",
];

export function RapNameDropForm({ isDemo = true, onSuccess }: RapNameDropProps) {
  const [screen, setScreen] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    collegeId: "",
    yearOfStudy: "",
    instagramHandle: "",
    fragrancePick: "hydra-energy",
    artistPick: "MC Stan",
    consentTerms: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [isGenerated, setIsGenerated] = useState(false);

  const generatedName = generateRapName(formData.fragrancePick, formData.artistPick);

  const handleNextToScreen2 = () => {
    setError(null);
    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      setError("Enter your full name.");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Enter a valid email.");
      return;
    }
    if (formData.phone.length !== 10) {
      setError("Enter a 10-digit mobile number.");
      return;
    }
    if (!formData.collegeId) {
      setError("Select your campus to continue.");
      return;
    }
    if (!formData.instagramHandle.trim()) {
      setError("Enter your Instagram handle.");
      return;
    }
    setScreen(2);
  };

  const handleFinish = () => {
    setIsGenerated(true);
    if (onSuccess) onSuccess({ ...formData, generatedRapName: generatedName });
  };

  if (isGenerated) {
    return (
      <div className="max-w-md mx-auto text-center">
        <CornerBrackets bracketSize={24} color="#F0410C" padding={12} className="w-full">
          <div className="bg-ink border border-bone/20 p-6 clip-chamfer shadow-[0_0_35px_rgba(240,65,12,0.3)]">
            <span className="text-xs font-[family-name:var(--font-label)] text-wild-orange uppercase tracking-[0.25em] font-bold block mb-1">
              OFFICIAL PASS ISSUED IN YOUR RAP NAME:
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-4xl text-bone mb-3">
              {generatedName}
            </h3>
            <p className="font-[family-name:var(--font-body)] text-xs text-bone/60 mb-4">
              Real Name: {formData.fullName} • College: {kolkataColleges.find((c) => c.id === formData.collegeId)?.collegeName}
            </p>

            <div className="bg-ink-2 p-3 border border-bone/10 text-left text-xs space-y-1 mb-4 font-[family-name:var(--font-body)]">
              <p><strong className="text-wild-orange font-[family-name:var(--font-label)]">SCENT:</strong> Wild Stone {formData.fragrancePick.toUpperCase()}</p>
              <p><strong className="text-wild-orange font-[family-name:var(--font-label)]">ARTIST VIBE:</strong> {formData.artistPick}</p>
              <p><strong className="text-wild-orange font-[family-name:var(--font-label)]">COUPON:</strong> WILD15-RAPDROP</p>
            </div>

            <div className="flex justify-between items-center mb-6">
              <BarcodeSticker label={formData.fragrancePick.toUpperCase()} className="text-bone/50" />
              <span className="text-[11px] font-[family-name:var(--font-label)] text-bone/40">READY FOR STORIES</span>
            </div>

            <a
              href="/pass/demo-token"
              className="inline-block w-full bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold py-3 uppercase text-xs tracking-wider"
            >
              Open Full Rap Pass ↗
            </a>
          </div>
        </CornerBrackets>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-ink border border-bone/20 p-6 sm:p-8 clip-chamfer relative shadow-[6px_6px_0px_#E4E1D8]">
      {/* Header */}
      <div className="flex justify-between items-center mb-5 pb-3 border-b border-bone/15">
        <div>
          <span className="font-[family-name:var(--font-label)] text-[10px] bg-wild-orange text-ink font-bold px-2 py-0.5 uppercase tracking-widest">
            OPTION C • RAP NAME DROP
          </span>
          <span className="text-xs font-[family-name:var(--font-label)] text-bone/50 ml-2">
            SCREEN {screen} OF 2
          </span>
        </div>
        {screen === 2 && (
          <button
            onClick={() => setScreen(1)}
            className="text-xs font-[family-name:var(--font-label)] text-bone/60 hover:text-wild-orange underline"
          >
            ← Edit Details
          </button>
        )}
      </div>

      {screen === 1 ? (
        <div className="space-y-4">
          <h3 className="font-[family-name:var(--font-display)] text-2xl text-bone">
            STEP 1: YOUR PARTICIPANT DETAILS
          </h3>
          <p className="font-[family-name:var(--font-body)] text-xs text-bone/60">
            Next, we&apos;ll generate your custom rap persona &amp; coupon card.
          </p>

          <div>
            <label className="block text-xs font-[family-name:var(--font-label)] uppercase text-bone/80 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Roy"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-ink-2 border border-bone/20 px-3 py-2 text-sm text-bone focus:border-wild-orange outline-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-[family-name:var(--font-label)] uppercase text-bone/80 mb-1">
                Email *
              </label>
              <input
                type="email"
                placeholder="rahul@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-ink-2 border border-bone/20 px-3 py-2 text-sm text-bone focus:border-wild-orange outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-[family-name:var(--font-label)] uppercase text-bone/80 mb-1">
                WhatsApp (+91) *
              </label>
              <input
                type="tel"
                maxLength={10}
                placeholder="9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-ink-2 border border-bone/20 px-3 py-2 text-sm text-bone focus:border-wild-orange outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-[family-name:var(--font-label)] uppercase text-bone/80 mb-1">
              Campus *
            </label>
            <select
              value={formData.collegeId}
              onChange={(e) => setFormData({ ...formData, collegeId: e.target.value })}
              className="w-full bg-ink-2 border border-bone/20 px-3 py-2 text-sm text-bone focus:border-wild-orange outline-none cursor-pointer"
            >
              <option value="" disabled className="text-bone/40">
                Select your college
              </option>
              {kolkataColleges.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.collegeName} ({formatEventDate(c.startsAt)})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-[family-name:var(--font-label)] uppercase text-bone/80 mb-1">
              Instagram Handle *
            </label>
            <div className="flex">
              <span className="bg-ink-2 border border-r-0 border-bone/20 text-wild-orange px-3 flex items-center text-sm font-bold">
                @
              </span>
              <input
                type="text"
                placeholder="rahul_beats"
                value={formData.instagramHandle}
                onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                className="w-full bg-ink-2 border border-bone/20 px-3 py-2 text-sm text-bone focus:border-wild-orange outline-none"
              />
            </div>
          </div>

          {error && <p className="text-logo-red text-xs font-bold">{error}</p>}

          <button
            onClick={handleNextToScreen2}
            className="w-full bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold py-3 text-sm uppercase tracking-wider clip-chamfer-sm hover:brightness-110 transition-all mt-4"
          >
            NEXT: GENERATE RAP NAME ➔
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-bone">
              STEP 2: WHAT&apos;S YOUR RAP NAME?
            </h3>
            <p className="font-[family-name:var(--font-body)] text-xs text-bone/60 mt-1">
              Pick your fragrance vibe and your most-played artist. We fuse them into your official fest identity.
            </p>
          </div>

          {/* Fragrance Picker */}
          <div>
            <label className="block text-xs font-[family-name:var(--font-label)] uppercase text-bone/80 mb-2 font-bold">
              1. Choose your Wild Stone fragrance:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {eventConfig.products.map((p) => {
                const isSelected = formData.fragrancePick === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, fragrancePick: p.id })}
                    className={`p-2.5 text-center border transition-all rounded-xs ${
                      isSelected
                        ? "border-wild-orange bg-wild-orange/20 shadow-[0_0_15px_rgba(240,65,12,0.4)]"
                        : "border-bone/15 bg-ink-2 hover:border-bone/40"
                    }`}
                  >
                    <div
                      className="w-4 h-8 mx-auto mb-1.5 rounded-t-sm"
                      style={{ backgroundColor: p.color }}
                    />
                    <span className="block text-[11px] font-[family-name:var(--font-label)] text-bone uppercase truncate font-bold">
                      {p.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Artist Picker */}
          <div>
            <label className="block text-xs font-[family-name:var(--font-label)] uppercase text-bone/80 mb-2 font-bold">
              2. Who is on repeat in your headphones?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {topArtists.map((artist) => {
                const isSelected = formData.artistPick === artist;
                return (
                  <button
                    key={artist}
                    type="button"
                    onClick={() => setFormData({ ...formData, artistPick: artist })}
                    className={`py-2 px-3 text-xs font-[family-name:var(--font-label)] uppercase truncate transition-all ${
                      isSelected
                        ? "bg-bone text-ink font-bold border-2 border-bone"
                        : "bg-ink-2 text-bone/70 border border-bone/15 hover:border-bone/40"
                    }`}
                  >
                    {artist}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Preview Box */}
          <div className="bg-wild-orange/15 border border-wild-orange p-3 text-center rounded-xs">
            <span className="text-[10px] font-[family-name:var(--font-label)] text-wild-orange uppercase tracking-wider block">
              LIVE PREVIEW • YOUR PERSONA
            </span>
            <span className="font-[family-name:var(--font-display)] text-2xl text-bone block mt-1">
              {generatedName}
            </span>
          </div>

          <button
            onClick={handleFinish}
            className="w-full bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold py-3.5 text-sm uppercase tracking-wider clip-chamfer-sm hover:brightness-110 transition-all shadow-[3px_3px_0px_#E4E1D8]"
          >
            ISSUE PASS AS &ldquo;{generatedName}&rdquo; ➔
          </button>
        </div>
      )}
    </div>
  );
}
