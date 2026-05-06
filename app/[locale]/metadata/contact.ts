import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function getContactMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contact.metadata' });

  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: "/contact",
    locale: locale as "en" | "ar",
    keywords: t.raw('keywords') as string[],
    image: "/og-default.png",
  });
}
