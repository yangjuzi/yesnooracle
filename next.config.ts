import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // 301 permanent redirects: old .html URLs -> clean Next.js routes.
    // Only add entries here for pages that have been converted to React.
    // Unconverted pages keep being served from public/*.html as-is.
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/pendulum.html", destination: "/pendulum", permanent: true },
      {
        source: "/yes-no-button.html",
        destination: "/yes-no-button",
        permanent: true,
      },
      {
        source: "/crystal-ball.html",
        destination: "/crystal-ball",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
