import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '가다 데스크 — 인력사무소를 위한 SaaS';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'linear-gradient(135deg, #EAF2FE 0%, #FFFFFF 55%, #FFF6D9 100%)',
          fontFamily:
            'Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#0669F7',
              color: '#FFFFFF',
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            가
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#0F172A',
              letterSpacing: '-0.02em',
            }}
          >
            가다 데스크
          </div>
          <div
            style={{
              marginLeft: 12,
              padding: '8px 14px',
              borderRadius: 999,
              background: '#FFC72C',
              color: '#0F172A',
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            인력사무소 전용 SaaS
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: '#0F172A',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>인력사무소 운영을</span>
            <span>
              <span style={{ color: '#0669F7' }}>가다 데스크</span> 하나로.
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#475569',
              lineHeight: 1.4,
              maxWidth: 980,
            }}
          >
            당일 인력 배치 · 출역 관리 · 현장 마감 · 일당 직접지급까지 한 화면에서.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 32,
            borderTop: '2px solid #E2E8F0',
          }}
        >
          <div style={{ display: 'flex', gap: 32, color: '#475569', fontSize: 22 }}>
            <span>· 당일 인력 배치</span>
            <span>· 출역/마감</span>
            <span>· 일당 지급</span>
            <span>· 직접지급시스템</span>
          </div>
          <div style={{ fontSize: 22, color: '#0F172A', fontWeight: 700 }}>
            desk.1gada.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
