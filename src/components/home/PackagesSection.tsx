import Link from 'next/link';
import type { Package } from '@/types';

function formatPrice(rsd: number): string {
  return new Intl.NumberFormat('sr-RS').format(rsd);
}

function PackageCard({ pkg, featured, locale }: { pkg: Package; featured?: boolean; locale: string }) {
  const prefix = locale === 'en' ? '/en' : '';
  const isCorporate = pkg.slug === 'corporate';
  return (
    <div className={`flex-none w-[calc(100vw-64px)] max-w-xs snap-start rounded-sm p-7 transition-all duration-200 ${
      featured ? 'border-2 border-[#5C1A2E] shadow-[0_8px_40px_rgba(92,26,46,0.12)] bg-white' : 'border border-[rgba(138,126,114,0.2)] bg-white hover:border-[#5C1A2E] hover:border-2 hover:shadow-[0_8px_40px_rgba(92,26,46,0.08)]'
    }`}>
      <span className={`inline-block text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm mb-4 ${featured ? 'bg-[#5C1A2E] text-white' : 'bg-[rgba(92,26,46,0.08)] text-[#5C1A2E]'}`}>
        {featured ? '🏆 Najpopularnije' : pkg.name_sr}
      </span>
      <h3 className="font-serif text-2xl font-medium text-[#1C1C1E] mb-2.5 leading-snug">{pkg.name_sr}</h3>
      <p className="text-sm text-[#8A7E72] leading-relaxed mb-5">{pkg.description_sr}</p>
      <ul className="mb-6 space-y-1">
        {(pkg.includes as string[]).slice(0, 4).map((item, i) => (
          <li key={i} className="text-[13px] text-[#1C1C1E] flex items-start gap-2">
            <span className="text-[#C9A84C] font-semibold flex-shrink-0 mt-px">✓</span>{item}
          </li>
        ))}
      </ul>
      <div className="flex items-baseline gap-1.5 mb-5">
        {isCorporate ? (
          <span className="text-sm text-[#8A7E72]">Cena po dogovoru</span>
        ) : (
          <><span className="text-[11px] text-[#8A7E72] uppercase tracking-wide">od</span>
          <span className="text-2xl font-semibold text-[#5C1A2E] tabular-nums">{formatPrice(pkg.base_price_rsd)}</span>
          <span className="text-sm text-[#8A7E72]">RSD</span></>
        )}
      </div>
      <Link href={`${prefix}/${isCorporate ? 'team-building' : 'rezervacija'}${!isCorporate ? `?paket=${pkg.slug}` : ''}`}
        className={`w-full h-12 flex items-center justify-center text-[13px] font-semibold tracking-[0.08em] uppercase rounded-sm transition-colors ${
          isCorporate ? 'border-[1.5px] border-[#5C1A2E] text-[#5C1A2E] hover:bg-[#5C1A2E] hover:text-white' : 'bg-[#5C1A2E] text-white hover:bg-[#7A2440]'
        }`}>
        {isCorporate ? 'Pošalji upit' : 'Rezerviši'}
      </Link>
    </div>
  );
}

export default function PackagesSection({ packages, locale }: { packages: Package[]; locale: string }) {
  return (
    <section className="py-16">
      <div className="px-5 mb-8">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2.5">Paketi</p>
        <h2 className="font-serif font-medium text-[#1C1C1E] leading-tight" style={{ fontSize: 'clamp(28px, 7vw, 40px)' }}>
          Izaberite vaše<br />savršeno iskustvo
        </h2>
      </div>
      <div className="flex gap-4 overflow-x-auto px-5 pb-6 snap-x snap-mandatory [-webkit-overflow-scrolling:touch]">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} featured={pkg.slug === 'pizza-experience'} locale={locale} />
        ))}
      </div>
    </section>
  );
}
