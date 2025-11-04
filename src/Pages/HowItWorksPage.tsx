import React from 'react';
import {
  Target,
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  // This content is taken from your original HomePage.tsx "goals" section
  return (
    <section id="how-it-works" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Target className="w-5 h-5 text-white" />
            <span className="text-sm text-white font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Set Your Goal, Achieve Your Score
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Our intelligent goal-oriented system creates a personalized roadmap tailored to your target band score
          </p>
        </div>

        

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">How Goal-Setting Works</h3>
              {/* ... (The 4-step process from HomePage.tsx) ... */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Choose Your Target Score</h4>
                    <p className="text-purple-100">Select from band 5.0 to 9.0 based on your requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Take Initial Assessment</h4>
                    <p className="text-purple-100">We evaluate your current level across all modules</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Get Custom Roadmap</h4>
                    <p className="text-purple-100">Receive a day-by-day plan with specific tasks and milestones</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Practice & Progress</h4>
                    <p className="text-purple-100">Follow your plan and watch your scores improve consistently</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* ... (The "Your Goal" progress card from HomePage.tsx) ... */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-bold text-gray-900">Your Goal</h4>
                  <span className="text-3xl font-bold text-purple-600">8.0</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Current Score</span>
                      <span className="font-semibold text-gray-900">6.5</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-gray-900">45%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">28</div>
                    <div className="text-xs text-gray-600">Days Left</div>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">15</div>
                    <div className="text-xs text-gray-600">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-50 text-purple-600 px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2">
            <span>Set Your Goal Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// --- THIS IS THE LINE YOU ARE LIKELY MISSING ---
export default HowItWorksPage;