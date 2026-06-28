import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Spaja Tailwind klase bez konflikata */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Formatira cenu u RSD */
export function formatPrice(amount: number, currency: 'RSD' | 'EUR' = 'RSD'): string {
  if (currency === 'EUR') {
    return new Intl.NumberFormat('sr-RS', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(amount)
  }
  return new Intl.NumberFormat('sr-RS', {
    style: 'currency',
    currency: 'RSD',
    minimumFractionDigits: 0,
  }).format(amount)
}

/** Konvertuje RSD u EUR (za Stripe) */
export function rsdToEur(rsd: number, rate: number = 117): number {
  return Math.round((rsd / rate) * 100) / 100
}

/** Računa 30% depozit */
export function calculateDeposit(total: number): number {
  return Math.round(total * 0.30)
}

/** Formatira datum na srpski */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('sr-RS', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d)
}
