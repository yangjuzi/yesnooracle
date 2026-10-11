import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YesNoButtonTool from "@/components/yes-no-button/YesNoButtonTool";

export const metadata: Metadata = {
  title: "Yes No Button - Yes No Oracle",
  description:
    "Click the Yes or No button to get a quick answer to your question.",
  alternates: {
    canonical: "/yes-no-button",
  },
};

export default function YesNoButtonPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-cinzel mb-8 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text">
              Yes No Button
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              The simplest and fastest way to get a clear yes or no answer to
              any question. Perfect for quick decisions when you need instant
              clarity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <YesNoButtonTool />

            {/* How to Use */}
            <div className="bg-white/5 rounded-lg p-8 shadow-2xl mb-8">
              <h2 className="text-2xl font-cinzel font-semibold mb-6 text-center text-purple-400">
                How to Use the Yes No Button
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    Step 1: Ask Your Question
                  </h3>
                  <p className="text-gray-300">
                    Type your yes/no question in the input field. Be specific
                    and clear about what you&apos;re asking.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    Step 2: Click the Button
                  </h3>
                  <p className="text-gray-300">
                    Click the button to get your instant yes or no answer with a
                    fun confetti celebration!
                  </p>
                </div>
              </div>
            </div>

            {/* When to Use */}
            <div className="bg-white/5 rounded-lg p-8 shadow-2xl mb-8">
              <h2 className="text-2xl font-cinzel font-semibold mb-6 text-center text-purple-400">
                Perfect For These Situations
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Quick Decisions
                  </h3>
                  <p className="text-gray-300">
                    When you need an instant answer without overthinking
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">🎲</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Breaking Ties
                  </h3>
                  <p className="text-gray-300">
                    When you&apos;re stuck between two equally good options
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Simple Choices
                  </h3>
                  <p className="text-gray-300">
                    For straightforward yes/no questions in daily life
                  </p>
                </div>
              </div>
            </div>

            {/* Example Questions */}
            <div className="bg-white/5 rounded-lg p-8 shadow-2xl mb-8">
              <h2 className="text-2xl font-cinzel font-semibold mb-6 text-center text-purple-400">
                Example Questions
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    Daily Life
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Should I go out for dinner tonight?</li>
                    <li>• Should I call my friend back now?</li>
                    <li>• Should I watch a movie tonight?</li>
                    <li>• Should I go to bed early?</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    Work &amp; Study
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Should I take a break from work?</li>
                    <li>• Should I attend this meeting?</li>
                    <li>• Should I study for another hour?</li>
                    <li>• Should I apply for this position?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/5 rounded-lg p-8 shadow-2xl mb-8">
              <h2 className="text-2xl font-cinzel font-semibold mb-6 text-center text-purple-400">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    How does the Yes No Button work?
                  </h3>
                  <p className="text-gray-300">
                    The button uses a simple random algorithm to generate either
                    &quot;Yes&quot; or &quot;No&quot; answers. Each click gives
                    you a 50/50 chance of either response.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Can I trust the answers for important decisions?
                  </h3>
                  <p className="text-gray-300">
                    This tool is designed for fun and quick decisions. For
                    important life choices, we recommend using our more
                    comprehensive{" "}
                    <a
                      href="/decision-making-tools.html"
                      className="text-purple-400 hover:underline"
                    >
                      decision-making tools
                    </a>{" "}
                    or consulting with professionals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Why should I use this instead of flipping a coin?
                  </h3>
                  <p className="text-gray-300">
                    Our Yes No Button is always available, provides instant
                    feedback, and includes fun visual effects. Plus, you can
                    save your questions for reference!
                  </p>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
              <h2 className="text-2xl font-cinzel font-semibold mb-6 text-center text-purple-400">
                Try Our Other Tools
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Magic 8-Ball
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Get mystical answers with classic 8-ball responses
                  </p>
                  <a
                    href="/8-ball.html"
                    className="text-purple-400 hover:text-purple-300 transition"
                  >
                    Try Now →
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Yes No Wheel
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Spin the wheel for animated yes/no decisions
                  </p>
                  <a
                    href="/yes-no-wheel.html"
                    className="text-purple-400 hover:text-purple-300 transition"
                  >
                    Try Now →
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Oracle
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Get detailed mystical guidance for your questions
                  </p>
                  <a
                    href="/"
                    className="text-purple-400 hover:text-purple-300 transition"
                  >
                    Try Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
