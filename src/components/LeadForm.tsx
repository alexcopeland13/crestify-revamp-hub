
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setLoading(false);
      
      // Show success toast
      toast({
        title: "Request Received!",
        description: "We'll have your free website preview ready within 48 hours.",
      });
      
      // Reset form
      setFormData({
        businessName: '',
        websiteUrl: '',
        email: '',
        phone: ''
      });
    }, 1500);
  };

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-br from-crest-blue to-crest-darkBlue text-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Get Your Free Website Preview</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            No commitment required. See how we can transform your website before making any decision.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg text-left">
            <div className="space-y-6">
              <div>
                <Label htmlFor="businessName" className="text-crest-darkGray block mb-1">Business Name</Label>
                <Input
                  id="businessName"
                  name="businessName"
                  placeholder="Your Business Name"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="websiteUrl" className="text-crest-darkGray block mb-1">Current Website URL</Label>
                <Input
                  id="websiteUrl"
                  name="websiteUrl"
                  placeholder="www.yourbusiness.com"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-crest-darkGray block mb-1">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@yourbusiness.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-crest-darkGray block mb-1">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full btn-primary py-6 text-lg font-bold"
                disabled={loading}
              >
                {loading ? "Processing..." : "Get My Free Website Preview"}
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our 
                <a href="#" className="text-crest-blue hover:underline mx-1">Privacy Policy</a>
                and
                <a href="#" className="text-crest-blue hover:underline mx-1">Terms of Service</a>. 
                We'll never share your information with third parties.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
