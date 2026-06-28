import Link from 'next/link';
import type { Package } from '@/types';

function fmt(n: number) { return new Intl.NumberFormat('sr-RS').format(n); }

function Card({ pkg, featured }: { pkg: Package; featured?: boolean }) {
  const isTeam = pkg.slug === 'team-building';
  const perPerson = pkg.price_per_person_rsd && pkg.price_per_person_rsd > 0;
  return (
    <div
      className="card-hover group relative flex flex-col snap-start shrink-0 w-[calc(100vw-72px)] max-w-[340px] md:w-auto md:max-w-none"
      style={{
        borderRadius: 6,
        padding: '34px 30px',
        background: '#fff',
        border: featured ? '1.5px solid rgba(92,26,46,0.5)' : '1px solid rgba(138,126,114,0.16)',
        boxShadow: featured ? 'var(--shadow-lift)' : 'var(--shadow-soft)',
        overflow: 'hidden',
      }}
    >
      {featured && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #C9A84C, #E0C878, #C9A84C)' }} />}

      <span
        className="inline-block self-start"
        style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
          padding: '5px 12px', borderRadius: 2, marginBottom: 20,
          background: featured ? '#5C1A2E' : 'rgba(92,26,46,0.07)',
          color: featured ? '#fff' : '#5C1A2E',
        }}
      >
        {featured ? '★ Najpopularnije' : 'Program'}
      </span>

      <h3 className="font-display" style={{ fontSize: 28, fontWeight: 500, color: '#1C1C1E', marginBottom: 10, lineHeight: 1.1 }}>{pkg.name_sr}</h3>
      <p style={{ fontSize: 14, color: '#8A7E72', lineHeight: 1.55, marginBottom: 24 }}>{pkg.description_sr}</p>

      <ul className="flex flex-col" style={{ gap: 9, marginBottom: 26, listStyle: 'none', padding: 0 }}>
        {(pkg.includes as string[]).slice(0, 5).map((item, i) => (
          <li key={i} className="flex gap-3" style={{ fontSize: 13.5, color: '#2A2A2D', lineHeight: 1.45 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto" style={{ paddingTop: 20, borderTop: '1px solid rgba(138,126,114,0.14)', marginBottom: 22 }}>
        {isTeam ? (
          <span style={{ fontSize: 16, color: '#8A7E72', fontStyle: 'italic' }} className="font-display">Cena po dogovoru</span>
        ) : (
          <>
            <span style={{ fontSize: 12, color: '#8A7E72' }}>od </span>
            <span className="font-display" style={{ fontSize: 32, fontWeight: 600, color: '#5C1A2E' }}>{fmt(pkg.base_price_rsd)}</span>
            <span style={{ fontSize: 14, color: '#8A7E72' }}> RSD{perPerson ? ' / osoba' : ''}</span>
          </>
        )}
      </div>

      <Link
        href={isTeam ? '/team-building' : `/rezervacija?paket=${pkg.slug}`}
        className="btn"
        style={{
          width: '100%', height: 50,
          background: isTeam ? 'transparent' : '#5C1A2E',
          color: isTeam ? '#5C1A2E' : '#fff',
          border: isTeam ? '1.5px solid #5C1A2E' : 'none',
          boxShadow: isTeam ? 'none' : 'var(--shadow-wine)',
        }}
      >
        {isTeam ? 'Pošalji upit' : 'Rezerviši'} →
      </Link>
    </div>
  );
}

export default function PackagesSection({ packages }: { packages: Package[] }) {
  return (
    <section className="py-20 md:py-32 max-w-7xl mx-auto px-5 md:px-10">
      <div className="md:text-center md:max-w-2xl md:mx-auto mb-10 md:mb-16">
        <p className="eyebrow md:eyebrow--center md:justify-center">Programi</p>
        <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-2xl)', color: '#1C1C1E', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
          Izaberite vaš doživljaj pice
        </h2>
        <p className="mt-5 hidden md:block" style={{ fontSize: 17, color: '#8A7E72', lineHeight: 1.6 }}>
          Transparentne cene, bez skrivenih troškova. Svaki program se može prilagoditi povodu.
        </p>
      </div>

      {/* Mobilni: horizontalni scroll · Desktop: grid */}
      <div className="flex md:grid md:grid-cols-3 md:items-stretch gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 pb-4 md:pb-0">
        {packages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} featured={pkg.slug === 'pizza-kurs'} />
        ))}
      </div>
    </section>
  );
}
