// Filename: src/components/CookieBanner.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('iPrep_cookie_consent');
    if (consent !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('iPrep_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-gray-900 text-gray-300 shadow-lg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <Cookie className="w-6 h-6 text-purple-400 flex-shrink-0" />
            <p className="text-sm">
              We use cookies to enhance your experience and analyze site traffic.
              Read our{' '}
              <Link to="/privacy-policy" className="text-purple-400 hover:underline font-medium">
                Privacy Policy
              </Link>
              {' '}for more details.
            </p>
          </div>

          <button
            onClick={handleAccept}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors flex-shrink-0"
          >
            Accept Cookies
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;