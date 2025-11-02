import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CtaSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section className="py-16 bg-natural-green text-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Join our newsletter to be among the first to access premium natural products with unmatched quality.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Button type="submit" className="bg-highlight-yellow hover:bg-highlight-yellow/90 text-text-primary">
                Subscribe
              </Button>
            </div>
            <p className="text-xs mt-4 text-white/80">
              By submitting, you agree to receive updates from Naidu Naturals.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

