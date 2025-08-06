import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Don Kasjo – Kody BLIK, kasyna online, bonusy i promocje",
  description:
    "Dołącz do kanału Don Kasjo i zgarnij kody BLIK do polecanych kasyn online. Sprawdź najlepsze bonusy, promocje i instrukcje krok po kroku!",
  keywords:
    "kasyno, blik, bonus, don kasjo, kasyna online, promocje, kody blik",
  authors: [{ name: "Don Kasjo" }],
  publisher: "Don Kasjo",
  robots: "index, follow",
  alternates: {
    canonical: "https://don-kasjo-krol.vercel.app/",
  },
  openGraph: {
    title: "Don Kasjo – Kody BLIK, kasyna online, bonusy i promocje",
    description:
      "Dołącz do kanału Don Kasjo i zgarnij kody BLIK do polecanych kasyn online. Sprawdź najlepsze bonusy, promocje i instrukcje krok po kroku!",
    images: ["/icon.png"],
    type: "website",
    url: "https://don-kasjo-krol.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Don Kasjo – Kody BLIK, kasyna online, bonusy i promocje",
    description:
      "Dołącz do kanału Don Kasjo i zgarnij kody BLIK do polecanych kasyn online. Sprawdź najlepsze bonusy, promocje i instrukcje krok po kroku!",
    images: ["/icon.png"],
  },
  verification: {
    google: "eHaiWH6LKI2TlrisJsLFCc00YawJ8NPZkd3xqHkD8n0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
