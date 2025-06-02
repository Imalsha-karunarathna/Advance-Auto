import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function SEOHead({
  title,
  description,
  keywords = "vehicle service, auto repair, car maintenance, mechanic, automotive",
  canonicalUrl,
  ogImage,
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | AutoCare Pro - Professional Vehicle Service`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      const existingTag = document.querySelector(
        `meta[property="${property}"]`
      );
      if (existingTag) {
        existingTag.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateOGTag("og:title", `${title} | AutoCare Pro`);
    updateOGTag("og:description", description);
    updateOGTag("og:type", "website");
    if (ogImage) updateOGTag("og:image", ogImage);

    // Update canonical URL if provided
    if (canonicalUrl) {
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) {
        existingCanonical.setAttribute("href", canonicalUrl);
      } else {
        const link = document.createElement("link");
        link.rel = "canonical";
        link.href = canonicalUrl;
        document.head.appendChild(link);
      }
    }

    // Add structured data for automotive business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AutomotiveBusiness",
      name: "AutoCare Pro",
      description: description,
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Main Street",
        addressLocality: "Anytown",
        addressRegion: "ST",
        postalCode: "12345",
      },
      telephone: "(555) 123-4567",
      openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "150",
      },
    };

    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
}
