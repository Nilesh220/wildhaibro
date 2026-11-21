export const copy = {
  brand: {
    name: "WILD HAI BRO",
    tagline: "Recognising the raw, representing the wild.",
    by: "Wild Stone × Vigor Launchpad",
    instagram: "@wildhaibro",
    parentBrand: "@wildstoneofficial",
  },
  hero: {
    headline: "WILD HAI BRO",
    subline: "Recognising the raw, representing the wild.",
    cta: "Get your pass",
    ctaSecondary: "How it works",
    countdown: "Kolkata drops in",
  },
  ticker: {
    items: [
      "#WILDHAIBRO",
      "KOLKATA",
      "RAP COURT",
      "ROAST THAT RAPPER",
      "PLAYLIST BINGO",
      "CAPTION THIS",
      "WHAT'S YOUR RAP NAME?",
      "RAPPER LOOKALIKE",
      "WHO SAID IT?",
      "RECOGNISE THE SONG",
    ],
  },
  manifesto: {
    title: "Rap is more than rapping.",
    rappers: {
      heading: "What rappers do",
      items: ["Rap", "Beatbox", "Freestyle", "Battle"],
    },
    enjoyers: {
      heading: "What rap enjoyers do",
      items: [
        "Argue who's better",
        "Know obscure lyrics",
        "Recognise a song in 2 seconds",
        "Make playlists",
        "Follow beefs",
      ],
    },
    payoff: "This one's for everyone who never touches the mic.",
  },
  games: [
    {
      id: "rap-court",
      title: "RAP COURT",
      hook: "Two rappers enter. You argue. The crowd decides. No mic needed.",
      hero: true,
    },
    {
      id: "roast-that-rapper",
      title: "ROAST THAT RAPPER",
      hook: "Take your best shot. Keep it clean-ish.",
    },
    {
      id: "rapper-lookalike",
      title: "RAPPER LOOKALIKE",
      hook: "You think you look like MC Stan? Prove it.",
    },
    {
      id: "who-said-it",
      title: "WHO SAID IT?",
      hook: "Name the rapper from the bar. Harder than you think.",
    },
    {
      id: "did-they-say-that",
      title: "DID THEY ACTUALLY SAY THAT?",
      hook: "Real bar or made up? Your lyrical knowledge on trial.",
    },
    {
      id: "recognise-the-song",
      title: "RECOGNISE THE SONG",
      hook: "2 seconds. One chance. Can you name that track?",
    },
    {
      id: "playlist-bingo",
      title: "RAP PLAYLIST BINGO",
      hook: "Match the vibe to the song. Fill your card first.",
    },
    {
      id: "caption-this",
      title: "CAPTION THIS",
      hook: "One photo. Best caption wins. No rules.",
    },
  ],
  howItWorks: {
    title: "HOW IT WORKS",
    steps: [
      { number: 1, label: "Register", desc: "Drop your details, takes 60 seconds" },
      { number: 2, label: "Get your QR pass", desc: "Check your email, save the pass" },
      { number: 3, label: "Show up and post", desc: "Play the games, post stories tagging @wildhaibro" },
      { number: 4, label: "Scan your QR", desc: "Open your pass link after the event" },
      { number: 5, label: "Drop your screenshots", desc: "Upload your story screenshots" },
      { number: 6, label: "You're in", desc: "Wild certified. Winners announced soon" },
    ],
  },
  prizes: {
    title: "WHAT YOU WIN",
    gameWinners: "Win any game, win a Wild Stone perfume. Simple.",
    rapNameCard:
      "Every participant gets a Rap Name Card with a Wild Stone coupon. Post it, flex it.",
    mockRapName: "MC HYDRA",
  },
  fragrances: [
    {
      id: "edge",
      name: "EDGE",
      image: "/campaign/bottle_edge.jpg",
      personality: "Crisp woody marine notes with a sharp, clean finish.",
      color: "#1a4b8c",
    },
    {
      id: "king",
      name: "KING",
      image: "/campaign/bottle_king.jpg",
      personality: "Warm amber and spices for a confident, grounded presence.",
      color: "#2d8a4e",
    },
    {
      id: "icon",
      name: "ICON",
      image: "/campaign/bottle_icon.jpg",
      personality: "Fresh citrus and spicy aromatic accords designed to stand out.",
      color: "#c41e3a",
    },
    {
      id: "hydra-energy",
      name: "HYDRA ENERGY",
      image: "/campaign/bottle_hydra.jpg",
      personality: "Cool aquatic and mineral freshness tailored for high-energy days.",
      color: "#0d7a7a",
    },
    {
      id: "night-rider",
      name: "NIGHT RIDER",
      image: "/campaign/bottle_nightrider.jpg",
      personality: "Rich oriental and deep woody notes built for late-night cyphers.",
      color: "#b8860b",
    },
  ],
  faq: [
    {
      q: "Who can join?",
      a: "Any college student aged 18+ studying at one of the 10 Kolkata campuses.",
    },
    {
      q: "Is it free?",
      a: "100%. Free entry, free games, free vibes.",
    },
    {
      q: "What if I lose my pass?",
      a: "No stress. Go to the submission page and recover your pass with your email and a one-time code.",
    },
    {
      q: "What counts as a valid story?",
      a: "An Instagram story posted during the event that tags @wildhaibro. Screenshot it before it disappears.",
    },
    {
      q: "When do I submit my screenshots?",
      a: "After the event ends, you'll get an email with the submission link. The window stays open for a few days.",
    },
    {
      q: "When are winners announced?",
      a: "After all 10 colleges are done. Follow @wildhaibro for updates.",
    },
  ],
  wall: {
    title: "WALL OF THE WILD",
    subtitle: "Stories from the cypher. Hyderabad. Mumbai. Lucknow. Chandigarh. Delhi. Bangalore. Now Kolkata.",
  },
  footer: {
    links: [
      { label: "@wildhaibro", href: "https://instagram.com/wildhaibro" },
      { label: "@wildstoneofficial", href: "https://instagram.com/wildstoneofficial" },
    ],
    legal: ["Terms", "Privacy", "Contact"],
    credit: "by Wild Stone × Vigor Launchpad",
  },
  form: {
    title: "GET YOUR PASS",
    subtitle: "60 seconds. That's all it takes.",
    fields: {
      name: "Full name",
      email: "Email",
      phone: "WhatsApp number",
      college: "College",
      year: "Year of study",
      instagram: "Instagram handle",
      goat: "Who's your GOAT rapper?",
    },
    consent: "I'm 18+ and I accept the terms and privacy notice",
    marketing: "Send me updates on WhatsApp and email",
    submit: "Get my pass",
    submitting: "Generating...",
  },
  submission: {
    greeting: (name: string) => `Yo ${name}, drop your stories`,
    screenshotLabel: "Story screenshots (1-5)",
    tagConfirm: "My story tagged @wildhaibro",
    productLabel: "Which Wild Stone would you prefer?",
    submit: "Drop it",
    uploading: "Uploading...",
  },
  pass: {
    issued: "PASS MIL GAYA",
    savePhoto: "Save to photos",
    addCalendar: "Add to calendar",
    yourPass: "YOUR WILD HAI BRO PASS",
  },
  done: {
    stamp: "WILD CERTIFIED",
    thanks: "You're in. Keep it wild.",
    shareStory: "Share to story",
  },
  steps: [
    "Register",
    "Pass",
    "Event",
    "Scan",
    "Submit",
    "Done",
  ] as const,
} as const;

export type FragranceId = (typeof copy.fragrances)[number]["id"];
export type StepName = (typeof copy.steps)[number];
