import { GALLERY_TILES } from '../data/menus'

const tileBg = 'repeating-linear-gradient(135deg,#1f4c58 0 14px,#244f5c 14px 28px)'

// Gallery — placeholder tiles (tall tiles span two rows) matching the design.
export function Gallery() {
  return (
    <section
      id="gallery"
      data-screen-label="Gallery"
      style={{ position: 'relative', padding: '58px 22px', background: '#163b46', overflow: 'hidden', scrollMarginTop: 10 }}
    >
      <div data-reveal style={{ textAlign: 'center', marginBottom: 26, color: '#f6eee1' }}>
        <div style={{ fontSize: 11, letterSpacing: 5, color: '#cbb583' }}>05 · THE SPACE</div>
        <h3 style={{ margin: '8px 0 0', fontFamily: "'Poiret One'", fontWeight: 400, fontSize: 34, letterSpacing: 1 }}>Gallery</h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {GALLERY_TILES.map((g) => (
          <div
            key={g.label}
            data-reveal
            style={{
              gridRow: g.tall ? 'span 2' : 'span 1',
              aspectRatio: g.tall ? 'auto' : '1',
              ...(g.tall ? { minHeight: 240 } : null),
              borderRadius: 14,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: tileBg,
            }}
          >
            <span style={{ fontFamily: 'ui-monospace,Menlo,monospace', fontSize: 10, letterSpacing: 0.5, color: '#9fb6ba' }}>{g.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
