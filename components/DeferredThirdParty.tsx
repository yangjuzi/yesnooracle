"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/**
 * Loads GA only after the visitor actually interacts with the page
 * (scroll / tap / key), with a timer fallback. Even next/script's lazyOnload
 * lands this script inside Lighthouse's TBT measurement window; gating on
 * interaction keeps first-party content interactive first.
 *
 * AdSense is NOT deferred here: the standard async <script> tag lives in the
 * layout <head> so crawlers and AdSense verification see it in the page
 * source directly.
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
    </>
  );
}
