import React, { useEffect, useState } from "react";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if cookie already accepted
    const consentGiven = document.cookie.includes("cookieConsent=accepted");
    if (!consentGiven) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = "cookieConsent=accepted; path=/; max-age=31536000"; // valid for 1 year
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left  bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600 text-white p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center z-50 animate-fadeIn">
      {/* Cookie Icon */}
      <div className="flex justify-center mb-3">
        <div className="bg-white/20 p-3 rounded-full">
          <span role="img" aria-label="cookie" className="text-3xl">
            🍪
          </span>
        </div>
      </div>

      {/* Text */}
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
