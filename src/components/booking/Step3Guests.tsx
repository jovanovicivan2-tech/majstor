'use client';
import { useBooking } from './BookingContext';
import { ADDON_PRICES_RSD } from '@/types';
import type { Package } from '@/types';

function formatPrice(rsd: number) { return new Intl.NumberFormat('sr-RS').format(rsd); }

const ADDONS = [
  { key: 'konobar' as const, label: 'Konobar servis', desc: 'Profesionalni konobar tokom celog događaja' },
  { key: 'dekoracija' as const, label: 'Dekoracija prostora', desc: 'Baloni, cveće, svetlosna dekoracija' },
  { key: 'torta' as const, label: 'Torta', desc: 'Svečana torta po vašem izboru' },
];

export default function Step3Guests({ packages, onNext, onBack }: { packages: Package[]; onNext: () => void; onBack: () => void }) {
  const { data, update } = useBooking();
  const pkg = packages.find(p => p.id === data.package_id);
  const minGuests = pkg?.min_guests ?? 1;
  const maxGuests = pkg?.max_guests ?? 100;
  const addonsTotal = (data.addons.konobar ? ADDON_PRICES_RSD.konobar : 0) + (data.addons.dekoracija ? ADDON_PRICES_RSD.dekoracija : 0) + (data.addons.torta ? ADDON_PRICES_RSD.torta : 0);
  const baseTotal = (pkg?.base_price_rsd ?? 0) + (pkg?.price_per_person_rsd ? pkg.price_per_person_rsd * data.num_guests : 0);
  const total = baseTotal + addonsTotal;
  const deposit = Math.round(total * (pkg?.deposit_percentage ?? 30) / 100);
  const setGuests = (n: number) => update({ num_guests: Math.min(maxGuests, Math.max(minGuests, n)) });
  const toggleAddon = (key: keyof typeof data.addons) => update({ addons: { ...data.addons, [key]: !data.addons[key] } });

  return (
    <div className="flex-1 flex flex-col">
      <div className="px-5 py-6 flex-1 overflow-y-auto">
        <h2 className="font-serif text-2xl font-medium text-[#1C1C1E] mb-7">Broj gostiju</h2>
        <div className="flex items-center justify-center gap-6 mb-2">
          <button onClick={() => setGuests(data.num_guests - 1)} disabled={data.num_guests <= minGuests} className="w-12 h-12 rounded-sm border-2 border-[#EDE8E0] text-xl font-light text-[#5C1A2E] disabled:opacity-30 hover:border-[#5C1A2E] transition-colors flex items-center justify-center" aria-label="Smanji">−</button>
          <span className="font-serif text-5xl font-medium text-[#1C1C1E] tabular-nums w-16 text-center">{data.num_guests}</span>
          <button onClick={() => setGuests(data.num_guests + 1)} disabled={data.num_guests >= maxGuests} className="w-12 h-12 rounded-sm border-2 border-[#EDE8E0] text-xl font-light text-[#5C1A2E] disabled:opacity-30 hover:border-[#5C1A2E] transition-colors flex items-center justify-center" aria-label="Povećaj">+</button>
        </div>
        <p className="text-center text-[12px] text-[#8A7E72] mb-8">min {minGuests} / max {maxGuests} gostiju</p>
        <h3 className="font-semibold text-[#1C1C1E] mb-4">Dodaci (opciono)</h3>
        <div className="space-y-3 mb-8">
          {ADDONS.map(({ key, label, desc }) => {
            const checked = data.addons[key];
            return (
              <button key={key} onClick={() => toggleAddon(key)} className={`w-full text-left p-4 rounded-sm border-2 transition-all flex items-start gap-3 ${checked ? 'border-[#5C1A2E] bg-[#5C1A2E]/4' : 'border-[#EDE8E0] bg-white hover:border-[#5C1A2E]/40'}`}>
                <div className={`w-5 h-5 rounded-sm border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${checked ? 'border-[#5C1A2E] bg-[#5C1A2E]' : 'border-[#8A7E72]/40'}`}>{checked && <span className="text-white text-xs font-bold">✓</span>}</div>
                <div className="flex-1"><p className="font-medium text-[#1C1C1E] text-sm">{label}</p><p className="text-xs text-[#8A7E72] mt-0.5">{desc}</p></div>
                <span className="text-sm font-semibold text-[#5C1A2E] flex-shrink-0">+ {formatPrice(ADDON_PRICES_RSD[key])} RSD</span>
              </button>
            );
          })}
        </div>
        <div className="bg-[#EDE8E0] rounded-sm p-4 space-y-2">
          <div className="flex justify-between text-sm"><span className="text-[#8A7E72]">Osnova ({pkg?.name_sr})</span><span className="font-medium">{formatPrice(pkg?.base_price_rsd ?? 0)} RSD</span></div>
          {addonsTotal > 0 && <div className="flex justify-between text-sm"><span className="text-[#8A7E72]">Dodaci</span><span className="font-medium">+ {formatPrice(addonsTotal)} RSD</span></div>}
          <div className="border-t border-[#D5CDC3] pt-2 flex justify-between font-semibold text-[#1C1C1E]"><span>Ukupno</span><span className="text-[#5C1A2E]">{formatPrice(total)} RSD</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#8A7E72]">Depozit (30%)</span><span className="font-semibold text-[#5C1A2E]">{formatPrice(deposit)} RSD</span></div>
          <div className="flex justify-between text-xs text-[#8A7E72]"><span>Na mestu</span><span>{formatPrice(total - deposit)} RSD</span></div>
        </div>
      </div>
      <div className="px-5 pb-6 pt-4 border-t border-[#EDE8E0] flex gap-3">
        <button onClick={onBack} className="h-[52px] px-6 text-sm font-medium text-[#8A7E72] hover:text-[#1C1C1E] transition-colors min-w-[80px]">← Nazad</button>
        <button onClick={onNext} className="flex-1 h-[52px] bg-[#5C1A2E] text-white text-sm font-semibold tracking-[0.08em] uppercase rounded-sm hover:bg-[#7A2440] transition-colors">Dalje →</button>
      </div>
    </div>
  );
}
