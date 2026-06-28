import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe/client';
import { createAdminClient } from '@/lib/supabase/admin';
import { guestConfirmationEmail, adminNotificationEmail } from '@/lib/resend/templates';
import { Resend } from 'resend';
import Stripe from 'stripe';

async function sendEmails(bookingId: string) {
  try {
    const supabase = createAdminClient();
    const { data: booking } = await supabase.from('bookings').select('*, packages(name_sr)').eq('id', bookingId).single();
    if (!booking || !process.env.RESEND_API_KEY) return;
    const emailData = {
      booking_number: booking.booking_number, guest_name: booking.guest_name,
      guest_email: booking.guest_email, date: booking.date,
      package_name: booking.packages?.name_sr ?? 'Paket', num_guests: booking.num_guests,
      addons: Object.entries(booking.options || {}).filter(([, v]) => v).map(([k]) => ({ konobar: 'Konobar', dekoracija: 'Dekoracija', torta: 'Torta' }[k] || k)),
      total_rsd: booking.total_price_rsd, deposit_rsd: booking.deposit_rsd, remaining_rsd: booking.remaining_rsd,
    };
    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = 'Majstor i Margarita <rezervacije@majstorimargarita.rs>';
    await Promise.allSettled([
      resend.emails.send({ from, to: [booking.guest_email], ...guestConfirmationEmail(emailData) }),
      resend.emails.send({ from, to: [process.env.ADMIN_EMAIL || 'admin@majstorimargarita.rs'], ...adminNotificationEmail(emailData) }),
    ]);
  } catch (e) { console.error('Email error:', e); }
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');
  if (!sig) return NextResponse.json({ error: 'No signature' }, { status: 400 });

  let event: Stripe.Event;
  try { event = getStripe().webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!); }
  catch { return NextResponse.json({ error: 'Invalid signature' }, { status: 400 }); }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const bookingId = session.metadata?.booking_id;
    if (!bookingId) return NextResponse.json({ received: true });
    const supabase = createAdminClient();
    const { data: existing } = await supabase.from('bookings').select('status').eq('id', bookingId).single();
    if (existing?.status === 'confirmed') return NextResponse.json({ received: true });
    await supabase.from('bookings').update({ status: 'confirmed', deposit_paid: true, confirmed_at: new Date().toISOString(), stripe_session_id: session.id, stripe_payment_intent_id: session.payment_intent as string }).eq('id', bookingId);
    await supabase.from('payments').insert({ booking_id: bookingId, stripe_payment_intent_id: session.payment_intent as string, amount_eur_cents: session.amount_total || 0, payment_type: 'deposit', status: 'succeeded', paid_at: new Date().toISOString() });
    await sendEmails(bookingId);
  }
  return NextResponse.json({ received: true });
}
