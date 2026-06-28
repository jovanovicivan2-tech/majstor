import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/layout/PageHero';
import GalerijaClient from '@/components/home/GalerijaClient';
import { createClient } from '@/lib/supabase/server';
import type { GalleryImage } from '@/types';

export const metadata: Metadata = {
  title: 'Galerija | Majstor i Margarita — Privatni venue Vrdnik',
  description: 'Pogledajte fotografije privatnog prostora sa bazenom, pizza radionice i ambijenta na Fruškoj Gori.',
};

const FALLBACK: GalleryImage[] = [
  { id: '1', category: 'bazen', url: '/images/pool_dusk.jpg', alt_sr: 'Privatni bazen u sumrak — Majstor i Margarita', alt_en: 'Private pool at dusk', is_featured: true, sort_order: 1, created_at: '' },
  { id: '2', category: 'bazen', url: '/images/pool_wide.jpg', alt_sr: 'Pogled na bazen i modernu vilu na Fruškoj Gori', alt_en: 'Pool and modern villa', is_featured: true, sort_order: 2, created_at: '' },
  { id: '3', category: 'bazen', url: '/images/pool_person.jpg', alt_sr: 'Opuštanje u kristalno čistom bazenu', alt_en: 'Relaxing in the pool', is_featured: true, sort_order: 3, created_at: '' },
  { id: '4', category: 'ambijent', url: '/images/terrace_sunset.jpg', alt_sr: 'Terasa sa panoramskim pogledom na Vojvodinu', alt_en: 'Terrace with panoramic view', is_featured: true, sort_order: 4, created_at: '' },
  { id: '5', category: 'ambijent', url: '/images/garden_view.jpg', alt_sr: 'Uređena bašta sa terasom i panoramom Fruškogorske ravnice', alt_en: 'Garden with terrace', is_featured: false, sort_order: 5, created_at: '' },
  { id: '6', category: 'ambijent', url: '/images/garden2.jpg', alt_sr: 'Mediteranska bašta sa aromatičnim biljem i šljunkom', alt_en: 'Mediterranean garden', is_featured: false, sort_order: 6, created_at: '' },
  { id: '7', category: 'ambijent', url: '/images/lavender.jpg', alt_sr: 'Lavanda u cvatu — mirisi Provence na Fruškoj Gori', alt_en: 'Lavender in bloom', is_featured: true, sort_order: 7, created_at: '' },
  { id: '8', category: 'ambijent', url: '/images/interior_lavender.jpg', alt_sr: 'Enterijer sa lavandom i pogledom na bazen kroz staklene zidove', alt_en: 'Interior with lavender', is_featured: false, sort_order: 8, created_at: '' },
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
      <PageHero
        eyebrow="Galerija"
        title={<>Pogledajte prostor</>}
        subtitle="Bazen, ambijent i atmosfera imanja na Fruškoj Gori — uživo je još lepše."
        image="/images/pool_dusk.jpg"
      />
      <GalerijaClient images={images} />
      <Footer />
    </>
  );
}
