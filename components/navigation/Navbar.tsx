'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#prostor',   label: 'Prostor' },
  { href: '#paketi',    label: 'Paketi' },
  { href: '#galerija',  label: 'Galerija' },
  { href: '#iskustva',  label: 'Iskustva' },
  { href: '#kontakt',   label: 'Kontakt' },
]

export default function Navbar() {
  const [isOpen,      setIsOpen]      = useState(false)
  const [isScrolled,  setIsScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Zatvori meni pri promeni rute
  const handleLinkClick = () => setIsOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-card border-b border-mist'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link
              href="/"
              className="font-display text-xl md:text-2xl font-medium text-charcoal tracking-tight"
              onClick={handleLinkClick}
            >
              Majstor
              <span className="text-wine"> & </span>
              Margarita
            </Link>

            {/* Desktop linkovi */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-stone hover:text-charcoal transition-colors duration-200 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-wine group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <Link
              href="#rezervisi"
              className="hidden md:inline-flex items-center gap-2 bg-wine text-cream text-sm font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 shadow-wine min-h-[44px]"
            >
              Rezerviši termin
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-md text-charcoal hover:bg-mist transition-colors"
              aria-label={isOpen ? 'Zatvori meni' : 'Otvori meni'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile meni overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            'absolute top-0 right-0 w-4/5 max-w-sm h-full bg-cream shadow-modal',
            'flex flex-col pt-20 px-6 pb-8',
            'transition-transform duration-300',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <ul className="flex flex-col gap-1 flex-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center py-4 text-lg font-display font-medium text-charcoal border-b border-mist hover:text-wine transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <Link
            href="#rezervisi"
            onClick={handleLinkClick}
            className="mt-6 flex items-center justify-center bg-wine text-cream text-base font-medium py-4 rounded-md min-h-[52px] hover:bg-opacity-90 transition-colors shadow-wine"
          >
            Rezerviši termin
          </Link>

          <p className="mt-4 text-center text-sm text-stone">
            📍 Vrdnik, Fruška Gora
          </p>
        </div>
      </div>
    </>
  )
}
