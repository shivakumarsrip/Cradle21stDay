import type { Metadata, Viewport } from "next";
import { Cinzel_Decorative, Cormorant_Garamond, Plus_Jakarta_Sans, Noto_Serif_Telugu } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const notoTelugu = Noto_Serif_Telugu({
  subsets: ["telugu"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-telugu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sravya & Prem Kumar's Son's Cradle & Name Reveal Ceremony | 29 August 2026",
  description:
    "With joy and blessings, we invite you to celebrate Sravya & Prem Kumar's son's Cradle & Name Reveal Ceremony (డోలారోహణ మహోత్సవం) on Saturday, 29 August 2026 at MSR Gardens, Kattangur.",
  metadataBase: new URL("https://cradle-and-naming-ceremony.vercel.app"),
  openGraph: {
    title: "Sravya & Prem Kumar's Son's Cradle & Name Reveal Ceremony | 29 August 2026",
    description:
      "With joy and blessings, we invite you to celebrate Sravya & Prem Kumar's son's Cradle & Name Reveal Ceremony (డోలారోహణ మహోత్సవం) on Saturday, 29 August 2026 at MSR Gardens, Kattangur.",
    url: "https://cradle-and-naming-ceremony.vercel.app",
    siteName: "Cradle & Name Reveal Ceremony Invitation",
    images: [
      {
        url: "https://cradle-and-naming-ceremony.vercel.app/images/og_image.jpg",
        secureUrl: "https://cradle-and-naming-ceremony.vercel.app/images/og_image.jpg",
        width: 1200,
        height: 675,
        type: "image/jpeg",
        alt: "Sravya & Prem Kumar's Son's Cradle & Name Reveal Ceremony Invitation - Saturday, 29 August 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sravya & Prem Kumar's Son's Cradle & Name Reveal Ceremony | 29 August 2026",
    description:
      "With joy and blessings, we invite you to celebrate Sravya & Prem Kumar's son's Cradle & Name Reveal Ceremony (డోలారోహణ మహోత్సవం) on Saturday, 29 August 2026 at MSR Gardens, Kattangur.",
    images: ["https://cradle-and-naming-ceremony.vercel.app/images/og_image.jpg"],
  },
  keywords: [
    "Cradle Ceremony",
    "Name Reveal Ceremony",
    "Dolarohana Mahothsavamu",
    "South Indian Invitation",
    "MSR Gardens Kattangur",
    "డోలారోహణ మహోత్సవం",
  ],
};

export const viewport: Viewport = {
  themeColor: "#FAF6EE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable} ${notoTelugu.variable}`}
    >
      <body className="bg-ivory-100 text-indigoaccent-900 antialiased selection:bg-gold-200 selection:text-indigoaccent-900">
        {children}
      </body>
    </html>
  );
}

