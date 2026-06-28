'use client';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function KontaktForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const update = (k: keyof typeof form, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('loading');
    try {
      const res = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, inquiry_type: 'general' }) });
      const json = await res.json();
      if (json.success) { setStatus('success'); setForm({ name: '', email: '', phone: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  if (status === 'success') return (
    <div className="p-8 bg-[#2D6A4F]/10 border border-[#2D6A4F]/30 rounded-lg text-center flex flex-col items-center">
      <span className="inline-flex items-center justify-center mb-4" style={{ width: 56, height: 56, borderRadius: 999, background: 'rgba(45,106,79,0.15)' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
      </span>
      <p className="font-display text-xl text-[#1C1C1E]">Poruka poslata!</p>
      <p className="text-sm text-[#8A7E72] mt-1">Javićemo vam se u roku od 24h.</p>
    </div>
  );

  const labelCls = "block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8A7E72] mb-2";
  const inputCls = "w-full h-[52px] px-4 border-[1.5px] border-[#D5CDC3] rounded-sm bg-white text-[#1C1C1E] placeholder:text-[#8A7E72]/50 focus:outline-none focus:border-[#5C1A2E] focus:shadow-[0_0_0_3px_rgba(92,26,46,0.08)] transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div><label className={labelCls}>Ime i prezime <span className="text-[#C1121F]">*</span></label><input type="text" value={form.name} onChange={e => update('name', e.target.value)} required placeholder="Petar Petrović" className={inputCls} /></div>
      <div><label className={labelCls}>Email <span className="text-[#C1121F]">*</span></label><input type="email" value={form.email} onChange={e => update('email', e.target.value)} required placeholder="petar@email.com" className={inputCls} /></div>
      <div><label className={labelCls}>Telefon</label><input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+381 60 123 4567" className={inputCls} /></div>
      <div><label className={labelCls}>Poruka <span className="text-[#C1121F]">*</span></label><textarea value={form.message} onChange={e => update('message', e.target.value)} required rows={4} placeholder="Opišite šta vas zanima — broj gostiju, željeni datum, tip događaja..." className="w-full px-4 py-3 border-[1.5px] border-[#D5CDC3] rounded-sm bg-white text-[#1C1C1E] placeholder:text-[#8A7E72]/50 focus:outline-none focus:border-[#5C1A2E] focus:shadow-[0_0_0_3px_rgba(92,26,46,0.08)] transition-all resize-none text-base" /></div>
      {status === 'error' && <p className="text-sm text-[#C1121F] bg-red-50 border border-red-200 rounded-sm px-3 py-2">Greška. Pokušajte ponovo ili nas direktno pozovite.</p>}
      <button type="submit" disabled={status === 'loading'} className="w-full h-[52px] bg-[#5C1A2E] text-white text-sm font-semibold tracking-[0.08em] uppercase rounded-sm hover:bg-[#7A2440] transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
        {status === 'loading' ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Slanje...</> : 'Pošalji poruku →'}
      </button>
    </form>
  );
}
