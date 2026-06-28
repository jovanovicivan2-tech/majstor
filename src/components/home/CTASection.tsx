import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#1C1C1E' }}>
      {/* Pozadinska slika */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/pool_dusk.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center' }}
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,28,30,0.82), rgba(67,16,31,0.78))' }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.05, backgroundImage: 'radial-gradient(circle, #F7F2EA 1px, transparent 1px)', backgroundSize: '26px 26px' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-36 text-center flex flex-col items-center">
        <p className="eyebrow eyebrow--center justify-center" style={{ color: '#C9A84C' }}>Posetite nas</p>
        <h2 className="font-display mt-5" style={{ fontWeight: 500, fontSize: 'var(--text-d-2xl)', color: '#fff', lineHeight: 1.05, marginBottom: 18 }}>
          Ovde počinje<br />vaš dan
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, maxWidth: 440, marginBottom: 40 }}>
          Kada poželite, tu smo. Javite se i u miru ćemo isplanirati vaš dan na Fruškoj Gori.
        </p>
        <Link href="/rezervacija" className="btn btn-ghost" style={{ height: 56, padding: '0 36px' }}>
          Isplanirajmo vaš dan →
        </Link>
      </div>
    </section>
  );
}
