import React from 'react';
// Assuming you are using 'react-router-dom' or similar, which provides the Link component
import { Link } from 'react-router-dom'; // NOTE: I changed 'react-router' to 'react-router-dom' as it is the common package

import { Sparkles } from 'lucide-react';

import { WEBSITE_NAME } from "../config/constants";

const GooglePlayIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.737 21.085l16.142-8.525a.916.916 0 000-1.831L3.737 2.203 3 5.483l12.79 6.75-12.79 6.75-.737 3.32z" />
  </svg>
);

const AppleIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.848-11.458c.459-1.25.967-2.67 1.848-2.67.882 0 1.258 1.14 1.258 2.067 0 1.625-.976 2.458-2.585 2.458-.517 0-.91-.18-1.521-.734zm3.903-4.148c.18-.752-.259-1.31-.95-1.31-.693 0-1.12.558-1.12 1.31 0 .734.427 1.288 1.12 1.288.691 0 1.13-.538.95-1.288zM9.42 16.48c.49 1.34 1.026 2.82 1.956 2.82.93 0 1.34-1.21 1.34-2.18 0-1.72-.92-2.61-2.73-2.61-.54 0-.96.2-.14.75z"/>
  </svg>
);

const Footer: React.FC = () => {
  // Utility function to apply common classes
  const linkClasses = "hover:text-purple-400 transition-colors duration-300";
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/50">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold">{ WEBSITE_NAME }</span>
            </div>
            <p className="text-sm pb-10">
              Intelligent IELTS preparation platform for achieving your dream score.
            </p>
            
             <li>
               <Link 
                to="/contactus" 
                  className={`
                    ${linkClasses} bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-300 inline-flex items-center justify-center font-medium `}>Contact us</Link>
                </li>
            
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              {/* --- CORRECTED LINKS: Using <Link> component instead of <a> --- */}
              <li><Link to="/how-it-works" className={linkClasses}>How it Works</Link></li>
              <li><Link to="/use-cases" className={linkClasses}>Use Cases</Link></li>
              <li><Link to="/offers" className={linkClasses}>Offers</Link></li>
              <li><a href="/#app" className={linkClasses}>App Preview</a></li> {/* External/Hash link can remain <a> */}
              
              {/* --- CONTACT US FIX --- */}
              
            </ul>
          </div>
          {/* --- START OF STORE DOWNLOAD SECTION --- */}
{/* --- START OF STORE DOWNLOAD SECTION --- */}
<div>
  <h4 className="text-white font-semibold mb-4">Available at:</h4>

  {/* Wrap both badges in one flex container */}
  <div className="flex items-center gap-4 flex-wrap">
    
    {/* Google Play Button */}
    <a 
      href="#" 
      target="_blank" 
      rel="noopener noreferrer"
      className="transition-transform duration-200 hover:scale-[1.03]"
    >
      <img 
        src="/images/google-play.svg" 
        alt="Get it on Google Play" 
        className="w-[130px] h-auto rounded-md shadow-md"
      />
    </a>

    {/* App Store Button */}
    <a 
      href="#" 
      target="_blank" 
      rel="noopener noreferrer"
      className="transition-transform duration-200 hover:scale-[1.03]"
    >
      <img 
        src="/images/app-store.svg" 
        alt="Download on the App Store" 
        className="w-[120px] h-auto rounded-md shadow-md"
      />
    </a>

  </div>
</div>

          {/* --- END OF STORE DOWNLOAD SECTION --- */}
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {/* --- CORRECTED LINKS: Using <Link> component instead of <a> --- */}
              <li><Link to="/terms-of-service" className={linkClasses}>Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className={linkClasses}>Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className={linkClasses}>Refund Policy</Link></li>
              <li><Link to="/support" className={linkClasses}>Help Center</Link></li>
              <li><Link to="/disclaimer" className={linkClasses}>Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8  text-center text-sm">
          <p>&copy; 2025 { WEBSITE_NAME }</p>
        </div>
        <div className="relative w-full">
  <p className="text-sm mt-1 text-center">
    <a
      href="https://rezotera.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      Powered by Rezotera.com
    </a>
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
