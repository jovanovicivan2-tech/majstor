import Link from 'next/link';
import ImageRotator from '@/components/ui/ImageRotator';

const PIZZA_SLIDES = [
  { src: '/images/pizza-testo.jpg', alt: 'Razvlačenje testa rukom — napolitanska tehnika' },
  { src: '/images/pizza-margherita.jpg', alt: 'Napolitanska margherita iz krušne peći' },
];

const STEPS = [
  { num: '01', title: 'Testo', sub: 'Mešenje i odmaranje, kako tradicija nalaže' },
  { num: '02', title: 'Razvlačenje', sub: 'Tehnika prenešena iz ruke u ruku' },
  { num: '03', title: 'Vatra i sto', sub: 'Pečenje na vatri, posluženje uz bazen' },
];

export default function PizzaSection() {
  return (
    <section style={{ background: '#1C1C1E' }} className="overflow-hidden">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:items-stretch">
        {/* SLIKA + pull-quote */}
        <div className="relative h-[280px] md:h-auto md:min-h-[640px] overflow-hidden">
          <ImageRotator images={PIZZA_SLIDES} interval={4500} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,28,30,0.25) 0%, rgba(28,28,30,0.85) 100%)' }} />
          <div className="absolute bottom-7 left-6 right-6 md:left-10 md:right-10">
            <p className="font-display" style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontStyle: 'italic', color: '#fff', lineHeight: 1.35, maxWidth: 460 }}>
              „Umešena vašom rukom, pečena na vatri, poslužena uz bazen.”
            </p>
          </div>
        </div>

        {/* SADRŽAJ */}
        <div className="px-5 md:px-12 py-14 md:py-20 flex flex-col justify-center" style={{ maxWidth: 580 }}>
          <p className="eyebrow" style={{ color: '#C9A84C' }}>Radionica pice</p>
          <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-xl)', color: '#fff', lineHeight: 1.08, marginBottom: 18 }}>
            Veština koja se uči rukama
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: 36 }}>
            Radionicu vode majstori picerije <span style={{ color: '#fff' }}>Majstor i Margarita</span> — čuvari
            napolitanske tradicije. Testo se mesi i razvlači rukom, peče na vatri krušne peći, a potom poslužuje uz sam bazen.
          </p>

          <div className="flex flex-col" style={{ gap: 0 }}>
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className="flex items-center gap-5 py-5"
                style={{ borderTop: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
              >
                <span className="font-display" style={{ fontSize: 36, color: 'rgba(201,168,76,0.55)', lineHeight: 1, minWidth: 48 }}>{s.num}</span>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.92)', marginBottom: 2 }}>{s.title}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/paketi" className="btn btn-ghost self-start" style={{ marginTop: 36, color: '#C9A84C', borderColor: 'rgba(201,168,76,0.5)' }}>
            Otkrijte radionicu →
          </Link>
        </div>
      </div>
    </section>
  );
}
