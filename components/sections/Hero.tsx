import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">

      {/* Pozadinska slika */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-pool.webp"
          alt="Privatni bazen Majstor i Margarita — Vrdnik, Fruška Gora"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — jači na dnu za mobile, sa strane za desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10 md:bg-gradient-to-r md:from-charcoal/80 md:via-charcoal/40 md:to-transparent" />
      </div>

      {/* Sadržaj */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-10 pb-24 pt-32 md:py-0">
        <div className="max-w-xl">

          {/* Chip / tag */}
          <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-cream/90 text-xs font-medium tracking-widest uppercase">
              Privatni venue · Vrdnik
            </span>
          </div>

          {/* Naslov */}
          <h1 className="font-display text-display-2xl text-cream font-light leading-none mb-6 animate-fade-up">
            Tvoje mesto.
            <br />
            <em className="font-medium not-italic text-gold">Tvoja pravila.</em>
          </h1>

          {/* Podnaslov */}
          <p className="font-body text-cream/80 text-base md:text-lg leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Ekskluzivni privatni prostor sa bazenom i pizza radionicom na Fruškoj Gori.
            40 minuta od Novog Sada. Idealno za proslave, žurke i team building.
          </p>

          {/* CTA dugmad */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <Link
              href="#rezervisi"
              className="inline-flex items-center justify-center bg-wine text-cream font-medium text-base px-8 py-4 rounded-md min-h-[52px] hover:bg-opacity-90 transition-all duration-200 shadow-wine"
            >
              Rezerviši termin
            </Link>
            <Link
              href="#paketi"
              className="inline-flex items-center justify-center bg-transparent text-cream font-medium text-base px-8 py-4 rounded-md min-h-[52px] border border-cream/30 hover:bg-cream/10 transition-all duration-200"
            >
              Pogledaj pakete
            </Link>
          </div>

          {/* Brze statistike */}
          <div className="flex items-center gap-6 mt-10 pt-8 border-t border-cream/20 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div>
              <p className="font-display text-2xl text-gold font-medium">15+</p>
              <p className="text-cream/60 text-xs mt-0.5">gostiju max</p>
            </div>
            <div className="w-px h-10 bg-cream/20" />
            <div>
              <p className="font-display text-2xl text-gold font-medium">40 min</p>
              <p className="text-cream/60 text-xs mt-0.5">od Novog Sada</p>
            </div>
            <div className="w-px h-10 bg-cream/20" />
            <div>
              <p className="font-display text-2xl text-gold font-medium">5 ★</p>
              <p className="text-cream/60 text-xs mt-0.5">ocena gostiju</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indikator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <span className="text-cream/50 text-xs tracking-widest uppercase">Istraži</span>
        <div className="w-px h-10 bg-cream/30 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-cream/70 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
