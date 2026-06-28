import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminKalendar from '@/components/admin/AdminKalendar';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Kalendar' };

export default async function KalendarPage({ searchParams }: { searchParams: Promise<{ year?: string; month?: string }> }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');

  const sp = await searchParams;
  const now = new Date();
  const year = parseInt(sp.year || String(now.getFullYear()));
  const month = parseInt(sp.month || String(now.getMonth() + 1));
  const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
  const endDate = new Date(year, month, 0).toISOString().split('T')[0];

  const admin = createAdminClient();
  const [{ data: bookings }, { data: blocked }] = await Promise.all([
    admin.from('bookings').select('date, status, guest_name, num_guests, booking_number, packages(name_sr)').gte('date', startDate).lte('date', endDate).in('status', ['pending', 'confirmed', 'completed']),
    admin.from('blocked_dates').select('*').gte('date', startDate).lte('date', endDate),
  ]);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 px-6 py-8 overflow-y-auto">
        <div className="mb-6">
          <h1 className="font-serif text-2xl font-medium text-white mb-1">Kalendar</h1>
          <p className="text-sm text-white/40">Pregled i upravljanje terminima</p>
        </div>
        <AdminKalendar year={year} month={month} bookings={bookings || []} blocked={blocked || []} />
      </main>
    </div>
  );
}
