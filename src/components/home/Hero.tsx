'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

const SLIDES = [
  { src: '/images/hero-pool.jpg', alt: 'Privatni bazen u sumrak — Majstor i Margarita, Vrdnik', kbScale: 1.08, kbX: -1.5, kbY: 1 },
  { src: '/images/hero-terrace.jpg', alt: 'Terasa sa pogledom na Vojvodinu', kbScale: 1.06, kbX: 1, kbY: -0.5 },
  { src: '/images/hero-garden.jpg', alt: 'Bašta i zelenilo Fruške Gore', kbScale: 1.07, kbX: -0.5, kbY: 0.5 },
  { src: '/images/hero-lavender.jpg', alt: 'Lavanda u sumrak — Vrdnik', kbScale: 1.08, kbX: 0.5, kbY: -1 },
];

export default function Hero({ locale }: { locale: string }) {
  const [current, setCurrent] = useState(0);
  const prefix = locale === 'en' ? '/en' : '';

  const goTo = useCallback((idx: number) => { setCurrent((idx + SLIDES.length) % SLIDES.length); }, []);

  useEffect(() => { const t = setInterval(() => goTo(current + 1), 5000); return () => clearInterval(t); }, [current, goTo]);

  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => { const diff = startX - e.changedTouches[0].clientX; if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1); };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => { window.removeEventListener('touchstart', onStart); window.removeEventListener('touchend', onEnd); };
  }, [current, goTo]);

  return (
    <section className="relative h-svh min-h-[600px] flex items-end pb-20 overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div key={slide.src} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`} aria-hidden={i !== current}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover object-center"
            style={{ transform: i === current ? `scale(${slide.kbScale}) translate(${slide.kbX}%, ${slide.kbY}%)` : 'scale(1)', transition: i === current ? 'transform 8s ease-in-out' : 'none' }}
            loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(28,28,30,0.78) 0%, rgba(28,28,30,0.38) 40%, rgba(28,28,30,0.1) 70%, transparent 100%)' }} />
      <div className="absolute bottom-[88px] left-5 z-10 flex gap-2 items-center">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slika ${i + 1}`}
            className={`h-[2px] rounded-[1px] transition-all duration-300 ${i === current ? 'w-10 bg-[#C9A84C]' : 'w-6 bg-white/35 hover:bg-white/60'}`} />
        ))}
      </div>
      <div className="relative z-10 px-5 md:px-10 w-full max-w-2xl">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#C9A84C] mb-4 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-[#C9A84C]/70" />Vrdnik · Fruška Gora
        </p>
        <h1 className="font-serif font-medium leading-[1.05] text-white mb-5" style={{ fontSize: 'clamp(42px, 10vw, 80px)' }}>
          Privatni raj<br /><em className="italic text-white/85">na Fruškoj Gori</em>
        </h1>
        <p className="text-base font-light text-white/75 leading-relaxed mb-9 max-w-sm">
          Bazen, pizza radionice i nezaboravna atmosfera — sve rezervisano samo za vas.
        </p>
        <Link href={`${prefix}/rezervacija`}
          className="inline-flex items-center gap-2.5 bg-[#5C1A2E] text-white text-sm font-semibold tracking-[0.06em] uppercase px-8 h-[52px] rounded-sm hover:bg-[#7A2440] transition-all hover:-translate-y-px">
          Rezervišite termin <span className="text-lg">→</span>
        </Link>
      </div>
      <div className="absolute bottom-7 right-6 z-10 flex flex-col items-center gap-1.5 text-white/40 text-[9px] tracking-[0.15em] uppercase">
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />Scroll
      </div>
    </section>
  );
}
