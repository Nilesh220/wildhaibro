import { kolkataColleges } from "@/config/event";

type SendPassEmailParams = {
  toEmail: string;
  fullName: string;
  passCode: string;
  passToken: string;
  collegeId?: string | null;
  collegeOther?: string | null;
  rapName?: string;
};

export async function sendPassEmail({
  toEmail,
  fullName,
  passCode,
  passToken,
  collegeId,
  collegeOther,
  rapName = "MC HYDRA",
}: SendPassEmailParams) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not configured. Skipping email dispatch.");
    return { success: false, skipped: true, error: "Missing RESEND_API_KEY" };
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || "Wild Hai Bro <pass@wildstone.vigorspace.co>";
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://wildstone.vigorspace.co";
  const passUrl = `${appUrl}/pass/${passToken}`;

  const collegeObj = collegeId ? kolkataColleges.find((c) => c.id === collegeId) : null;
  const collegeName = collegeObj?.collegeName || collegeOther || "Kolkata Campus";
  const venue = collegeObj?.venue || "Main Auditorium Grounds";
  const eventDate = "Fri, 15 Jan • 10:00 AM - 6:00 PM";

  const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Wild Hai Bro Kolkata Fest Pass</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0F0E0C; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #E4E1D8;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0F0E0C; padding: 24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Container Card -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 540px; background-color: #171614; border: 2px solid #F0410C; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 24px rgba(240,65,12,0.25);">
          
          <!-- Top Orange Banner -->
          <tr>
            <td style="background-color: #F0410C; padding: 12px 20px; text-align: left;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="color: #0F0E0C; font-weight: 900; font-size: 14px; letter-spacing: 2px; text-transform: uppercase;">
                    WILD HAI BRO &times; VIGOR LAUNCHPAD
                  </td>
                  <td align="right" style="color: #0F0E0C; font-weight: 700; font-size: 11px; letter-spacing: 1px;">
                    KOLKATA TOUR 2027
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Ticket Body -->
          <tr>
            <td style="padding: 28px 24px;">
              <p style="margin: 0 0 6px 0; color: #F0410C; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">
                OFFICIAL ENTRY PASS CONFIRMATION
              </p>
              
              <h1 style="margin: 0 0 16px 0; color: #E4E1D8; font-size: 24px; font-weight: 900; text-transform: uppercase; line-height: 1.2;">
                YO ${fullName.toUpperCase()}, YOU&apos;RE IN THE CYPHER.
              </h1>

              <p style="margin: 0 0 20px 0; color: #A6A39D; font-size: 13px; line-height: 1.5;">
                Your campus fest pass for <strong style="color: #E4E1D8;">${collegeName}</strong> has been confirmed. Keep this email or save your ticket link. Scan the QR code at the stall to claim your sample and enter the rap arena.
              </p>

              <!-- Stub Details Box -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0F0E0C; border: 1px dashed #3D3A34; border-radius: 4px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding-bottom: 8px; color: #737069; font-size: 11px; text-transform: uppercase; font-weight: 700;">PASS CODE</td>
                        <td style="padding-bottom: 8px; text-align: right; color: #F0410C; font-size: 16px; font-family: monospace; font-weight: 900; letter-spacing: 1px;">
                          ${passCode}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 8px; color: #737069; font-size: 11px; text-transform: uppercase; font-weight: 700;">RAP PERSONA</td>
                        <td style="padding-bottom: 8px; text-align: right; color: #E4E1D8; font-size: 12px; font-weight: 700;">
                          ${rapName}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 8px; color: #737069; font-size: 11px; text-transform: uppercase; font-weight: 700;">CAMPUS VENUE</td>
                        <td style="padding-bottom: 8px; text-align: right; color: #E4E1D8; font-size: 12px; font-weight: 600;">
                          ${venue}
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #737069; font-size: 11px; text-transform: uppercase; font-weight: 700;">EVENT TIMING</td>
                        <td style="text-align: right; color: #E4E1D8; font-size: 12px; font-weight: 600;">
                          ${eventDate}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Big Orange CTA Button -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td align="center">
                    <a href="${passUrl}" target="_blank" style="display: block; background-color: #F0410C; color: #0F0E0C; font-weight: 900; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; text-decoration: none; padding: 14px 28px; border-radius: 2px; text-align: center; box-shadow: 0 2px 8px rgba(240,65,12,0.4);">
                      OPEN MY PASS ON MOBILE &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Instructions / 3-Step Guide -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #211F1C; border-left: 3px solid #F0410C; padding: 12px 16px; margin-bottom: 20px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 6px 0; color: #E4E1D8; font-size: 12px; font-weight: 700;">WHAT TO DO ON CAMPUS DAY:</p>
                    <p style="margin: 0 0 4px 0; color: #A6A39D; font-size: 11px; line-height: 1.4;">
                      1. Show your QR ticket at the Wild Hai Bro arena stall.
                    </p>
                    <p style="margin: 0 0 4px 0; color: #A6A39D; font-size: 11px; line-height: 1.4;">
                      2. Step up to the mic, battle a friend, and pick your Wild Stone Hydra Energy sample.
                    </p>
                    <p style="margin: 0; color: #A6A39D; font-size: 11px; line-height: 1.4;">
                      3. Share a 9:16 story tagging <strong>@wildhaibro</strong> to qualify for full bottles.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Footer info -->
              <p style="margin: 0; color: #737069; font-size: 11px; text-align: center; line-height: 1.4;">
                Wild Stone &bull; Wild Hai Bro &times; Vigor Launchpad Kolkata Tour<br>
                Token: <span style="font-family: monospace;">${passToken}</span>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "WildHaiBroApp/1.0",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Your Wild Hai Bro Pass is Confirmed! [${passCode}]`,
        html: emailHtml,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Resend API error:", data);
      return { success: false, error: data.message || "Failed to dispatch email via Resend" };
    }

    return { success: true, id: data.id };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown email error";
    console.error("Error sending pass email:", msg);
    return { success: false, error: msg };
  }
}
