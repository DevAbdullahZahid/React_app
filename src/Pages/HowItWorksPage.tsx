import React, { useState } from "react";
import { Target, ArrowRight, Award, TrendingUp } from "lucide-react";
import axios from "axios";

const HowItWorksPage: React.FC = () => {
  const [targetBand, setTargetBand] = useState<number>(7);
  const [skills, setSkills] = useState({
    listening: 60,
    reading: 65,
    writing: 55,
    speaking: 70,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    daysRequired?: number;
    hoursPerDay?: string;
    promoCode?: string;
  }>({});

  const handleSkillChange = (skill: string, value: number) => {
    setSkills((prev) => ({ ...prev, [skill]: value }));
  };

  const handleGeneratePlan = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/ielts-plan/", {
        target_band: targetBand,
        skills,
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching plan:", error);
      alert("Failed to fetch study plan. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-8 text-white">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-white" />
            <span className="text-sm font-medium">Smart IELTS Strategy</span>
          </div>

          <h2 className="text-4xl font-bold">
            Plan Your IELTS Journey with Precision
          </h2>
          <p className="text-purple-100 text-lg leading-relaxed">
            Whether you’re aiming for a <span className="font-semibold">7.0+</span> band
            or just starting out, our AI-driven planner tailors a personalized
            study roadmap for you. Track your progress, improve weak areas, and
            stay consistent every day.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <TrendingUp className="w-6 h-6 text-green-300" />
              <span>Data-driven improvement tracking</span>
            </li>
            <li className="flex items-center space-x-3">
              <Target className="w-6 h-6 text-yellow-300" />
              <span>Set your band target & get a realistic timeline</span>
            </li>
            <li className="flex items-center space-x-3">
              <ArrowRight className="w-6 h-6 text-pink-300" />
              <span>Get daily study hour recommendations</span>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Target className="w-5 h-5 text-white" />
              <span className="text-sm text-white font-medium">
                IELTS Planner
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Your Personalized IELTS Plan
            </h2>
          </div>

          {/* Target Band */}
          <div className="mb-6">
            <label className="text-white font-semibold text-lg mb-2 block">
              🎯 Tell us How many Bands you want to achieve: {targetBand}
            </label>
            <input
              type="range"
              min={5}
              max={9}
              step={0.5}
              value={targetBand}
              onChange={(e) => setTargetBand(parseFloat(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
            <div className="flex justify-between text-purple-100 text-sm mt-1">
              {[5, 6, 7, 8, 9].map((b) => (
                <span key={b}>{b}.0</span>
              ))}
            </div>
          </div>

          {/* Skill Level Sliders */}
          <div className="space-y-4 mb-6">
            
            <label className="text-white font-semibold text-lg mb-2 block">
              Your Skill Set:
            </label>
            {Object.keys(skills).map((skill) => (
              <div key={skill}>
                <label className="text-white font-medium mb-1 block capitalize">
                  {skill}: {skills[skill as keyof typeof skills]}%
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={skills[skill as keyof typeof skills]}
                  onChange={(e) =>
                    handleSkillChange(skill, parseInt(e.target.value))
                  }
                  className="w-full accent-green-400 cursor-pointer"
                />
              </div>
            ))}
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <button
              onClick={handleGeneratePlan}
              disabled={loading}
              className={`${
                loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white hover:bg-gray-50 text-purple-600"
              } px-8 py-3 rounded-xl text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2`}
            >
              {loading ? (
                <span>⏳ Calculating...</span>
              ) : (
                <>
                  <span>Generate My Plan</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Result Section */}
          {result.daysRequired && (
            <div className="mt-10 bg-white rounded-3xl p-6 shadow-lg text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Your Personalized Study Plan
              </h3>
              <div className="flex justify-center gap-8 text-lg">
                <div>
                  <p className="font-semibold text-purple-600">
                    {result.daysRequired}
                  </p>
                  <p className="text-gray-600 text-sm">Days to Reach Goal</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-600">
                    {result.hoursPerDay}
                  </p>
                  <p className="text-gray-600 text-sm">Hours Per Day</p>
                </div>
              </div>

              {result.promoCode && (
                <div className="mt-4 p-4 bg-purple-50 rounded-xl inline-block">
                  <p className="text-purple-700 font-semibold">
                    🎁 Register now and get promo code:{" "}
                    <span className="text-purple-900 font-bold">
                      {result.promoCode}
                    </span>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPage;
