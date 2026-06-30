import { useState } from 'react'
import { MENU_TABS, MENUS, type MenuId } from '../data/menus'

function tabStyle(active: boolean): React.CSSProperties {
  return {
    border: active ? 'none' : '1px solid rgba(246,238,225,.25)',
    background: active ? '#927750' : 'transparent',
    color: active ? '#fff' : '#cfe0e2',
    fontFamily: "'Jost'",
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: 1,
    padding: '9px 16px',
    borderRadius: 30,
    cursor: 'pointer',
    transition: 'all .25s ease',
  }
}

// Menus section with the four switchable menus (dinner/lunch/brunch/happy).
// Tab state is local — nothing else on the page depends on it.
export function Menus() {
  const [menu, setMenu] = useState<MenuId>('dinner')
  const active = MENUS[menu]

  return (
    <section
      id="menus"
      data-screen-label="Menus"
      style={{ position: 'relative', padding: '56px 22px 60px', background: '#163b46', color: '#f6eee1', overflow: 'hidden', scrollMarginTop: 10 }}
    >
      <div style={{ position: 'absolute', top: -30, left: -30, width: 140, height: 140, borderRadius: '50%', background: '#1f4c58', opacity: 0.6 }} />

      <div data-reveal style={{ position: 'relative', textAlign: 'center', marginBottom: 26 }}>
        <div style={{ fontSize: 11, letterSpacing: 5, color: '#cbb583' }}>01 · THE TABLE</div>
        <h3 style={{ margin: '8px 0 0', fontFamily: "'Poiret One'", fontWeight: 400, fontSize: 34, letterSpacing: 1 }}>Menus</h3>
      </div>

      <div data-reveal style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 14 }}>
        {MENU_TABS.map((tab) => (
          <button key={tab.id} onClick={() => setMenu(tab.id)} style={tabStyle(menu === tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      <p data-reveal style={{ textAlign: 'center', fontSize: 12.5, fontWeight: 300, letterSpacing: 0.4, color: '#cbb583', margin: '0 auto 26px', maxWidth: 330, lineHeight: 1.55 }}>
        {active.note}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {active.sections.map((group) => (
          <div key={group.heading}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 11, letterSpacing: 3, color: '#cbb583', textTransform: 'uppercase' }}>{group.heading}</span>
              <span style={{ flex: 1, height: 1, background: 'rgba(203,181,131,.28)' }} />
            </div>
            {group.items.map((item) => (
              <div key={item.name} style={{ padding: '11px 0', borderBottom: '1px solid rgba(246,238,225,.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                  <span style={{ fontFamily: "'Poiret One'", fontSize: 18, color: '#f6eee1', letterSpacing: 0.3 }}>{item.name}</span>
                  {item.price && <span style={{ fontSize: 13, color: '#cbb583', flex: 'none' }}>{item.price}</span>}
                </div>
                {item.desc && <div style={{ fontSize: 12.5, fontWeight: 300, color: '#9fb6ba', marginTop: 3, lineHeight: 1.45 }}>{item.desc}</div>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
