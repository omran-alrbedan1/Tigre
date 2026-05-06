import type { Metadata } from "next";
import enMessages from "@/messages/en/about.json";
import arMessages from "@/messages/ar/about.json";

export async function getAboutMetadata(locale: string): Promise<Metadata> {
  const t = locale === "ar" ? arMessages : enMessages;
  const path = `https://tigre.com/${locale}/about`;

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    alternates: {
      canonical: path,
      languages: {
        "en-US": "https://tigre.com/en/about",
        "ar-JO": "https://tigre.com/ar/about",
      },
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: path,
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
