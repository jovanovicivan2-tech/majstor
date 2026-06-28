'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 md:hidden',
        'px-4 pb-4 pt-2',
        'bg-gradient-to-t from-cream to-transparent',
        'transition-all duration-300',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      )}
    >
      <Link
        href="#rezervisi"
        className="flex items-center justify-center w-full bg-wine text-cream font-medium text-base py-4 rounded-md min-h-[52px] shadow-wine"
      >
        Rezerviši termin
      </Link>
    </div>
  )
}
