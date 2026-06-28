import { NextRequest, NextResponse } from 'next/server';
import { getStripe, rsdToEurCents } from '@/lib/stripe/client';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(request: NextRequest) {
  try {
    const { booking_id } = await request.json();
    if (!booking_id) return NextResponse.json({ success: false, error: 'booking_id required' }, { status: 400 });
    const supabase = createAdminClient();
    const { data: booking } = await supabase.from('bookings').select('*, packages(name_sr)').eq('id', booking_id).single();
    if (!booking) return NextResponse.json({ success: false, error: 'Booking not found' }, { status: 404 });
    if (booking.status !== 'pending') return NextResponse.json({ success: false, error: 'Booking nije pending' }, { status: 409 });
    const eurCents = rsdToEurCents(booking.deposit_rsd);
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: { name: `Depozit — ${booking.packages?.name_sr || 'Majstor i Margarita'}`, description: `Rezervacija br. ${booking.booking_number}` },
          unit_amount: eurCents,
        },
        quantity: 1,
      }],
      success_url: `${appUrl}/rezervacija/uspeh?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/rezervacija?cancelled=true`,
      metadata: { booking_id: booking.id, booking_number: booking.booking_number },
      customer_email: booking.guest_email,
    });
    return NextResponse.json({ success: true, data: { url: session.url } });
  } catch (error) {
    console.error('stripe create-session error:', error);
    return NextResponse.json({ success: false, error: 'Payment error' }, { status: 500 });
  }
}
