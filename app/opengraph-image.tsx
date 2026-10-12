import { ImageResponse } from 'next/og';

export const alt = 'Bia Editora — O Segredo de Grão Vasco';
export const size = {
  width: 1200,
  height: 630,
};
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
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(1000px 600px at 50% 45%, #3a1e0d 0%, #1c1109 45%, #0f0a07 100%)',
          color: '#f3e8d3',
          fontFamily: 'serif',
          position: 'relative',
          border: '16px solid #1f1712',
        }}
      >
        {/* Frame borders */}
        <div
          style={{
            position: 'absolute',
            inset: '30px',
            border: '1px solid rgba(238,122,35,0.4)',
            display: 'flex',
          }}
        />

        {/* Shield / Caetra symbol */}
        <div
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            border: '5px solid #ee7a23',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '28px',
            boxShadow: '0 0 60px rgba(238,122,35,0.3)',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '2px dashed rgba(238,122,35,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ee7a23',
              fontSize: '54px',
              fontWeight: 800,
            }}
          >
            B
          </div>
        </div>

        {/* Brand title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '16px',
            fontSize: '76px',
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: '14px',
            color: '#ee7a23',
            letterSpacing: '-0.02em',
          }}
        >
          <span>Bia</span>
          <span style={{ color: '#f3e8d3', fontWeight: 300, fontStyle: 'italic', fontSize: '64px' }}>
            Editora
          </span>
        </div>

        {/* Subtitle & Book name */}
        <div
          style={{
            fontSize: '28px',
            fontStyle: 'italic',
            color: '#f6b47c',
            marginBottom: '32px',
          }}
        >
          «O Segredo de Grão Vasco» · Livro &amp; Editora
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '18px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(243,232,211,0.65)',
            fontFamily: 'monospace',
          }}
        >
          Defendemos histórias · Viseu
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
