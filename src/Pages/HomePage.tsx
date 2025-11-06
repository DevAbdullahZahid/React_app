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
  RotateCcw,// Added for animation refresh icon
} from 'lucide-react';
// import { Link } from 'react-router'; // Link is not used, keeping it commented out
import { MdOutlineTimeline } from 'react-icons/md';

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

// Find and replace the existing ReadingScreen component with this:
const question = {
  passage:
    "In recent years, the number of people working remotely has increased dramatically. Studies suggest that remote work can improve productivity and reduce commuting stress, but it may also lead to feelings of isolation and difficulty separating work from personal life.",
  questionText: "According to the passage, what is one possible disadvantage of remote work?",
  options: [
    "A) It makes employees more productive and focused.",
    "B) It can cause feelings of isolation and blurred work-life boundaries."
  ],
  correctAnswer: "B",
};

interface ReadingScreenProps {
  colorClass: string;
}

const ReadingScreen: React.FC<ReadingScreenProps> = ({ colorClass }) => {
  const question = {
    passage:
      "Remote work has grown fast but can feel isolating.",
    questionText: "What issue may remote workers face?",
    options: [
      { text: "A) Feeling lonely", isCorrect: true },
      { text: "B) Saving more time", isCorrect: false },
    ],
  };

  return (
    <div className="flex items-start justify-center h-full py-6 bg-transparent">
      <div className="bg-white rounded-2xl shadow-lg p-5 w-[350px] border border-gray-200">
        {/* Header */}
        <div className="bg-gray-100 rounded-lg py-1.5 text-center mb-3">
          <h2 className="text-gray-700 font-semibold text-sm">Reading Task</h2>
        </div>

        {/* Passage */}
        <p className="text-gray-600 text-sm mb-4 text-justify leading-relaxed">
          {question.passage}
        </p>

        {/* Question */}
        <p className="text-gray-800 font-medium text-sm mb-3">
          {question.questionText}
        </p>

        {/* Options (Static Display) */}
        <div className="space-y-2">
          {question.options.map((opt, index) => (
            <div
              key={index}
              className={`w-full border rounded-lg py-2 px-3 text-left text-sm ${
                opt.isCorrect
                  ? "bg-green-100 text-green-700 border-green-300"
                  : "bg-red-100 text-red-700 border-red-300"
              }`}
            >
              {opt.text}
            </div>
          ))}
        </div>

        {/* Feedback (Static) */}
        
      </div>
    </div>
  );
};



interface WritingScreenProps {
  colorClass: string;
}

const WritingScreen: React.FC<WritingScreenProps> = ({ colorClass }) => {
  const fullText =
    "Albert Einstein was one of the greatest scientists in history. His theory of relativity changed how we understand space, time, and gravity. Despite his fame, he lived simply and believed deeply in peace and curiosity.";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start justify-center h-full py-6 bg-transparent">
      <div className="bg-white rounded-2xl shadow-lg p-4 w-[330px] border border-gray-200">
        {/* Header */}
        <div className="bg-gray-100 rounded-lg py-1.5 text-center mb-2">
          <h2 className="text-gray-700 fill-gray-700 font-sans font-semibold">Writing Task</h2>
        </div>

        {/* Prompt */}
        <p className="text-gray-600 text-center text-sm mb-3">
          Describe a famous person.
        </p>

        {/* Typing Box */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-2 h-44 overflow-y-auto text-sm text-gray-700 leading-relaxed">
          {displayedText}
          <span className="animate-blink">|</span>
        </div>

        {/* Submit Button */}
        <button
          className={`mt-4 w-full py-2 rounded-lg text-gray font-semibold shadow-md ${colorClass}`}
        >
          Submit Essay
        </button>

        {/* Word Count */}
        <p className="text-center text-gray-500 text-xs mt-2">
          Word Count: 185 / 250
        </p>
      </div>

      {/* Blinking Cursor Animation */}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </div>
  );
};





interface SpeakingScreenProps {
  colorClass: string;
}

const SpeakingScreen: React.FC<SpeakingScreenProps> = ({ colorClass }) => {
  const fullText =
    "My favorite hobby is reading books. It helps me relax, learn new things, and explore different perspectives on life.";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full bg-transparent">
      <svg
        viewBox="0 0 100 180"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Screen Background */}
        <rect x="5" y="5" width="90" height="170" rx="10" fill="#F9FAFB" />

        {/* Question */}
        <text
          x="50"
          y="30"
          fontSize="7"
          textAnchor="middle"
          className="fill-gray-700 font-sans font-semibold"
        >
          Tell us about your hobbies.
        </text>

        {/* Animated Response Area */}
        <foreignObject x="10" y="60" width="80" height="50">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              background: "white",
              borderRadius: "6px",
              boxShadow: "inset 0 0 4px rgba(0,0,0,0.1)",
              padding: "4px",
              fontSize: "7px",
              color: "#374151",
              fontFamily: "sans-serif",
              lineHeight: "1.4",
              textAlign: "justify",
              whiteSpace: "pre-wrap",
            }}
          >
            {displayedText}
            <span style={{ animation: "blink 1s step-start infinite" }}>|</span>
          </div>
        </foreignObject>

        {/* Mic Button */}
        <g transform="translate(50,135)">
          <circle
            r="20"
            className={`fill-current ${colorClass} opacity-90 shadow-xl animate-pulse`}
          />
          <Mic
            x="-10"
            y="-10"
            size="20"
            strokeWidth="2"
            className="text-white"
          />
        </g>

        {/* Timer */}
        <text
          x="50"
          y="168"
          fontSize="7"
          textAnchor="middle"
          className="fill-gray-500 font-sans"
        >
          Recording... (0:45)
        </text>
      </svg>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// The updated Listening Screen with Voice SVG
const ListeningScreen = ({ colorClass }) => (
  <svg viewBox="0 0 100 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="170" rx="10" fill="#F0F4F8"/>
    
    {/* Question Header/Instructions */}
    <text x="50" y="30" fontSize="7" textAnchor="middle" className="fill-gray-700 font-sans font-semibold">Listen & Fill in the Blanks.</text>
    {/* Voice/Sound Wave Visualization (The "Voice SVG" requested) */}
    <g transform="translate(10, 50)">
      <rect x="0" y="0" width="80" height="60" rx="5" className={`fill-current ${colorClass} opacity-90 shadow-lg`}/>
      
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
      title: 'Writing Module',
      description: 'Essay evaluation and feedback',
      icon: PenTool,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-600',
      ScreenComponent: WritingScreen,
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
      title: 'Listening Tests',
      description: 'Comprehensive audio exercises',
      icon: Headphones,
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-pink-600',
      ScreenComponent: ListeningScreen,
    },
    {
      title: 'Speaking Practice',
      description: 'Real-time pronunciation analysis',
      icon: Mic,
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-600',
      ScreenComponent: SpeakingScreen,
    },
    
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
      // ... inside HomePage function, inside return ...
<style>
    {`
    @keyframes float-slow {
        /* ... existing keyframes ... */
    }
    .animate-float-slow {
        /* ... existing classes ... */
    }
    
    @keyframes fadeInUp {
        /* ... existing keyframes ... */
    }
    .animate-fade-in {
        /* ... existing classes ... */
    }

    /* --- 1. STAGGERED PHONE ENTRANCE ANIMATION (New) --- */
    @keyframes slideUpBounce {
        0% { transform: translateY(100px); opacity: 0; }
        60% { transform: translateY(-10px); opacity: 1; }
        100% { transform: translateY(0); opacity: 1; }
    }
    .phone-slide-in {
        animation: slideUpBounce 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both; /* ease-out-back */
    }

    /* --- 2. DYNAMIC SVG ANIMATIONS (New) --- */

    /* Dashboard Ring Fill */
    @keyframes ringDraw {
        to {
            /* The 471 value is the circumference of the circle (2 * PI * 75) to start fully hidden */
            /* We will calculate the final offset dynamically in the component */
            stroke-dashoffset: 141; /* This value is a placeholder, calculated properly below */
        }
    }
    
    /* Listening Screen Bar Pulse */
    @keyframes barPulse {
        0%, 100% { transform: scaleY(0.5); }
        50% { transform: scaleY(1.5); }
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
                Intelligent Learning with iPrep Ietls
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
      
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                {/* ... (The three "Define/Track/Reach" cards from HomePage.tsx) ... */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Set Your Goal</h3>
                  <p className="text-purple-100">Set your desired band score and let our system map out the exact path to get you there</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <MdOutlineTimeline className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Set Your Target Time</h3>
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
                  <h3 className="text-2xl font-bold text-white mb-4">Acheive Your Goal</h3>
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
        <div className="flex justify-center gap-10 relative max-w-8xl mx-auto z-28 -mt-28 ">
            {appScreens.map((screen, index) => (
              <button
                key={screen.title}
                onClick={() => handleDotClick(index)}
                aria-current={currentSlide === index ? 'true' : 'false'}
                aria-label={`Show ${screen.title} screen`}
                className={`px-12 py-3 rounded-full transition-all duration-500 cursor-pointer ${
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
      <section className="pt-20 pb-20 px-100 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-100 " >
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-4 md:grid-cols-4 gap-40">
            {[
              { value: '1M+', label: 'Training Data Points' },
              { value: '8.0', label: 'Average Band Score' },
              { value: '95%', label: 'Success Rate' },
              { value: 'Within 72', label: 'Hour Support' }
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
