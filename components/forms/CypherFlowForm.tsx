"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { kolkataColleges, formatEventDate } from "@/config/event";
import { HazardProgress } from "@/components/brand/HazardStripes";
import { CornerBrackets } from "@/components/brand/CornerBrackets";
import { Mic, ArrowRight } from "lucide-react";

type CypherFlowProps = {
  isDemo?: boolean;
  onSuccess?: (data: any) => void;
};

export function CypherFlowForm({ isDemo = true, onSuccess }: CypherFlowProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    collegeId: "",
    yearOfStudy: "",
    instagramHandle: "",
    goatRapper: "",
    consentTerms: false,
    consentMarketing: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [isDone, setIsDone] = useState(false);

  const totalSteps = 6;

  const nextStep = () => {
    setError(null);
    if (step === 0 && (!formData.fullName || formData.fullName.trim().length < 2)) {
      setError("Enter your full name.");
      return;
    }
    if (step === 1 && (!formData.email || !formData.email.includes("@"))) {
      setError("Enter a valid email to receive your pass.");
      return;
    }
    if (step === 2 && (!formData.phone || formData.phone.length !== 10)) {
      setError("Enter your 10-digit mobile number.");
      return;
    }
    if (step === 3 && !formData.collegeId) {
      setError("Select your campus to continue.");
      return;
    }
    if (step === 4 && (!formData.instagramHandle || formData.instagramHandle.trim().length < 2)) {
      setError("We need your Instagram handle to verify your stories.");
      return;
    }
    if (step === 5 && !formData.consentTerms) {
      setError("Please accept the terms to generate your pass.");
      return;
    }

    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setIsDone(true);
      if (onSuccess) onSuccess(formData);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setError(null);
      setStep(step - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextStep();
    }
  };

  if (isDone) {
    return (
      <div className="bg-ink border-2 border-wild-orange p-8 text-center max-w-md mx-auto text-bone rounded-sm">
        <Mic className="w-10 h-10 text-wild-orange mx-auto mb-3" strokeWidth={2} />
        <h3 className="font-[family-name:var(--font-display)] text-3xl text-wild-orange mb-2">
          PASS MIL GAYA!
        </h3>
        <p className="font-[family-name:var(--font-body)] text-sm text-bone/70 mb-4">
          Yo {formData.fullName}, your pass has been generated. Check your WhatsApp &amp; Email!
        </p>
        <div className="p-3 bg-ink-2 border border-bone/20 font-mono text-xs text-left mb-6">
          <p className="text-wild-orange font-bold">TOKEN: PASS_CYPHER_990</p>
          <p>CAMPUS: {kolkataColleges.find((c) => c.id === formData.collegeId)?.collegeName}</p>
        </div>
        <a
          href="/pass/demo-token"
          className="inline-block w-full bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold py-3 uppercase text-xs"
        >
          Open Pass Link ↗
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-ink-2 border border-bone/20 p-6 sm:p-10 clip-chamfer shadow-[0_0_30px_rgba(240,65,12,0.15)] relative">
      {/* Header bar */}
      <div className="flex justify-between items-center mb-6 pb-3 border-b border-bone/10">
        <div>
          <span className="font-[family-name:var(--font-label)] text-[10px] bg-wild-orange text-ink font-bold px-2 py-0.5 uppercase tracking-widest">
            OPTION B • THE CYPHER FLOW
          </span>
          <span className="text-xs font-[family-name:var(--font-label)] text-bone/50 ml-2">
            ROUND {step + 1} OF {totalSteps}
          </span>
        </div>
        {step > 0 && (
          <button
            onClick={prevStep}
            className="text-xs font-[family-name:var(--font-label)] text-bone/60 hover:text-wild-orange underline"
          >
            ← Back
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <HazardProgress value={step + 1} max={totalSteps} className="mb-8" />

      {/* Step Questions */}
      <div className="min-h-[220px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <label className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-bone block mb-3">
                WHO&apos;S ENTERING THE CYPHER?
              </label>
              <p className="font-[family-name:var(--font-body)] text-xs text-bone/60 mb-4">
                Enter your full legal name as per your student ID card.
              </p>
              <input
                autoFocus
                type="text"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                onKeyDown={handleKeyDown}
                className="w-full bg-ink border-2 border-bone/30 focus:border-wild-orange text-bone font-[family-name:var(--font-label)] text-xl p-3 outline-none"
              />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <label className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-bone block mb-3">
                WHERE DO WE SEND YOUR PASS?
              </label>
              <p className="font-[family-name:var(--font-body)] text-xs text-bone/60 mb-4">
                We&apos;ll email your high-res QR ticket and calendar invite.
              </p>
              <input
                autoFocus
                type="email"
                placeholder="name@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onKeyDown={handleKeyDown}
                className="w-full bg-ink border-2 border-bone/30 focus:border-wild-orange text-bone font-[family-name:var(--font-label)] text-xl p-3 outline-none"
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <label className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-bone block mb-3">
                DROP YOUR WHATSAPP NUMBER
              </label>
              <p className="font-[family-name:var(--font-body)] text-xs text-bone/60 mb-4">
                For pass backup and instant fest reminders (+91).
              </p>
              <div className="flex">
                <span className="bg-ink border-2 border-r-0 border-bone/30 text-bone/60 font-[family-name:var(--font-label)] text-lg px-3 flex items-center">
                  +91
                </span>
                <input
                  autoFocus
                  type="tel"
                  maxLength={10}
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-ink border-2 border-bone/30 focus:border-wild-orange text-bone font-[family-name:var(--font-label)] text-xl p-3 outline-none"
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <label className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-bone block mb-3">
                WHICH KOLKATA CAMPUS?
              </label>
              <p className="font-[family-name:var(--font-body)] text-xs text-bone/60 mb-4">
                Pick where you&apos;ll be showing up to claim your game spot.
              </p>
              <select
                value={formData.collegeId}
                onChange={(e) => setFormData({ ...formData, collegeId: e.target.value })}
                className="w-full bg-ink border-2 border-bone/30 focus:border-wild-orange text-bone font-[family-name:var(--font-label)] text-base p-3 outline-none cursor-pointer"
              >
                <option value="" disabled className="text-bone/40">
                  Select your college
                </option>
                {kolkataColleges.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.collegeName} — {formatEventDate(c.startsAt)}
                  </option>
                ))}
              </select>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <label className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-bone block mb-3">
                WHAT&apos;S YOUR INSTAGRAM?
              </label>
              <p className="font-[family-name:var(--font-body)] text-xs text-bone/60 mb-4">
                Needed to verify your stories and tag you in winner announcements.
              </p>
              <div className="flex">
                <span className="bg-ink border-2 border-r-0 border-bone/30 text-wild-orange font-[family-name:var(--font-label)] text-lg px-3 flex items-center">
                  @
                </span>
                <input
                  autoFocus
                  type="text"
                  placeholder="yourhandle"
                  value={formData.instagramHandle}
                  onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-ink border-2 border-bone/30 focus:border-wild-orange text-bone font-[family-name:var(--font-label)] text-xl p-3 outline-none"
                />
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <label className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-bone block mb-3">
                WHO&apos;S YOUR GOAT RAPPER?
              </label>
              <p className="font-[family-name:var(--font-body)] text-xs text-bone/60 mb-4">
                Optional — will inspire your custom rap identity.
              </p>
              <input
                autoFocus
                type="text"
                placeholder="e.g. Seedhe Maut, MC Stan, DIVINE..."
                value={formData.goatRapper}
                onChange={(e) => setFormData({ ...formData, goatRapper: e.target.value })}
                onKeyDown={handleKeyDown}
                className="w-full bg-ink border-2 border-bone/30 focus:border-wild-orange text-bone font-[family-name:var(--font-label)] text-xl p-3 outline-none mb-4"
              />
              <label className="flex items-center gap-2 text-xs text-bone/70 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consentTerms}
                  onChange={(e) => setFormData({ ...formData, consentTerms: e.target.checked })}
                  className="accent-wild-orange"
                />
                <span>I confirm I am 18+ and accept terms.</span>
              </label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && (
        <p className="text-logo-red text-xs font-[family-name:var(--font-label)] mt-3 font-bold animate-[shake_0.3s_ease-in-out]">
          {error}
        </p>
      )}

      {/* Advance button */}
      <div className="mt-8 pt-4 border-t border-bone/10 flex justify-between items-center">
        <span className="text-[11px] font-[family-name:var(--font-label)] text-bone/40">
          Press [ENTER ↵] or tap Continue
        </span>
        <button
          onClick={nextStep}
          className="bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold px-6 py-2.5 text-sm uppercase tracking-wider clip-chamfer-sm hover:brightness-110 active:translate-x-0.5 transition-all"
        >
          {step === totalSteps - 1 ? "LOCK IT IN ➔" : "CONTINUE ➔"}
        </button>
      </div>
    </div>
  );
}
