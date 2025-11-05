import React, { useEffect, useState } from 'react';
import { setCookie, getCookie } from '../utils/cookieUtils';
import './CookieConsentBanner.css'; // optional styling file

const CookieConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie('user_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie('user_cookie_consent', 'true', 365);
    setVisible(false);
  };

  const handleDecline = () => {
    setCookie('user_cookie_consent', 'false', 365);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to enhance your browsing experience. By continuing to use our site, you agree to our use of cookies.
      </p>
      <div className="actions">
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
