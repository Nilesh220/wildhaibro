import { z } from "zod";

// Email typo detection
const commonEmailTypos: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gnail.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "hotmal.com": "hotmail.com",
  "outlok.com": "outlook.com",
};

export function checkEmailTypo(email: string): string | null {
  const domain = email.split("@")[1]?.toLowerCase();
  if (domain && domain in commonEmailTypos) {
    return commonEmailTypos[domain];
  }
  return null;
}

export const registrationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name too short")
    .max(100, "Name too long")
    .regex(/^[a-zA-Z\s.'-]+$/, "Only letters, spaces, dots and hyphens"),
  email: z
    .string()
    .email("Enter a valid email")
    .transform((v) => v.toLowerCase().trim()),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  collegeId: z.string().min(1, "Pick your college"),
  collegeOther: z.string().optional(),
  yearOfStudy: z.enum(["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "PG"], {
    errorMap: () => ({ message: "Pick your year" }),
  }),
  instagramHandle: z
    .string()
    .min(1, "Enter your Instagram handle")
    .transform((v) => (v.startsWith("@") ? v.slice(1) : v))
    .pipe(
      z
        .string()
        .regex(/^[a-zA-Z0-9._]{1,30}$/, "Enter a valid Instagram handle")
    ),
  goatRapper: z.string().max(100).optional(),
  consentTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept to continue" }),
  }),
  consentMarketing: z.boolean().default(false),
});

export type RegistrationData = z.infer<typeof registrationSchema>;

// For Option C: Rap Name Drop
export const rapNameSchema = registrationSchema.extend({
  fragrancePick: z.string().min(1, "Pick a fragrance for your rap name"),
});

export type RapNameData = z.infer<typeof rapNameSchema>;

export const submissionSchema = z.object({
  tagConfirmed: z.literal(true, {
    errorMap: () => ({ message: "Confirm that your story tagged @wildhaibro" }),
  }),
  productPreference: z.enum(
    ["edge", "king", "icon", "hydra-energy", "night-rider"],
    {
      errorMap: () => ({ message: "Pick a Wild Stone product" }),
    }
  ),
  // Images are validated separately during upload
});

export type SubmissionData = z.infer<typeof submissionSchema>;

export const otpSchema = z.object({
  email: z.string().email("Enter a valid email"),
  otp: z.string().length(6, "Enter the 6-digit code"),
});

export type OtpData = z.infer<typeof otpSchema>;
