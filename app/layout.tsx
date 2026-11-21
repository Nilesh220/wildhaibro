import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WILD HAI BRO | Kolkata Campus Tour",
  description:
    "Recognising the raw, representing the wild. Wild Stone's campus rap activation — games, vibes, and free perfume. Register now.",
  openGraph: {
    title: "WILD HAI BRO | Kolkata Campus Tour",
    description:
      "Rap games, street vibes, Wild Stone perfumes. 10 Kolkata colleges. Get your free pass.",
    type: "website",
    siteName: "Wild Hai Bro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WILD HAI BRO — Kolkata Campus Tour by Wild Stone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WILD HAI BRO | Kolkata Campus Tour",
    description: "Rap games, street vibes, Wild Stone perfumes. Get your free pass.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Lexend:wght@400;500;600;700&family=Tourney:ital,wght@0,300;0,600;1,300&family=Zen+Dots&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-ink text-bone font-[family-name:var(--font-body)] antialiased selection:bg-wild-orange selection:text-ink">
        {children}
      </body>
    </html>
  );
}
