/** Atmosferični predah — puna slika + evokativni citat. Ponovo upotrebljivo. */
export default function AtmosphereQuote({
  image,
  eyebrow,
  quote,
  position = 'center',
}: {
  image: string;
  eyebrow?: string;
  quote: string;
  position?: string;
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#1C1C1E' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        style={{ objectPosition: position }}
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,28,30,0.6), rgba(28,28,30,0.8))' }} />

      <div className="relative max-w-3xl mx-auto px-5 md:px-10 py-24 md:py-40 text-center flex flex-col items-center">
        {eyebrow && (
          <p className="eyebrow eyebrow--center justify-center" style={{ color: '#C9A84C' }}>{eyebrow}</p>
        )}
        <p className="font-display mt-6" style={{ fontSize: 'clamp(22px, 3.8vw, 32px)', fontWeight: 300, color: '#fff', lineHeight: 1.45, fontStyle: 'italic', textShadow: '0 2px 18px rgba(0,0,0,0.4)' }}>
          „{quote}”
        </p>
        <span className="mt-8" style={{ width: 48, height: 1, background: 'rgba(201,168,76,0.6)' }} />
      </div>
    </section>
  );
}
