'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookingActions({
  bookingId, currentStatus, guestPhone,
}: { bookingId: string; currentStatus: string; guestPhone: string; }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const updateStatus = async (status: string) => {
    if (!confirm(`Promeniti status na "${status}"?`)) return;
    setLoading(true);
    await fetch('/api/admin/bookings', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: bookingId, status }),
    });
    router.refresh();
    setLoading(false);
  };

  return (
    <div className="flex items-center gap-1.5">
      <a href={`tel:${guestPhone}`}
        className="h-7 w-7 flex items-center justify-center rounded-sm bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors text-sm"
        title="Pozovi gosta">📞</a>
      {currentStatus === 'pending' && (
        <button onClick={() => updateStatus('confirmed')} disabled={loading}
          className="h-7 px-2 text-[10px] font-semibold uppercase tracking-wide rounded-sm bg-green-500/15 text-green-400 hover:bg-green-500/25 transition-colors disabled:opacity-50"
          title="Potvrdi rezervaciju">✓ Potvrdi</button>
      )}
      {(currentStatus === 'pending' || currentStatus === 'confirmed') && (
        <button onClick={() => updateStatus('cancelled')} disabled={loading}
          className="h-7 px-2 text-[10px] font-semibold uppercase tracking-wide rounded-sm bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors disabled:opacity-50"
          title="Otkaži">✗ Otkaži</button>
      )}
      {currentStatus === 'confirmed' && (
        <button onClick={() => updateStatus('completed')} disabled={loading}
          className="h-7 px-2 text-[10px] font-semibold uppercase tracking-wide rounded-sm bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors disabled:opacity-50"
          title="Završeno">✓ Završeno</button>
      )}
    </div>
  );
}
