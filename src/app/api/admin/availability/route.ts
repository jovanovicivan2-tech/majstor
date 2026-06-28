import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { date, reason } = await request.json();
  if (!date) return NextResponse.json({ error: 'date required' }, { status: 400 });
  const admin = createAdminClient();
  const { error } = await admin.from('blocked_dates').upsert({ date, reason });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { date } = await request.json();
  if (!date) return NextResponse.json({ error: 'date required' }, { status: 400 });
  const admin = createAdminClient();
  const { error } = await admin.from('blocked_dates').delete().eq('date', date);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
