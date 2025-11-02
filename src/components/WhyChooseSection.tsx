import React from "react";
import { Check, Droplets, Heart, Leaf, Package, Clock, Milk } from "lucide-react";

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">💧 Why Single Buffalo Milk</h2>
          <p className="section-subtitle">
            Most milk brands mix milk from hundreds of buffaloes and balance fat using milk solids or powders.
            <br />
            We believe in simplicity — your family deserves milk from one healthy buffalo only.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex items-start">
                <Check className="w-6 h-6 text-highlight-yellow mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-natural-green mb-1">Consistent taste & nutrition</h4>
                  <p className="text-text-primary">Every drop comes from the same buffalo, ensuring uniform quality</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Check className="w-6 h-6 text-highlight-yellow mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-natural-green mb-1">Natural fat and SNF values</h4>
                  <p className="text-text-primary">No artificial balancing, just pure natural milk composition</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Check className="w-6 h-6 text-highlight-yellow mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-natural-green mb-1">Traceable source</h4>
                  <p className="text-text-primary">Know exactly which buffalo and which farmer your milk comes from</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Check className="w-6 h-6 text-highlight-yellow mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-natural-green mb-1">Real village freshness</h4>
                  <p className="text-text-primary">Direct from the village to your doorstep</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-muted rounded-lg border-l-4 border-natural-green">
              <p className="text-text-primary italic font-medium">
                "From one buffalo to one family — pure, transparent, personal."
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="./why-us.jpg" 
                alt="Single source buffalo milk" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-highlight-yellow text-text-primary p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">100%</p>
                <p className="text-sm">Pure & Single Source</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Promise Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="section-title">🧑‍🌾 Our Promise</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-muted p-6 rounded-lg text-center">
              <Leaf className="w-10 h-10 text-natural-green mx-auto mb-3" />
              <h4 className="font-bold mb-2 text-natural-green">Single Source Authenticity</h4>
              <p className="text-text-secondary text-sm">Every household is connected to one dedicated buffalo</p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg text-center">
              <Milk className="w-10 h-10 text-natural-green mx-auto mb-3" />
              <h4 className="font-bold mb-2 text-natural-green">No Milk Solids</h4>
              <p className="text-text-secondary text-sm">100% natural, pure milk with no additives</p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg text-center">
              <Package className="w-10 h-10 text-natural-green mx-auto mb-3" />
              <h4 className="font-bold mb-2 text-natural-green">Reusable Glass Bottles</h4>
              <p className="text-text-secondary text-sm">Fresh taste, eco-friendly, no plastic</p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg text-center">
              <Clock className="w-10 h-10 text-natural-green mx-auto mb-3" />
              <h4 className="font-bold mb-2 text-natural-green">Morning Delivery</h4>
              <p className="text-text-secondary text-sm">Freshly collected and delivered daily</p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg text-center">
              <Heart className="w-10 h-10 text-natural-green mx-auto mb-3" />
              <h4 className="font-bold mb-2 text-natural-green">Quality Testing</h4>
              <p className="text-text-secondary text-sm">Regular checks for purity and freshness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
