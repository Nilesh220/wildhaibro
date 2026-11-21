export type CollegeEvent = {
  id: string;
  collegeName: string;
  city: string;
  venue: string;
  startsAt: Date;
  endsAt: Date;
  submissionOpensAt: Date;
  submissionClosesAt: Date;
};

// Exact 10 Kolkata Colleges seeded in Supabase database
export const kolkataColleges: CollegeEvent[] = [
  {
    id: "jad-univ",
    collegeName: "Jadavpur University",
    city: "Kolkata",
    venue: "Main Auditorium",
    startsAt: new Date("2027-01-15T10:00:00+05:30"),
    endsAt: new Date("2027-01-15T18:00:00+05:30"),
    submissionOpensAt: new Date("2027-01-15T18:00:00+05:30"),
    submissionClosesAt: new Date("2027-01-18T23:59:00+05:30"),
  },
  {
    id: "pres-univ",
    collegeName: "Presidency University",
    city: "Kolkata",
    venue: "Baker Lab Grounds",
    startsAt: new Date("2027-01-17T10:00:00+05:30"),
    endsAt: new Date("2027-01-17T18:00:00+05:30"),
    submissionOpensAt: new Date("2027-01-17T18:00:00+05:30"),
    submissionClosesAt: new Date("2027-01-20T23:59:00+05:30"),
  },
  {
    id: "st-xav",
    collegeName: "St. Xavier's College",
    city: "Kolkata",
    venue: "Central Courtyard",
    startsAt: new Date("2027-01-19T10:00:00+05:30"),
    endsAt: new Date("2027-01-19T18:00:00+05:30"),
    submissionOpensAt: new Date("2027-01-19T18:00:00+05:30"),
    submissionClosesAt: new Date("2027-01-22T23:59:00+05:30"),
  },
  {
    id: "calc-univ",
    collegeName: "University of Calcutta",
    city: "Kolkata",
    venue: "Senate Hall Quadrangle",
    startsAt: new Date("2027-01-21T10:00:00+05:30"),
    endsAt: new Date("2027-01-21T18:00:00+05:30"),
    submissionOpensAt: new Date("2027-01-21T18:00:00+05:30"),
    submissionClosesAt: new Date("2027-01-24T23:59:00+05:30"),
  },
  {
    id: "scott-church",
    collegeName: "Scottish Church College",
    city: "Kolkata",
    venue: "College Lawn",
    startsAt: new Date("2027-01-23T10:00:00+05:30"),
    endsAt: new Date("2027-01-23T18:00:00+05:30"),
    submissionOpensAt: new Date("2027-01-23T18:00:00+05:30"),
    submissionClosesAt: new Date("2027-01-26T23:59:00+05:30"),
  },
  {
    id: "heritage-it",
    collegeName: "Heritage Institute of Technology",
    city: "Kolkata",
    venue: "Heritage Open Arena",
    startsAt: new Date("2027-01-25T10:00:00+05:30"),
    endsAt: new Date("2027-01-25T18:00:00+05:30"),
    submissionOpensAt: new Date("2027-01-25T18:00:00+05:30"),
    submissionClosesAt: new Date("2027-01-28T23:59:00+05:30"),
  },
  {
    id: "uem-kol",
    collegeName: "UEM Kolkata",
    city: "Kolkata",
    venue: "University Amphitheatre",
    startsAt: new Date("2027-01-27T10:00:00+05:30"),
    endsAt: new Date("2027-01-27T18:00:00+05:30"),
    submissionOpensAt: new Date("2027-01-27T18:00:00+05:30"),
    submissionClosesAt: new Date("2027-01-30T23:59:00+05:30"),
  },
  {
    id: "techno-india",
    collegeName: "Techno India Salt Lake",
    city: "Kolkata",
    venue: "Main Fest Ground",
    startsAt: new Date("2027-01-29T10:00:00+05:30"),
    endsAt: new Date("2027-01-29T18:00:00+05:30"),
    submissionOpensAt: new Date("2027-01-29T18:00:00+05:30"),
    submissionClosesAt: new Date("2027-02-01T23:59:00+05:30"),
  },
  {
    id: "amity-kol",
    collegeName: "Amity University Kolkata",
    city: "Kolkata",
    venue: "Central Plaza",
    startsAt: new Date("2027-01-31T10:00:00+05:30"),
    endsAt: new Date("2027-01-31T18:00:00+05:30"),
    submissionOpensAt: new Date("2027-01-31T18:00:00+05:30"),
    submissionClosesAt: new Date("2027-02-03T23:59:00+05:30"),
  },
  {
    id: "sister-niv",
    collegeName: "Sister Nivedita University",
    city: "Kolkata",
    venue: "SNU Arena Grounds",
    startsAt: new Date("2027-02-02T10:00:00+05:30"),
    endsAt: new Date("2027-02-02T18:00:00+05:30"),
    submissionOpensAt: new Date("2027-02-02T18:00:00+05:30"),
    submissionClosesAt: new Date("2027-02-05T23:59:00+05:30"),
  },
];

export const eventConfig = {
  /** Which form variant is active on / : 'a' | 'b' | 'c' */
  activeVariant: (process.env.NEXT_PUBLIC_FORM_VARIANT as "a" | "b" | "c") || "a",

  /** Feature flags */
  features: {
    /** Must be scanned at gate before submission? */
    checkInGating: process.env.NEXT_PUBLIC_CHECKIN_GATING === "true",
    /** Show Rap Name Card on done screen and pass? */
    rapNameCard: process.env.NEXT_PUBLIC_RAP_NAME_CARD !== "false",
    /** Enable coupons on the Rap Name Card? */
    coupons: process.env.NEXT_PUBLIC_COUPONS === "true",
    /** Show WhatsApp opt-in in the form? */
    whatsappOptIn: process.env.NEXT_PUBLIC_WHATSAPP_OPTIN !== "false",
    /** Show "Can't decide" in product picker? */
    cantDecide: process.env.NEXT_PUBLIC_CANT_DECIDE === "true",
  },

  /** First event date — for the hero countdown */
  firstEventDate: new Date("2027-01-15T10:00:00+05:30"),

  /** Wild Stone product catalog */
  products: [
    { id: "edge", name: "Edge", color: "#1a4b8c" },
    { id: "king", name: "King", color: "#2d8a4e" },
    { id: "icon", name: "Icon", color: "#c41e3a" },
    { id: "hydra-energy", name: "Hydra Energy", color: "#0d7a7a" },
    { id: "night-rider", name: "Night Rider", color: "#b8860b" },
  ] as const,

  /** Years of study for the form */
  years: ["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "PG"] as const,

  /** Rap name parts for Option C generator */
  rapNamePrefixes: ["Lil", "Slim", "MC", "Big", "DJ", "Young", "OG", "Don"],
  rapNameSuffixes: [
    "Chief", "Hydra", "Icon", "King", "Edge", "Rider", "Shadow",
    "Flame", "Storm", "Venom", "Blaze", "Cipher", "Crown", "Volt",
  ],
};

export function getCollegeById(id: string): CollegeEvent | undefined {
  return kolkataColleges.find((c) => c.id === id);
}

export function getEventStatus(event: CollegeEvent): "upcoming" | "live" | "done" {
  const now = new Date();
  if (now < event.startsAt) return "upcoming";
  if (now <= event.endsAt) return "live";
  return "done";
}

export function generateRapName(fragrance: string, _artist: string): string {
  const { rapNamePrefixes, rapNameSuffixes } = eventConfig;
  // Simple deterministic generation based on inputs
  const prefixIdx =
    (fragrance.length + _artist.length) % rapNamePrefixes.length;
  const suffixIdx =
    Math.abs(fragrance.charCodeAt(0) - _artist.charCodeAt(0)) %
    rapNameSuffixes.length;
  return `${rapNamePrefixes[prefixIdx]} ${rapNameSuffixes[suffixIdx]}`;
}

export function formatEventDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}
