import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import KontaktForm from '@/components/home/KontaktForm';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Kontakt', description: 'Kontaktirajte Majstor i Margarita — privatni venue sa bazenom na Fruškoj Gori.' };
export default function KontaktPage() {
  return (<><Navbar /><div style={{ paddingTop: 64 }}>
    <div style={{ background: '#1C1C1E', height: 192, display: 'flex', alignItems: 'flex-end', padding: '0 20px 32px' }}>
      <div><p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 8 }}>Kontakt</p>
      <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(28px, 6vw, 48px)', color: 'white' }}>Javite nam se</h1></div>
    </div>
    <div style={{ background: '#F7F2EA', minHeight: '100vh', padding: '48px 20px' }}>
      <div style={{ maxWidth: 520 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
          {[['tel:+381XXXXXXXX','📞','Telefon','+381 XX XXX XXXX'],['mailto:info@majstorimargarita.rs','📧','Email','info@majstorimargarita.rs'],['https://instagram.com/majstorimargarita','📸','Instagram','@majstorimargarita']].map(([href,icon,label,val]) => (
            <a key={href} href={href} target={href.startsWith('https') ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: 'white', borderRadius: 2, border: '1px solid #EDE8E0', textDecoration: 'none', minHeight: 64 }}>
              <span style={{ fontSize: 24 }}>{icon}</span>
              <div><p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8A7E72' }}>{label}</p><p style={{ fontSize: 15, fontWeight: 500, color: '#1C1C1E' }}>{val}</p></div>
            </a>
          ))}
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500, fontSize: 'clamp(22px, 5vw, 30px)', color: '#1C1C1E', marginBottom: 24 }}>Pošaljite poruku</h2>
        <KontaktForm />
      </div>
    </div>
  </div><Footer /></>);
}