import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import AdminSidebar from '@/components/admin/AdminSidebar';
import BookingActions from '@/components/admin/BookingActions';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Rezervacije' };

const STATUS_LABELS: Record<string, string> = { pending: 'Na čekanju', confirmed: 'Potvrđena', cancelled: 'Otkazana', completed: 'Završena', no_show: 'No-show' };
const STATUS_COLORS: Record<string, string> = { pending: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20', confirmed: 'bg-green-500/15 text-green-400 border-green-500/20', cancelled: 'bg-red-500/15 text-red-400 border-red-500/20', completed: 'bg-blue-500/15 text-blue-400 border-blue-500/20', no_show: 'bg-white/5 text-white/30 border-white/10' };

export default async function RezervacijePage({ searchParams }: { searchParams: Promise<{ status?: string; q?: string }> }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');

  const { status, q } = await searchParams;
  const admin = createAdminClient();
  let query = admin.from('bookings').select('*, packages(name_sr)').order('date', { ascending: false });
  if (status && status !== 'all') query = query.eq('status', status);
  if (q) query = query.or(`guest_name.ilike.%${q}%,guest_email.ilike.%${q}%,booking_number.ilike.%${q}%`);
  const { data: bookings } = await query;

  const formatPrice = (rsd: number) => new Intl.NumberFormat('sr-RS').format(rsd);
  const formatDate = (d: string) => new Date(d + 'T00:00:00').toLocaleDateString('sr-RS', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 px-6 py-8 overflow-y-auto">
        <div className="mb-6">
          <h1 className="font-serif text-2xl font-medium text-white mb-1">Rezervacije</h1>
          <p className="text-sm text-white/40">{bookings?.length ?? 0} ukupno</p>
        </div>
        <div className="flex gap-3 mb-6 flex-wrap">
          {[{ value: 'all', label: 'Sve' }, { value: 'pending', label: '⏳ Na čekanju' }, { value: 'confirmed', label: '✅ Potvrđene' }, { value: 'completed', label: '🏁 Završene' }, { value: 'cancelled', label: '❌ Otkazane' }].map(opt => (
            <a key={opt.value} href={`/admin/rezervacije?status=${opt.value}${q ? `&q=${q}` : ''}`}
              className={`px-3 h-8 flex items-center text-xs font-medium rounded-sm border transition-colors ${(status || 'all') === opt.value ? 'bg-[#5C1A2E] border-[#5C1A2E] text-white' : 'border-white/10 text-white/50 hover:text-white hover:border-white/20'}`}>{opt.label}</a>
          ))}
          <form method="get" action="/admin/rezervacije" className="ml-auto">
            {status && <input type="hidden" name="status" value={status} />}
            <input name="q" defaultValue={q} placeholder="Pretraži..." className="h-8 px-3 text-xs bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/20" />
          </form>
        </div>
        <div className="bg-[#18181B] border border-white/6 rounded-sm overflow-hidden">
          {!bookings || bookings.length === 0 ? (
            <div className="px-5 py-16 text-center text-white/30 text-sm">Nema rezervacija za odabrani filter.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/6">
                    {['Broj', 'Gost', 'Datum', 'Paket', 'Gosti', 'Iznos', 'Status', 'Akcije'].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/4">
                  {bookings.map((b: any) => (
                    <tr key={b.id} className="hover:bg-white/2 transition-colors">
                      <td className="px-4 py-3 font-mono text-xs text-white/50">{b.booking_number}</td>
                      <td className="px-4 py-3"><p className="font-medium text-white">{b.guest_name}</p><p className="text-xs text-white/35 mt-0.5">{b.guest_email}</p></td>
                      <td className="px-4 py-3 text-white/70 whitespace-nowrap">{formatDate(b.date)}</td>
                      <td className="px-4 py-3 text-white/70">{b.packages?.name_sr ?? '—'}</td>
                      <td className="px-4 py-3 text-white/70 text-center">{b.num_guests}</td>
                      <td className="px-4 py-3 whitespace-nowrap"><p className="font-semibold text-[#C9A84C]">{formatPrice(b.total_price_rsd)} RSD</p><p className="text-xs text-white/35 mt-0.5">dep. {formatPrice(b.deposit_rsd)}</p></td>
                      <td className="px-4 py-3"><span className={`inline-flex items-center px-2 h-5 text-[10px] font-semibold uppercase tracking-wide rounded-sm border ${STATUS_COLORS[b.status] || 'bg-white/5 text-white/30 border-white/10'}`}>{STATUS_LABELS[b.status] || b.status}</span></td>
                      <td className="px-4 py-3"><BookingActions bookingId={b.id} currentStatus={b.status} guestPhone={b.guest_phone} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
