import React from "react";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-natural-green text-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">📍 Contact Us</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Have questions about our products or ready to place an order? 
            Our team is here to assist you.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Naidu Naturals</h3>
          <p className="text-white/90 mb-6">Khammam, Telangana, India</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-natural-green/50 p-6 rounded-lg flex flex-col items-center text-center">
            <div className="bg-highlight-yellow rounded-full p-3 mb-4">
              <Phone className="h-6 w-6 text-text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call or WhatsApp</h3>
            <p className="text-white/90 mb-2">Available 7 days a week, 8am-8pm</p>
            <a href="tel:+91XXXXXXXXXX" className="text-highlight-yellow hover:underline">
              📞 +91-XXXXXXXXXX
            </a>
          </div>
          
          <div className="bg-natural-green/50 p-6 rounded-lg flex flex-col items-center text-center">
            <div className="bg-highlight-yellow rounded-full p-3 mb-4">
              <Mail className="h-6 w-6 text-text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-white/90 mb-2">We'll respond within 24 hours</p>
            <a href="mailto:contact@naidunaturals.in" className="text-highlight-yellow hover:underline">
              📧 contact@naidunaturals.in
            </a>
          </div>
          
          <div className="bg-natural-green/50 p-6 rounded-lg flex flex-col items-center text-center">
            <div className="bg-highlight-yellow rounded-full p-3 mb-4">
              <Globe className="h-6 w-6 text-text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-white/90 mb-2">Online</p>
            <a href="https://www.naidunaturals.in" className="text-highlight-yellow hover:underline">
              🌐 www.naidunaturals.in
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/90 mb-4">Follow us on:</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-highlight-yellow hover:underline">[Instagram]</a>
            <a href="#" className="text-highlight-yellow hover:underline">[Facebook]</a>
            <a href="#" className="text-highlight-yellow hover:underline">[YouTube]</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
