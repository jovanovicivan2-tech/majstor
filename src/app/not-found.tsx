import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative overflow-hidden" style={{ minHeight: '100svh', background: '#1C1C1E' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/pool_dusk.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.25 }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,28,30,0.7), rgba(67,16,31,0.8))' }} />

      <div className="relative flex flex-col items-center justify-center text-center px-5" style={{ minHeight: '100svh' }}>
        <p className="font-display" style={{ fontSize: 'clamp(5rem, 22vw, 12rem)', fontWeight: 500, color: '#C9A84C', lineHeight: 0.9, marginBottom: 8 }}>404</p>
        <p className="eyebrow eyebrow--center justify-center" style={{ color: '#C9A84C' }}>Stranica nije pronađena</p>
        <h1 className="font-display mt-4" style={{ fontSize: 'var(--text-d-xl)', fontWeight: 500, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
          Skrenuli ste sa puta
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: 380, marginBottom: 36 }}>
          Stranica koju tražite ne postoji — ali bazen, vatra i pica su tu gde ste ih ostavili.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-5 sm:px-0">
          <Link href="/" className="btn btn-primary w-full sm:w-auto">Nazad na početnu</Link>
          <Link href="/rezervacija" className="btn btn-ghost w-full sm:w-auto">Rezervišite termin</Link>
        </div>
      </div>
    </main>
  );
}
