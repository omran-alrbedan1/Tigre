import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function getHomeMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home.metadata' });

  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: "",
    locale: locale as "en" | "ar",
    keywords: t.raw('keywords') as string[],
    image: "/og-default.png",
  });
}
