import { scrollToId } from '../lib/scroll'

// Hero: floating brand shapes, mark + wordmark, scroll cue.
export function Splash() {
  return (
    <section
      id="top"
      data-screen-label="Splash 1"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 28px',
        background: '#f6eee1',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', width: 170, height: 85, borderRadius: '170px 170px 0 0', background: '#163b46', opacity: 0.06, top: '8%', left: -30, animation: 'drift 11s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: 120, height: 120, borderRadius: '50%', background: '#927750', opacity: 0.07, bottom: '14%', right: -34, animation: 'floaty 9s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: 60, height: 120, borderRadius: '0 120px 120px 0', background: '#163b46', opacity: 0.05, top: '30%', right: 18, animation: 'drift 13s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: 90, height: 45, borderRadius: '0 0 90px 90px', background: '#927750', opacity: 0.08, bottom: '30%', left: 20, animation: 'floaty 12s ease-in-out infinite' }} />

      <img
        data-reveal
        src="/assets/portale-mark.png"
        alt="Portale mark"
        style={{ width: 54, height: 'auto', display: 'block', margin: '0 auto 30px', filter: 'drop-shadow(0 6px 14px rgba(15,46,55,.18))' }}
      />
      <img
        data-reveal
        src="/assets/portale-wordmark.png"
        alt="PORTALE"
        style={{ width: 'min(78%,300px)', height: 'auto', display: 'block' }}
      />
      <div data-reveal style={{ width: 46, height: 1, background: '#927750', opacity: 0.5, margin: '34px 0 30px' }} />
      <div data-reveal style={{ fontSize: 12, letterSpacing: 3, color: '#456a73', fontWeight: 300 }}>
        CONTEMPORARY ITALIAN · CHELSEA, NYC
      </div>

      <div
        onClick={() => scrollToId('brunch')}
        style={{ position: 'absolute', bottom: 34, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, cursor: 'pointer' }}
      >
        <span style={{ fontSize: 10, letterSpacing: 3, color: '#163b46', opacity: 0.55 }}>SCROLL</span>
        <div style={{ animation: 'bob 1.8s ease-in-out infinite', color: '#163b46', fontSize: 18, lineHeight: 1 }}>↓</div>
      </div>
    </section>
  )
}
