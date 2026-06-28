import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { inquirySchema } from '@/lib/utils/validation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ success: false, error: parsed.error.issues[0].message }, { status: 400 });
    const supabase = createAdminClient();
    const { error } = await supabase.from('inquiries').insert({
      name: parsed.data.name, email: parsed.data.email, phone: parsed.data.phone || null,
      inquiry_type: parsed.data.inquiry_type, message: parsed.data.message,
    });
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('inquiry error:', e);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
