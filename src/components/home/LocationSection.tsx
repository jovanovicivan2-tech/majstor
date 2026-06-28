export default function LocationSection() {
  const INFO = [
    { icon: '📍', label: 'Adresa', value: 'Vrdnik, Fruška Gora' },
    { icon: '🚗', label: 'Od Novog Sada', value: '40 minuta' },
    { icon: '🚗', label: 'Od Beograda', value: '80 minuta' },
    { icon: '🅿️', label: 'Parking', value: 'Besplatan, na imanju' },
  ];
  return (
    <section style={{ background: '#EDE8E0', padding: '64px 20px' }}>
      <div style={{ maxWidth: 520 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Lokacija</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(28px, 7vw, 40px)', color: '#1C1C1E', lineHeight: 1.15, marginBottom: 28 }}>Fruška Gora,<br />nadohvat ruke</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {INFO.map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: 'white', borderRadius: 2 }}>
              <span style={{ fontSize: 20, minWidth: 40, textAlign: 'center' }}>{item.icon}</span>
              <div><p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8A7E72', marginBottom: 2 }}>{item.label}</p><p style={{ fontSize: 15, fontWeight: 500, color: '#1C1C1E' }}>{item.value}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
