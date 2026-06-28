'use client';
import { useEffect, useState } from 'react';

/** Suptilan zlatni indikator napretka skrolovanja na vrhu stranice. */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 2,
        width: `${pct}%`,
        zIndex: 70,
        background: 'linear-gradient(90deg, #C9A84C, #E0C878)',
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }}
    />
  );
}
