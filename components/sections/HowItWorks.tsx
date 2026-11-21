"use client";

import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/content/copy";
import { FileText, QrCode, Mic2, ScanLine, Camera, Award } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "PRE-BUZZ & REGISTER",
    desc: "Fill the 60-second form on this page or at a campus booth. Pick your college.",
    Icon: FileText,
    tag: "60 SEC",
  },
  {
    num: "02",
    title: "GET YOUR QR PASS",
    desc: "Instant branded pass sent to your email with your unique token & calendar invite.",
    Icon: QrCode,
    tag: "INSTANT",
  },
  {
    num: "03",
    title: "SHOW UP & POST STORIES",
    desc: "Hit the fan games, roast rappers, test your knowledge. Post Instagram stories tagging @wildhaibro.",
    Icon: Mic2,
    tag: "EVENT DAY",
  },
  {
    num: "04",
    title: "SCAN OR TAP YOUR QR",
    desc: "Post-event submission window unlocks. Tap the link in your pass or scan the QR poster at your campus.",
    Icon: ScanLine,
    tag: "UNLOCKED",
  },
  {
    num: "05",
    title: "DROP YOUR SCREENSHOTS",
    desc: "Upload 1-5 story screenshots and pick your favourite Wild Stone fragrance.",
    Icon: Camera,
    tag: "1-5 SHOTS",
  },
  {
    num: "06",
    title: "GET WILD CERTIFIED",
    desc: "Receive your Wild Certified badge, download your personalized Rap Name Card, and win perfumes.",
    Icon: Award,
    tag: "REWARD",
  },
];

export function HowItWorks() {
  const reduced = useReducedMotion();

  return (
    <section id="how-it-works" className="py-12 md:py-16 px-4 bg-ink border-b border-bone/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange uppercase tracking-[0.3em] font-bold block mb-2">
            THE 6-STEP PARTICIPANT FLOW
          </span>
          <motion.h2
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-bone"
            initial={reduced ? {} : { y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            {copy.howItWorks.title}
          </motion.h2>
          <p className="font-[family-name:var(--font-body)] text-bone/60 text-sm md:text-base mt-2 max-w-lg mx-auto">
            From online hype to campus cypher to perfume rewards — clean, fast, no confusion.
          </p>
        </div>

        {/* Connected 6-stop Track */}
        <div className="relative">
          {/* Desktop connecting hazard track line running behind cards */}
          <div
            className="hidden lg:block absolute left-4 right-4 top-1/2 -translate-y-1/2 h-2 pointer-events-none z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #F0410C 0, #F0410C 8px, #000 8px, #000 16px)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="bg-ink-2 border-2 border-bone/20 p-5 relative group hover:border-wild-orange transition-all clip-chamfer-sm shadow-[4px_4px_0px_rgba(240,65,12,0.15)] flex flex-col justify-between"
                initial={reduced ? {} : { y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                {/* Top bar with stop number & high-contrast chip */}
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-bone/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-wild-orange inline-block" />
                      <span className="font-[family-name:var(--font-display)] text-2xl text-wild-orange">
                        STOP {step.num}
                      </span>
                    </div>
                    {/* High contrast badge */}
                    <span className="text-[11px] font-[family-name:var(--font-label)] font-black px-2.5 py-0.5 bg-wild-orange text-ink uppercase tracking-wider rounded-xs shadow-xs">
                      {step.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xs bg-ink border border-bone/20 flex items-center justify-center text-wild-orange group-hover:bg-wild-orange group-hover:text-ink transition-colors">
                      <step.Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <h3 className="font-[family-name:var(--font-label)] text-sm sm:text-base text-bone font-bold uppercase tracking-wider">
                      {step.title}
                    </h3>
                  </div>

                  <p className="font-[family-name:var(--font-body)] text-xs sm:text-sm text-bone/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom track indicator */}
                <div className="mt-4 pt-2.5 border-t border-bone/10 flex items-center justify-between text-[10px] font-[family-name:var(--font-label)] text-bone/40">
                  <span>STAGE {i + 1} OF 6</span>
                  <span className="text-wild-orange group-hover:translate-x-1 transition-transform">NEXT STOP ➔</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
