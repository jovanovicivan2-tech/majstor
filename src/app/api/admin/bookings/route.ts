import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const admin = createAdminClient();
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const limit = parseInt(searchParams.get('limit') || '50');
  let query = admin.from('bookings').select('*, packages(name_sr, slug)').order('date', { ascending: false }).limit(limit);
  if (status && status !== 'all') query = query.eq('status', status);
  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true, data });
}

export async function PATCH(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id, status, cancellation_reason } = await request.json();
  if (!id || !status) return NextResponse.json({ error: 'id and status required' }, { status: 400 });
  const VALID = ['pending', 'confirmed', 'cancelled', 'completed', 'no_show'];
  if (!VALID.includes(status)) return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  const admin = createAdminClient();
  const updates: Record<string, unknown> = { status };
  if (status === 'confirmed') updates.confirmed_at = new Date().toISOString();
  if (status === 'cancelled') { updates.cancelled_at = new Date().toISOString(); if (cancellation_reason) updates.cancellation_reason = cancellation_reason; }
  const { error } = await admin.from('bookings').update(updates).eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
