import Stripe from 'stripe';
let _stripe: Stripe | null = null;
export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) throw new Error('STRIPE_SECRET_KEY is not set');
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2026-06-24.dahlia', typescript: true });
  }
  return _stripe;
}
export const EUR_RATE = 117;
export function rsdToEurCents(rsd: number): number { return Math.round((rsd / EUR_RATE) * 100); }
