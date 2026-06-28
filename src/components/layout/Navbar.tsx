'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar({ locale }: { locale: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prefix = locale === 'en' ? '/en' : '';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-5 md:px-8 transition-all duration-400 ${
        scrolled ? 'bg-[#F7F2EA]/96 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]' : 'bg-transparent'
      }`}>
        <Link href={`${prefix}/`} className={`font-serif text-[20px] font-semibold tracking-wide transition-colors duration-400 min-h-[44px] flex items-center ${
          scrolled ? 'text-[#5C1A2E]' : 'text-white'
        }`}>M&amp;M</Link>
        <div className="hidden md:flex items-center gap-6">
          {[{href:`${prefix}/paketi`,label:'Paketi'},{href:`${prefix}/galerija`,label:'Galerija'},{href:`${prefix}/team-building`,label:'Team Building'},{href:`${prefix}/o-nama`,label:'O nama'}].map((link) => (
            <Link key={link.href} href={link.href} className={`text-[13px] font-medium tracking-wide transition-colors ${
              scrolled ? 'text-[#8A7E72] hover:text-[#5C1A2E]' : 'text-white/80 hover:text-white'
            }`}>{link.label}</Link>
          ))}
        </div>
        <Link href={`${prefix}/rezervacija`}
          className="bg-[#5C1A2E] text-white text-[13px] font-semibold tracking-widest uppercase px-5 h-[40px] flex items-center rounded-sm hover:bg-[#7A2440] transition-colors">
          Rezerviši
        </Link>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1C1C1E] flex flex-col pt-20 px-8">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-5 text-white/50 text-3xl min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Zatvori">×</button>
          {[{href:`${prefix}/paketi`,label:'Paketi'},{href:`${prefix}/galerija`,label:'Galerija'},{href:`${prefix}/team-building`,label:'Team Building'},{href:`${prefix}/o-nama`,label:'O nama'},{href:`${prefix}/kontakt`,label:'Kontakt'}].map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="font-serif text-[36px] font-medium text-white py-3 border-b border-white/10 hover:text-[#C9A84C] transition-colors">{link.label}</Link>
          ))}
        </div>
      )}
    </>
  );
}
