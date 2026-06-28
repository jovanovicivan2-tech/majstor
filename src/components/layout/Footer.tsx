import Link from 'next/link';

const NAV: [string, string][] = [
  ['/', 'Početna'],
  ['/paketi', 'Programi'],
  ['/galerija', 'Galerija'],
  ['/team-building', 'Team Building'],
  ['/o-nama', 'O nama'],
  ['/rezervacija', 'Rezervacija'],
];

const PHONE = '065 387 7777';
const EMAIL = 'jovanovicivan2@gmail.com';

function Icon({ d, fill = false }: { d: string; fill?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={fill ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {fill ? <path d={d} /> : <path d={d} />}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: '#1C1C1E' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-16 pb-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          {/* Brend */}
          <div className="md:col-span-5">
            <Link href="/" className="font-display" style={{ fontSize: 26, fontWeight: 600, color: '#fff', textDecoration: 'none' }}>
              Napolitana<span style={{ color: '#C9A84C' }}> Lab</span>
            </Link>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginTop: 16, maxWidth: 340 }}>
              Radionica napolitanske pice i privatni prostor sa bazenom na Fruškoj Gori.
              Radionice vode pizza majstori iz picerije Majstor i Margarita.
            </p>
            <a
              href="https://instagram.com/napolitanalab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6"
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, textDecoration: 'none' }}
            >
              <span style={{ color: '#C9A84C' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </span>
              @napolitanalab
            </a>
          </div>

          {/* Navigacija */}
          <div className="md:col-span-3">
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Stranica</p>
            <ul className="flex flex-col gap-2.5" style={{ listStyle: 'none', padding: 0 }}>
              {NAV.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="link-underline" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14 }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className="md:col-span-4">
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Kontakt</p>
            <ul className="flex flex-col gap-3" style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14 }}>
                  <span style={{ color: '#C9A84C' }}><Icon d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></span>
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14 }}>
                  <span style={{ color: '#C9A84C' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg></span>
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
                  <span style={{ color: '#C9A84C' }}><Icon d="M12 21c-4.5-4-7-7-7-10a7 7 0 0 1 14 0c0 3-2.5 6-7 10ZM12 8a3 3 0 0 0 0 6 3 3 0 0 0 0-6Z" /></span>
                  Vrdnik, Fruška Gora
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Donja traka */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-14 pt-7" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>© 2026 Napolitana Lab Vrdnik. Sva prava zadržana.</p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Vrdnik · Fruška Gora · Srbija</p>
        </div>
      </div>
    </footer>
  );
}
