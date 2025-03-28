
import React from 'react';

const steps = [
  {
    number: '1',
    title: 'We identify outdated websites',
    description: 'Our technology scans for local businesses with websites that need modernizing.',
    icon: (
      <svg className="w-12 h-12 text-crest-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    number: '2',
    title: 'Our AI rebuilds your site',
    description: 'We transform your outdated website with modern design and features using AI.',
    icon: (
      <svg className="w-12 h-12 text-crest-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    number: '3',
    title: 'You preview and subscribe',
    description: 'Preview your new site for free, then subscribe for an instant upgrade.',
    icon: (
      <svg className="w-12 h-12 text-crest-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-crest-darkGray mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 3-step process takes all the hassle out of website modernization
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-crest-gray rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-crest-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                {step.number}
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-crest-darkGray">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
