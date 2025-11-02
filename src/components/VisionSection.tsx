import React from "react";
import { Leaf, Carrot, Apple, Beef } from "lucide-react";

const VisionSection = () => {
  return (
    <section id="vision" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">🌸 Our Vision</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            To build a transparent, sustainable, and trustworthy milk ecosystem that connects local farmers directly with families.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-text-primary mb-6 text-center">
            From milk, we'll grow into organic vegetables, fruits, and natural meat — all under one brand you trust.
          </p>
          
          <div className="bg-muted p-6 rounded-lg border-l-4 border-natural-green mb-8">
            <p className="text-text-primary italic font-medium text-lg text-center">
              "From our village to your home — with honesty and heart."
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-muted p-6 rounded-lg text-center">
              <Leaf className="w-12 h-12 text-natural-green mx-auto mb-3" />
              <h4 className="font-bold text-natural-green mb-2">Pure Milk</h4>
              <p className="text-text-secondary text-sm">Single-source buffalo milk</p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg text-center opacity-60">
              <Carrot className="w-12 h-12 text-natural-green mx-auto mb-3" />
              <h4 className="font-bold text-natural-green mb-2">Organic Vegetables</h4>
              <p className="text-text-secondary text-sm">Coming Soon</p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg text-center opacity-60">
              <Apple className="w-12 h-12 text-natural-green mx-auto mb-3" />
              <h4 className="font-bold text-natural-green mb-2">Fresh Fruits</h4>
              <p className="text-text-secondary text-sm">Coming Soon</p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg text-center opacity-60">
              <Beef className="w-12 h-12 text-natural-green mx-auto mb-3" />
              <h4 className="font-bold text-natural-green mb-2">Natural Meat</h4>
              <p className="text-text-secondary text-sm">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

