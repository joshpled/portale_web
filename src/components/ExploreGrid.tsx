import { scrollToId } from '../lib/scroll'

const tileBase: React.CSSProperties = {
  position: 'relative',
  aspectRatio: '1',
  border: 'none',
  borderRadius: 16,
  overflow: 'hidden',
  cursor: 'pointer',
  textAlign: 'left',
  padding: 0,
}

const captionWrap: React.CSSProperties = { position: 'absolute', left: 16, bottom: 16 }

// The six decorative shortcut tiles. Each is a button that smooth-scrolls to its
// target section. The nested divs are pure CSS-shape decoration from the design.
export function ExploreGrid() {
  return (
    <section id="explore" data-screen-label="Explore Grid" style={{ position: 'relative', padding: '54px 22px 60px', background: '#f6eee1' }}>
      <div data-reveal style={{ textAlign: 'center', marginBottom: 30 }}>
        <div style={{ fontSize: 11, letterSpacing: 5, color: '#927750' }}>DISCOVER</div>
        <h3 style={{ margin: '8px 0 0', fontFamily: "'Poiret One'", fontWeight: 400, fontSize: 34, color: '#163b46', letterSpacing: 1 }}>Explore Portale</h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {/* 01 Menus */}
        <button data-reveal onClick={() => scrollToId('menus')} style={{ ...tileBase, background: '#163b46' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '60%', borderRadius: '0 0 0 100%', background: '#1f4c58' }} />
          <div style={{ position: 'absolute', top: 14, right: 14, width: 34, height: 34, borderRadius: '50% 50% 0 0', background: '#927750' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '50%', height: '50%', borderRadius: '0 100% 0 0', background: '#0f2e37' }} />
          <div style={{ ...captionWrap, color: '#f6eee1' }}>
            <div style={{ fontSize: 10, letterSpacing: 2, color: '#cbb583' }}>01</div>
            <div style={{ fontFamily: "'Poiret One'", fontSize: 23, lineHeight: 1.05, marginTop: 3 }}>Menus</div>
          </div>
        </button>

        {/* 02 Reserve */}
        <button data-reveal onClick={() => scrollToId('reserve')} style={{ ...tileBase, background: '#927750' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50%', background: '#a98a5e' }} />
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 80, height: 80, borderRadius: '50%', background: '#f6eee1' }} />
          <div style={{ position: 'absolute', top: 40, left: '50%', transform: 'translateX(-50%)', width: 80, height: 40, borderRadius: '0 0 80px 80px', background: '#163b46' }} />
          <div style={{ ...captionWrap, color: '#fff' }}>
            <div style={{ fontSize: 10, letterSpacing: 2, color: '#f1e4cb' }}>02</div>
            <div style={{ fontFamily: "'Poiret One'", fontSize: 23, lineHeight: 1.05, marginTop: 3 }}>Reserve</div>
          </div>
        </button>

        {/* 03 Lunch & Brunch */}
        <button data-reveal onClick={() => scrollToId('brunch')} style={{ ...tileBase, background: '#e7dcc7' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', background: 'repeating-linear-gradient(135deg,#e7dcc7 0 16px,#ddd0b6 16px 32px)' }} />
          <div style={{ position: 'absolute', top: 18, left: 18, width: 52, height: 52, borderRadius: '50%', background: '#163b46' }} />
          <div style={{ position: 'absolute', top: 18, left: 44, width: 26, height: 52, borderRadius: '0 52px 52px 0', background: '#927750' }} />
          <div style={{ ...captionWrap, color: '#163b46' }}>
            <div style={{ fontSize: 10, letterSpacing: 2, color: '#927750' }}>03</div>
            <div style={{ fontFamily: "'Poiret One'", fontSize: 22, lineHeight: 1.05, marginTop: 3 }}>Lunch &amp; Brunch</div>
          </div>
        </button>

        {/* 04 Our Story */}
        <button data-reveal onClick={() => scrollToId('story')} style={{ ...tileBase, background: '#1f4c58' }}>
          <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
            <div style={{ background: '#163b46' }} />
            <div style={{ background: '#1f4c58', borderRadius: '0 0 100% 0' }} />
            <div style={{ background: '#1f4c58', borderRadius: '0 100% 0 0' }} />
            <div style={{ background: '#163b46' }} />
          </div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 16, height: 16, background: '#cbb583', clipPath: 'polygon(50% 0,60% 40%,100% 50%,60% 60%,50% 100%,40% 60%,0 50%,40% 40%)' }} />
          <div style={{ ...captionWrap, color: '#f6eee1' }}>
            <div style={{ fontSize: 10, letterSpacing: 2, color: '#cbb583' }}>04</div>
            <div style={{ fontFamily: "'Poiret One'", fontSize: 23, lineHeight: 1.05, marginTop: 3 }}>Our Story</div>
          </div>
        </button>

        {/* 05 Gallery */}
        <button data-reveal onClick={() => scrollToId('gallery')} style={{ ...tileBase, background: '#927750' }}>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '64%', borderRadius: '0 100% 0 0', background: '#7c6442' }} />
          <div style={{ position: 'absolute', top: 16, right: 16, width: 46, height: 46, borderRadius: '50%', border: '6px solid #f6eee1' }} />
          <div style={{ ...captionWrap, color: '#fff' }}>
            <div style={{ fontSize: 10, letterSpacing: 2, color: '#f1e4cb' }}>05</div>
            <div style={{ fontFamily: "'Poiret One'", fontSize: 23, lineHeight: 1.05, marginTop: 3 }}>Gallery</div>
          </div>
        </button>

        {/* 06 Visit Us */}
        <button data-reveal onClick={() => scrollToId('visit')} style={{ ...tileBase, background: '#163b46' }}>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '55%', background: '#1f4c58', borderRadius: '100% 0 0 0' }} />
          <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '26px solid transparent', borderRight: '26px solid transparent', borderBottom: '44px solid #927750' }} />
          <div style={{ ...captionWrap, color: '#f6eee1' }}>
            <div style={{ fontSize: 10, letterSpacing: 2, color: '#cbb583' }}>06</div>
            <div style={{ fontFamily: "'Poiret One'", fontSize: 23, lineHeight: 1.05, marginTop: 3 }}>Visit Us</div>
          </div>
        </button>
      </div>
    </section>
  )
}
