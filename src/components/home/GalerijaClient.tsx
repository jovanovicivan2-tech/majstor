'use client';
import { useState } from 'react';
import type { GalleryImage, GalleryCategory } from '@/types';

const CATS: { key: 'sve' | GalleryCategory; label: string }[] = [
  { key: 'sve', label: 'Sve' }, { key: 'bazen', label: '🏊 Bazen' },
  { key: 'ambijent', label: '🌿 Ambijent' }, { key: 'pizzerija', label: '🍕 Pizza' }, { key: 'eventi', label: '🎉 Eventi' },
];

export default function GalerijaClient({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<'sve' | GalleryCategory>('sve');
  const [lb, setLb] = useState<number | null>(null);
  const filtered = active === 'sve' ? images : images.filter(i => i.category === active);
  const close = () => { setLb(null); document.body.style.overflow = ''; };
  const open = (i: number) => { setLb(i); document.body.style.overflow = 'hidden'; };
  return (
    <div style={{ background: '#F7F2EA', minHeight: '100vh' }}>
      <div style={{ padding: '24px 20px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {CATS.map(c => <button key={c.key} onClick={() => setActive(c.key)} style={{ flexShrink: 0, padding: '0 16px', height: 36, fontSize: 14, fontWeight: 500, borderRadius: 2, border: active === c.key ? 'none' : '1px solid #D5CDC3', background: active === c.key ? '#5C1A2E' : 'white', color: active === c.key ? 'white' : '#8A7E72', cursor: 'pointer', whiteSpace: 'nowrap' }}>{c.label}</button>)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '0 20px 40px' }}>
        {filtered.map((img, idx) => (
          <button key={img.id} onClick={() => open(idx)} style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', borderRadius: 2, background: '#EDE8E0', border: 'none', cursor: 'pointer', padding: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.url} alt={img.alt_sr || ''} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </button>
        ))}
      </div>
      {lb !== null && filtered[lb] && (
        <div onClick={close} style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={close} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 32, cursor: 'pointer', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
          <button onClick={e => { e.stopPropagation(); setLb(l => l !== null ? (l - 1 + filtered.length) % filtered.length : null); }} style={{ position: 'absolute', left: 16, background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 40, cursor: 'pointer', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          <div style={{ maxWidth: '90vw', maxHeight: '85vh' }} onClick={e => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={filtered[lb].url} alt={filtered[lb].alt_sr || ''} style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
          </div>
          <button onClick={e => { e.stopPropagation(); setLb(l => l !== null ? (l + 1) % filtered.length : null); }} style={{ position: 'absolute', right: 64, background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 40, cursor: 'pointer', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
        </div>
      )}
    </div>
  );
}
