import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Bebas_Neue, Playfair_Display, DM_Sans } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://tigre-blush.vercel.app"),
  title: {
    template: "%s | Tigre",
    default: "Tigre - Fast Food Delivery in Under 30 Minutes | Order Online",
  },
  other: {
    'preconnect': [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ],
    'dns-prefetch': [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ]
  },
  description: "Order delicious food from the best restaurants in your city with Tigre. Fast food delivery in under 30 minutes. Download our app for quick and easy ordering.",
  keywords: [
    "Tigre", "food delivery", "fast food", "restaurant delivery", 
    "quick delivery", "online food ordering", "food app", "delivery service",
    "30 minute delivery", "restaurant", "takeaway", "food delivery app"
  ],
  authors: [{ name: "Tigre Team", url: "https://tigre-blush.vercel.app/" }],
  creator: "Future X",
  publisher: "Tigre",
  category: "Food & Delivery",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_JO",
    url: "https://tigre-blush.vercel.app/",
    siteName: "Tigre",
    title: "Tigre - Fast Food Delivery in Under 30 Minutes | Order Online",
    description: "Order delicious food from the best restaurants in your city with Tigre. Fast food delivery in under 30 minutes.",
    images: [
      {
        url: "https://tigre-blush.vercel.app/images/open_graph.jpeg",
        width: 1200,
        height: 630,
        alt: "Tigre - Fast Food Delivery",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tigre - Fast Food Delivery in Under 30 Minutes | Order Online",
    description: "Order delicious food from the best restaurants in your city with Tigre. Fast food delivery in under 30 minutes.",
    images: [
      {
        url: "https://tigre-blush.vercel.app/images/open_graph.jpeg",
        width: 1200,
        height: 630,
        alt: "Tigre - Fast Food Delivery",
      }
    ],
    site: "@tigre",
  },
  alternates: {
    canonical: "https://tigre-blush.vercel.app/",
    languages: {
      "en-US": "https://tigre-blush.vercel.app/en",
      "ar-JO": "https://tigre-blush.vercel.app/ar",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-16x16.png"],
  },
  manifest: "/site.webmanifest",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${bebas.variable} ${playfair.variable} ${dmSans.variable}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
