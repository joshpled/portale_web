import { scrollToId } from '../lib/scroll'

// Splash 2 — Lunch & Brunch highlight with the two hours cards.
export function Brunch() {
  return (
    <section
      id="brunch"
      data-screen-label="Splash 2 Brunch"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 30px',
        background: '#163b46',
        overflow: 'hidden',
        color: '#f6eee1',
      }}
    >
      <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: '#1f4c58', opacity: 0.6 }} />
      <div style={{ position: 'absolute', top: 60, right: 42, width: 120, height: 60, borderRadius: '120px 120px 0 0', background: '#927750', opacity: 0.5, animation: 'floaty 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: -50, left: -40, width: 170, height: 170, borderRadius: '50%', background: '#1f4c58', opacity: 0.55 }} />
      <div style={{ position: 'absolute', bottom: 90, left: 30, width: 70, height: 70, borderRadius: '0 70px 0 70px', background: '#927750', opacity: 0.45, animation: 'drift 12s ease-in-out infinite' }} />

      <div data-reveal style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '8px 18px', border: '1px solid #927750', borderRadius: 30, marginBottom: 30 }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#9fd36a', boxShadow: '0 0 9px #9fd36a', animation: 'fadeIn 2s ease infinite alternate' }} />
        <span style={{ fontSize: 11, letterSpacing: 4, color: '#e7d8b8' }}>OPEN NOW</span>
      </div>

      <h2 data-reveal style={{ margin: 0, textAlign: 'center', fontFamily: "'Poiret One'", fontWeight: 400, fontSize: 'clamp(46px,15vw,66px)', lineHeight: 0.96, letterSpacing: 1 }}>
        Lunch
        <br />
        <span style={{ color: '#cbb583' }}>&amp;</span> Brunch
      </h2>
      <p data-reveal style={{ maxWidth: 300, textAlign: 'center', margin: '24px 0 0', fontWeight: 300, fontSize: 15, lineHeight: 1.65, color: '#cfe0e2' }}>
        Portale Restaurant is now open midday — a two-course prix fixe through the week and an à la carte brunch on weekends.
      </p>

      <div data-reveal style={{ display: 'flex', gap: 14, marginTop: 34, width: '100%', maxWidth: 330 }}>
        <div style={{ flex: 1, textAlign: 'center', padding: '18px 10px', borderRadius: 14, background: 'rgba(246,238,225,.06)', border: '1px solid rgba(246,238,225,.12)' }}>
          <div style={{ fontFamily: "'Poiret One'", fontSize: 26, color: '#f6eee1' }}>Wed–Fri</div>
          <div style={{ fontSize: 12, letterSpacing: 1, color: '#9fb6ba', marginTop: 6 }}>11:30 – 2:30</div>
          <div style={{ fontSize: 11, color: '#cbb583', marginTop: 8, letterSpacing: 0.5 }}>2-course · $45</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center', padding: '18px 10px', borderRadius: 14, background: 'rgba(246,238,225,.06)', border: '1px solid rgba(246,238,225,.12)' }}>
          <div style={{ fontFamily: "'Poiret One'", fontSize: 26, color: '#f6eee1' }}>Sat–Sun</div>
          <div style={{ fontSize: 12, letterSpacing: 1, color: '#9fb6ba', marginTop: 6 }}>11:30 – 3:00</div>
          <div style={{ fontSize: 11, color: '#cbb583', marginTop: 8, letterSpacing: 0.5 }}>À la carte brunch</div>
        </div>
      </div>
      <button
        data-reveal
        onClick={() => scrollToId('reserve')}
        style={{ marginTop: 30, border: 'none', background: '#927750', color: '#fff', fontFamily: "'Jost'", fontWeight: 500, fontSize: 13, letterSpacing: 2, padding: '15px 34px', borderRadius: 34, cursor: 'pointer' }}
      >
        RESERVE A TABLE
      </button>
    </section>
  )
}
