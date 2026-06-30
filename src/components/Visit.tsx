const rows: Array<[string, string]> = [
  ['Neighborhood', 'Chelsea · 6th–7th Ave'],
  ['Lunch', 'Wed–Fri · 11:30–2:30'],
  ['Brunch', 'Sat–Sun · 11:30–3:00'],
  ['Happy Hour', 'Mon–Fri · 5–6:30 (bar)'],
  ['Dinner', 'Nightly · reservations'],
  ['Phone', '(917) 781-0255'],
]

// Visit — address card, hours table, call / directions actions.
export function Visit() {
  return (
    <section
      id="visit"
      data-screen-label="Visit"
      style={{ position: 'relative', padding: '58px 26px 30px', background: '#163b46', color: '#f6eee1', overflow: 'hidden', scrollMarginTop: 10 }}
    >
      <div data-reveal style={{ textAlign: 'center', marginBottom: 30 }}>
        <div style={{ fontSize: 11, letterSpacing: 5, color: '#cbb583' }}>06 · FIND US</div>
        <h3 style={{ margin: '8px 0 0', fontFamily: "'Poiret One'", fontWeight: 400, fontSize: 34, letterSpacing: 1 }}>Visit Us</h3>
      </div>

      <div data-reveal style={{ height: 170, borderRadius: 18, overflow: 'hidden', background: 'repeating-linear-gradient(45deg,#1f4c58 0 16px,#244f5c 16px 32px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 24 }}>
        <span style={{ fontFamily: "'Poiret One'", fontSize: 20, color: '#f6eee1', letterSpacing: 0.5 }}>126 West 18th Street</span>
        <span style={{ fontFamily: 'ui-monospace,Menlo,monospace', fontSize: 11, color: '#9fb6ba' }}>Chelsea · New York, NY 10011</span>
      </div>

      <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 22 }}>
        {rows.map(([k, v], i) => (
          <div
            key={k}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 12,
              padding: '13px 2px',
              borderBottom: i < rows.length - 1 ? '1px solid rgba(246,238,225,.1)' : undefined,
            }}
          >
            <span style={{ fontWeight: 300, color: '#9fb6ba' }}>{k}</span>
            <span style={{ textAlign: 'right' }}>{v}</span>
          </div>
        ))}
      </div>

      <div data-reveal style={{ display: 'flex', gap: 12 }}>
        <a
          href="tel:+19177810255"
          style={{ flex: 1, textAlign: 'center', textDecoration: 'none', border: '1px solid #927750', color: '#cbb583', fontFamily: "'Jost'", fontWeight: 500, fontSize: 12, letterSpacing: 1.5, padding: 14, borderRadius: 30 }}
        >
          CALL US
        </a>
        <a
          href="https://www.google.com/maps/search/126+West+18th+Street,+New+York,+NY+10011"
          target="_blank"
          rel="noopener"
          style={{ flex: 1, textAlign: 'center', textDecoration: 'none', background: '#927750', color: '#fff', fontFamily: "'Jost'", fontWeight: 500, fontSize: 12, letterSpacing: 1.5, padding: 14, borderRadius: 30 }}
        >
          DIRECTIONS
        </a>
      </div>
    </section>
  )
}
