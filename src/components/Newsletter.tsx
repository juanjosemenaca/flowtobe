
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-travel-teal py-16 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Get Inspired for Your Next Journey</h2>
          <p className="text-lg opacity-90 mb-8">
            Subscribe to our newsletter for travel tips, exclusive deals, and destination inspiration
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-travel-dark placeholder:text-travel-sage"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-travel-terracotta hover:bg-travel-gold text-white"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-sm opacity-80 mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive travel-related emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
