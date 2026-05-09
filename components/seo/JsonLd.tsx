const BASE_URL = "https://tigre-blush.vercel.app";
const PHONE_NUMBER = "+962 542833740";

export function FoodDeliveryServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FoodDeliveryService",
    name: "Tigre",
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    image: `${BASE_URL}/images/open_graph.jpeg`,
    description: "Fast food delivery service delivering from the best restaurants in under 30 minutes.",
    telephone: PHONE_NUMBER,
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
    priceRange: "$",
    sameAs: [
      "https://www.instagram.com/tigre.delivery?igsh=MTliYjVqcWxuYWdzbg==",
      // Add Facebook and Twitter URLs when available
    ],
    serviceType: "Food Delivery",
    areaServed: {
      "@type": "Country",
      name: "Jordan",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Food Delivery Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Standard Delivery",
            description: "Food delivery in under 30 minutes"
          }
        }
      ]
    }
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
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    description: "Fast food delivery platform delivering exceptional taste in under 30 minutes.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_NUMBER,
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: [
      "https://www.instagram.com/tigre.delivery?igsh=MTliYjVqcWxuYWdzbg==",
      // Add Facebook and Twitter URLs when available
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
    url: `${BASE_URL}/grow-with-tigre`,
    provider: {
      "@type": "Organization",
      name: "Tigre",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Jordan",
    },
    serviceType: "Restaurant Partnership",
    offers: {
      "@type": "Offer",
      description: "Grow your restaurant business with Tigre's delivery platform",
      areaServed: "Jordan"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tigre",
    url: BASE_URL,
    description: "Order delicious food from best restaurants in your city with Tigre. Fast food delivery in under 30 minutes.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    publisher: {
      "@type": "Organization",
      name: "Tigre",
      url: BASE_URL
    },
    downloadUrl: [
      "https://apps.apple.com/us/app/tigre-store/id6499185647",
      "https://play.google.com/store/apps/details?id=com.tigree.app.v2&hl=en-US"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Mobile Application schema
export function MobileAppSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tigre - Food Delivery",
    applicationCategory: "FoodDeliveryApplication",
    operatingSystem: ["iOS", "Android"],
    description: "Order food from your favorite restaurants and get it delivered in under 30 minutes",
    url: BASE_URL,
    downloadUrl: [
      "https://apps.apple.com/us/app/tigre-store/id6499185647",
      "https://play.google.com/store/apps/details?id=com.tigree.app.v2&hl=en-US"
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "1000"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ schema
export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does food delivery take with Tigre?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tigre delivers food in under 30 minutes. Our average delivery time is 25 minutes depending on your location and restaurant preparation time."
        }
      },
      {
        "@type": "Question",
        name: "What areas does Tigre serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tigre currently serves all major areas in Amman, Jordan. We're continuously expanding our service areas to reach more customers."
        }
      },
      {
        "@type": "Question",
        name: "How can I track my order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can track your order in real-time through our mobile app or website. We provide live GPS tracking from restaurant to your doorstep."
        }
      },
      {
        "@type": "Question",
        name: "What payment methods does Tigre accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tigre accepts various payment methods including credit/debit cards, digital wallets, and cash on delivery for your convenience."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList schema
export function BreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
