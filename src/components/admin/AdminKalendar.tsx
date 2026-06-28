'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DAY_NAMES = ['Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub', 'Ned'];
const MONTH_NAMES = ['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'];

interface Booking { date: string; status: string; guest_name: string; num_guests: number; booking_number: string; packages: { name_sr: string } | { name_sr: string }[] | null; }
interface BlockedDate { id: string; date: string; reason: string | null; }
function getPkgName(packages: Booking['packages']): string { if (!packages) return '—'; if (Array.isArray(packages)) return packages[0]?.name_sr ?? '—'; return packages.name_sr; }

export default function AdminKalendar({ year, month, bookings, blocked }: { year: number; month: number; bookings: Booking[]; blocked: BlockedDate[]; }) {
  const router = useRouter();
  const [blockLoading, setBlockLoading] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const firstDay = new Date(year, month - 1, 1).getDay();
  const firstMon = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells: (number | null)[] = [...Array(firstMon).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  while (cells.length % 7 !== 0) cells.push(null);

  const bookingMap = new Map<string, Booking[]>();
  bookings.forEach(b => { if (!bookingMap.has(b.date)) bookingMap.set(b.date, []); bookingMap.get(b.date)!.push(b); });
  const blockedSet = new Set(blocked.map(b => b.date));
  const getDateStr = (d: number) => `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

  const goMonth = (dir: number) => { let m = month + dir, y = year; if (m > 12) { m = 1; y++; } if (m < 1) { m = 12; y--; } router.push(`/admin/kalendar?year=${y}&month=${m}`); };
  const toggleBlock = async (dateStr: string) => {
    setBlockLoading(dateStr);
    await fetch('/api/admin/availability', { method: blockedSet.has(dateStr) ? 'DELETE' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ date: dateStr, reason: 'Admin blokada' }) });
    router.refresh(); setBlockLoading('');
  };

  const selectedBookings = selectedDate ? (bookingMap.get(selectedDate) || []) : [];
  const selectedBlocked = selectedDate ? blockedSet.has(selectedDate) : false;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-[#18181B] border border-white/6 rounded-sm p-5">
        <div className="flex items-center justify-between mb-5">
          <button onClick={() => goMonth(-1)} className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 rounded-sm transition-colors">‹</button>
          <h2 className="font-serif text-lg font-medium text-white">{MONTH_NAMES[month - 1]} {year}</h2>
          <button onClick={() => goMonth(1)} className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 rounded-sm transition-colors">›</button>
        </div>
        <div className="grid grid-cols-7 mb-2">
          {DAY_NAMES.map(d => <div key={d} className="text-center text-[10px] font-semibold text-white/25 uppercase tracking-wide py-1">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, i) => {
            if (!day) return <div key={i} />;
            const dateStr = getDateStr(day);
            const dayBookings = bookingMap.get(dateStr) || [];
            const isBlocked = blockedSet.has(dateStr);
            const isSelected = selectedDate === dateStr;
            const hasConfirmed = dayBookings.some(b => b.status === 'confirmed');
            const hasPending = dayBookings.some(b => b.status === 'pending');
            return (
              <button key={i} onClick={() => setSelectedDate(isSelected ? null : dateStr)} disabled={blockLoading === dateStr}
                className={`relative aspect-square flex flex-col items-center justify-center rounded-sm text-sm font-medium transition-all ${isSelected ? 'ring-2 ring-[#C9A84C] ring-offset-1 ring-offset-[#18181B]' : ''} ${isBlocked ? 'bg-red-900/20 text-red-400/50' : hasConfirmed ? 'bg-[#5C1A2E]/40 text-[#C9A84C]' : hasPending ? 'bg-yellow-900/20 text-yellow-400' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>
                <span>{day}</span>
                {dayBookings.length > 0 && <span className="absolute bottom-1 text-[8px] font-bold">{dayBookings.length}</span>}
                {isBlocked && <span className="absolute top-0.5 right-0.5 text-[7px]">🔒</span>}
              </button>
            );
          })}
        </div>
        <div className="flex gap-4 mt-4 text-[11px] text-white/30">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#5C1A2E]/40" />Potvrđeno</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-yellow-900/20" />Na čekanju</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-red-900/20" />Blokirano</span>
        </div>
      </div>
      <div className="bg-[#18181B] border border-white/6 rounded-sm p-5">
        {!selectedDate ? <div className="h-full flex items-center justify-center text-white/25 text-sm text-center min-h-32">Klikni na dan za detalje</div> : (
          <>
            <h3 className="font-serif text-base font-medium text-white mb-4">{new Date(selectedDate + 'T00:00:00').toLocaleDateString('sr-RS', { weekday: 'long', day: 'numeric', month: 'long' })}</h3>
            {selectedBookings.length === 0 && !selectedBlocked && <p className="text-sm text-white/30 mb-4">Nema rezervacija.</p>}
            {selectedBookings.map(b => (
              <div key={b.booking_number} className="mb-3 p-3 bg-white/4 rounded-sm border border-white/6">
                <p className="text-sm font-semibold text-white">{b.guest_name}</p>
                <p className="text-xs text-white/40 mt-0.5">{getPkgName(b.packages)} · {b.num_guests} gosta</p>
                <span className={`mt-2 inline-block text-[10px] font-semibold uppercase px-2 py-0.5 rounded-sm ${b.status === 'confirmed' ? 'bg-green-500/15 text-green-400' : 'bg-yellow-500/15 text-yellow-400'}`}>{b.status === 'confirmed' ? 'Potvrđena' : 'Na čekanju'}</span>
              </div>
            ))}
            <button onClick={() => toggleBlock(selectedDate)} disabled={blockLoading === selectedDate}
              className={`mt-3 w-full h-9 text-xs font-semibold uppercase tracking-wide rounded-sm border transition-colors ${selectedBlocked ? 'border-green-500/30 text-green-400 hover:bg-green-500/10' : 'border-red-500/30 text-red-400 hover:bg-red-500/10'}`}>
              {blockLoading === selectedDate ? '...' : selectedBlocked ? '🔓 Odblokirati datum' : '🔒 Blokirati datum'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
