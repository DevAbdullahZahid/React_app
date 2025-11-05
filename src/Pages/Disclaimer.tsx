import React from 'react';

const DisclaimerPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-12 text-gray-700 bg-white">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-6 border-b pb-2">
        Website Disclaimer
      </h1>

      <p className="mb-8 text-lg">
        The information provided by **[Your Company Name/Project Name]** ("we," "us," or "our") on **[Your Website URL]** (the "Site") is for **general informational purposes only**. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
      </p>

      <hr className="my-8" />

      {/* --- General Information Section --- */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          1. General Disclaimer
        </h2>
        <p className="mb-4">
          **UNDER NO CIRCUMSTANCE** shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is **solely at your own risk**.
        </p>
      </section>

      {/* --- Professional Advice Section (Crucial if your app offers specific info) --- */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          2. Not Professional Advice
        </h2>
        <p className="mb-4">
          The Site **cannot and does not contain professional advice**. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice (e.g., medical, legal, financial, tax advice).
        </p>
        <p className="mb-4 font-semibold italic text-red-700">
          Transmission of the information contained herein is not intended to create, and receipt does not constitute, any professional-client relationship.
        </p>
      </section>
      
      {/* --- External Links Section --- */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          3. External Links Disclaimer
        </h2>
        <p className="mb-4">
          The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
        </p>
        <p className="mb-4">
          We **DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY** for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
        </p>
      </section>

      {/* --- Errors and Omissions Section --- */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          4. Errors and Omissions Disclaimer
        </h2>
        <p className="mb-4">
          The information given by the Site is for guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Site is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules, and regulations, there may be delays, omissions, or inaccuracies in the information contained on the Site.
        </p>
      </section>
      
      {/* --- Fair Use/License Section (Optional, adjust as needed) --- */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          5. Fair Use Disclaimer
        </h2>
        <p className="mb-4">
          The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available in its efforts to advance understanding of environmental, political, human rights, economic, scientific, and social justice issues, etc. We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright law.
        </p>
      </section>

      <div className="mt-12 pt-4 border-t border-gray-300">
        <p className="text-sm text-gray-500">
          **Last updated:** November 5, 2025
        </p>
      </div>

    </div>
  );
};

export default DisclaimerPage;