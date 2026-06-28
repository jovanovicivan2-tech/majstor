import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import PackagesSection from '@/components/home/PackagesSection';
import PizzaSection from '@/components/home/PizzaSection';
import LocationSection from '@/components/home/LocationSection';
import CTASection from '@/components/home/CTASection';
import StickyCTA from '@/components/home/StickyCTA';
import Reveal from '@/components/ui/Reveal';
import type { Package } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Majstor i Margarita | Privatni venue sa bazenom — Vrdnik, Fruška Gora',
  description: 'Premium privatni prostor sa bazenom na Fruškoj Gori. Pizza radionice, team building, proslave. 40 min od Novog Sada. Rezervišite online.',
};

const FALLBACK: Package[] = [
  { id: '1', slug: 'samoposluzianje', name_sr: 'Samoposluživanje', name_en: null, description_sr: 'Prostor je vaš — vi određujete ritam.', description_en: null, includes: ['Ekskluzivno korišćenje prostora', 'Privatni bazen', 'Punjeni frižider', 'Besplatni parking'], base_price_rsd: 25000, price_per_person_rsd: null, min_guests: 5, max_guests: 50, duration_hours: 8, deposit_percentage: 30, is_active: true, sort_order: 1, created_at: '' },
  { id: '2', slug: 'pizza-experience', name_sr: 'Pizza Experience', name_en: null, description_sr: 'Naučite tajne napolitanskog testa.', description_en: null, includes: ['Sve iz Samoposluživanje', 'Pizza majstor (3 sata)', 'Svi sastojci', 'Diploma za svakog gosta'], base_price_rsd: 35000, price_per_person_rsd: null, min_guests: 5, max_guests: 50, duration_hours: 8, deposit_percentage: 30, is_active: true, sort_order: 2, created_at: '' },
  { id: '3', slug: 'full-service', name_sr: 'Full Service', name_en: null, description_sr: 'Vi uživate, mi brinemo o svemu.', description_en: null, includes: ['Sve iz Pizza Experience', 'Konobar servis', 'Dekoracija prostora', 'Postavljanje i raspremanje'], base_price_rsd: 45000, price_per_person_rsd: null, min_guests: 5, max_guests: 50, duration_hours: 8, deposit_percentage: 30, is_active: true, sort_order: 3, created_at: '' },
  { id: '4', slug: 'corporate', name_sr: 'Corporate / Team Building', name_en: null, description_sr: 'Jaki timovi se grade van kancelarije.', description_en: null, includes: ['Privatni prostor (ceo dan)', 'Pizza team building', 'Faktura za firmu', 'Grupni popust 20+ osoba'], base_price_rsd: 0, price_per_person_rsd: null, min_guests: 10, max_guests: 100, duration_hours: 10, deposit_percentage: 30, is_active: true, sort_order: 4, created_at: '' },
];

const FEATURES = [
  { icon: '🏊', label: 'Bazen', desc: 'Osveženje i relaksacija' },
  { icon: '🍕', label: 'Pizza', desc: 'Napravite svoju pistu' },
  { icon: '🎉', label: 'Proslave', desc: 'Posebni momenti' },
  { icon: '💼', label: 'Team Building', desc: 'Jači timovi počinju ovde' },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  let packages: Package[] = FALLBACK;
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('packages').select('*').eq('is_active', true).order('sort_order');
    if (data && data.length > 0) packages = data as Package[];
  } catch { /* koristi fallback */ }

  return (
    <>
      <Navbar locale={locale} />
      <div data-hero><Hero locale={locale} /></div>
      <Reveal>
        <div className="px-5 md:px-10 pt-16 pb-0 text-center">
          <div className="divider-gold max-w-xs mx-auto mb-12"><span className="text-[#C9A84C]/70 text-base">✦</span></div>
          <p className="font-serif text-[#1C1C1E] leading-relaxed max-w-lg mx-auto mb-12" style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}>
            Majstor i Margarita nije <strong className="font-semibold text-[#5C1A2E]">običan prostor</strong>.<br />
            To je mesto gde se dobra hrana, odlično društvo<br />i priroda Fruške Gore spajaju u savršenu priču.
          </p>
          <div className="grid grid-cols-2 gap-px bg-[rgba(138,126,114,0.12)] overflow-hidden">
            {FEATURES.map((f) => (
              <div key={f.label} className="bg-[#F7F2EA] hover:bg-[#EDE8E0] transition-colors p-7 text-center">
                <div className="text-3xl mb-2.5">{f.icon}</div>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A7E72] mb-1">{f.label}</p>
                <p className="text-[13px] text-[#1C1C1E] leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={100}><PackagesSection packages={packages} locale={locale} /></Reveal>
      <Reveal delay={50}><PizzaSection locale={locale} /></Reveal>
      <Reveal delay={50}><LocationSection /></Reveal>
      <Reveal delay={50}><CTASection locale={locale} /></Reveal>
      <Footer locale={locale} />
      <StickyCTA locale={locale} />
    </>
  );
}
