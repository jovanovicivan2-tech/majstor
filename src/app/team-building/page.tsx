import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/layout/PageHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team Building na Fruškoj Gori',
  description: 'Team building uz pizza radionicu i bazen na Fruškoj Gori. Radionicu vode majstori iz picerije Majstor i Margarita. Opcija prenoćišta, faktura za firme. 40 min od Novog Sada.',
};

const Z = [
  { icon: 'M6 11V8a6 6 0 0 1 12 0v3M5 11h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1ZM12 15v2', t: 'Privatni prostor', d: 'Bez stranih lica — privatni bazen i ceo prostor isključivo za vaš tim.' },
  { icon: 'M2 12c2.5-3 6-5 10-5s7.5 2 10 5M12 7v0M7 9.5l1 2.5M17 9.5l-1 2.5M10 11l.5 2M14 11l-.5 2', t: 'Pizza radionica', d: 'Tim zajedno mesi, razvlači i peče, uz majstore picerije Majstor i Margarita.' },
  { icon: 'M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 18v2M21 18v2M3 14h18M7 11V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2', t: 'Opcija prenoćišta', d: 'Za udaljenije timove — prenoćište u obližnjem hotelu, da radionica bude jednodnevna i opuštena.' },
  { icon: 'M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM14 3v4h4M9 12h6M9 16h6', t: 'Faktura za firmu', d: 'Kompletna dokumentacija za računovodstvo. PDV faktura, svi oblici plaćanja.' },
  { icon: 'M12 21c-4.5-4-7-7-7-10a7 7 0 0 1 14 0c0 3-2.5 6-7 10ZM12 8a3 3 0 0 0 0 6 3 3 0 0 0 0-6Z', t: '40 min od NS', d: 'Lako dostupno iz Novog Sada i Beograda. Besplatni parking na imanju.' },
  { icon: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.5-5 6-5s6 2 6 5M17 6a3 3 0 0 1 0 6M16 15c2.5.5 4 2.2 4 5', t: 'Do 50 učesnika', d: 'Idealno za timove 10–50 osoba. Prilagodimo se vašim potrebama.' },
];

const KORACI = [
  { n: '01', t: 'Pošaljete upit', d: 'Javite broj učesnika, željeni datum i da li vam treba prenoćište.' },
  { n: '02', t: 'Dobijete ponudu', d: 'U roku od 24h šaljemo personalizovanu ponudu i program dana.' },
  { n: '03', t: 'Dolazite i uživate', d: 'Bazen, radionica pice i druženje — mi brinemo o svemu ostalom.' },
];

export default function TeamBuildingPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Team Building"
        title={<>Tim koji <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>zajedno stvara</em></>}
        subtitle="Zajednička iskustva zbližavaju brže od svakog seminara."
        image="/images/pool_dusk.jpg"
      />

      {/* Intro izjava */}
      <section style={{ background: '#F7F2EA' }} className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <p className="font-display" style={{ fontSize: 'var(--text-d-lg)', color: '#1C1C1E', lineHeight: 1.3, fontWeight: 400 }}>
            Zamislite: vaš tim zajedno mesi testo, posmatra ga kako rumeni na vatri, ruča uz bazen na Fruškoj Gori. Radionicu vode majstori picerije{' '}
            <strong style={{ color: '#5C1A2E', fontWeight: 600 }}>Majstor i Margarita</strong> — to su trenuci koji ostaju i koji zbližavaju ljude na pravi način.
          </p>
        </div>
      </section>

      {/* Zašto mi */}
      <section style={{ background: '#fff' }} className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-12 md:mb-16">
            <p className="eyebrow">Zašto mi</p>
            <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-2xl)', color: '#1C1C1E', lineHeight: 1.05 }}>
              Sve što vaš tim treba
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Z.map((z) => (
              <div key={z.t} className="card-hover" style={{ padding: 26, background: '#F7F2EA', borderRadius: 8, boxShadow: 'var(--shadow-soft)' }}>
                <span className="inline-flex items-center justify-center mb-4" style={{ width: 46, height: 46, borderRadius: 8, background: 'rgba(201,168,76,0.12)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={z.icon} /></svg>
                </span>
                <h3 className="font-display" style={{ fontWeight: 600, color: '#1C1C1E', marginBottom: 6, fontSize: 19 }}>{z.t}</h3>
                <p style={{ fontSize: 14, color: '#8A7E72', lineHeight: 1.55 }}>{z.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Koraci */}
      <section style={{ background: '#1C1C1E' }} className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-12">
            <p className="eyebrow" style={{ color: '#C9A84C' }}>Kako funkcioniše</p>
            <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-2xl)', color: '#fff', lineHeight: 1.05 }}>
              Tri jednostavna koraka
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {KORACI.map((k) => (
              <div key={k.n} style={{ padding: 28, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }}>
                <span className="font-display" style={{ fontSize: 44, color: 'rgba(201,168,76,0.55)', lineHeight: 1, display: 'block', marginBottom: 16 }}>{k.n}</span>
                <p style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.92)', marginBottom: 6 }}>{k.t}</p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F7F2EA' }} className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center flex flex-col items-center">
          <p className="eyebrow eyebrow--center justify-center">Kontakt</p>
          <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-xl)', color: '#1C1C1E', lineHeight: 1.08, marginBottom: 14 }}>
            Pošaljite upit za ponudu
          </h2>
          <p style={{ fontSize: 16, color: '#8A7E72', lineHeight: 1.6, marginBottom: 32, maxWidth: 460 }}>
            Javite nam broj učesnika i željeni datum — u roku od 24h šaljemo personalizovanu ponudu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <Link href="/kontakt" className="btn btn-primary">Pošalji upit →</Link>
            <a href="tel:+381653877777" className="btn btn-outline">065 387 7777</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
