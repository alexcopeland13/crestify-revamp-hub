
import React from 'react';
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: 'Basic',
    price: 49,
    description: 'Perfect for small local businesses',
    features: [
      'Professional modernized website',
      'Mobile-responsive design',
      'Basic SEO optimization',
      'Secure hosting included',
      'Basic content management',
      'Email support'
    ],
    setup: 299,
    cta: 'Choose Basic',
    popular: false
  },
  {
    name: 'Premium',
    price: 99,
    description: 'Most popular for growing businesses',
    features: [
      'Everything in Basic',
      'Advanced analytics',
      'Monthly content updates',
      'Priority support',
      'Social media integration',
      'Local SEO enhancements',
      'Online appointment booking'
    ],
    setup: 299,
    cta: 'Choose Premium',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For businesses with multiple locations',
    features: [
      'Everything in Premium',
      'Support for multiple locations',
      'Advanced SEO strategy',
      'Custom feature development',
      'Dedicated account manager',
      'Monthly performance reports',
      'E-commerce functionality'
    ],
    setup: 299,
    cta: 'Choose Enterprise',
    popular: false
  }
];

const Pricing = () => {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-crest-darkGray mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees. All plans include a free preview before you pay.
            <span className="block font-medium text-crest-blue mt-1">Setup fee waived with annual subscription.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden transition-all duration-300 animate-fade-in ${
                plan.popular 
                  ? 'border-2 border-crest-blue shadow-lg transform -translate-y-2 md:-translate-y-4' 
                  : 'border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1'
              }`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {plan.popular && (
                <div className="bg-crest-blue text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1 text-crest-darkGray">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-crest-darkGray">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-crest-blue mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-6 text-sm text-gray-600">
                  One-time setup fee: ${plan.setup} 
                  <span className="block text-crest-blue font-medium">FREE with annual plan</span>
                </div>
                <Button
                  onClick={scrollToForm}
                  className={`w-full py-3 ${
                    plan.popular 
                      ? 'bg-crest-blue hover:bg-crest-darkBlue' 
                      : 'bg-gray-100 text-crest-darkBlue hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-crest-gray rounded-xl p-8 text-center">
          <p className="text-lg font-medium text-crest-darkGray mb-2">
            <span className="text-crest-blue font-bold">No payment until you approve your new site.</span> 
            We're that confident you'll love it.
          </p>
          <p className="text-gray-600">
            All plans include a 14-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
