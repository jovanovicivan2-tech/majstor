'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/paketi', label: 'Paketi' }, { href: '/galerija', label: 'Galerija' },
  { href: '/team-building', label: 'Team Building' }, { href: '/o-nama', label: 'O nama' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', transition: 'background 0.3s', background: scrolled ? 'rgba(247,242,234,0.96)' : 'transparent', backdropFilter: scrolled ? 'blur(8px)' : 'none', boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none' }}>
        <Link href="/" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 22, fontWeight: 600, color: scrolled ? '#5C1A2E' : 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', minHeight: 44 }}>M&amp;M</Link>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {NAV.map(l => <Link key={l.href} href={l.href} style={{ fontSize: 13, fontWeight: 500, color: scrolled ? '#8A7E72' : 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>{l.label}</Link>)}
        </div>
        <Link href="/rezervacija" style={{ background: '#5C1A2E', color: 'white', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0 20px', height: 40, display: 'flex', alignItems: 'center', borderRadius: 2, textDecoration: 'none' }}>Rezerviši</Link>
      </nav>
    </>
  );
}
