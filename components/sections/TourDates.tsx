"use client";

import { motion, useReducedMotion } from "framer-motion";
import { kolkataColleges, getEventStatus } from "@/config/event";

export function TourDates() {
  const reduced = useReducedMotion();

  const handleSelectCollege = (collegeId: string) => {
    window.dispatchEvent(new CustomEvent("select-college", { detail: collegeId }));
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tour" className="py-12 md:py-16 px-4 bg-wild-orange text-ink border-b-2 border-ink relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute -right-12 -bottom-12 font-[family-name:var(--font-display)] text-[120px] md:text-[180px] font-black text-ink/10 select-none pointer-events-none uppercase">
        TOUR
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-[family-name:var(--font-label)] text-xs text-ink uppercase tracking-[0.3em] font-black px-2 py-0.5 bg-ink text-bone">
              10 COLLEGES • 1 CITY
            </span>
            <span className="text-[10px] font-[family-name:var(--font-label)] font-bold uppercase tracking-wider bg-ink/15 text-ink px-2 py-0.5 border border-ink/30">
              TENTATIVE SCHEDULE • PLACEHOLDER
            </span>
          </div>

          <motion.h2
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-ink font-black tracking-tight"
            initial={reduced ? {} : { y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            KOLKATA TOUR DATES
          </motion.h2>

          <p className="font-[family-name:var(--font-label)] text-ink/80 text-xs sm:text-sm md:text-base mt-2 max-w-lg mx-auto font-medium">
            Tap your college to lock in your date and jump straight to the pass form.
          </p>
        </div>

        {/* 2-Column Compact Grid (~80-85px row height) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {kolkataColleges.map((event, i) => {
            const status = getEventStatus(event);
            const dateObj = new Date(event.startsAt);
            const dayNum = dateObj.getDate();
            const monthStr = dateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
            const weekdayStr = dateObj.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();

            return (
              <motion.button
                key={event.id}
                onClick={() => handleSelectCollege(event.id)}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 bg-ink text-bone border-2 border-ink hover:border-bone/80 hover:bg-ink-2 transition-all text-left group clip-chamfer-sm min-h-[82px] shadow-[3px_3px_0px_#000000]"
                initial={reduced ? {} : { y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.25 }}
                aria-label={`Select ${event.collegeName}`}
              >
                {/* Left: Stacked Date */}
                <div className="flex items-center gap-2.5 flex-shrink-0 w-24 sm:w-28 border-r border-bone/15 pr-2.5">
                  <span className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-wild-orange leading-none font-black">
                    {dayNum < 10 ? `0${dayNum}` : dayNum}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-[family-name:var(--font-label)] text-[11px] font-black text-bone uppercase leading-tight">
                      {monthStr}
                    </span>
                    <span className="font-[family-name:var(--font-label)] text-[10px] text-bone/50 uppercase leading-tight">
                      {weekdayStr}
                    </span>
                  </div>
                </div>

                {/* Middle: College & Venue */}
                <div className="flex-1 min-w-0 px-3">
                  <h3 className="font-[family-name:var(--font-label)] text-sm sm:text-base text-bone font-bold group-hover:text-wild-orange transition-colors truncate">
                    {event.collegeName}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-xs text-bone/60 truncate mt-0.5">
                    {event.venue} • <span className="text-wild-orange/80">10 AM - 6 PM</span>
                  </p>
                </div>

                {/* Right: Only show status chip for Live or Done */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {status === "live" && (
                    <span className="font-[family-name:var(--font-label)] text-[10px] px-2 py-0.5 uppercase tracking-wider bg-wild-orange text-ink font-bold animate-pulse">
                      LIVE TODAY
                    </span>
                  )}
                  {status === "done" && (
                    <span className="font-[family-name:var(--font-label)] text-[10px] px-2 py-0.5 uppercase tracking-wider bg-bone/20 text-bone/60 font-bold">
                      CONCLUDED
                    </span>
                  )}
                  <span className="text-bone/40 group-hover:text-wild-orange group-hover:translate-x-1 transition-transform text-sm font-bold">
                    ➔
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-6 text-center">
          <p className="font-[family-name:var(--font-label)] text-xs text-ink/70 uppercase tracking-wider font-semibold">
            Dates and venues tentative pending campus authority approvals • Check back for daily updates
          </p>
        </div>
      </div>
    </section>
  );
}
