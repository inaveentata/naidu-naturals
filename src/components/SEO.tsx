import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object | object[];
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Naidu Naturals — Pure Milk from a Single Buffalo",
  description = "Experience the difference of single-source buffalo milk — unblended, unprocessed, and naturally rich. Pure milk from a trusted source.",
  keywords = "pure buffalo milk, single source milk, natural milk, organic milk, farm fresh milk, unprocessed milk, Naidu Naturals",
  image = "/about.jpg",
  url = "https://naidunaturals.com",
  type = "website",
  structuredData,
  noindex = false,
}) => {
  const fullTitle = title.includes("Naidu Naturals") 
    ? title 
    : `${title} | Naidu Naturals`;
  
  const fullImage = image.startsWith("http") 
    ? image 
    : `${url}${image.startsWith("/") ? image : `/${image}`}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Naidu Naturals" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Naidu Naturals" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <>
          {Array.isArray(structuredData) ? (
            structuredData.map((data, index) => (
              <script
                key={index}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
              />
            ))
          ) : (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
          )}
        </>
      )}
    </Helmet>
  );
};

export default SEO;

