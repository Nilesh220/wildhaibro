"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChamferedCard } from "@/components/brand/ChamferedCard";
import { BarcodeSticker } from "@/components/brand/BarcodeSticker";
import { ArrowBox } from "@/components/brand/ArrowBox";
import { copy } from "@/content/copy";

export function Manifesto() {
  const reduced = useReducedMotion();
  const { manifesto } = copy;

  return (
    <section className="relative py-12 md:py-16 px-4 bg-ink border-b border-bone/10">
      <div className="max-w-6xl mx-auto">
        {/* Asymmetrical Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-8">
          {/* Left Column: Authentic Campaign Photo + Headline Hook */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={reduced ? {} : { x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange uppercase tracking-[0.3em] font-bold block">
              THE MANIFESTO • DECK SLIDE 2
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-bone leading-tight">
              {manifesto.title}
            </h2>
            <p className="font-[family-name:var(--font-body)] text-sm text-bone/70 leading-relaxed">
              The larger population interacts with rap and hip-hop daily but doesn&apos;t perform on a mic.
              There is a massive difference between rap culture as performed by rappers and rap culture as experienced by fans.
            </p>

            {/* Campaign Photo from Slide 2 of the Deck */}
            <div className="relative rounded-sm overflow-hidden border border-bone/20 shadow-lg mt-4 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/campaign/page_2_1.jpg"
                alt="Wild Hai Bro Rap Cypher Host on Campus"
                className="w-full h-56 sm:h-64 object-cover object-top filter contrast-110 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-[family-name:var(--font-label)] text-bone">
                <span className="bg-wild-orange text-ink px-2 py-0.5 rounded-xs font-bold uppercase">CAMPUS ACTIVATION</span>
                <span className="text-bone/80">#WILDHAIBRO</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Comparative Cards */}
          <div className="lg:col-span-7 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Rappers side - dark card */}
              <motion.div
                initial={reduced ? {} : { y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <ChamferedCard variant="black" withCrosshair className="border border-bone/20 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-bone/10">
                      <h3 className="font-[family-name:var(--font-label)] text-sm md:text-base text-bone uppercase tracking-wider font-bold">
                        {manifesto.rappers.heading}
                      </h3>
                      <span className="text-[10px] font-[family-name:var(--font-label)] text-bone/40">THE FEW</span>
                    </div>
                    <ul className="space-y-2.5">
                      {manifesto.rappers.items.map((item) => (
                        <li key={item} className="font-[family-name:var(--font-body)] text-bone/70 flex items-center gap-2 text-xs sm:text-sm">
                          <span className="text-wild-orange font-bold font-[family-name:var(--font-label)]">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-3 border-t border-bone/10 flex justify-between items-center">
                    <BarcodeSticker label="STAGE" className="text-bone/40" />
                    <span className="text-[10px] font-[family-name:var(--font-label)] text-bone/40 uppercase">On the mic</span>
                  </div>
                </ChamferedCard>
              </motion.div>

              {/* Enjoyers side - bone card */}
              <motion.div
                initial={reduced ? {} : { y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <ChamferedCard variant="bone" withCrosshair className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-ink/10">
                      <h3 className="font-[family-name:var(--font-label)] text-sm md:text-base text-ink uppercase tracking-wider font-bold">
                        {manifesto.enjoyers.heading}
                      </h3>
                      <ArrowBox size={22} className="text-ink" />
                    </div>
                    <ul className="space-y-2.5">
                      {manifesto.enjoyers.items.map((item) => (
                        <li key={item} className="font-[family-name:var(--font-body)] text-ink/85 flex items-center gap-2 text-xs sm:text-sm font-medium">
                          <span className="w-1.5 h-1.5 bg-wild-orange rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-3 border-t border-ink/10 flex justify-between items-center">
                    <span className="font-[family-name:var(--font-label)] text-[11px] text-wild-orange font-bold uppercase tracking-wider">
                      THE MASSIVE FANBASE
                    </span>
                    <span className="text-[10px] font-[family-name:var(--font-label)] text-ink/50 uppercase">Everyday</span>
                  </div>
                </ChamferedCard>
              </motion.div>
            </div>

            {/* Payoff box */}
            <motion.div
              className="bg-wild-orange text-ink p-5 sm:p-6 clip-chamfer shadow-[3px_3px_0px_#E4E1D8]"
              initial={reduced ? {} : { y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <p className="font-[family-name:var(--font-display)] text-lg sm:text-xl md:text-2xl font-normal leading-snug">
                &ldquo;{manifesto.payoff}&rdquo;
              </p>
              <span className="inline-block mt-1 font-[family-name:var(--font-label)] text-[11px] uppercase tracking-[0.2em] font-bold text-ink/75">
                Wild Stone turns fan behaviour into games you play and share.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
