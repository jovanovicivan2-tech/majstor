'use client';
import { useEffect, useState, useCallback } from 'react';
import { useBooking } from './BookingContext';
import type { AvailabilityMap } from '@/types';

const DAY_NAMES = ['Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub', 'Ned'];
const MONTH_NAMES = ['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'];

export default function Step1Calendar({ onNext }: { onNext: () => void }) {
  const { data, update } = useBooking();
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [availability, setAvailability] = useState<AvailabilityMap>({});
  const [loading, setLoading] = useState(true);

  const fetchAvailability = useCallback(async (y: number, m: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/bookings/check-availability?year=${y}&month=${m}`);
      const json = await res.json();
      if (json.success) setAvailability(json.data);
    } catch { /* fallback */ }
    setLoading(false);
  }, []);

  useEffect(() => { fetchAvailability(year, month); }, [year, month, fetchAvailability]);

  const prevMonth = () => { if (month === 1) { setYear(y => y - 1); setMonth(12); } else setMonth(m => m - 1); };
  const nextMonth = () => { if (month === 12) { setYear(y => y + 1); setMonth(1); } else setMonth(m => m + 1); };

  const firstDay = new Date(year, month - 1, 1).getDay();
  const firstMon = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells: (number | null)[] = [...Array(firstMon).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  while (cells.length % 7 !== 0) cells.push(null);

  const today = new Date(); today.setHours(0, 0, 0, 0);
  const getDateStr = (d: number) => `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

  return (
    <div className="flex-1 flex flex-col">
      <div className="px-5 py-6 flex-1">
        <h2 className="font-serif text-2xl font-medium text-[#1C1C1E] mb-6">Odaberi datum</h2>
        <div className="flex items-center justify-between mb-5">
          <button onClick={prevMonth} className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#8A7E72] hover:text-[#5C1A2E] text-xl transition-colors" aria-label="Prethodni mesec">‹</button>
          <span className="font-serif text-lg font-medium text-[#1C1C1E]">{MONTH_NAMES[month - 1]} {year}</span>
          <button onClick={nextMonth} className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#8A7E72] hover:text-[#5C1A2E] text-xl transition-colors" aria-label="Sledeći mesec">›</button>
        </div>
        <div className="grid grid-cols-7 mb-2">
          {DAY_NAMES.map(d => <div key={d} className="text-center text-[11px] font-semibold text-[#8A7E72] uppercase tracking-wide py-1">{d}</div>)}
        </div>
        {loading ? (
          <div className="grid grid-cols-7 gap-1">{Array(35).fill(0).map((_, i) => <div key={i} className="aspect-square rounded-sm bg-[#EDE8E0] animate-pulse" />)}</div>
        ) : (
          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (!day) return <div key={i} />;
              const dateStr = getDateStr(day);
              const avail = availability[dateStr];
              const isSelected = data.date === dateStr;
              const isPast = new Date(dateStr) < today;
              const isBooked = avail === 'booked' || avail === 'blocked' || isPast;
              return (
                <button key={i} onClick={() => !isBooked && update({ date: dateStr })} disabled={isBooked}
                  className={`aspect-square flex items-center justify-center text-sm rounded-sm transition-all font-medium ${isSelected ? 'bg-[#5C1A2E] text-white shadow-md' : isBooked ? 'bg-[#EDE8E0] text-[#8A7E72]/40 cursor-not-allowed line-through' : 'hover:bg-[#5C1A2E]/10 hover:text-[#5C1A2E] text-[#1C1C1E] cursor-pointer'}`}
                  aria-label={`${day}. ${MONTH_NAMES[month - 1]}${isBooked ? ' — nije dostupno' : ''}`}>{day}</button>
              );
            })}
          </div>
        )}
        <div className="flex gap-5 mt-5 text-[12px] text-[#8A7E72]">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#5C1A2E]" />Odabrano</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#EDE8E0]" />Zauzeto</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm border border-[#8A7E72]/30" />Slobodno</span>
        </div>
      </div>
      <div className="px-5 pb-6 pt-4 border-t border-[#EDE8E0]">
        {data.date && <p className="text-sm text-[#8A7E72] mb-3">Odabrano: <span className="font-medium text-[#1C1C1E]">{new Date(data.date + 'T00:00:00').toLocaleDateString('sr-RS', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span></p>}
        <button onClick={onNext} disabled={!data.date} className="w-full h-[52px] bg-[#5C1A2E] text-white text-sm font-semibold tracking-[0.08em] uppercase rounded-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#7A2440] transition-colors">Dalje →</button>
      </div>
    </div>
  );
}
