import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import DeferredThirdParty from "@/components/DeferredThirdParty";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yesnooracle.dev"),
  icons: {
    icon: "/assets/favicon-CRIAOuLO.ico",
    apple: "/assets/apple-touch-icon-DipJEJmU.png",
  },
  other: {
    "google-adsense-account": "ca-pub-4461477700183709",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${inter.variable} bg-black text-white`}>
        {children}

        {/* GA + AdSense: gated on first user interaction so they never compete
            with first-party rendering (see DeferredThirdParty for details). */}
        <DeferredThirdParty />
      </body>
    </html>
  );
}
