import Link from 'next/link';

const INFO = [
  { icon: 'M12 21c-4.5-4-7-7-7-10a7 7 0 0 1 14 0c0 3-2.5 6-7 10ZM12 8a3 3 0 0 0 0 6 3 3 0 0 0 0-6Z', label: 'Adresa', value: 'Vrdnik, Fruška Gora' },
  { icon: 'M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4ZM7.5 15.5h.01M16.5 15.5h.01', label: 'Od Novog Sada', value: '40 minuta' },
  { icon: 'M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4ZM7.5 15.5h.01M16.5 15.5h.01', label: 'Od Beograda', value: '80 minuta' },
  { icon: 'M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1ZM9 16V8h3.5a2.5 2.5 0 0 1 0 5H9', label: 'Parking', value: 'Besplatan, na imanju' },
];

export default function LocationSection() {
  return (
    <section style={{ background: '#EDE8E0' }} className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Tekst + kartice */}
        <div>
          <p className="eyebrow">Lokacija</p>
          <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-2xl)', color: '#1C1C1E', lineHeight: 1.05, marginBottom: 14, letterSpacing: '-0.01em' }}>
            Fruška Gora, nadohvat ruke
          </h2>
          <p style={{ fontSize: 16, color: '#8A7E72', lineHeight: 1.6, marginBottom: 30, maxWidth: 440 }}>
            Dovoljno blizu da se lako stigne, dovoljno daleko da bude samo vaš — skriveno u zelenilu nadomak Vrdnika.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INFO.map((item) => (
              <div key={item.label} className="card-hover flex items-center gap-4" style={{ padding: 18, background: '#fff', borderRadius: 6, boxShadow: 'var(--shadow-soft)' }}>
                <span className="inline-flex items-center justify-center shrink-0" style={{ width: 42, height: 42, borderRadius: 6, background: 'rgba(201,168,76,0.12)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={item.icon} /></svg>
                </span>
                <div>
                  <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8A7E72', marginBottom: 3 }}>{item.label}</p>
                  <p style={{ fontSize: 15, fontWeight: 500, color: '#1C1C1E' }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3" style={{ padding: 16, background: 'rgba(92,26,46,0.06)', borderRadius: 8, border: '1px solid rgba(92,26,46,0.12)' }}>
            <span style={{ color: '#5C1A2E', marginTop: 1 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
            </span>
            <p style={{ fontSize: 14, color: '#5C1A2E', lineHeight: 1.5 }}>
              <strong>Prilaz imanju je preko Grobljanske ulice.</strong> Sledite navigaciju do tačke na mapi.
            </p>
          </div>

          <Link
            href="https://maps.app.goo.gl/RD2bw5dQoNc4FyuVA"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-2 mt-6"
            style={{ color: '#5C1A2E', fontSize: 14, fontWeight: 600 }}
          >
            Otvori na Google mapama →
          </Link>
        </div>

        {/* Interaktivna mapa */}
        <div className="relative overflow-hidden rounded-lg shadow-lift" style={{ aspectRatio: '4/5' }}>
          <iframe
            title="Lokacija — Vrdnik, Fruška Gora"
            src="https://www.google.com/maps?q=45.1181288,19.8128489&z=14&output=embed"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
