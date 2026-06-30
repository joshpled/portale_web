// Our Story — about copy + team.
export function Story() {
  return (
    <section
      id="story"
      data-screen-label="Our Story"
      style={{ position: 'relative', padding: '60px 26px', background: '#f6eee1', overflow: 'hidden', scrollMarginTop: 10 }}
    >
      <div style={{ position: 'absolute', top: 40, right: -50, width: 160, height: 160, borderRadius: '50%', border: '30px solid #e7dcc7', opacity: 0.7 }} />

      <div data-reveal style={{ position: 'relative', fontSize: 11, letterSpacing: 5, color: '#927750' }}>04 · ABOUT US</div>
      <h3 data-reveal style={{ position: 'relative', margin: '10px 0 0', fontFamily: "'Poiret One'", fontWeight: 400, fontSize: 36, color: '#163b46', lineHeight: 1.05, letterSpacing: 0.5 }}>
        A doorway
        <br />
        to Italy
      </h3>
      <p data-reveal style={{ position: 'relative', margin: '22px 0 0', fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: '#3c5a62' }}>
        Chef <strong style={{ fontWeight: 500, color: '#163b46' }}>Alfred Portale</strong> brings his heritage and passion for the cuisine and culture of Italy to his namesake — a contemporary Italian menu in a relaxed, convivial setting in the heart of New York's Chelsea neighborhood.
      </p>
      <p data-reveal style={{ position: 'relative', margin: '16px 0 0', fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: '#3c5a62' }}>
        Ensconced in a renovated carriage house, Portale explores the many regions of Italy with a seasonally driven approach — an abundance of roasted vegetables, market salads, pastas, and grilled meats and fish. The interior, by INC Architecture &amp; Design, pairs raw materials with refined finishes: a sleek metropolitan feel with homespun comfort.
      </p>
      <p data-reveal style={{ position: 'relative', margin: '20px 0 0', fontFamily: "'Poiret One'", fontSize: 23, color: '#927750', lineHeight: 1.2 }}>
        Find your excuse to join us.
      </p>

      <div data-reveal style={{ position: 'relative', marginTop: 30, height: 200, borderRadius: 18, overflow: 'hidden', background: 'repeating-linear-gradient(135deg,#e7dcc7 0 18px,#ddd0b6 18px 36px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="/photos/west-dining-room.webp"
          alt="The west dining room at Portale"
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      <div data-reveal style={{ position: 'relative', fontSize: 11, letterSpacing: 4, color: '#927750', margin: '34px 0 14px' }}>OUR TEAM</div>
      <div data-reveal style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ position: 'relative', flex: 'none', width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', background: '#163b46', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbb583', fontFamily: "'Poiret One'", fontSize: 17 }}>
            AP
            <img
              src="/photos/alfred-portale.webp"
              alt="Alfred Portale"
              loading="lazy"
              decoding="async"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div style={{ fontWeight: 500, color: '#163b46' }}>Alfred Portale</div>
            <div style={{ fontSize: 12, color: '#7a6a52' }}>Executive Chef &amp; Owner</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ position: 'relative', flex: 'none', width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', background: '#927750', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Poiret One'", fontSize: 17 }}>
            JG
            <img
              src="/photos/jacinto-guadarrama.webp"
              alt="Jacinto Guadarrama"
              loading="lazy"
              decoding="async"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div style={{ fontWeight: 500, color: '#163b46' }}>Jacinto Guadarrama</div>
            <div style={{ fontSize: 12, color: '#7a6a52' }}>Chef de Cuisine</div>
          </div>
        </div>
      </div>
    </section>
  )
}
