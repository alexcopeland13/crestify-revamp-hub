
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ExitPopup = () => {
  const { toast } = useToast();
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    let popupShown = sessionStorage.getItem('exitPopupShown');
    
    // Check if popup has been shown in the last week (using localStorage for persistence)
    const lastShown = localStorage.getItem('exitPopupLastShown');
    const currentTime = new Date().getTime();
    const oneWeekInMs = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
    
    // Only show popup if:
    // 1. It hasn't been shown in this session AND
    // 2. Either it's never been shown before OR it was last shown more than a week ago
    const shouldShowPopup = !popupShown && 
      (!lastShown || (currentTime - parseInt(lastShown)) > oneWeekInMs);
    
    if (shouldShowPopup) {
      // Define handleMouseLeave outside the setTimeout to make it accessible in the cleanup function
      const handleMouseLeave = (e: MouseEvent) => {
        // Only trigger when mouse moves above the top edge of the viewport
        if (e.clientY <= 0) {
          setShowPopup(true);
          sessionStorage.setItem('exitPopupShown', 'true');
          localStorage.setItem('exitPopupLastShown', currentTime.toString());
          
          // Remove the event listener after showing the popup
          document.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
      
      // Add a delay before tracking mouse movement to prevent immediate triggering
      const timeout = setTimeout(() => {
        document.addEventListener('mouseleave', handleMouseLeave);
      }, 10000); // Wait 10 seconds before enabling the exit detection
      
      return () => {
        clearTimeout(timeout);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Exit popup form submitted:', email);
      setLoading(false);
      setShowPopup(false);
      
      toast({
        title: "Special Discount Reserved!",
        description: "We'll send your discount code to your email.",
      });
    }, 1000);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full shadow-2xl relative animate-fade-in">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-2"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-8">
          <div className="text-center mb-6">
            <span className="inline-block bg-crest-blue text-white text-xs px-3 py-1 rounded-full uppercase font-bold mb-4">
              Special Launch Offer
            </span>
            <h3 className="text-2xl font-bold text-crest-darkGray mb-2">
              Wait! Don't Miss Out
            </h3>
            <p className="text-gray-600">
              Subscribe now and receive a <span className="font-bold">20% discount</span> on your first 3 months when we launch!
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="email" className="text-crest-darkGray block mb-1">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full btn-primary py-5 font-semibold"
              disabled={loading}
            >
              {loading ? "Processing..." : "Get My 20% Discount"}
            </Button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              We'll email you your discount code when we launch. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
