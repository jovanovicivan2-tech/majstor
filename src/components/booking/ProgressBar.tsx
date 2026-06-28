'use client';

import { useBooking } from './BookingContext';

const STEPS = ['Datum', 'Paket', 'Gosti', 'Podaci', 'Plaćanje'];

export default function ProgressBar() {
  const { step } = useBooking();
  return (
    <div className="px-5 pt-4 pb-3 bg-white border-b border-[#EDE8E0]">
      <div className="h-[3px] bg-[#EDE8E0] rounded-full mb-3 overflow-hidden">
        <div className="h-full bg-[#5C1A2E] rounded-full transition-all duration-500" style={{ width: `${(step / 5) * 100}%` }} />
      </div>
      <div className="flex justify-between">
        {STEPS.map((label, i) => {
          const s = (i + 1) as 1|2|3|4|5;
          return (
            <span key={label} className={`text-[10px] font-medium tracking-wide transition-colors ${
              s === step ? 'text-[#5C1A2E] font-semibold' : s < step ? 'text-[#C9A84C]' : 'text-[#8A7E72]/50'
            }`}>{s < step ? '✓' : s === step ? label : ''}</span>
          );
        })}
      </div>
      <p className="text-[11px] text-[#8A7E72] mt-1">Korak {step} od 5 — <span className="font-medium text-[#1C1C1E]">{STEPS[step - 1]}</span></p>
    </div>
  );
}
