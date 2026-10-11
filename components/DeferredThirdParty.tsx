"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/**
 * Loads GA + AdSense only after the visitor actually interacts with the page
 * (scroll / tap / key), with a timer fallback. Even next/script's lazyOnload
 * lands these scripts inside Lighthouse's TBT measurement window; gating on
 * interaction keeps first-party content interactive first.
 */
export default function DeferredThirdParty() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    const trigger = () => setLoaded(true);
    events.forEach((e) =>
      window.addEventListener(e, trigger, { once: true, passive: true })
    );
    const timer = setTimeout(trigger, 8000);
    return () => {
      events.forEach((e) => window.removeEventListener(e, trigger));
      clearTimeout(timer);
    };
  }, [loaded]);

  if (!loaded) return null;

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FLS1QMH9GM"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FLS1QMH9GM');
        `}
      </Script>

      {/* AdSense */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4461477700183709"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </>
  );
}
