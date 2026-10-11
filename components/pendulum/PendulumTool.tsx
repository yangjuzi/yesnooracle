"use client";

import { useState } from "react";
import "./pendulum.css";

const interpretations = {
  yes: [
    "The pendulum swings with confidence toward YES. The universe supports your path forward.",
    "A clear YES emerges from the cosmic energies. Trust in this positive guidance.",
    "The pendulum's movement is decisive - YES is your answer. Move forward with faith.",
    "Strong positive energy flows through the pendulum, indicating YES to your question.",
    "The sacred pendulum confirms YES. Your intuition aligns with universal wisdom.",
  ],
  no: [
    "The pendulum gently guides you toward NO. Sometimes protection comes through pause.",
    "A clear NO resonates from the pendulum's wisdom. Consider alternative paths.",
    "The pendulum's energy suggests NO for now. Timing may need adjustment.",
    "The universe speaks through the pendulum with a gentle NO. Trust this guidance.",
    "The pendulum's movement indicates NO. Perhaps deeper reflection is needed.",
  ],
};

export default function PendulumTool() {
  const [question, setQuestion] = useState("");
  const [consulting, setConsulting] = useState(false);
  const [swing, setSwing] = useState<"left" | "right" | null>(null);
  const [activeZone, setActiveZone] = useState<"yes" | "no" | null>(null);
  const [result, setResult] = useState<{
    question: string;
    answer: "yes" | "no";
    interpretation: string;
  } | null>(null);

  const consultPendulum = () => {
    const q = question.trim();
    if (!q) {
      alert("⚖️ Please enter your question before consulting the pendulum! ⚖️");
      return;
    }

    setConsulting(true);
    setResult(null);

    const answer: "yes" | "no" = Math.random() < 0.5 ? "yes" : "no";

    setTimeout(() => {
      setSwing(answer === "yes" ? "left" : "right");
      setActiveZone(answer);

      setTimeout(async () => {
        const pool = interpretations[answer];
        setResult({
          question: q,
          answer,
          interpretation: pool[Math.floor(Math.random() * pool.length)],
        });

        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors:
            answer === "yes"
              ? ["#22c55e", "#16a34a", "#15803d"]
              : ["#ef4444", "#dc2626", "#b91c1c"],
        });
      }, 2000);
    }, 500);
  };

  const resetPendulum = () => {
    setSwing(null);
    setActiveZone(null);
    setResult(null);
    setConsulting(false);
    setQuestion("");
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8 shadow-2xl mb-8">
      <div className="mb-8">
        <div className="text-center mb-6">
          <label className="block text-lg font-semibold mb-3 text-violet-300">
            🌟 Ask Your Question 🌟
          </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Focus your mind and ask your question..."
            className="w-full max-w-md px-4 py-3 rounded-lg text-black border-2 border-violet-400 mx-auto block"
          />
        </div>
        <div className="text-center">
          <button
            id="consult-pendulum"
            onClick={consultPendulum}
            disabled={consulting}
            className="bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3 rounded-lg hover:from-violet-700 hover:to-purple-700 transition text-white font-semibold disabled:opacity-60"
          >
            {consulting ? "🔮 Consulting... 🔮" : "🔮 Consult the Pendulum 🔮"}
          </button>
        </div>
      </div>

      <div className="pendulum-container">
        <div className="pendulum-stand" />
        <div
          className={`pendulum-string ${
            swing === "left" ? "swing-left" : swing === "right" ? "swing-right" : ""
          }`}
        >
          <div className="pendulum-weight" />
        </div>
        <div className="answer-zones">
          <div className={`answer-zone yes-zone ${activeZone === "yes" ? "active" : ""}`}>
            YES
          </div>
          <div className={`answer-zone no-zone ${activeZone === "no" ? "active" : ""}`}>
            NO
          </div>
        </div>
      </div>

      <div className="pendulum-instructions">
        <h3 className="text-lg font-semibold mb-3 text-violet-300">
          How to Use the Pendulum
        </h3>
        <div className="meditation-text">
          &quot;Clear your mind, focus on your question, and watch as the pendulum
          reveals the universe&apos;s answer&quot;
        </div>
        <div className="text-sm text-gray-400 space-y-2">
          <p>1. Enter your question in the field above</p>
          <p>2. Take a deep breath and center yourself</p>
          <p>3. Click &quot;Consult the Pendulum&quot; with focused intention</p>
          <p>4. Watch as the pendulum swings to reveal your answer</p>
        </div>
      </div>

      {result && (
        <div className="text-center mt-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <div className="text-lg font-semibold mb-2 text-violet-300">
              The Pendulum Has Spoken
            </div>
            <div className="text-base mb-4 text-gray-300">
              &quot;{result.question}&quot;
            </div>
            <div
              className={`text-3xl font-bold mb-4 ${
                result.answer === "yes" ? "text-green-400" : "text-red-400"
              }`}
            >
              {result.answer.toUpperCase()}
            </div>
            <div className="text-base text-gray-300 mb-6">{result.interpretation}</div>
            <button
              onClick={resetPendulum}
              className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-2 rounded-lg hover:from-green-700 hover:to-blue-700 transition"
            >
              Ask Another Question
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
