'use client';
import { useBooking } from './BookingContext';
import type { Package } from '@/types';

function formatPrice(rsd: number) { return new Intl.NumberFormat('sr-RS').format(rsd); }

export default function Step2Package({ packages, onNext, onBack }: { packages: Package[]; onNext: () => void; onBack: () => void }) {
  const { data, update } = useBooking();
  const activePackages = packages.filter(p => p.slug !== 'corporate');
  return (
    <div className="flex-1 flex flex-col">
      <div className="px-5 py-6 flex-1 overflow-y-auto">
        <p className="text-sm text-[#8A7E72] mb-1">Odabrani datum</p>
        <p className="font-medium text-[#1C1C1E] mb-6">{data.date ? new Date(data.date + 'T00:00:00').toLocaleDateString('sr-RS', { weekday: 'long', day: 'numeric', month: 'long' }) : '—'}</p>
        <h2 className="font-serif text-2xl font-medium text-[#1C1C1E] mb-5">Odaberi paket</h2>
        <div className="space-y-3">
          {activePackages.map((pkg) => {
            const selected = data.package_id === pkg.id;
            return (
              <button key={pkg.id} onClick={() => update({ package_id: pkg.id })} className={`w-full text-left p-4 rounded-sm border-2 transition-all ${selected ? 'border-[#5C1A2E] bg-[#5C1A2E]/4 shadow-[0_4px_20px_rgba(92,26,46,0.1)]' : 'border-[#EDE8E0] bg-white hover:border-[#5C1A2E]/40'}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors ${selected ? 'border-[#5C1A2E] bg-[#5C1A2E]' : 'border-[#8A7E72]/40'}`}>{selected && <span className="block w-2 h-2 m-auto mt-[2px] rounded-full bg-white" />}</span>
                      <span className="font-semibold text-[#1C1C1E]">{pkg.name_sr}</span>
                    </div>
                    <p className="text-sm text-[#8A7E72] leading-snug ml-6">{pkg.description_sr}</p>
                    <ul className="mt-2 ml-6 space-y-0.5">
                      {(pkg.includes as string[]).slice(0, 3).map((item, i) => <li key={i} className="text-xs text-[#8A7E72] flex items-start gap-1.5"><span className="text-[#C9A84C] flex-shrink-0">✓</span>{item}</li>)}
                    </ul>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[11px] text-[#8A7E72] uppercase tracking-wide block">od</span>
                    <span className="text-lg font-semibold text-[#5C1A2E] tabular-nums">{formatPrice(pkg.base_price_rsd)}</span>
                    <span className="text-xs text-[#8A7E72] block">RSD</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="px-5 pb-6 pt-4 border-t border-[#EDE8E0] flex gap-3">
        <button onClick={onBack} className="h-[52px] px-6 text-sm font-medium text-[#8A7E72] hover:text-[#1C1C1E] transition-colors min-w-[80px]">← Nazad</button>
        <button onClick={onNext} disabled={!data.package_id} className="flex-1 h-[52px] bg-[#5C1A2E] text-white text-sm font-semibold tracking-[0.08em] uppercase rounded-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#7A2440] transition-colors">Dalje →</button>
      </div>
    </div>
  );
}
