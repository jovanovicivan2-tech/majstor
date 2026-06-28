'use client';
import { useState } from 'react';
import Link from 'next/link';

const PHOTOS = [
  { src: '/images/pool_dusk.jpg', alt: 'Privatni bazen u sumrak', wide: true },
  { src: '/images/lavender.jpg', alt: 'Lavanda u cvatu — Fruška Gora', wide: false },
  { src: '/images/terrace_sunset.jpg', alt: 'Terasa sa panoramom', wide: false },
  { src: '/images/pool_person.jpg', alt: 'Opuštanje u bazenu', wide: false },
  { src: '/images/interior_lavender.jpg', alt: 'Enterijer sa lavandom', wide: false },
  { src: '/images/garden_view.jpg', alt: 'Uređena bašta', wide: false },
];

export default function GalerijaSection() {
  const [lb, setLb] = useState<number | null>(null);

  return (
    <section style={{ padding: '64px 0', background: '#F7F2EA' }}>
      <div style={{ padding: '0 20px', marginBottom: 28 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>
          Naš prostor
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(28px, 7vw, 40px)', color: '#1C1C1E', lineHeight: 1.15 }}>
          Galerija
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, padding: '0 20px', marginBottom: 20 }}>
        {PHOTOS.map((p, i) => (
          <button
            key={i}
            onClick={() => setLb(i)}
            style={{
              position: 'relative',
              aspectRatio: i === 0 ? '16/10' : '1',
              gridColumn: i === 0 ? '1 / -1' : undefined,
              overflow: 'hidden',
              borderRadius: 2,
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              background: '#EDE8E0',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.4s ease', display: 'block',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </button>
        ))}
      </div>

      <div style={{ padding: '0 20px' }}>
        <Link
          href="/galerija"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1.5px solid rgba(92,26,46,0.4)', color: '#5C1A2E',
            fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '0 20px', height: 44, borderRadius: 2, textDecoration: 'none',
          }}
        >
          Pogledaj sve fotografije →
        </Link>
      </div>

      {lb !== null && (
        <div
          onClick={() => setLb(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <button onClick={() => setLb(null)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 32, cursor: 'pointer', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
          <button onClick={e => { e.stopPropagation(); setLb(l => l !== null ? (l - 1 + PHOTOS.length) % PHOTOS.length : null); }} style={{ position: 'absolute', left: 16, background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 40, cursor: 'pointer', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          <div style={{ maxWidth: '90vw', maxHeight: '85vh' }} onClick={e => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTOS[lb].src} alt={PHOTOS[lb].alt} style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: 4 }} />
          </div>
          <button onClick={e => { e.stopPropagation(); setLb(l => l !== null ? (l + 1) % PHOTOS.length : null); }} style={{ position: 'absolute', right: 64, background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 40, cursor: 'pointer', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
        </div>
      )}
    </section>
  );
}
