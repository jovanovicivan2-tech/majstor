import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPTS: Record<string, string> = {
  booking: `Ti si ljubazni asistent za "Napolitana Lab Vrdnik" — radionicu napolitanske pice i privatni prostor sa bazenom na Fruškoj Gori, kod Vrdnika.

VAŽNO O BRENDU: Napolitana Lab je radionica pice na prelepom imanju s bazenom. Radionice i obuku vode pizza majstori iz beogradske picerije "Majstor i Margarita". To je SARADNJA — Napolitana Lab NIJE filijala picerije, već poseban prostor gde ti majstori dolaze da drže radionice. Nikad ne predstavljaj Napolitana Lab kao piceriju ili restoran.

PROGRAMI:
- Kurs za pizza majstore: Jednodnevni intenziv napolitanske pice (razvlačenje, filovanje, pečenje). Cena 14.999,99 RSD po osobi. Idealno za pojedince koji žele da nauče zanat.
- Proslave i rođendani: Naši majstori spremaju pice za goste, ili gosti sami prave uz vođenje. 5.999,99 RSD po osobi (neograničeno pica + neograničeno piće). Korišćenje bazena i prostora.
- Team Building: Ceo dan za firme — bazen, sala, zabava i pizza radionica. Cena po dogovoru. Opcija prenoćišta u obližnjem hotelu. Faktura za firmu.

LOKACIJA: Vrdnik, Fruška Gora (40 min od Novog Sada, 80 min od Beograda). Besplatni parking. Privatni bazen.

DEPOZIT: 30% pri rezervaciji online, ostatak na mestu.

PRAVILA: Uvek odgovaraj na srpskom, kratko i toplo (2-3 rečenice). Nikad ne izmišljaj cene ni dostupnost. Ako pitaju za slobodan termin, uputi ih na rezervaciju na sajtu. Na kraju razgovora ponudi link na rezervaciju.`,
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
