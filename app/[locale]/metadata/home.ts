import type { Metadata } from "next";
import enMessages from "@/messages/en/home.json";
import arMessages from "@/messages/ar/home.json";

export async function getHomeMetadata(locale: string): Promise<Metadata> {
  const t = locale === "ar" ? arMessages : enMessages;

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    alternates: {
      canonical: `https://tigre.com/${locale}`,
      languages: {
        "en-US": "https://tigre.com/en",
        "ar-JO": "https://tigre.com/ar",
      },
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: `https://tigre.com/${locale}`,
      type: "website",
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.title,
      description: t.metadata.description,
      images: ["/og-default.png"],
    },
  };
}
