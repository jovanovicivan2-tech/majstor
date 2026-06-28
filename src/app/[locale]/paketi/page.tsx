import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PackagesSection from '@/components/home/PackagesSection';
import type { Package } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paketi i Cene',
  description: 'Odaberite savršeni paket za vašu proslavu.',
};

export default async function PaketiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  let packages: Package[] = [];
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('packages').select('*').eq('is_active', true).order('sort_order');
    packages = (data as Package[]) || [];
  } catch { packages = []; }

  return (
    <>
      <Navbar locale={locale} />
      <div className="pt-16">
        <div className="bg-[#1C1C1E] h-48 flex items-end px-5 pb-8">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2">Paketi</p>
            <h1 className="font-serif text-white font-medium" style={{ fontSize: 'clamp(28px, 6vw, 48px)' }}>Pronađite savršeni paket</h1>
          </div>
        </div>
        <PackagesSection packages={packages} locale={locale} />
      </div>
      <Footer locale={locale} />
    </>
  );
}
