"use client";

import { useState } from "react";

export default function YesNoButtonTool() {
  const [answer, setAnswer] = useState(
    "Click the button to get your answer!"
  );
  const [question, setQuestion] = useState("");

  const trigger = async () => {
    const answers = ["Yes", "No"];
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setAnswer(`Q: ${question} - A: ${randomAnswer}`);

    const confetti = (await import("canvas-confetti")).default;
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <>
      <style jsx global>{`
        .button {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          cursor: pointer;
          transition: transform 0.3s ease;
          background-color: #4f46e5;
          color: white;
        }
        .button:hover {
          transform: scale(1.1);
          background-color: #4338ca;
        }
        .answer {
          font-size: 1.5rem;
          color: #fff;
          text-align: center;
          margin-top: 20px;
        }
      `}</style>

      <div className="bg-white/5 rounded-lg p-8 shadow-2xl mb-8">
        <div className="flex justify-center gap-8 mb-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question here"
            className="w-full max-w-md px-4 py-2 rounded-lg text-black"
          />
        </div>
        <div className="flex justify-center gap-8">
          <div
            className="button"
            role="button"
            tabIndex={0}
            onClick={trigger}
            onKeyDown={(e) => e.key === "Enter" && trigger()}
          >
            Click Me
          </div>
        </div>
        <div className="answer">{answer}</div>
      </div>
    </>
  );
}
