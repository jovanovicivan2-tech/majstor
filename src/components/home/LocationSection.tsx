export default function LocationSection() {
  const INFO = [
    { icon: '📍', label: 'Adresa', value: 'Vrdnik, Fruška Gora' },
    { icon: '🚗', label: 'Od Novog Sada', value: '40 minuta' },
    { icon: '🚗', label: 'Od Beograda', value: '80 minuta' },
    { icon: '🅿️', label: 'Parking', value: 'Besplatan, na imanju' },
  ];
  return (
    <section style={{ background: '#EDE8E0', padding: '72px 20px' }}>
      <div style={{ maxWidth: 520 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>Lokacija</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(30px, 7.5vw, 44px)', color: '#1C1C1E', lineHeight: 1.1, marginBottom: 30, letterSpacing: '-0.01em' }}>Fruška Gora,<br />nadohvat ruke</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {INFO.map(item => (
            <div key={item.label} className="card-hover" style={{ display: 'flex', alignItems: 'center', gap: 18, padding: 18, background: 'white', borderRadius: 4, boxShadow: '0 2px 8px rgba(28,28,30,0.04), 0 8px 24px rgba(28,28,30,0.04)' }}>
              <span style={{ fontSize: 22, minWidth: 40, textAlign: 'center' }}>{item.icon}</span>
              <div><p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8A7E72', marginBottom: 3 }}>{item.label}</p><p style={{ fontSize: 15, fontWeight: 500, color: '#1C1C1E' }}>{item.value}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
