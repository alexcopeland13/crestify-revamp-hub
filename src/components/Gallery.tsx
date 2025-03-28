
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const examples = [
  {
    type: 'Local Restaurant',
    testimonial: '"Our reservations increased by 40% in the first month after switching to our new website."',
    name: 'Maria G., Bistro Owner',
    before: '/restaurant-before.jpg',
    after: '/restaurant-after.jpg',
    improvements: [
      'Mobile-responsive menu',
      'Online reservation system',
      'Photo gallery integration',
      'SEO optimization for local searches'
    ]
  },
  {
    type: 'Dental Practice',
    testimonial: '"Patients constantly tell us how easy it is to book appointments now. Best investment we\'ve made."',
    name: 'Dr. James W., Family Dentist',
    before: '/dental-before.jpg',
    after: '/dental-after.jpg',
    improvements: [
      'Online appointment scheduling',
      'Patient testimonial showcase',
      'Service catalog with clear pricing',
      'Integration with insurance providers'
    ]
  },
  {
    type: 'Auto Repair Shop',
    testimonial: '"We look more professional than our competitors now. The new site has already paid for itself."',
    name: 'Robert L., Shop Owner',
    before: '/auto-before.jpg',
    after: '/auto-after.jpg',
    improvements: [
      'Service appointment scheduling',
      'Customer review integration',
      'Mobile service estimator',
      'Streamlined contact process'
    ]
  },
  {
    type: 'Hair Salon',
    testimonial: '"Our new website perfectly represents our brand. We\'ve seen a 30% increase in new clients."',
    name: 'Lisa T., Salon Owner',
    before: '/salon-before.jpg',
    after: '/salon-after.jpg',
    improvements: [
      'Stylist profile showcase',
      'Online booking system',
      'Portfolio image gallery',
      'Integrated review system'
    ]
  }
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedExamples = showAll ? examples : examples.slice(0, 3);

  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to generate fallback if images aren't available
  const getFallbackImage = (type, isAfter) => {
    // Create different styled fallbacks for before/after
    if (isAfter) {
      return `https://placehold.co/800x500/f8f8f8/22C55E?text=Modern+${type}+Website`;
    } else {
      return `https://placehold.co/800x500/e5e5e5/8E8E8E?text=Outdated+${type}+Website`;
    }
  };

  return (
    <section id="gallery" className="py-20 bg-crest-gray">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-crest-darkGray mb-4">Before & After Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the transformations we've created for businesses just like yours
          </p>
        </div>
        
        <div className="space-y-16">
          {displayedExamples.map((example, index) => (
            <div 
              key={index} 
              className="grid md:grid-cols-2 gap-8 items-center animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <h3 className="heading-md text-crest-darkGray">{example.type}</h3>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <p className="text-lg italic text-gray-700 mb-4">
                    {example.testimonial}
                  </p>
                  <p className="font-semibold text-crest-darkGray">{example.name}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-crest-darkGray">Key Improvements:</h4>
                  <ul className="space-y-1">
                    {example.improvements.map((improvement, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-crest-blue mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="before-image relative">
                  <div className="absolute top-2 left-2 bg-crest-before text-white text-xs px-2 py-1 rounded">BEFORE</div>
                  <img 
                    src={getFallbackImage(example.type.split(' ')[1], false)} 
                    alt={`${example.type} before website`} 
                    className="w-full h-auto rounded"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getFallbackImage(example.type.split(' ')[1], false);
                    }}
                  />
                </div>
                <div className="after-image relative">
                  <div className="absolute top-2 left-2 bg-crest-after text-white text-xs px-2 py-1 rounded">AFTER</div>
                  <img 
                    src={getFallbackImage(example.type.split(' ')[1], true)} 
                    alt={`${example.type} after website`}
                    className="w-full h-auto rounded"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getFallbackImage(example.type.split(' ')[1], true);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && examples.length > 3 && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="btn-secondary"
            >
              View More Examples
            </Button>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <h3 className="heading-md text-crest-darkGray mb-4">Want to see how we can transform your website?</h3>
          <Button
            onClick={scrollToForm}
            className="btn-primary text-lg mt-4"
            size="lg"
          >
            Get Your Free Website Preview
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
