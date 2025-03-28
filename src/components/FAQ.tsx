
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to see my preview?",
    answer: "You'll receive your free website preview within 48 hours of submitting your information. We'll email you a link to view the preview at that time."
  },
  {
    question: "Do I need technical knowledge?",
    answer: "Not at all! We handle everything technical for you, from the initial redesign to ongoing maintenance. You can easily make content updates through our user-friendly dashboard without any coding knowledge."
  },
  {
    question: "Will my content be preserved?",
    answer: "Yes, we carefully migrate all your existing content to your new website. We also organize and improve its presentation for better readability and search engine visibility."
  },
  {
    question: "What if I want changes to the design?",
    answer: "We offer complimentary design revisions to ensure you're completely satisfied with your new website. Just provide your feedback after viewing the preview, and we'll make the necessary adjustments."
  },
  {
    question: "Can I keep my domain name?",
    answer: "Absolutely! Your domain name stays the same. We handle the technical transition so your visitors will seamlessly experience your new website at your existing domain."
  },
  {
    question: "What's included in the monthly fee?",
    answer: "Your subscription includes hosting, security updates, maintenance, technical support, and access to our content management system. Premium and Enterprise plans include additional features like regular content updates and advanced SEO."
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer: "There's no long-term contract required. You can cancel your monthly subscription at any time. Annual plans offer savings but can be canceled before renewal."
  },
  {
    question: "How do you handle my existing website data?",
    answer: "We securely migrate all your content, images, and important data to your new website. Your original website remains untouched until you're ready to go live with the new version."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-crest-darkGray mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about our website modernization service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-crest-darkGray hover:text-crest-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center bg-crest-gray rounded-xl p-8">
          <h3 className="heading-sm text-crest-darkGray mb-3">Have more questions?</h3>
          <p className="text-gray-600 mb-4">
            Our team is happy to help with any additional questions you might have.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:info@crestai.com" className="text-crest-blue hover:text-crest-darkBlue font-medium flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              Email Us
            </a>
            <a href="tel:1234567890" className="text-crest-blue hover:text-crest-darkBlue font-medium flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
