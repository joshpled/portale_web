interface MoreCard {
  href: string
  kicker: string
  title: string
  bg: string
  kickerColor: string
  titleColor: string
  decoration: React.CSSProperties
}

const cards: MoreCard[] = [
  {
    href: 'https://order.online/business/~501412',
    kicker: 'ORDER ONLINE',
    title: 'Delivery & Takeout',
    bg: '#163b46',
    kickerColor: '#cbb583',
    titleColor: '#f6eee1',
    decoration: { top: -14, right: -14, width: 74, height: 74, borderRadius: '50%', background: '#1f4c58' },
  },
  {
    href: 'https://portale.tripleseat.com/party_request/19775',
    kicker: 'INQUIRE NOW',
    title: 'Private Events',
    bg: '#927750',
    kickerColor: '#f1e4cb',
    titleColor: '#fff',
    decoration: { top: -16, left: -16, width: 70, height: 70, borderRadius: '0 0 100% 0', background: '#a98a5e' },
  },
  {
    href: 'https://www.portalerestaurant.com/wine-tasting-dinners/',
    kicker: 'EVENTS',
    title: 'Wine Dinners',
    bg: '#e7dcc7',
    kickerColor: '#927750',
    titleColor: '#163b46',
    decoration: { top: 16, right: 16, width: 40, height: 40, borderRadius: '50% 50% 50% 0', background: '#163b46' },
  },
  {
    href: 'https://www.portalerestaurant.com/toast-gift-cards/',
    kicker: 'THE PERFECT GIFT',
    title: 'Gift Cards',
    bg: '#1f4c58',
    kickerColor: '#cbb583',
    titleColor: '#f6eee1',
    decoration: { bottom: -16, right: -16, width: 78, height: 78, borderRadius: '50%', border: '10px solid #163b46' },
  },
]

// More to Explore — external links (order online, events, wine dinners, gift cards).
export function More() {
  return (
    <section id="more" data-screen-label="More" style={{ position: 'relative', padding: '58px 22px 60px', background: '#f6eee1', overflow: 'hidden' }}>
      <div data-reveal style={{ textAlign: 'center', marginBottom: 26 }}>
        <div style={{ fontSize: 11, letterSpacing: 5, color: '#927750' }}>ALSO AT PORTALE</div>
        <h3 style={{ margin: '8px 0 0', fontFamily: "'Poiret One'", fontWeight: 400, fontSize: 32, color: '#163b46', letterSpacing: 0.5 }}>More to Explore</h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {cards.map((c) => (
          <a
            key={c.title}
            data-reveal
            href={c.href}
            target="_blank"
            rel="noopener"
            style={{ textDecoration: 'none', position: 'relative', borderRadius: 16, padding: '22px 18px', minHeight: 130, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: c.bg, overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', ...c.decoration }} />
            <div style={{ position: 'relative', fontSize: 10, letterSpacing: 2, color: c.kickerColor }}>{c.kicker}</div>
            <div style={{ position: 'relative', fontFamily: "'Poiret One'", fontSize: 21, color: c.titleColor, lineHeight: 1.1, marginTop: 4 }}>{c.title}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
