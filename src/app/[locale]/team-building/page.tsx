import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Team Building na Fruškoj Gori',
  description: 'Organizujte nezaboravan team building u prirodi Fruške Gore. Privatni bazen, pizza radionice, konobar servis. Faktura za firme. 40 min od Novog Sada.',
};

const ZASTO = [
  { icon: '🏊', title: 'Privatni prostor', desc: 'Samo vaš tim — bez stranih lica. Privatni bazen i ceo prostor rezervisani isključivo za vas.' },
  { icon: '🍕', title: 'Pizza team activity', desc: 'Interaktivna radionica gde tim zajedno pravi pistu. Idealno za jačanje tima — zabavno, opušteno, nezaboravno.' },
  { icon: '📄', title: 'Faktura za firmu', desc: 'Kompletna dokumentacija za računovodstvo. PDV faktura, prihvatamo sve oblike plaćanja za firme.' },
  { icon: '🚗', title: '40 min od NS', desc: 'Lako dostupno iz Novog Sada i Beograda. Besplatni parking za sve učesnike na samom imanju.' },
  { icon: '👥', title: 'Do 50 učesnika', desc: 'Idealno za timove 10–50 osoba. Prilagodimo se vašim potrebama i broju učesnika.' },
  { icon: '🎯', title: 'Prilagodljivo', desc: 'Puna sloboda organizacije. Možete dodati prezentacije, team sessions, nagrade za pobednike.' },
];

const IDEALNO = ['Godišnji team building eventi', 'Kick-off sestanci i lansiranja', 'Onboarding novih zaposlenih', 'Proslave uspeha i milestona', 'HR programi nagrađivanja', 'Corporate away day sesije'];

export default async function TeamBuildingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <Navbar locale={locale} />
      <div className="pt-16">
        <div className="bg-[#1C1C1E] min-h-[240px] flex items-end px-5 md:px-10 pb-10">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">Corporate & Team Building</p>
            <h1 className="font-serif font-medium text-white leading-tight mb-3" style={{ fontSize: 'clamp(28px, 6vw, 52px)' }}>Gde počinju<br /><em className="italic text-[#C9A84C]">pravi timovi</em></h1>
            <p className="text-[15px] text-white/60 leading-relaxed">Zajednička iskustva grade timove brže od ijednog workshopa.</p>
          </div>
        </div>
        <div className="px-5 md:px-10 py-14 bg-[#F7F2EA] max-w-2xl">
          <p className="font-serif text-[#1C1C1E] leading-relaxed" style={{ fontSize: 'clamp(18px, 4vw, 24px)' }}>Zamislite: vaš tim pravi pizzu zajedno, gleda je kako se peče, ruča uz bazen na Fruškoj Gori. To su momenti koji ostaju — i koji spajaju ljude na pravi način.</p>
        </div>
        <div className="bg-white px-5 md:px-10 py-14">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2.5">Zašto mi</p>
          <h2 className="font-serif font-medium text-[#1C1C1E] leading-tight mb-10" style={{ fontSize: 'clamp(24px, 5vw, 36px)' }}>Sve što vaš tim treba</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ZASTO.map((item) => (
              <div key={item.title} className="p-5 bg-[#F7F2EA] rounded-sm">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h3 className="font-semibold text-[#1C1C1E] mb-1.5">{item.title}</h3>
                <p className="text-sm text-[#8A7E72] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#1C1C1E] px-5 md:px-10 py-14">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2.5">Idealno za</p>
          <h2 className="font-serif font-medium text-white mb-8" style={{ fontSize: 'clamp(24px, 5vw, 36px)' }}>Sve prilike koje spajaju ljude</h2>
          <div className="space-y-2">
            {IDEALNO.map((item) => (
              <div key={item} className="flex items-center gap-3 py-2 border-b border-white/8">
                <span className="text-[#C9A84C] font-bold text-lg">✓</span>
                <span className="text-[#EDE8E0] text-[15px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#F7F2EA] px-5 md:px-10 py-14">
          <div className="max-w-lg">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2.5">Kontakt</p>
            <h2 className="font-serif font-medium text-[#1C1C1E] mb-3" style={{ fontSize: 'clamp(24px, 5vw, 36px)' }}>Pošaljite upit za ponudu</h2>
            <p className="text-[15px] text-[#8A7E72] leading-relaxed mb-8">Javite nam broj učesnika i željeni datum — dostaviću vam personalizovanu ponudu u roku od 24h.</p>
            <div className="flex flex-col gap-3 mb-6">
              <a href="tel:+381XXXXXXXX" className="flex items-center gap-3 p-4 bg-white rounded-sm border border-[#EDE8E0] hover:border-[#5C1A2E] transition-colors min-h-[52px]">
                <span className="text-xl">📞</span><div><p className="text-[11px] uppercase tracking-wide text-[#8A7E72]">Pozovite odmah</p><p className="font-medium text-[#1C1C1E]">+381 XX XXX XXXX</p></div>
              </a>
              <a href="mailto:info@majstorimargarita.rs?subject=Team Building upit" className="flex items-center gap-3 p-4 bg-white rounded-sm border border-[#EDE8E0] hover:border-[#5C1A2E] transition-colors min-h-[52px]">
                <span className="text-xl">📧</span><div><p className="text-[11px] uppercase tracking-wide text-[#8A7E72]">Email</p><p className="font-medium text-[#1C1C1E]">info@majstorimargarita.rs</p></div>
              </a>
            </div>
            <Link href={`/${locale}/kontakt`} className="inline-flex items-center gap-2 bg-[#5C1A2E] text-white text-sm font-semibold tracking-[0.08em] uppercase px-8 h-12 rounded-sm hover:bg-[#7A2440] transition-colors">Pošalji upit →</Link>
          </div>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
