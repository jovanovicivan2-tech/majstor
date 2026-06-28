import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import PackagesSection from '@/components/home/PackagesSection';
import PizzaSection from '@/components/home/PizzaSection';
import GalerijaSection from '@/components/home/GalerijaSection';
import TeamBuildingSection from '@/components/home/TeamBuildingSection';
import LocationSection from '@/components/home/LocationSection';
import CTASection from '@/components/home/CTASection';
import StickyCTA from '@/components/home/StickyCTA';
import ChatWidget from '@/components/robots/ChatWidget';
import Reveal from '@/components/ui/Reveal';
import type { HeroSlide } from '@/components/home/Hero';
import type { Package, GalleryImage } from '@/types';

// Sve fotografije iz galerije — vrte se u Hero slideshow-u na naslovnoj.
const GALLERY_FALLBACK: HeroSlide[] = [
  { src: '/images/pool_dusk.jpg', alt: 'Privatni bazen u sumrak — Napolitana Lab, Fruška Gora' },
  { src: '/images/pool_wide.jpg', alt: 'Pogled na bazen i prostor za radionice pice' },
  { src: '/images/pool_person.jpg', alt: 'Opuštanje u kristalno čistom bazenu' },
  { src: '/images/terrace_sunset.jpg', alt: 'Terasa sa panoramskim pogledom na Vojvodinu' },
  { src: '/images/garden_view.jpg', alt: 'Uređena bašta sa panoramom Fruškogorske ravnice' },
  { src: '/images/garden2.jpg', alt: 'Mediteranska bašta sa aromatičnim biljem' },
  { src: '/images/lavender.jpg', alt: 'Lavanda u cvatu — mirisi Provence na Fruškoj Gori' },
  { src: '/images/interior_lavender.jpg', alt: 'Enterijer sa lavandom i pogledom na bazen' },
];

const FALLBACK: Package[] = [
  { id: '1', slug: 'pizza-kurs', name_sr: 'Kurs za pizza majstore', name_en: null, description_sr: 'Jednodnevni intenziv napolitanske pice. Majstori picerije Majstor i Margarita otkrivaju veštinu razvlačenja, filovanja i pečenja na vatri krušne peći.', description_en: null, includes: ['Ceo dan obuke uz majstora', 'Razvlačenje, filovanje, pečenje', 'Svi sastojci i oprema', 'Vaša pica uz piće, pored bazena'], base_price_rsd: 14999, price_per_person_rsd: 14999, min_guests: 1, max_guests: 30, duration_hours: 8, deposit_percentage: 30, is_active: true, sort_order: 1, created_at: '' },
  { id: '2', slug: 'proslave', name_sr: 'Proslave i rođendani', name_en: null, description_sr: 'Naši majstori pripremaju picu za vaše goste — ili gosti sami stvaraju svoju, uz vođenje. Po osobi: neograničeno pice i pića.', description_en: null, includes: ['Neograničeno pice za svakog gosta', 'Neograničeno piće', 'Korišćenje bazena i prostora', 'Mogućnost: gosti sami prave picu'], base_price_rsd: 5999, price_per_person_rsd: 5999, min_guests: 5, max_guests: 50, duration_hours: 6, deposit_percentage: 30, is_active: true, sort_order: 2, created_at: '' },
  { id: '3', slug: 'team-building', name_sr: 'Team Building', name_en: null, description_sr: 'Ceo dan posvećen vašem timu: bazen, prostor i radionica pice koja zbližava. Uz mogućnost prenoćišta u obližnjem hotelu.', description_en: null, includes: ['Privatni prostor ceo dan', 'Radionica pice za tim', 'Bazen i prostor za druženje', 'Mogućnost prenoćišta u hotelu', 'Faktura za firmu'], base_price_rsd: 0, price_per_person_rsd: null, min_guests: 10, max_guests: 50, duration_hours: 10, deposit_percentage: 30, is_active: true, sort_order: 3, created_at: '' },
];

const FEATURES = [
  { icon: 'M2 12c2.5-3 6-5 10-5s7.5 2 10 5M12 7v0M7 9.5l1 2.5M17 9.5l-1 2.5M10 11l.5 2M14 11l-.5 2', label: 'Napolitana', desc: 'Testo, vatra i tradicija' },
  { icon: 'M12 3c1.5 2.5 3 4 3 6.5a3 3 0 0 1-6 0c0-1 .4-1.8 1-2.5M12 21a6 6 0 0 0 6-6c0-3-2-5.5-6-9-4 3.5-6 6-6 9a6 6 0 0 0 6 6Z', label: 'Majstori', desc: 'Umeće iz prve ruke' },
  { icon: 'M3 16c1.5 0 1.5 1.5 3 1.5s1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5M3 20c1.5 0 1.5 1.5 3 1.5s1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5M7 12V5a2 2 0 0 1 4 0M9 9h6', label: 'Bazen', desc: 'Voda, sunce i mir' },
  { icon: 'M5 21l1.5-7M19 21l-1.5-7M6 14h12l-1-4H7l-1 4ZM9 10V6m6 4V6M9 6a3 3 0 0 1 6 0M12 6V3', label: 'Proslave', desc: 'Trenuci koji ostaju' },
];

export default async function HomePage() {
  let packages: Package[] = FALLBACK;
  let heroSlides: HeroSlide[] = GALLERY_FALLBACK;
  try {
    const supabase = await createClient();
    const [pkgRes, galRes] = await Promise.all([
      supabase.from('packages').select('*').eq('is_active', true).order('sort_order'),
      supabase.from('gallery').select('*').order('sort_order'),
    ]);
    if (pkgRes.data && pkgRes.data.length > 0) packages = pkgRes.data as Package[];
    if (galRes.data && galRes.data.length > 0) {
      heroSlides = (galRes.data as GalleryImage[]).map((g) => ({
        src: g.url,
        alt: g.alt_sr ?? 'Napolitana Lab — Vrdnik, Fruška Gora',
      }));
    }
  } catch { /* koristi fallback */ }

  return (
    <>
      <Navbar />
      <div data-hero><Hero slides={heroSlides} /></div>
      <Reveal>
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-20 md:pt-32">
          <div className="divider-gold max-w-[200px] mx-auto mb-12"><span style={{ color: '#C9A84C' }}>✦</span></div>
          <p className="font-display leading-snug max-w-3xl mx-auto text-center" style={{ fontSize: 'var(--text-d-lg)', color: '#1C1C1E', fontWeight: 400 }}>
            Napolitana Lab nije tek radionica. To je mesto gde se{' '}
            <em style={{ fontStyle: 'italic', color: '#5C1A2E' }}>umeće napolitanske pice</em> prenosi iz ruke u ruku —
            uz vatru krušne peći i mir bazena.
          </p>
          <p className="max-w-xl mx-auto text-center mt-6" style={{ fontSize: 16, color: '#8A7E72', lineHeight: 1.65 }}>
            Radionice vode majstori picerije{' '}
            <strong style={{ color: '#5C1A2E', fontWeight: 600 }}>Majstor i Margarita</strong>, na imanju skrivenom u srcu Fruške Gore.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16" style={{ background: 'rgba(138,126,114,0.16)', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(138,126,114,0.16)' }}>
            {FEATURES.map((f) => (
              <div key={f.label} className="text-center transition-colors duration-300" style={{ background: '#F7F2EA', padding: '36px 20px' }}>
                <span className="inline-flex items-center justify-center mb-4" style={{ width: 52, height: 52, borderRadius: 999, background: 'rgba(201,168,76,0.12)' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={f.icon} /></svg>
                </span>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5C1A2E', marginBottom: 5 }}>{f.label}</p>
                <p style={{ fontSize: 13, color: '#8A7E72', lineHeight: 1.45 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={100}><PackagesSection packages={packages} /></Reveal>
      <Reveal delay={50}><PizzaSection /></Reveal>
      <Reveal delay={50}><GalerijaSection /></Reveal>
      <Reveal delay={50}><TeamBuildingSection /></Reveal>
      <Reveal delay={50}><LocationSection /></Reveal>
      <Reveal delay={50}><CTASection /></Reveal>
      <Footer />
      <StickyCTA />
      <ChatWidget />
    </>
  );
}
