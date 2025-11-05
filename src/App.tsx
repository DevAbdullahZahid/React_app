import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

// --- IMPORT PAGES & COMPONENTS ---
// FIXED: Reverting to relative paths (e.g., './Pages/HomePage') and dropping file extensions 
// to let the bundler infer .tsx/ts based on project configuration.
import HomePage from './Pages/HomePage.tsx'; 
import PrivacyPolicy from './Pages/PrivacyPolicy.tsx';
import TermsOfService from './Pages/TermsOfServices.tsx'; 
import Footer from './components/Footor.tsx'; 
import Header from './components/Header.tsx';
import RefundPolicy from './Pages/RefundPolicy.tsx';
import SupportPage from './Pages/SupportPage.tsx';
import AboutPage from './Pages/AboutPage.tsx';
import HowItWorksPage from './Pages/HowItWorksPage.tsx';
import UseCasesPage from './Pages/UseCasesPage.tsx';
import PartnershipsPage from './Pages/PartnershipsPage.tsx';
import OffersPage from './Pages/OffersPage.tsx';
import ContactUs from './Pages/ContactUS.tsx';
import Disclaimer from './Pages/Disclaimer.tsx';
import CookieConsentBanner from './components/CookieConsentBanner';



// Define a type for the possible consent states (for clarity, kept as comment/jsdoc)
/* @typedef {'pending' | 'accepted' | 'declined'} ConsentStatus */

// Layout component to wrap pages with Header and Footer
// --- LAYOUT ---
const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// --- APP COMPONENT ---
const App = () => {
  const [consentStatus, setConsentStatus] = useState<'pending' | 'accepted' | 'declined'>('pending');

  const handleConsentDecision = (status: 'accepted' | 'declined') => {
    setConsentStatus(status);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* --- COOKIE CONSENT --- */}
      {consentStatus === 'pending' && (
        <CookieConsentBanner onConsentDecision={handleConsentDecision} />
      )}

      {/* --- ROUTES --- */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="use-cases" element={<UseCasesPage />} />
          <Route path="partnerships" element={<PartnershipsPage />} />
          <Route path="offers" element={<OffersPage />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="disclaimer" element={<Disclaimer />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;