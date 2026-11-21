"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CornerBrackets } from "@/components/brand/CornerBrackets";
import { CrosshairMarker } from "@/components/brand/CrosshairMarker";
import { PlusDotMatrix } from "@/components/brand/PlusDotMatrix";
import { eventConfig } from "@/config/event";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    function calc() {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      };
    }
    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const reduced = useReducedMotion();
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!&";
  const hasRun = useRef(false);

  useEffect(() => {
    if (reduced || hasRun.current) return;
    hasRun.current = true;
    let iteration = 0;
    const totalIterations = 14;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < Math.floor((iteration / totalIterations) * text.length)) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration++;
      if (iteration > totalIterations) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 55);
    return () => clearInterval(interval);
  }, [text, reduced]);

  return <span className={className}>{display}</span>;
}

export function Hero() {
  const countdown = useCountdown(eventConfig.firstEventDate);
  const reduced = useReducedMotion();

  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-ink px-4 py-10 md:py-14">
      {/* Authentic campaign crowd backdrop */}
      <div className="absolute inset-0 z-0 opacity-15 overflow-hidden pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/campaign/page_4_1.jpg"
          alt="Campaign Crowd"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
      </div>

      {/* Crosshair markers & plus matrix */}
      <CrosshairMarker className="absolute top-6 left-6 text-bone/40" size={24} />
      <CrosshairMarker className="absolute top-6 right-6 text-bone/40" size={24} />
      <CrosshairMarker className="absolute bottom-6 left-6 text-bone/40" size={24} />
      <CrosshairMarker className="absolute bottom-6 right-6 text-bone/40" size={24} />
      <PlusDotMatrix className="absolute top-10 left-12 hidden md:grid" />
      <PlusDotMatrix className="absolute bottom-10 right-12 hidden md:grid" />

      {/* Main hero stack */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
        initial={reduced ? {} : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Brand Lockup Badge with Official Wild Stone & Vigor Launchpad Logos */}
        <div className="mb-6 inline-flex items-center gap-3 bg-ink-2 border border-bone/25 px-5 py-2.5 rounded-full text-xs font-[family-name:var(--font-label)] uppercase tracking-wider text-bone/90 shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wild-stone-logo.avif"
            alt="Wild Stone"
            className="h-4 sm:h-5 w-auto object-contain brightness-110"
          />
          <span className="text-wild-orange font-bold text-sm">×</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vigor-launchpad-logo.png"
            alt="Vigor Launchpad"
            className="h-5 sm:h-6 w-auto object-contain brightness-0 invert"
          />
        </div>

        {/* Official Wild Hai Bro Dripping Hand Sign Logo */}
        <motion.div
          className="mb-4 flex justify-center"
          initial={reduced ? {} : { scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <div className="relative group p-1 rounded-2xl bg-gradient-to-b from-wild-orange/30 to-transparent border border-bone/20 shadow-[0_0_35px_rgba(240,65,12,0.35)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wild-hai-bro-logo.jpg"
              alt="Wild Hai Bro Official Logo"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Display Headline */}
        <CornerBrackets bracketSize={32} padding={16} color="#F0410C" className="mb-6">
          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-8xl text-bone leading-none tracking-tight">
            <ScrambleText text="WILD HAI BRO" />
          </h1>
        </CornerBrackets>

        {/* Tagline */}
        <motion.p
          className="font-[family-name:var(--font-body)] text-base sm:text-lg md:text-xl text-bone/85 mb-8 max-w-xl mx-auto leading-relaxed"
          initial={reduced ? {} : { y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Recognising the raw, representing the wild.
          <span className="block text-wild-orange font-bold text-sm sm:text-base mt-1">
            Built for rap fans, not rappers.
          </span>
        </motion.p>

        {/* Live Countdown */}
        <motion.div
          className="mb-10 w-full max-w-md bg-ink-2/80 border border-bone/15 p-4 rounded-sm"
          initial={reduced ? {} : { y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.4 }}
        >
          <p className="font-[family-name:var(--font-label)] text-[11px] text-bone/50 uppercase tracking-[0.25em] mb-3 text-center">
            Kolkata Campus Tour Drops In
          </p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { val: countdown.days, label: "DAYS" },
              { val: countdown.hours, label: "HOURS" },
              { val: countdown.mins, label: "MINS" },
              { val: countdown.secs, label: "SECS" },
            ].map(({ val, label }) => (
              <div key={label} className="bg-ink border border-bone/10 py-2 rounded-sm text-center">
                <span className="font-[family-name:var(--font-label)] text-2xl sm:text-3xl text-wild-orange font-bold tabular-nums block">
                  {String(val).padStart(2, "0")}
                </span>
                <span className="font-[family-name:var(--font-label)] text-[9px] text-bone/50 tracking-[0.15em] uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
          initial={reduced ? {} : { y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <button
            onClick={scrollToForm}
            className="bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold text-base md:text-lg px-8 py-3.5 clip-chamfer-sm hover:brightness-110 active:translate-x-[2px] active:translate-y-[2px] transition-all min-h-[44px] shadow-[3px_3px_0px_#000]"
          >
            GET YOUR PASS ↗
          </button>
          <button
            onClick={scrollToHowItWorks}
            className="bg-transparent border-2 border-bone/40 text-bone font-[family-name:var(--font-label)] text-base md:text-lg px-7 py-3 clip-chamfer-sm hover:border-bone hover:bg-bone/10 transition-colors min-h-[44px]"
          >
            HOW IT WORKS
          </button>
        </motion.div>
      </motion.div>

      {/* Fragrance bottles bottom teaser bar */}
      <motion.div
        className="w-full max-w-xl mx-auto mt-8 flex flex-col items-center pt-3 border-t border-bone/10 relative z-10"
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <span className="font-[family-name:var(--font-label)] text-[10px] text-bone/50 uppercase tracking-[0.25em] mb-2 font-bold">
          5 SIGNATURE FRAGRANCES ON TOUR
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/campaign/all_bottles.jpg"
          alt="Wild Stone Fragrances: Hydra Energy, King, Icon, Edge, Night Rider"
          className="h-14 sm:h-18 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      </motion.div>
    </section>
  );
}
