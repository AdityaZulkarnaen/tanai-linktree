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
  metadataBase: new URL("https://linktr.ee"),
  title: "Daeng Mamanggung | KKN Kareba Kumba 2026",
  description: "Official Linktree Tim KKN Daeng Mamanggung - Berlayar dengan Reso, Menapak dengan Siri', Mengabdi dengan Hati.",
  openGraph: {
    title: "Daeng Mamanggung | KKN Kareba Kumba 2026",
    description: "Berlayar dengan Reso, Menapak dengan Siri', Mengabdi dengan Hati.",
    url: "https://linktr.ee/daengmamanggung",
    siteName: "Daeng Mamanggung Linktree",
    images: [
      {
        url: "/team-avatar.png",
        width: 400,
        height: 400,
        alt: "Tim KKN Daeng Mamanggung",
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
      </body>
    </html>
  );
}
