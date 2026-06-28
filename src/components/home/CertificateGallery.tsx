'use client';
import { useState, useEffect, useCallback } from 'react';

const CERTS = [
  { src: '/images/sertifikat-2025.jpg', caption: '50 Top Pizza Europa 2025 · 34. mesto' },
  { src: '/images/sertifikat-2024.jpg', caption: '50 Top Pizza Europa 2024 · 37. mesto' },
  { src: '/images/sertifikat-2022-2023.jpg', caption: '50 Top Pizza Europa 2022 & 2023 · 35. i 33. mesto' },
  { src: '/images/sertifikat-2020-2021.jpg', caption: '50 Top Pizza Europa 2020 & 2021 · 45. i 43. mesto' },
];

export default function CertificateGallery() {
  const [lb, setLb] = useState<number | null>(null);
  const close = useCallback(() => setLb(null), []);
  const nav = useCallback((d: number) => setLb((l) => (l === null ? null : (l + d + CERTS.length) % CERTS.length)), []);

  useEffect(() => {
    if (lb === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') nav(1);
      if (e.key === 'ArrowLeft') nav(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [lb, close, nav]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {CERTS.map((c, i) => (
          <button
            key={c.src}
            onClick={() => setLb(i)}
            className="group relative overflow-hidden"
            style={{ background: '#fff', borderRadius: 8, padding: 10, border: '1px solid rgba(138,126,114,0.18)', boxShadow: 'var(--shadow-soft)', cursor: 'pointer' }}
            aria-label={c.caption}
          >
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1', borderRadius: 4 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.caption} loading="lazy" className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]" style={{ objectFit: 'contain' }} />
            </div>
          </button>
        ))}
      </div>

      {lb !== null && (
        <div onClick={close} className="fixed inset-0 z-[80] flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.94)' }}>
          <button onClick={close} aria-label="Zatvori" className="absolute top-4 right-4" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 36, cursor: 'pointer', width: 48, height: 48, lineHeight: 1 }}>×</button>
          <button onClick={(e) => { e.stopPropagation(); nav(-1); }} aria-label="Prethodni" className="absolute left-2 md:left-6" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 44, cursor: 'pointer', width: 48, height: 48, lineHeight: 1 }}>‹</button>
          <div className="px-12" style={{ maxWidth: '92vw', maxHeight: '86vh' }} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={CERTS[lb].src} alt={CERTS[lb].caption} style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 8, background: '#fff' }} />
            <p className="font-display text-center" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, fontStyle: 'italic', marginTop: 14 }}>{CERTS[lb].caption}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); nav(1); }} aria-label="Sledeći" className="absolute right-2 md:right-6" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 44, cursor: 'pointer', width: 48, height: 48, lineHeight: 1 }}>›</button>
        </div>
      )}
    </>
  );
}
