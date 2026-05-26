import { ImageResponse } from 'next/og';

export const alt = 'Печать на ризографе в Пензе — Новапринт';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadFont(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load font: ${url}`);
  return res.arrayBuffer();
}

export default async function Image() {
  const [fontRegular, fontBold] = await Promise.all([
    loadFont(
      'https://cdn.jsdelivr.net/npm/@fontsource/onest@latest/files/onest-cyrillic-500-normal.woff',
    ),
    loadFont(
      'https://cdn.jsdelivr.net/npm/@fontsource/onest@latest/files/onest-cyrillic-700-normal.woff',
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#F6F1E8',
          fontFamily: 'Onest',
          color: '#1A1816',
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#7A6F5E',
          }}
        >
          Новапринт · Пенза
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Печать на ризографе
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 500,
              color: '#3A352D',
              lineHeight: 1.2,
            }}
          >
            Тиражи от 100 экземпляров · Срочный заказ · Доставка по Пензе
          </div>
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: '#7A6F5E',
          }}
        >
          типография-новапринт.рф/rizograf
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Onest', data: fontRegular, weight: 500, style: 'normal' },
        { name: 'Onest', data: fontBold, weight: 700, style: 'normal' },
      ],
    },
  );
}
