const KORACI = [
  { n: '01', t: 'Testo', d: 'Sve počinje od testa. Brašno, voda, so i — vreme. Mesi se ručno i ostavlja da odleži, baš kako napolitanska tradicija nalaže.' },
  { n: '02', t: 'Maturacija', d: 'Strpljenje pravi razliku. Testo sazreva satima, dok ne postane lagano, vazdušasto i lako svarljivo.' },
  { n: '03', t: 'Razvlačenje rukom', d: 'Bez oklagije. Testo se razvlači vrhovima prstiju — tanak centar i vazdušast, mekan obod.' },
  { n: '04', t: 'Filovanje', d: 'San Marzano pelat, mocarela, sveži bosiljak i kap maslinovog ulja. Birani sastojci — ništa suvišno.' },
  { n: '05', t: 'Pečenje na vatri', d: 'Profesionalna peć za napolitanu, preko 450°C. Pica je gotova za 90 sekundi — rumena kora i savršen, pegav obod.' },
  { n: '06', t: 'Posluživanje', d: 'Sto je već postavljen: tanjiri, escajg, čaše i pažljivo izabrana pića. Vi samo sednite i uživate — uz bazen.' },
];

const UKLJUCENO = [
  { d: 'M2 12c2.5-3 6-5 10-5s7.5 2 10 5M12 7v0M7 9.5l1 2.5M17 9.5l-1 2.5M10 11l.5 2M14 11l-.5 2', t: 'Birani sastojci i testo' },
  { d: 'M12 3c1.5 2.5 3 4 3 6.5a3 3 0 0 1-6 0c0-1 .4-1.8 1-2.5M12 21a6 6 0 0 0 6-6c0-3-2-5.5-6-9-4 3.5-6 6-6 9a6 6 0 0 0 6 6Z', t: 'Profesionalna peć za napolitanu' },
  { d: 'M5 3v8a2 2 0 0 0 4 0V3M7 11v10M19 3c-1.5 0-3 1.5-3 4s1.5 4 3 4v10', t: 'Tanjiri, escajg i čaše' },
  { d: 'M3 11a9 9 0 0 1 18 0v1H3v-1ZM2 12h20M5 16h14M7 20h10', t: 'Stolno posuđe i stolnjaci' },
  { d: 'M8 2h8l-1 7a3 3 0 0 1-6 0L8 2ZM12 12v8M8 22h8', t: 'Pića uz picu (voda, sok, pivo, vino)' },
  { d: 'M6 11V8a6 6 0 0 1 12 0v3M4 11h16l-1 8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2l-1-8ZM12 4v2', t: 'Konobarska usluga' },
];

export default function ProcesSection() {
  return (
    <section style={{ background: '#F7F2EA' }} className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="md:text-center md:max-w-2xl md:mx-auto mb-12 md:mb-16">
          <p className="eyebrow md:eyebrow--center md:justify-center">Kako izgleda</p>
          <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-2xl)', color: '#1C1C1E', lineHeight: 1.05 }}>
            Doživljaj, korak po korak
          </h2>
          <p className="mt-5" style={{ fontSize: 17, color: '#8A7E72', lineHeight: 1.6 }}>
            Od prvog dodira testa do poslednjeg zalogaja — svaki korak je deo doživljaja, a o svemu ostalom brinemo mi.
          </p>
        </div>

        {/* Koraci */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(138,126,114,0.18)', borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(138,126,114,0.18)' }}>
          {KORACI.map((k) => (
            <div key={k.n} style={{ background: '#F7F2EA', padding: '30px 26px' }}>
              <span className="font-display" style={{ fontSize: 40, color: 'rgba(201,168,76,0.6)', lineHeight: 1, display: 'block', marginBottom: 14 }}>{k.n}</span>
              <h3 className="font-display" style={{ fontSize: 22, fontWeight: 500, color: '#1C1C1E', marginBottom: 8 }}>{k.t}</h3>
              <p style={{ fontSize: 14.5, color: '#8A7E72', lineHeight: 1.6 }}>{k.d}</p>
            </div>
          ))}
        </div>

        {/* Sve je obezbeđeno */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-display" style={{ fontSize: 'var(--text-d-md)', color: '#1C1C1E', fontWeight: 500 }}>Sve je obezbeđeno</span>
            <span style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)' }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {UKLJUCENO.map((u) => (
              <div key={u.t} className="flex items-center gap-3.5" style={{ padding: 18, background: '#fff', borderRadius: 8, boxShadow: 'var(--shadow-soft)' }}>
                <span className="inline-flex items-center justify-center shrink-0" style={{ width: 42, height: 42, borderRadius: 8, background: 'rgba(201,168,76,0.12)' }}>
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={u.d} /></svg>
                </span>
                <span style={{ fontSize: 14, color: '#1C1C1E', lineHeight: 1.35 }}>{u.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
