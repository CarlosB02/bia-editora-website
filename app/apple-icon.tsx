import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at center, #2a1a10 0%, #16100c 100%)',
          borderRadius: '36px',
        }}
      >
        <div
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '4px solid #ee7a23',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 25px rgba(238,122,35,0.4)',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px dashed rgba(238,122,35,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ee7a23',
              fontSize: '38px',
              fontWeight: 'bold',
              fontFamily: 'serif',
            }}
          >
            B
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
