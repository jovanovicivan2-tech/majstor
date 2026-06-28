import type { Metadata } from 'next';
import './globals.css';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://majstorimargarita.rs';

export const metadata: Metadata = {
  title: { default: 'Majstor i Margarita | Privatni venue sa bazenom — Vrdnik, Fruška Gora', template: '%s | Majstor i Margarita' },
  description: 'Premium privatni prostor sa bazenom na Fruškoj Gori. Pizza radionice, team building, proslave i žurke. Blizu Novog Sada i Beograda. Rezervišite online.',
  metadataBase: new URL(APP_URL),
  openGraph: { type: 'website', siteName: 'Majstor i Margarita', locale: 'sr_RS', url: APP_URL, images: [{ url: `${APP_URL}/api/og`, width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: [`${APP_URL}/api/og`] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ backgroundColor: '#F7F2EA', color: '#1C1C1E', fontFamily: 'Inter, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
