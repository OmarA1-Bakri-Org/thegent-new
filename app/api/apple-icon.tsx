import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, #1f2937, #111827)',
        }}
      >
        <div
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: '#ffffff',
          }}
        >
          TG
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
