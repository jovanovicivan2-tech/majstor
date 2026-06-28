'use client';
import { useState, useRef, useEffect } from 'react';

interface Message { role: 'user' | 'assistant'; content: string; }
const QUICK_REPLIES = ['Koji paketi postoje?', 'Koliko košta bazen?', 'Kako do vas?'];

export default function ChatWidget({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: 'Zdravo! 👋 Pomažem vam da pronađete savršeni paket. Šta vas zanima?' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionCount, setSessionCount] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, open]);

  const send = async (text?: string) => {
    const content = text || input.trim();
    if (!content || loading || sessionCount >= 20) return;
    const userMsg: Message = { role: 'user', content };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages); setInput(''); setLoading(true); setSessionCount(c => c + 1);
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: newMessages, robotType: 'booking' }) });
      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.reply || 'Greška. Pokušajte ponovo.' }]);
    } catch { setMessages([...newMessages, { role: 'assistant', content: 'Greška pri konekciji. Pozovite nas direktno.' }]); }
    setLoading(false);
  };

  return (
    <>
      <button onClick={() => setOpen(!open)} className={`fixed bottom-20 right-5 z-40 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${open ? 'bg-[#8A7E72]' : 'bg-[#5C1A2E] hover:bg-[#7A2440]'}`} aria-label={open ? 'Zatvori chat' : 'Otvori chat'}>
        <span className="text-xl">{open ? '×' : '💬'}</span>
      </button>
      {open && (
        <div className="fixed bottom-40 right-4 z-40 w-[calc(100vw-32px)] max-w-[360px] bg-white border border-[#EDE8E0] rounded-sm shadow-2xl flex flex-col overflow-hidden" style={{ maxHeight: '480px' }}>
          <div className="bg-[#5C1A2E] px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" /><span className="font-semibold text-white text-sm">Majstor i Margarita</span></div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white text-xl w-8 h-8 flex items-center justify-center">×</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F7F2EA]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[82%] px-3 py-2 rounded-sm text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#5C1A2E] text-white' : 'bg-white text-[#1C1C1E] border border-[#EDE8E0]'}`}>{msg.content}</div>
              </div>
            ))}
            {loading && <div className="flex justify-start"><div className="bg-white border border-[#EDE8E0] px-3 py-2 rounded-sm text-sm text-[#8A7E72] flex gap-1"><span className="animate-bounce" style={{ animationDelay: '0ms' }}>·</span><span className="animate-bounce" style={{ animationDelay: '150ms' }}>·</span><span className="animate-bounce" style={{ animationDelay: '300ms' }}>·</span></div></div>}
            <div ref={bottomRef} />
          </div>
          {messages.length <= 2 && (
            <div className="px-3 py-2 flex gap-2 overflow-x-auto flex-shrink-0 bg-white border-t border-[#EDE8E0]">
              {QUICK_REPLIES.map(q => <button key={q} onClick={() => send(q)} className="flex-none text-xs px-3 h-8 border border-[#5C1A2E]/30 text-[#5C1A2E] rounded-sm hover:bg-[#5C1A2E]/8 transition-colors whitespace-nowrap">{q}</button>)}
            </div>
          )}
          <div className="p-3 border-t border-[#EDE8E0] flex gap-2 bg-white flex-shrink-0">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()} placeholder={sessionCount >= 20 ? 'Limit dostignut — pozovite nas' : 'Unesite pitanje...'} disabled={sessionCount >= 20} className="flex-1 h-10 px-3 border border-[#D5CDC3] rounded-sm text-sm text-[#1C1C1E] placeholder:text-[#8A7E72]/50 focus:outline-none focus:border-[#5C1A2E] disabled:bg-[#F7F2EA]" />
            <button onClick={() => send()} disabled={!input.trim() || loading || sessionCount >= 20} className="w-10 h-10 bg-[#5C1A2E] text-white rounded-sm flex items-center justify-center disabled:opacity-40 hover:bg-[#7A2440] transition-colors flex-shrink-0">→</button>
          </div>
        </div>
      )}
    </>
  );
}
