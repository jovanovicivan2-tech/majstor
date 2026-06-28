'use client';
import { useBooking } from './BookingContext';

function Field({ label, name, type = 'text', placeholder, value, onChange, required }: { label: string; name: string; type?: string; placeholder?: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8A7E72] mb-2">
        {label}{required && <span className="text-[#C1121F] ml-0.5">*</span>}
      </label>
      <input id={name} name={name} type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} required={required}
        className="w-full h-[52px] px-4 border-[1.5px] border-[#D5CDC3] rounded-sm bg-white text-[#1C1C1E] placeholder:text-[#8A7E72]/50 focus:outline-none focus:border-[#5C1A2E] focus:shadow-[0_0_0_3px_rgba(92,26,46,0.1)] transition-all" />
    </div>
  );
}

export default function Step4Details({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const { data, update } = useBooking();
  const isValid = data.guest_name.trim().length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.guest_email) && data.guest_phone.trim().length >= 6;
  return (
    <div className="flex-1 flex flex-col">
      <div className="px-5 py-6 flex-1 overflow-y-auto">
        <h2 className="font-serif text-2xl font-medium text-[#1C1C1E] mb-6">Tvoji podaci</h2>
        <div className="space-y-5">
          <Field label="Ime i prezime" name="guest_name" placeholder="Petar Petrović" value={data.guest_name} onChange={v => update({ guest_name: v })} required />
          <Field label="Email" name="guest_email" type="email" placeholder="petar@email.com" value={data.guest_email} onChange={v => update({ guest_email: v })} required />
          <Field label="Telefon" name="guest_phone" type="tel" placeholder="+381 60 123 4567" value={data.guest_phone} onChange={v => update({ guest_phone: v })} required />
          <div>
            <label htmlFor="guest_note" className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8A7E72] mb-2">Napomena (opciono)</label>
            <textarea id="guest_note" name="guest_note" rows={3} placeholder="Alergije, posebni zahtevi..." value={data.guest_note} onChange={e => update({ guest_note: e.target.value })}
              className="w-full px-4 py-3 border-[1.5px] border-[#D5CDC3] rounded-sm bg-white text-[#1C1C1E] placeholder:text-[#8A7E72]/50 focus:outline-none focus:border-[#5C1A2E] focus:shadow-[0_0_0_3px_rgba(92,26,46,0.1)] transition-all resize-none text-base" />
          </div>
        </div>
      </div>
      <div className="px-5 pb-6 pt-4 border-t border-[#EDE8E0] flex gap-3">
        <button onClick={onBack} className="h-[52px] px-6 text-sm font-medium text-[#8A7E72] hover:text-[#1C1C1E] transition-colors min-w-[80px]">← Nazad</button>
        <button onClick={onNext} disabled={!isValid} className="flex-1 h-[52px] bg-[#5C1A2E] text-white text-sm font-semibold tracking-[0.08em] uppercase rounded-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#7A2440] transition-colors">Dalje →</button>
      </div>
    </div>
  );
}
