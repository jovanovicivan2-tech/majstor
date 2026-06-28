import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPTS: Record<string, string> = {
  booking: `Ti si ljubazni asistent restorana i event prostora "Majstor i Margarita" na Vrdniku, Fruška Gora.

Pomažeš gostima da odaberu pravi paket i krenu na rezervaciju.

PAKETI:
- Samoposluživanje: Prostor + bazen + punjeni frižider. Od 25.000 RSD. Min 5 gostiju.
- Pizza Experience: + pizza majstor, radionica. Od 35.000 RSD. Najpopularnije!
- Full Service: + konobar, dekoracija. Od 45.000 RSD.
- Corporate/Team Building: Tim building, min. 10 osoba, faktura. Cena po dogovoru.

DODACI: Konobar servis +8.000 RSD, Dekoracija +5.000 RSD, Torta +3.500 RSD. Depozit: 30%.

LOKACIJA: Vrdnik, Fruška Gora (40 min NS, 80 min BG). Besplatni parking.

PRAVILA: Uvek odgovaraj na srpskom, kratko (2-3 rečenice). Nikad ne izmišljaj cene.`,
};

export async function POST(request: NextRequest) {
  try {
    const { messages, robotType = 'booking' } = await request.json();
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ reply: 'Chat je privremeno nedostupan. Pozovite nas direktno.' });
    }
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 500, system: SYSTEM_PROMPTS[robotType] || SYSTEM_PROMPTS.booking, messages: messages.slice(-20) }),
    });
    const data = await res.json();
    return NextResponse.json({ reply: data.content?.[0]?.text || 'Greška. Pokušajte ponovo.' });
  } catch (e) {
    console.error('chat error:', e);
    return NextResponse.json({ reply: 'Greška. Pozovite nas direktno.' });
  }
}
