import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Majstor i Margarita — Privatni Venue, Vrdnik',
    template: '%s | Majstor i Margarita',
  },
  description:
    'Ekskluzivni privatni prostor sa bazenom i pizza radionicom na Fruškoj Gori. Idealno za proslave, team building i privatne žurke. 40 min od Novog Sada.',
  keywords: [
    'privatni prostor',
    'bazen',
    'Fruška Gora',
    'Vrdnik',
    'proslava',
    'team building',
    'pizza radionica',
    'venue',
  ],
  authors: [{ name: 'Majstor i Margarita' }],
  creator: 'Majstor i Margarita',
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: 'https://majstorimargarita.rs',
    siteName: 'Majstor i Margarita',
    title: 'Majstor i Margarita — Privatni Venue, Vrdnik',
    description:
      'Ekskluzivni privatni prostor sa bazenom i pizza radionicom na Fruškoj Gori.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Majstor i Margarita — Privatni Venue na Fruškoj Gori',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Majstor i Margarita — Privatni Venue, Vrdnik',
    description: 'Ekskluzivni privatni prostor sa bazenom na Fruškoj Gori.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <head>
        {/* Google Fonts — učitava se u browser, ne pri build */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
