import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/layout/Navbar';
import BookingWizard from '@/components/booking/BookingWizard';
import type { Package } from '@/types';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Rezervacija', description: 'Rezervišite termin za kurs pice ili proslavu u Napolitana Lab Vrdnik.' };
const FB: Package[] = [
  { id: '1', slug: 'pizza-kurs', name_sr: 'Kurs za pizza majstore', name_en: null, description_sr: 'Jednodnevni intenziv napolitanske pice sa majstorima iz picerije Majstor i Margarita.', description_en: null, includes: ['Ceo dan obuke', 'Razvlačenje, filovanje, pečenje', 'Svi sastojci i oprema', 'Vaše pice uz piće pored bazena'], base_price_rsd: 14999, price_per_person_rsd: 14999, min_guests: 1, max_guests: 30, duration_hours: 8, deposit_percentage: 30, is_active: true, sort_order: 1, created_at: '' },
  { id: '2', slug: 'proslave', name_sr: 'Proslave i rođendani', name_en: null, description_sr: 'Pica po izboru i neograničeno piće za svakog gosta, uz korišćenje bazena i prostora.', description_en: null, includes: ['Pica po izboru za svakog gosta', 'Neograničeno piće', 'Korišćenje bazena i prostora', 'Opcija: gosti sami prave pice'], base_price_rsd: 5999, price_per_person_rsd: 5999, min_guests: 5, max_guests: 50, duration_hours: 6, deposit_percentage: 30, is_active: true, sort_order: 2, created_at: '' },
];
export default async function RezervacijaPage() {
  let packages = FB;
  try { const s = await createClient(); const { data } = await s.from('packages').select('*').eq('is_active', true).neq('slug', 'team-building').order('sort_order'); if (data && data.length > 0) packages = data as Package[]; } catch { }
  return (<><Navbar /><div style={{ paddingTop: 64 }}><BookingWizard packages={packages} /></div></>);
}
