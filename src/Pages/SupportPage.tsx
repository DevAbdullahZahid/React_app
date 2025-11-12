import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';


import { WEBSITE_NAME } from "../config/constants";
// Main Contact Form Component
const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pin: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending message...');

    // Simulate API call delay
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '',pin:'', message: '' });
      setStatus('Thank you! Your message has been sent successfully.');
      setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
    }, 1500);
  };

  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 h-full">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
      
      {status && (
        <div className={`p-3 mb-4 rounded-xl text-sm font-medium ${
          status.includes('successfully') 
            ? 'bg-green-100 text-green-700' 
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {status}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="relative">
          <label htmlFor="name" className="sr-only">Full Name</label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <User className="w-5 h-5 text-purple-400" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            disabled={isSubmitting}
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <label htmlFor="email" className="sr-only">Email Address</label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Mail className="w-5 h-5 text-purple-400" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            disabled={isSubmitting}
          />
        </div>
      <div className="relative">
          <label htmlFor="pin" className="sr-only">pin</label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Phone className="w-5 h-5 text-purple-400" />
          </div>
          <input
            type="pin"
            id="pin"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            placeholder="Pin"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            disabled={isSubmitting}
          />
        </div>

        {/* Message Textarea */}
        <div className="relative">
          <label htmlFor="message" className="sr-only">Your Message</label>
          <div className="absolute top-4 left-0 flex items-start pl-3">
            <MessageSquare className="w-5 h-5 text-purple-400" />
          </div>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message (200 characters max)"
            maxLength={200}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
            disabled={isSubmitting}
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            {formData.message.length} / 200
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="group w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.01] disabled:bg-purple-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Sending...</span>
            </div>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <Send className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

// Contact Info Block Component


// Component representing the content of the contact page
const PartnerPage = () => {
  return (
    <>
      

      {/* Main Content (Contact Grid) */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-10 lg:gap-16">
            
            {/* Left Column: Contact Form */}
            <SupportForm />

            {/* Right Column: Contact Info */}
            
            
          </div>
        </div>
      </section>

      
    </>
  );
};

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
            Have a question or running into an issue? The best way to reach us is by email. Our support team will respond in 72 hours to assist you.
            <a href="/supportform" className="flex items-center justify-center bg-purple-600 text-white font-semibold text-base py-3 px-6 rounded-lg  shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-[1.02]">Connect with our Support Team</a>
          
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