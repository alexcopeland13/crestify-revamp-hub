
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ExitPopup from '@/components/ExitPopup';

const Index = () => {
  useEffect(() => {
    // Google Analytics tracking example (would need to be implemented with actual GA)
    console.log('Page loaded - tracking view');
    
    // Update page title and meta description
    document.title = "Crest AI - AI-Powered Website Modernization for Local Businesses";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Gallery />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <CookieConsent />
      <ExitPopup />
    </div>
  );
};

export default Index;
