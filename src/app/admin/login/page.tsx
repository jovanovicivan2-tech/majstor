'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setError('');
    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) { setError('Pogrešan email ili lozinka.'); setLoading(false); return; }
    router.push('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#111113] flex items-center justify-center px-5">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <p className="font-serif text-2xl font-semibold text-white mb-1">M&M Admin</p>
          <p className="text-sm text-white/40">Majstor i Margarita · Upravljanje</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-white/50 mb-2">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="admin@majstorimargarita.rs"
              className="w-full h-12 px-4 bg-white/6 border border-white/10 rounded-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/60 transition-all" />
          </div>
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-white/50 mb-2">Lozinka</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              className="w-full h-12 px-4 bg-white/6 border border-white/10 rounded-sm text-white focus:outline-none focus:border-[#C9A84C]/60 transition-all" />
          </div>
          {error && <p className="text-sm text-red-400 bg-red-900/20 border border-red-800/30 rounded-sm px-3 py-2">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full h-12 bg-[#5C1A2E] text-white text-sm font-semibold tracking-[0.08em] uppercase rounded-sm hover:bg-[#7A2440] transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
            {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Prijavi se'}
          </button>
        </form>
      </div>
    </div>
  );
}
