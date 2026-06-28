import Link from 'next/link';
import type { Package } from '@/types';

function fmt(n: number) { return new Intl.NumberFormat('sr-RS').format(n); }

function Card({ pkg, featured }: { pkg: Package; featured?: boolean }) {
  const corp = pkg.slug === 'corporate';
  return (
    <div style={{ flexShrink: 0, width: 'calc(100vw - 64px)', maxWidth: 300, scrollSnapAlign: 'start', borderRadius: 2, padding: 28, background: 'white', border: featured ? '2px solid #5C1A2E' : '1px solid rgba(138,126,114,0.2)', boxShadow: featured ? '0 8px 40px rgba(92,26,46,0.12)' : 'none' }}>
      <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2, marginBottom: 16, background: featured ? '#5C1A2E' : 'rgba(92,26,46,0.08)', color: featured ? 'white' : '#5C1A2E' }}>
        {featured ? '🏆 Najpopularnije' : pkg.name_sr}
      </span>
      <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 24, fontWeight: 500, color: '#1C1C1E', marginBottom: 10 }}>{pkg.name_sr}</h3>
      <p style={{ fontSize: 14, color: '#8A7E72', lineHeight: 1.5, marginBottom: 20 }}>{pkg.description_sr}</p>
      <ul style={{ marginBottom: 24, paddingLeft: 0, listStyle: 'none' }}>
        {(pkg.includes as string[]).slice(0, 4).map((item, i) => (
          <li key={i} style={{ fontSize: 13, color: '#1C1C1E', display: 'flex', gap: 8, marginBottom: 4 }}>
            <span style={{ color: '#C9A84C', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
          </li>
        ))}
      </ul>
      <div style={{ marginBottom: 20 }}>
        {corp ? <span style={{ fontSize: 14, color: '#8A7E72' }}>Cena po dogovoru</span> : (
          <><span style={{ fontSize: 11, color: '#8A7E72', textTransform: 'uppercase' }}>od </span>
          <span style={{ fontSize: 24, fontWeight: 600, color: '#5C1A2E' }}>{fmt(pkg.base_price_rsd)}</span>
          <span style={{ fontSize: 14, color: '#8A7E72' }}> RSD</span></>
        )}
      </div>
      <Link href={corp ? '/team-building' : `/rezervacija?paket=${pkg.slug}`}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 48, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 2, textDecoration: 'none', background: corp ? 'transparent' : '#5C1A2E', color: corp ? '#5C1A2E' : 'white', border: corp ? '1.5px solid #5C1A2E' : 'none' }}>
        {corp ? 'Pošalji upit' : 'Rezerviši'}
      </Link>
    </div>
  );
}

export default function PackagesSection({ packages }: { packages: Package[] }) {
  return (
    <section style={{ paddingTop: 64, paddingBottom: 16 }}>
      <div style={{ padding: '0 20px', marginBottom: 32 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Paketi</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(28px, 7vw, 40px)', color: '#1C1C1E', lineHeight: 1.15 }}>
          Izaberite vaše<br />savršeno iskustvo
        </h2>
      </div>
      <div style={{ display: 'flex', gap: 16, overflowX: 'auto', padding: '0 20px 24px', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
        {packages.map(pkg => <Card key={pkg.id} pkg={pkg} featured={pkg.slug === 'pizza-experience'} />)}
      </div>
    </section>
  );
}
