'use client';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

export type HeroSlide = { src: string; alt: string; caption?: string; position?: string };

// Fallback — sve fotografije iz galerije (koristi se ako nisu prosleđene spolja)
const DEFAULT_SLIDES: HeroSlide[] = [
  { src: '/images/pool_dusk.jpg', alt: 'Bazen u sumrak na imanju u Vrdniku — Napolitana Lab, Fruška Gora' },
  { src: '/images/pool_wide.jpg', alt: 'Pogled na bazen i prostor za radionice pice — Fruška Gora' },
  { src: '/images/pool_person.jpg', alt: 'Opuštanje u bazenu okruženom lavandom — Vrdnik' },
  { src: '/images/terrace_sunset.jpg', alt: 'Terasa sa panoramskim pogledom na Vojvodinu u sumrak' },
  { src: '/images/garden_view.jpg', alt: 'Uređena bašta sa panoramom Fruškogorske ravnice' },
  { src: '/images/garden2.jpg', alt: 'Mediteranska bašta sa aromatičnim biljem' },
  { src: '/images/lavender.jpg', alt: 'Lavanda u cvatu — mirisi Provence na Fruškoj Gori' },
];

const META = [
  { label: 'Lokacija', value: 'Vrdnik · Fruška Gora' },
  { label: 'Udaljenost', value: '40 min od NS' },
  { label: 'Kapacitet', value: 'do 50 gostiju' },
  { label: 'Ocena', value: '★ 5.0' },
];

export default function Hero({ slides }: { slides?: HeroSlide[] }) {
  const SLIDES = slides && slides.length > 0 ? slides : DEFAULT_SLIDES;
  const [current, setCurrent] = useState(0);
  const goTo = useCallback((idx: number) => setCurrent((idx + SLIDES.length) % SLIDES.length), [SLIDES.length]);

  useEffect(() => {
    const t = setInterval(() => goTo(current + 1), 6500);
    return () => clearInterval(t);
  }, [current, goTo]);

  return (
    <section className="relative overflow-hidden" style={{ height: '100svh', minHeight: 640, background: '#1C1C1E' }}>
      {/* SLAJDOVI */}
      {SLIDES.map((slide, i) => (
        <div key={slide.src} className="absolute inset-0" style={{ opacity: i === current ? 1 : 0, transition: 'opacity 1.4s var(--ease-premium)' }} aria-hidden={i !== current}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            style={{
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: slide.position || 'center',
              transform: i === current ? 'scale(1.12)' : 'scale(1)',
              transition: i === current ? 'transform 9s ease-out' : 'none',
            }}
          />
        </div>
      ))}

      {/* GRADIJENTI — kinematski, čitljivost + dubina */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(28,28,30,0.88) 0%, rgba(28,28,30,0.35) 45%, rgba(28,28,30,0.15) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(28,28,30,0.55) 0%, transparent 55%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.4)' }} />

      {/* SADRŽAJ */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 md:px-10 flex flex-col justify-center">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6 enter-up" style={{ color: '#C9A84C', animationDelay: '0.05s' }}>
            Radionica napolitanske pice
          </p>

          <h1
            className="font-display enter-up"
            style={{ fontWeight: 500, fontSize: 'var(--text-hero)', lineHeight: 0.98, letterSpacing: '-0.02em', color: '#fff', marginBottom: 24, animationDelay: '0.15s' }}
          >
            Umeće prave
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 500, color: '#E0C878' }}>napolitanske</em> pice
          </h1>

          <p className="enter-up" style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, marginBottom: 40, maxWidth: 460, animationDelay: '0.3s' }}>
            Radionice, proslave i team building — uz živu vatru i mir bazena na Fruškoj Gori.
            Vode ih majstori picerije <span style={{ color: '#fff', fontWeight: 400 }}>Majstor i Margarita</span>.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 enter-up" style={{ animationDelay: '0.45s' }}>
            <Link href="/rezervacija" className="btn btn-primary w-full sm:w-auto">
              Rezervišite termin →
            </Link>
            <Link href="/paketi" className="btn btn-ghost w-full sm:w-auto">
              Pogledajte programe
            </Link>
          </div>
        </div>
      </div>

      {/* Natpis po slajdu (lična posveta) */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{ bottom: 104, left: 20, right: 24, textAlign: 'right', opacity: SLIDES[current]?.caption ? 1 : 0, transition: 'opacity 1s var(--ease-premium)' }}
      >
        {SLIDES[current]?.caption && (
          <span className="font-display" style={{ fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(18px, 4vw, 26px)', color: '#E0C878', textShadow: '0 2px 14px rgba(0,0,0,0.55)' }}>
            „{SLIDES[current].caption}”
          </span>
        )}
      </div>

      {/* META TRAKA — premium venue činjenice */}
      <style>{`
        .hero-meta { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid rgba(201,168,76,0.3); }
        .hero-meta__cell { padding: 18px 0 18px 18px; border-left: 1px solid rgba(255,255,255,0.1); }
        .hero-meta__cell:nth-child(2n+1) { border-left: none; padding-left: 0; }
        @media (min-width: 768px) {
          .hero-meta { grid-template-columns: repeat(4, 1fr); }
          .hero-meta__cell:nth-child(2n+1) { border-left: 1px solid rgba(255,255,255,0.1); padding-left: 20px; }
          .hero-meta__cell:nth-child(4n+1) { border-left: none; padding-left: 0; }
        }
      `}</style>
      <div className="absolute z-10 inset-x-0" style={{ bottom: 0 }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="hero-meta">
            {META.map((m) => (
              <div key={m.label} className="hero-meta__cell">
                <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>{m.label}</p>
                <p className="font-display" style={{ fontSize: 18, fontWeight: 500, color: '#fff' }}>{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SLIDE INDIKATORI */}
      <div className="absolute z-20 flex" style={{ top: '50%', transform: 'translateY(-50%)', right: 24, flexDirection: 'column', gap: 10 }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slika ${i + 1}`}
            style={{
              width: 2, border: 'none', cursor: 'pointer', padding: 0, borderRadius: 2,
              height: i === current ? 32 : 16,
              background: i === current ? '#C9A84C' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.4s var(--ease-premium)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
