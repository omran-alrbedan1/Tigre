import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function getAboutMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'about.metadata' });

  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: "/about",
    locale: locale as "en" | "ar",
    keywords: t.raw('keywords') as string[],
    image: "/open_graph.png",
  });
}
