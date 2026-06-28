'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/paketi', label: 'Programi' },
  { href: '/galerija', label: 'Galerija' },
  { href: '/team-building', label: 'Team Building' },
  { href: '/o-nama', label: 'O nama' },
];

const PHONE = '065 387 7777';
const EMAIL = 'jovanovicivan2@gmail.com';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const solid = scrolled && !open;
  const onLight = solid; // tamni tekst na svetloj podlozi

  return (
    <>
      <style>{`
        .nav-desktop { display: none; }
        .nav-burger  { display: flex; }
        @media (min-width: 900px) {
          .nav-desktop { display: flex; }
          .nav-burger  { display: none; }
        }
      `}</style>

      <header
        className="fixed top-0 inset-x-0 z-[60] transition-all duration-500"
        style={{
          background: solid ? 'rgba(247,242,234,0.92)' : 'transparent',
          backdropFilter: solid ? 'blur(12px)' : 'none',
          borderBottom: solid ? '1px solid rgba(138,126,114,0.18)' : '1px solid transparent',
        }}
      >
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 transition-all duration-500"
          style={{ height: solid ? 64 : 80 }}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-display relative z-[61] inline-flex items-center transition-colors duration-300"
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: '0.01em',
              color: open ? '#fff' : onLight ? '#5C1A2E' : '#fff',
            }}
          >
            Napolitana&nbsp;<span style={{ color: '#C9A84C' }}>Lab</span>
          </Link>

          {/* Desktop meni */}
          <div className="nav-desktop items-center" style={{ gap: 36 }}>
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-underline transition-colors duration-300"
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  color: onLight ? '#5C1A2E' : 'rgba(255,255,255,0.85)',
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/rezervacija" className="btn btn-primary" style={{ height: 44, padding: '0 24px', fontSize: 11 }}>
              Rezerviši
            </Link>
          </div>

          {/* Mobilni hamburger */}
          <button
            className="nav-burger relative z-[61] flex-col items-center justify-center"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Zatvori meni' : 'Otvori meni'}
            aria-expanded={open}
            style={{ gap: 6, width: 44, height: 44, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block', width: 26, height: 2, borderRadius: 2,
                  background: open ? '#fff' : onLight ? '#5C1A2E' : '#fff',
                  transition: 'transform 0.32s var(--ease-premium), opacity 0.2s',
                  transform: open
                    ? i === 0 ? 'translateY(8px) rotate(45deg)' : i === 2 ? 'translateY(-8px) rotate(-45deg)' : 'none'
                    : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobilni full-screen overlay */}
      <div
        className="fixed inset-0 z-[55] flex flex-col justify-center px-8 transition-transform duration-300"
        style={{
          background: 'linear-gradient(160deg, #43101F 0%, #1C1C1E 100%)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          visibility: open ? 'visible' : 'hidden',
        }}
      >
        {/* Suptilna tekstura */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage: 'radial-gradient(circle, #F7F2EA 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <span className="eyebrow relative mb-8" style={{ color: '#C9A84C' }}>Meni</span>
        <nav className="relative flex flex-col">
          {NAV.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display border-b"
              style={{
                fontSize: 36, fontWeight: 500, color: '#fff', textDecoration: 'none',
                padding: '14px 0', borderColor: 'rgba(255,255,255,0.1)',
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(14px)',
                transition: `opacity 0.5s ${0.12 + i * 0.07}s var(--ease-premium), transform 0.5s ${0.12 + i * 0.07}s var(--ease-premium)`,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/rezervacija"
            onClick={() => setOpen(false)}
            className="btn btn-primary"
            style={{
              marginTop: 32, width: '100%',
              opacity: open ? 1 : 0, transition: 'opacity 0.5s 0.4s',
            }}
          >
            Rezerviši termin →
          </Link>

          <div className="mt-10 flex flex-col gap-3" style={{ opacity: open ? 1 : 0, transition: 'opacity 0.5s 0.46s' }}>
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
              <PhoneIcon /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
              <MailIcon /> {EMAIL}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}
