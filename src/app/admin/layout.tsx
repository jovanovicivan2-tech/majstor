import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: { default: 'Admin | Majstor i Margarita', template: '%s | Admin M&M' },
  robots: 'noindex, nofollow',
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#111113] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
