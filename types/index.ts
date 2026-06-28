// =============================================
// MAJSTOR I MARGARITA — TypeScript tipovi
// Usklađeno sa DATABASE_SCHEMA.md
// =============================================

// --- Database tipovi (Supabase generisani) ---
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      packages: {
        Row: Package
        Insert: Omit<Package, 'id' | 'created_at'>
        Update: Partial<Omit<Package, 'id' | 'created_at'>>
      }
      bookings: {
        Row: Booking
        Insert: Omit<Booking, 'id' | 'booking_number' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Booking, 'id' | 'booking_number' | 'created_at'>>
      }
      time_slots: {
        Row: TimeSlot
        Insert: Omit<TimeSlot, 'id' | 'created_at'>
        Update: Partial<Omit<TimeSlot, 'id' | 'created_at'>>
      }
      payments: {
        Row: Payment
        Insert: Omit<Payment, 'id' | 'created_at'>
        Update: Partial<Omit<Payment, 'id' | 'created_at'>>
      }
      gallery: {
        Row: GalleryItem
        Insert: Omit<GalleryItem, 'id' | 'created_at'>
        Update: Partial<Omit<GalleryItem, 'id' | 'created_at'>>
      }
      inquiries: {
        Row: Inquiry
        Insert: Omit<Inquiry, 'id' | 'created_at'>
        Update: Partial<Omit<Inquiry, 'id' | 'created_at'>>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
  }
}

// --- Paketi ---
export interface Package {
  id: string
  slug: string
  name_sr: string
  name_en: string | null
  description_sr: string | null
  description_en: string | null
  includes: string[] | null
  base_price_rsd: number
  price_per_person_rsd: number | null
  min_guests: number
  max_guests: number
  duration_hours: number | null
  deposit_percentage: number
  is_active: boolean
  sort_order: number
  created_at: string
}

// --- Rezervacije ---
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show'

export interface Booking {
  id: string
  booking_number: string
  package_id: string
  guest_name: string
  guest_email: string
  guest_phone: string
  guest_note: string | null
  date: string
  start_time: string
  end_time: string
  num_guests: number
  options: Record<string, boolean>
  total_price_rsd: number
  deposit_rsd: number
  deposit_paid: boolean
  remaining_rsd: number
  status: BookingStatus
  stripe_session_id: string | null
  stripe_payment_intent_id: string | null
  source: 'website' | 'phone' | 'admin'
  created_at: string
  updated_at: string
  confirmed_at: string | null
  cancelled_at: string | null
  cancellation_reason: string | null
}

// --- Termini ---
export interface TimeSlot {
  id: string
  date: string
  start_time: string
  end_time: string
  is_available: boolean
  is_blocked: boolean
  block_reason: string | null
  created_at: string
}

// --- Plaćanja ---
export type PaymentType   = 'deposit' | 'full' | 'remaining'
export type PaymentStatus = 'pending' | 'succeeded' | 'failed' | 'refunded'

export interface Payment {
  id: string
  booking_id: string
  stripe_payment_intent_id: string | null
  amount_rsd: number
  amount_eur_cents: number | null
  payment_type: PaymentType
  status: PaymentStatus
  paid_at: string | null
  refunded_at: string | null
  refund_amount_rsd: number | null
  created_at: string
}

// --- Galerija ---
export type GalleryCategory = 'bazen' | 'pizzerija' | 'ambijent' | 'hrana' | 'eventi' | 'team_building'

export interface GalleryItem {
  id: string
  category: GalleryCategory
  url: string
  alt_sr: string | null
  alt_en: string | null
  is_featured: boolean
  sort_order: number
  created_at: string
}

// --- Upiti ---
export type InquiryType = 'general' | 'corporate' | 'wedding' | 'birthday' | 'team_building' | 'other'

export interface Inquiry {
  id: string
  name: string
  email: string
  phone: string | null
  inquiry_type: InquiryType
  preferred_date: string | null
  num_guests: number | null
  message: string
  is_replied: boolean
  replied_at: string | null
  created_at: string
}

// --- Booking forma (UI stanje) ---
export interface BookingFormData {
  date: string | null
  packageId: string | null
  numGuests: number
  addons: {
    konobar: boolean
    dekoracija: boolean
    torta: boolean
  }
  guestName: string
  guestEmail: string
  guestPhone: string
  guestNote: string
}

export type BookingStep = 1 | 2 | 3 | 4 | 5
