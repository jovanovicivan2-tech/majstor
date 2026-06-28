import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/layout/PageHero';
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
      <PageHero
        eyebrow="Programi"
        title={<>Izaberite vaš doživljaj</>}
        subtitle="Radionica pice, proslave i team building — transparentne cene, bez skrivenih troškova."
        image="/images/pool_wide.jpg"
      />
      <PackagesSection packages={packages} />
      <Footer />
    </>
  );
}
