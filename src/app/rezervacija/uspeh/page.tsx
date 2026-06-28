import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
export default function UspehPage() {
  return (<><Navbar /><div style={{ minHeight: '100vh', background: '#F7F2EA', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 20px' }}>
    <div style={{ textAlign: 'center', maxWidth: 360 }}>
      <div style={{ fontSize: 64, marginBottom: 24 }}>🎉</div>
      <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 32, fontWeight: 500, color: '#1C1C1E', marginBottom: 12 }}>Rezervacija potvrđena!</h1>
      <p style={{ fontSize: 15, color: '#8A7E72', lineHeight: 1.6, marginBottom: 32 }}>Hvala vam! Poslali smo potvrdu na vaš email. Jedva čekamo da vas ugostimo!</p>
      <div style={{ background: 'white', borderRadius: 2, padding: 20, marginBottom: 32, textAlign: 'left' }}>
        <p style={{ fontSize: 14, color: '#8A7E72', marginBottom: 8 }}>📧 Proverite inbox za potvrdu</p>
        <p style={{ fontSize: 14, color: '#8A7E72', marginBottom: 8 }}>📞 Za pitanja: +381 XX XXX XXXX</p>
        <p style={{ fontSize: 14, color: '#8A7E72' }}>💰 Ostatak platite na mestu</p>
      </div>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#5C1A2E', color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0 24px', height: 48, borderRadius: 2, textDecoration: 'none' }}>Nazad na početnu</Link>
    </div>
  </div></>);
}