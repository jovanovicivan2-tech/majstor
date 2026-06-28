import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import AdminSidebar from '@/components/admin/AdminSidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Dashboard' };

function StatCard({ label, value, sub, color = 'wine' }: { label: string; value: string | number; sub?: string; color?: string }) {
  const accent = color === 'gold' ? '#C9A84C' : color === 'green' ? '#2D6A4F' : '#5C1A2E';
  return (
    <div className="bg-[#18181B] border border-white/6 rounded-sm p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40 mb-2">{label}</p>
      <p className="font-serif text-3xl font-medium" style={{ color: accent }}>{value}</p>
      {sub && <p className="text-xs text-white/30 mt-1">{sub}</p>}
    </div>
  );
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');

  const admin = createAdminClient();
  const firstOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];

  const [
    { count: totalBookings },
    { count: thisMonthBookings },
    { count: pendingBookings },
    { data: revenueData },
    { data: recentBookings },
  ] = await Promise.all([
    admin.from('bookings').select('*', { count: 'exact', head: true }).in('status', ['confirmed', 'completed']),
    admin.from('bookings').select('*', { count: 'exact', head: true }).gte('created_at', firstOfMonth).in('status', ['confirmed', 'completed']),
    admin.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
    admin.from('bookings').select('total_price_rsd').gte('created_at', firstOfMonth).in('status', ['confirmed', 'completed']),
    admin.from('bookings').select('*, packages(name_sr)').order('created_at', { ascending: false }).limit(5),
  ]);

  const monthRevenue = (revenueData || []).reduce((sum: number, b: { total_price_rsd: number }) => sum + b.total_price_rsd, 0);
  const formatPrice = (rsd: number) => new Intl.NumberFormat('sr-RS').format(rsd) + ' RSD';
  const formatDate = (d: string) => new Date(d).toLocaleDateString('sr-RS', { day: 'numeric', month: 'short' });
  const statusLabel: Record<string, string> = { pending: '⏳ Na čekanju', confirmed: '✅ Potvrđena', cancelled: '❌ Otkazana', completed: '🏁 Završena', no_show: '👻 No-show' };
  const statusColor: Record<string, string> = { pending: 'text-yellow-400', confirmed: 'text-green-400', cancelled: 'text-red-400', completed: 'text-blue-400', no_show: 'text-white/30' };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 px-6 py-8 overflow-y-auto">
        <div className="mb-8">
          <h1 className="font-serif text-2xl font-medium text-white mb-1">Dashboard</h1>
          <p className="text-sm text-white/40">{new Date().toLocaleDateString('sr-RS', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard label="Ukupno rezervacija" value={totalBookings ?? 0} sub="Potvrđene + završene" />
          <StatCard label="Ovaj mesec" value={thisMonthBookings ?? 0} sub="Potvrđene rezervacije" color="gold" />
          <StatCard label="Na čekanju" value={pendingBookings ?? 0} sub="Čeka uplatu depozita" />
          <StatCard label="Prihod (mesec)" value={formatPrice(monthRevenue)} sub="Ukupna vrednost" color="green" />
        </div>
        <div className="bg-[#18181B] border border-white/6 rounded-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-white/6 flex items-center justify-between">
            <h2 className="font-semibold text-white">Poslednje rezervacije</h2>
            <a href="/admin/rezervacije" className="text-xs text-[#C9A84C] hover:text-[#C9A84C]/70 transition-colors">Sve rezervacije →</a>
          </div>
          {!recentBookings || recentBookings.length === 0 ? (
            <div className="px-5 py-12 text-center text-white/30 text-sm">Nema rezervacija još uvek.</div>
          ) : (
            <div className="divide-y divide-white/4">
              {recentBookings.map((b: any) => (
                <div key={b.id} className="px-5 py-3.5 flex items-center gap-4 hover:bg-white/2 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{b.guest_name}</p>
                    <p className="text-xs text-white/40 mt-0.5">{b.booking_number} · {b.packages?.name_sr} · {b.num_guests} gosta</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-semibold text-[#C9A84C]">{formatDate(b.date)}</p>
                    <p className={`text-xs mt-0.5 ${statusColor[b.status] || 'text-white/40'}`}>{statusLabel[b.status] || b.status}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
