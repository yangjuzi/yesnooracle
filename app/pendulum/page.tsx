import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PendulumTool from "@/components/pendulum/PendulumTool";

export const metadata: Metadata = {
  title: "Pendulum Divination - Yes No Oracle",
  description:
    "Use the ancient art of pendulum divination to receive yes or no answers to your most important questions.",
  alternates: {
    canonical: "/pendulum",
  },
};

export default function PendulumPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-black via-violet-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-cinzel mb-8 bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400 text-transparent bg-clip-text">
              ⚖️ Pendulum Divination ⚖️
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Experience the ancient art of pendulum divination. Focus your
              energy and let the sacred pendulum reveal the truth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <PendulumTool />

            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8 shadow-2xl">
              <h2 className="text-2xl font-cinzel text-center mb-8 text-violet-400">
                The Art of Pendulum Divination
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-3xl mb-3">🕰️</div>
                  <h3 className="font-semibold mb-2">Ancient Wisdom</h3>
                  <p className="text-sm text-gray-400">
                    Used for centuries to seek guidance
                  </p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-3xl mb-3">🧘</div>
                  <h3 className="font-semibold mb-2">Focused Intent</h3>
                  <p className="text-sm text-gray-400">
                    Clear mind leads to clear answers
                  </p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="font-semibold mb-2">Energy Flow</h3>
                  <p className="text-sm text-gray-400">
                    Responds to your inner energy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Background Section */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-purple-300">
              The Ancient Art of Pendulum Divination
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                  Historical Origins
                </h3>
                <p className="text-gray-300 mb-4">
                  Pendulum divination, also known as dowsing, has roots that
                  stretch back thousands of years. Ancient civilizations
                  including the Egyptians, Greeks, and Chinese used pendulums
                  for divination and decision-making.
                </p>
                <p className="text-gray-300">
                  Archaeological evidence suggests that pendulum-like tools
                  were used in ancient Egypt for finding water sources and
                  making important decisions. The practice spread through
                  trade routes and cultural exchange.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                  Scientific Perspective
                </h3>
                <p className="text-gray-300 mb-4">
                  Modern science attributes pendulum movements to the
                  ideomotor effect - unconscious muscle movements that reflect
                  our subconscious thoughts and intuition.
                </p>
                <p className="text-gray-300">
                  Rather than supernatural forces, the pendulum acts as a
                  bridge between your conscious and unconscious mind, helping
                  you access inner wisdom and clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Pendulums Section */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-purple-300">
              Types of Pendulums and Their Properties
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">
                  Crystal Pendulums
                </h3>
                <p className="text-gray-300 mb-4">
                  Made from various crystals like quartz, amethyst, or rose
                  quartz. Each crystal is believed to carry specific energetic
                  properties.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Clear Quartz: Amplifies energy and clarity</li>
                  <li>Amethyst: Enhances intuition and spiritual connection</li>
                  <li>Rose Quartz: Promotes love and emotional healing</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">
                  Metal Pendulums
                </h3>
                <p className="text-gray-300 mb-4">
                  Crafted from metals like brass, copper, or silver. These
                  pendulums are durable and provide consistent movement
                  patterns.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Brass: Traditional and reliable</li>
                  <li>Copper: Conducts energy well</li>
                  <li>Silver: Associated with lunar energy</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">
                  Wooden Pendulums
                </h3>
                <p className="text-gray-300 mb-4">
                  Natural wood pendulums connect you to earth energy and
                  provide a gentle, organic feel during divination.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Oak: Strength and wisdom</li>
                  <li>Cedar: Protection and purification</li>
                  <li>Willow: Intuition and flexibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-purple-300">
              Mastering Pendulum Divination
            </h2>

            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                  Step 1: Preparation and Cleansing
                </h3>
                <p className="text-gray-300 mb-4">
                  Before using your pendulum, it&apos;s important to cleanse it
                  of any previous energies and establish a clear connection.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Hold the pendulum in your dominant hand</li>
                  <li>Take several deep breaths to center yourself</li>
                  <li>Set a clear intention for your session</li>
                  <li>Ask for guidance and protection</li>
                  <li>Visualize white light surrounding you and the pendulum</li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                  Step 2: Establishing Your Yes/No Responses
                </h3>
                <p className="text-gray-300 mb-4">
                  Each person&apos;s pendulum responds differently. You need to
                  calibrate your pendulum to understand its unique language.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Hold the pendulum still and ask &quot;Show me YES&quot;</li>
                  <li>
                    Observe the movement pattern (clockwise, counterclockwise,
                    side-to-side)
                  </li>
                  <li>Ask &quot;Show me NO&quot; and note the different pattern</li>
                  <li>Practice with questions you know the answers to</li>
                  <li>
                    Be patient - it may take several sessions to establish
                    clear patterns
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                  Step 3: Asking Effective Questions
                </h3>
                <p className="text-gray-300 mb-4">
                  The quality of your questions greatly affects the accuracy of
                  your readings. Follow these guidelines for best results.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Ask clear, specific yes/no questions</li>
                  <li>Avoid questions about timing or specific details</li>
                  <li>Focus on one question at a time</li>
                  <li>Phrase questions positively when possible</li>
                  <li>Be emotionally neutral about the outcome</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-purple-300">
              Advanced Techniques and Best Practices
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-200">
                    Creating Sacred Space
                  </h3>
                  <p className="text-gray-300">
                    Establish a quiet, comfortable environment free from
                    distractions. Light candles or incense to create a peaceful
                    atmosphere conducive to intuitive work.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-200">
                    Grounding Techniques
                  </h3>
                  <p className="text-gray-300">
                    Before each session, ground yourself by visualizing roots
                    extending from your feet into the earth. This helps
                    maintain clear, unbiased readings.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-200">
                    Recording Your Sessions
                  </h3>
                  <p className="text-gray-300">
                    Keep a journal of your pendulum sessions. Note the
                    questions asked, responses received, and how they relate
                    to actual outcomes over time.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-200">
                    Emotional Neutrality
                  </h3>
                  <p className="text-gray-300">
                    The most accurate readings come when you&apos;re emotionally
                    detached from the outcome. Practice maintaining objectivity
                    about your questions.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-200">
                    Regular Practice
                  </h3>
                  <p className="text-gray-300">
                    Like any skill, pendulum divination improves with practice.
                    Start with simple questions and gradually work up to more
                    complex inquiries.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-200">
                    Cleansing Between Sessions
                  </h3>
                  <p className="text-gray-300">
                    Clear your pendulum&apos;s energy between different
                    questions or sessions. This prevents interference from
                    previous readings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Applications Section */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-purple-300">
              Common Applications of Pendulum Divination
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                  Personal Decisions
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Career choices and job opportunities</li>
                  <li>Relationship decisions and compatibility</li>
                  <li>Health and wellness choices</li>
                  <li>Financial decisions and investments</li>
                  <li>Travel and relocation questions</li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                  Spiritual Growth
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Meditation and spiritual practices</li>
                  <li>Chakra balancing and energy work</li>
                  <li>Past life exploration</li>
                  <li>Spirit guide communication</li>
                  <li>Manifestation and goal setting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-purple-300">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">
                  How accurate are pendulum readings?
                </h3>
                <p className="text-gray-300">
                  Accuracy depends on your skill level, emotional state, and
                  the clarity of your questions. Many practitioners report
                  70-80% accuracy with practice. Remember, the pendulum
                  reflects your subconscious knowledge and intuition.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">
                  Can anyone learn to use a pendulum?
                </h3>
                <p className="text-gray-300">
                  Yes! While some people are naturally more sensitive to subtle
                  energies, anyone can learn pendulum divination with patience
                  and practice. The key is developing trust in your intuition
                  and maintaining an open mind.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">
                  What if my pendulum gives inconsistent answers?
                </h3>
                <p className="text-gray-300">
                  Inconsistent responses often indicate emotional attachment
                  to the outcome, unclear questions, or the need for cleansing.
                  Take a break, rephrase your question, or try again when
                  you&apos;re more centered.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">
                  Should I ask about other people&apos;s situations?
                </h3>
                <p className="text-gray-300">
                  It&apos;s generally best to focus on your own questions and
                  situations. Asking about others without their permission
                  raises ethical concerns and may produce less accurate results
                  since you lack direct connection to their energy.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-200">
                  How often should I use my pendulum?
                </h3>
                <p className="text-gray-300">
                  Use your pendulum as often as feels right for you. Some
                  people consult it daily for guidance, while others use it only
                  for important decisions. Trust your intuition about when to
                  seek pendulum guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-purple-300">
              Explore More Divination Tools
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="/crystal-ball"
                className="block bg-white/5 p-6 rounded-lg hover:bg-white/10 transition group"
              >
                <div className="text-4xl mb-4 text-center">🔮</div>
                <h3 className="text-xl font-semibold mb-2 text-purple-200 group-hover:text-purple-100">
                  Crystal Ball
                </h3>
                <p className="text-gray-300">
                  Gaze into the mystical crystal ball for divine predictions and
                  spiritual guidance.
                </p>
              </a>

              <a
                href="/tarot-reader.html"
                className="block bg-white/5 p-6 rounded-lg hover:bg-white/10 transition group"
              >
                <div className="text-4xl mb-4 text-center">🃏</div>
                <h3 className="text-xl font-semibold mb-2 text-purple-200 group-hover:text-purple-100">
                  Tarot Reader
                </h3>
                <p className="text-gray-300">
                  Discover insights about your past, present, and future
                  through tarot card readings.
                </p>
              </a>

              <a
                href="/yes-no-astrology.html"
                className="block bg-white/5 p-6 rounded-lg hover:bg-white/10 transition group"
              >
                <div className="text-4xl mb-4 text-center">⭐</div>
                <h3 className="text-xl font-semibold mb-2 text-purple-200 group-hover:text-purple-100">
                  Astrology Oracle
                </h3>
                <p className="text-gray-300">
                  Get yes/no answers based on astrological wisdom and cosmic
                  influences.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
