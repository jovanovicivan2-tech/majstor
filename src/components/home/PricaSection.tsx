export default function PricaSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#1C1C1E' }}>
      {/* Pozadinska slika — atmosfera */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/terrace_sunset.jpg"
        alt="Terasa u sumrak — imanje iznad Vrdnika, Fruška Gora"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,28,30,0.55), rgba(28,28,30,0.78))' }} />

      <div className="relative max-w-3xl mx-auto px-5 md:px-10 py-28 md:py-44 text-center flex flex-col items-center">
        <p className="eyebrow eyebrow--center justify-center" style={{ color: '#C9A84C' }}>Mesto</p>
        <h2 className="font-display mt-6" style={{ fontWeight: 400, fontSize: 'var(--text-d-2xl)', color: '#fff', lineHeight: 1.12, marginBottom: 28 }}>
          Vreme ovde teče sporije
        </h2>
        <p className="font-display" style={{ fontSize: 'clamp(20px, 3.4vw, 27px)', fontWeight: 300, color: 'rgba(255,255,255,0.88)', lineHeight: 1.55, fontStyle: 'italic', textShadow: '0 2px 18px rgba(0,0,0,0.4)' }}>
          Na imanju iznad Vrdnika, gde se Fruška Gora spušta u ravnicu, dan se ne meri satima.
          Voda koja svetluca u sumrak, miris lavande, živa vatra peći i pica koja nastaje pod vašim rukama —
          to nije samo obrok, već popodne koje ostaje.
        </p>
        <span className="mt-10" style={{ width: 48, height: 1, background: 'rgba(201,168,76,0.6)' }} />
      </div>
    </section>
  );
}
