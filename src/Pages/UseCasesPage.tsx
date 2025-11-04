import React from 'react';
import {
  BookOpen,
  Brain,
  MessageSquare,
  BarChart,
  Award,
} from 'lucide-react';

const UseCasesPage: React.FC = () => {
  // This content is taken from your original HomePage.tsx "features" section
  const features = [
    {
      icon: Brain,
      title: 'Smart Learning',
      description: 'Go beyond standard plans. Our AI-driven platform creates personalized study roadmaps that adapt in real-time to your unique pace and skill level, ensuring maximum efficiency.'
    },
    {
      icon: BookOpen,
      title: 'Module Coverage',
      description: 'Get complete, expert-designed preparation across all sections: Reading, Writing, Listening, and Speaking. We build your proficiency in every skill required for test day.'
    },
    {
      icon: MessageSquare,
      title: 'Interactive Practice',
      description: 'Engage with real-time exercises and receive instant, detailed feedback. Learn immediately from your mistakes and accelerate your understanding with guided corrections.'
    },
    {
      icon: BarChart,
      title: 'Progress Analytics',
      description: 'Detailed insights to track your improvement over time'
    },
    {
      icon: Award,
      title: 'Mock Tests',
      description: 'Gain clarity with detailed, visual reports that track your improvement over time. See exactly where you excel and where you need to focus your efforts for targeted study.'
    },
    {
      icon: Award, 
      title: 'For Educators',
      description: 'Experience full-length practice exams that perfectly simulate real test conditions, format, and timing. Build confidence and stamina to eliminate test-day anxiety.'
    },
    
  ];

  return (
     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-purple-200">
    <section id="use-cases" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 pt-32 pb-0 px-4 sm:px-6 lg:px-8">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto pb-20">
            Comprehensive tools for students, educators, and institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-3xl transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  
  </div>
  );
};

// --- THIS IS THE LINE YOU ARE LIKELY MISSING ---
export default UseCasesPage;