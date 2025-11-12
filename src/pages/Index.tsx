import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FarmerStorySection from "@/components/FarmerStorySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import VisionSection from "@/components/VisionSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Naidu Naturals",
    description: "Pure single-source buffalo milk — unblended, unprocessed, and naturally rich",
    url: "https://www.naidunaturals.in",
    logo: "https://www.naidunaturals.in/about.jpg",
    sameAs: [
      // Add social media links here when available
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      // Add contact details when available
    },
    offers: {
      "@type": "Offer",
      description: "Pure single-source buffalo milk subscription",
      availability: "https://schema.org/InStock",
    },
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Naidu Naturals",
    description: "Pure single-source buffalo milk from a trusted source",
    image: "https://www.naidunaturals.in/about.jpg",
    "@id": "https://www.naidunaturals.in",
    url: "https://www.naidunaturals.in",
    telephone: "", // Add phone number when available
    address: {
      "@type": "PostalAddress",
      // Add address when available
    },
    geo: {
      "@type": "GeoCoordinates",
      // Add coordinates when available
    },
  };

  return (
    <>
      <SEO
        title="Naidu Naturals — Pure Milk from a Single Buffalo"
        description="Experience the difference of single-source buffalo milk — unblended, unprocessed, and naturally rich. Pure milk from a trusted source delivered fresh."
        keywords="pure buffalo milk, single source milk, natural milk, organic milk, farm fresh milk, unprocessed milk, Naidu Naturals, buffalo milk subscription"
        image="/about.jpg"
        url="https://www.naidunaturals.in"
        structuredData={[structuredData, organizationStructuredData]}
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <FarmerStorySection />
          <HowItWorksSection />
          <WhyChooseSection />
          <TestimonialsSection />
          <PricingSection />
          <VisionSection />
          <CtaSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
