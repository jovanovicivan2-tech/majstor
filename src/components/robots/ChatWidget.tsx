'use client';
import { useState, useRef, useEffect } from 'react';
interface Message { role: 'user' | 'assistant'; content: string; }
const QR = ['Koji paketi postoje?', 'Koliko košta?', 'Kako do vas?'];
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Message[]>([{ role: 'assistant', content: 'Dobro došli u Napolitana Lab. Rado ću vam pomoći oko izbora programa. Šta vas zanima?' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (open) ref.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, open]);
  const send = async (text?: string) => {
    const c = text || input.trim();
    if (!c || loading || count >= 20) return;
    const newMsgs = [...msgs, { role: 'user' as const, content: c }];
    setMsgs(newMsgs); setInput(''); setLoading(true); setCount(n => n + 1);
    try {
      const r = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: newMsgs }) });
      const d = await r.json();
      setMsgs([...newMsgs, { role: 'assistant', content: d.reply || 'Greška.' }]);
    } catch { setMsgs([...newMsgs, { role: 'assistant', content: 'Pozovite nas direktno.' }]); }
    setLoading(false);
  };
  return (
    <>
      <button onClick={() => setOpen(!open)} aria-label="Chat" style={{ position: 'fixed', bottom: 80, right: 20, zIndex: 40, width: 56, height: 56, borderRadius: '50%', border: 'none', cursor: 'pointer', background: open ? '#8A7E72' : '#5C1A2E', color: 'white', boxShadow: '0 8px 24px rgba(92,26,46,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z" /></svg>
        )}
      </button>
      {open && (
        <div style={{ position: 'fixed', bottom: 152, right: 16, zIndex: 40, width: 'calc(100vw - 32px)', maxWidth: 360, background: 'white', border: '1px solid #EDE8E0', borderRadius: 4, boxShadow: '0 20px 60px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', maxHeight: 480 }}>
          <div style={{ background: '#5C1A2E', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><div style={{ width: 8, height: 8, borderRadius: '50%', background: '#C9A84C', animation: 'pulse 2s infinite' }} /><span style={{ color: 'white', fontWeight: 600, fontSize: 14 }}>Majstor i Margarita</span></div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 20, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: 16, background: '#F7F2EA', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '82%', padding: '8px 12px', borderRadius: 2, fontSize: 14, lineHeight: 1.5, background: m.role === 'user' ? '#5C1A2E' : 'white', color: m.role === 'user' ? 'white' : '#1C1C1E', border: m.role === 'user' ? 'none' : '1px solid #EDE8E0' }}>{m.content}</div>
              </div>
            ))}
            {loading && <div style={{ display: 'flex', justifyContent: 'flex-start' }}><div style={{ padding: '8px 12px', background: 'white', border: '1px solid #EDE8E0', borderRadius: 2, display: 'flex', gap: 4 }}>{'···'}</div></div>}
            <div ref={ref} />
          </div>
          {msgs.length <= 2 && (
            <div style={{ padding: '8px 12px', display: 'flex', gap: 8, overflowX: 'auto', background: 'white', borderTop: '1px solid #EDE8E0', flexShrink: 0 }}>
              {QR.map(q => <button key={q} onClick={() => send(q)} style={{ flexShrink: 0, fontSize: 12, padding: '0 12px', height: 32, border: '1px solid rgba(92,26,46,0.3)', color: '#5C1A2E', background: 'transparent', borderRadius: 2, cursor: 'pointer', whiteSpace: 'nowrap' }}>{q}</button>)}
            </div>
          )}
          <div style={{ padding: 12, borderTop: '1px solid #EDE8E0', display: 'flex', gap: 8, background: 'white', flexShrink: 0 }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Unesite pitanje..." style={{ flex: 1, height: 40, padding: '0 12px', border: '1px solid #D5CDC3', borderRadius: 2, fontSize: 14, outline: 'none' }} />
            <button onClick={() => send()} disabled={!input.trim() || loading} style={{ width: 40, height: 40, background: '#5C1A2E', color: 'white', border: 'none', borderRadius: 2, cursor: 'pointer', fontSize: 18, opacity: (!input.trim() || loading) ? 0.4 : 1, flexShrink: 0 }}>→</button>
          </div>
        </div>
      )}
    </>
  );
}
