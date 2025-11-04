import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header Section */}
      <section className="pt-48 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in">
            About iPrep IELTS
          </h1>
          <p className="text-lg text-purple-100 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our mission is to make quality IELTS preparation accessible to everyone.
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="relative z-10 -mt-8 pb-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          
          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">Our Mission</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            iPrep IELTS was founded on a simple principle: achieving your dream band score shouldn't be a privilege, it should be a plan. We combine cutting-edge artificial intelligence with expert-crafted learning materials to create a personalized study partner that guides you every step of the way.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We believe that by providing instant, actionable feedback on writing and speaking, adaptive practice for listening and reading, and a clear roadmap to success, we can empower students everywhere to unlock their full potential and achieve their global ambitions.
          </p>

          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">Our Team</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We are a passionate team of educators, engineers, and designers who have experienced the challenges of high-stakes testing firsthand. We are dedicated to building a platform that is not only effective but also engaging and supportive.
          </p>

          <h2 className="text-3xl font-bold text-purple-700 mb-6 mt-10">Get in Touch</h2>
          <p className="text-gray-700 mb-6 leading-relaxed pb-4">
            We love hearing from our users! Whether you have feedback, a question, or a success story, please don't hesitate to reach out to us at <a href="" className="text-purple-600 hover:underline font-medium pb-5"></a>.
            <a href="/contactus" className="flex items-center justify-center bg-purple-600 text-white font-semibold text-base py-3 px-6 rounded-lg  shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-[1.02]">Start a Conversation</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;