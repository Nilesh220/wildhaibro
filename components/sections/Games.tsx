"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChamferedCard } from "@/components/brand/ChamferedCard";
import { ArrowBox } from "@/components/brand/ArrowBox";
import { HazardStripes } from "@/components/brand/HazardStripes";

type GameItem = {
  id: string;
  title: string;
  hook: string;
  tag: string;
  formatFooter: string;
  photoUrl: string;
  hero?: boolean;
};

const gamesList: GameItem[] = [
  {
    id: "rap-court",
    title: "RAP COURT",
    hook: "Put two rappers head-to-head and argue the case in front of a live crowd. The loudest arguments win.",
    tag: "HERO EVENT",
    formatFooter: "1v1 Debate • 3 Rounds",
    photoUrl: "/campaign/page_7_1.jpg",
    hero: true,
  },
  {
    id: "roast-that-rapper",
    title: "ROAST THAT RAPPER",
    hook: "Give fans permission to say out loud what everyone else is secretly thinking. No mic mercy.",
    tag: "FAN ROAST",
    formatFooter: "Open Roast • 60s Timer",
    photoUrl: "/campaign/page_5_1.jpg",
  },
  {
    id: "lookalike",
    title: "RAPPER LOOKALIKE",
    hook: "MC Stan, Seedhe Maut, DIVINE fits. Who got the attitude, hair and sunglasses closest?",
    tag: "STYLE CHECK",
    formatFooter: "Attitude & Fit Check • Crowd Vote",
    photoUrl: "/campaign/page_8_1.jpg",
  },
  {
    id: "did-they-say-that",
    title: "DID THEY ACTUALLY SAY THAT?",
    hook: "Match an unhinged lyric to the rapper who actually dropped it on a track.",
    tag: "LYRIC DETECTIVE",
    formatFooter: "Real or Fake Bar • Buzzer Round",
    photoUrl: "/campaign/page_9_1.jpg",
  },
  {
    id: "playlist-bingo",
    title: "RAP PLAYLIST BINGO",
    hook: "You're out if your playlist has a Drake track, 'Hard' in title, or a sped-up reverb version.",
    tag: "CAMPUS EXPOSE",
    formatFooter: "On-Repeat Inspection • Elimination",
    photoUrl: "/campaign/page_10_1.jpg",
  },
  {
    id: "caption-this",
    title: "CAPTION THIS",
    hook: "Put up a painfully relatable campus situation. Drop the perfect rap lyric to caption it.",
    tag: "MEME BATTLE",
    formatFooter: "Big Screen Meme • Funniest Fit Wins",
    photoUrl: "/campaign/page_11_1.jpg",
  },
  {
    id: "recognise-song",
    title: "RECOGNISE THE SONG",
    hook: "Play a 2-second snippet. Can you identify the beat before anyone in the crowd?",
    tag: "SPEED TEST",
    formatFooter: "2s Audio Snippet • First to Buzz",
    photoUrl: "/campaign/page_6_1.jpg",
  },
  {
    id: "rap-name-sample",
    title: "WHAT'S YOUR RAP NAME?",
    hook: "Sample the Wild Stone range, choose your top artist, and get an official generated persona card.",
    tag: "PRODUCT DISCOVERY",
    formatFooter: "Scent Sampling • Personalized Card",
    photoUrl: "/campaign/page_12_2.jpg",
  },
];

export function Games() {
  const reduced = useReducedMotion();

  return (
    <section id="games" className="py-12 md:py-16 px-4 bg-ink-2 border-b border-bone/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange uppercase tracking-[0.3em] font-bold block mb-1">
            ON-GROUND ACTIVATIONS • ZERO MIC SKILL REQUIRED
          </span>
          <motion.h2
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-bone"
            initial={reduced ? {} : { y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            THE FAN GAMES
          </motion.h2>
          <p className="font-[family-name:var(--font-body)] text-bone/70 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
            Test your playlist taste, your hot takes, and your lyric memory.{" "}
            <strong className="text-wild-orange uppercase tracking-wider font-[family-name:var(--font-label)]">
              Winners receive Wild Stone perfumes on stage!
            </strong>
          </p>
        </div>

        <HazardStripes className="mb-8 max-w-xs mx-auto" />

        {/* Horizontal scroll rail on mobile & tablet, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible snap-x snap-mandatory">
          {gamesList.map((game, i) => (
            <motion.div
              key={game.id}
              className={`flex-shrink-0 snap-start flex flex-col ${
                game.hero ? "w-80 md:w-auto md:col-span-2 md:row-span-1" : "w-72 md:w-auto"
              }`}
              initial={reduced ? {} : { y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
            >
              <ChamferedCard
                variant={game.hero ? "orange" : "bone"}
                withCrosshair
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-[family-name:var(--font-label)] text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider bg-ink text-bone rounded-xs">
                      {game.tag}
                    </span>
                    <ArrowBox size={22} className="text-ink" />
                  </div>

                  {/* Authentic Campaign Deck Photo */}
                  <div className="relative w-full h-36 rounded-xs overflow-hidden mb-3 border border-ink/20 bg-ink">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={game.photoUrl}
                      alt={game.title}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  </div>

                  <h3 className={`font-[family-name:var(--font-display)] tracking-tight mb-1.5 ${
                    game.hero ? "text-xl md:text-2xl text-ink" : "text-base md:text-lg text-ink"
                  }`}>
                    {game.title}
                  </h3>

                  <p className={`font-[family-name:var(--font-body)] text-xs leading-relaxed ${
                    game.hero ? "text-ink/90 font-medium" : "text-ink/80"
                  }`}>
                    {game.hook}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-ink/15 flex items-center justify-between text-[10px] font-[family-name:var(--font-label)] text-ink/75">
                  <span className="font-bold tracking-wider uppercase">{game.formatFooter}</span>
                  <span className="text-wild-orange font-bold uppercase font-mono">LIVE FEST</span>
                </div>
              </ChamferedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
