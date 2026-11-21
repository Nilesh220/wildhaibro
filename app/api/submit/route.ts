import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { passToken, productPreference, tagConfirmed, screenshotCount } = body;

    if (!tagConfirmed) {
      return NextResponse.json(
        { error: "Must confirm tag to @wildhaibro" },
        { status: 400 }
      );
    }

    if (!productPreference) {
      return NextResponse.json(
        { error: "Product preference is required" },
        { status: 400 }
      );
    }

    // Find participant
    let participantId: string | null = null;
    if (passToken && passToken !== "demo-token") {
      const { data: participant } = await supabase
        .from("participants")
        .select("id")
        .eq("pass_token", passToken)
        .maybeSingle();

      if (participant) {
        participantId = participant.id;
      }
    }

    // Insert into submissions if participant found
    if (participantId) {
      const { data: inserted, error: insertError } = await supabase
        .from("submissions")
        .insert({
          participant_id: participantId,
          product_preference: productPreference,
          tag_confirmed: true,
          story_screenshot_urls: [`proof_${Date.now()}_count_${screenshotCount || 1}`],
          status: "pending",
        })
        .select()
        .single();

      if (insertError) {
        console.error("Submission insert error:", insertError);
        return NextResponse.json(
          { error: insertError.message || "Failed to save submission" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        submission: inserted,
      });
    }

    // Fallback for demo or unrecognized token
    return NextResponse.json({
      success: true,
      demo: true,
      message: "Demo submission received successfully",
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
