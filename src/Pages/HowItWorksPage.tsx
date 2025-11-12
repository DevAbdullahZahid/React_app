// src/pages/HowItWorksPage.tsx
import React, { useState, useEffect } from "react";

import {
  Target,
  ArrowRight,
  BookOpenCheck,
  Clock,
  Award,
  RotateCcw,
  PartyPopper,
} from "lucide-react";
const API_URL = import.meta.env.VITE_API_BASE_URL || process.env.REACT_APP_API_BASE_URL;

interface PromoCountdownProps {
  expiresAt?: string;
}
const PromoCountdown: React.FC<PromoCountdownProps> = ({ expiresAt }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const calc = () => {
      const target = expiresAt ? new Date(expiresAt).getTime() : Date.now() + 24 * 60 * 60 * 1000;
      const diff = target - Date.now();
      setSeconds(Math.max(0, Math.floor(diff / 1000)));
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [expiresAt]);

  const fmt = (t: number) => {
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = t % 60;
    return [h, m, s].map(v => v.toString().padStart(2, "0")).join(":");
  };

  if (seconds === 0) {
    return (
      <p className="text-red-700 font-bold mt-2 text-sm">
        <Clock className="w-4 h-4 inline mr-1" />
        Offer expired!
      </p>
    );
  }

  const critical = seconds <= 7200;
  return (
    <div
      className={`mt-3 p-3 rounded-lg border-2 ${
        critical ? "bg-red-50 border-red-300" : "bg-purple-100 border-purple-300"
      }`}
    >
      <p
        className={`font-bold ${critical ? "text-red-600" : "text-yellow-500"} text-lg flex items-center justify-center`}
      >
        <PartyPopper className="w-5 h-5 mr-2" />
        Closing In: {fmt(seconds)}
      </p>
    </div>
  );
};

/*  MAIN PAGE */

const HowItWorksPage: React.FC = () => {
  const [expectedBand, setExpectedBand] = useState(8.0);
  const [dailyHours, setDailyHours] = useState(8.0);
  const [skills, setSkills] = useState({
    reading_pct: 45,
    writing_pct: 35,
    listening_pct: 60,
    speaking_pct: 50,
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "error" | "success"; msg: string } | null>(null);
  const [plan, setPlan] = useState<any>(null);

  // localStorage
  useEffect(() => {
    const saved = localStorage.getItem("ieltsPlan");
    if (saved) setPlan(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (plan) localStorage.setItem("ieltsPlan", JSON.stringify(plan));
    else localStorage.removeItem("ieltsPlan");
  }, [plan]);

  const showToast = (type: "error" | "success", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSkillChange = (skill: string, value: number) => {
    setSkills(prev => ({ ...prev, [skill]: value }));
  };

  const handleReset = () => {
    setPlan(null);
    setExpectedBand(8.0);
    setDailyHours(8.0);
    setSkills({ reading_pct: 45, writing_pct: 35, listening_pct: 60, speaking_pct: 50 });
    setToast(null);
  };

  const generatePlan = async () => {
    setLoading(true);
    setToast(null);

    try {
      const url = `${API_URL}/preparation-plan`;

      const options: RequestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reading_pct: skills.reading_pct / 100,
          writing_pct: skills.writing_pct / 100,
          listening_pct: skills.listening_pct / 100,
          speaking_pct: skills.speaking_pct / 100,
          expected_band: expectedBand,
          user_suggested_daily_hours: dailyHours,
        }),
      };

      console.log(`Fetching ${url}`, options.body ?? "");

      const res = await fetch(url, options);
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `HTTP ${res.status}`);
      }

      const json = await res.json();
      console.log("Response →", json);

      const planData = json.data?.plan;
      if (!planData || !Array.isArray(planData.modules) || typeof planData.total_hours !== "number") {
        throw new Error("Invalid plan format");
      }

      setPlan(planData);
      showToast("success", "Plan generated!");
    } catch (err: any) {
      console.error(err);
      showToast("error", err.message || "Failed to load plan");
    } finally {
      setLoading(false);
    }
  };

  /* ------------------------------------------------------------------ */
  /*  UI                                                                */
  /* ------------------------------------------------------------------ */
  return (
    <section className="pt-42 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white font-medium ${
            toast.type === "error" ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {toast.msg}
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT */}
        <div className="flex flex-col justify-center space-y-6 text-white p-8">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
            <BookOpenCheck className="w-5 h-5 text-white" />
            <span className="text-sm font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight">
            Know <span className="text-yellow-300">Exactly</span> How Long to Study
          </h2>
          <p className="text-purple-100 text-lg max-w-md">
            Enter your current skills and target band. Get a personalized plan with daily hours, estimated days, and module breakdown.
          </p>
        </div>

        {/* RIGHT */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          {!plan ? (
            <>
              {/* FORM */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <Target className="w-5 h-5 text-white" />
                  <span className="text-sm text-white font-medium">IELTS Planner</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Your Study Plan</h2>
              </div>

              {/* Target Band */}
              <div className="mb-6">
                <label className="text-white font-semibold text-lg mb-2 block">
                  Target Band: {expectedBand}
                </label>
                <input
                  type="range"
                  min={5}
                  max={9}
                  step={0.5}
                  value={expectedBand}
                  onChange={e => setExpectedBand(parseFloat(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
                <div className="flex justify-between text-purple-100 text-sm mt-1">
                  {[5, 6, 7, 8, 9].map(b => (
                    <span key={b}>{b}.0</span>
                  ))}
                </div>
              </div>

              {/* Daily Hours */}
              <div className="mb-6">
                <label className="text-white font-semibold text-lg mb-2 block">
                  Daily Hours: {dailyHours}
                </label>
                <input
                  type="range"
                  min={1}
                  max={12}
                  step={0.5}
                  value={dailyHours}
                  onChange={e => setDailyHours(parseFloat(e.target.value))}
                  className="w-full accent-green-400 cursor-pointer"
                />
              </div>

              {/* Skills */}
              <div className="space-y-4 mb-6">
                {Object.entries(skills).map(([k, v]) => (
                  <div key={k}>
                    <label className="text-white font-medium mb-1 block capitalize">
                      {k.replace("_pct", "")}: {v}%
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={v}
                      onChange={e => handleSkillChange(k, parseInt(e.target.value))}
                      className="w-full accent-yellow-400 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Generate */}
              <div className="text-center">
                <button
                  onClick={generatePlan}
                  disabled={loading}
                  className={`px-8 py-3 rounded-xl text-lg font-bold transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2 ${
                    loading
                      ? "bg-gray-300 cursor-not-allowed text-gray-600"
                      : "bg-white hover:bg-gray-50 text-purple-600"
                  }`}
                >
                  {loading ? "Loading…" : (
                    <>
                      <span>Generate Plan</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </>
          ) : (
            /* RESULT */
            <div className="mt-4 bg-white rounded-3xl p-6 shadow-lg text-center space-y-6">
              <h3 className="text-xl font-bold text-gray-800">Your Personalized Plan</h3>

              <div className="grid grid-cols-2 gap-6 text-lg">
                <div>
                  <p className="font-semibold text-purple-600">{plan.estimated_days}</p>
                  <p className="text-gray-600 text-sm">Days</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-600">{plan.recommended_daily_hours} hrs</p>
                  <p className="text-gray-600 text-sm">Per Day</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-600">{plan.estimated_weeks}</p>
                  <p className="text-gray-600 text-sm">Weeks</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-600">{plan.total_hours} hrs</p>
                  <p className="text-gray-600 text-sm">Total</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-left">
                <h4 className="text-lg font-semibold text-purple-700 text-center">
                  Module Breakdown
                </h4>
                {plan.modules.map((m: any) => (
                  <div
                    key={m.name}
                    className="flex justify-between bg-purple-50 px-4 py-2 rounded-xl text-gray-700 font-medium"
                  >
                    <span className="capitalize">
                      {m.name} (Band {m.current_band})
                    </span>
                    <span>{m.estimated_hours} hrs</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-purple-100 rounded-xl text-sm text-gray-700">
                <p className="font-semibold mb-1">Notes:</p>
                <p>{plan.overall_notes}</p>
                {plan.suggestion && (
                  <p className="mt-2 font-bold text-purple-700">{plan.suggestion}</p>
                )}
              </div>

              {plan.promo_code && (
                <div className="mt-4 p-4 bg-green-100 rounded-xl">
                  <p className="text-green-700 font-semibold">
                    Promo: <span className="font-bold">{plan.promo_code}</span>
                  </p>
                  <PromoCountdown expiresAt={plan.expires_at} />
                </div>
              )}

              <button
                onClick={handleReset}
                className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-xl font-semibold inline-flex items-center space-x-2 hover:bg-purple-700"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Start Over</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPage;
