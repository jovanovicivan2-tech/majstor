import Link from 'next/link';

export default function Footer({ locale }: { locale: string }) {
  const prefix = locale === 'en' ? '/en' : '';
  return (
    <footer className="bg-[#1C1C1E] text-white/50 px-5 md:px-10 pt-12 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-2">
          <p className="font-serif text-[22px] font-semibold text-white">Majstor i Margarita</p>
          <p className="text-[12px] tracking-wide mt-1">Vrdnik, Fruška Gora · Privatni event prostor</p>
        </div>
        <div className="divider-gold my-7" aria-hidden="true"><span className="text-[#C9A84C]/70 text-base">✦</span></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[{href:`${prefix}/paketi`,label:'Paketi i cene'},{href:`${prefix}/rezervacija`,label:'Rezervacija'},{href:`${prefix}/galerija`,label:'Galerija'},{href:`${prefix}/team-building`,label:'Team Building'},{href:`${prefix}/o-nama`,label:'O nama'},{href:`${prefix}/kontakt`,label:'Kontakt'}].map((link) => (
            <Link key={link.href} href={link.href} className="text-[14px] text-white/55 hover:text-white transition-colors min-h-[44px] flex items-center">{link.label}</Link>
          ))}
        </div>
        <div className="text-[13px] leading-loose mb-8 text-white/40">
          📞 +381 XX XXX XXXX<br />📧 info@majstorimargarita.rs<br />📸 @majstorimargarita
        </div>
        <div className="border-t border-white/8 pt-5 flex flex-col md:flex-row justify-between gap-2 text-[11px] text-white/20 tracking-wide">
          <span>© {new Date().getFullYear()} Majstor i Margarita. Sva prava zadržana.</span>
          <div className="flex gap-4">
            <Link href={`${prefix}/uslovi`} className="hover:text-white/40 transition-colors">Uslovi korišćenja</Link>
            <Link href={`${prefix}/privatnost`} className="hover:text-white/40 transition-colors">Politika privatnosti</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
