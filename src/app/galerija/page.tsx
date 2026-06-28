import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GalerijaClient from '@/components/home/GalerijaClient';
import { createClient } from '@/lib/supabase/server';
import type { GalleryImage } from '@/types';

export const metadata: Metadata = {
  title: 'Galerija',
  description: 'Pogledajte fotografije privatnog prostora sa bazenom, pizza radionice i ambijenta na Fruškoj Gori.',
};

const FALLBACK: GalleryImage[] = [
  { id: '1', category: 'bazen', url: '/images/hero-pool.jpg', alt_sr: 'Privatni bazen u sumrak', alt_en: null, is_featured: true, sort_order: 1, created_at: '' },
  { id: '2', category: 'ambijent', url: '/images/hero-terrace.jpg', alt_sr: 'Terasa sa pogledom na Vojvodinu', alt_en: null, is_featured: true, sort_order: 2, created_at: '' },
  { id: '3', category: 'ambijent', url: '/images/hero-garden.jpg', alt_sr: 'Bašta Fruške Gore', alt_en: null, is_featured: false, sort_order: 3, created_at: '' },
  { id: '4', category: 'ambijent', url: '/images/hero-lavender.jpg', alt_sr: 'Lavanda u sumrak', alt_en: null, is_featured: true, sort_order: 4, created_at: '' },
];

export default async function GalerijaPage() {
  let images: GalleryImage[] = FALLBACK;
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('gallery').select('*').order('sort_order');
    if (data && data.length > 0) images = data as GalleryImage[];
  } catch { /* fallback */ }
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <div style={{ background: '#1C1C1E', height: '192px', display: 'flex', alignItems: 'flex-end', padding: '0 20px 32px' }}>
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '8px' }}>Galerija</p>
            <h1 className="font-serif" style={{ color: 'white', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 500 }}>Pogledajte prostor</h1>
          </div>
        </div>
        <GalerijaClient images={images} />
      </div>
      <Footer />
    </>
  );
}
