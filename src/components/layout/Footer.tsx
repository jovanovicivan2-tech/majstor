import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1C1C1E', color: 'rgba(255,255,255,0.5)', padding: '48px 20px 32px' }}>
      <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 22, fontWeight: 600, color: 'white', marginBottom: 4 }}>Napolitana Lab Vrdnik</p>
      <p style={{ fontSize: 12, letterSpacing: '0.06em', marginBottom: 8 }}>Vrdnik, Fruška Gora · Radionica pice i privatni prostor</p>
      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', marginBottom: 28, lineHeight: 1.5 }}>Radionice vode pizza majstori iz picerije Majstor i Margarita.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 28 }}>
        {[['/', 'Početna'], ['/paketi', 'Programi'], ['/rezervacija', 'Rezervacija'], ['/galerija', 'Galerija'], ['/team-building', 'Team Building'], ['/kontakt', 'Kontakt']].map(([href, label]) => (
          <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 14 }}>{label}</Link>
        ))}
      </div>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 24 }}>📞 +381 XX XXX XXXX · 📧 info@napolitanalab.rs · 📸 @napolitanalab</p>
      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 16 }}>© {new Date().getFullYear()} Napolitana Lab Vrdnik</p>
    </footer>
  );
}
