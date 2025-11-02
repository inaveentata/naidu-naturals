import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-natural-green mr-2" />
            <span className="text-xl font-playfair font-bold text-natural-green">Naidu Naturals</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-text-secondary hover:text-natural-green transition-colors">
              About Us
            </a>
            <a href="#how-it-works" className="text-text-secondary hover:text-natural-green transition-colors">
              How It Works
            </a>
            <a href="#why-choose" className="text-text-secondary hover:text-natural-green transition-colors">
              Why Choose Us
            </a>
            <a href="#testimonials" className="text-text-secondary hover:text-natural-green transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-text-secondary hover:text-natural-green transition-colors">
              Pricing
            </a>
            <a href="#vision" className="text-text-secondary hover:text-natural-green transition-colors">
              Vision
            </a>
            <a href="#contact" className="text-text-secondary hover:text-natural-green transition-colors">
              Contact
            </a>
            <Button size="sm">Start Free Trial</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-text-secondary hover:text-natural-green"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-base font-medium text-text-secondary hover:text-natural-green"
              onClick={toggleMenu}
            >
              How It Works
            </a>
            <a
              href="#why-choose"
              className="block px-3 py-2 text-base font-medium text-text-secondary hover:text-natural-green"
              onClick={toggleMenu}
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-base font-medium text-text-secondary hover:text-natural-green"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-base font-medium text-text-secondary hover:text-natural-green"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a
              href="#vision"
              className="block px-3 py-2 text-base font-medium text-text-secondary hover:text-natural-green"
              onClick={toggleMenu}
            >
              Vision
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-text-secondary hover:text-natural-green"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="w-full">Start Free Trial</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
