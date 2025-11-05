// Filename: src/App.jsx

import React, { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router';
import HomePage from './Pages/HomePage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfService from './Pages/TermsOfServices';
import Footer from './components/Footor';
import Header from './components/Header';
import CookieBanner from './components/CookieBanner'; // IMPORT BANNER

// --- IMPORT YOUR 7 NEW PAGES ---
import RefundPolicy from './Pages/RefundPolicy';
import SupportPage from './Pages/SupportPage';
import AboutPage from './Pages/AboutPage';
import HowItWorksPage from './Pages/HowItWorksPage';
import UseCasesPage from './Pages/UseCasesPage';
import PartnershipsPage from './Pages/PartnershipsPage';
import OffersPage from './Pages/OffersPage';
import ContactUs from './Pages/ContactUS';

// Layout component to wrap pages with Header and Footer
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
    <CookieBanner /> {/* ADD BANNER HERE */}
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* ... (all your routes) ... */}
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
      </Route>
    </Routes>
  );
};

export default App;