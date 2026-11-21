"use client";

import { TicketStubForm } from "@/components/forms/TicketStubForm";
import { CrosshairMarker } from "@/components/brand/CrosshairMarker";

export function RegistrationSection() {
  return (
    <section id="register" className="py-12 md:py-16 px-4 bg-ink relative border-b border-bone/10">
      <CrosshairMarker className="absolute top-6 left-6 text-bone/20" size={24} />
      <CrosshairMarker className="absolute top-6 right-6 text-bone/20" size={24} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange uppercase tracking-[0.3em] font-bold block mb-2">
            FAST REGISTRATION • UNDER 60 SECONDS
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-bone">
            GET YOUR CAMPUS PASS
          </h2>
          <p className="font-[family-name:var(--font-body)] text-bone/60 text-xs sm:text-sm md:text-base mt-2 max-w-lg mx-auto">
            No password required. Instant QR pass sent to your registered email. Free entry to all fest games.
          </p>
        </div>

        {/* Clean Registration Form without review headers */}
        <div className="mt-2">
          <TicketStubForm isDemo={true} showReviewHeader={false} />
        </div>
      </div>
    </section>
  );
}
