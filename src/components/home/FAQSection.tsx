'use client';
import { useState } from 'react';

const FAQ = [
  {
    q: 'Koliko gostiju prostor prima?',
    a: 'Prostor je idealan za grupe do 50 gostiju. Za manja, kamernija druženja jednako je prijatan — javite nam broj gostiju pa predlažemo najbolji program.',
  },
  {
    q: 'Mogu li gosti sami da prave picu?',
    a: 'Da. U programu Pizza Experience, ko poželi, uz majstora na jednoj peći mesi i razvlači svoju picu — dok drugi majstor punim kapacitetom peče za sve goste. Učenje i uživanje, bez žurbe.',
  },
  {
    q: 'Kako se rezerviše termin?',
    a: 'Kroz online rezervaciju ili upit — javljamo se istog dana sa potvrdom dostupnosti. Termin se potvrđuje depozitom, a ostatak se izmiruje na licu mesta.',
  },
  {
    q: 'Gde se nalazite i kako se dolazi?',
    a: 'Na imanju u Vrdniku, u srcu Fruške Gore — svega 40 minuta od Novog Sada. Prilaz je preko Grobljanske ulice, uz besplatan parking na imanju.',
  },
  {
    q: 'Šta je uključeno u cenu?',
    a: 'Zavisi od programa — od ekskluzivnog korišćenja prostora i bazena, preko radionice pice sa majstorima, do potpune usluge sa konobarima i dekoracijom. Sve je jasno navedeno uz svaki program.',
  },
  {
    q: 'Da li je prostor samo naš?',
    a: 'Uvek. Rezervacijom dobijate ceo prostor isključivo za sebe i svoje goste — bez stranih lica, vaš dan i vaš ritam.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ background: '#F7F2EA' }} className="py-16 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-10">
        <div className="md:text-center mb-10 md:mb-14">
          <p className="eyebrow md:eyebrow--center md:justify-center">Česta pitanja</p>
          <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-2xl)', color: '#1C1C1E', lineHeight: 1.05 }}>
            Sve što vas zanima
          </h2>
        </div>

        <div>
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} style={{ borderBottom: '1px solid rgba(138,126,114,0.22)' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  style={{ padding: '22px 0', background: 'transparent', border: 'none', cursor: 'pointer' }}
                  aria-expanded={isOpen}
                >
                  <span className="font-display" style={{ fontSize: 'clamp(18px, 4vw, 22px)', color: '#1C1C1E', fontWeight: 500, lineHeight: 1.25 }}>
                    {item.q}
                  </span>
                  <span
                    className="inline-flex items-center justify-center shrink-0"
                    style={{ width: 30, height: 30, borderRadius: 999, border: '1px solid rgba(92,26,46,0.3)', color: '#5C1A2E', transition: 'transform 0.35s var(--ease-premium), background 0.3s', transform: isOpen ? 'rotate(45deg)' : 'none', background: isOpen ? 'rgba(92,26,46,0.06)' : 'transparent' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </button>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.4s var(--ease-premium)',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{ fontSize: 15.5, color: '#8A7E72', lineHeight: 1.7, paddingBottom: 24, maxWidth: 620 }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
