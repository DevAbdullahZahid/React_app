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
  TrendingUp,
  RotateCcw, // Added for animation refresh icon
} from 'lucide-react';
// import { Link } from 'react-router'; // Link is not used, keeping it commented out

// --- SVG Screen Mockup Components ---
// We define simple, stylized SVGs to represent the content of each app screen.

// The updated Dashboard SVG requested by the user
const DashboardScreen = ({ colorClass }) => (
  <svg viewBox="0 0 100 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="170" rx="10" fill="#F0F4F8"/>
    <text x="50" y="25" fontSize="7" textAnchor="middle" className="fill-gray-700 font-sans font-semibold">Overall Progress</text>
    
    {/* Main Progress Indicator (Doughnut Chart Mockup) */}
    <circle cx="50" cy="70" r="30" className="stroke-gray-300" strokeWidth="6" fill="none"/>
    {/* The arc for 75% progress (Simplified Mockup) - Uses path for better visual representation */}
    <path 
      d="M 50 40 A 30 30 0 1 1 50 100" 
      strokeWidth="6" 
      strokeLinecap="round" 
      className={`stroke-current ${colorClass}`} 
      fill="none"
      // Added a slight offset and rotation to make it look like 75%
      transform="rotate(-15, 50, 70)"
    />
    <text x="50" y="75" fontSize="12" textAnchor="middle" className={`fill-current ${colorClass} font-sans font-bold`}>78%</text>

    {/* Small Bar Chart/Module Breakdown */}
    <rect x="10" y="115" width="80" height="50" rx="8" className="fill-white shadow-md"/>
    <text x="50" y="125" fontSize="6" textAnchor="middle" className="fill-gray-600 font-sans font-medium">Module Scores</text>

    <rect x="18" y="145" width="10" height="15" rx="2" className={`fill-current ${colorClass}`}/>
    <rect x="35" y="150" width="10" height="10" rx="2" className="fill-gray-300"/>
    <rect x="52" y="140" width="10" height="20" rx="2" className={`fill-current ${colorClass}`}/>
    <rect x="69" y="155" width="10" height="5" rx="2" className="fill-gray-300"/>
    <text x="19" y="165" fontSize="4" textAnchor="middle" className="fill-gray-500">R</text>
    <text x="36" y="165" fontSize="4" textAnchor="middle" className="fill-gray-500">W</text>
    <text x="53" y="165" fontSize="4" textAnchor="middle" className="fill-gray-500">L</text>
    <text x="70" y="165" fontSize="4" textAnchor="middle" className="fill-gray-500">S</text>
  </svg>
);

const ReadingScreen = ({ colorClass }) => (
  <svg viewBox="0 0 100 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="170" rx="10" fill="#F0F4F8"/>
    <rect x="10" y="15" width="80" height="10" rx="3" className="fill-gray-300"/>
    
    {/* Passage lines */}
    <rect x="10" y="35" width="80" height="5" rx="2" className="fill-gray-300"/>
    <rect x="10" y="45" width="75" height="5" rx="2" className="fill-gray-300"/>
    <rect x="10" y="55" width="80" height="5" rx="2" className="fill-gray-300"/>
    
    {/* Question Box */}
    <rect x="10" y="75" width="80" height="55" rx="8" className="fill-white shadow-md"/>
    <rect x="18" y="85" width="64" height="4" rx="2" className="fill-gray-400"/>
    <rect x="18" y="95" width="50" height="4" rx="2" className="fill-gray-400"/>

    <rect x="10" y="15" width="80" height="30" rx="5" className="fill-white shadow-md"/>
    <text x="50" y="30" fontSize="7" textAnchor="middle" className="fill-gray-600 font-sans">Select Correct Option.</text>
    {/* Options */}
    <rect x="10" y="138" width="80" height="15" rx="5" className="fill-white shadow-md"/>
    <rect x="18" y="143" width="5" height="5" rx="2" className="fill-gray-300"/>
    <text x="30" y="149" fontSize="6" className="fill-gray-600 font-sans">Option A</text>

    <rect x="10" y="158" width="80" height="15" rx="5" className={`fill-current ${colorClass} opacity-80 shadow-md`}/>
    <rect x="18" y="163" width="5" height="5" rx="2" className="fill-white"/>
    <text x="30" y="169" fontSize="6" className="fill-white font-sans font-bold">Option B (Selected)</text>
  </svg>
);

const WritingScreen = ({ colorClass }) => (
  <svg viewBox="0 0 100 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="170" rx="10" fill="#F0F4F8"/>
    <rect x="10" y="15" width="80" height="10" rx="3" className="fill-gray-300"/>
    
    {/* Text Editor Area */}
    <rect x="10" y="35" width="80" height="85" rx="5" className="fill-white shadow-inner p-2"/>
    <rect x="15" y="45" width="70" height="4" rx="2" className="fill-gray-400"/>
    <rect x="15" y="55" width="60" height="4" rx="2" className="fill-gray-400"/>
    <rect x="15" y="65" width="70" height="4" rx="2" className="fill-gray-400"/>
    <rect x="15" y="75" width="50" height="4" rx="2" className="fill-gray-400"/>
    
    {/* Feedback Bubble */}
    <g transform="translate(50, 90)">
     
    </g>
   <rect x="10" y="15" width="80" height="30" rx="5" className="fill-white shadow-md"/>
    <text x="50" y="30" fontSize="7" textAnchor="middle" className="fill-gray-600 font-sans">Describe a famous person.</text>

    {/* Submission Button */}
    <rect x="10" y="135" width="80" height="15" rx="7" className={`fill-current ${colorClass} opacity-90 shadow-md`}/>
    <text x="50" y="145" fontSize="7" textAnchor="middle" className="fill-white font-sans font-bold">Submit Essay</text>

    {/* Word Count */}
    <text x="50" y="165" fontSize="6" textAnchor="middle" className="fill-gray-500 font-sans">Word Count: 185/250</text>
  </svg>
);

const SpeakingScreen = ({ colorClass }) => (
  <svg viewBox="0 0 100 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="170" rx="10" fill="#F0F4F8"/>
    
    {/* Question */}
    <rect x="10" y="15" width="80" height="30" rx="5" className="fill-white shadow-md"/>
    <text x="50" y="30" fontSize="7" textAnchor="middle" className="fill-gray-600 font-sans">Write an Essay.</text>

    {/* Waveform */}
    <g transform="translate(10, 70)">
      <rect x="0" y="0" width="80" height="30" rx="5" className="fill-white shadow-md"/>
      <path d="M 5 15 Q 20 5 40 15 Q 60 25 75 15" strokeWidth="2" strokeLinecap="round" className={`stroke-current ${colorClass} opacity-80`} />
      <path d="M 5 15 Q 20 25 40 15 Q 60 5 75 15" strokeWidth="2" strokeLinecap="round" className={`stroke-current ${colorClass} opacity-80`} />
    </g>

    {/* Mic Button */}
    <circle cx="50" cy="135" r="20" className={`fill-current ${colorClass} opacity-90 shadow-xl`}/>
    <Mic x="40" y="125" size="20" strokeWidth="2" className="text-white"/>
    
    {/* Time */}
    <text x="50" y="165" fontSize="7" textAnchor="middle" className="fill-gray-500 font-sans">Recording... (0:45)</text>
  </svg>
);

// The updated Listening Screen with Voice SVG
const ListeningScreen = ({ colorClass }) => (
  <svg viewBox="0 0 100 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="170" rx="10" fill="#F0F4F8"/>
    
    {/* Question Header/Instructions */}
    <rect x="10" y="15" width="80" height="30" rx="5" className="fill-white shadow-md"/>
    <text x="50" y="30" fontSize="7" textAnchor="middle" className="fill-gray-600 font-sans">Listen & Fill in the Blanks.</text>
    {/* Voice/Sound Wave Visualization (The "Voice SVG" requested) */}
    <g transform="translate(10, 50)">
      <rect x="0" y="0" width="80" height="50" rx="5" className={`fill-current ${colorClass} opacity-90 shadow-lg`}/>
      
      {/* Dynamic Sound Bars */}
      <rect x="10" y="25" width="4" height="10" rx="1" className="fill-white"/>
      <rect x="18" y="20" width="4" height="20" rx="1" className="fill-white"/>
      <rect x="26" y="15" width="4" height="30" rx="1" className="fill-white"/>
      <rect x="34" y="10" width="4" height="40" rx="1" className="fill-white"/>
      <rect x="42" y="15" width="4" height="30" rx="1" className="fill-white"/>
      <rect x="50" y="20" width="4" height="20" rx="1" className="fill-white"/>
      <rect x="58" y="25" width="4" height="10" rx="1" className="fill-white"/>
      <rect x="66" y="30" width="4" height="5" rx="1" className="fill-white"/>
      
      {/* Headphones Icon */}
      <Headphones x="72" y="20" size="10" className="text-white"/>
    </g>

    {/* Question and options/Answer Area */}
    <rect x="10" y="110" width="80" height="55" rx="8" className="fill-white shadow-md"/>
    <text x="50" y="120" fontSize="6" textAnchor="middle" className="fill-gray-600 font-sans">Question 1</text>
    
    <rect x="18" y="130" width="64" height="8" rx="4" className="fill-gray-100"/>
    <rect x="18" y="145" width="64" height="8" rx="4" className={`fill-current ${colorClass} opacity-20`}/>
    <rect x="18" y="145" width="30" height="8" rx="4" className={`fill-current ${colorClass} opacity-80`}/>
    <text x="25" y="151" fontSize="5" className="fill-gray-800 font-sans">Student Answer</text>

  </svg>
);


function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- UPDATED appScreens WITH SCREEN COMPONENT ---
  const appScreens = [
    {
      title: 'Dashboard',
      description: 'Track your progress across all modules',
      icon: BarChart,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-600',
      ScreenComponent: DashboardScreen,
    },
    {
      title: 'Reading Practice',
      description: 'Interactive passages with instant feedback',
      icon: BookMarked,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-600',
      ScreenComponent: ReadingScreen,
    },
    {
      title: 'Writing Module',
      description: 'Essay evaluation and feedback',
      icon: PenTool,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-600',
      ScreenComponent: WritingScreen,
    },
    {
      title: 'Speaking Practice',
      description: 'Real-time pronunciation analysis',
      icon: Mic,
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-600',
      ScreenComponent: SpeakingScreen,
    },
    {
      title: 'Listening Tests',
      description: 'Comprehensive audio exercises',
      icon: Headphones,
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-pink-600',
      ScreenComponent: ListeningScreen,
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

  // Utility component for the floating animation (adjusting speed for better visibility)
  const FloatingIcon = ({ screen }) => {
    const ScreenIcon = screen.icon;
    return (
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className={`
          w-24 h-24 ${screen.bgColor} rounded-3xl 
          flex items-center justify-center shadow-2xl 
          animate-[float-slow_4s_ease-in-out_infinite] 
          transition-all duration-500
        `}>
          <ScreenIcon className="w-12 h-12 text-white" />
        </div>
      </div>
    );
  };


  const PhoneMockup = ({ screen, scale = 1 }) => {
    const ScreenContent = screen.ScreenComponent;
    
    // Convert Tailwind bgColor class (e.g., bg-purple-600) to its text- counterpart
    const colorClass = screen.bgColor.replace('bg-', 'text-'); 

    return (
      <div
        className="relative bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-[6px] border-gray-900 transition-all duration-700"
        style={{
          width: `${280 * scale}px`,
          height: `${560 * scale}px`
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-30"></div>
        
        {/* Actual Screen Content Area */}
        <div className="relative h-full bg-white overflow-hidden p-3 pt-8">
          
          {/* Module-Specific SVG Screen Content (Background Layer) */}
          <div className="absolute inset-0 z-10 p-4 pt-12">
            <ScreenContent colorClass={colorClass} />
          </div>

          {/* Floating Icon (Foreground Layer) */}
          <FloatingIcon screen={screen} />
          
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Custom Keyframe Animation for the floating effect */}
      <style>
        {`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in {
            animation: fadeInUp 0.8s ease-out both;
        }

        `}
      </style>

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
      
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* ... (The three "Define/Track/Reach" cards from HomePage.tsx) ... */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Define Your Target</h3>
                  <p className="text-purple-100">Set your desired band score and let our system map out the exact path to get you there</p>
                </div>
      
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Track Progress</h3>
                  <p className="text-purple-100">Monitor your improvement in real-time with detailed analytics and milestone achievements</p>
                </div>
      
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Reach Your Goal</h3>
                  <p className="text-purple-100">Follow your personalized study plan and achieve your target score with confidence</p>
                </div>
              </div>
              </div>
              </section>

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
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                } hidden sm:block`}
              > 
                <div className="flex items-center space-x-2">
                  <screen.icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{screen.title}</span>
                </div>
              </button>
            ))}
            {/* Simple mobile navigation for smaller screens */}
            <div className="sm:hidden flex justify-center gap-2">
              <button onClick={() => setCurrentSlide(leftSlideIndex)} className="p-3 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button onClick={() => setCurrentSlide(rightSlideIndex)} className="p-3 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => goToNextSlide()} className="p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
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
              { value: '>72', label: 'Hour Support' }
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
              Watch Demo
            </button>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default HomePage;
