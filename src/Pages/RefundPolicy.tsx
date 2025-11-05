import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header Section */}
      <section className="pt-48 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in">
            Refund Policy
          </h1>
          <p className="text-lg text-purple-100 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our commitment to your satisfaction.
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="relative z-10 -mt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
<<<<<<< HEAD
           At iPrep Ielts, we want you to have a smooth and satisfying learning experience.

If you’ve purchased a premium plan but have not used any premium features, you are eligible for a full refund.
Refunds can be requested directly through the app within the specified refund window.

Once a premium feature (such as advanced AI feedback, speaking evaluation, or premium content access) has been used, the payment becomes non-refundable.

We encourage you to review all features before making a purchase to ensure our service meets your expectations.

If you face any issue, our support team is always ready to help.  ya likhna ha jesa acha laga add kar da refund page main</p>
=======
            {/* --- NEW INTRO --- */}
            At iPrep IELTS, we want you to have a smooth and satisfying learning experience. This policy outlines the terms under which refunds are granted.
          </p>
>>>>>>> 8347afc (feat: Add cookie consent banner and update refund policy)

          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">1. Refund Eligibility</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {/* --- NEW POLICY --- */}
            If you’ve purchased a premium plan but **have not used any premium features**, you are eligible for a full refund.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Premium features include (but are not limited to):
          </p>
           <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 pl-4">
            <li>Advanced AI feedback (e.g., Writing evaluations)</li>
            <li>AI Speaking evaluations</li>
            <li>Accessing premium-only content or mock tests</li>
          </ul>

          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">2. Non-Refundable Conditions</h2>
          <p className="text-gray-700 mb-6 leading-relaxed font-semibold">
             {/* --- NEW POLICY --- */}
            Once a premium feature (such as advanced AI feedback, speaking evaluation, or premium content access) has been used, the payment becomes non-refundable.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We encourage you to review all features before making a purchase to ensure our service meets your expectations.
          </p>

          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">3. How to Request a Refund</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
             {/* --- NEW POLICY --- */}
            Refunds can be requested directly through the app within the specified refund window. Please check your account settings for this option.
          </p>
          
          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">4. Support</h2>
           <p className="text-gray-700 mb-6 leading-relaxed">
             {/* --- NEW POLICY --- */}
            If you face any issue or have questions about this policy, our support team is always ready to help. Please contact us via our <a href="/contactus" className="text-purple-600 hover:underline font-medium">Support Page</a>.
          </p>

        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;