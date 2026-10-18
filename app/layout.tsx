import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { kknData } from "@/data/kknData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(kknData.siteUrl),
  title: "Daeng Mamangung | KKN Kareba Kumba 2026",
  description: "Official Linktree Tim KKN Daeng Mamangung - Berlayar dengan Reso, Menapak dengan Siri', Mengabdi dengan Hati.",
  openGraph: {
    title: "Daeng Mamangung | KKN Kareba Kumba 2026",
    description: "Berlayar dengan Reso, Menapak dengan Siri', Mengabdi dengan Hati.",
    url: kknData.siteUrl,
    siteName: "Daeng Mamangung Linktree",
    images: [
      {
        url: "/bg.webp",
        width: 1280,
        height: 720,
        alt: "KKN Daeng Mamangung",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#161a1d] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
