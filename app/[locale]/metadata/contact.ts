import type { Metadata } from "next";
import enMessages from "@/messages/en/contact.json";
import arMessages from "@/messages/ar/contact.json";

export async function getContactMetadata(locale: string): Promise<Metadata> {
  const t = locale === "ar" ? arMessages : enMessages;
  const path = `https://tigre.com/${locale}/contact`;

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    alternates: {
      canonical: path,
      languages: {
        "en-US": "https://tigre.com/en/contact",
        "ar-JO": "https://tigre.com/ar/contact",
      },
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: path,
      type: "website",
      images: [{ url: "/og-default.jpeg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.title,
      description: t.metadata.description,
      images: ["/og-default.jpeg"],
    },
  };
}
