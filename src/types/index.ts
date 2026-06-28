export type PackageSlug = 'pizza-kurs' | 'proslave' | 'team-building' | string;

export interface Package {
  id: string; slug: PackageSlug; name_sr: string; name_en: string | null;
  description_sr: string | null; description_en: string | null; includes: string[];
  base_price_rsd: number; price_per_person_rsd: number | null; min_guests: number;
  max_guests: number; duration_hours: number | null; deposit_percentage: number;
  is_active: boolean; sort_order: number; created_at: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show';

export interface Booking {
  id: string; booking_number: string; package_id: string;
  guest_name: string; guest_email: string; guest_phone: string; guest_note: string | null;
  date: string; start_time: string; end_time: string; num_guests: number;
  options: Record<string, boolean>; total_price_rsd: number; deposit_rsd: number;
  deposit_paid: boolean; remaining_rsd: number; status: BookingStatus;
  stripe_session_id: string | null; stripe_payment_intent_id: string | null;
  source: string; created_at: string; updated_at: string;
  confirmed_at: string | null; cancelled_at: string | null; cancellation_reason: string | null;
}

export interface BookingFormData {
  date: string | null; package_id: string | null; num_guests: number;
  addons: { konobar: boolean; dekoracija: boolean; torta: boolean; };
  guest_name: string; guest_email: string; guest_phone: string; guest_note: string;
}

export type BookingStep = 1 | 2 | 3 | 4 | 5;

export const ADDON_PRICES_RSD = { konobar: 8000, dekoracija: 5000, torta: 3500 } as const;
export type AddonType = keyof typeof ADDON_PRICES_RSD;
export type GalleryCategory = 'bazen' | 'pizzerija' | 'ambijent' | 'hrana' | 'eventi' | 'team_building';
export interface GalleryImage { id: string; category: GalleryCategory; url: string; alt_sr: string | null; alt_en: string | null; is_featured: boolean; sort_order: number; created_at: string; }
export type InquiryType = 'general' | 'corporate' | 'wedding' | 'birthday' | 'team_building' | 'other';
export interface ApiResponse<T> { data?: T; error?: string; success: boolean; }
export type DateAvailability = 'available' | 'booked' | 'blocked';
export interface AvailabilityMap { [date: string]: DateAvailability; }
