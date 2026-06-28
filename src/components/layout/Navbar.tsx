'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/paketi', label: 'Programi' },
  { href: '/galerija', label: 'Galerija' },
  { href: '/team-building', label: 'Team Building' },
  { href: '/o-nama', label: 'O nama' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const dark = scrolled && !open;
  const logoColor = open ? 'white' : (scrolled ? '#5C1A2E' : 'white');
  const lineColor = open ? 'white' : (scrolled ? '#5C1A2E' : 'white');

  return (
    <>
      <style>{`
        .nav-desktop { display: none; }
        .nav-burger { display: flex; }
        @media (min-width: 880px) {
          .nav-desktop { display: flex; }
          .nav-burger { display: none; }
        }
      `}</style>

      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', transition: 'background 0.3s', background: dark ? 'rgba(247,242,234,0.96)' : 'transparent', backdropFilter: dark ? 'blur(8px)' : 'none', boxShadow: dark ? '0 1px 0 rgba(0,0,0,0.06)' : 'none' }}>
        <Link href="/" onClick={() => setOpen(false)} style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 22, fontWeight: 600, color: logoColor, textDecoration: 'none', display: 'flex', alignItems: 'center', minHeight: 44, letterSpacing: '0.01em', zIndex: 61, transition: 'color 0.3s' }}>Napolitana&nbsp;Lab</Link>

        {/* DESKTOP meni */}
        <div className="nav-desktop" style={{ gap: 24, alignItems: 'center' }}>
          {NAV.map(l => <Link key={l.href} href={l.href} style={{ fontSize: 13, fontWeight: 500, color: scrolled ? '#8A7E72' : 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>{l.label}</Link>)}
          <Link href="/rezervacija" style={{ background: '#5C1A2E', color: 'white', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0 20px', height: 40, display: 'flex', alignItems: 'center', borderRadius: 2, textDecoration: 'none' }}>Rezerviši</Link>
        </div>

        {/* MOBILNI hamburger */}
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label={open ? 'Zatvori meni' : 'Otvori meni'} aria-expanded={open}
          style={{ flexDirection: 'column', justifyContent: 'center', gap: 5, width: 44, height: 44, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, zIndex: 61 }}>
          <span style={{ display: 'block', width: 24, height: 2, background: lineColor, borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: lineColor, borderRadius: 2, transition: 'opacity 0.2s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: lineColor, borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* MOBILNI full-screen overlay */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 55, background: '#1C1C1E', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 32px', transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.32s ease', visibility: open ? 'visible' : 'hidden' }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV.map((l, i) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 34, fontWeight: 500, color: 'white', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(12px)', transition: `opacity 0.4s ${0.1 + i * 0.06}s, transform 0.4s ${0.1 + i * 0.06}s` }}>
              {l.label}
            </Link>
          ))}
          <Link href="/rezervacija" onClick={() => setOpen(false)}
            style={{ marginTop: 28, background: '#5C1A2E', color: 'white', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', height: 56, borderRadius: 2, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, opacity: open ? 1 : 0, transition: 'opacity 0.4s 0.36s' }}>
            Rezerviši termin
          </Link>
          <div style={{ marginTop: 32, opacity: open ? 1 : 0, transition: 'opacity 0.4s 0.42s' }}>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>📞 065 387 7777</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>📧 jovanovicivan2@gmail.com</p>
          </div>
        </nav>
      </div>
    </>
  );
}
