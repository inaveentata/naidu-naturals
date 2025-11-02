import React from "react";
import { Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-highlight-yellow mr-2" />
              <span className="text-xl font-playfair font-bold">Naidu Naturals</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Pure single-source buffalo milk, delivered fresh from trusted dairy families. From our village to your home — with honesty and heart.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-highlight-yellow transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-highlight-yellow transition-colors">How It Works</a></li>
              <li><a href="#why-choose" className="text-gray-400 hover:text-highlight-yellow transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-highlight-yellow transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-highlight-yellow transition-colors">Local Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-highlight-yellow transition-colors">Business Supply</a></li>
              <li><a href="#" className="text-gray-400 hover:text-highlight-yellow transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-highlight-yellow transition-colors">Custom Orders</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-highlight-yellow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-highlight-yellow transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-highlight-yellow transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-highlight-yellow transition-colors">Shipping Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Naidu Naturals. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <p className="text-xs text-gray-500">
                Natural Products | Organic Goods | Premium Quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

