import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { registrationSchema } from "@/components/forms/shared/schema";
import { sendPassEmail } from "@/lib/email";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

function generateToken() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let token = "wld_";
  for (let i = 0; i < 8; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

function generatePassCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "WILD-";
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body
    const parsed = registrationSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const isOtherCollege = data.collegeId === "other";
    const collegeIdVal = isOtherCollege ? null : data.collegeId;
    const collegeOtherVal = isOtherCollege ? (data.collegeOther || "Other") : (data.collegeOther || null);

    // Check for existing participant with same email and college
    let checkQuery = supabase.from("participants").select("*").eq("email", data.email);
    if (collegeIdVal) {
      checkQuery = checkQuery.eq("college_id", collegeIdVal);
    }
    const { data: existing } = await checkQuery.maybeSingle();

    if (existing) {
      // Return existing pass so user can access it
      return NextResponse.json({
        success: true,
        alreadyRegistered: true,
        participant: {
          id: existing.id,
          passToken: existing.pass_token,
          passCode: existing.pass_code,
          fullName: existing.full_name,
          email: existing.email,
          phone: existing.phone,
          collegeId: existing.college_id,
          yearOfStudy: existing.year_of_study,
          instagramHandle: existing.instagram_handle,
          rapName: existing.generated_rap_name || "MC HYDRA",
          couponCode: existing.coupon_code || "WILD15",
        },
      });
    }

    const passToken = generateToken();
    const passCode = generatePassCode();

    const insertPayload = {
      pass_token: passToken,
      pass_code: passCode,
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      college_id: collegeIdVal,
      college_other: collegeOtherVal,
      year_of_study: data.yearOfStudy,
      instagram_handle: data.instagramHandle,
      goat_rapper: data.goatRapper || null,
      generated_rap_name: body.generatedRapName || body.rapName || "MC HYDRA",
      fragrance_preference: body.fragrancePick || body.fragrancePreference || "Hydra Energy",
      coupon_code: "WILD15",
      consent_terms: data.consentTerms,
      consent_marketing: data.consentMarketing ?? false,
    };

    const { data: inserted, error: insertError } = await supabase
      .from("participants")
      .insert(insertPayload)
      .select()
      .single();

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { error: insertError.message || "Failed to register" },
        { status: 500 }
      );
    }

    // Dispatch pass confirmation email via Resend (non-blocking)
    let emailSent = false;
    let emailId: string | null = null;
    try {
      const emailRes = await sendPassEmail({
        toEmail: inserted.email,
        fullName: inserted.full_name,
        passCode: inserted.pass_code,
        passToken: inserted.pass_token,
        collegeId: inserted.college_id,
        collegeOther: inserted.college_other,
        rapName: inserted.generated_rap_name || "MC HYDRA",
      });
      emailSent = emailRes.success;
      if (emailRes.id) emailId = emailRes.id;
    } catch (e) {
      console.error("Resend pass email failed:", e);
    }

    return NextResponse.json({
      success: true,
      emailSent,
      emailId,
      participant: {
        id: inserted.id,
        passToken: inserted.pass_token,
        passCode: inserted.pass_code,
        fullName: inserted.full_name,
        email: inserted.email,
        phone: inserted.phone,
        collegeId: inserted.college_id,
        yearOfStudy: inserted.year_of_study,
        instagramHandle: inserted.instagram_handle,
        rapName: inserted.generated_rap_name,
        couponCode: inserted.coupon_code,
      },
    });
  } catch (err: any) {
    console.error("Server API error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
