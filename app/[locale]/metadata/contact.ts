import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import enMessages from "@/messages/en/contact.json";
import arMessages from "@/messages/ar/contact.json";

export async function getContactMetadata(locale: string): Promise<Metadata> {
  const t = locale === "ar" ? arMessages : enMessages;

  return buildMetadata({
    title: t.metadata.title,
    description: t.metadata.description,
    path: "/contact",
    locale: locale as "en" | "ar",
    keywords: t.metadata.keywords,
    image: "/og-default.png",
  });
}
