import Link from 'next/link';
import type { Package } from '@/types';

function fmt(n: number) { return new Intl.NumberFormat('sr-RS').format(n); }

function Card({ pkg, featured }: { pkg: Package; featured?: boolean }) {
  const isTeam = pkg.slug === 'team-building';
  const perPerson = pkg.price_per_person_rsd && pkg.price_per_person_rsd > 0;
  return (
    <div className="card-hover" style={{ flexShrink: 0, width: 'calc(100vw - 64px)', maxWidth: 300, scrollSnapAlign: 'start', borderRadius: 4, padding: 30, background: 'white', border: featured ? '1.5px solid #5C1A2E' : '1px solid rgba(138,126,114,0.16)', boxShadow: featured ? '0 4px 12px rgba(28,28,30,0.06), 0 20px 56px rgba(92,26,46,0.10)' : '0 2px 8px rgba(28,28,30,0.04), 0 8px 24px rgba(28,28,30,0.05)', position: 'relative', overflow: 'hidden' }}>
      {featured && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #C9A84C, #E0C878, #C9A84C)' }} />}
      <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '5px 11px', borderRadius: 2, marginBottom: 18, background: featured ? '#5C1A2E' : 'rgba(92,26,46,0.07)', color: featured ? 'white' : '#5C1A2E' }}>
        {featured ? '★ Najpopularnije' : pkg.name_sr}
      </span>
      <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 26, fontWeight: 500, color: '#1C1C1E', marginBottom: 10, lineHeight: 1.1 }}>{pkg.name_sr}</h3>
      <p style={{ fontSize: 14, color: '#8A7E72', lineHeight: 1.55, marginBottom: 22 }}>{pkg.description_sr}</p>
      <ul style={{ marginBottom: 26, paddingLeft: 0, listStyle: 'none' }}>
        {(pkg.includes as string[]).slice(0, 5).map((item, i) => (
          <li key={i} style={{ fontSize: 13, color: '#1C1C1E', display: 'flex', gap: 10, marginBottom: 7, lineHeight: 1.4 }}>
            <span style={{ color: '#C9A84C', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{item}
          </li>
        ))}
      </ul>
      <div style={{ marginBottom: 22, paddingTop: 18, borderTop: '1px solid rgba(138,126,114,0.14)' }}>
        {isTeam ? <span style={{ fontSize: 15, color: '#8A7E72', fontStyle: 'italic' }}>Cena po dogovoru</span> : (
          <><span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 30, fontWeight: 600, color: '#5C1A2E' }}>{fmt(pkg.base_price_rsd)}</span>
          <span style={{ fontSize: 14, color: '#8A7E72' }}> RSD{perPerson ? ' / osoba' : ''}</span></>
        )}
      </div>
      <Link href={isTeam ? '/team-building' : `/rezervacija?paket=${pkg.slug}`}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 3, textDecoration: 'none', background: isTeam ? 'transparent' : '#5C1A2E', color: isTeam ? '#5C1A2E' : 'white', border: isTeam ? '1.5px solid #5C1A2E' : 'none', transition: 'filter 0.2s' }}>
        {isTeam ? 'Pošalji upit' : 'Rezerviši'}
      </Link>
    </div>
  );
}

export default function PackagesSection({ packages }: { packages: Package[] }) {
  return (
    <section style={{ paddingTop: 72, paddingBottom: 24 }}>
      <div style={{ padding: '0 20px', marginBottom: 36 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>Programi</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(30px, 7.5vw, 44px)', color: '#1C1C1E', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
          Izaberite vaš<br />doživljaj pice
        </h2>
      </div>
      <div style={{ display: 'flex', gap: 18, overflowX: 'auto', padding: '8px 20px 28px', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
        {packages.map(pkg => <Card key={pkg.id} pkg={pkg} featured={pkg.slug === 'pizza-kurs'} />)}
      </div>
    </section>
  );
}
