import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrystalBallTool from "@/components/crystal-ball/CrystalBallTool";

export const metadata: Metadata = {
  title:
    "Crystal Ball Reading - Free Online Scrying & Divination Tool | Yes No Oracle",
  description:
    "Peer into our mystical crystal ball for divine guidance and spiritual insights. Experience authentic scrying divination with our free online crystal ball reader.",
  keywords:
    "crystal ball, scrying, divination, fortune telling, spiritual guidance, crystal ball reading, mystical predictions, online oracle, free divination",
  alternates: {
    canonical: "/crystal-ball",
  },
};

export default function CrystalBallPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-black via-indigo-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-cinzel mb-8 bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-400 text-transparent bg-clip-text">
              🔮 Crystal Ball 🔮
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Peer into the mystical crystal ball to unveil the secrets of your
              destiny and receive divine guidance
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <CrystalBallTool />

            {/* Mystical Elements */}
            <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
              <h2 className="text-2xl font-cinzel text-center mb-8 text-indigo-400">
                The Art of Crystal Gazing
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-3xl mb-3">🌙</div>
                  <h3 className="font-semibold mb-2">Lunar Wisdom</h3>
                  <p className="text-sm text-gray-400">
                    Insights from the moon&apos;s cycles
                  </p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-3xl mb-3">⭐</div>
                  <h3 className="font-semibold mb-2">Stellar Guidance</h3>
                  <p className="text-sm text-gray-400">Messages from the stars</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-3xl mb-3">🌟</div>
                  <h3 className="font-semibold mb-2">Divine Prophecy</h3>
                  <p className="text-sm text-gray-400">Visions of what&apos;s to come</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Crystal Ball Scrying Section */}
      <section className="py-24 bg-gradient-to-b from-black to-indigo-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-indigo-400">
              What is Crystal Ball Scrying?
            </h2>

            <div className="bg-white/5 rounded-lg p-8 shadow-2xl mb-8">
              <p className="text-lg text-gray-300 mb-6">
                Crystal ball scrying, also known as crystallomancy, is an
                ancient form of divination that involves gazing into a crystal
                sphere to receive visions, insights, and spiritual guidance.
                This mystical practice has been used for thousands of years by
                seers, fortune tellers, and spiritual practitioners to glimpse
                into the future and uncover hidden truths.
              </p>

              <p className="text-lg text-gray-300 mb-6">
                The crystal ball acts as a focal point for meditation and
                psychic perception, allowing the practitioner to enter an
                altered state of consciousness where intuitive insights can
                flow freely. The smooth, reflective surface of the crystal
                creates an ideal medium for receiving and interpreting symbolic
                visions.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    🔮 How It Works
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Focus your mind and ask a clear question</li>
                    <li>• Gaze into the crystal ball with relaxed attention</li>
                    <li>• Allow images and impressions to arise naturally</li>
                    <li>• Interpret the symbols and messages received</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    ✨ Benefits
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Gain clarity on important decisions</li>
                    <li>• Receive spiritual guidance and wisdom</li>
                    <li>• Develop intuitive abilities</li>
                    <li>• Connect with higher consciousness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History and Origins Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-indigo-400">
              Ancient Origins of Crystal Ball Divination
            </h2>

            <div className="bg-white/5 rounded-lg p-8 shadow-2xl mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                    🏛️ Ancient Civilizations
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Crystal ball scrying dates back over 3,000 years, with
                    evidence found in ancient Celtic, Egyptian, and Greek
                    civilizations. The Druids of ancient Britain were
                    particularly skilled in the art of crystal gazing, using
                    polished beryl stones to divine the future.
                  </p>
                  <p className="text-gray-300">
                    In ancient Egypt, priests used crystal balls in temple
                    ceremonies to communicate with the gods and receive divine
                    guidance. The practice was considered so sacred that only
                    the highest-ranking spiritual leaders were permitted to
                    perform it.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                    🌍 Global Traditions
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Crystal ball divination spread across cultures worldwide. In
                    medieval Europe, it became associated with wise women and
                    court advisors. The famous prophet Nostradamus reportedly
                    used a crystal ball for his predictions.
                  </p>
                  <p className="text-gray-300">
                    Eastern traditions also embraced crystal scrying, with
                    Tibetan monks using crystal spheres for meditation and
                    spiritual insight. The practice remains an integral part of
                    many spiritual traditions today.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300 text-center">
                📜 Historical Timeline
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-400 pl-6">
                  <div className="font-semibold text-indigo-300">3000 BCE</div>
                  <p className="text-gray-300">
                    Early forms of scrying practiced in ancient Mesopotamia
                  </p>
                </div>
                <div className="border-l-4 border-indigo-400 pl-6">
                  <div className="font-semibold text-indigo-300">1500 BCE</div>
                  <p className="text-gray-300">
                    Egyptian priests use crystal balls in temple rituals
                  </p>
                </div>
                <div className="border-l-4 border-indigo-400 pl-6">
                  <div className="font-semibold text-indigo-300">500 BCE</div>
                  <p className="text-gray-300">
                    Celtic Druids master the art of crystal gazing
                  </p>
                </div>
                <div className="border-l-4 border-indigo-400 pl-6">
                  <div className="font-semibold text-indigo-300">1500 CE</div>
                  <p className="text-gray-300">
                    Crystal ball divination flourishes in Renaissance Europe
                  </p>
                </div>
                <div className="border-l-4 border-indigo-400 pl-6">
                  <div className="font-semibold text-indigo-300">Present Day</div>
                  <p className="text-gray-300">
                    Modern practitioners combine ancient wisdom with
                    contemporary insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Crystal Balls Section */}
      <section className="py-24 bg-gradient-to-b from-black to-indigo-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-indigo-400">
              Types of Crystal Balls and Their Properties
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                  💎 Clear Quartz Crystal
                </h3>
                <p className="text-gray-300 mb-4">
                  The most traditional and popular choice for crystal ball
                  divination. Clear quartz is known as the &quot;master
                  healer&quot; and amplifies psychic abilities while providing
                  clarity of vision.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Best for:</strong> General divination, amplifying
                  intuition, clarity
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                  🌙 Moonstone Crystal
                </h3>
                <p className="text-gray-300 mb-4">
                  Connected to lunar energy and feminine wisdom, moonstone
                  crystal balls enhance intuitive abilities and provide insights
                  into emotional matters and relationships.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Best for:</strong> Emotional guidance, relationships,
                  feminine energy
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                  🔮 Amethyst Crystal
                </h3>
                <p className="text-gray-300 mb-4">
                  Known for its spiritual properties, amethyst crystal balls
                  enhance psychic abilities and provide protection during
                  divination sessions. They&apos;re excellent for spiritual
                  growth.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Best for:</strong> Spiritual guidance, psychic
                  protection, meditation
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                  🌟 Rose Quartz Crystal
                </h3>
                <p className="text-gray-300 mb-4">
                  The stone of unconditional love, rose quartz crystal balls
                  are perfect for questions about love, relationships, and
                  matters of the heart.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Best for:</strong> Love questions, heart matters,
                  emotional healing
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                  🖤 Black Obsidian
                </h3>
                <p className="text-gray-300 mb-4">
                  A powerful protective stone, black obsidian crystal balls are
                  used for deep introspection and revealing hidden truths. They
                  provide grounding energy.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Best for:</strong> Deep insights, protection,
                  revealing truth
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                  🌈 Fluorite Crystal
                </h3>
                <p className="text-gray-300 mb-4">
                  Known as the &quot;genius stone,&quot; fluorite crystal balls
                  enhance mental clarity and focus, making them ideal for
                  questions requiring logical analysis.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Best for:</strong> Mental clarity, decision-making,
                  focus
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Guide Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-indigo-400">
              Complete Guide to Crystal Ball Reading
            </h2>

            <div className="bg-white/5 rounded-lg p-8 shadow-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300">
                🎯 Step-by-Step Instructions
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-indigo-400 pl-6">
                  <h4 className="text-xl font-semibold mb-2 text-indigo-300">
                    Step 1: Preparation
                  </h4>
                  <p className="text-gray-300">
                    Create a quiet, dimly lit space free from distractions.
                    Cleanse your crystal ball with sage or moonlight. Set your
                    intention and formulate a clear question.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-400 pl-6">
                  <h4 className="text-xl font-semibold mb-2 text-indigo-300">
                    Step 2: Centering
                  </h4>
                  <p className="text-gray-300">
                    Sit comfortably with the crystal ball at eye level. Take
                    deep breaths and clear your mind. Allow yourself to enter a
                    relaxed, meditative state.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-400 pl-6">
                  <h4 className="text-xl font-semibold mb-2 text-indigo-300">
                    Step 3: Gazing
                  </h4>
                  <p className="text-gray-300">
                    Gaze softly into the crystal ball without forcing your
                    vision. Let your eyes relax and allow images, symbols, or
                    impressions to arise naturally.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-400 pl-6">
                  <h4 className="text-xl font-semibold mb-2 text-indigo-300">
                    Step 4: Interpretation
                  </h4>
                  <p className="text-gray-300">
                    Trust your intuition when interpreting the visions. Note any
                    symbols, colors, or feelings that arise. Don&apos;t
                    overthink - go with your first impressions.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-400 pl-6">
                  <h4 className="text-xl font-semibold mb-2 text-indigo-300">
                    Step 5: Recording
                  </h4>
                  <p className="text-gray-300">
                    Write down your insights immediately after the session. Keep
                    a divination journal to track patterns and improve your
                    interpretation skills over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300">
                💡 Tips for Better Readings
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-indigo-300">
                    🌟 Enhancing Your Practice
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Practice regularly to develop your abilities</li>
                    <li>• Use candles or soft lighting for ambiance</li>
                    <li>• Keep a divination journal</li>
                    <li>• Trust your first impressions</li>
                    <li>• Don&apos;t force the visions to come</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-indigo-300">
                    ⚠️ Common Mistakes to Avoid
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Trying too hard to see something</li>
                    <li>• Reading when emotionally upset</li>
                    <li>• Asking the same question repeatedly</li>
                    <li>• Ignoring your intuitive feelings</li>
                    <li>• Practicing when tired or distracted</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications and Uses Section */}
      <section className="py-24 bg-gradient-to-b from-black to-indigo-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-indigo-400">
              Applications of Crystal Ball Divination
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <div className="text-4xl mb-4 text-center">💕</div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  Love &amp; Relationships
                </h3>
                <p className="text-gray-300 mb-4">
                  Gain insights into romantic relationships, compatibility, and
                  matters of the heart. Crystal ball readings can reveal the
                  true nature of relationships and future romantic prospects.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Common Questions:</strong> Will I find love? Is this
                  relationship right for me? What does my partner truly feel?
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <div className="text-4xl mb-4 text-center">💼</div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  Career &amp; Business
                </h3>
                <p className="text-gray-300 mb-4">
                  Receive guidance on career decisions, business ventures, and
                  professional growth. Crystal ball divination can illuminate
                  the path to success and warn of potential obstacles.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Common Questions:</strong> Should I change careers?
                  Will this business succeed? What opportunities await me?
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <div className="text-4xl mb-4 text-center">🏠</div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  Family &amp; Home
                </h3>
                <p className="text-gray-300 mb-4">
                  Explore family dynamics, household decisions, and domestic
                  matters. Crystal ball readings can provide clarity on family
                  relationships and home-related choices.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Common Questions:</strong> Should we move? How can I
                  improve family harmony? What&apos;s best for my children?
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <div className="text-4xl mb-4 text-center">🌱</div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  Personal Growth
                </h3>
                <p className="text-gray-300 mb-4">
                  Discover your spiritual path, personal development
                  opportunities, and inner wisdom. Crystal ball divination
                  supports self-discovery and spiritual evolution.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Common Questions:</strong> What is my life purpose?
                  How can I grow spiritually? What lessons do I need to learn?
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <div className="text-4xl mb-4 text-center">💰</div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  Financial Matters
                </h3>
                <p className="text-gray-300 mb-4">
                  Gain insights into financial decisions, investments, and
                  money matters. Crystal ball readings can reveal opportunities
                  for prosperity and warn of financial challenges.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Common Questions:</strong> Will this investment pay
                  off? How can I improve my finances? What financial
                  opportunities are coming?
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <div className="text-4xl mb-4 text-center">🌟</div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  Life Decisions
                </h3>
                <p className="text-gray-300 mb-4">
                  Navigate major life choices and crossroads with confidence.
                  Crystal ball divination provides clarity when facing important
                  decisions and life transitions.
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Common Questions:</strong> Which path should I
                  choose? What&apos;s the best decision for me? How will this
                  choice affect my future?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-indigo-400">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  ❓ How accurate are crystal ball readings?
                </h3>
                <p className="text-gray-300">
                  Crystal ball readings are tools for spiritual guidance and
                  self-reflection rather than precise predictions. Their
                  accuracy depends on the reader&apos;s intuitive abilities, the
                  clarity of the question, and the openness of the person
                  receiving the reading. They&apos;re best used as a source of
                  insight and inspiration rather than absolute truth.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  ❓ Can anyone learn to read crystal balls?
                </h3>
                <p className="text-gray-300">
                  Yes, anyone can develop crystal ball reading abilities with
                  practice and patience. While some people may have natural
                  intuitive gifts, crystal ball scrying is a skill that can be
                  learned and improved over time. Regular practice, meditation,
                  and trust in your intuition are key to developing your
                  abilities.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  ❓ What should I do if I don&apos;t see anything in the crystal
                  ball?
                </h3>
                <p className="text-gray-300">
                  Not seeing visual images is completely normal, especially for
                  beginners. Many people receive impressions through feelings,
                  thoughts, or subtle sensations rather than clear visual
                  images. Don&apos;t force it - relax and trust whatever comes
                  to you. Sometimes the message is in the feeling or knowing
                  rather than seeing.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  ❓ How often should I consult the crystal ball?
                </h3>
                <p className="text-gray-300">
                  There&apos;s no set rule, but it&apos;s generally recommended
                  not to ask the same question repeatedly or consult the
                  crystal ball obsessively. Allow time for insights to
                  integrate and manifest. For personal guidance, once a week or
                  when facing important decisions is usually sufficient. Trust
                  your intuition about when to seek guidance.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  ❓ Are crystal ball readings safe?
                </h3>
                <p className="text-gray-300">
                  Crystal ball readings are generally safe when approached with
                  respect and positive intention. However, it&apos;s important
                  to maintain emotional balance and not become overly dependent
                  on divination. If you feel anxious or obsessed with readings,
                  take a break and consider seeking guidance from a qualified
                  spiritual counselor.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-8 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  ❓ Can crystal ball readings predict the future?
                </h3>
                <p className="text-gray-300">
                  Crystal ball readings offer insights into potential futures
                  based on current energies and patterns, but the future is not
                  fixed. Your choices and actions can influence outcomes. Think
                  of crystal ball readings as guidance for navigating
                  possibilities rather than predetermined fate. They&apos;re most
                  valuable for gaining perspective and clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      <section className="py-24 bg-gradient-to-b from-black to-indigo-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-12 text-indigo-400">
              Explore More Divination Tools
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <a
                href="/tarot-reader.html"
                className="bg-white/5 rounded-lg p-6 shadow-2xl hover:bg-white/10 transition group"
              >
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition">
                  🃏
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                  Tarot Card Reading
                </h3>
                <p className="text-gray-300 text-sm">
                  Discover your destiny through the ancient wisdom of tarot
                  cards and symbolic interpretation.
                </p>
              </a>

              <a
                href="/yes-no-astrology.html"
                className="bg-white/5 rounded-lg p-6 shadow-2xl hover:bg-white/10 transition group"
              >
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition">
                  ⭐
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                  Astrology Oracle
                </h3>
                <p className="text-gray-300 text-sm">
                  Receive cosmic guidance based on celestial movements and
                  astrological wisdom.
                </p>
              </a>

              <a
                href="/pendulum"
                className="bg-white/5 rounded-lg p-6 shadow-2xl hover:bg-white/10 transition group"
              >
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition">
                  🪬
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                  Pendulum Divination
                </h3>
                <p className="text-gray-300 text-sm">
                  Get clear yes/no answers through the ancient art of pendulum
                  dowsing.
                </p>
              </a>

              <a
                href="/8-ball.html"
                className="bg-white/5 rounded-lg p-6 shadow-2xl hover:bg-white/10 transition group"
              >
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition">
                  🎱
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                  Magic 8-Ball
                </h3>
                <p className="text-gray-300 text-sm">
                  Ask the mystical 8-ball for instant answers to your burning
                  questions.
                </p>
              </a>

              <a
                href="/fortune-cookie.html"
                className="bg-white/5 rounded-lg p-6 shadow-2xl hover:bg-white/10 transition group"
              >
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition">
                  🥠
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                  Fortune Cookie
                </h3>
                <p className="text-gray-300 text-sm">
                  Crack open digital fortune cookies for wisdom and
                  inspirational messages.
                </p>
              </a>

              <a
                href="/mood-ring.html"
                className="bg-white/5 rounded-lg p-6 shadow-2xl hover:bg-white/10 transition group"
              >
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition">
                  💍
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                  Mood Ring Oracle
                </h3>
                <p className="text-gray-300 text-sm">
                  Discover your emotional state and receive guidance based on
                  your current mood.
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
