import React from 'react';




const PartnershipsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header Section */}
      <section className="pt-48 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in">
            Partnerships
          </h1>
          <p className="text-lg text-purple-100 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Let's grow together and help more students succeed.
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="relative z-10 -mt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          
          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">For Educators & Institutions</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Integrate iPrep IELTS into your curriculum. We offer special dashboards for educators to track student progress, assign targeted practice, and manage classrooms. Provide your students with a powerful AI learning tool while gaining insights into their performance.
          </p>

          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">Affiliate Program</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Are you a content creator, blogger, or IELTS coach? Join our affiliate program and earn commissions for referring new users to iPrep IELTS. We provide you with all the marketing materials you need to get started.
          </p>

          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">Contact Us</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Interested in exploring a partnership? We'd love to hear from you. Please reach out to our partnerships team with your proposal.
            <a href="/partnerform" className="flex items-center justify-center bg-purple-600 text-white font-semibold text-base py-3 px-6 rounded-lg  shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-[1.02]">Enterprises Inquiry</a>
          
          </p>
          
        </div>
      </section>
    </div>
  );
};

export default PartnershipsPage;