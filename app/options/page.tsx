"use client";

import { useState } from "react";
import Link from "next/link";
import { TicketStubForm } from "@/components/forms/TicketStubForm";
import { CypherFlowForm } from "@/components/forms/CypherFlowForm";
import { RapNameDropForm } from "@/components/forms/RapNameDropForm";
import { SubmissionForm } from "@/components/forms/SubmissionForm";
import { HazardStripes } from "@/components/brand/HazardStripes";
import { CornerBrackets } from "@/components/brand/CornerBrackets";
import { Check, AlertTriangle } from "lucide-react";

type Mode = "registration" | "submission";
type ActiveTab = "a" | "b" | "c";

const optionDetails = {
  a: {
    id: "a",
    name: "Option A: The Ticket Stub",
    subtitle: "Single-page entry slip with perforated tear-off feel",
    feel: "Fast, familiar, grounded in gig culture",
    bestFor: "Highest completion on slow campus networks (2G/3G); easiest for booth volunteers to explain",
    pros: [
      "100% fields visible immediately — zero surprise steps",
      "Fastest completion time (< 45 seconds)",
      "Low cognitive load; works seamlessly on budget Android phones",
    ],
    cons: [
      "Least theatrical or game-like presentation",
      "Looks more like a registration than a rap battle entry",
      "Doesn't showcase product discovery before pass issue",
    ],
  },
  b: {
    id: "b",
    name: "Option B: The Cypher Flow",
    subtitle: "One question per screen full-bleed conversational journey",
    feel: "Conversational, immersive, like a rap battle round",
    bestFor: "High engagement, story-like feel, students opening links from Instagram DMs",
    pros: [
      "Massive Zen Dots display headlines; high brand presence",
      "Progressive disclosure keeps keyboard focused on one input",
      "Interactive hazard-stripe progress feedback",
    ],
    cons: [
      "Takes slightly longer to tap through 6 screens",
      "Requires back-navigation if user wants to change an earlier field",
      "Higher bounce rate if network stutters between steps",
    ],
  },
  c: {
    id: "c",
    name: "Option C: The Rap Name Drop",
    subtitle: "Two-screen flow: details + live generative rap persona & coupon",
    feel: "Playful, shareable, directly connects fragrance to persona",
    bestFor: "Organic social sharing; making the pass itself a piece of story content",
    pros: [
      "Directly implements deck's 'What's Your Rap Name?' concept",
      "Instant product discovery: forces user to explore 5 scents",
      "The issued pass carries higher flex value for IG stories",
    ],
    cons: [
      "Needs approved artist and fragrance lists",
      "Extra decision step (choosing scent & artist) adds ~15s",
      "Slightly higher UI density on Screen 2",
    ],
  },
};

export default function OptionsPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("a");
  const [mode, setMode] = useState<Mode>("registration");

  return (
    <div className="min-h-screen bg-ink text-bone p-4 md:p-8">
      {/* Top Header */}
      <header className="max-w-7xl mx-auto mb-8 border-b border-bone/20 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link
              href="/"
              className="text-xs font-[family-name:var(--font-label)] text-wild-orange hover:underline font-bold"
            >
              ← BACK TO MICROSITE
            </Link>
            <span className="text-bone/40">•</span>
            <span className="text-xs font-[family-name:var(--font-label)] text-bone/60 uppercase">
              INTERNAL REVIEW MODE
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-bone">
            FORM FORMATS REVIEW GALLERY
          </h1>
          <p className="font-[family-name:var(--font-body)] text-xs sm:text-sm text-bone/60 mt-1 max-w-2xl">
            Review prototypes for Nilesh and client meeting. All three options share the exact same Zod validation,
            database schema, and fields. Whichever is approved can ship without code rework.
          </p>
        </div>

        {/* Mode Toggle: Registration vs Submission */}
        <div className="bg-ink-2 border border-bone/25 p-1 rounded-sm flex items-center gap-1 self-stretch md:self-auto">
          <button
            onClick={() => setMode("registration")}
            className={`flex-1 md:flex-none px-4 py-2 text-xs font-[family-name:var(--font-label)] uppercase font-bold rounded-xs transition-all ${
              mode === "registration"
                ? "bg-wild-orange text-ink shadow"
                : "text-bone/60 hover:text-bone"
            }`}
          >
            1. Registration Form
          </button>
          <button
            onClick={() => setMode("submission")}
            className={`flex-1 md:flex-none px-4 py-2 text-xs font-[family-name:var(--font-label)] uppercase font-bold rounded-xs transition-all ${
              mode === "submission"
                ? "bg-wild-orange text-ink shadow"
                : "text-bone/60 hover:text-bone"
            }`}
          >
            2. Post-Event Submission
          </button>
        </div>
      </header>

      {/* Tab Switcher for Mobile / Desktop selection */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="grid grid-cols-3 gap-2 bg-ink-2 p-1.5 border border-bone/20 rounded-sm">
          {[
            { id: "a", title: "A. THE TICKET STUB", badge: "Highest Conversion" },
            { id: "b", title: "B. THE CYPHER FLOW", badge: "Story Experience" },
            { id: "c", title: "C. THE RAP NAME DROP", badge: "Viral Discovery" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ActiveTab)}
              className={`p-3 text-left transition-all rounded-xs ${
                activeTab === tab.id
                  ? "bg-bone text-ink shadow-[2px_2px_0px_#F0410C]"
                  : "text-bone/70 hover:bg-bone/5"
              }`}
            >
              <span className="block font-[family-name:var(--font-label)] text-xs sm:text-sm font-bold uppercase">
                {tab.title}
              </span>
              <span className={`text-[10px] uppercase font-mono ${
                activeTab === tab.id ? "text-wild-orange font-bold" : "text-bone/40"
              }`}>
                {tab.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Review Section: Phone Mockup Frame + Pros/Cons Analysis */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: Phone Simulator Frame (360px-400px responsive) */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full max-w-[420px] bg-ink-2 border-4 border-bone/30 rounded-[36px] p-4 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
            {/* Phone Notch / Dynamic Island */}
            <div className="w-28 h-4 bg-ink rounded-full mx-auto mb-4 border border-bone/10" />

            {/* Phone Screen Container */}
            <div className="min-h-[580px] max-h-[700px] overflow-y-auto no-scrollbar rounded-[20px] bg-ink p-2">
              {mode === "registration" ? (
                <>
                  {activeTab === "a" && <TicketStubForm isDemo={true} />}
                  {activeTab === "b" && <CypherFlowForm isDemo={true} />}
                  {activeTab === "c" && <RapNameDropForm isDemo={true} />}
                </>
              ) : (
                <SubmissionForm isDemo={true} />
              )}
            </div>

            {/* Phone Home Bar */}
            <div className="w-24 h-1 bg-bone/30 rounded-full mx-auto mt-4" />
          </div>

          <p className="text-[11px] font-[family-name:var(--font-body)] text-bone/50 mt-3 text-center">
            Interactive live demo in 375px mobile viewport frame. You can type and advance steps.
          </p>
        </div>

        {/* Right: Architectural Trade-off Breakdown */}
        <div className="lg:col-span-6 space-y-6">
          <CornerBrackets bracketSize={20} color="#F0410C" padding={12} className="w-full">
            <div className="bg-ink-2 border border-bone/20 p-6 rounded-sm">
              <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange uppercase tracking-[0.2em] font-bold block mb-1">
                EXECUTIVE SUMMARY
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-bone mb-2">
                {optionDetails[activeTab].name}
              </h2>
              <p className="font-[family-name:var(--font-body)] text-sm text-bone/70 mb-4">
                {optionDetails[activeTab].subtitle}
              </p>

              <div className="p-3 bg-ink border border-bone/10 rounded-sm mb-4 space-y-1 text-xs font-[family-name:var(--font-body)]">
                <p><strong className="text-bone font-[family-name:var(--font-label)]">BRAND FEEL:</strong> <span className="text-bone/80">{optionDetails[activeTab].feel}</span></p>
                <p><strong className="text-wild-orange font-[family-name:var(--font-label)]">BEST FOR:</strong> <span className="text-bone/80">{optionDetails[activeTab].bestFor}</span></p>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h3 className="font-[family-name:var(--font-label)] text-xs uppercase tracking-wider text-green-400 font-bold mb-2 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-green-400" /> ADVANTAGES (PROS)
                </h3>
                <ul className="space-y-1.5 text-xs font-[family-name:var(--font-body)] text-bone/80">
                  {optionDetails[activeTab].pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-400 font-bold">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-label)] text-xs uppercase tracking-wider text-logo-red font-bold mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-logo-red" /> TRADE-OFFS (CONS)
                </h3>
                <ul className="space-y-1.5 text-xs font-[family-name:var(--font-body)] text-bone/70">
                  {optionDetails[activeTab].cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-logo-red font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* One-click Variant activation link */}
              <div className="pt-4 border-t border-bone/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] font-[family-name:var(--font-body)] text-bone/50">
                  To set this as the default live form on the main site:
                </span>
                <Link
                  href={`/?variant=${activeTab}#register`}
                  className="bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold text-xs uppercase px-4 py-2 clip-chamfer-sm hover:brightness-110 whitespace-nowrap"
                >
                  Test on Main Site (?variant={activeTab}) ➔
                </Link>
              </div>
            </div>
          </CornerBrackets>

          {/* Static Mockup Links Box */}
          <div className="bg-ink-2 border border-bone/15 p-5 rounded-sm">
            <h4 className="font-[family-name:var(--font-label)] text-xs uppercase tracking-wider text-bone font-bold mb-3">
              QUICK AUDIT LINKS (PHASE 1 DELIVERABLES):
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-[family-name:var(--font-label)]">
              <Link href="/pass/demo-token" className="p-2.5 bg-ink border border-bone/10 hover:border-wild-orange text-bone/80 hover:text-wild-orange block">
                [01] Gig Ticket Pass (/pass/[token]) ➔
              </Link>
              <Link href="/s/demo-token" className="p-2.5 bg-ink border border-bone/10 hover:border-wild-orange text-bone/80 hover:text-wild-orange block">
                [02] Submission Portal (/s/[token]) ➔
              </Link>
              <Link href="/s/demo-token/done" className="p-2.5 bg-ink border border-bone/10 hover:border-wild-orange text-bone/80 hover:text-wild-orange block">
                [03] Done / Certified (/s/[token]/done) ➔
              </Link>
              <Link href="/styleguide" className="p-2.5 bg-ink border border-bone/10 hover:border-wild-orange text-bone/80 hover:text-wild-orange block">
                [04] Design Styleguide (/styleguide) ➔
              </Link>
            </div>
          </div>
        </div>
      </div>

      <HazardStripes className="my-12 max-w-xl mx-auto" />
    </div>
  );
}


