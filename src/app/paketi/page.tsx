import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PackagesSection from '@/components/home/PackagesSection';
import type { Package } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programi i Cene',
  description: 'Kurs za pizza majstore, proslave i team building uz bazen na Fruškoj Gori. Cene po osobi, online rezervacija.',
};

export default async function PaketiPage() {
  let packages: Package[] = [];
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('packages').select('*').eq('is_active', true).order('sort_order');
    packages = (data as Package[]) || [];
  } catch { packages = []; }
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <div style={{ background: '#1C1C1E', minHeight: '192px', display: 'flex', alignItems: 'flex-end', padding: '0 20px 32px' }}>
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '8px' }}>Programi</p>
            <h1 className="font-serif" style={{ color: 'white', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 500 }}>Izaberite vaš doživljaj</h1>
          </div>
        </div>
        <PackagesSection packages={packages} />
      </div>
      <Footer />
    </>
  );
}
