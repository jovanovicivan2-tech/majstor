import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Team Building na Fruškoj Gori', description: 'Organizujte nezaboravan team building. Privatni bazen, pizza radionice, faktura za firme. 40 min od Novog Sada.' };
const Z = [
  { icon: '🏊', t: 'Privatni prostor', d: 'Samo vaš tim — bez stranih lica. Privatni bazen i ceo prostor isključivo za vas.' },
  { icon: '🍕', t: 'Pizza team activity', d: 'Interaktivna radionica gde tim zajedno pravi pistu. Zabavno, opušteno, nezaboravno.' },
  { icon: '📄', t: 'Faktura za firmu', d: 'Kompletna dokumentacija za računovodstvo. PDV faktura, svi oblici plaćanja.' },
  { icon: '🚗', t: '40 min od NS', d: 'Lako dostupno iz Novog Sada i Beograda. Besplatni parking na imanju.' },
  { icon: '👥', t: 'Do 50 učesnika', d: 'Idealno za timove 10–50 osoba. Prilagodimo se vašim potrebama.' },
  { icon: '🎯', t: 'Prilagodljivo', d: 'Puna sloboda. Prezentacije, team sessions, nagrade — sve po dogovoru.' },
];
export default function TeamBuildingPage() {
  return (<><Navbar /><div style={{ paddingTop: 64 }}>
    <div style={{ background: '#1C1C1E', minHeight: 240, display: 'flex', alignItems: 'flex-end', padding: '0 20px 40px' }}>
      <div style={{ maxWidth: 560 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>Corporate & Team Building</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(28px, 6vw, 52px)', color: 'white', lineHeight: 1.1, marginBottom: 12 }}>Gde počinju<br /><em style={{ fontStyle: 'italic', color: '#C9A84C' }}>pravi timovi</em></h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Zajednička iskustva grade timove brže od ijednog workshopa.</p>
      </div>
    </div>
    <div style={{ background: '#F7F2EA', padding: '56px 20px', maxWidth: 640 }}>
      <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(18px, 4vw, 24px)', color: '#1C1C1E', lineHeight: 1.6 }}>Zamislite: vaš tim pravi pizzu zajedno, gleda je kako se peče, ruča uz bazen na Fruškoj Gori. To su momenti koji ostaju — i koji spajaju ljude na pravi način.</p>
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
    <div style={{ background: '#F7F2EA', padding: '56px 20px' }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Kontakt</p>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(24px, 5vw, 36px)', color: '#1C1C1E', marginBottom: 12 }}>Pošaljite upit za ponudu</h2>
      <p style={{ fontSize: 15, color: '#8A7E72', lineHeight: 1.6, marginBottom: 32 }}>Javite nam broj učesnika i željeni datum — u roku od 24h šaljemo personalizovanu ponudu.</p>
      <a href="tel:+381XXXXXXXX" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: 'white', borderRadius: 2, border: '1px solid #EDE8E0', textDecoration: 'none', marginBottom: 12 }}>
        <span style={{ fontSize: 22 }}>📞</span>
        <div><p style={{ fontSize: 11, textTransform: 'uppercase', color: '#8A7E72' }}>Pozovite odmah</p><p style={{ fontSize: 15, fontWeight: 500, color: '#1C1C1E' }}>+381 XX XXX XXXX</p></div>
      </a>
      <Link href="/kontakt" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#5C1A2E', color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0 32px', height: 48, borderRadius: 2, textDecoration: 'none', marginTop: 16 }}>Pošalji upit →</Link>
    </div>
  </div><Footer /></>);
}