import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Bebas_Neue, Playfair_Display, DM_Sans } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import { buildMetadata } from '@/lib/metadata';

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ['italic', 'normal'],
  variable: "--font-playfair"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans"
});

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl =  'https://abusarajewelry.com';
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: "%s | Abu Sara Jewelry",
      default: "Abu Sara Jewelry — Fine Gold & Custom Jewelry Since 1921",
    },
    description: "Jordan's trusted family-owned jeweler since 1921. Handcrafted gold, engagement rings, and custom designs in Amman.",
    openGraph: {
      type: "website",
      locale: locale === 'ar' ? 'ar_JO' : 'en_US',
      url: `${baseUrl}/${locale}`,
      siteName: "Abu Sara Jewelry",
      title: "Abu Sara Jewelry — Fine Gold & Custom Jewelry Since 1921",
      description: "Jordan's trusted family-owned jeweler since 1921. Handcrafted gold and custom designs in Amman.",
      images: [{
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Abu Sara Jewelry Collection",
      }],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'ar': `${baseUrl}/ar`,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${bebas.variable} ${playfair.variable} ${dmSans.variable}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}