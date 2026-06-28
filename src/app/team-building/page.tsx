import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Team Building na Fruškoj Gori', description: 'Team building uz pizza radionicu i bazen na Fruškoj Gori. Radionicu vode majstori iz picerije Majstor i Margarita. Opcija prenoćišta, faktura za firme. 40 min od Novog Sada.' };
const Z = [
  { icon: 'M6 11V8a6 6 0 0 1 12 0v3M5 11h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1ZM12 15v2', t: 'Privatni prostor', d: 'Samo vaš tim — bez stranih lica. Privatni bazen i ceo prostor isključivo za vas.' },
  { icon: 'M2 12c2.5-3 6-5 10-5s7.5 2 10 5M12 7v0M7 9.5l1 2.5M17 9.5l-1 2.5M10 11l.5 2M14 11l-.5 2', t: 'Pizza radionica', d: 'Tim zajedno mesi, razvlači i peče picu uz majstore iz picerije Majstor i Margarita.' },
  { icon: 'M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 18v2M21 18v2M3 14h18M7 11V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2', t: 'Opcija prenoćišta', d: 'Za udaljenije timove — prenoćište u obližnjem hotelu, da radionica bude jednodnevna i opuštena.' },
  { icon: 'M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM14 3v4h4M9 12h6M9 16h6', t: 'Faktura za firmu', d: 'Kompletna dokumentacija za računovodstvo. PDV faktura, svi oblici plaćanja.' },
  { icon: 'M12 21c-4.5-4-7-7-7-10a7 7 0 0 1 14 0c0 3-2.5 6-7 10ZM12 8a3 3 0 0 0 0 6 3 3 0 0 0 0-6Z', t: '40 min od NS', d: 'Lako dostupno iz Novog Sada i Beograda. Besplatni parking na imanju.' },
  { icon: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.5-5 6-5s6 2 6 5M17 6a3 3 0 0 1 0 6M16 15c2.5.5 4 2.2 4 5', t: 'Do 50 učesnika', d: 'Idealno za timove 10–50 osoba. Prilagodimo se vašim potrebama.' },
];
const KORACI = [
  { n: '1', t: 'Pošaljete upit', d: 'Javite broj učesnika, željeni datum i da li vam treba prenoćište.' },
  { n: '2', t: 'Dobijete ponudu', d: 'U roku od 24h šaljemo personalizovanu ponudu i program dana.' },
  { n: '3', t: 'Dolazite i uživate', d: 'Bazen, radionica pice i druženje — mi brinemo o svemu ostalom.' },
];
export default function TeamBuildingPage() {
  return (<><Navbar /><div style={{ paddingTop: 64 }}>
    <div style={{ background: '#1C1C1E', minHeight: 240, display: 'flex', alignItems: 'flex-end', padding: '0 20px 40px' }}>
      <div style={{ maxWidth: 560 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>Team Building</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(28px, 6vw, 52px)', color: 'white', lineHeight: 1.1, marginBottom: 12, letterSpacing: '-0.01em' }}>Team building<br /><em style={{ fontStyle: 'italic', color: '#C9A84C' }}>uz pravu picu</em></h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Zajednička iskustva grade timove brže od ijednog workshopa.</p>
      </div>
    </div>
    <div style={{ background: '#F7F2EA', padding: '56px 20px', maxWidth: 640 }}>
      <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(18px, 4vw, 24px)', color: '#1C1C1E', lineHeight: 1.6 }}>Zamislite: vaš tim zajedno pravi picu, gleda je kako se peče u pravoj peći, ruča uz bazen na Fruškoj Gori. Radionicu vode majstori iz picerije Majstor i Margarita — to su momenti koji ostaju i koji spajaju ljude na pravi način.</p>
    </div>
    <div style={{ background: 'white', padding: '56px 20px' }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Zašto mi</p>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(24px, 5vw, 36px)', color: '#1C1C1E', marginBottom: 40, letterSpacing: '-0.01em' }}>Sve što vaš tim treba</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {Z.map(z => (<div key={z.t} className="card-hover" style={{ padding: 22, background: '#F7F2EA', borderRadius: 4, boxShadow: '0 2px 8px rgba(28,28,30,0.03)' }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', marginBottom: 14 }} aria-hidden="true"><path d={z.icon} /></svg>
          <h3 style={{ fontWeight: 600, color: '#1C1C1E', marginBottom: 6, fontSize: 15 }}>{z.t}</h3>
          <p style={{ fontSize: 13, color: '#8A7E72', lineHeight: 1.5 }}>{z.d}</p>
        </div>))}
      </div>
    </div>
    <div style={{ background: '#1C1C1E', padding: '56px 20px' }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Kako funkcioniše</p>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(24px, 5vw, 36px)', color: 'white', marginBottom: 32, letterSpacing: '-0.01em' }}>Tri jednostavna koraka</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {KORACI.map(k => (<div key={k.n} style={{ display: 'flex', gap: 18, padding: 18, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4 }}>
          <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 34, color: 'rgba(201,168,76,0.45)', lineHeight: 1, minWidth: 32 }}>{k.n}</span>
          <div><p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 3 }}>{k.t}</p><p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{k.d}</p></div>
        </div>))}
      </div>
    </div>
    <div style={{ background: '#F7F2EA', padding: '56px 20px' }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Kontakt</p>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(24px, 5vw, 36px)', color: '#1C1C1E', marginBottom: 12, letterSpacing: '-0.01em' }}>Pošaljite upit za ponudu</h2>
      <p style={{ fontSize: 15, color: '#8A7E72', lineHeight: 1.6, marginBottom: 32 }}>Javite nam broj učesnika i željeni datum — u roku od 24h šaljemo personalizovanu ponudu.</p>
      <a href="tel:+381653877777" className="card-hover" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 18, background: 'white', borderRadius: 4, border: '1px solid #EDE8E0', textDecoration: 'none', marginBottom: 12, boxShadow: '0 2px 8px rgba(28,28,30,0.03)' }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5C1A2E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
        <div><p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8A7E72', marginBottom: 2 }}>Pozovite odmah</p><p style={{ fontSize: 16, fontWeight: 500, color: '#1C1C1E' }}>065 387 7777</p></div>
      </a>
      <Link href="/kontakt" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#5C1A2E', color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0 32px', height: 50, borderRadius: 3, textDecoration: 'none', marginTop: 16 }}>Pošalji upit →</Link>
    </div>
  </div><Footer /></>);
}
