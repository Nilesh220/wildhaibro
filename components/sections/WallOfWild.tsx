"use client";

import { motion, useReducedMotion } from "framer-motion";

const cypherArchive = [
  {
    city: "DELHI (RAAJDHAANI)",
    event: "CYPHER VOL 4",
    photo: "/campaign/page_15_1.jpg",
    caption: "The crowd when Rap Court went head-to-head. Over 600 rap fans packed the hall.",
  },
  {
    city: "MUMBAI",
    event: "STREET CYPHER",
    photo: "/campaign/page_6_1.jpg",
    caption: "Pure energy during the unscripted lyrical throwdown. Hands up for raw talent.",
  },
  {
    city: "HYDERABAD",
    event: "CAMPUS LIVE",
    photo: "/campaign/page_13_1.jpg",
    caption: "Participant flexing his official MC Hydra Rap Name Card after the trivia battle.",
  },
  {
    city: "BANGALORE",
    event: "PLAYLIST BINGO",
    photo: "/campaign/page_4_1.jpg",
    caption: "Red Wild Hai Bro flags flying across campus as the cypher beat dropped.",
  },
  {
    city: "CHANDIGARH",
    event: "CYPHER BARS",
    photo: "/campaign/page_2_1.jpg",
    caption: "The stage host hyping the crowd before the 1v1 battle kicks off.",
  },
  {
    city: "LUCKNOW",
    event: "LOOKALIKE CLASH",
    photo: "/campaign/page_5_1.jpg",
    caption: "Stage interactions and laughter as contestants took the mic for the lookalike roast.",
  },
];

export function WallOfWild() {
  const reduced = useReducedMotion();

  return (
    <section id="wall" className="py-12 md:py-16 px-4 bg-ink border-b border-bone/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange uppercase tracking-[0.3em] font-bold">
              CYPHER ARCHIVE • 6 CITIES
            </span>
            <span className="text-[10px] font-[family-name:var(--font-label)] font-bold uppercase tracking-wider bg-wild-orange/15 text-wild-orange px-2 py-0.5 border border-wild-orange/30">
              SAMPLE ARCHIVE • PAST CYPHER TOURS
            </span>
          </div>

          <motion.h2
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-bone"
            initial={reduced ? {} : { y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            WALL OF THE WILD
          </motion.h2>

          <p className="font-[family-name:var(--font-body)] text-bone/60 text-xs sm:text-sm md:text-base mt-2 max-w-xl mx-auto">
            Real moments from past Wild Hai Bro tours across Delhi, Mumbai, Hyderabad, Bangalore, Chandigarh &amp; Lucknow.
          </p>
        </div>

        {/* 6-Card Authentic Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cypherArchive.map((item, i) => (
            <motion.div
              key={item.city}
              className="bg-ink-2 border-2 border-bone/15 group hover:border-wild-orange transition-all clip-chamfer-sm overflow-hidden flex flex-col justify-between shadow-[4px_4px_0px_rgba(0,0,0,0.7)]"
              initial={reduced ? {} : { y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <div>
                {/* Photo container */}
                <div className="relative h-48 w-full overflow-hidden bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.photo}
                    alt={`${item.city} Cypher`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent pointer-events-none" />

                  {/* Top badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center pointer-events-none">
                    <span className="font-[family-name:var(--font-label)] text-[11px] font-black bg-wild-orange text-ink px-2 py-0.5 uppercase tracking-wider rounded-xs">
                      {item.city}
                    </span>
                    <span className="text-[10px] font-[family-name:var(--font-label)] font-bold bg-black/80 text-bone/80 px-2 py-0.5 uppercase rounded-xs">
                      {item.event}
                    </span>
                  </div>
                </div>

                {/* Caption text */}
                <div className="p-4">
                  <p className="font-[family-name:var(--font-body)] text-xs sm:text-sm text-bone/80 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Bottom footer */}
              <div className="px-4 py-3 bg-black/40 border-t border-bone/10 flex justify-between items-center text-[10px] font-[family-name:var(--font-label)] text-bone/50">
                <span>PAST TOUR ARCHIVE</span>
                <span className="text-wild-orange font-bold uppercase">#WILDHAIBRO</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Kolkata Callout */}
        <div className="mt-8 text-center bg-wild-orange/10 border border-wild-orange/30 p-4 max-w-xl mx-auto rounded-sm">
          <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange font-bold uppercase tracking-wider block mb-1">
            KOLKATA TOUR STORY ARCHIVE COMING SOON
          </span>
          <p className="font-[family-name:var(--font-body)] text-xs text-bone/70">
            Kolkata campus participants who post stories tagging <strong className="text-bone">@wildhaibro</strong> during the 10-college tour will be featured right here!
          </p>
        </div>
      </div>
    </section>
  );
}
