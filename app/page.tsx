import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OracleHero from "@/components/home/OracleHero";

export const metadata: Metadata = {
  title: "Free Online Yes No Oracle | Get Accurate Yes or No Answers",
  description:
    "Get instant, accurate yes-or-no answers with our free online oracle. Simply type your question to make quick decisions and receive immediate guidance.",
  keywords:
    "yes no oracle, decision making, online oracle, yes or no questions, instant answers, free oracle, decision tool, mystical guidance",
  authors: [{ name: "Yes No Oracle" }],
  robots: "index, follow",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      zh: "/",
      es: "/",
    },
  },
  openGraph: {
    title: "Yes No Oracle - Free Online Yes or No Oracle",
    description:
      "Get instant accurate yes or no answers to your questions with our free online oracle. Make better decisions with our mystical yes or no oracle tool.",
    type: "website",
    url: "/",
    siteName: "Yes No Oracle",
    images: ["https://yesnooracle.dev/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yes No Oracle - Free Online Decision Making Tool",
    description:
      "Get instant accurate yes or no answers to your questions with our free online oracle.",
    images: ["https://yesnooracle.dev/icon-512.png"],
  },
  icons: {
    icon: [
      { url: "/assets/favicon-CRIAOuLO.ico", type: "image/x-icon" },
      { url: "/assets/icon-192-4YI15qr3.png", sizes: "192x192" },
      { url: "/assets/icon-512-lNYfd2FB.png", sizes: "512x512" },
      {
        url: "/assets/icon-192-maskable-B_rIKLgq.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/assets/icon-512-maskable-By6sizpc.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/assets/apple-touch-icon-DipJEJmU.png",
  },
  other: {
    "fo-verify": "738e58b6-9582-4083-99fe-90518ff2d3ae",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How accurate is the oracle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The oracle provides random yes/no answers, so it's not about predicting the future. Think of it as a digital coin flip that helps you explore your own feelings about a decision.",
      },
    },
    {
      "@type": "Question",
      name: "What types of questions work best?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Questions that can be answered with yes or no work perfectly. Instead of 'What should I do?', try 'Should I take this job?' or 'Is it time to end this relationship?'.",
      },
    },
    {
      "@type": "Question",
      name: "Is this just random chance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the answers are randomly generated. But your reaction to the answer often reveals what you were hoping to hear, which provides valuable insight.",
      },
    },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Yes No Oracle",
  description:
    "Free online oracle that provides instant yes or no answers to help you make decisions",
  url: "https://yesnooracle.dev/",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: { "@type": "Organization", name: "Yes No Oracle" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    ratingCount: "1000",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://yesnooracle.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Oracle",
      item: "https://yesnooracle.dev/#oracle",
    },
  ],
};

const quickTools = [
  { icon: "🔘", name: "Yes No Button", desc: "Quick yes/no decisions", href: "/yes-no-button", cta: "Try Now →" },
  { icon: "💰", name: "Coin Flip", desc: "Classic coin toss", href: "/coin-flip.html", cta: "Flip Now →" },
  { icon: "🎯", name: "Yes No Wheel", desc: "Spin for answers", href: "/yes-no-wheel.html", cta: "Spin Now →" },
  { icon: "🎱", name: "Magic 8 Ball", desc: "Ask the magic 8 ball", href: "/8-ball.html", cta: "Ask Now →" },
];

const mysticalTools = [
  { icon: "🔮", name: "Tarot Reader", href: "/tarot-reader.html", cta: "Read Cards →" },
  { icon: "🌟", name: "Astrology", href: "/yes-no-astrology.html", cta: "Ask Stars →" },
  { icon: "⚖️", name: "Pendulum", href: "/pendulum", cta: "Consult →" },
  { icon: "🔮", name: "Crystal Ball", href: "/crystal-ball", cta: "See Vision →" },
  { icon: "🥠", name: "Fortune Cookie", href: "/fortune-cookie.html", cta: "Open →" },
];

const personalTools = [
  { icon: "💫", name: "Daily Affirmations", href: "/daily-affirmations.html", cta: "Get Inspired →" },
  { icon: "💍", name: "Mood Ring", href: "/mood-ring.html", cta: "Check Mood →" },
  { icon: "🎰", name: "Lucky Numbers", href: "/lucky-numbers.html", cta: "Get Lucky →" },
  { icon: "💎", name: "Values Alignment", href: "/values-alignment-tool.html", cta: "Align →" },
];

const analyticalTools = [
  { icon: "⚖️", name: "Pros & Cons", href: "/pros-cons-tool.html", cta: "Analyze →" },
  { icon: "📊", name: "Priority Matrix", href: "/priority-matrix-tool.html", cta: "Prioritize →" },
  { icon: "🎯", name: "SWOT Analysis", href: "/swot-analysis-tool.html", cta: "Analyze →" },
  { icon: "🌳", name: "Decision Tree", href: "/decision-tree-tool.html", cta: "Build Tree →" },
];

const randomTools = [
  { icon: "🎲", name: "Random Numbers", href: "/random-number.html", cta: "Generate →" },
  { icon: "🎯", name: "Random Selector", href: "/random-selector.html", cta: "Select →" },
  { icon: "🎲", name: "Dice Roller", href: "/dice-roller.html", cta: "Roll →" },
  { icon: "🎭", name: "Truth or Dare", href: "/truth-or-dare.html", cta: "Play →" },
  { icon: "🎯", name: "Draw Lots", href: "/draw-lots.html", cta: "Draw →" },
];

const faqs = [
  {
    q: "How accurate is the oracle?",
    a: "The oracle provides random yes/no answers, so it's not about predicting the future. Think of it as a digital coin flip that helps you explore your own feelings about a decision. Sometimes just asking the question and seeing an answer helps clarify what you really want.",
  },
  {
    q: "What types of questions work best?",
    a: "Questions that can be answered with yes or no work perfectly. Instead of \u201cWhat should I do?\u201d, try \u201cShould I take this job?\u201d or \u201cIs it time to end this relationship?\u201d. The clearer your question, the more useful the experience becomes.",
  },
  {
    q: "Is this just random chance?",
    a: "Yes, the answers are randomly generated. But here's the interesting part - your reaction to the answer often reveals what you were hoping to hear. If you get \u201cNo\u201d and feel disappointed, that tells you something important about what you actually want.",
  },
  {
    q: "Can I ask the same question multiple times?",
    a: "You can, but it's usually not helpful. If you keep asking until you get the answer you want, you're probably ignoring your own instincts. The first answer is often the most revealing because it shows your immediate reaction.",
  },
  {
    q: "Should I make important decisions based on this?",
    a: "The oracle is a fun tool for reflection, not a replacement for careful thinking. Use it to explore your feelings or break through indecision, but always consider the real-world consequences of your choices. Trust your judgment, not random chance.",
  },
  {
    q: "What if I don't like the answer?",
    a: "That's actually valuable information! Your disappointment or relief reveals your true preferences. The oracle isn't telling you what to do - it's helping you discover what you already feel inside.",
  },
  {
    q: "How do the different tools work?",
    a: "Each tool offers a different experience but the same core function. The coin flip is quick and simple, the wheel adds visual excitement, the 8-ball gives classic responses, and the tarot cards provide more detailed interpretations. Choose whatever feels right for your mood.",
  },
  {
    q: "Are there questions I shouldn't ask?",
    a: "Avoid questions about other people's private thoughts or feelings (\u201cDoes John love me?\u201d), medical decisions (\u201cDo I have cancer?\u201d), or anything where you need professional advice. Stick to personal choices where you're the decision-maker.",
  },
  {
    q: "Why do people use oracles and divination?",
    a: "Throughout history, people have used various methods to help with difficult decisions. Sometimes we know what we want to do but need permission to do it. Sometimes we're truly stuck and need a way to move forward. The oracle provides a gentle push in either direction.",
  },
  {
    q: "What's the difference between this and real divination?",
    a: "Traditional divination systems like I Ching or tarot have rich symbolism and interpretation methods developed over centuries. Our oracle is much simpler - it's a modern tool for self-reflection rather than a spiritual practice. Both can be helpful in their own ways.",
  },
  {
    q: "Can children use this safely?",
    a: "The oracle is fine for kids to use for fun questions like \u201cShould I wear the red shirt today?\u201d But children should understand it's just a game, not real magic. Parents might want to supervise to ensure kids aren't asking about serious topics.",
  },
  {
    q: "How often should I use the oracle?",
    a: "There's no limit, but daily use for major decisions might indicate you're avoiding taking responsibility for your choices. It's most helpful when you're genuinely stuck or want a fresh perspective on something you've been thinking about.",
  },
];

function ToolCard({
  icon,
  name,
  href,
  cta,
  desc,
}: {
  icon: string;
  name: string;
  href: string;
  cta: string;
  desc?: string;
}) {
  return (
    <div className="tool-card bg-white/5 rounded-lg p-4 border border-purple-500/20 text-center">
      <div className="text-2xl mb-1.5">{icon}</div>
      <h3 className="font-semibold mb-1.5">{name}</h3>
      {desc && <p className="text-sm text-gray-400 mb-2">{desc}</p>}
      <a
        href={href}
        className="text-purple-400 hover:text-pink-300 transition text-sm"
      >
        {cta}
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        <OracleHero />

        <section className="py-16 bg-gradient-to-b from-black via-purple-900/10 to-black cv-auto">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-cinzel text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text">
              How to Get the Best Answers
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
              <div className="bg-white/5 rounded-lg p-5">
                <div className="text-purple-400 text-2xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold mb-2">Be Specific</h3>
                <p className="text-gray-400 text-sm">
                  Instead of &quot;Will I be happy?&quot;, try &quot;Should I accept
                  this job offer?&quot; Clear questions get clearer guidance.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-5">
                <div className="text-purple-400 text-2xl mb-3">🧘</div>
                <h3 className="text-lg font-semibold mb-2">Focus Your Intent</h3>
                <p className="text-gray-400 text-sm">
                  Take a moment to center yourself before asking. Your energy and
                  intention matter in divination.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-5">
                <div className="text-purple-400 text-2xl mb-3">💭</div>
                <h3 className="text-lg font-semibold mb-2">Trust Your Reaction</h3>
                <p className="text-gray-400 text-sm">
                  Your first emotional response to the answer often reveals what
                  you truly want. Pay attention to it.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-5">
                <div className="text-purple-400 text-2xl mb-3">🕰️</div>
                <h3 className="text-lg font-semibold mb-2">Timing Matters</h3>
                <p className="text-gray-400 text-sm">
                  Ask when you&apos;re calm and open. Avoid asking the same
                  question repeatedly in a short time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black cv-auto">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-cinzel text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text">
              What Our Users Say
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-5 text-center">
                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 mb-4 italic">
                  &quot;The oracle helped me make the best decision of my life.
                  Sometimes you just need that extra push!&quot;
                </p>
                <p className="text-purple-400 font-semibold">- Sarah M.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 text-center">
                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 mb-4 italic">
                  &quot;I love how it makes me think about what I really want.
                  It&apos;s not about the answer, it&apos;s about my reaction to it.&quot;
                </p>
                <p className="text-purple-400 font-semibold">- David L.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 text-center">
                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 mb-4 italic">
                  &quot;Simple, beautiful, and surprisingly insightful. I use it
                  whenever I&apos;m stuck between two choices.&quot;
                </p>
                <p className="text-purple-400 font-semibold">- Emma R.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black cv-auto">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-cinzel mb-4 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text">
                All Decision Making Tools
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto">
                Explore our complete collection of decision-making tools, from
                simple yes/no answers to complex analytical frameworks
              </p>
            </div>

            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Quick Answers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {quickTools.map((t) => (
                <ToolCard key={t.name} {...t} />
              ))}
            </div>

            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Mystical Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
              {mysticalTools.map((t) => (
                <ToolCard key={t.name} {...t} />
              ))}
            </div>

            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Personal Growth</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {personalTools.map((t) => (
                <ToolCard key={t.name} {...t} />
              ))}
            </div>

            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Analytical Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {analyticalTools.map((t) => (
                <ToolCard key={t.name} {...t} />
              ))}
            </div>

            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Random &amp; Fun</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {randomTools.map((t) => (
                <ToolCard key={t.name} {...t} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/decision-making-tools.html"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg text-lg hover:from-purple-700 hover:to-pink-700 transition shadow-lg"
              >
                View All Tools →
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 bg-black cv-auto">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-cinzel text-center mb-3 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text">
              Sacred Knowledge
            </h2>
            <p className="text-center text-gray-400 text-sm mb-10">
              Frequently asked questions about the oracle
            </p>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group bg-white/5 rounded-lg border border-purple-500/10"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none p-4 font-semibold text-gray-200 hover:text-white transition [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-purple-400 text-lg leading-none group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="px-4 pb-4 text-sm text-gray-400 leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-12 bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-6 text-center text-purple-400">
                Tips for Better Oracle Sessions
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-cyan-300">Before You Ask</h4>
                  <ul className="space-y-1.5 text-gray-400 list-disc list-inside">
                    <li>Take a moment to think about what you really want to know</li>
                    <li>Frame your question as a clear yes/no choice</li>
                    <li>Consider what each answer would mean for you</li>
                    <li>Be honest about what you&apos;re hoping to hear</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-cyan-300">After You Get an Answer</h4>
                  <ul className="space-y-1.5 text-gray-400 list-disc list-inside">
                    <li>Notice your immediate emotional reaction</li>
                    <li>Ask yourself why you feel that way</li>
                    <li>Consider what the answer reveals about your desires</li>
                    <li>Don&apos;t feel bound by the result - it&apos;s just input</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-cyan-300">Making Your Decision</h4>
                  <ul className="space-y-1.5 text-gray-400 list-disc list-inside">
                    <li>Use the oracle&apos;s answer as one factor among many</li>
                    <li>Trust your instincts and experience</li>
                    <li>Consider practical consequences</li>
                    <li>Take responsibility for your final choice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
