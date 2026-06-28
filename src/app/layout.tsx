import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import JsonLd from "@/components/ui/JsonLd";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://napolitanalab.rs';

export const metadata: Metadata = {
  title: { default: "Napolitana Lab Vrdnik | Radionica pice i privatni prostor — Fruška Gora", template: "%s | Napolitana Lab Vrdnik" },
  description: "Radionica napolitanske pice na Fruškoj Gori. Kurs za pizza majstore, team building i proslave uz bazen u privatnom prostoru. Radionice vode majstori iz picerije Majstor i Margarita.",
  metadataBase: new URL(APP_URL),
  keywords: ["radionica pice Vrdnik", "kurs za pizza majstore Srbija", "team building Fruška gora", "napolitana pica", "proslava sa bazenom Novi Sad"],
  openGraph: { type: "website", siteName: "Napolitana Lab Vrdnik", locale: "sr_RS", url: APP_URL, images: [{ url: `${APP_URL}/api/og`, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const venueSchema = {
  "@context": "https://schema.org", "@type": "EventVenue",
  name: "Napolitana Lab Vrdnik", url: APP_URL, telephone: "+381653877777",
  description: "Radionica napolitanske pice i privatni prostor sa bazenom na Fruškoj Gori.",
  address: { "@type": "PostalAddress", streetAddress: "Grobljanska", addressLocality: "Vrdnik", addressRegion: "Vojvodina", postalCode: "22406", addressCountry: "RS" },
  geo: { "@type": "GeoCoordinates", latitude: "45.1181288", longitude: "19.8128489" },
  hasMap: "https://maps.app.goo.gl/RD2bw5dQoNc4FyuVA",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Radionica pice", value: true },
    { "@type": "LocationFeatureSpecification", name: "Privatni bazen", value: true },
    { "@type": "LocationFeatureSpecification", name: "Besplatni parking", value: true },
  ],
  image: `${APP_URL}/images/pool_dusk.jpg`,
  priceRange: "5999-14999 RSD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* PRIVREMENO: literalni font-family u još-neredizajniranim komponentama.
            Ukloniti kad sve pređe na var(--font-display)/var(--font-body). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <JsonLd data={venueSchema} />
      </head>
      <body>{children}</body>
    </html>
  );
}
