'use client';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

const SLIDES = [
  { src: '/images/pool_dusk.jpg', alt: 'Bazen u sumrak na imanju u Vrdniku — Napolitana Lab, Fruška Gora' },
  { src: '/images/pool_wide.jpg', alt: 'Pogled na bazen i prostor za radionice pice — Fruška Gora' },
  { src: '/images/pool_person.jpg', alt: 'Opuštanje u bazenu okruženom lavandom — Vrdnik' },
  { src: '/images/terrace_sunset.jpg', alt: 'Terasa sa panoramskim pogledom na Vojvodinu u sumrak' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const goTo = useCallback((idx: number) => setCurrent((idx + SLIDES.length) % SLIDES.length), []);
  useEffect(() => { const t = setInterval(() => goTo(current + 1), 6000); return () => clearInterval(t); }, [current, goTo]);

  return (
    <section style={{ position:'relative', height:'100svh', minHeight:'600px', display:'flex', alignItems:'flex-end', paddingBottom:'80px', overflow:'hidden', background:'#1C1C1E' }}>
      {SLIDES.map((slide, i) => (
        <div key={slide.src} style={{ position:'absolute', inset:0, opacity: i === current ? 1 : 0, transition:'opacity 1.2s ease' }} aria-hidden={i !== current}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={slide.src} alt={slide.alt} loading={i === 0 ? 'eager' : 'lazy'}
            style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center',
              transform: i === current ? 'scale(1.04)' : 'scale(1)',
              transition: i === current ? 'transform 8s ease-in-out' : 'none' }} />
        </div>
      ))}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(28,28,30,0.82) 0%, rgba(28,28,30,0.3) 50%, transparent 100%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'88px', left:'20px', zIndex:10, display:'flex', gap:'8px' }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slika ${i + 1}`}
            style={{ height:'2px', borderRadius:'1px', border:'none', cursor:'pointer', padding:0,
              background: i === current ? '#C9A84C' : 'rgba(255,255,255,0.35)',
              width: i === current ? '40px' : '20px', transition:'all 0.35s ease' }} />
        ))}
      </div>
      <div style={{ position:'relative', zIndex:10, padding:'0 20px', maxWidth:'600px' }}>
        <p style={{ fontSize:'11px', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', color:'#C9A84C', marginBottom:'16px', display:'flex', alignItems:'center', gap:'12px' }}>
          <span style={{ display:'inline-block', width:'32px', height:'1px', background:'rgba(201,168,76,0.7)' }} />
          Napolitana Lab · Vrdnik
        </p>
        <h1 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontWeight:500, fontSize:'clamp(42px, 10.5vw, 80px)', lineHeight:1.0, letterSpacing:'-0.015em', color:'white', marginBottom:'22px' }}>
          Naučite pravu<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,0.85)' }}>napolitansku picu</em>
        </h1>
        <p style={{ fontSize:'16px', fontWeight:300, color:'rgba(255,255,255,0.72)', lineHeight:1.65, marginBottom:'36px', maxWidth:'340px' }}>
          Radionice, proslave i team building uz bazen na Fruškoj Gori — sa majstorima iz picerije Majstor i Margarita.
        </p>
        <Link href="/rezervacija" style={{ display:'inline-flex', alignItems:'center', gap:'10px', background:'#5C1A2E', color:'white', fontSize:'13px', fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', padding:'0 32px', height:'52px', borderRadius:'2px', textDecoration:'none' }}>
          Rezervišite termin →
        </Link>
      </div>
      <div style={{ position:'absolute', bottom:'28px', left:'50%', transform:'translateX(-50%)', zIndex:10, display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', opacity:0.6 }} aria-hidden="true">
        <span style={{ fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.7)' }}>Skrolujte</span>
        <span style={{ width:'1px', height:'32px', background:'linear-gradient(to bottom, rgba(201,168,76,0.8), transparent)' }} />
      </div>
    </section>
  );
}
