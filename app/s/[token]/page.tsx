import Link from "next/link";
import { SubmissionForm } from "@/components/forms/SubmissionForm";
import { StepTrack } from "@/components/brand/StepTrack";

export default async function SubmissionRoute({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

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
          participantName="Aryan Sen"
          rapName="MC HYDRA"
          collegeName="Jadavpur University"
          isDemo={true}
        />
      </div>
    </div>
  );
}
