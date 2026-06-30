import { scrollToId } from '../lib/scroll'

const navLink: React.CSSProperties = { cursor: 'pointer' }
const social: React.CSSProperties = { textDecoration: 'none', color: '#cbb583', fontSize: 11, letterSpacing: 1.5 }

// Footer — wordmark, quick nav, socials, contact, copyright.
export function Footer() {
  return (
    <footer style={{ background: '#0f2e37', color: '#f6eee1', textAlign: 'center', padding: '46px 26px 40px' }}>
      <div style={{ fontFamily: "'Poiret One'", fontSize: 30, letterSpacing: 8 }}>PORTALE</div>
      <div style={{ fontSize: 11, letterSpacing: 5, color: '#927750', marginTop: 6 }}>RESTAURANT</div>

      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', margin: '26px 0 20px', fontSize: 12, letterSpacing: 2, color: '#9fb6ba' }}>
        <span onClick={() => scrollToId('menus')} style={navLink}>MENUS</span>
        <span onClick={() => scrollToId('reserve')} style={navLink}>RESERVE</span>
        <span onClick={() => scrollToId('story')} style={navLink}>ABOUT</span>
        <span onClick={() => scrollToId('visit')} style={navLink}>VISIT</span>
      </div>

      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 22 }}>
        <a href="https://www.instagram.com/portalerestaurant/" target="_blank" rel="noopener" style={social}>INSTAGRAM</a>
        <a href="https://www.facebook.com/portalerestaurant" target="_blank" rel="noopener" style={social}>FACEBOOK</a>
        <a href="https://twitter.com/portalechelsea" target="_blank" rel="noopener" style={social}>TWITTER</a>
      </div>

      <div style={{ fontSize: 11, color: '#6a8a90', letterSpacing: 0.5, lineHeight: 1.7 }}>
        126 West 18th Street, New York, NY 10011
        <br />
        (917) 781-0255
      </div>
      <div style={{ fontSize: 11, color: '#456a73', letterSpacing: 1, marginTop: 14 }}>© {new Date().getFullYear()} Portale Restaurant</div>
    </footer>
  )
}
