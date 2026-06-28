'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.querySelector('[data-hero]');
    if (!hero) return;
    const obs = new IntersectionObserver(([e]) => setVisible(!e.isIntersecting), { threshold: 0 });
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);
  return (
    <Link href="/rezervacija" aria-hidden={!visible} tabIndex={visible ? 0 : -1}
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#5C1A2E', color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 -4px 24px rgba(92,26,46,0.25)', transition: 'transform 0.3s, opacity 0.3s', transform: visible ? 'translateY(0)' : 'translateY(100%)', opacity: visible ? 1 : 0 }}>
      🍕 Rezerviši termin →
    </Link>
  );
}
