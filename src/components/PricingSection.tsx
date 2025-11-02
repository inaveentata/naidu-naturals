import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Half Litre",
      price: "₹45",
      period: "per day",
      features: ["500 ml daily", "Fresh delivery", "Glass bottles"]
    },
    {
      name: "1 Litre",
      price: "₹90",
      period: "per day",
      features: ["1000 ml daily", "Fresh delivery", "Glass bottles", "Best value"]
    },
    {
      name: "Free Trial",
      price: "Free",
      period: "7 days",
      features: ["200 ml × 7 days", "Experience the difference", "No commitment"]
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">💰 Pricing Plans</h2>
          <p className="section-subtitle">
            Choose weekly or monthly plans. Pay online or in person.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-background border-2 rounded-lg p-6 shadow-md ${
                plan.name === "1 Litre" 
                  ? "border-natural-green border-4 scale-105" 
                  : "border-muted"
              }`}
            >
              {plan.name === "1 Litre" && (
                <div className="bg-highlight-yellow text-text-primary text-xs font-bold px-3 py-1 rounded-full text-center mb-4">
                  Best Value
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-natural-green">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
                <span className="text-text-secondary ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-highlight-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${
                  plan.name === "1 Litre" 
                    ? "bg-natural-green hover:bg-natural-green/90" 
                    : "bg-natural-green hover:bg-natural-green/90"
                }`}
              >
                {plan.name === "Free Trial" ? "Start Free Trial" : "Subscribe Now"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

