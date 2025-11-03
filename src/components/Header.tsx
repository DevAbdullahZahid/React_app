import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import {
  Sparkles,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMobileNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            {/* --- BRANDING CHANGE --- */}
            <span className="text-xl font-bold text-gray-900">iPrep IELTS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {/* --- UPDATED NAV LINKS --- */}
            <Link to="/how-it-works" className="text-gray-600 hover:text-purple-600 transition-all duration-300">How it Works</Link>
            <Link to="/use-cases" className="text-gray-600 hover:text-purple-600 transition-all duration-300">Use Cases</Link>
            <Link to="/offers" className="text-gray-600 hover:text-purple-600 transition-all duration-300">Offers</Link>
            
            {/* About Dropdown */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-purple-600 transition-all duration-300 flex items-center gap-1 focus:outline-none">
                About <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
                <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-t-xl">About Us</Link>
                <Link to="/partnerships" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Partnerships</Link>
                <Link to="/support" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-b-xl">Support</Link>
              </div>
            </div>

            {/* Legal Dropdown */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-purple-600 transition-all duration-300 flex items-center gap-1 focus:outline-none">
                Legal <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
                <Link to="/terms-of-service" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-t-xl">Terms of Service</Link>
                <Link to="/privacy-policy" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Privacy Policy</Link>
                <Link to="/refund-policy" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-b-xl">Refund Policy</Link>
              </div>
            </div>
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-300">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Updated) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <Link to="/how-it-works" className="block text-gray-600 hover:text-purple-600 transition-all duration-300" onClick={handleMobileNavLinkClick}>How it Works</Link>
            <Link to="/use-cases" className="block text-gray-600 hover:text-purple-600 transition-all duration-300" onClick={handleMobileNavLinkClick}>Use Cases</Link>
            <Link to="/offers" className="block text-gray-600 hover:text-purple-600 transition-all duration-300" onClick={handleMobileNavLinkClick}>Offers</Link>
            
            {/* About (collapsible) */}
            <details className="block">
              <summary className="cursor-pointer text-gray-600 hover:text-purple-600 transition-all duration-300 py-2 px-1 rounded flex items-center gap-1">About <ChevronDown className="w-4 h-4" /></summary>
              <div className="pl-4">
                <Link to="/about" className="block text-gray-700 hover:text-purple-600 transition-all duration-300 py-1" onClick={handleMobileNavLinkClick}>About Us</Link>
                <Link to="/partnerships" className="block text-gray-700 hover:text-purple-600 transition-all duration-300 py-1" onClick={handleMobileNavLinkClick}>Partnerships</Link>
                <Link to="/support" className="block text-gray-700 hover:text-purple-600 transition-all duration-300 py-1" onClick={handleMobileNavLinkClick}>Support</Link>
              </div>
            </details>

             {/* Legal (collapsible) */}
            <details className="block">
              <summary className="cursor-pointer text-gray-600 hover:text-purple-600 transition-all duration-300 py-2 px-1 rounded flex items-center gap-1">Legal <ChevronDown className="w-4 h-4" /></summary>
              <div className="pl-4">
                <Link to="/terms-of-service" className="block text-gray-700 hover:text-purple-600 transition-all duration-300 py-1" onClick={handleMobileNavLinkClick}>Terms of Service</Link>
                <Link to="/privacy-policy" className="block text-gray-700 hover:text-purple-600 transition-all duration-300 py-1" onClick={handleMobileNavLinkClick}>Privacy Policy</Link>
                <Link to="/refund-policy" className="block text-gray-700 hover:text-purple-600 transition-all duration-300 py-1" onClick={handleMobileNavLinkClick}>Refund Policy</Link>
              </div>
            </details>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;