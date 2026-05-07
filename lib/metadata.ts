// lib/metadata.ts
import type { Metadata } from "next";

const BASE_URL = "https://tigre-blush.vercel.app";

export const defaultMetadata = {
  siteName: "Tigre",
  baseUrl: BASE_URL,
  defaultLocale: "en",
};

export function buildMetadata({
  title,
  description,
  path = "",
  locale = "en",
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  locale?: "en" | "ar";
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${BASE_URL}/${locale}${path}`;
  
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      template: "%s | Tigre",
      default: title,
    },
    description: description,
    keywords: keywordsString,
    authors: [{ name: "Tigre Team", url: BASE_URL }],
    creator: "Future X",
    publisher: "Tigre",
    category: "Food & Delivery",
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_JO" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_JO",
      url: url,
      siteName: defaultMetadata.siteName,
      title: title,
      description: description,
      images: [
        {
          url: "/images/og-default.jpg",
          width: 1200,
          height: 630,
          alt: "Tigre - Fast Food Delivery",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/images/og-default.jpg"],
      site: "@tigre",
    },
    alternates: {
      canonical: url,
      languages: {
        "en": `${BASE_URL}/en${path}`,
        "ar": `${BASE_URL}/ar${path}`,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon-180.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon-16x16.png"],
    },
    manifest: "/site.webmanifest",
  };
}