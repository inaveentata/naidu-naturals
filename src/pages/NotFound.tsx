import React from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for could not be found."
        url="https://www.naidunaturals.in/404"
        type="website"
        noindex={true}
      />
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-natural-green mb-4">404</h1>
          <p className="text-text-secondary">Page not found</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;

