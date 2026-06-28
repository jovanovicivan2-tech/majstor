import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  /** Pozadinska slika (iz /public/images). */
  image: string;
}

/**
 * Premium zaglavlje unutrašnjih stranica — puna slika + kinematski gradijent,
 * eyebrow, krupan serif naslov. Navbar je proziran preko njega.
 */
export default function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#1C1C1E', minHeight: '52vh' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        style={{ objectPosition: 'center' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,28,30,0.9) 0%, rgba(28,28,30,0.45) 55%, rgba(28,28,30,0.55) 100%)' }} />
      <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 160px rgba(0,0,0,0.4)' }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 flex flex-col justify-end" style={{ minHeight: '52vh', paddingTop: 120, paddingBottom: 56 }}>
        <p className="eyebrow" style={{ color: '#C9A84C' }}>{eyebrow}</p>
        <h1 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-2xl)', color: '#fff', lineHeight: 1.04, letterSpacing: '-0.01em' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5" style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, maxWidth: 520 }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
