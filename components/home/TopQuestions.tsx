"use client";

const questions = [
  "Does he love me?",
  "Will I get the job?",
  "Is this the right time to invest?",
  "Should I move to a new city?",
  "Am I on the right path?",
  "Will I find love soon?",
  "Is now a good time to travel?",
  "Should I start a new hobby?",
  "Will I be successful?",
  "Is my friend trustworthy?",
  "Should I take that risk?",
  "Will I pass my exams?",
  "Is this a good relationship?",
  "Should I buy that item?",
  "Will I achieve my goals?",
  "Is it time to change jobs?",
  "Should I reach out to them?",
  "Will I get a promotion?",
  "Is my health improving?",
  "Should I marry him?",
];

const rows = [
  { items: questions.slice(0, 7), dir: "left" },
  { items: questions.slice(7, 14), dir: "right" },
  { items: questions.slice(14, 20), dir: "left" },
];

function QuestionPill({ q }: { q: string }) {
  return (
    <button
      onClick={() =>
        window.dispatchEvent(new CustomEvent("use-question", { detail: q }))
      }
      className="shrink-0 whitespace-nowrap bg-white/5 border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-500/10 text-gray-300 hover:text-white rounded-full px-4 py-2 text-sm transition"
    >
      {q}
    </button>
  );
}

function MarqueeRow({ items, dir }: { items: string[]; dir: string }) {
  return (
    <div className="marquee-mask" role="listitem">
      <div
        className={`marquee-track${dir === "right" ? " marquee-reverse" : ""}`}
      >
        <div className="marquee-group">
          {items.map((q) => (
            <QuestionPill key={q} q={q} />
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {items.map((q) => (
            <QuestionPill key={`dup-${q}`} q={q} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TopQuestions() {
  return (
    <div className="mt-5 max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-cinzel font-semibold mb-2 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text">
        Popular Yes/No Questions
      </h2>
      <p className="text-gray-400 text-sm mb-3">
        Click any question to ask the oracle
      </p>

      <div
        className="space-y-2"
        role="list"
        aria-label="Popular yes or no questions"
      >
        {rows.map((row, i) => (
          <MarqueeRow key={i} items={row.items} dir={row.dir} />
        ))}
      </div>

      <style>{`
        .marquee-mask {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 7%, #000 93%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 7%, #000 93%, transparent);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: question-marquee 45s linear infinite;
        }
        .marquee-track.marquee-reverse {
          animation-direction: reverse;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-group {
          display: flex;
          gap: 0.5rem;
          padding-right: 0.5rem;
        }
        @keyframes question-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
          .marquee-mask { overflow-x: auto; }
        }
      `}</style>
    </div>
  );
}
