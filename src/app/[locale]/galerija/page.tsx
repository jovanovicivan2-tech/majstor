import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GalerijaClient from '@/components/home/GalerijaClient';
import { createClient } from '@/lib/supabase/server';
import type { GalleryImage } from '@/types';

export const metadata: Metadata = {
  title: 'Galerija',
  description: 'Pogledajte fotografije privatnog prostora sa bazenom, pizza radionice i ambijenta Majstor i Margarita na Fruškoj Gori.',
};

const FALLBACK: GalleryImage[] = [
  { id: '1', category: 'bazen', url: '/images/hero-pool.jpg', alt_sr: 'Privatni bazen u sumrak', alt_en: 'Private pool at dusk', is_featured: true, sort_order: 1, created_at: '' },
  { id: '2', category: 'ambijent', url: '/images/hero-terrace.jpg', alt_sr: 'Terasa sa pogledom na Vojvodinu', alt_en: 'Terrace with view', is_featured: true, sort_order: 2, created_at: '' },
  { id: '3', category: 'ambijent', url: '/images/hero-garden.jpg', alt_sr: 'Bašta i zelenilo Fruške Gore', alt_en: 'Garden and greenery', is_featured: false, sort_order: 3, created_at: '' },
  { id: '4', category: 'ambijent', url: '/images/hero-lavender.jpg', alt_sr: 'Lavanda u sumrak', alt_en: 'Lavender at dusk', is_featured: true, sort_order: 4, created_at: '' },
];

export default async function GalerijaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  let images: GalleryImage[] = FALLBACK;
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('gallery').select('*').order('sort_order');
    if (data && data.length > 0) images = data as GalleryImage[];
  } catch { /* fallback */ }
  return (
    <>
      <Navbar locale={locale} />
      <div className="pt-16">
        <div className="bg-[#1C1C1E] h-48 flex items-end px-5 pb-8">
          <div><p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2">Galerija</p><h1 className="font-serif text-white font-medium" style={{ fontSize: 'clamp(28px, 6vw, 48px)' }}>Pogledajte prostor</h1></div>
        </div>
        <GalerijaClient images={images} locale={locale} />
      </div>
      <Footer locale={locale} />
    </>
  );
}
