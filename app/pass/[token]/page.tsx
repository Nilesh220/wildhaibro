import { DigitalPass } from "@/components/pass/DigitalPass";
import { PassEmailPreview } from "@/components/pass/PassEmail";
import Link from "next/link";
import { HazardStripes } from "@/components/brand/HazardStripes";
import { createClient } from "@supabase/supabase-js";
import { kolkataColleges } from "@/config/event";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://nnhmrnhroehdhgeetzfi.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_LTQoUFZEWLe1bZOLwr1xEA_LEbr18qQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function PassPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  // Fetch participant from Supabase if token exists
  let participant: any = null;
  if (token && token !== "demo-token") {
    const { data } = await supabase
      .from("participants")
      .select("*, colleges(*)")
      .eq("pass_token", token)
      .maybeSingle();
    participant = data;
  }

  const matchingCollege = participant?.college_id 
    ? kolkataColleges.find((c) => c.id === participant.college_id) 
    : null;

  const collegeName = participant?.colleges?.college_name || matchingCollege?.collegeName || participant?.college_other || "Jadavpur University";
  const venue = participant?.colleges?.venue || matchingCollege?.venue || "Main Auditorium Grounds";
  const dateStr = matchingCollege 
    ? "Fri, 15 Jan • 10:00 AM - 6:00 PM"
    : "Event Day • 10:00 AM";

  const fullName = participant?.full_name || "Aryan Sen";
  const passCode = participant?.pass_code || "WILD-882X";
  const rapName = participant?.generated_rap_name || "MC HYDRA";
  const fragrance = participant?.fragrance_preference || "Hydra Energy";

  return (
    <div className="min-h-screen bg-ink text-bone py-10 px-4">
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center border-b border-bone/15 pb-4">
        <Link
          href="/"
          className="text-xs font-[family-name:var(--font-label)] text-wild-orange hover:underline font-bold"
        >
          ← BACK TO MICROSITE
        </Link>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-[family-name:var(--font-label)] text-bone/60 uppercase">
            LIVE PASS TOKEN: {token}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* View 1: Digital Gig Ticket (Mobile-first) */}
        <div>
          <div className="text-center mb-6">
            <span className="font-[family-name:var(--font-label)] text-xs text-wild-orange uppercase tracking-[0.3em] font-bold block mb-1">
              CAMPUS FEST ADMISSION
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-bone">
              YOUR DIGITAL PASS
            </h1>
            <p className="font-[family-name:var(--font-body)] text-xs sm:text-sm text-bone/60 mt-1">
              Screenshot this ticket or keep this link saved. Staff scan the QR at the gate.
            </p>
          </div>

          <DigitalPass
            token={token}
            passCode={passCode}
            fullName={fullName}
            rapName={rapName}
            collegeName={collegeName}
            venue={venue}
            dateStr={dateStr}
            fragrance={fragrance}
          />
        </div>

        <HazardStripes className="max-w-md mx-auto" />

        {/* View 2: What was sent to participant's email (static preview) */}
        <div className="border-t border-bone/20 pt-10">
          <div className="text-center mb-6">
            <span className="font-[family-name:var(--font-label)] text-xs text-bone/50 uppercase tracking-[0.25em] font-bold block mb-1">
              CORRESPONDING EMAIL ASSET
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-bone">
              PASS EMAIL PREVIEW (RESEND / REACT EMAIL)
            </h2>
            <p className="font-[family-name:var(--font-body)] text-xs text-bone/60 mt-1">
              Rendered with pure inline CSS fallbacks so it never breaks in Gmail or Outlook.
            </p>
          </div>

          <PassEmailPreview
            fullName={fullName}
            passCode={passCode}
            collegeName={collegeName}
            venue={venue}
            dateStr={dateStr}
            token={token}
          />
        </div>
      </div>
    </div>
  );
}
