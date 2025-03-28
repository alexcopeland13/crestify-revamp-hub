
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200 animate-fade-in">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-gray-700 text-sm sm:text-base flex-1">
          <p>
            We use cookies to enhance your experience on our website. By continuing to browse, you consent to our use of cookies.
            <a href="#" className="text-crest-blue hover:underline ml-1">
              Learn more about our Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <Button
            variant="outline"
            onClick={declineCookies}
            className="text-gray-600 border-gray-300 hover:bg-gray-100"
          >
            Decline
          </Button>
          <Button
            onClick={acceptCookies}
            className="bg-crest-blue hover:bg-crest-darkBlue text-white"
          >
            Accept Cookies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
