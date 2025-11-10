import React from 'react';
import {
  BookOpen,
  Brain,
  MessageSquare,
  BarChart,
  Award,
} from 'lucide-react';

const UseCasesPage: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Module Coverage',
      description:
        'Get complete, expert-designed preparation across all sections: Reading, Writing, Listening, and Speaking.',
    },
    {
      icon: MessageSquare,
      title: 'Interactive Practice',
      description:
        'Engage with real-time exercises and receive instant, detailed feedback.',
    },
    {
      icon: Award,
      title: 'Mock Tests',
      description:
        'Experience full-length practice exams that perfectly simulate real test conditions.',
    },
    {
      icon: Brain,
      title: 'Smart Learning',
      description:
        'AI-driven platform creates personalized study roadmaps that adapt in real-time.',
    },
    {
      icon: Award,
      title: 'For Educators',
      description:
        'Full-length practice exams that perfectly simulate real test conditions.',
    },
    {
      icon: BarChart,
      title: 'Progress Analytics',
      description: 'Detailed insights to track your improvement over time',
    },
  ];

  return (
    /* --------------------------------------------------------------
       PAGE SECTION WITH IMAGE BACKGROUND & LOCAL OVERLAY
       -------------------------------------------------------------- */
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/usecase.jpg')`,
        minHeight: '100dvh',
      }}
    >
      {/* Overlay only on this section */}
      <div className="absolute inset-0 bg-purple-900/70" />

      {/* All content sits on top of the overlay */}
      <section
        id="use-cases"
        className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Comprehensive tools for students, educators, and institutions.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl
                           transition-all duration-500 hover:shadow-2xl cursor-pointer
                           overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center
                                   justify-center mb-6 group-hover:scale-110
                                   group-hover:rotate-6 transition-all duration-500">
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

export default UseCasesPage;
