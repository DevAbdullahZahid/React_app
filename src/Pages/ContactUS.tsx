import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

// Main Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      setFormData({ name: '', email: '', message: '' });
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
const ContactInfo = () => {
  const infoItems = [
    
    { 
      icon: MapPin, 
      title: 'Office', 
      detail: '123 IELTS Avenue, Learning City, LSC 90210' 
    },
  ];

  return (
    <div className="p-8 lg:p-12 bg-purple-700 rounded-2xl shadow-xl text-white h-full flex flex-col justify-center">
      <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
      <p className="text-purple-200 mb-10 text-lg">
        We're here to help you achieve your target band score. Feel free to reach out with any questions.
      </p>
      
      <div className="space-y-8">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="p-3 bg-purple-600 rounded-full flex-shrink-0 shadow-lg">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-semibold mb-1">{item.title}</p>
              {item.link ? (
                <a href={item.link} className="text-purple-100 hover:text-white transition-colors">
                  {item.detail}
                </a>
              ) : (
                <p className="text-purple-100">{item.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component representing the content of the contact page
const ContactUsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="py-20 bg-gradient-to-r from-purple-800 to-purple-600 text-white shadow-md">
        <div className="max-w-7xl py-30 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-3">Contact Our Team</h1>
          <p className="text-xl text-purple-200">
            We will respond to answer your questions within 72 hours about courses, exams, and support.
          </p>
        </div>
      </header>

      {/* Main Content (Contact Grid) */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Left Column: Contact Form */}
            <ContactForm />

            {/* Right Column: Contact Info */}
            <ContactInfo />
            
          </div>
        </div>
      </section>

      
    </>
  );
};

/**
 * Main application component wrapper. 
 * This is the component that must be exported for the Canvas to render the file correctly.
 * In a real application, this would be your primary App component which handles routing.
 */
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ContactUsPage />
    </div>
  );
};

export default App;

