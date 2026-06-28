import Link from 'next/link';

const STEPS = [
  { num: '1', title: 'Priprema testa', sub: '30 minuta · Tajne pravog mešenja' },
  { num: '2', title: 'Odabir sastojaka', sub: '15 minuta · Svako bira svoju kombinaciju' },
  { num: '3', title: 'Pečenje & degustacija', sub: 'Uz piće, pored bazena 🍕' },
];

export default function PizzaSection() {
  return (
    <section style={{ background: '#1C1C1E' }}>
      {/* Atmosferska fotografija */}
      <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pool_person.jpg"
          alt="Opuštanje u bazenu okruženom lavandom — savršen letnji dan na Fruškoj Gori"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28,28,30,0.35) 0%, rgba(28,28,30,0.88) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 28, left: 20, right: 20 }}>
          <p style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(18px, 4vw, 24px)',
            fontStyle: 'italic',
            color: 'white',
            lineHeight: 1.35,
            maxWidth: 460,
          }}>
            "Napravite svoju pistu — i pojedite je pored bazena, naravno."
          </p>
        </div>
      </div>

      <div style={{ padding: '48px 20px 64px', maxWidth: 520 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
          Pizza radionica
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(28px, 7vw, 40px)', color: 'white', lineHeight: 1.15, marginBottom: 16 }}>
          Postanite pizza<br />majstor za jedan dan
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: 32 }}>
          Naši pizza majstori čuvari su tradicije napolitanske pizze. Naučićete da mesete testo pravom tehnikom — a onda ćete je pojesti pored bazena.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
          {STEPS.map(s => (
            <div key={s.num} style={{ display: 'flex', gap: 16, padding: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 2 }}>
              <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 32, color: 'rgba(201,168,76,0.4)', lineHeight: 1, minWidth: 32 }}>{s.num}</span>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 2 }}>{s.title}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/paketi" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid rgba(201,168,76,0.6)', color: '#C9A84C', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0 24px', height: 48, borderRadius: 2, textDecoration: 'none' }}>
          Saznaj više →
        </Link>
      </div>
    </section>
  );
}
