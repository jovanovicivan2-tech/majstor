const AWARDS = [
  { year: '2025', rank: '34' },
  { year: '2024', rank: '37' },
  { year: '2023', rank: '33' },
  { year: '2022', rank: '35' },
  { year: '2021', rank: '43' },
  { year: '2020', rank: '45' },
];

export default function AwardsSection() {
  return (
    <section style={{ background: '#1C1C1E' }} className="relative overflow-hidden py-20 md:py-32">
      {/* Suptilna tekstura */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.04, backgroundImage: 'radial-gradient(circle, #F7F2EA 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative max-w-5xl mx-auto px-5 md:px-10 flex flex-col items-center text-center">
        {/* Margherita u zlatnom prstenu */}
        <div className="relative mb-8" style={{ width: 168, height: 168 }}>
          <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(201,168,76,0.4)', transform: 'scale(1.12)' }} />
          <div className="relative w-full h-full rounded-full overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/pizza-margherita.jpg" alt="Napolitanska margherita — Majstor i Margarita" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <p className="eyebrow eyebrow--center justify-center" style={{ color: '#C9A84C' }}>50 Top Pizza · Priznanja</p>
        <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-2xl)', color: '#fff', lineHeight: 1.05, marginBottom: 18 }}>
          Među 50 najboljih u Evropi
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.68)', lineHeight: 1.6, maxWidth: 560, marginBottom: 48 }}>
          Radionice vode majstori picerije <span style={{ color: '#fff' }}>Majstor i Margarita</span> — šest godina
          zaredom na prestižnoj listi <em style={{ fontStyle: 'italic', color: '#E0C878' }}>50 Top Pizza</em>, među najboljim picerijama Evrope.
        </p>

        {/* Rangovi po godinama */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px w-full" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
          {AWARDS.map((a) => (
            <div key={a.year} className="flex flex-col items-center" style={{ background: '#1C1C1E', padding: '22px 8px' }}>
              <span style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>Nº</span>
              <span className="font-display" style={{ fontSize: 38, fontWeight: 600, color: '#C9A84C', lineHeight: 1 }}>{a.rank}</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>{a.year}</span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 24 }}>
          Uz titulu <span style={{ color: '#C9A84C' }}>najbolje picerije u Srbiji</span> (2022 &amp; 2023) · Evropska rang-lista
        </p>
      </div>
    </section>
  );
}
