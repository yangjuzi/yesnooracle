import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import Script from "next/script";
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

        {/* Google Analytics — lazyOnload: afterInteractive makes Next preload
            gtag.js in <head>, which competes with the LCP resource. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FLS1QMH9GM"
          strategy="lazyOnload"
        />
        <Script id="ga-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FLS1QMH9GM');
          `}
        </Script>

        {/* AdSense — the heaviest third-party script (~500KB incl. its own
            sub-resources). lazyOnload defers it until after window.load +
            idle, so LCP/TBT are measured on first-party content only. */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4461477700183709"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
