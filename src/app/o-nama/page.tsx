import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'O nama',
  description: 'Napolitana Lab Vrdnik — radionica napolitanske pice na Fruškoj Gori, u saradnji sa picerijom Majstor i Margarita.',
};

const VREDNOSTI = [
  { icon: '🍕', title: 'Pravi majstori', desc: 'Obuku vode pizza majstori iz picerije Majstor i Margarita. Znanje iz prve ruke, ne improvizacija.' },
  { icon: '🔥', title: 'Napolitana', desc: 'Učimo autentičnu tehniku — razvlačenje rukom, pravo testo, pečenje u pravoj peći.' },
  { icon: '🏊', title: 'Uz bazen', desc: 'Sve se dešava na prelepom imanju s bazenom na Fruškoj Gori. Učenje i uživanje na istom mestu.' },
  { icon: '🌿', title: 'Priroda', desc: 'Mir, zelenilo i pogled na ravnicu — daleko od gradske gužve, a nadohvat ruke.' },
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
              <div key={v.title} style={{ padding: '20px', background: '#F7F2EA', borderRadius: '2px' }}>
                <span style={{ fontSize: '24px', display: 'block', marginBottom: '12px' }}>{v.icon}</span>
                <h3 style={{ fontWeight: 600, color: '#1C1C1E', marginBottom: '6px' }}>{v.title}</h3>
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
