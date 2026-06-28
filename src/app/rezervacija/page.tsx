import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/layout/Navbar';
import BookingWizard from '@/components/booking/BookingWizard';
import type { Package } from '@/types';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Rezervacija', description: 'Rezervišite vaš termin u Majstor i Margarita.' };
const FB: Package[] = [
  { id: '1', slug: 'samoposluzianje', name_sr: 'Samoposluživanje', name_en: null, description_sr: 'Prostor je vaš.', description_en: null, includes: ['Prostor', 'Bazen', 'Frižider', 'Parking'], base_price_rsd: 25000, price_per_person_rsd: null, min_guests: 5, max_guests: 50, duration_hours: 8, deposit_percentage: 30, is_active: true, sort_order: 1, created_at: '' },
  { id: '2', slug: 'pizza-experience', name_sr: 'Pizza Experience', name_en: null, description_sr: 'Napravite svoju pistu.', description_en: null, includes: ['Sve iz Samoposluživanje', 'Pizza majstor', 'Sastojci', 'Diploma'], base_price_rsd: 35000, price_per_person_rsd: null, min_guests: 5, max_guests: 50, duration_hours: 8, deposit_percentage: 30, is_active: true, sort_order: 2, created_at: '' },
  { id: '3', slug: 'full-service', name_sr: 'Full Service', name_en: null, description_sr: 'Vi uživate.', description_en: null, includes: ['Sve iz Pizza', 'Konobar', 'Dekoracija', 'Servis'], base_price_rsd: 45000, price_per_person_rsd: null, min_guests: 5, max_guests: 50, duration_hours: 8, deposit_percentage: 30, is_active: true, sort_order: 3, created_at: '' },
];
export default async function RezervacijaPage() {
  let packages = FB;
  try { const s = await createClient(); const { data } = await s.from('packages').select('*').eq('is_active', true).neq('slug', 'corporate').order('sort_order'); if (data && data.length > 0) packages = data as Package[]; } catch { }
  return (<><Navbar /><div style={{ paddingTop: 64 }}><BookingWizard packages={packages} /></div></>);
}