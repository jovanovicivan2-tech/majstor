import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F2EA] flex items-center justify-center px-5">
      <div className="text-center">
        <p className="font-serif text-[80px] font-medium text-[#5C1A2E]/20 leading-none">404</p>
        <h1 className="font-serif text-2xl font-medium text-[#1C1C1E] mb-3">Stranica nije pronađena</h1>
        <p className="text-[#8A7E72] mb-8">Stranica koju tražite ne postoji.</p>
        <Link href="/" className="bg-[#5C1A2E] text-white text-sm font-semibold tracking-wide uppercase px-6 h-12 inline-flex items-center rounded-sm hover:bg-[#7A2440] transition-colors">
          Nazad na početnu
        </Link>
      </div>
    </div>
  );
}
