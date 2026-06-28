export default function LocationSection() {
  const INFO = [
    { icon: 'M12 21c-4.5-4-7-7-7-10a7 7 0 0 1 14 0c0 3-2.5 6-7 10ZM12 8a3 3 0 0 0 0 6 3 3 0 0 0 0-6Z', label: 'Adresa', value: 'Vrdnik, Fruška Gora' },
    { icon: 'M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4ZM7.5 15.5h.01M16.5 15.5h.01', label: 'Od Novog Sada', value: '40 minuta' },
    { icon: 'M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4ZM7.5 15.5h.01M16.5 15.5h.01', label: 'Od Beograda', value: '80 minuta' },
    { icon: 'M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1ZM9 16V8h3.5a2.5 2.5 0 0 1 0 5H9', label: 'Parking', value: 'Besplatan, na imanju' },
  ];
  return (
    <section style={{ background: '#EDE8E0', padding: '72px 20px' }}>
      <div style={{ maxWidth: 520 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>Lokacija</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(30px, 7.5vw, 44px)', color: '#1C1C1E', lineHeight: 1.1, marginBottom: 30, letterSpacing: '-0.01em' }}>Fruška Gora,<br />nadohvat ruke</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {INFO.map(item => (
            <div key={item.label} className="card-hover" style={{ display: 'flex', alignItems: 'center', gap: 18, padding: 18, background: 'white', borderRadius: 4, boxShadow: '0 2px 8px rgba(28,28,30,0.04), 0 8px 24px rgba(28,28,30,0.04)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: 26 }} aria-hidden="true"><path d={item.icon} /></svg>
              <div><p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8A7E72', marginBottom: 3 }}>{item.label}</p><p style={{ fontSize: 15, fontWeight: 500, color: '#1C1C1E' }}>{item.value}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
