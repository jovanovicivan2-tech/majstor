import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Rezervacija potvrđena' };

export default async function UspehPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ session_id?: string }> }) {
  const { locale } = await params;
  await searchParams;
  return (
    <>
      <Navbar locale={locale} />
      <div className="min-h-screen bg-[#F7F2EA] flex items-center justify-center px-5 pt-16">
        <div className="text-center max-w-sm">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="font-serif text-3xl font-medium text-[#1C1C1E] mb-3">Rezervacija potvrđena!</h1>
          <p className="text-[#8A7E72] leading-relaxed mb-8">Hvala vam! Poslali smo potvrdu na vaš email. Jedva čekamo da vas ugostimo!</p>
          <div className="divider-gold mb-8"><span className="text-[#C9A84C]/70">✦</span></div>
          <div className="bg-white rounded-sm p-5 mb-8 text-left space-y-2">
            <p className="text-sm text-[#8A7E72]">📧 Proverite inbox za potvrdu rezervacije</p>
            <p className="text-sm text-[#8A7E72]">📞 Za pitanja: +381 XX XXX XXXX</p>
            <p className="text-sm text-[#8A7E72]">💰 Ostatak platite na mestu</p>
          </div>
          <Link href={`/${locale === 'en' ? 'en/' : ''}`}
            className="inline-flex items-center gap-2 bg-[#5C1A2E] text-white text-sm font-semibold tracking-wide uppercase px-6 h-12 rounded-sm hover:bg-[#7A2440] transition-colors">
            Nazad na početnu
          </Link>
        </div>
      </div>
    </>
  );
}
