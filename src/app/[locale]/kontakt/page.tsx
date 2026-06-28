import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import KontaktForm from '@/components/home/KontaktForm';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktirajte Majstor i Margarita — privatni venue sa bazenom na Fruškoj Gori. Brzo odgovaramo.',
};

export default async function KontaktPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <Navbar locale={locale} />
      <div className="pt-16">
        <div className="bg-[#1C1C1E] h-48 flex items-end px-5 pb-8">
          <div><p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2">Kontakt</p><h1 className="font-serif text-white font-medium" style={{ fontSize: 'clamp(28px, 6vw, 48px)' }}>Javite nam se</h1></div>
        </div>
        <div className="bg-[#F7F2EA] min-h-screen px-5 md:px-10 py-12">
          <div className="max-w-lg">
            <div className="space-y-3 mb-10">
              <a href="tel:+381XXXXXXXX" className="flex items-center gap-4 p-4 bg-white rounded-sm border border-[#EDE8E0] hover:border-[#5C1A2E] hover:shadow-sm transition-all min-h-[64px]">
                <span className="text-2xl">📞</span><div><p className="text-[11px] uppercase tracking-[0.1em] text-[#8A7E72]">Telefon</p><p className="font-medium text-[#1C1C1E]">+381 XX XXX XXXX</p></div>
              </a>
              <a href="mailto:info@majstorimargarita.rs" className="flex items-center gap-4 p-4 bg-white rounded-sm border border-[#EDE8E0] hover:border-[#5C1A2E] hover:shadow-sm transition-all min-h-[64px]">
                <span className="text-2xl">📧</span><div><p className="text-[11px] uppercase tracking-[0.1em] text-[#8A7E72]">Email</p><p className="font-medium text-[#1C1C1E]">info@majstorimargarita.rs</p></div>
              </a>
              <a href="https://instagram.com/majstorimargarita" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-sm border border-[#EDE8E0] hover:border-[#5C1A2E] hover:shadow-sm transition-all min-h-[64px]">
                <span className="text-2xl">📸</span><div><p className="text-[11px] uppercase tracking-[0.1em] text-[#8A7E72]">Instagram</p><p className="font-medium text-[#1C1C1E]">@majstorimargarita</p></div>
              </a>
            </div>
            <div className="divider-gold mb-10"><span className="text-[#C9A84C]/70 text-base">✦</span></div>
            <h2 className="font-serif font-medium text-[#1C1C1E] mb-6" style={{ fontSize: 'clamp(22px, 5vw, 30px)' }}>Pošaljite poruku</h2>
            <KontaktForm />
            <div className="mt-10 p-5 bg-white rounded-sm border border-[#EDE8E0]">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#8A7E72] mb-3">Dostupnost</p>
              <p className="text-sm text-[#1C1C1E]">📅 Vikendima i praznicima po rezervaciji</p>
              <p className="text-sm text-[#1C1C1E] mt-1">⏰ Odgovaramo u roku od 24h</p>
              <p className="text-sm text-[#1C1C1E] mt-1">📍 Vrdnik, Fruška Gora</p>
            </div>
          </div>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
