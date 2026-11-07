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
      // Blog articles moved into the /blog/ subdirectory with keyword slugs.
      {
        source: "/blog-2.html",
        destination: "/blog/ask-better-questions.html",
        permanent: true,
      },
      {
        source: "/blog-4.html",
        destination: "/blog/divination-personal-growth.html",
        permanent: true,
      },
      {
        source: "/blog-5.html",
        destination: "/blog/yes-no-tools-comparison.html",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
