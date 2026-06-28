import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

export const metadata: Metadata = {
  title: { default: "Majstor i Margarita | Privatni venue — Vrdnik, Fruška Gora", template: "%s | Majstor i Margarita" },
  description: "Premium privatni prostor sa bazenom na Fruškoj Gori. Pizza radionice, team building, proslave. Rezervišite online.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://majstorimargarita.rs"),
  openGraph: { type: "website", siteName: "Majstor i Margarita", locale: "sr_RS" },
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
      </head>
      <body className="font-sans bg-cream text-charcoal">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
