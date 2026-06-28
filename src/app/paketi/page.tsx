import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PackagesSection from '@/components/home/PackagesSection';
import type { Package } from '@/types';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Paketi i Cene', description: 'Odaberite savršeni paket za vašu proslavu.' };
export default async function PaketiPage() {
  let packages: Package[] = [];
  try { const s = await createClient(); const { data } = await s.from('packages').select('*').eq('is_active', true).order('sort_order'); packages = (data as Package[]) || []; } catch { }
  return (<><Navbar /><div style={{ paddingTop: 64 }}>
    <div style={{ background: '#1C1C1E', minHeight: 192, display: 'flex', alignItems: 'flex-end', padding: '0 20px 32px' }}>
      <div><p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 8 }}>Paketi</p>
      <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(28px, 6vw, 48px)', color: 'white' }}>Pronađite savršeni paket</h1></div>
    </div>
    <PackagesSection packages={packages} />
  </div><Footer /></>);
}