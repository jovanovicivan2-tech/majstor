import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

const INFO = [
  { d: 'M22 12h-4l-3 9L9 3l-3 9H2', label: 'Proverite inbox za potvrdu' },
  { d: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z', label: 'Za pitanja: 065 387 7777' },
  { d: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', label: 'Ostatak platite na mestu' },
];

export default function UspehPage() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #F7F2EA, #EDE8E0)' }} className="flex items-center justify-center px-5 py-28">
        <div className="text-center" style={{ maxWidth: 420 }}>
          <span className="inline-flex items-center justify-center mb-7" style={{ width: 84, height: 84, borderRadius: 999, background: 'rgba(45,106,79,0.12)' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <h1 className="font-display" style={{ fontSize: 'var(--text-d-xl)', fontWeight: 500, color: '#1C1C1E', marginBottom: 14, lineHeight: 1.1 }}>
            Rezervacija potvrđena!
          </h1>
          <p style={{ fontSize: 16, color: '#8A7E72', lineHeight: 1.6, marginBottom: 32 }}>
            Hvala vam! Poslali smo potvrdu na vaš email. Jedva čekamo da vas ugostimo!
          </p>

          <div className="flex flex-col gap-3 text-left" style={{ background: '#fff', borderRadius: 12, padding: 22, marginBottom: 32, boxShadow: 'var(--shadow-soft)' }}>
            {INFO.map((i) => (
              <div key={i.label} className="flex items-center gap-3">
                <span style={{ color: '#C9A84C' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={i.d} /></svg>
                </span>
                <span style={{ fontSize: 14, color: '#2A2A2D' }}>{i.label}</span>
              </div>
            ))}
          </div>

          <Link href="/" className="btn btn-primary">Nazad na početnu</Link>
        </div>
      </div>
    </>
  );
}
