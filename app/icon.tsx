import { ImageResponse } from 'next/og';

export const size        = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width:          32,
          height:         32,
          background:     'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius:   6,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontSize:       20,
          fontWeight:     900,
          color:          '#c9a84c',
          letterSpacing:  '-0.5px',
          fontFamily:     'Georgia, serif',
        }}
      >
        H
      </div>
    ),
    { ...size },
  );
}
