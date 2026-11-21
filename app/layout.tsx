import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
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
        url: "/campaign/all_bottles.jpg",
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
    images: ["/campaign/all_bottles.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink text-bone font-[family-name:var(--font-body)] antialiased selection:bg-wild-orange selection:text-ink">
        {children}
      </body>
    </html>
  );
}
