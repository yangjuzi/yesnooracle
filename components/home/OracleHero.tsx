"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TopQuestions from "./TopQuestions";
import "./home.css";

const yesAnswers = [
  "Yes",
  "Yes, Absolutely",
  "Yes, Definitely",
  "Yes, Of course",
  "Yes, Without a doubt",
  "Yes, follow your heart",
  "Yes, The stars align in your favor",
  "Yes, the time is right",
];

const noAnswers = [
  "No",
  "No, Not now",
  "No, The path is unclear",
  "No, Wait for a better time",
  "No, reconsider",
  "No, The universe suggests otherwise",
  "No, seek another way",
  "No, Not the right moment",
];

const dailyQuestions = [
  "Should I take more risks in my life?",
  "Is it time to let go of something that no longer serves me?",
  "Should I trust my intuition more?",
  "Is today a good day to start something new?",
  "Should I reach out to someone I've been thinking about?",
  "Is it time to make a change in my routine?",
  "Should I be more patient with myself?",
  "Is there something I need to forgive?",
  "Should I focus more on my personal growth?",
  "Is it time to step out of my comfort zone?",
  "Should I listen to my heart over my head today?",
  "Is there an opportunity I should consider?",
  "Should I be more grateful for what I have?",
  "Is it time to set new goals?",
  "Should I trust the process more?",
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

type HistoryItem = { question: string; answer: string; timestamp: string };

function hashQuestion(question: string) {
  let hash = 0;
  for (let i = 0; i < question.length; i++) {
    const char = question.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export default function OracleHero() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [consulting, setConsulting] = useState(false);
  const [dailyQuestion, setDailyQuestion] = useState(
    "Today's recommended question will appear here..."
  );
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  // Listen for question clicks from the Top Questions section
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) {
        setQuestion(detail);
        inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        inputRef.current?.focus();
      }
    };
    window.addEventListener("use-question", handler);
    return () => window.removeEventListener("use-question", handler);
  }, []);

  // Auto-grow textarea: 2 rows idle, up to ~6 rows, then internal scroll
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    // +2 compensates for the textarea's 1px top/bottom borders (box-sizing:
    // border-box), otherwise scrollHeight > clientHeight shows a scrollbar
    el.style.height = Math.min(el.scrollHeight + 2, 168) + "px";
  }, [question]);

  // Load daily question + history on mount
  useEffect(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem("daily_question_date");
    const savedQuestion = localStorage.getItem("daily_question");
    if (savedDate === today && savedQuestion) {
      setDailyQuestion(savedQuestion);
    } else {
      const q =
        dailyQuestions[Math.floor(Math.random() * dailyQuestions.length)];
      localStorage.setItem("daily_question", q);
      localStorage.setItem("daily_question_date", today);
      setDailyQuestion(q);
    }
    try {
      setHistory(JSON.parse(localStorage.getItem("oracle_history") || "[]"));
    } catch {
      setHistory([]);
    }
  }, []);

  const saveHistory = useCallback((q: string, a: string) => {
    let h: HistoryItem[] = [];
    try {
      h = JSON.parse(localStorage.getItem("oracle_history") || "[]");
    } catch {
      h = [];
    }
    h.unshift({
      question: q,
      answer: a,
      timestamp: new Date().toLocaleString(),
    });
    if (h.length > 10) h = h.slice(0, 10);
    localStorage.setItem("oracle_history", JSON.stringify(h));
    setHistory(h);
  }, []);

  const askOracle = useCallback(async () => {
    const q = question.trim();
    if (!q) {
      alert("Please enter a question first.");
      return;
    }

    // Cached answer (1 hour) keeps the original behavior: same question
    // always returns the same answer within the expiry window.
    const cacheKey = `oracle_user_${hashQuestion(q.toLowerCase().trim())}`;
    let finalAnswer: string | null = null;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const data = JSON.parse(cached);
        if (Date.now() - data.timestamp < 60 * 60 * 1000) {
          finalAnswer = data.answer;
        } else {
          localStorage.removeItem(cacheKey);
        }
      }
    } catch {
      /* ignore */
    }

    if (!finalAnswer) {
      const isYes = Math.random() > 0.5;
      const answers = isYes ? yesAnswers : noAnswers;
      finalAnswer = answers[Math.floor(Math.random() * answers.length)];
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ answer: finalAnswer, timestamp: Date.now() })
      );
    }

    setConsulting(true);
    setAnswer(null);

    setTimeout(async () => {
      const isYes = finalAnswer!.startsWith("Yes");
      setAnswer(finalAnswer);
      setConsulting(false);
      saveHistory(q, finalAnswer!);

      if (isYes) {
        const confetti = (await import("canvas-confetti")).default;
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      }
    }, 2000);
  }, [question, saveHistory]);

  const shareToTwitter = () => {
    const text = question.trim()
      ? `I asked the Oracle: "${question.trim()}" and got "${answer}". What would you ask? Try it yourself!`
      : "I just discovered this amazing Yes/No Oracle! Get instant guidance for your decisions.";
    const url = "https://yesnooracle.dev/";
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareToFacebook = () => {
    const url = "https://yesnooracle.dev/";
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const copyToClipboard = async () => {
    const text = question.trim()
      ? `I asked the Oracle: "${question.trim()}" and got "${answer}". Check out this amazing Yes/No Oracle: https://yesnooracle.dev/`
      : "Check out this amazing Yes/No Oracle for instant decision guidance: https://yesnooracle.dev/";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const useDailyQuestion = () => {
    if (dailyQuestion) {
      setQuestion(dailyQuestion);
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      inputRef.current?.focus();
    }
  };

  const clearHistory = () => {
    if (confirm("Are you sure you want to clear your question history?")) {
      localStorage.removeItem("oracle_history");
      setHistory([]);
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-900/20 to-black"
      style={{ paddingTop: 60 }}
    >
      <div className="container mx-auto px-6 py-2 text-center">
        <h1 className="text-4xl md:text-5xl font-cinzel mb-2 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text">
          Oracle Guide You: Yes or No?
        </h1>
        <p className="text-base md:text-lg mb-24 text-gray-300 max-w-3xl mx-auto">
          Get instant answers to your most pressing questions. Our mystical
          oracle provides accurate yes or no guidance to help you make better
          decisions.
        </p>

        <div className="relative max-w-2xl mx-auto">
          {/* Option C: orb pressed on the card's top edge (tarot-app look);
              -translate-y 61% keeps the orb clear of the subtitle above even
              while the gentle float-soft bob plays */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[61%] z-20 pointer-events-none">
            <div
              ref={ballRef}
              className={`crystal-ball crystal-ball--overlap${
                consulting ? " consulting" : ""
              }`}
            >
              <div className="crystal-ball-inner">
                <div className="mystical-particles">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="particle" />
                  ))}
                </div>
              </div>
              <div className="crystal-ball-base" />
            </div>
          </div>

        <div className="glow-card relative z-10 w-full bg-white/5 rounded-lg p-4 pt-14">
          <textarea
            ref={inputRef}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                askOracle();
              }
            }}
            className="w-full bg-black/50 border border-purple-500/30 rounded-lg p-3 mb-3 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition resize-none overflow-y-auto"
            rows={2}
            placeholder="Ask your yes or no question here..."
            aria-label="Enter your question"
          />
          <button
            onClick={askOracle}
            disabled={consulting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg text-lg hover:from-purple-700 hover:to-pink-700 transition shadow-lg hover:shadow-purple-500/20 disabled:opacity-60"
            aria-label="Get Oracle Answer"
          >
            {consulting ? "Consulting the Oracle..." : "Get Oracle Answer"}
          </button>
          <div
            className={`mt-6 text-2xl font-cinzel ${
              answer ? (answer.startsWith("Yes") ? "text-green-400" : "text-red-400") : "hidden"
            }`}
            role="region"
            aria-live="polite"
          >
            {answer}
          </div>

          {answer && (
            <div className="mt-6">
              <div className="text-center mb-4">
                <p className="text-gray-300 text-sm mb-3">
                  Share your oracle wisdom:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={shareToTwitter}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </button>
                  <button
                    onClick={shareToFacebook}
                    className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm transition flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition flex items-center gap-2"
                  >
                    {copied ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy Link
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        </div>

        <TopQuestions />

        <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-4 items-start">
          <div className="bg-white/5 rounded-lg p-5">
          <h3 className="text-lg font-cinzel font-semibold mb-3 text-center bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text">
            Daily Inspiration
          </h3>
          <div className="text-center">
            <p className="text-gray-300 mb-4">{dailyQuestion}</p>
            <button
              onClick={useDailyQuestion}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg text-sm hover:from-purple-600 hover:to-pink-600 transition"
            >
              Use This Question
            </button>
          </div>
        </div>

          <div className="bg-white/5 rounded-lg p-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-cinzel font-semibold bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text">
              Recent Questions
            </h3>
            <button
              onClick={clearHistory}
              className="text-gray-400 hover:text-red-400 text-sm transition"
            >
              Clear History
            </button>
          </div>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {history.length === 0 ? (
              <p className="text-gray-400 text-center text-sm">
                No questions asked yet. Ask your first question above!
              </p>
            ) : (
              history.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setQuestion(item.question);
                    inputRef.current?.focus();
                  }}
                  className="w-full text-left bg-white/5 rounded-lg p-3 cursor-pointer hover:bg-white/10 transition"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        {item.question}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`text-xs ${
                            item.answer === "Yes" || item.answer.startsWith("Yes")
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {item.answer}
                        </span>
                        <span className="text-xs text-gray-500">
                          {item.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
