
import React from 'react';

const TrustIndicators = () => {
  return (
    <section className="py-12 bg-white">
      <div className="section-container">
        <div className="text-center mb-8">
          <h2 className="heading-md text-crest-darkGray">Trusted By Local Businesses</h2>
          <p className="text-gray-600 mt-2">Join hundreds of businesses who've transformed their online presence</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Placeholder logos with ratings */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-lg h-16 w-32 flex items-center justify-center mb-2">
              <span className="text-gray-500 font-semibold">LOGO 1</span>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
              <span className="ml-1 text-sm text-gray-600">5.0</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-lg h-16 w-32 flex items-center justify-center mb-2">
              <span className="text-gray-500 font-semibold">LOGO 2</span>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
              <span className="ml-1 text-sm text-gray-600">4.8</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-lg h-16 w-32 flex items-center justify-center mb-2">
              <span className="text-gray-500 font-semibold">LOGO 3</span>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
              <span className="ml-1 text-sm text-gray-600">4.2</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-lg h-16 w-32 flex items-center justify-center mb-2">
              <span className="text-gray-500 font-semibold">LOGO 4</span>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
              <span className="ml-1 text-sm text-gray-600">4.9</span>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-crest-gray px-4 py-2 rounded-full">
            <span className="flex items-center">
              <svg className="w-5 h-5 text-crest-blue mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium">Secure Payments</span>
            </span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span className="flex items-center">
              <svg className="w-5 h-5 text-crest-blue mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium">Cancel Anytime</span>
            </span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span className="flex items-center">
              <svg className="w-5 h-5 text-crest-blue mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium">24/7 Support</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
