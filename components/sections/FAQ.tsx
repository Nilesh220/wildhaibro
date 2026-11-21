"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { copy } from "@/content/copy";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduced = useReducedMotion();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 md:py-16 px-4 bg-ink-2 border-b border-bone/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange uppercase tracking-[0.3em] font-bold block mb-2">
            GOT QUESTIONS?
          </span>
          <motion.h2
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-6xl text-bone"
            initial={reduced ? {} : { y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            FREQUENTLY ASKED
          </motion.h2>
          <p className="font-[family-name:var(--font-body)] text-bone/60 text-sm md:text-base mt-2">
            Everything you need to know about passes, stories, and perfumes.
          </p>
        </div>

        <div className="space-y-3">
          {copy.faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-bone/15 bg-ink rounded-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left font-[family-name:var(--font-label)] text-sm md:text-base text-bone font-bold hover:text-wild-orange transition-colors min-h-[48px]"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="text-wild-orange text-xl ml-4 flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-4 md:p-5 pt-0 border-t border-bone/10 font-[family-name:var(--font-body)] text-xs sm:text-sm text-bone/70 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
