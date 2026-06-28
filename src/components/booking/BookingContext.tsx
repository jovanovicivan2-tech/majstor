'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import type { BookingFormData, BookingStep } from '@/types';

const INITIAL: BookingFormData = {
  date: null, package_id: null, num_guests: 10,
  addons: { konobar: false, dekoracija: false, torta: false },
  guest_name: '', guest_email: '', guest_phone: '', guest_note: '',
};

interface BookingContextValue {
  step: BookingStep; data: BookingFormData;
  setStep: (s: BookingStep) => void;
  update: (partial: Partial<BookingFormData>) => void;
  reset: () => void;
}

const Ctx = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<BookingStep>(1);
  const [data, setData] = useState<BookingFormData>(INITIAL);
  const update = (partial: Partial<BookingFormData>) => setData((prev) => ({ ...prev, ...partial }));
  const reset = () => { setStep(1); setData(INITIAL); };
  return <Ctx.Provider value={{ step, data, setStep, update, reset }}>{children}</Ctx.Provider>;
}

export function useBooking() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useBooking must be inside BookingProvider');
  return ctx;
}
