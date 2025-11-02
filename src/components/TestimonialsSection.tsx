import React from "react";
import { ThumbsUp } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We can really feel the difference. It's thicker and creamier than other milk!",
      name: "Priya Sharma",
      role: "Mother of Two"
    },
    {
      quote: "Even my kids love the taste — reminds me of village days.",
      name: "Rajesh Kumar",
      role: "Regular Customer"
    },
    {
      quote: "Finally, milk we can trust.",
      name: "Anjali Reddy",
      role: "Health Conscious Parent"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">💬 Customer Stories</h2>
          <p className="section-subtitle">
            Real families. Real trust.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-muted text-natural-green rounded-full p-2">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <blockquote className="text-text-primary mb-4 italic text-lg">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-bold text-natural-green">{testimonial.name}</p>
                <p className="text-sm text-text-secondary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
