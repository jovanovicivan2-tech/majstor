'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GalleryImage {
  src: string
  thumb: string
  alt: string
  caption: string
}

const images: GalleryImage[] = [
  {
    src: '/images/hero-pool.webp',
    thumb: '/images/hero-pool-thumb.webp',
    alt: 'Privatni bazen sa plavim mozaikom i pogledom na Frušku Goru',
    caption: 'Bazen',
  },
  {
    src: '/images/garden-terrace.webp',
    thumb: '/images/garden-terrace-thumb.webp',
    alt: 'Terasa sa stolovima okružena baštom i lavandom u zalazak sunca',
    caption: 'Terasa',
  },
  {
    src: '/images/panorama.webp',
    thumb: '/images/panorama-thumb.webp',
    alt: 'Panorama Fruške Gore sa terase u toplom svetlu zalaska',
    caption: 'Pogled',
  },
  {
    src: '/images/lavender.webp',
    thumb: '/images/lavender-thumb.webp',
    alt: 'Polje lavande uz šljunčanu stazu i čempres',
    caption: 'Lavanda',
  },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const close = useCallback(() => setLightboxIndex(null), [])
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    []
  )
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    []
  )

  // Tastatura: ESC, strelice
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, close, next, prev])

  return (
    <section id="galerija" className="bg-mist section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Naslov */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-stone text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Galerija
          </p>
          <h2 className="font-display text-display-lg text-charcoal font-light">
            Mesto koje govori za sebe
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6 max-w-xs mx-auto">
            <span className="flex-1 h-px bg-gold/40" />
            <span className="text-gold text-sm">✦</span>
            <span className="flex-1 h-px bg-gold/40" />
          </div>
        </div>

        {/* Grid slika */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              className={cn(
                'group relative overflow-hidden rounded-md bg-stone/10',
                'aspect-[3/4]',
                i === 0 && 'md:col-span-1 md:row-span-2 md:aspect-auto'
              )}
              aria-label={`Otvori sliku: ${img.caption}`}
            >
              <Image
                src={img.thumb}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 text-cream font-display text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-cream/80 hover:text-cream transition-colors z-10"
            aria-label="Zatvori"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-2 md:left-6 w-11 h-11 flex items-center justify-center text-cream/80 hover:text-cream transition-colors z-10"
            aria-label="Prethodna slika"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className="relative w-full h-full max-w-3xl max-h-[85vh] mx-12 my-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <p className="absolute -bottom-10 left-0 right-0 text-center text-cream/70 font-display text-lg">
              {images[lightboxIndex].caption}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-2 md:right-6 w-11 h-11 flex items-center justify-center text-cream/80 hover:text-cream transition-colors z-10"
            aria-label="Sledeća slika"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  )
}
