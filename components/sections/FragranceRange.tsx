"use client";

import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/content/copy";

export function FragranceRange() {
  const reduced = useReducedMotion();

  return (
    <section id="range" className="py-12 md:py-16 px-4 bg-ink-2 border-b border-bone/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange uppercase tracking-[0.3em] font-bold block mb-2">
            THE SIGNATURE EDITIONS
          </span>
          <motion.h2
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-bone"
            initial={reduced ? {} : { y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            THE FRAGRANCE RANGE
          </motion.h2>
          <p className="font-[family-name:var(--font-body)] text-bone/60 text-xs sm:text-sm md:text-base mt-2 max-w-lg mx-auto">
            The signature Wild Stone fragrance lineup featured on the college tour. Pick your signature scent in the submission form.
          </p>
        </div>

        {/* 5-Bottle Grid with Real Product Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {copy.fragrances.map((frag, i) => (
            <motion.div
              key={frag.id}
              className="group relative"
              initial={reduced ? {} : { y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
            >
              <div className="bg-ink border-2 border-bone/15 p-5 text-center h-full flex flex-col justify-between group-hover:border-wild-orange transition-all clip-chamfer-sm shadow-[3px_3px_0px_rgba(0,0,0,0.6)]">
                <div>
                  {/* Real Cropped Bottle Photo from Deck */}
                  <div className="relative w-full h-44 mb-4 flex items-center justify-center bg-black/60 rounded-xs overflow-hidden border border-bone/10 group-hover:border-wild-orange/40 transition-colors p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={frag.image}
                      alt={`Wild Stone ${frag.name}`}
                      className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Fixed-height Name Block so descriptions always line up! */}
                  <div className="min-h-[48px] flex items-center justify-center mb-2 px-1">
                    <h3 className="font-[family-name:var(--font-label)] text-base text-bone uppercase tracking-wider font-bold group-hover:text-wild-orange transition-colors text-center leading-tight">
                      {frag.name}
                    </h3>
                  </div>

                  {/* Descriptive note */}
                  <p className="font-[family-name:var(--font-body)] text-xs text-bone/65 leading-relaxed min-h-[50px] flex items-start justify-center">
                    {frag.personality}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-bone/10 flex justify-between items-center text-[10px] font-[family-name:var(--font-label)] text-bone/40">
                  <span>WILD STONE EDP</span>
                  <span className="text-wild-orange font-bold uppercase">WIN THIS SCENT</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://wildstone.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bone text-ink font-[family-name:var(--font-label)] font-black text-xs uppercase tracking-wider px-6 py-3 clip-chamfer-sm hover:bg-wild-orange transition-colors min-h-[44px]"
          >
            Explore Full Wild Stone Collection ↗
          </a>
        </div>
      </div>
    </section>
  );
}
