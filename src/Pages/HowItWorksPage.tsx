import React, { useState, useEffect } from "react"; // 💡 Added useEffect
import { Target, ArrowRight, BookOpenCheck, Clock, Award, RotateCcw, PartyPopper } from "lucide-react";
import axios from "axios";

// 💡 NEW COMPONENT: PromoCountdown
// Handles the 24-hour countdown logic and display
const PromoCountdown: React.FC = () => {
  // Use a fixed 24-hour period (86400 seconds) for the initial state
  const TOTAL_SECONDS = 24 * 60 * 60;
  
  // Initialize the timer state. For a real application, you'd store the expiration 
  // timestamp in a cookie/localStorage to persist across page reloads.
  // For this mock, we start at 24 hours.
  const [secondsRemaining, setSecondsRemaining] = useState(TOTAL_SECONDS);

  useEffect(() => {
    // If time runs out, stop the timer
    if (secondsRemaining <= 0) return;

    // Set up the interval for the countdown
    const interval = setInterval(() => {
      setSecondsRemaining((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000); // Update every second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [secondsRemaining]);
  
  // Helper function to format seconds into HH:MM:SS
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
      .map(v => v < 10 ? "0" + v : v)
      .join(":");
  };
  
  const formattedTime = formatTime(secondsRemaining);
  const isTimeCritical = secondsRemaining <= (2 * 60 * 60); // Critical if less than 2 hours

  if (secondsRemaining <= 0) {
      return (
          <p className="text-red-700 font-bold mt-2 text-sm">
              <Clock className="w-4 h-4 inline mr-1" />
              This promotional offer has expired!
          </p>
      );
  }

  return (
    <div className={`mt-3 p-3 rounded-lg border-2 ${isTimeCritical ? 'bg-red-50 border-red-300' : 'bg-purple-100 border-black-300'}`}>
        <p className={`font-bold ${isTimeCritical ? 'text-red-600' : 'text-yellow-500'} text-lg flex items-center justify-center`}>
            <PartyPopper className="w-5 h-5 mr-2" />
            Deal Closing In: {formattedTime}
        </p>
        <p className="text-gray-600 text-sm mt-1">
            This promo is valid for <span className="text-black-600  font-bold text-sm mt-1">24 hours</span>. Hurry up, deal is closing soon!
        </p>
    </div>
  );
};

// 💡 END OF NEW COMPONENT: PromoCountdown

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
    individualTimes?: Record<string, number>;
  }>({});

  const handleSkillChange = (skill: string, value: number) => {
    setSkills((prev) => ({ ...prev, [skill]: value }));
  };

  const handleGeneratePlan = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/mockIeltsPlan.json");
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching plan:", error);
      alert("Failed to fetch study plan. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult({});
  };

  return (
    <section className="pt-42 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6 text-white p-8">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
            <BookOpenCheck className="w-5 h-5 text-white" />
            <span className="text-sm font-medium">How It Works</span>
          </div>

          <h2 className="text-4xl font-bold leading-tight">
            Know <span className="text-yellow-300">Exactly</span> How Long It’ll Take to Reach Your IELTS Band
          </h2>

          <p className="text-purple-100 text-lg max-w-md">
            Select your target IELTS band and current skill levels. Our smart system will instantly estimate
            how many <strong>days</strong> and <strong>hours per day</strong> you’ll need to study effectively — and even give you a <span className="text-yellow-300 font-semibold">promo discount</span> if you start early!
          </p>

          <div className="flex space-x-6 pt-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-6 h-6 text-yellow-300" />
              <span>Estimated Study Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-green-300" />
              <span>Personalized Plan</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          {!result.daysRequired ? (
            <>
              {/* Header */}
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
                  🎯 Your Target Band: {targetBand}
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

              {/* Skills */}
              <div className="space-y-4 mb-6">
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

              {/* Generate Plan Button */}
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
            </>
          ) : (
            // ✅ Result Section (Replaces skill bars)
            <div className="mt-4 bg-white rounded-3xl p-6 shadow-lg text-center space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Your Personalized Study Plan
              </h3>

              {/* Overall Plan */}
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

              {/* Individual Skills */}
              {result.individualTimes && (
                <div className="mt-6 space-y-3 text-left">
                  <h4 className="text-lg font-semibold text-purple-700 text-center">
                    Individual Skill Progress
                  </h4>
                  {Object.entries(result.individualTimes).map(([skill, days]) => (
                    <div
                      key={skill}
                      className="flex justify-between bg-purple-50 px-4 py-2 rounded-xl text-gray-700 font-medium"
                    >
                      <span className="capitalize">{skill}</span>
                      <span>{days} days</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Promo Code */}
              {result.promoCode && (
                <div className="mt-4 p-4 bg-purple-100 rounded-xl inline-block">
                  <p className=" text-purple-700 font-semibold">
                    Register now and get promo code:{" "}
                    <span className="text-purple-900 font-bold">
                      {result.promoCode}
                    </span>
                  </p>
                  {/* 💡 INTEGRATED THE NEW TIMER HERE */}
                  <PromoCountdown />
                </div>
              )}

              {/* Back Button */}
              <button
                onClick={handleReset}
                className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-xl font-semibold inline-flex items-center space-x-2 hover:bg-purple-700 transition-all duration-300"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Back to Edit</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPage;