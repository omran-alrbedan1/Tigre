interface SchemaProps {
  [key: string]: any;
}

const BASE_URL = "https://tigre-blush.vercel.app";

// Organization Schema
export function organizationSchema(): SchemaProps {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tigre",
    "url": BASE_URL,
    "logo": `${BASE_URL}/images/logo.png`,
    "description": "Fast food delivery service in under 30 minutes",
    "sameAs": [
      "https://www.instagram.com/tigre.delivery?igsh=MTliYjVqcWxuYWdzbg==",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+972-542833740",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"]
    }
  };
}

// Local Business Schema for Food Delivery
export function localBusinessSchema(): SchemaProps {
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Tigre",
    "url": BASE_URL,
    "telephone": "+962-542833740",
    "address": {
      "@type": "PostalAddress",
      // Add your actual address
      "addressCountry": "JO",
      "addressLocality": "Amman"
    },
    "servesCuisine": ["Fast Food", "Local Cuisine", "International"],
    "priceRange": "$",
    "openingHours": [
      "Mo-Su 00:00-23:59"
    ],
    "acceptsReservations": false,
    "menu": `${BASE_URL}/menu`,
    "description": "Fast food delivery service delivering delicious meals in under 30 minutes",
    "image": `${BASE_URL}/images/open_graph.jpeg`
  };
}

// Website Schema
export function websiteSchema(): SchemaProps {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tigre",
    "url": BASE_URL,
    "description": "Order delicious food from the best restaurants in your city with Tigre. Fast food delivery in under 30 minutes.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tigre",
      "url": BASE_URL
    }
  };
}

// Mobile Application Schema
export function mobileAppSchema(): SchemaProps {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Tigre - Food Delivery",
    "applicationCategory": "FoodDeliveryApplication",
    "operatingSystem": ["iOS", "Android"],
    "description": "Order food from your favorite restaurants and get it delivered in under 30 minutes",
    "url": BASE_URL,
    "downloadUrl": [
      "https://apps.apple.com/us/app/tigre-store/id6499185647",
      "https://play.google.com/store/apps/details?id=com.tigree.app.v2&hl=en-US"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "1000"
    }
  };
}

// FAQ Schema
export function faqSchema(faqs: Array<{ question: string; answer: string }>): SchemaProps {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// BreadcrumbList Schema
export function breadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>): SchemaProps {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  };
}

// Service Schema for Food Delivery
export function serviceSchema(): SchemaProps {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Food Delivery Service",
    "description": "Fast food delivery service in under 30 minutes",
    "provider": {
      "@type": "Organization",
      "name": "Tigre",
      "url": BASE_URL
    },
    "serviceType": "Food Delivery",
    "areaServed": {
      "@type": "Country",
      "name": "Jordan"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Food Delivery Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Delivery",
            "description": "Food delivery in under 30 minutes"
          }
        }
      ]
    }
  };
}

// Generate JSON-LD script tag
export function generateJsonLd(schema: SchemaProps): string {
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}

// Get all schemas for the homepage
export function getHomepageSchemas(): string[] {
  return [
    generateJsonLd(organizationSchema()),
    generateJsonLd(localBusinessSchema()),
    generateJsonLd(websiteSchema()),
    generateJsonLd(mobileAppSchema()),
    generateJsonLd(serviceSchema())
  ];
}
