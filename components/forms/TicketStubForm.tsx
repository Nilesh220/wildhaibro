"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema, checkEmailTypo, RegistrationData } from "./shared/schema";
import { kolkataColleges, formatEventDate } from "@/config/event";
import { BarcodeSticker } from "@/components/brand/BarcodeSticker";
import { CrosshairMarker } from "@/components/brand/CrosshairMarker";
import { Ticket, MapPin } from "lucide-react";

type TicketStubProps = {
  isDemo?: boolean;
  showReviewHeader?: boolean;
  onSuccess?: (data: RegistrationData) => void;
};

export function TicketStubForm({ isDemo = true, showReviewHeader = false, onSuccess }: TicketStubProps) {
  const [emailTypo, setEmailTypo] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [issuedPass, setIssuedPass] = useState<RegistrationData | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      collegeId: "",
      consentMarketing: false,
    },
  });

  const selectedCollegeId = watch("collegeId");
  const selectedCollege = kolkataColleges.find((c) => c.id === selectedCollegeId);

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const typo = checkEmailTypo(e.target.value);
    setEmailTypo(typo);
  };

  const applyEmailSuggestion = () => {
    if (emailTypo) {
      const email = watch("email");
      const localPart = email.split("@")[0];
      setValue("email", `${localPart}@${emailTypo}`, { shouldValidate: true });
      setEmailTypo(null);
    }
  };

  const onSubmit = (data: RegistrationData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIssuedPass(data);
      if (onSuccess) onSuccess(data);
    }, 700);
  };

  if (issuedPass) {
    return (
      <div className="bg-bone text-ink p-6 rounded-sm border-2 border-ink text-center max-w-md mx-auto animate-[stamp_0.35s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
        <div className="w-12 h-12 bg-wild-orange rounded-full flex items-center justify-center mx-auto mb-3">
          <Ticket className="w-6 h-6 text-ink" strokeWidth={2.25} />
        </div>
        <span className="font-[family-name:var(--font-display)] text-2xl text-ink block">
          PASS MIL GAYA!
        </span>
        <p className="font-[family-name:var(--font-body)] text-xs text-ink/70 mt-1">
          Yo {issuedPass.fullName}, your pass for {selectedCollege?.collegeName || "Kolkata"} is ready.
        </p>
        <div className="my-4 p-3 bg-ink/5 border border-dashed border-ink/30 text-left text-xs space-y-1 font-[family-name:var(--font-body)]">
          <p><strong className="font-[family-name:var(--font-label)]">PASS CODE:</strong> <span className="font-mono font-bold text-wild-orange">WILD-882X</span></p>
          <p><strong className="font-[family-name:var(--font-label)]">EMAIL:</strong> {issuedPass.email}</p>
          <p><strong className="font-[family-name:var(--font-label)]">PHONE:</strong> +91 {issuedPass.phone}</p>
          <p><strong className="font-[family-name:var(--font-label)]">VENUE:</strong> {selectedCollege?.venue}</p>
        </div>
        <a
          href="/pass/demo-token"
          className="inline-block w-full bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold py-3 uppercase text-xs tracking-wider rounded-xs hover:brightness-105"
        >
          View Full QR Ticket ↗
        </a>
      </div>
    );
  }

  return (
    <div className="relative max-w-xl mx-auto">
      {/* Perforated Stub Design */}
      <div className="bg-bone text-ink p-6 sm:p-8 clip-chamfer shadow-[6px_6px_0px_#F0410C] border-2 border-ink relative">
        <CrosshairMarker className="absolute top-3 right-4 text-ink/30" size={18} />

        {/* Header with Barcode */}
        <div className="flex justify-between items-start pb-4 mb-5 border-b-2 border-ink/20">
          <div>
            {showReviewHeader ? (
              <>
                <span className="font-[family-name:var(--font-label)] text-[10px] bg-ink text-bone px-2 py-0.5 uppercase tracking-widest font-bold">
                  OPTION A • ENTRY SLIP
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-ink mt-1">
                  CAMPUS PASS REGISTRATION
                </h3>
                <p className="font-[family-name:var(--font-body)] text-xs text-ink/60">
                  One page. All fields visible. Fast on 4G.
                </p>
              </>
            ) : (
              <>
                <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-ink">
                  CAMPUS PASS REGISTRATION
                </h3>
                <p className="font-[family-name:var(--font-body)] text-xs text-ink/60 mt-0.5">
                  Takes under 60 seconds. Pass issued instantly via email.
                </p>
              </>
            )}
          </div>
          <BarcodeSticker label="ENTRY" className="hidden sm:inline-flex text-ink" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block font-[family-name:var(--font-label)] text-xs uppercase tracking-wider font-bold mb-1">
              1. Full Name *
            </label>
            <input
              {...register("fullName")}
              type="text"
              placeholder="e.g. Aryan Sen"
              className="w-full bg-white border border-ink/30 px-3 py-2.5 text-sm font-[family-name:var(--font-body)] text-ink placeholder:text-ink/40 focus:outline-none focus:border-wild-orange"
            />
            {errors.fullName && (
              <p className="text-logo-red text-xs mt-1 font-medium">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email + Typo check */}
          <div>
            <label className="block font-[family-name:var(--font-label)] text-xs uppercase tracking-wider font-bold mb-1">
              2. Email Address *
            </label>
            <input
              {...register("email")}
              onBlur={handleEmailBlur}
              type="email"
              placeholder="e.g. aryan@gmail.com"
              className="w-full bg-white border border-ink/30 px-3 py-2.5 text-sm font-[family-name:var(--font-body)] text-ink placeholder:text-ink/40 focus:outline-none focus:border-wild-orange"
            />
            {emailTypo && (
              <p className="text-wild-orange text-xs mt-1 font-bold">
                Did you mean <button type="button" onClick={applyEmailSuggestion} className="underline hover:text-ink">{emailTypo}</button>?
              </p>
            )}
            {errors.email && (
              <p className="text-logo-red text-xs mt-1 font-medium">{errors.email.message}</p>
            )}
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block font-[family-name:var(--font-label)] text-xs uppercase tracking-wider font-bold mb-1">
              3. WhatsApp Number * (+91)
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 bg-ink/10 border border-r-0 border-ink/30 text-xs font-[family-name:var(--font-label)] font-bold">
                +91
              </span>
              <input
                {...register("phone")}
                type="tel"
                maxLength={10}
                placeholder="10-digit number"
                className="w-full bg-white border border-ink/30 px-3 py-2.5 text-sm font-[family-name:var(--font-body)] text-ink placeholder:text-ink/40 focus:outline-none focus:border-wild-orange"
              />
            </div>
            <p className="text-[11px] font-[family-name:var(--font-body)] text-ink/60 mt-1">
              For event-day announcements. Your official QR pass will be delivered to your email.
            </p>
            {errors.phone && (
              <p className="text-logo-red text-xs mt-1 font-medium">{errors.phone.message}</p>
            )}
          </div>

          {/* College Dropdown */}
          <div>
            <label className="block font-[family-name:var(--font-label)] text-xs uppercase tracking-wider font-bold mb-1">
              4. Kolkata College *
            </label>
            <div className="relative">
              <select
                {...register("collegeId")}
                className="w-full bg-white border border-ink/40 px-3 py-2.5 text-sm font-[family-name:var(--font-body)] text-ink focus:outline-none focus:border-wild-orange cursor-pointer appearance-none rounded-xs"
              >
                <option value="">Select your college *</option>
                {kolkataColleges.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.collegeName} ({formatEventDate(c.startsAt)})
                  </option>
                ))}
                <option value="other">Other Campus / Guest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-ink">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {errors.collegeId && (
              <p className="text-logo-red text-xs mt-1 font-medium">{errors.collegeId.message}</p>
            )}
            {selectedCollege && (
              <div className="text-xs font-[family-name:var(--font-body)] text-ink mt-2 bg-bone border-l-4 border-wild-orange p-2.5 rounded-r-xs shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-wild-orange flex-shrink-0" />
                  <span><strong>{selectedCollege.venue}</strong> • {formatEventDate(selectedCollege.startsAt)}</span>
                </div>
                <span className="text-[9px] font-mono text-ink/70 bg-ink/10 px-1.5 py-0.5 rounded-xs uppercase font-bold">TENTATIVE</span>
              </div>
            )}
          </div>

          {/* Year of study */}
          <div>
            <label className="block font-[family-name:var(--font-label)] text-xs uppercase tracking-wider font-bold mb-1">
              5. Year of Study *
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
              {(["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "PG"] as const).map((yr) => (
                <label
                  key={yr}
                  className="flex items-center justify-center p-2 text-xs font-[family-name:var(--font-label)] border border-ink/30 bg-white cursor-pointer hover:bg-wild-orange/20 has-[:checked]:bg-ink has-[:checked]:text-bone has-[:checked]:border-ink transition-colors rounded-xs"
                >
                  <input
                    {...register("yearOfStudy")}
                    type="radio"
                    value={yr}
                    className="sr-only"
                  />
                  <span>{yr.replace(" Year", "")}</span>
                </label>
              ))}
            </div>
            {errors.yearOfStudy && (
              <p className="text-logo-red text-xs mt-1 font-medium">{errors.yearOfStudy.message}</p>
            )}
          </div>

          {/* Instagram Handle */}
          <div>
            <label className="block font-[family-name:var(--font-label)] text-xs uppercase tracking-wider font-bold mb-1">
              6. Instagram Handle * (to verify story)
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 bg-ink/10 border border-r-0 border-ink/30 text-xs font-[family-name:var(--font-label)] font-bold">
                @
              </span>
              <input
                {...register("instagramHandle")}
                type="text"
                placeholder="yourhandle"
                className="w-full bg-white border border-ink/30 px-3 py-2.5 text-sm font-[family-name:var(--font-body)] text-ink placeholder:text-ink/40 focus:outline-none focus:border-wild-orange"
              />
            </div>
            {errors.instagramHandle && (
              <p className="text-logo-red text-xs mt-1 font-medium">{errors.instagramHandle.message}</p>
            )}
          </div>

          {/* GOAT Rapper */}
          <div>
            <label className="block font-[family-name:var(--font-label)] text-xs uppercase tracking-wider font-bold mb-1">
              7. Who&apos;s Your GOAT Rapper? (Optional)
            </label>
            <input
              {...register("goatRapper")}
              type="text"
              placeholder="e.g. MC Stan, Seedhe Maut, DIVINE, Kendrick"
              className="w-full bg-white border border-ink/30 px-3 py-2 text-sm font-[family-name:var(--font-body)] text-ink placeholder:text-ink/40 focus:outline-none focus:border-wild-orange"
            />
          </div>

          {/* Consents */}
          <div className="pt-2 border-t border-ink/20 space-y-2">
            <label className="flex items-start gap-2 text-xs font-[family-name:var(--font-body)] text-ink/80 cursor-pointer">
              <input
                {...register("consentTerms")}
                type="checkbox"
                className="mt-0.5 accent-wild-orange"
              />
              <span>I confirm I am 18+ and accept the Terms &amp; Privacy Notice. *</span>
            </label>
            {errors.consentTerms && (
              <p className="text-logo-red text-xs">{errors.consentTerms.message}</p>
            )}

            <label className="flex items-start gap-2 text-xs font-[family-name:var(--font-body)] text-ink/70 cursor-pointer">
              <input
                {...register("consentMarketing")}
                type="checkbox"
                defaultChecked={false}
                className="mt-0.5 accent-wild-orange w-4 h-4 cursor-pointer"
              />
              <span>Opt in for event updates and future cypher announcements (optional).</span>
            </label>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-wild-orange text-ink font-[family-name:var(--font-label)] font-bold py-3.5 text-base uppercase tracking-wider clip-chamfer-sm hover:brightness-110 active:translate-x-0.5 active:translate-y-0.5 transition-all shadow-[3px_3px_0px_#000] min-h-[48px]"
          >
            {isSubmitting ? "GENERATING PASS..." : "ISSUE MY CAMPUS PASS ↗"}
          </button>
        </form>
      </div>
    </div>
  );
}
