const INFO = [
  { icon: '📍', label: 'Adresa', value: 'Vrdnik, Fruška Gora' },
  { icon: '🚗', label: 'Od Novog Sada', value: '40 minuta' },
  { icon: '🚗', label: 'Od Beograda', value: '80 minuta' },
  { icon: '🅿️', label: 'Parking', value: 'Besplatan, na imanju' },
];
export default function LocationSection() {
  return (
    <section className="bg-[#EDE8E0] px-5 md:px-10 py-16">
      <div className="max-w-lg">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2.5">Lokacija</p>
        <h2 className="font-serif font-medium text-[#1C1C1E] leading-tight mb-7" style={{ fontSize: 'clamp(28px, 7vw, 40px)' }}>Fruška Gora,<br />nadohvat ruke</h2>
        <div className="space-y-3">
          {INFO.map((item) => (
            <div key={item.label} className="flex items-center gap-4 p-4 bg-white rounded-sm">
              <span className="text-xl w-10 text-center flex-shrink-0">{item.icon}</span>
              <div><p className="text-[11px] uppercase tracking-[0.1em] text-[#8A7E72] mb-0.5">{item.label}</p><p className="text-[15px] font-medium text-[#1C1C1E]">{item.value}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
