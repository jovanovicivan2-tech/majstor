import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import KontaktForm from '@/components/home/KontaktForm';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktirajte Majstor i Margarita — privatni venue sa bazenom na Fruškoj Gori.',
};

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <div style={{ background: '#1C1C1E', height: '192px', display: 'flex', alignItems: 'flex-end', padding: '0 20px 32px' }}>
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '8px' }}>Kontakt</p>
            <h1 className="font-serif" style={{ color: 'white', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 500 }}>Javite nam se</h1>
          </div>
        </div>
        <div style={{ background: '#F7F2EA', minHeight: '100vh', padding: '48px 20px' }}>
          <div style={{ maxWidth: '480px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
              <a href="tel:+381XXXXXXXX" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'white', borderRadius: '2px', border: '1px solid #EDE8E0', textDecoration: 'none', minHeight: '64px' }}>
                <span style={{ fontSize: '24px' }}>📞</span><div><p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8A7E72' }}>Telefon</p><p style={{ fontWeight: 500, color: '#1C1C1E' }}>+381 XX XXX XXXX</p></div>
              </a>
              <a href="mailto:info@majstorimargarita.rs" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'white', borderRadius: '2px', border: '1px solid #EDE8E0', textDecoration: 'none', minHeight: '64px' }}>
                <span style={{ fontSize: '24px' }}>📧</span><div><p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8A7E72' }}>Email</p><p style={{ fontWeight: 500, color: '#1C1C1E' }}>info@majstorimargarita.rs</p></div>
              </a>
            </div>
            <div className="divider-gold" style={{ marginBottom: '32px' }}><span style={{ color: '#C9A84C' }}>✦</span></div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(22px, 5vw, 30px)', fontWeight: 500, color: '#1C1C1E', marginBottom: '24px' }}>Pošaljite poruku</h2>
            <KontaktForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
