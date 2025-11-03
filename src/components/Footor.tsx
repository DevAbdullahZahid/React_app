// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/50">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              {/* --- BRANDING CHANGE --- */}
              <span className="text-white font-bold">iPrep IELTS</span>
            </div>
            <p className="text-sm">
              Intelligent IELTS preparation platform for achieving your dream score.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              {/* --- UPDATED LINKS --- */}
              <li><Link to="/how-it-works" className="hover:text-purple-400 transition-colors duration-300">How it Works</Link></li>
              <li><Link to="/use-cases" className="hover:text-purple-400 transition-colors duration-300">Use Cases</Link></li>
              <li><Link to="/offers" className="hover:text-purple-400 transition-colors duration-300">Offers</Link></li>
              <li><Link to="/#app" className="hover:text-purple-400 transition-colors duration-300">App Preview</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {/* --- UPDATED LINKS --- */}
              <li><Link to="/about" className="hover:text-purple-400 transition-colors duration-300">About</Link></li>
              <li><Link to="/partnerships" className="hover:text-purple-400 transition-colors duration-300">Partnerships</Link></li>
              <li><Link to="/support" className="hover:text-purple-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {/* --- UPDATED LINKS --- */}
              <li><Link to="/terms-of-service" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-purple-400 transition-colors duration-300">Refund Policy</Link></li>
              <li><Link to="/support" className="hover:text-purple-400 transition-colors duration-300">Help Center</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
           {/* --- BRANDING CHANGE --- */}
          <p>&copy; 2025 iPrep IELTS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;