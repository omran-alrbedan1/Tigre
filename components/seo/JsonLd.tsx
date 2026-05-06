export function FoodDeliveryServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FoodDeliveryService",
    name: "Tigre",
    url: "https://tigre.com",
    logo: "https://tigre.com/logo.png",
    image: "https://tigre.com/logo.png",
    description: "Fast food delivery service delivering from the best restaurants in under 30 minutes.",
    telephone: "+962 6 533 3333",
    address: {
      "@type": "PostalAddress",
      addressCountry: "JO",
      addressLocality: "Amman",
      streetAddress: "City Center, Amman",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.9539,
      longitude: 35.9106,
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    sameAs: [
      "https://www.instagram.com/tigre",
      "https://www.facebook.com/tigre",
    ],
    serviceType: "Food Delivery",
    areaServed: {
      "@type": "Country",
      name: "Jordan",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Organization schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tigre",
    url: "https://tigre.com",
    logo: "https://tigre.com/logo.png",
    description: "Fast food delivery platform delivering exceptional taste in under 30 minutes.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+962 6 533 3333",
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: [
      "https://www.instagram.com/tigre",
      "https://www.facebook.com/tigre",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Restaurant partnership service schema
export function RestaurantPartnershipSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Restaurant Partnership Program",
    description: "Partner with Tigre to grow your restaurant business and reach thousands of hungry customers.",
    url: "https://tigre.com/en/grow-with-tigre",
    provider: {
      "@type": "Organization",
      name: "Tigre",
    },
    areaServed: {
      "@type": "Country",
      name: "Jordan",
    },
    serviceType: "Restaurant Partnership",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
