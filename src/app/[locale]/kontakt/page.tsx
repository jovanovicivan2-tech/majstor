import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Kontakt' };

export default async function KontaktPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <Navbar locale={locale} />
      <div className="pt-16 min-h-screen bg-[#F7F2EA]">
        <div className="px-5 md:px-10 py-16 max-w-lg">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2.5">Kontakt</p>
          <h1 className="font-serif font-medium text-[#1C1C1E] mb-8" style={{ fontSize: 'clamp(28px, 6vw, 40px)' }}>Javite nam se</h1>
          <div className="space-y-4 text-[15px] text-[#1C1C1E]">
            <a href="tel:+381XXXXXXXX" className="flex items-center gap-3 p-4 bg-white rounded-sm hover:shadow-sm transition-shadow min-h-[44px]"><span className="text-xl">📞</span> +381 XX XXX XXXX</a>
            <a href="mailto:info@majstorimargarita.rs" className="flex items-center gap-3 p-4 bg-white rounded-sm hover:shadow-sm transition-shadow min-h-[44px]"><span className="text-xl">📧</span> info@majstorimargarita.rs</a>
            <a href="https://instagram.com/majstorimargarita" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white rounded-sm hover:shadow-sm transition-shadow min-h-[44px]"><span className="text-xl">📸</span> @majstorimargarita</a>
          </div>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
