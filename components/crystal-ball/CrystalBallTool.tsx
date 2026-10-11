"use client";

import { useState } from "react";
import "./crystal-ball.css";

const visions = [
  "The path ahead is illuminated by your inner strength. Trust in your abilities and move forward with confidence.",
  "A new opportunity approaches like the dawn. Be ready to embrace change when it arrives.",
  "The answer you seek lies within your heart. Listen to your intuition and it will guide you true.",
  "Patience is your greatest ally now. What you desire will manifest in divine timing.",
  "Your kindness will return to you threefold. Continue to spread light wherever you go.",
  "A door that seemed closed will soon open. Persistence is the key you need.",
  "The universe conspires in your favor. Align your actions with your highest purpose.",
  "Wisdom comes through experience. Embrace both joy and challenge as teachers.",
  "Your creativity holds the solution. Think outside the boundaries of convention.",
  "A meaningful connection awaits. Be open to new relationships and collaborations.",
  "The seeds you plant today will bloom magnificently. Have faith in your efforts.",
  "Balance is needed in your life. Seek harmony between work, rest, and play.",
  "Your intuition is particularly strong now. Trust the subtle messages you receive.",
  "Courage is not the absence of fear, but action despite it. Be brave.",
  "The stars align for positive change. Embrace transformation with an open heart.",
  "Your generosity creates ripples of goodness. Continue to give freely.",
  "A lesson from the past will prove valuable. Reflect on your experiences.",
  "The energy you put out returns to you. Choose positivity and watch it multiply.",
  "Your dreams are closer than they appear. Take one more step forward.",
  "Communication is key to resolving current challenges. Speak your truth kindly.",
  "A period of growth and expansion begins. Prepare for new horizons.",
  "Your perseverance will be rewarded. Don't give up just before the breakthrough.",
  "The crystal reveals a time of healing and renewal. Allow yourself to recover.",
  "Adventure calls to your spirit. Say yes to new experiences and discoveries.",
  "Your leadership qualities are needed. Step forward and guide others.",
  "The answers you seek are already within you. Quiet your mind and listen.",
  "A cycle completes and a new one begins. Celebrate your progress.",
  "Your compassion is a gift to the world. Share it freely and abundantly.",
  "The path may seem unclear, but each step reveals the next. Keep walking.",
  "Your unique talents are about to be recognized. Shine your light brightly.",
];

export default function CrystalBallTool() {
  const [question, setQuestion] = useState("");
  const [consulting, setConsulting] = useState(false);
  const [vision, setVision] = useState<{
    question: string;
    text: string;
  } | null>(null);

  const revealVision = () => {
    const q = question.trim();
    if (!q) {
      alert("🔮 Please ask the crystal ball a question first! 🔮");
      return;
    }

    setConsulting(true);

    setTimeout(async () => {
      const randomVision = visions[Math.floor(Math.random() * visions.length)];
      setVision({ question: q, text: randomVision });
      setConsulting(false);

      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#8b5cf6", "#3b82f6", "#06b6d4", "#8b5cf6"],
      });
    }, 1500);
  };

  const resetCrystalBall = () => {
    setVision(null);
    setQuestion("");
  };

  return (
    <div className="bg-white/5 rounded-lg p-8 shadow-2xl mb-8">
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <div
            className={`mystical-smoke${consulting ? " active" : ""}`}
            aria-hidden="true"
          />
          <div
            className="crystal-ball mx-auto glow"
            role="button"
            tabIndex={0}
            aria-label="Click the crystal ball to receive your vision"
            onClick={revealVision}
            onKeyDown={(e) => e.key === "Enter" && revealVision()}
            style={
              consulting
                ? { boxShadow: "0 0 100px rgba(150,150,255,0.9)" }
                : undefined
            }
          />
          <div className="crystal-base" />
        </div>
        {!vision && (
          <p className="text-lg text-gray-300 mt-6">
            {consulting
              ? "The mists are gathering... your vision is forming..."
              : "Focus your mind and click the crystal ball to receive your vision..."}
          </p>
        )}
      </div>

      {/* Question Input */}
      <div className="mb-8">
        <div className="text-center mb-4">
          <label className="block text-lg font-semibold mb-3 text-indigo-300">
            🌟 Ask the Crystal Ball 🌟
          </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="What do you seek to know?"
            className="w-full max-w-md px-4 py-3 rounded-lg text-black border-2 border-indigo-400 mx-auto block"
          />
        </div>
      </div>

      {/* Vision Display */}
      {vision && (
        <div className="fade-in">
          <div className="vision-text">
            <div className="text-center">
              <div className="text-lg font-semibold mb-4 text-indigo-300">
                The Crystal Ball Reveals...
              </div>
              <div className="text-base mb-4 text-gray-300">
                &quot;{vision.question}&quot;
              </div>
              <div className="text-lg leading-relaxed font-medium">
                {vision.text}
              </div>
              <div className="text-sm text-gray-400 mt-6">
                ✨ The visions are ever-changing ✨
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={resetCrystalBall}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition text-white font-semibold"
            >
              Seek Another Vision
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
