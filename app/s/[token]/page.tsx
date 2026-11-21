import Link from "next/link";
import { SubmissionForm } from "@/components/forms/SubmissionForm";
import { StepTrack } from "@/components/brand/StepTrack";
import { createClient } from "@supabase/supabase-js";
import { kolkataColleges } from "@/config/event";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://nnhmrnhroehdhgeetzfi.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_LTQoUFZEWLe1bZOLwr1xEA_LEbr18qQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function SubmissionRoute({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

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
  const fullName = participant?.full_name || "Aryan Sen";
  const rapName = participant?.generated_rap_name || "MC HYDRA";

  return (
    <div className="min-h-screen bg-ink text-bone py-10 px-4">
      {/* Top Header */}
      <div className="max-w-3xl mx-auto mb-6 flex justify-between items-center border-b border-bone/15 pb-4">
        <Link
          href="/"
          className="text-xs font-[family-name:var(--font-label)] text-wild-orange hover:underline font-bold"
        >
          ← BACK TO MICROSITE
        </Link>
        <span className="text-xs font-[family-name:var(--font-label)] text-bone/50 uppercase">
          STAGE 4-5 • SCAN &amp; SUBMISSION
        </span>
      </div>

      <div className="max-w-3xl mx-auto mb-6">
        {/* Step Track */}
        <div className="bg-ink-2/70 border border-bone/15 p-2 rounded-sm mb-6">
          <StepTrack currentStep={4} />
        </div>

        {/* Submission Form */}
        <SubmissionForm
          participantName={fullName}
          rapName={rapName}
          collegeName={collegeName}
          isDemo={token === "demo-token"}
          token={token}
        />
      </div>
    </div>
  );
}
