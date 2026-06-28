'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const PHOTOS = [
  { src: '/images/pool_dusk.jpg', alt: 'Privatni bazen u sumrak', cls: 'col-span-2 row-span-2', cat: 'Bazen' },
  { src: '/images/lavender.jpg', alt: 'Lavanda u cvatu — Fruška Gora', cls: '', cat: 'Ambijent' },
  { src: '/images/terrace_sunset.jpg', alt: 'Terasa sa panoramom', cls: '', cat: 'Ambijent' },
  { src: '/images/pool_person.jpg', alt: 'Opuštanje u bazenu', cls: '', cat: 'Bazen' },
  { src: '/images/interior_lavender.jpg', alt: 'Enterijer sa lavandom', cls: '', cat: 'Enterijer' },
  { src: '/images/garden_view.jpg', alt: 'Uređena bašta', cls: 'col-span-2', cat: 'Ambijent' },
  { src: '/images/pool_wide.jpg', alt: 'Pogled na bazen i prostor', cls: '', cat: 'Bazen' },
  { src: '/images/garden2.jpg', alt: 'Mediteranska bašta', cls: '', cat: 'Ambijent' },
];

export default function GalerijaSection() {
  const [lb, setLb] = useState<number | null>(null);

  const close = useCallback(() => setLb(null), []);
  const nav = useCallback((dir: number) => setLb((l) => (l === null ? null : (l + dir + PHOTOS.length) % PHOTOS.length)), []);

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
    <section style={{ background: '#F7F2EA' }} className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="md:text-center md:max-w-2xl md:mx-auto mb-10 md:mb-14">
          <p className="eyebrow md:eyebrow--center md:justify-center">Naš prostor</p>
          <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-2xl)', color: '#1C1C1E', lineHeight: 1.05 }}>
            Atmosfera koja priča sama
          </h2>
        </div>

        {/* Mozaik */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {PHOTOS.map((p, i) => (
            <button
              key={i}
              onClick={() => setLb(i)}
              className={`group relative overflow-hidden rounded-lg ${p.cls}`}
              style={{ border: 'none', cursor: 'pointer', padding: 0, background: '#EDE8E0' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(28,28,30,0.7), transparent 60%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span style={{ display: 'block', color: '#C9A84C', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 2 }}>{p.cat}</span>
                <span className="font-display" style={{ display: 'block', color: '#fff', fontSize: 17, lineHeight: 1.2 }}>{p.alt}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 md:text-center">
          <Link href="/galerija" className="btn btn-outline">
            Pogledajte celu galeriju →
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lb !== null && (
        <div onClick={close} className="fixed inset-0 z-[80] flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.94)' }}>
          <button onClick={close} aria-label="Zatvori" className="absolute top-4 right-4" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 36, cursor: 'pointer', width: 48, height: 48, lineHeight: 1 }}>×</button>
          <button onClick={(e) => { e.stopPropagation(); nav(-1); }} aria-label="Prethodna" className="absolute left-2 md:left-6" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 44, cursor: 'pointer', width: 48, height: 48, lineHeight: 1 }}>‹</button>
          <div className="px-12" style={{ maxWidth: '92vw', maxHeight: '86vh' }} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTOS[lb].src} alt={PHOTOS[lb].alt} style={{ maxWidth: '100%', maxHeight: '86vh', objectFit: 'contain', borderRadius: 6 }} />
            <p className="font-display text-center" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, fontStyle: 'italic', marginTop: 14 }}>{PHOTOS[lb].alt}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); nav(1); }} aria-label="Sledeća" className="absolute right-2 md:right-6" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 44, cursor: 'pointer', width: 48, height: 48, lineHeight: 1 }}>›</button>
        </div>
      )}
    </section>
  );
}
