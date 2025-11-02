import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-muted to-background">
      {/* <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21')] bg-cover bg-center animate-wave"></div>
      </div> */}
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-natural-green mb-6">
            Naidu Naturals — Pure Milk from a Single Buffalo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-primary">
            Experience the difference of single-source buffalo milk — unblended, unprocessed, and naturally rich.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg px-8">
              Start 7-Day Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Know Our Source
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
