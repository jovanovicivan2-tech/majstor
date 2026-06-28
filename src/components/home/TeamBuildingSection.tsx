import Link from 'next/link';

const FEATURES = [
  { icon: '📍', text: '40 min od Novog Sada' },
  { icon: '🔒', text: 'Samo vaš tim — privatno' },
  { icon: '🛏️', text: 'Opcija prenoćišta u hotelu' },
  { icon: '📄', text: 'Faktura za firmu' },
  { icon: '🍕', text: 'Pizza radionica za tim' },
  { icon: '🅿️', text: 'Besplatni parking' },
];

export default function TeamBuildingSection() {
  return (
    <section style={{ background: '#1C1C1E', padding: '72px 20px' }}>
      <div style={{ maxWidth: 520 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
          Za firme
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(28px, 7vw, 40px)', color: 'white', lineHeight: 1.15, marginBottom: 16 }}>
          Team building<br />uz pravu picu
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, marginBottom: 32 }}>
          Ceo dan za vašu firmu: bazen, sala i zabava, uz pizza radionicu koja spaja tim. Majstori iz picerije Majstor i Margarita vode radionicu, a vi se opustite. Za udaljenije timove — opcija prenoćišta u obližnjem hotelu.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 36 }}>
          {FEATURES.map(f => (
            <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{f.icon}</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{f.text}</span>
            </div>
          ))}
        </div>
        <Link
          href="/team-building"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#C9A84C', color: '#1C1C1E', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '0 28px', height: 52, borderRadius: 2, textDecoration: 'none',
          }}
        >
          Pošaljite upit →
        </Link>
      </div>
    </section>
  );
}
