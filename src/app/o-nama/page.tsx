import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
  title: 'O nama',
  description: 'Napolitana Lab Vrdnik — radionica napolitanske pice na Fruškoj Gori, u saradnji sa picerijom Majstor i Margarita.',
};

const VREDNOSTI = [
  { icon: 'M2 12c2.5-3 6-5 10-5s7.5 2 10 5M12 7v0M7 9.5l1 2.5M17 9.5l-1 2.5M10 11l.5 2M14 11l-.5 2', title: 'Pravi majstori', desc: 'Radionicu vode majstori picerije Majstor i Margarita. Umeće iz prve ruke, bez improvizacije.' },
  { icon: 'M12 3c1.5 2.5 3 4 3 6.5a3 3 0 0 1-6 0c0-1 .4-1.8 1-2.5M12 21a6 6 0 0 0 6-6c0-3-2-5.5-6-9-4 3.5-6 6-6 9a6 6 0 0 0 6 6Z', title: 'Napolitana', desc: 'Autentična tehnika — testo mešeno rukom i pečeno na vatri krušne peći.' },
  { icon: 'M3 16c1.5 0 1.5 1.2 3 1.2s1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2M3 20c1.5 0 1.5 1.2 3 1.2s1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2M7 13V6a2 2 0 0 1 4 0M9 10h6', title: 'Uz bazen', desc: 'Sve se odvija na imanju s bazenom — učenje i uživanje na istom mestu.' },
  { icon: 'M12 22V12M12 12c0-3 2-6 6-7-0.5 4-2.5 6-6 7ZM12 14c0-2.5-1.7-5-5-5.5.4 3.3 2 5 5 5.5Z', title: 'Priroda', desc: 'Mir, zelenilo i pogled na ravnicu — daleko od gradske gužve, a nadohvat ruke.' },
];

export default function ONamaPage() {
  return (
    <>
      <Navbar />
      <PageHero eyebrow="O nama" title={<>Naša priča</>} image="/images/terrace_sunset.jpg" />

      {/* Editorial priča + slika */}
      <section style={{ background: '#F7F2EA' }} className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="eyebrow">Napolitana Lab</p>
            <p className="font-display mt-5" style={{ fontSize: 'var(--text-d-lg)', color: '#1C1C1E', lineHeight: 1.25, fontWeight: 400, marginBottom: 24 }}>
              Radionica prave napolitanske pice na imanju u srcu Fruške Gore, kod Vrdnika.
            </p>
            <p style={{ fontSize: 16, color: '#8A7E72', lineHeight: 1.7, marginBottom: 18 }}>
              Ideja je jednostavna — spojiti vrhunsko umeće pice sa mirom netaknute prirode. Veštinu i tradiciju donose majstori beogradske picerije{' '}
              <strong style={{ color: '#5C1A2E', fontWeight: 600 }}>Majstor i Margarita</strong>; mi dajemo prostor, vatru i bazen.
            </p>
            <p style={{ fontSize: 16, color: '#8A7E72', lineHeight: 1.7 }}>
              Bilo da je reč o učenju zanata, proslavi ili okupljanju tima — ovde pica nije samo jelo, već doživljaj koji ostaje.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lift" style={{ aspectRatio: '4/5' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/lavender.jpg" alt="Lavanda u cvatu na imanju — Fruška Gora" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Vrednosti */}
      <section style={{ background: '#fff' }} className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="md:text-center md:max-w-2xl md:mx-auto mb-12 md:mb-16">
            <p className="eyebrow md:eyebrow--center md:justify-center">Vrednosti</p>
            <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-2xl)', color: '#1C1C1E', lineHeight: 1.05 }}>
              Šta nas čini posebnim
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(138,126,114,0.16)', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(138,126,114,0.16)' }}>
            {VREDNOSTI.map((v) => (
              <div key={v.title} className="text-center" style={{ background: '#F7F2EA', padding: '36px 22px' }}>
                <span className="inline-flex items-center justify-center mb-4" style={{ width: 52, height: 52, borderRadius: 999, background: 'rgba(201,168,76,0.12)' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={v.icon} /></svg>
                </span>
                <h3 className="font-display" style={{ fontWeight: 600, color: '#1C1C1E', marginBottom: 8, fontSize: 19 }}>{v.title}</h3>
                <p style={{ fontSize: 13.5, color: '#8A7E72', lineHeight: 1.55 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
