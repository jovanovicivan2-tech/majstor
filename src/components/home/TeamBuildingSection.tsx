import Link from 'next/link';

// SVG putanje (24x24, stroke) — bez emoji
const FEATURES: { d: string; text: string }[] = [
  { d: 'M12 21c-4.5-4-7-7-7-10a7 7 0 0 1 14 0c0 3-2.5 6-7 10ZM12 8a3 3 0 0 0 0 6 3 3 0 0 0 0-6Z', text: '40 min od Novog Sada' },
  { d: 'M6 10V7a6 6 0 0 1 12 0v3M5 10h14v10H5zM12 14v3', text: 'Prostor isključivo za vaš tim' },
  { d: 'M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M3 18v2M21 18v2M7 10V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2', text: 'Mogućnost prenoćišta u hotelu' },
  { d: 'M7 3h10a1 1 0 0 1 1 1v16l-3-2-3 2-3-2-3 2V4a1 1 0 0 1 1-1ZM9 8h6M9 12h6', text: 'Faktura za firmu' },
  { d: 'M12 3c1.5 2.5 3 4 3 6.5a3 3 0 0 1-6 0c0-1 .4-1.8 1-2.5M12 21a6 6 0 0 0 6-6c0-3-2-5.5-6-9-4 3.5-6 6-6 9a6 6 0 0 0 6 6Z', text: 'Radionica pice za ceo tim' },
  { d: 'M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M5 11h14v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5ZM7.5 14h.01M16.5 14h.01', text: 'Besplatni parking na imanju' },
];

export default function TeamBuildingSection() {
  return (
    <section style={{ background: '#1C1C1E' }} className="overflow-hidden">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:items-stretch">
        {/* SADRŽAJ */}
        <div className="px-5 md:px-12 py-14 md:py-24 flex flex-col justify-center order-2 md:order-1" style={{ maxWidth: 580 }}>
          <p className="eyebrow" style={{ color: '#C9A84C' }}>Za firme</p>
          <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-xl)', color: '#fff', lineHeight: 1.08, marginBottom: 18 }}>
            Tim koji zajedno stvara
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, marginBottom: 36 }}>
            Ceo dan posvećen vašem timu — bazen, prostor i radionica pice koja zbližava.
            Majstori picerije Majstor i Margarita vode radionicu, a na vama je samo da uživate.
            Za udaljenije timove, tu je i prenoćište u obližnjem hotelu.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            {FEATURES.map((f) => (
              <div key={f.text} className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center shrink-0" style={{ width: 38, height: 38, borderRadius: 4, background: 'rgba(201,168,76,0.1)' }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={f.d} /></svg>
                </span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)' }}>{f.text}</span>
              </div>
            ))}
          </div>

          <Link href="/team-building" className="btn self-start" style={{ background: '#C9A84C', color: '#1C1C1E' }}>
            Pošaljite upit →
          </Link>
        </div>

        {/* SLIKA */}
        <div className="relative h-[280px] md:h-auto md:min-h-[620px] overflow-hidden order-1 md:order-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pool_wide.jpg"
            alt="Privatni prostor sa bazenom — idealno za team building na Fruškoj Gori"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to top, rgba(28,28,30,0.5), transparent 60%)' }} />
          <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, rgba(28,28,30,0.6), transparent 40%)' }} />
        </div>
      </div>
    </section>
  );
}
