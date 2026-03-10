import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "cheeky — Production House",
  description:
    "cheeky is a bold production house creating film, commercial and brand work that stops everything. We make the world stare.",
  keywords: [
    "production house",
    "film production",
    "commercial direction",
    "brand films",
    "cheeky",
    "video production",
  ],
  authors: [{ name: "cheeky" }],
  creator: "cheeky",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cheeky.studio",
    title: "cheeky — Production House",
    description:
      "cheeky is a bold production house creating film, commercial and brand work that stops everything.",
    siteName: "cheeky",
  },
  twitter: {
    card: "summary_large_image",
    title: "cheeky — Production House",
    description: "We make the world stare.",
    creator: "@cheekystudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
