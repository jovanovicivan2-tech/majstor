import Link from 'next/link';
export default function CTASection({ locale }: { locale: string }) {
  const prefix = locale === 'en' ? '/en' : '';
  return (
    <section className="bg-[#F7F2EA] px-5 md:px-10 py-20 text-center">
      <div className="divider-gold mb-12 max-w-sm mx-auto"><span className="text-[#C9A84C]/70 text-base">✦</span></div>
      <h2 className="font-serif font-medium text-[#1C1C1E] leading-tight mb-4" style={{ fontSize: 'clamp(30px, 8vw, 48px)' }}>Vaš savršeni<br />dan počinje ovde</h2>
      <p className="text-[15px] text-[#8A7E72] leading-relaxed mb-9 max-w-xs mx-auto">Dostupni termini popunjavaju se brzo. Osigurajte vaše mesto danas.</p>
      <Link href={`${prefix}/rezervacija`} className="inline-flex items-center gap-2.5 bg-[#5C1A2E] text-white text-sm font-semibold tracking-[0.08em] uppercase px-9 h-14 rounded-sm hover:bg-[#7A2440] transition-all hover:-translate-y-0.5">Proverite slobodne termine →</Link>
    </section>
  );
}
