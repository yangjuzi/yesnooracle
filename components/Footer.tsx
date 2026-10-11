const divination = [
  { href: "/crystal-ball", label: "Crystal Ball" },
  { href: "/8-ball.html", label: "Magic 8-Ball" },
  { href: "/pendulum", label: "Pendulum" },
  { href: "/tarot-reader.html", label: "Tarot Reader" },
  { href: "/fortune-cookie.html", label: "Fortune Cookie" },
  { href: "/yes-no-astrology.html", label: "Yes No Astrology" },
];

const decision = [
  { href: "/yes-no-button", label: "Yes No Button" },
  { href: "/yes-no-wheel.html", label: "Yes No Wheel" },
  { href: "/decision-matrix.html", label: "Decision Matrix" },
  { href: "/pros-cons-tool.html", label: "Pros & Cons" },
  { href: "/decision-tree-tool.html", label: "Decision Tree" },
  { href: "/priority-matrix-tool.html", label: "Priority Matrix" },
  { href: "/cost-benefit-tool.html", label: "Cost-Benefit Analysis" },
  { href: "/swot-analysis-tool.html", label: "SWOT Analysis" },
  { href: "/risk-assessment-tool.html", label: "Risk Assessment" },
  { href: "/values-alignment-tool.html", label: "Values Alignment" },
  { href: "/ten-ten-ten-tool.html", label: "10-10-10 Rule" },
];

const random = [
  { href: "/coin-flip.html", label: "Coin Flip" },
  { href: "/dice-roller.html", label: "Dice Roller" },
  { href: "/random-number.html", label: "Random Number" },
  { href: "/random-selector.html", label: "Random Selector" },
  { href: "/draw-lots.html", label: "Draw Lots" },
  { href: "/lucky-numbers.html", label: "Lucky Numbers" },
];

function LinkColumn({
  title,
  color,
  links,
}: {
  title: string;
  color: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className={`text-lg font-semibold mb-4 ${color}`}>{title}</h4>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-gray-400 hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-cinzel mb-4">Yes No Oracle</h3>
            <p className="text-gray-400 mb-4">
              Bridging ancient wisdom and modern insight, we provide tools to
              guide your decisions and explore possibilities.
            </p>
          </div>
          <LinkColumn
            title="Divination Tools"
            color="text-purple-400"
            links={divination}
          />
          <LinkColumn
            title="Decision Tools"
            color="text-blue-400"
            links={decision}
          />
          <LinkColumn
            title="Random Tools"
            color="text-green-400"
            links={random}
          />
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <div className="mb-2">
            <a href="/about-us.html" className="hover:text-purple-400 transition">
              About Us
            </a>{" "}
            |{" "}
            <a
              href="/contact-us.html"
              className="hover:text-purple-400 transition"
            >
              Contact Us
            </a>{" "}
            |{" "}
            <a
              href="/privacy-policy.html"
              className="hover:text-purple-400 transition"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="/terms-of-service.html"
              className="hover:text-purple-400 transition"
            >
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="/sitemap.xml" className="hover:text-purple-400 transition">
              Sitemap
            </a>
          </div>
          <div>© 2026 Yes No Oracle. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
