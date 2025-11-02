import React from "react";
import { Button } from "@/components/ui/button";
import { Droplets, Thermometer, Truck, Recycle } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">📦 How It Works</h2>
          <p className="section-subtitle">
            Simple, sustainable, and transparent process from farm to your home
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-background p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-muted text-natural-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplets className="w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-natural-green mb-2">1️⃣</div>
            <h4 className="font-bold mb-2 text-natural-green">We Source Pure Milk</h4>
            <p className="text-text-secondary">We source pure milk from small village farmers</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-muted text-natural-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Thermometer className="w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-natural-green mb-2">2️⃣</div>
            <h4 className="font-bold mb-2 text-natural-green">Chill Naturally</h4>
            <p className="text-text-secondary">No powder, no blending — just pure, chilled milk</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-muted text-natural-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-natural-green mb-2">3️⃣</div>
            <h4 className="font-bold mb-2 text-natural-green">Deliver to Your Doorstep</h4>
            <p className="text-text-secondary">Delivered fresh in glass bottles to your doorstep</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-muted text-natural-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-natural-green mb-2">4️⃣</div>
            <h4 className="font-bold mb-2 text-natural-green">Collect Empty Bottles</h4>
            <p className="text-text-secondary">We collect empty bottles next day — sustainable and simple</p>
          </div>
        </div>

        <div className="bg-background p-8 rounded-lg shadow-md text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-natural-green">Want to try?</h3>
          <p className="text-text-primary mb-6">
            👉 Join our 7-day free trial — taste the difference yourself.
          </p>
          <Button size="lg" className="text-lg px-8">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
