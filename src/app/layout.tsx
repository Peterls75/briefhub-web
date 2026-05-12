import type { Metadata } from "next";
import { Playfair_Display, Newsreader } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BriefHub",
  description:
    "The fastest, easiest and dare we say cheapest way to buy quality legal advice. A vetted network of senior commercial solicitors. Three comparable pitches at three fixed prices. Free for buyers.",
  metadataBase: new URL("https://briefhub.co"),
  openGraph: {
    title: "BriefHub",
    description: "Post your brief. Review pitches. Choose your lawyer.",
    url: "https://briefhub.co",
    siteName: "BriefHub",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        {children}
      </body>
    </html>
  );
}
