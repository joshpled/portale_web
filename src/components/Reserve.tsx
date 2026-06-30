import { useState } from 'react'

const PARTY_SIZES = ['1', '2', '3', '4', '5', '6', '7', '8+']
const TIMES = ['11:30', '1:00', '5:30', '7:00', '8:30']

function chip(active: boolean): React.CSSProperties {
  return {
    border: active ? 'none' : '1px solid #ddd0b6',
    background: active ? '#163b46' : '#faf6ee',
    color: active ? '#f6eee1' : '#3c5a62',
    fontFamily: "'Jost'",
    fontWeight: 500,
    fontSize: 14,
    padding: '10px 16px',
    borderRadius: 12,
    cursor: 'pointer',
    minWidth: 46,
    transition: 'all .2s ease',
  }
}

const fieldLabel: React.CSSProperties = { fontSize: 11, letterSpacing: 2, color: '#927750', marginBottom: 10 }

// Reservation request: pick party size + time, enter a name, submit to a local
// confirmation. No backend — the design treats this as a request, so we surface
// a confirmation message and a phone number to follow up.
export function Reserve() {
  const [party, setParty] = useState('2')
  const [time, setTime] = useState('7:00')
  const [name, setName] = useState('')
  const [booked, setBooked] = useState(false)

  const trimmed = name.trim()
  const confirmText = `Party of ${party} at ${time}${trimmed ? ', under ' + trimmed : ''}. We'll be in touch shortly to confirm — or call (917) 781-0255.`

  return (
    <section
      id="reserve"
      data-screen-label="Reservations"
      style={{ position: 'relative', padding: '60px 26px', background: '#f6eee1', overflow: 'hidden', scrollMarginTop: 10 }}
    >
      <div style={{ position: 'absolute', bottom: -40, left: -40, width: 150, height: 150, borderRadius: '50%', background: '#e7dcc7', opacity: 0.6 }} />

      <div data-reveal style={{ position: 'relative', textAlign: 'center', marginBottom: 28 }}>
        <div style={{ fontSize: 11, letterSpacing: 5, color: '#927750' }}>02 · JOIN US</div>
        <h3 style={{ margin: '8px 0 0', fontFamily: "'Poiret One'", fontWeight: 400, fontSize: 34, color: '#163b46', letterSpacing: 1 }}>Reserve a Table</h3>
      </div>

      {!booked ? (
        <div style={{ position: 'relative', background: '#fff', borderRadius: 20, padding: '24px 22px', boxShadow: '0 16px 40px rgba(15,46,55,.1)' }}>
          <div style={fieldLabel}>PARTY SIZE</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
            {PARTY_SIZES.map((p) => (
              <button key={p} onClick={() => setParty(p)} style={chip(party === p)}>
                {p}
              </button>
            ))}
          </div>

          <div style={fieldLabel}>TIME</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
            {TIMES.map((t) => (
              <button key={t} onClick={() => setTime(t)} style={chip(time === t)}>
                {t}
              </button>
            ))}
          </div>

          <div style={fieldLabel}>YOUR NAME</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name on the reservation"
            style={{ width: '100%', border: '1px solid #ddd0b6', background: '#faf6ee', borderRadius: 12, padding: '14px 16px', fontFamily: "'Jost'", fontSize: 15, color: '#163b46', outline: 'none', marginBottom: 22 }}
          />

          <button
            onClick={() => setBooked(true)}
            style={{ width: '100%', border: 'none', background: '#163b46', color: '#f6eee1', fontFamily: "'Jost'", fontWeight: 500, fontSize: 14, letterSpacing: 2, padding: 16, borderRadius: 14, cursor: 'pointer' }}
          >
            REQUEST TABLE
          </button>
        </div>
      ) : (
        <div style={{ position: 'relative', background: '#163b46', borderRadius: 20, padding: '38px 26px', textAlign: 'center', color: '#f6eee1' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#927750', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 30 }}>✓</div>
          <div style={{ fontFamily: "'Poiret One'", fontSize: 28 }}>Table requested</div>
          <p style={{ fontSize: 14, fontWeight: 300, color: '#cfe0e2', margin: '14px 0 22px', lineHeight: 1.6 }}>{confirmText}</p>
          <button
            onClick={() => setBooked(false)}
            style={{ border: '1px solid #927750', background: 'transparent', color: '#cbb583', fontFamily: "'Jost'", fontSize: 12, letterSpacing: 2, padding: '11px 24px', borderRadius: 30, cursor: 'pointer' }}
          >
            NEW REQUEST
          </button>
        </div>
      )}
    </section>
  )
}
