import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'O nama', description: 'Naša priča — premium privatni venue na Fruškoj Gori.' };
const V = [
  { icon: '🏠', title: 'Privatnost', desc: 'Svaka rezervacija znači da je prostor samo vaš. Niko drugi. Puna sloboda.' },
  { icon: '🍕', title: 'Autentičnost', desc: 'Naši pizza majstori prave pistu od srca. Nikada gotova smesa, uvek sveže.' },
  { icon: '🌿', title: 'Priroda', desc: 'Fruška Gora u podnožju, zelenilo i svež vazduh — prirodni ambijent bez kompromisa.' },
  { icon: '✨', title: 'Pažnja', desc: 'Svaki detalj je promišljen. Od čistoće bazena do načina na koji vas dočekamo.' },
];
export default function ONamaPage() {
  return (<><Navbar /><div style={{ paddingTop: 64 }}>
    <div style={{ background: '#1C1C1E', minHeight: 200, display: 'flex', alignItems: 'flex-end', padding: '0 20px 40px' }}>
      <div><p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 8 }}>O nama</p>
      <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(28px, 6vw, 48px)', color: 'white' }}>Naša priča</h1></div>
    </div>
    <div style={{ background: '#F7F2EA', padding: '64px 20px' }}>
      <div style={{ maxWidth: 560 }}>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(18px, 4vw, 22px)', color: '#1C1C1E', lineHeight: 1.6, marginBottom: 24 }}>Majstor i Margarita nastao je iz jedne proste ideje: napraviti mesto gde se osetiš kao kod kuće, ali lepo kao u hotelu.</p>
        <p style={{ fontSize: 15, color: '#8A7E72', lineHeight: 1.6 }}>Na Fruškoj Gori, okruženi prirodom i mirisima borovine, stvorili smo prostor koji pamtiš. Jedva čekamo da vam ugostimo.</p>
      </div>
    </div>
    <div style={{ background: 'white', padding: '64px 20px' }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Naše vrednosti</p>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(24px, 5vw, 36px)', color: '#1C1C1E', marginBottom: 40 }}>Šta nas čini posebnim</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {V.map(v => (<div key={v.title} style={{ padding: 20, background: '#F7F2EA', borderRadius: 2 }}>
          <span style={{ fontSize: 24, display: 'block', marginBottom: 12 }}>{v.icon}</span>
          <h3 style={{ fontWeight: 600, color: '#1C1C1E', marginBottom: 6 }}>{v.title}</h3>
          <p style={{ fontSize: 14, color: '#8A7E72', lineHeight: 1.5 }}>{v.desc}</p>
        </div>))}
      </div>
    </div>
  </div><Footer /></>);
}