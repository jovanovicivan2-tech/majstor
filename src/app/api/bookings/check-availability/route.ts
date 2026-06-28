import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { availabilitySchema } from '@/lib/utils/validation';
import type { AvailabilityMap, DateAvailability } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const parsed = availabilitySchema.safeParse({ year: parseInt(searchParams.get('year') || '0'), month: parseInt(searchParams.get('month') || '0') });
    if (!parsed.success) return NextResponse.json({ success: false, error: 'Invalid params' }, { status: 400 });
    const { year, month } = parsed.data;
    const supabase = createAdminClient();
    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const endDate = new Date(year, month, 0).toISOString().split('T')[0];
    const [{ data: bookings }, { data: blocked }] = await Promise.all([
      supabase.from('bookings').select('date').gte('date', startDate).lte('date', endDate).in('status', ['pending', 'confirmed']),
      supabase.from('blocked_dates').select('date').gte('date', startDate).lte('date', endDate),
    ]);
    const availability: AvailabilityMap = {};
    const bookedDates = new Set(bookings?.map((b) => b.date) || []);
    const blockedDates = new Set(blocked?.map((b) => b.date) || []);
    const daysInMonth = new Date(year, month, 0).getDate();
    const today = new Date(); today.setHours(0, 0, 0, 0);
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const date = new Date(dateStr);
      let status: DateAvailability = 'available';
      if (date < today) status = 'blocked';
      else if (blockedDates.has(dateStr)) status = 'blocked';
      else if (bookedDates.has(dateStr)) status = 'booked';
      availability[dateStr] = status;
    }
    return NextResponse.json({ success: true, data: availability });
  } catch (error) {
    console.error('check-availability error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
