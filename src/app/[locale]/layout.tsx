import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import JsonLd from "@/components/ui/JsonLd";
import "../globals.css";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://majstorimargarita.rs';

export const metadata: Metadata = {
  title: { default: "Majstor i Margarita | Privatni venue sa bazenom — Vrdnik, Fruška Gora", template: "%s | Majstor i Margarita" },
  description: "Premium privatni prostor sa bazenom na Fruškoj Gori. Pizza radionice, team building, proslave i žurke. Blizu Novog Sada i Beograda. Rezervišite online.",
  metadataBase: new URL(APP_URL),
  keywords: ["privatni bazen Vrdnik", "team building Fruška gora", "pizza radionica Srbija", "iznajmljivanje prostora Vrdnik", "proslava sa bazenom Novi Sad"],
  openGraph: { type: "website", siteName: "Majstor i Margarita", locale: "sr_RS", url: APP_URL, images: [{ url: `${APP_URL}/api/og`, width: 1200, height: 630, alt: "Majstor i Margarita" }] },
  twitter: { card: "summary_large_image", images: [`${APP_URL}/api/og`] },
  robots: { index: true, follow: true },
  alternates: { canonical: APP_URL, languages: { sr: APP_URL, en: `${APP_URL}/en` } },
};

const venueSchema = {
  "@context": "https://schema.org", "@type": "EventVenue",
  name: "Majstor i Margarita",
  description: "Premium privatni prostor sa bazenom na Fruškoj Gori. Pizza radionice, team building, proslave.",
  url: APP_URL, telephone: "+381XXXXXXXXX",
  address: { "@type": "PostalAddress", addressLocality: "Vrdnik", addressRegion: "Vojvodina", postalCode: "22406", addressCountry: "RS" },
  geo: { "@type": "GeoCoordinates", latitude: "45.1234", longitude: "19.7890" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "10:00", closes: "23:00" },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Privatni bazen", value: true },
    { "@type": "LocationFeatureSpecification", name: "Pizza radionica", value: true },
    { "@type": "LocationFeatureSpecification", name: "Besplatni parking", value: true },
  ],
  image: `${APP_URL}/images/hero-pool.jpg`,
  priceRange: "25000-60000 RSD",
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "sr" | "en")) notFound();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <JsonLd data={venueSchema} />
      </head>
      <body className="font-sans bg-cream text-charcoal antialiased">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() { return routing.locales.map((locale) => ({ locale })); }
