import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import enMessages from "@/messages/en/about.json";
import arMessages from "@/messages/ar/about.json";

export async function getAboutMetadata(locale: string): Promise<Metadata> {
  const t = locale === "ar" ? arMessages : enMessages;

  return buildMetadata({
    title: t.metadata.title,
    description: t.metadata.description,
    path: "/about",
    locale: locale as "en" | "ar",
    keywords: t.metadata.keywords,
    image: "/og-default.png",
  });
}
