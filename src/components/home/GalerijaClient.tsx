'use client';
import { useState, useEffect, useCallback } from 'react';
import type { GalleryImage, GalleryCategory } from '@/types';

const CATS: { key: 'sve' | GalleryCategory; label: string }[] = [
  { key: 'sve', label: 'Sve' },
  { key: 'bazen', label: 'Bazen' },
  { key: 'ambijent', label: 'Ambijent' },
  { key: 'pizzerija', label: 'Pizza' },
  { key: 'eventi', label: 'Eventi' },
];

export default function GalerijaClient({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<'sve' | GalleryCategory>('sve');
  const [lb, setLb] = useState<number | null>(null);
  const filtered = active === 'sve' ? images : images.filter((i) => i.category === active);

  const close = useCallback(() => setLb(null), []);
  const nav = useCallback((dir: number) => setLb((l) => (l === null ? null : (l + dir + filtered.length) % filtered.length)), [filtered.length]);

  useEffect(() => {
    if (lb === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') nav(1);
      if (e.key === 'ArrowLeft') nav(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [lb, close, nav]);

  return (
    <section style={{ background: '#F7F2EA' }} className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Filteri */}
        <div className="flex gap-2.5 overflow-x-auto pb-2 mb-8" style={{ scrollbarWidth: 'none' }}>
          {CATS.map((c) => {
            const on = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => { setActive(c.key); setLb(null); }}
                className="shrink-0 transition-all duration-200"
                style={{
                  padding: '0 20px', height: 40, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em',
                  borderRadius: 999, cursor: 'pointer', whiteSpace: 'nowrap',
                  border: on ? 'none' : '1px solid rgba(138,126,114,0.3)',
                  background: on ? '#5C1A2E' : 'transparent',
                  color: on ? '#fff' : '#8A7E72',
                }}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Mozaik */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setLb(idx)}
              className="group relative overflow-hidden rounded-lg"
              style={{ aspectRatio: '1', background: '#EDE8E0', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt={img.alt_sr || ''} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(28,28,30,0.6), transparent 60%)' }} />
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-16" style={{ color: '#8A7E72' }}>Nema fotografija u ovoj kategoriji.</p>
        )}
      </div>

      {/* Lightbox */}
      {lb !== null && filtered[lb] && (
        <div onClick={close} className="fixed inset-0 z-[80] flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.94)' }}>
          <button onClick={close} aria-label="Zatvori" className="absolute top-4 right-4" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 36, cursor: 'pointer', width: 48, height: 48, lineHeight: 1 }}>×</button>
          <button onClick={(e) => { e.stopPropagation(); nav(-1); }} aria-label="Prethodna" className="absolute left-2 md:left-6" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 44, cursor: 'pointer', width: 48, height: 48, lineHeight: 1 }}>‹</button>
          <div className="px-12" style={{ maxWidth: '92vw', maxHeight: '86vh' }} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={filtered[lb].url} alt={filtered[lb].alt_sr || ''} style={{ maxWidth: '100%', maxHeight: '84vh', objectFit: 'contain', borderRadius: 6 }} />
            {filtered[lb].alt_sr && <p className="font-display text-center" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, fontStyle: 'italic', marginTop: 14 }}>{filtered[lb].alt_sr}</p>}
          </div>
          <button onClick={(e) => { e.stopPropagation(); nav(1); }} aria-label="Sledeća" className="absolute right-2 md:right-6" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 44, cursor: 'pointer', width: 48, height: 48, lineHeight: 1 }}>›</button>
        </div>
      )}
    </section>
  );
}
