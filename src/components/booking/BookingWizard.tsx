'use client';

import { BookingProvider, useBooking } from './BookingContext';
import ProgressBar from './ProgressBar';
import Step1Calendar from './Step1Calendar';
import Step2Package from './Step2Package';
import Step3Guests from './Step3Guests';
import Step4Details from './Step4Details';
import Step5Summary from './Step5Summary';
import type { Package } from '@/types';

function WizardContent({ packages }: { packages: Package[] }) {
  const { step, setStep } = useBooking();
  const next = () => setStep((step + 1) as typeof step);
  const back = () => setStep((step - 1) as typeof step);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ProgressBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {step === 1 && <Step1Calendar onNext={next} />}
        {step === 2 && <Step2Package packages={packages} onNext={next} onBack={back} />}
        {step === 3 && <Step3Guests packages={packages} onNext={next} onBack={back} />}
        {step === 4 && <Step4Details onNext={next} onBack={back} />}
        {step === 5 && <Step5Summary packages={packages} onBack={back} />}
      </div>
    </div>
  );
}

export default function BookingWizard({ packages }: { packages: Package[] }) {
  return <BookingProvider><WizardContent packages={packages} /></BookingProvider>;
}
