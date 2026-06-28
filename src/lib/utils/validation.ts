import { z } from 'zod';
export const bookingSchema = z.object({
  package_id: z.string().uuid(), date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  num_guests: z.number().min(1).max(100),
  options: z.object({ konobar: z.boolean().default(false), dekoracija: z.boolean().default(false), torta: z.boolean().default(false) }),
  guest_name: z.string().min(2).max(100), guest_email: z.string().email(),
  guest_phone: z.string().min(6).max(20), guest_note: z.string().max(500).optional(),
});
export const inquirySchema = z.object({
  name: z.string().min(2).max(100), email: z.string().email(),
  phone: z.string().max(20).optional(),
  inquiry_type: z.enum(['general','corporate','wedding','birthday','team_building','other']),
  preferred_date: z.string().optional(), num_guests: z.number().min(1).optional(),
  message: z.string().min(10).max(2000),
});
export const availabilitySchema = z.object({ year: z.number().min(2024).max(2030), month: z.number().min(1).max(12) });
export type BookingInput = z.infer<typeof bookingSchema>;
export type InquiryInput = z.infer<typeof inquirySchema>;
