'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const NAV = [
  { href: '/admin/dashboard', icon: '📊', label: 'Dashboard' },
  { href: '/admin/rezervacije', icon: '📋', label: 'Rezervacije' },
  { href: '/admin/kalendar', icon: '📅', label: 'Kalendar' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    await createClient().auth.signOut();
    router.push('/admin/login');
  };

  return (
    <aside className="w-56 min-h-screen bg-[#18181B] border-r border-white/5 flex flex-col flex-shrink-0">
      <div className="px-5 py-6 border-b border-white/5">
        <p className="font-serif text-lg font-semibold text-white">M&M Admin</p>
        <p className="text-[11px] text-white/30 mt-0.5">Majstor i Margarita</p>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV.map(({ href, icon, label }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href}
              className={`flex items-center gap-3 px-3 h-10 rounded-sm text-sm font-medium transition-colors ${
                active ? 'bg-[#5C1A2E] text-white' : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}>
              <span className="text-base">{icon}</span>
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="px-3 pb-5 border-t border-white/5 pt-4">
        <button onClick={logout}
          className="w-full flex items-center gap-3 px-3 h-10 rounded-sm text-sm text-white/30 hover:text-white hover:bg-white/5 transition-colors">
          <span>🚪</span> Odjavi se
        </button>
      </div>
    </aside>
  );
}
