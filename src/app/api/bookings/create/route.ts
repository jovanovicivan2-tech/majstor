import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { bookingSchema } from '@/lib/utils/validation';
import { ADDON_PRICES_RSD } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ success: false, error: parsed.error.issues[0].message }, { status: 400 });
    const data = parsed.data;
    const supabase = createAdminClient();

    const { data: existing } = await supabase.from('bookings').select('id').eq('date', data.date).in('status', ['pending', 'confirmed']).single();
    if (existing) return NextResponse.json({ success: false, error: 'Datum nije dostupan.' }, { status: 409 });

    const { data: blocked } = await supabase.from('blocked_dates').select('id').eq('date', data.date).single();
    if (blocked) return NextResponse.json({ success: false, error: 'Datum je blokiran.' }, { status: 409 });

    const { data: pkg } = await supabase.from('packages').select('*').eq('id', data.package_id).eq('is_active', true).single();
    if (!pkg) return NextResponse.json({ success: false, error: 'Paket nije pronađen.' }, { status: 404 });

    let totalRsd = pkg.base_price_rsd;
    if (pkg.price_per_person_rsd) totalRsd += pkg.price_per_person_rsd * data.num_guests;
    totalRsd += (data.options.konobar ? ADDON_PRICES_RSD.konobar : 0) + (data.options.dekoracija ? ADDON_PRICES_RSD.dekoracija : 0) + (data.options.torta ? ADDON_PRICES_RSD.torta : 0);

    const depositRsd = Math.round((totalRsd * pkg.deposit_percentage) / 100);
    const remainingRsd = totalRsd - depositRsd;

    const { data: booking, error } = await supabase.from('bookings').insert({
      package_id: data.package_id, guest_name: data.guest_name, guest_email: data.guest_email,
      guest_phone: data.guest_phone, guest_note: data.guest_note || null, date: data.date,
      num_guests: data.num_guests, options: data.options, total_price_rsd: totalRsd,
      deposit_rsd: depositRsd, remaining_rsd: remainingRsd, status: 'pending', source: 'website',
    }).select().single();

    if (error || !booking) throw new Error('Failed to create booking');
    return NextResponse.json({ success: true, data: { booking_id: booking.id, booking_number: booking.booking_number, deposit_rsd: depositRsd } });
  } catch (error) {
    console.error('create booking error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
