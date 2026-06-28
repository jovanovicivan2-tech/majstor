import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1C1C1E', color: 'rgba(255,255,255,0.5)', padding: '48px 20px 32px' }}>
      <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 22, fontWeight: 600, color: 'white', marginBottom: 4 }}>Majstor i Margarita</p>
      <p style={{ fontSize: 12, letterSpacing: '0.06em', marginBottom: 28 }}>Vrdnik, Fruška Gora · Privatni event prostor</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 28 }}>
        {[['/', 'Početna'], ['/paketi', 'Paketi'], ['/rezervacija', 'Rezervacija'], ['/galerija', 'Galerija'], ['/team-building', 'Team Building'], ['/kontakt', 'Kontakt']].map(([href, label]) => (
          <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 14 }}>{label}</Link>
        ))}
      </div>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 24 }}>📞 +381 XX XXX XXXX · 📧 info@majstorimargarita.rs · 📸 @majstorimargarita</p>
      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 16 }}>© {new Date().getFullYear()} Majstor i Margarita</p>
    </footer>
  );
}
