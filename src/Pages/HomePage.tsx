import { useState, useEffect, useCallback } from 'react';
import {
  BookOpen,
  Brain,
  Target,
  Sparkles,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  MessageSquare,
  BarChart,
  Award,
  Headphones,
  PenTool,
  BookMarked,
  Mic,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router';

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const appScreens = [
    {
      title: 'Dashboard',
      description: 'Track your progress across all modules',
      icon: BarChart,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-600'
    },
    {
      title: 'Reading Practice',
      description: 'Interactive passages with instant feedback',
      icon: BookMarked,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-600'
    },
    {
      title: 'Writing Module',
      description: 'Essay evaluation and feedback',
      icon: PenTool,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-600'
    },
    {
      title: 'Speaking Practice',
      description: 'Real-time pronunciation analysis',
      icon: Mic,
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-600'
    },
    {
      title: 'Listening Tests',
      description: 'Comprehensive audio exercises',
      icon: Headphones,
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-pink-600'
    }
  ];

  const totalSlides = appScreens.length;

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  const leftSlideIndex = (currentSlide - 1 + totalSlides) % totalSlides;
  const rightSlideIndex = (currentSlide + 1) % totalSlides;

  const handleDotClick = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const modules = [
    { name: 'Reading', icon: BookMarked, color: 'purple' },
    { name: 'Writing', icon: PenTool, color: 'purple' },
    { name: 'Listening', icon: Headphones, color: 'purple' },
    { name: 'Speaking', icon: Mic, color: 'purple' }
  ];

  const PhoneMockup = ({screen, scale = 1 }) => {
    const ScreenIcon = screen.icon;
    return (
      <div
        className="relative bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-[6px] border-gray-900 transition-all duration-700"
        style={{
          width: `${280 * scale}px`,
          height: `${560 * scale}px`
        }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
        <div className="relative h-full bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <div className={`w-24 h-24 ${screen.bgColor} rounded-3xl flex items-center justify-center mb-6 shadow-2xl animate-float`}>
              <ScreenIcon className="w-12 h-12 text-white" />
            </div>
            <div className={`w-full h-2 bg-gradient-to-r ${screen.color} rounded-full mb-8`}></div>
            <div className="space-y-3 w-full">
              <div className="h-3 bg-gray-200 rounded-full w-3/4 mx-auto"></div>
              <div className="h-3 bg-gray-200 rounded-full w-full"></div>
              <div className="h-3 bg-gray-200 rounded-full w-5/6 mx-auto"></div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 w-full">
              <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl"></div>
              <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
       <div className=" bg-gradient-to-br from-gray-100 to-purple-200">
     
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
              Master IELTS with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 animate-gradient">
                Intelligent Learning
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
              Achieve your target band score with personalized study plans, interactive practice,
              and real-time feedback across all four modules.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <button className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-xl hover:shadow-purple-300 hover:scale-105">
                <span>Start Learning Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-gray-200 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600 animate-fade-in">
              <div className="flex items-center space-x-2 transition-transform duration-300 hover:scale-110">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2 transition-transform duration-300 hover:scale-110">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center space-x-2 transition-transform duration-300 hover:scale-110">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* --- GOAL-ORIENTED SECTION REMOVED --- */}
      {/* This content is now in HowItWorksPage.tsx */}

      {/* Mobile App Slider Section - 3 Phones */}
      <section id="app" className="py-20 px-4 pb-40 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-purple-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience the App
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our intuitive interface designed for effective learning
            </p>
          </div>
          

          <div className="relative flex items-center justify-center gap-8 min-h-[600px] ">
            {/* Left Phone (Previous Slide) */}
            <div className="hidden lg:block opacity-60 hover:opacity-100 transition-opacity duration-500">
              <PhoneMockup screen={appScreens[leftSlideIndex]} scale={0.85} />
            </div>

            {/* Center Phone (Current Slide) */}
            <div className="transform hover:scale-105 transition-transform duration-500">
              <PhoneMockup screen={appScreens[currentSlide]} scale={1} />
            </div>

            {/* Right Phone (Next Slide) */}
            <div className="hidden lg:block opacity-60 hover:opacity-100 transition-opacity duration-500">
              <PhoneMockup screen={appScreens[rightSlideIndex]} scale={0.85} />
            </div>
          </div>

          {/* Module Labels for direct navigation */}
          
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-10 to-purple-20 ">
        <div className="flex justify-center gap-10 relative max-w-7xl mx-auto z-20 -mt-24 ">
            {appScreens.map((screen, index) => (
              <button
                key={screen.title}
                onClick={() => handleDotClick(index)}
                aria-current={currentSlide === index ? 'true' : 'false'}
                aria-label={`Show ${screen.title} screen`}
                className={`px-6 py-3 rounded-full transition-all duration-500 cursor-pointer ${
                  currentSlide === index
                    ? 'bg-purple-600 text-white shadow-lg scale-110'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200' // <--- THIS IS THE FIX
                }`}
              >
                <div className="flex items-center space-x-2">
                  <screen.icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{screen.title}</span>
                </div>
              </button>
            ))}
          </div>
      </section>
      {/* Stats Section */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-100 " >
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50K+', label: 'Active Learners' },
              { value: '8.0', label: 'Average Band Score' },
              { value: '95%', label: 'Success Rate' },
              { value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer transition-transform duration-300 hover:scale-110">
                <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION REMOVED --- */}
      {/* This content is now in UseCasesPage.tsx */}

      {/* Modules Section */}
      <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Master All Four Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive training for each IELTS component
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {modules.map((module, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden border border-gray-100"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-500">
                    {module.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-purple-100 transition-colors duration-500">
                    Interactive practice with instant feedback
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Achieve Your Target Band Score?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of successful IELTS candidates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white hover:bg-gray-50 text-purple-600 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-2xl hover:scale-105">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

   
    </div>
  );
}

export default HomePage;