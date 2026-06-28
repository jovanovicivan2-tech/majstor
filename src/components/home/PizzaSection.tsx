import Link from 'next/link';
const STEPS = [
  { num: '1', title: 'Priprema testa', sub: '30 minuta · Tajne pravog mešenja' },
  { num: '2', title: 'Odabir sastojaka', sub: '15 minuta · Svako bira svoju kombinaciju' },
  { num: '3', title: 'Pečenje & degustacija', sub: 'Uz piće, pored bazena 🍕' },
];
export default function PizzaSection({ locale }: { locale: string }) {
  const prefix = locale === 'en' ? '/en' : '';
  return (
    <section className="bg-[#1C1C1E] px-5 md:px-10 py-16">
      <div className="max-w-lg">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">Pizza radionica</p>
        <h2 className="font-serif font-medium text-white leading-tight mb-4" style={{ fontSize: 'clamp(28px, 7vw, 40px)' }}>Postanite pizza<br />majstor za jedan dan</h2>
        <p className="text-[15px] text-white/65 leading-relaxed mb-8">Naši pizza majstori čuvari su tradicije napolitanske pizze. Naučićete da mesete testo pravom tehnikom — a onda ćete je pojesti pored bazena.</p>
        <div className="space-y-3 mb-9">
          {STEPS.map((step) => (
            <div key={step.num} className="flex items-start gap-4 p-4 bg-white/4 border border-white/7 rounded-sm">
              <span className="font-serif text-3xl font-normal text-[#C9A84C]/40 leading-none min-w-[32px]">{step.num}</span>
              <div className="pt-1"><p className="text-sm font-semibold text-white/90 mb-0.5">{step.title}</p><p className="text-xs text-white/45">{step.sub}</p></div>
            </div>
          ))}
        </div>
        <Link href={`${prefix}/paketi#pizza-experience`} className="inline-flex items-center gap-2 border-[1.5px] border-[#C9A84C]/60 text-[#C9A84C] text-sm font-semibold tracking-wide uppercase px-6 h-12 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">Saznaj više →</Link>
      </div>
    </section>
  );
}
