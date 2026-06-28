import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/layout/PageHero';
import KontaktForm from '@/components/home/KontaktForm';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktirajte Napolitana Lab Vrdnik — radionica pice i privatni prostor na Fruškoj Gori.',
};

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Kontakt"
        title={<>Javite nam se</>}
        subtitle="Pošaljite upit i javljamo se istog dana — bez obaveze."
        image="/images/garden_view.jpg"
      />

      <section style={{ background: '#F7F2EA' }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Kontakt kartice */}
          <div>
            <p className="eyebrow">Direktan kontakt</p>
            <h2 className="font-display mt-4" style={{ fontWeight: 500, fontSize: 'var(--text-d-lg)', color: '#1C1C1E', lineHeight: 1.1, marginBottom: 24 }}>
              Tu smo za sva pitanja
            </h2>

            <div className="flex flex-col gap-3">
              <a href="tel:+381653877777" className="card-hover flex items-center gap-4" style={{ padding: 18, background: '#fff', borderRadius: 8, boxShadow: 'var(--shadow-soft)', textDecoration: 'none' }}>
                <span className="inline-flex items-center justify-center shrink-0" style={{ width: 46, height: 46, borderRadius: 8, background: 'rgba(92,26,46,0.08)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5C1A2E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
                </span>
                <div><p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8A7E72', marginBottom: 2 }}>Telefon · Marko</p><p style={{ fontWeight: 500, color: '#1C1C1E' }}>065 387 7777</p></div>
              </a>

              <a href="mailto:kontakt@napolitanalab.rs" className="card-hover flex items-center gap-4" style={{ padding: 18, background: '#fff', borderRadius: 8, boxShadow: 'var(--shadow-soft)', textDecoration: 'none' }}>
                <span className="inline-flex items-center justify-center shrink-0" style={{ width: 46, height: 46, borderRadius: 8, background: 'rgba(92,26,46,0.08)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5C1A2E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
                </span>
                <div><p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8A7E72', marginBottom: 2 }}>Email</p><p style={{ fontWeight: 500, color: '#1C1C1E' }}>kontakt@napolitanalab.rs</p></div>
              </a>

              <a href="https://maps.app.goo.gl/RD2bw5dQoNc4FyuVA" target="_blank" rel="noopener noreferrer" className="card-hover flex items-center gap-4" style={{ padding: 18, background: '#fff', borderRadius: 8, boxShadow: 'var(--shadow-soft)', textDecoration: 'none' }}>
                <span className="inline-flex items-center justify-center shrink-0" style={{ width: 46, height: 46, borderRadius: 8, background: 'rgba(92,26,46,0.08)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5C1A2E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21c-4.5-4-7-7-7-10a7 7 0 0 1 14 0c0 3-2.5 6-7 10ZM12 8a3 3 0 0 0 0 6 3 3 0 0 0 0-6Z" /></svg>
                </span>
                <div><p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8A7E72', marginBottom: 2 }}>Lokacija</p><p style={{ fontWeight: 500, color: '#1C1C1E' }}>Vrdnik, Fruška Gora · prilaz preko Grobljanske</p></div>
              </a>
            </div>
          </div>

          {/* Forma */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '28px 24px', boxShadow: 'var(--shadow-lift)' }}>
            <h2 className="font-display" style={{ fontSize: 'var(--text-d-md)', fontWeight: 500, color: '#1C1C1E', marginBottom: 20 }}>Pošaljite poruku</h2>
            <KontaktForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
