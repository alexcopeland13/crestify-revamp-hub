
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-white to-crest-gray">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="heading-xl text-crest-darkGray">
              We Rebuilt Your Website.
              <span className="text-crest-blue block mt-2">Want To See It?</span>
            </h1>
            <p className="text-xl text-gray-600">
              AI-powered website modernization for local businesses - preview yours for free
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToForm}
                className="btn-primary text-lg"
                size="lg"
              >
                See Your Free Website Preview
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-lg"
                size="lg"
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-crest-blue mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>No payment until you approve</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-crest-blue mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Free preview in 48 hours</span>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="before-image">
                <div className="absolute top-2 left-2 bg-crest-before text-white text-xs px-2 py-1 rounded">BEFORE</div>
                <img 
                  src="https://placehold.co/500x300/e5e5e5/8E8E8E?text=Old+Website" 
                  alt="Before website example" 
                  className="w-full h-auto"
                />
              </div>
              <div className="after-image transform translate-y-4">
                <div className="absolute top-2 left-2 bg-crest-after text-white text-xs px-2 py-1 rounded">AFTER</div>
                <img 
                  src="https://placehold.co/500x300/f8f8f8/22C55E?text=New+Website" 
                  alt="After website example" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
