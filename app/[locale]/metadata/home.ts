import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import enMessages from "@/messages/en/home.json";
import arMessages from "@/messages/ar/home.json";

export async function getHomeMetadata(locale: string): Promise<Metadata> {
  const t = locale === "ar" ? arMessages : enMessages;

  return buildMetadata({
    title: t.metadata.title,
    description: t.metadata.description,
    path: "",
    locale: locale as "en" | "ar",
    keywords: t.metadata.keywords,
    image: "/og-default.png",
  });
}
