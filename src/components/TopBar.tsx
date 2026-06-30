import { scrollToId } from '../lib/scroll'

// Fixed translucent bar that fades in after the hero. `shown` is driven by
// useStickyBar in App so the bar only appears once you're past the splash.
export function TopBar({ shown }: { shown: boolean }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: 440,
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 20px',
        background: 'rgba(246,238,225,.86)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(20,58,69,.1)',
        opacity: shown ? 1 : 0,
        pointerEvents: shown ? 'auto' : 'none',
        transition: 'opacity .4s ease',
      }}
    >
      <div
        onClick={() => scrollToId('top')}
        style={{
          fontFamily: "'Poiret One'",
          fontSize: 20,
          letterSpacing: 5,
          color: '#163b46',
          cursor: 'pointer',
        }}
      >
        PORTALE
      </div>
      <button
        onClick={() => scrollToId('reserve')}
        style={{
          border: 'none',
          background: '#163b46',
          color: '#f6eee1',
          fontFamily: "'Jost'",
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: 1.5,
          padding: '9px 16px',
          borderRadius: 30,
          cursor: 'pointer',
        }}
      >
        RESERVE
      </button>
    </div>
  )
}
