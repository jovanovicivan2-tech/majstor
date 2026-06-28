import { createClient } from '@/lib/supabase/server'
import { formatPrice } from '@/lib/utils'
import { Check } from 'lucide-react'
import Link from 'next/link'
import type { Package } from '@/types'

export default async function Packages() {
  const supabase = await createClient()
  const { data: packages } = await supabase
    .from('packages')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true })

  const list = (packages as Package[] | null) ?? []

  return (
    <section id="paketi" className="bg-cream section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Naslov */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-stone text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Paketi
          </p>
          <h2 className="font-display text-display-lg text-charcoal font-light max-w-2xl mx-auto">
            Svaki trenutak je drugačiji
          </h2>
          <p className="text-stone mt-4 max-w-md mx-auto leading-relaxed">
            Zato smo kreirali pakete koji se prilagođavaju vama.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6 max-w-xs mx-auto">
            <span className="flex-1 h-px bg-gold/40" />
            <span className="text-gold text-sm">✦</span>
            <span className="flex-1 h-px bg-gold/40" />
          </div>
        </div>

        {/* Kartice */}
        <div className="grid gap-5 md:grid-cols-2">
          {list.map((pkg, i) => {
            const includes = Array.isArray(pkg.includes) ? pkg.includes : []
            const isPizza = pkg.slug === 'pizza-experience'

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-lg border bg-white p-7 md:p-8 transition-all duration-300 hover:shadow-card ${
                  isPizza
                    ? 'border-wine shadow-card'
                    : 'border-stone/15'
                }`}
              >
                {/* Badge za preporučeni */}
                {isPizza && (
                  <span className="absolute -top-3 left-7 bg-wine text-cream text-xs font-medium px-3 py-1 rounded-full tracking-wide">
                    Najpopularniji
                  </span>
                )}

                {/* Naziv + cena */}
                <div className="mb-5">
                  <h3 className="font-display text-2xl text-charcoal font-medium mb-1">
                    {pkg.name_sr}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mt-3">
                    <span className="text-stone text-sm">od</span>
                    <span className="font-display text-3xl text-wine font-semibold">
                      {formatPrice(pkg.base_price_rsd)}
                    </span>
                  </div>
                </div>

                {/* Opis */}
                {pkg.description_sr && (
                  <p className="text-stone text-sm leading-relaxed mb-6">
                    {pkg.description_sr}
                  </p>
                )}

                {/* Uključeno */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal">
                      <Check size={16} className="text-gold mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Meta + CTA */}
                <div className="mt-auto">
                  <p className="text-stone text-xs mb-4">
                    {pkg.min_guests}–{pkg.max_guests} gostiju
                    {pkg.duration_hours ? ` · ${pkg.duration_hours}h` : ''}
                  </p>
                  <Link
                    href="#rezervisi"
                    className={`flex items-center justify-center w-full font-medium text-sm py-3.5 rounded-md min-h-[48px] transition-colors ${
                      isPizza
                        ? 'bg-wine text-cream hover:bg-opacity-90'
                        : 'border border-wine text-wine hover:bg-wine hover:text-cream'
                    }`}
                  >
                    {pkg.slug === 'corporate' ? 'Pošalji upit' : 'Rezerviši'}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
