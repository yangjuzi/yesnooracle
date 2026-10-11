import type { Config } from "tailwindcss";

// Separate Tailwind build for the legacy static pages kept in public/.
// Scans every public/*.html and compiles all classes used there into
// public/tw.css, replacing the slow cdn.tailwindcss.com runtime script.
// Run with: npm run build:public-css
const config: Config = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
