import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Privatni raj na Fruškoj Gori';
  const sub = searchParams.get('sub') || 'Bazen · Pizza radionice · Proslave';

  return new ImageResponse(
    (
      <div style={{ width: '1200px', height: '630px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '60px', background: 'linear-gradient(135deg, #1C1C1E 0%, #2D1520 50%, #5C1A2E 100%)', fontFamily: 'Georgia, serif' }}>
        <div style={{ width: '80px', height: '2px', background: '#C9A84C', marginBottom: '24px' }} />
        <div style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px', fontFamily: 'system-ui' }}>Vrdnik · Fruška Gora</div>
        <div style={{ fontSize: '64px', fontWeight: '600', color: 'white', lineHeight: '1.1', marginBottom: '20px' }}>{title}</div>
        <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.65)', fontFamily: 'system-ui', fontWeight: '300' }}>{sub}</div>
        <div style={{ position: 'absolute', top: '60px', right: '60px', fontSize: '28px', color: 'rgba(255,255,255,0.9)', fontFamily: 'Georgia, serif', fontWeight: '600' }}>M&amp;M</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
