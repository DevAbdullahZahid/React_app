import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const OffersPage: React.FC = () => {
  const plans = [
    {
      name: 'Free Trial',
      price: '$0',
      duration: '/ 7 days',
      description: 'Get a taste of all features, no credit card required.',
      features: [
        'Access to all 4 modules',
        '2 AI Writing evaluations',
        '2 AI Speaking evaluations',
        'Limited mock tests'
      ],
      buttonText: 'Start Free Trial',
      isPopular: false
    },
    {
      name: 'Monthly Pro',
      price: '$29',
      duration: '/ month',
      description: 'The complete solution for short-term preparation.',
      features: [
        'Access to all 4 modules',
        'Unlimited AI Writing evaluations',
        'Unlimited AI Speaking evaluations',
        'Full library of mock tests',
        'Personalized study plan'
      ],
      buttonText: 'Choose Monthly',
      isPopular: true
    },
    {
      name: 'Quarterly Pro',
      price: '$69',
      duration: '/ 3 months',
      description: 'Best value for comprehensive, long-term preparation.',
      features: [
        'All features from Monthly Pro',
        'Priority support',
        'Save 25% compared to monthly',
        'One-time payment'
      ],
      buttonText: 'Choose Quarterly',
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="pt-60 pb-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in">
            Pricing & Offers
          </h1>
          <p className="text-lg text-purple-100 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Choose the perfect plan to achieve your target band score.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 -mt-20 pb-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl hover:scale-[1.01]  ${plan.isPopular  ? 'border-4 border-purple-600 scale-[1.04] z-10 -mt-10' : 'border border-gray-100 mt-0 z-0' } `}
            >
              {plan.isPopular && (
                <div className=" absolute  -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl  font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-500 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className=" text-5xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-lg text-gray-500">{plan.duration}</span>
              </div>

              <button className={`w-full px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 group flex items-center justify-center space-x-2 ${
                plan.isPopular 
                ? 'bg-purple-600 text-white hover:bg-purple-700' 
                : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
              }`}>
                <span>{plan.buttonText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <ul className="space-y-4 mt-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OffersPage;