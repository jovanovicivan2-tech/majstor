'use client';
import { useState } from 'react';
import { useBooking } from './BookingContext';
import { ADDON_PRICES_RSD } from '@/types';
import type { Package } from '@/types';

function formatPrice(rsd: number) { return new Intl.NumberFormat('sr-RS').format(rsd); }

export default function Step5Summary({ packages, onBack }: { packages: Package[]; onBack: () => void }) {
  const { data } = useBooking();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const pkg = packages.find(p => p.id === data.package_id);
  const addonsTotal = (data.addons.konobar ? ADDON_PRICES_RSD.konobar : 0) + (data.addons.dekoracija ? ADDON_PRICES_RSD.dekoracija : 0) + (data.addons.torta ? ADDON_PRICES_RSD.torta : 0);
  const total = (pkg?.base_price_rsd ?? 0) + (pkg?.price_per_person_rsd ? pkg.price_per_person_rsd * data.num_guests : 0) + addonsTotal;
  const deposit = Math.round(total * (pkg?.deposit_percentage ?? 30) / 100);
  const remaining = total - deposit;
  const activeAddons = Object.entries(data.addons).filter(([, v]) => v).map(([k]) => ({ konobar: 'Konobar servis', dekoracija: 'Dekoracija', torta: 'Torta' }[k] || k));

  const handlePay = async () => {
    setLoading(true); setError('');
    try {
      const bookingRes = await fetch('/api/bookings/create', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ package_id: data.package_id, date: data.date, num_guests: data.num_guests, options: data.addons, guest_name: data.guest_name, guest_email: data.guest_email, guest_phone: data.guest_phone, guest_note: data.guest_note || undefined }) });
      const bookingJson = await bookingRes.json();
      if (!bookingJson.success) throw new Error(bookingJson.error || 'Greška pri rezervaciji');
      const stripeRes = await fetch('/api/stripe/create-session', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ booking_id: bookingJson.data.booking_id }) });
      const stripeJson = await stripeRes.json();
      if (!stripeJson.success) throw new Error(stripeJson.error || 'Greška pri plaćanju');
      window.location.href = stripeJson.data.url;
    } catch (e) { setError(e instanceof Error ? e.message : 'Greška. Pokušajte ponovo.'); setLoading(false); }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="px-5 py-6 flex-1 overflow-y-auto">
        <h2 className="font-serif text-2xl font-medium text-[#1C1C1E] mb-6">Pregled rezervacije</h2>
        <div className="space-y-1 mb-6">
          {[
            { icon: '📅', label: 'Datum', value: data.date ? new Date(data.date + 'T00:00:00').toLocaleDateString('sr-RS', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : '—' },
            { icon: '🎁', label: 'Paket', value: pkg?.name_sr ?? '—' },
            { icon: '👥', label: 'Gosti', value: `${data.num_guests} osoba` },
            ...(activeAddons.length > 0 ? [{ icon: '✨', label: 'Dodaci', value: activeAddons.join(', ') }] : []),
          ].map(row => (
            <div key={row.label} className="flex items-start gap-3 py-2 border-b border-[#EDE8E0]">
              <span className="text-base mt-0.5">{row.icon}</span>
              <span className="text-sm text-[#8A7E72] w-20 flex-shrink-0">{row.label}</span>
              <span className="text-sm font-medium text-[#1C1C1E] flex-1">{row.value}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#EDE8E0] rounded-sm p-4 mb-6 space-y-2">
          <div className="flex justify-between font-semibold text-[#1C1C1E]"><span>Ukupno</span><span>{formatPrice(total)} RSD</span></div>
          <div className="flex justify-between text-sm text-[#5C1A2E] font-semibold"><span>Depozit sada (30%)</span><span>{formatPrice(deposit)} RSD</span></div>
          <div className="flex justify-between text-sm text-[#8A7E72]"><span>Na mestu</span><span>{formatPrice(remaining)} RSD</span></div>
        </div>
        <div className="bg-white border border-[#EDE8E0] rounded-sm p-4 space-y-1 mb-6">
          {[{icon:'👤',value:data.guest_name},{icon:'📧',value:data.guest_email},{icon:'📱',value:data.guest_phone}].map(r => <p key={r.icon} className="text-sm text-[#1C1C1E] flex items-center gap-2"><span>{r.icon}</span>{r.value}</p>)}
        </div>
        <div className="text-xs text-[#8A7E72] leading-relaxed mb-2 bg-[#EDE8E0] rounded-sm p-3"><strong className="text-[#1C1C1E]">Politika otkazivanja:</strong> Više od 14 dana — pun povraćaj. 7–14 dana — 50%. Manje od 7 dana — bez povraćaja.</div>
        {error && <p className="text-sm text-[#C1121F] bg-red-50 border border-red-200 rounded-sm px-3 py-2">{error}</p>}
      </div>
      <div className="px-5 pb-6 pt-4 border-t border-[#EDE8E0]">
        <button onClick={handlePay} disabled={loading} className="w-full h-[56px] bg-[#5C1A2E] text-white font-semibold tracking-[0.06em] uppercase rounded-sm hover:bg-[#7A2440] transition-colors disabled:opacity-60 flex items-center justify-center gap-2 mb-3">
          {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Učitavam...</> : <>💳 Plati depozit {formatPrice(deposit)} RSD</>}
        </button>
        <div className="flex items-center justify-center gap-1.5 text-xs text-[#8A7E72]"><span>🔒</span> Sigurno plaćanje · Stripe</div>
        <button onClick={onBack} className="w-full mt-3 h-[44px] text-sm text-[#8A7E72] hover:text-[#1C1C1E] transition-colors">← Izmeni rezervaciju</button>
      </div>
    </div>
  );
}
