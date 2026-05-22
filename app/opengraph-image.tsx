import { ImageResponse } from 'next/og';

export const alt = 'Framelight — Real-time composition guidance for your camera';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#f5f1eb',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          color: '#2d2d2d',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 28,
            letterSpacing: '-0.01em',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: '#2d2d2d',
              borderRadius: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f5f1eb',
              fontStyle: 'italic',
              fontSize: 28,
            }}
          >
            F
          </div>
          <span>Framelight</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              maxWidth: 980,
            }}
          >
            <span>
              From guesswork to{' '}
              <span style={{ fontStyle: 'italic', color: 'rgba(45,45,45,0.7)' }}>
                perfect shots.
              </span>
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'sans-serif',
              fontSize: 26,
              color: 'rgba(45,45,45,0.55)',
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            <span>
              Real-time composition cues, on-device. Coming soon to iOS and
              Android.
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'sans-serif',
            fontSize: 18,
            color: 'rgba(45,45,45,0.45)',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
          }}
        >
          <span>framelight.ai</span>
          <span>Private beta</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
