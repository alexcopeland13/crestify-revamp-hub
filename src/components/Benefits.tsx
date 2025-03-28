
import React from 'react';

const benefits = [
  {
    icon: (
      <svg className="w-10 h-10 text-crest-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fraction of traditional cost',
    description: 'Save thousands compared to custom web design services that charge $5,000-$20,000.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-crest-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Professional modern design',
    description: 'Transform your online presence with a professionally designed website that impresses visitors.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-crest-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Quick turnaround',
    description: 'Get your free preview in 48 hours, with instant modernization upon subscription approval.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-crest-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'No technical knowledge needed',
    description: 'We handle everything technical, so you can focus on running your business.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-crest-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Ongoing updates & maintenance',
    description: 'Your website stays fresh and functional with continuous updates included in your subscription.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-crest-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Easy AI-assisted updates',
    description: 'Make content changes effortlessly through our user-friendly AI-assisted dashboard.'
  }
];

const stats = [
  { value: '94%', description: 'of first impressions are design-related' },
  { value: '75%', description: 'judge business credibility based on website' },
  { value: '88%', description: 'won\'t return after a bad website experience' },
  { value: '60%', description: 'of small business websites are outdated' }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-crest-gray">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-crest-darkGray mb-4">Transform Your Business Online Presence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a professional website without the technical hassle or expensive price tag
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-crest-darkGray">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h3 className="heading-md text-center mb-12 text-crest-darkGray">Why Your Website Matters</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="text-4xl font-bold text-crest-blue mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
