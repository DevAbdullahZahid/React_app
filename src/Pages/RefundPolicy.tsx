import React from 'react';

import { WEBSITE_NAME } from "../config/constants";


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
           At iPrep Ielts, we want you to have a smooth and satisfying learning experience.

If you’ve purchased a premium plan but have not used any premium features, you are eligible for a full refund.
Refunds can be requested directly through the app within the specified refund window.

Once a premium feature (such as advanced AI feedback, speaking evaluation, or premium content access) has been used, the payment becomes non-refundable.

We encourage you to review all features before making a purchase to ensure our service meets your expectations.

If you face any issue, our support team is always ready to help.  ya likhna ha jesa acha laga add kar da refund page main</p>

          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">1. General Policy</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            All sales of digital subscriptions and services are final. We do not generally offer refunds unless required by law or under specific circumstances outlined below.
          </p>

          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">2. Eligibility for a Refund</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            You may be eligible for a refund in the following cases:
          </p>
           <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 pl-4">
            <li>
              <strong className="text-purple-700">Service Non-Delivery:</strong> If you paid for a subscription but did not receive access to the service due to a technical fault on our end.
            </li>
            <li>
              <strong className="text-purple-700">Duplicate Charge:</strong> If you were accidentally charged twice for the same subscription period.
            </li>
            <li>
              <strong className="text-purple-700">Major Defects:</strong> If the service is demonstrably broken or non-functional and we are unable to provide a fix within a reasonable timeframe (e.g., 14 days).
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">3. How to Request a Refund</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To request a refund, you must contact our support team within 7 days of the purchase. Please email <a href="" className="text-purple-600 hover:underline font-medium"></a> with your account email, order number, and a detailed reason for the request.
          </p>

          
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;