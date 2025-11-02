import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">
            Pure single-source buffalo milk, delivered fresh from trusted dairy families
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="./about.jpg" 
              alt="Pure buffalo milk source" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-natural-green">The Naidu Naturals Promise</h3>
            <p className="text-text-primary mb-4">
              At Naidu Naturals, we believe that milk should be as pure as nature made it — untouched, unblended, and sourced from a single trusted buffalo.
            </p>
            <p className="text-text-primary mb-4">
              Our journey began with a simple question: "Why can't every family enjoy milk from one healthy buffalo, just like their own?"
            </p>
            <p className="text-text-primary mb-6">
              We partner directly with selected local dairy families who care for their buffaloes naturally, ensuring no milk powder, no mixing, and no compromise.
            </p>
            <p className="text-text-primary mb-6">
              Every drop we deliver is pure single-source buffalo milk, rich in natural cream, taste, and nutrition — exactly the way nature intended.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-muted text-natural-green rounded-full text-sm font-medium">
                Single Source
              </span>
              <span className="px-4 py-2 bg-muted text-natural-green rounded-full text-sm font-medium">
                Pure & Natural
              </span>
              <span className="px-4 py-2 bg-muted text-natural-green rounded-full text-sm font-medium">
                No Mixing
              </span>
              <span className="px-4 py-2 bg-muted text-natural-green rounded-full text-sm font-medium">
                Direct from Farm
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
