import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#2d2d2d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f5f1eb',
          fontFamily: 'serif',
          fontSize: 120,
          fontStyle: 'italic',
          letterSpacing: '-0.04em',
        }}
      >
        F
      </div>
    ),
    { ...size }
  );
}
