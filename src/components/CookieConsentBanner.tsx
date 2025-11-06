// CookieConsentBanner.tsx

import React, { useEffect, useState } from "react";
// Import your utility functions
import { setCookie, getCookie } from '../utils/cookieUtils'; 

const COOKIE_NAME = "cookieConsent";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 💡 Use getCookie from your utility
    const consentGiven = getCookie(COOKIE_NAME) === "accepted";
    
    if (!consentGiven) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // 💡 Use setCookie from your utility
    // We'll set it to expire in 365 days (1 year)
    setCookie(COOKIE_NAME, "accepted", 365); 
    
    // 💡 Example of setting another functional cookie upon consent
    // You can set initial preferences or tracking markers here.
    // For instance, setting a default module preference (Functional Cookie)
    setCookie('userPreferredModule', 'All', 365); 

    setVisible(false);
  };

  // ... (rest of the component remains the same)
  if (!visible) return null;

  return (
    // ... (your existing JSX)
    <div className="fixed bottom-6 left bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600 text-white p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center z-50 animate-fadeIn">
      {/* ... */}
      <p className="text-sm leading-relaxed mb-4">
        By using this website, you agree to our use of cookies. We use cookies
        to provide you with a great experience and to help our website run
        effectively.
      </p>

      {/* Continue Button */}
      <button
        onClick={handleAccept}
        className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-lg hover:bg-purple-100 transition-all duration-300 shadow-md"
      >
        Continue
      </button>
    </div>
  );
};

export default CookieConsent;