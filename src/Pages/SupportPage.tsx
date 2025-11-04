import React from 'react';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header Section */}
      <section className="pt-48 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in">
            Support Center
          </h1>
          <p className="text-lg text-purple-100 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="relative z-10 -mt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          
          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">Contact Us</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Have a question or running into an issue? The best way to reach us is by email. Our support team is available 24/7 to assist you.
            <a href="/contactus" className="flex items-center justify-center bg-purple-600 text-white font-semibold text-base py-3 px-6 rounded-lg  shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-[1.02]">Start a Conversation</a>
          
          </p>
          <p className="text-gray-700 mb-6 text-xl leading-relaxed text-center font-medium">
          <a href="" className="text-purple-600 hover:underline font-medium"></a>
          </p>

          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <details className="p-4 border border-gray-100 rounded-xl">
              <summary className="cursor-pointer font-semibold text-gray-800">How do I reset my password?</summary>
              <p className="text-gray-600 mt-2">You can reset your password by clicking the "Forgot Password" link on the login page.</p>
            </details>
            <details className="p-4 border border-gray-100 rounded-xl">
              <summary className="cursor-pointer font-semibold text-gray-800">How does the free trial work?</summary>
              <p className="text-gray-600 mt-2">Your 7-day free trial gives you complete access to all features. No credit card is required to start. At the end of 7 days, you can choose a plan to continue.</p>
            </details>
             <details className="p-4 border border-gray-100 rounded-xl">
              <summary className="cursor-pointer font-semibold text-gray-800">Can I cancel my subscription?</summary>
              <p className="text-gray-600 mt-2">Yes, you can cancel your subscription at any time from your account settings page. Your access will continue until the end of your billing period.</p>
            </details>
          </div>

        </div>
      </section>
    </div>
  );
};

// --- THIS IS THE LINE YOU ARE MISSING ---
export default SupportPage;