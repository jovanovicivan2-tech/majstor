import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'O nama',
  description: 'Naša priča — premium privatni venue na Fruškoj Gori koji je nastao iz jedne proste ideje: napraviti mesto gde se osetiš kao kod kuće, ali lepo kao u hotelu.',
};

const VREDNOSTI = [
  { icon: '🏠', title: 'Privatnost', desc: 'Svaka rezervacija znači da je prostor samo vaš. Niko drugi. Puna sloboda.' },
  { icon: '🍕', title: 'Autentičnost', desc: 'Naši pizza majstori prave pistu od srca. Nikada gotova smesa, uvek sveže.' },
  { icon: '🌿', title: 'Priroda', desc: 'Fruška Gora u podnožju, zelenilo i svež vazduh — prirodni ambijent bez kompromisa.' },
  { icon: '✨', title: 'Pažnja', desc: 'Svaki detalj je promišljen. Od čistoće bazena do načina na koji vas dočekamo.' },
];

export default async function ONamaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <Navbar locale={locale} />
      <div className="pt-16">
        <div className="bg-[#1C1C1E] min-h-[200px] flex items-end px-5 md:px-10 pb-10">
          <div><p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2">O nama</p><h1 className="font-serif font-medium text-white" style={{ fontSize: 'clamp(28px, 6vw, 48px)' }}>Naša priča</h1></div>
        </div>
        <div className="px-5 md:px-10 py-16 bg-[#F7F2EA]">
          <div className="max-w-xl space-y-6">
            <p className="font-serif text-[#1C1C1E] leading-relaxed" style={{ fontSize: 'clamp(18px, 4vw, 22px)' }}>Majstor i Margarita nastao je iz jedne proste ideje: napraviti mesto gde se osetiš kao kod kuće, ali lepo kao u hotelu.</p>
            <p className="text-[15px] text-[#8A7E72] leading-relaxed">Na Fruškoj Gori, okruženi prirodom i mirisima borovine, stvorili smo prostor koji pamtiš. Pizza dolazi iz srca — jer naši majstori zaista vole ono što rade.</p>
            <p className="text-[15px] text-[#8A7E72] leading-relaxed">Jedva čekamo da vam ugostimo.</p>
          </div>
        </div>
        <div className="bg-white px-5 md:px-10 py-16">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2.5">Naše vrednosti</p>
          <h2 className="font-serif font-medium text-[#1C1C1E] mb-10" style={{ fontSize: 'clamp(24px, 5vw, 36px)' }}>Šta nas čini posebnim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VREDNOSTI.map((v) => (
              <div key={v.title} className="p-5 bg-[#F7F2EA] rounded-sm">
                <span className="text-2xl block mb-3">{v.icon}</span>
                <h3 className="font-semibold text-[#1C1C1E] mb-1.5">{v.title}</h3>
                <p className="text-sm text-[#8A7E72] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#EDE8E0] px-5 md:px-10 py-14">
          <div className="max-w-lg">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2.5">Lokacija</p>
            <h2 className="font-serif font-medium text-[#1C1C1E] mb-5" style={{ fontSize: 'clamp(22px, 5vw, 32px)' }}>Vrdnik, Fruška Gora</h2>
            <p className="text-[15px] text-[#8A7E72] leading-relaxed mb-6">Smestili smo se u Vrdniku na Fruškoj Gori — nacionalni park na dlanu od Novog Sada. Pored Termi Vrdnik, ali u sopstvenom svetu — tišina, zelenilo i privatnost.</p>
            <div className="space-y-2 text-sm text-[#1C1C1E]">
              <p>📍 Vrdnik, Fruška Gora, 22406</p><p>🚗 40 minuta od Novog Sada</p>
              <p>🚗 80 minuta od Beograda</p><p>🅿️ Besplatni parking na imanju</p>
            </div>
          </div>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
