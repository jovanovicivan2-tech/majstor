import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GalerijaClient from '@/components/home/GalerijaClient';
import { createClient } from '@/lib/supabase/server';
import type { GalleryImage } from '@/types';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Galerija', description: 'Fotografije privatnog prostora sa bazenom na Fruškoj Gori.' };
const FB: GalleryImage[] = [
  { id: '1', category: 'bazen', url: '/images/hero-pool.jpg', alt_sr: 'Privatni bazen', alt_en: null, is_featured: true, sort_order: 1, created_at: '' },
  { id: '2', category: 'ambijent', url: '/images/hero-terrace.jpg', alt_sr: 'Terasa', alt_en: null, is_featured: true, sort_order: 2, created_at: '' },
  { id: '3', category: 'ambijent', url: '/images/hero-garden.jpg', alt_sr: 'Bašta', alt_en: null, is_featured: false, sort_order: 3, created_at: '' },
  { id: '4', category: 'ambijent', url: '/images/hero-lavender.jpg', alt_sr: 'Lavanda', alt_en: null, is_featured: true, sort_order: 4, created_at: '' },
];
export default async function GalerijaPage() {
  let images = FB;
  try { const s = await createClient(); const { data } = await s.from('gallery').select('*').order('sort_order'); if (data && data.length > 0) images = data as GalleryImage[]; } catch { }
  return (<><Navbar /><div style={{ paddingTop: 64 }}>
    <div style={{ background: '#1C1C1E', height: 192, display: 'flex', alignItems: 'flex-end', padding: '0 20px 32px' }}>
      <div><p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 8 }}>Galerija</p>
      <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(28px, 6vw, 48px)', color: 'white' }}>Pogledajte prostor</h1></div>
    </div>
    <GalerijaClient images={images} />
  </div><Footer /></>);
}