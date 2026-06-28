import Link from 'next/link';
export default function CTASection() {
  return (
    <section style={{ background: '#F7F2EA', padding: '80px 20px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(30px, 8vw, 48px)', color: '#1C1C1E', lineHeight: 1.15, marginBottom: 16 }}>Vaš savršeni<br />dan počinje ovde</h2>
      <p style={{ fontSize: 15, color: '#8A7E72', lineHeight: 1.6, marginBottom: 36, maxWidth: 280, margin: '0 auto 36px' }}>Dostupni termini popunjavaju se brzo. Osigurajte vaše mesto danas.</p>
      <Link href="/rezervacija" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#5C1A2E', color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0 36px', height: 56, borderRadius: 2, textDecoration: 'none' }}>
        Proverite slobodne termine →
      </Link>
    </section>
  );
}
