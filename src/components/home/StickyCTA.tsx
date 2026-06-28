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
    <Link href="/rezervacija" aria-hidden={!visible} tabIndex={visible ? 0 : -1} className="md:hidden"
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50, height: 58, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'linear-gradient(90deg, #5C1A2E, #43101F)', color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderTop: '1px solid rgba(201,168,76,0.4)', boxShadow: '0 -6px 30px rgba(92,26,46,0.35)', transition: 'transform 0.35s var(--ease-premium), opacity 0.35s', transform: visible ? 'translateY(0)' : 'translateY(100%)', opacity: visible ? 1 : 0 }}>
      Rezerviši termin →
    </Link>
  );
}
