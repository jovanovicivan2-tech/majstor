'use client';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

const SLIDES = [
  { src: '/images/hero-pool.jpg', alt: 'Privatni bazen — Majstor i Margarita, Vrdnik' },
  { src: '/images/hero-terrace.jpg', alt: 'Terasa sa pogledom na Vojvodinu' },
  { src: '/images/hero-garden.jpg', alt: 'Bašta Fruške Gore' },
  { src: '/images/hero-lavender.jpg', alt: 'Lavanda u sumrak' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const goTo = useCallback((idx: number) => setCurrent((idx + SLIDES.length) % SLIDES.length), []);
  useEffect(() => { const t = setInterval(() => goTo(current + 1), 5000); return () => clearInterval(t); }, [current, goTo]);
  return (
    <section style={{ position: 'relative', height: '100svh', minHeight: 600, display: 'flex', alignItems: 'flex-end', paddingBottom: 80, overflow: 'hidden' }}>
      {SLIDES.map((s, i) => (
        <div key={s.src} style={{ position: 'absolute', inset: 0, opacity: i === current ? 1 : 0, transition: 'opacity 1s' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src} alt={s.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,28,30,0.78) 0%, rgba(28,28,30,0.35) 40%, transparent 100%)' }} />
      <div style={{ position: 'absolute', bottom: 88, left: 20, zIndex: 10, display: 'flex', gap: 8 }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slika ${i + 1}`}
            style={{ height: 2, borderRadius: 1, border: 'none', cursor: 'pointer', background: i === current ? '#C9A84C' : 'rgba(255,255,255,0.35)', width: i === current ? 40 : 24, transition: 'all 0.3s' }} />
        ))}
      </div>
      <div style={{ position: 'relative', zIndex: 10, padding: '0 20px', maxWidth: 640 }}>
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'inline-block', width: 32, height: 1, background: 'rgba(201,168,76,0.7)' }} />Vrdnik · Fruška Gora
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(42px, 10vw, 80px)', lineHeight: 1.05, color: 'white', marginBottom: 20 }}>
          Privatni raj<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.85)' }}>na Fruškoj Gori</em>
        </h1>
        <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: 36, maxWidth: 340 }}>
          Bazen, pizza radionice i nezaboravna atmosfera — sve rezervisano samo za vas.
        </p>
        <Link href="/rezervacija" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#5C1A2E', color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0 32px', height: 52, borderRadius: 2, textDecoration: 'none' }}>
          Rezervišite termin →
        </Link>
      </div>
    </section>
  );
}
