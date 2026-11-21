"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChamferedCard } from "@/components/brand/ChamferedCard";
import { BarcodeSticker } from "@/components/brand/BarcodeSticker";
import { CornerBrackets } from "@/components/brand/CornerBrackets";
import { copy } from "@/content/copy";
import { Trophy, Ticket } from "lucide-react";

export function Prizes() {
  const reduced = useReducedMotion();

  return (
    <section className="py-12 md:py-16 px-4 bg-ink border-b border-bone/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange uppercase tracking-[0.3em] font-bold block mb-2">
            REAL REWARDS
          </span>
          <motion.h2
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-bone"
            initial={reduced ? {} : { y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            {copy.prizes.title}
          </motion.h2>
          <p className="font-[family-name:var(--font-body)] text-bone/60 text-xs sm:text-sm md:text-base mt-2 max-w-lg mx-auto">
            From on-ground perfume rewards to your personalized digital rap identity.
          </p>
        </div>

        {/* 2 Prize Cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {/* Card 1: Game Winners */}
          <motion.div
            initial={reduced ? {} : { y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ChamferedCard variant="orange" withCrosshair size="lg" className="h-full flex flex-col justify-between">
              <div>
                <Trophy className="w-8 h-8 text-ink mb-3" strokeWidth={2.5} />
                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-ink uppercase tracking-wider mb-2 font-black">
                  GAME WINNERS GET PERFUMES
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm md:text-base text-ink font-medium leading-relaxed">
                  Win head-to-head Rap Court, Roast That Rapper, or music trivia battles to take home Wild Stone perfumes directly at the activation arena.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-ink/30 flex justify-between items-center text-xs font-[family-name:var(--font-label)] text-ink font-black">
                <span>ON-SPOT STAGE HANDOVER</span>
                <span>#WILDPERFUME</span>
              </div>
            </ChamferedCard>
          </motion.div>

          {/* Card 2: Every Participant */}
          <motion.div
            initial={reduced ? {} : { y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ChamferedCard variant="bone" withCrosshair size="lg" className="h-full flex flex-col justify-between">
              <div>
                <Ticket className="w-8 h-8 text-wild-orange mb-3" strokeWidth={2.5} />
                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-ink uppercase tracking-wider mb-2 font-black">
                  EVERY REGISTRANT GETS A PASS &amp; CARD
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm md:text-base text-ink font-medium leading-relaxed">
                  Lock in guaranteed entry with your QR pass, plus download your personalized 9:16 Rap Name Card with a special Wild Stone promotional perk.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-ink/20 flex justify-between items-center text-xs font-[family-name:var(--font-label)] text-ink font-black">
                <span>POST-EVENT STORY ASSET</span>
                <span>STREET PROOF</span>
              </div>
            </ChamferedCard>
          </motion.div>
        </div>

        {/* 9:16 Rap Name Card Preview Section */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange uppercase tracking-[0.2em] font-bold">
              STORY ASSET PREVIEW • 9:16 INSTAGRAM STORY FORMAT
            </span>
            <span className="text-[10px] font-[family-name:var(--font-label)] bg-bone/10 text-bone/60 px-2 py-0.5 rounded-xs">
              SAMPLE
            </span>
          </div>
        </div>

        <motion.div
          className="max-w-[320px] mx-auto"
          initial={reduced ? {} : { scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <CornerBrackets bracketSize={20} color="#F0410C" padding={8} className="w-full">
            {/* Vibrant Bone 9:16 Instagram Story Card */}
            <div className="bg-bone text-ink p-6 clip-chamfer border-2 border-ink shadow-[6px_6px_0px_#F0410C] flex flex-col justify-between min-h-[500px]">
              {/* Card Header */}
              <div>
                <div className="flex justify-between items-center pb-3 border-b-2 border-ink mb-4">
                  <div className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/wild-hai-bro-logo.jpg"
                      alt="Wild Hai Bro"
                      className="w-7 h-7 object-contain rounded-xs border border-ink"
                    />
                    <span className="font-[family-name:var(--font-display)] text-xs font-black tracking-wider">
                      WILD HAI BRO
                    </span>
                  </div>
                  <span className="text-[10px] font-[family-name:var(--font-label)] font-black bg-wild-orange text-ink px-2 py-0.5 uppercase tracking-wider">
                    STORY PASS
                  </span>
                </div>

                {/* Rap Name Reveal */}
                <div className="text-center my-4">
                  <span className="font-[family-name:var(--font-label)] text-[11px] font-black uppercase tracking-[0.25em] text-wild-orange block mb-1">
                    YOUR CYPHER IDENTITY
                  </span>
                  <h4 className="font-[family-name:var(--font-display)] text-4xl text-ink font-black tracking-tight leading-none">
                    MC HYDRA
                  </h4>
                  <span className="text-[10px] font-[family-name:var(--font-label)] text-ink/60 uppercase tracking-widest mt-1 block">
                    KOLKATA CAMPUS CYPHER 2027
                  </span>
                </div>

                {/* Details Table - Wide labels so "Most-Played:" doesn't wrap */}
                <div className="bg-white border-2 border-ink p-3 my-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-label)] font-bold text-ink/70 uppercase text-[11px]">
                      Signature Scent:
                    </span>
                    <span className="font-[family-name:var(--font-label)] font-black text-wild-orange uppercase text-[12px]">
                      Hydra Energy
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-ink/10 pt-2">
                    <span className="font-[family-name:var(--font-label)] font-bold text-ink/70 uppercase text-[11px]">
                      Most-Played:
                    </span>
                    <span className="font-[family-name:var(--font-label)] font-black text-ink uppercase text-[11px]">
                      MC Stan / Seedhe Maut
                    </span>
                  </div>
                </div>

                {/* Promotional Coupon Box with Placeholder Chip */}
                <div className="bg-wild-orange/15 border-2 border-dashed border-wild-orange p-2.5 text-center my-3">
                  <div className="flex items-center justify-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-[family-name:var(--font-label)] font-bold text-ink uppercase">
                      SPECIAL FEST COUPON
                    </span>
                    <span className="text-[9px] font-[family-name:var(--font-label)] bg-ink text-bone px-1.5 py-0.2 rounded-xs font-bold">
                      PLACEHOLDER
                    </span>
                  </div>
                  <span className="font-[family-name:var(--font-label)] text-lg font-black text-ink tracking-widest block">
                    QEPRTX
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t-2 border-ink flex justify-between items-center text-[10px] font-[family-name:var(--font-label)] font-bold">
                <BarcodeSticker label="HYDRA" className="text-ink" />
                <div className="text-right">
                  <span className="block text-ink/60">TAG TO GET FEATURED</span>
                  <span className="text-wild-orange font-black">@WILDHAIBRO</span>
                </div>
              </div>
            </div>
          </CornerBrackets>
        </motion.div>
      </div>
    </section>
  );
}
