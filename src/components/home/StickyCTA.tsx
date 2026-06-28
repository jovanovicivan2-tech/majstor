'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StickyCTA({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const prefix = locale === 'en' ? '/en' : '';
  useEffect(() => {
    const hero = document.querySelector('[data-hero]');
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  return (
    <Link href={`${prefix}/rezervacija`}
      className={`fixed bottom-0 left-0 right-0 z-50 h-14 flex items-center justify-center gap-2 bg-[#5C1A2E] text-white text-sm font-semibold tracking-[0.08em] uppercase shadow-[0_-4px_24px_rgba(92,26,46,0.25)] transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`} aria-hidden={!visible} tabIndex={visible ? 0 : -1}>
      🍕 Rezerviši termin →
    </Link>
  );
}
