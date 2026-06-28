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
import type { Package } from '@/types';

const FALLBACK: Package[] = [
  { id: '1', slug: 'pizza-kurs', name_sr: 'Kurs za pizza majstore', name_en: null, description_sr: 'Jednodnevni intenziv napolitanske pice. Majstori iz picerije Majstor i Margarita uče vas razvlačenju, filovanju i pečenju u pravoj peći.', description_en: null, includes: ['Ceo dan obuke sa majstorom', 'Razvlačenje, filovanje, pečenje', 'Svi sastojci i oprema', 'Vaše pice uz piće pored bazena'], base_price_rsd: 14999, price_per_person_rsd: 14999, min_guests: 1, max_guests: 30, duration_hours: 8, deposit_percentage: 30, is_active: true, sort_order: 1, created_at: '' },
  { id: '2', slug: 'proslave', name_sr: 'Proslave i rođendani', name_en: null, description_sr: 'Naši majstori spremaju pice za vaše goste — bez ikakvog opterećenja. Ili gosti sami prave pice uz vođenje. Po osobi: neograničeno pica + neograničeno piće.', description_en: null, includes: ['Neograničeno pica za svakog gosta', 'Neograničeno piće', 'Korišćenje bazena i prostora', 'Opcija: gosti sami prave pice'], base_price_rsd: 5999, price_per_person_rsd: 5999, min_guests: 5, max_guests: 50, duration_hours: 6, deposit_percentage: 30, is_active: true, sort_order: 2, created_at: '' },
  { id: '3', slug: 'team-building', name_sr: 'Team Building', name_en: null, description_sr: 'Ceo dan za vašu firmu: bazen, sala i zabava, uz pizza radionicu koja spaja tim. Opcija prenoćišta u obližnjem hotelu.', description_en: null, includes: ['Privatni prostor ceo dan', 'Pizza radionica za tim', 'Bazen i sala za druženje', 'Opcija prenoćišta u hotelu', 'Faktura za firmu'], base_price_rsd: 0, price_per_person_rsd: null, min_guests: 10, max_guests: 50, duration_hours: 10, deposit_percentage: 30, is_active: true, sort_order: 3, created_at: '' },
];

const FEATURES = [
  { icon: '🍕', label: 'Napolitana', desc: 'Prava radionica pice' },
  { icon: '🔥', label: 'Majstori', desc: 'Obuka iz prve ruke' },
  { icon: '🏊', label: 'Bazen', desc: 'Osveženje i opuštanje' },
  { icon: '🎉', label: 'Proslave', desc: 'Rođendani i druženja' },
];

export default async function HomePage() {
  let packages: Package[] = FALLBACK;
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('packages').select('*').eq('is_active', true).order('sort_order');
    if (data && data.length > 0) packages = data as Package[];
  } catch { /* koristi fallback */ }

  return (
    <>
      <Navbar />
      <div data-hero><Hero /></div>
      <Reveal>
        <div className="px-5 md:px-10 pt-16 text-center">
          <div className="divider-gold max-w-xs mx-auto mb-12"><span style={{ color: '#C9A84C' }}>✦</span></div>
          <p className="font-serif leading-relaxed max-w-lg mx-auto mb-8" style={{ fontSize: 'clamp(20px, 5vw, 28px)', color: '#1C1C1E' }}>
            Napolitana Lab nije obična radionica.<br />
            To je mesto gde <strong style={{ color: '#5C1A2E' }}>majstori pice</strong> dele svoje znanje,<br />a vi učite, jedete i uživate pored bazena.
          </p>
          <p className="max-w-md mx-auto mb-12" style={{ fontSize: '14px', color: '#8A7E72', lineHeight: 1.6 }}>
            Radionice vode pizza majstori iz picerije <strong style={{ color: '#5C1A2E', fontWeight: 600 }}>Majstor i Margarita</strong>, na prelepom imanju u srcu Fruške Gore.
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden" style={{ background: 'rgba(138,126,114,0.12)' }}>
            {FEATURES.map((f) => (
              <div key={f.label} className="p-7 text-center" style={{ background: '#F7F2EA' }}>
                <div className="text-3xl mb-2">{f.icon}</div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A7E72', marginBottom: '4px' }}>{f.label}</p>
                <p style={{ fontSize: '13px', color: '#1C1C1E' }}>{f.desc}</p>
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
