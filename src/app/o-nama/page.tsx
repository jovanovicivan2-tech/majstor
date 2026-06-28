import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'O nama',
  description: 'Napolitana Lab Vrdnik — radionica napolitanske pice na Fruškoj Gori, u saradnji sa picerijom Majstor i Margarita.',
};

const VREDNOSTI = [
  { icon: 'M2 12c2.5-3 6-5 10-5s7.5 2 10 5M12 7v0M7 9.5l1 2.5M17 9.5l-1 2.5M10 11l.5 2M14 11l-.5 2', title: 'Pravi majstori', desc: 'Obuku vode pizza majstori iz picerije Majstor i Margarita. Znanje iz prve ruke, ne improvizacija.' },
  { icon: 'M12 3c1.5 2.5 3 4 3 6.5a3 3 0 0 1-6 0c0-1 .4-1.8 1-2.5M12 21a6 6 0 0 0 6-6c0-3-2-5.5-6-9-4 3.5-6 6-6 9a6 6 0 0 0 6 6Z', title: 'Napolitana', desc: 'Učimo autentičnu tehniku — razvlačenje rukom, pravo testo, pečenje u pravoj peći.' },
  { icon: 'M3 16c1.5 0 1.5 1.2 3 1.2s1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2M3 20c1.5 0 1.5 1.2 3 1.2s1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2M7 13V6a2 2 0 0 1 4 0M9 10h6', title: 'Uz bazen', desc: 'Sve se dešava na prelepom imanju s bazenom na Fruškoj Gori. Učenje i uživanje na istom mestu.' },
  { icon: 'M12 22V12M12 12c0-3 2-6 6-7-0.5 4-2.5 6-6 7ZM12 14c0-2.5-1.7-5-5-5.5.4 3.3 2 5 5 5.5Z', title: 'Priroda', desc: 'Mir, zelenilo i pogled na ravnicu — daleko od gradske gužve, a nadohvat ruke.' },
];

export default function ONamaPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <div style={{ background: '#1C1C1E', minHeight: '192px', display: 'flex', alignItems: 'flex-end', padding: '0 20px 32px' }}>
          <div><p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '8px' }}>O nama</p>
          <h1 className="font-serif" style={{ color: 'white', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 500 }}>Naša priča</h1></div>
        </div>
        <div style={{ background: '#F7F2EA', padding: '64px 20px' }}>
          <div style={{ maxWidth: '560px' }}>
            <p className="font-serif" style={{ fontSize: 'clamp(18px, 4vw, 22px)', color: '#1C1C1E', lineHeight: 1.6, marginBottom: '24px' }}>
              Napolitana Lab je radionica prave napolitanske pice na imanju u srcu Fruške Gore, kod Vrdnika.
            </p>
            <p style={{ fontSize: '15px', color: '#8A7E72', lineHeight: 1.7, marginBottom: '20px' }}>
              Ideja je jednostavna: spojiti vrhunsko znanje o pici sa prelepim prostorom u prirodi. Zato radionice vode pizza majstori iz beogradske picerije <strong style={{ color: '#5C1A2E', fontWeight: 600 }}>Majstor i Margarita</strong> — oni donose veštinu i tradiciju, a mi prostor, bazen i atmosferu.
            </p>
            <p style={{ fontSize: '15px', color: '#8A7E72', lineHeight: 1.7 }}>
              Bilo da želite da naučite zanat, proslavite rođendan ili okupite tim — kod nas pica nije samo jelo, već doživljaj koji se pamti.
            </p>
          </div>
        </div>
        <div style={{ background: 'white', padding: '64px 20px' }}>
          <h2 className="font-serif" style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 500, color: '#1C1C1E', marginBottom: '40px' }}>Šta nas čini posebnim</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {VREDNOSTI.map((v) => (
              <div key={v.title} className="card-hover" style={{ padding: '22px', background: '#F7F2EA', borderRadius: '4px', boxShadow: '0 2px 8px rgba(28,28,30,0.03)' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', marginBottom: '14px' }} aria-hidden="true"><path d={v.icon} /></svg>
                <h3 style={{ fontWeight: 600, color: '#1C1C1E', marginBottom: '6px', fontSize: 15 }}>{v.title}</h3>
                <p style={{ fontSize: '13px', color: '#8A7E72', lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
