import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Team Building na Fruškoj Gori', description: 'Team building uz pizza radionicu i bazen na Fruškoj Gori. Radionicu vode majstori iz picerije Majstor i Margarita. Opcija prenoćišta, faktura za firme. 40 min od Novog Sada.' };
const Z = [
  { icon: '🔒', t: 'Privatni prostor', d: 'Samo vaš tim — bez stranih lica. Privatni bazen i ceo prostor isključivo za vas.' },
  { icon: '🍕', t: 'Pizza radionica', d: 'Tim zajedno mesi, razvlači i peče picu uz majstore iz picerije Majstor i Margarita.' },
  { icon: '🛏️', t: 'Opcija prenoćišta', d: 'Za udaljenije timove — prenoćište u obližnjem hotelu, da radionica bude jednodnevna i opuštena.' },
  { icon: '📄', t: 'Faktura za firmu', d: 'Kompletna dokumentacija za računovodstvo. PDV faktura, svi oblici plaćanja.' },
  { icon: '🚗', t: '40 min od NS', d: 'Lako dostupno iz Novog Sada i Beograda. Besplatni parking na imanju.' },
  { icon: '👥', t: 'Do 50 učesnika', d: 'Idealno za timove 10–50 osoba. Prilagodimo se vašim potrebama.' },
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
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>Team Building</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(28px, 6vw, 52px)', color: 'white', lineHeight: 1.1, marginBottom: 12 }}>Team building<br /><em style={{ fontStyle: 'italic', color: '#C9A84C' }}>uz pravu picu</em></h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Zajednička iskustva grade timove brže od ijednog workshopa.</p>
      </div>
    </div>
    <div style={{ background: '#F7F2EA', padding: '56px 20px', maxWidth: 640 }}>
      <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(18px, 4vw, 24px)', color: '#1C1C1E', lineHeight: 1.6 }}>Zamislite: vaš tim zajedno pravi picu, gleda je kako se peče u pravoj peći, ruča uz bazen na Fruškoj Gori. Radionicu vode majstori iz picerije Majstor i Margarita — to su momenti koji ostaju i koji spajaju ljude na pravi način.</p>
    </div>
    <div style={{ background: 'white', padding: '56px 20px' }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Zašto mi</p>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(24px, 5vw, 36px)', color: '#1C1C1E', marginBottom: 40 }}>Sve što vaš tim treba</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {Z.map(z => (<div key={z.t} style={{ padding: 20, background: '#F7F2EA', borderRadius: 2 }}>
          <span style={{ fontSize: 24, display: 'block', marginBottom: 12 }}>{z.icon}</span>
          <h3 style={{ fontWeight: 600, color: '#1C1C1E', marginBottom: 6 }}>{z.t}</h3>
          <p style={{ fontSize: 13, color: '#8A7E72', lineHeight: 1.5 }}>{z.d}</p>
        </div>))}
      </div>
    </div>
    <div style={{ background: '#1C1C1E', padding: '56px 20px' }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Kako funkcioniše</p>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(24px, 5vw, 36px)', color: 'white', marginBottom: 32 }}>Tri jednostavna koraka</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {KORACI.map(k => (<div key={k.n} style={{ display: 'flex', gap: 16, padding: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 2 }}>
          <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 32, color: 'rgba(201,168,76,0.4)', lineHeight: 1, minWidth: 32 }}>{k.n}</span>
          <div><p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 2 }}>{k.t}</p><p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{k.d}</p></div>
        </div>))}
      </div>
    </div>
    <div style={{ background: '#F7F2EA', padding: '56px 20px' }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Kontakt</p>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(24px, 5vw, 36px)', color: '#1C1C1E', marginBottom: 12 }}>Pošaljite upit za ponudu</h2>
      <p style={{ fontSize: 15, color: '#8A7E72', lineHeight: 1.6, marginBottom: 32 }}>Javite nam broj učesnika i željeni datum — u roku od 24h šaljemo personalizovanu ponudu.</p>
      <a href="tel:+381653877777" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: 'white', borderRadius: 2, border: '1px solid #EDE8E0', textDecoration: 'none', marginBottom: 12 }}>
        <span style={{ fontSize: 22 }}>📞</span>
        <div><p style={{ fontSize: 11, textTransform: 'uppercase', color: '#8A7E72' }}>Pozovite odmah</p><p style={{ fontSize: 15, fontWeight: 500, color: '#1C1C1E' }}>065 387 7777</p></div>
      </a>
      <Link href="/kontakt" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#5C1A2E', color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0 32px', height: 48, borderRadius: 2, textDecoration: 'none', marginTop: 16 }}>Pošalji upit →</Link>
    </div>
  </div><Footer /></>);
}
