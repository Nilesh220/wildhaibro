"use client";

import { useEffect, useState } from "react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide when registration form is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const formEl = document.getElementById("register");
    if (formEl) observer.observe(formEl);

    return () => observer.disconnect();
  }, []);

  const scrollToRegister = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <aside aria-label="Quick actions" className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-ink/95 backdrop-blur-md border-t border-bone/20 md:hidden flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/wild-hai-bro-logo.jpg"
          alt="Wild Hai Bro"
          className="w-9 h-9 object-contain rounded-md border border-bone/20"
        />
        <div>
          <span className="font-[family-name:var(--font-display)] text-xs text-bone block leading-tight">
            WILD HAI BRO
          </span>
          <span className="text-[10px] font-[family-name:var(--font-body)] text-wild-orange font-bold">
            Kolkata Campus Tour
          </span>
        </div>
      </div>
      <button
        onClick={scrollToRegister}
        className="bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold text-xs uppercase px-5 py-2.5 clip-chamfer-sm active:translate-x-0.5 shadow-[2px_2px_0px_#000] min-h-[44px]"
      >
        GET YOUR PASS ↗
      </button>
    </aside>
  );
}
