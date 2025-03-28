
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-crest-blue">Crest AI</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="font-medium text-gray-700 hover:text-crest-blue transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="font-medium text-gray-700 hover:text-crest-blue transition-colors">
            Benefits
          </a>
          <a href="#pricing" className="font-medium text-gray-700 hover:text-crest-blue transition-colors">
            Pricing
          </a>
          <a href="#gallery" className="font-medium text-gray-700 hover:text-crest-blue transition-colors">
            Gallery
          </a>
          <a href="#faq" className="font-medium text-gray-700 hover:text-crest-blue transition-colors">
            FAQ
          </a>
        </nav>
        <Button
          onClick={scrollToForm}
          className="bg-crest-blue hover:bg-crest-darkBlue text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Get Free Preview
        </Button>
      </div>
    </header>
  );
};

export default Header;
