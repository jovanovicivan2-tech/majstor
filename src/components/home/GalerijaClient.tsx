'use client';
import { useState } from 'react';
import type { GalleryImage, GalleryCategory } from '@/types';

const CATEGORIES: { key: 'sve' | GalleryCategory; label: string }[] = [
  { key: 'sve', label: 'Sve' }, { key: 'bazen', label: '🏊 Bazen' },
  { key: 'ambijent', label: '🌿 Ambijent' }, { key: 'pizzerija', label: '🍕 Pizza' },
  { key: 'eventi', label: '🎉 Eventi' },
];

export default function GalerijaClient({ images, locale }: { images: GalleryImage[]; locale: string }) {
  const [active, setActive] = useState<'sve' | GalleryCategory>('sve');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === 'sve' ? images : images.filter(img => img.category === active);

  const openLightbox = (idx: number) => { setLightbox(idx); document.body.style.overflow = 'hidden'; };
  const closeLightbox = () => { setLightbox(null); document.body.style.overflow = ''; };
  const prev = () => setLightbox(l => l !== null ? (l - 1 + filtered.length) % filtered.length : null);
  const next = () => setLightbox(l => l !== null ? (l + 1) % filtered.length : null);

  return (
    <div className="bg-[#F7F2EA] min-h-screen">
      <div className="px-5 py-6 flex gap-2 overflow-x-auto [-webkit-overflow-scrolling:touch]">
        {CATEGORIES.map((cat) => (
          <button key={cat.key} onClick={() => setActive(cat.key)}
            className={`flex-none px-4 h-9 text-sm font-medium rounded-sm border transition-colors whitespace-nowrap ${active === cat.key ? 'bg-[#5C1A2E] border-[#5C1A2E] text-white' : 'border-[#D5CDC3] text-[#8A7E72] hover:border-[#5C1A2E] hover:text-[#5C1A2E] bg-white'}`}>
            {cat.label}
          </button>
        ))}
      </div>
      <div className="px-5 pb-10 grid grid-cols-2 md:grid-cols-3 gap-2">
        {filtered.map((img, idx) => (
          <button key={img.id} onClick={() => openLightbox(idx)} className="relative aspect-square overflow-hidden rounded-sm bg-[#EDE8E0] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.url} alt={locale === 'en' ? (img.alt_en || img.alt_sr || '') : (img.alt_sr || '')} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"><span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span></div>
          </button>
        ))}
      </div>
      {filtered.length === 0 && <div className="text-center py-20 text-[#8A7E72]"><p className="text-4xl mb-3">📷</p><p>Fotografije uskoro...</p></div>}
      {lightbox !== null && filtered[lightbox] && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl w-12 h-12 flex items-center justify-center" onClick={closeLightbox} aria-label="Zatvori">×</button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white/60 hover:text-white text-3xl w-12 h-12 flex items-center justify-center" aria-label="Prethodna">‹</button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-16 text-white/60 hover:text-white text-3xl w-12 h-12 flex items-center justify-center" aria-label="Sledeća">›</button>
          <div className="max-w-4xl max-h-[85vh] w-full mx-8" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={filtered[lightbox].url} alt={locale === 'en' ? (filtered[lightbox].alt_en || '') : (filtered[lightbox].alt_sr || '')} className="w-full h-full object-contain max-h-[80vh]" />
            {filtered[lightbox].alt_sr && <p className="text-center text-white/50 text-sm mt-3">{locale === 'en' ? filtered[lightbox].alt_en : filtered[lightbox].alt_sr}</p>}
          </div>
          <div className="absolute bottom-4 text-white/30 text-sm">{lightbox + 1} / {filtered.length}</div>
        </div>
      )}
    </div>
  );
}
