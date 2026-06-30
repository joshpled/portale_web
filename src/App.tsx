import { useRef } from 'react'
import { TopBar } from './components/TopBar'
import { Splash } from './components/Splash'
import { Brunch } from './components/Brunch'
import { ExploreGrid } from './components/ExploreGrid'
import { Menus } from './components/Menus'
import { Story } from './components/Story'
import { Gallery } from './components/Gallery'
import { Reserve } from './components/Reserve'
import { Visit } from './components/Visit'
import { More } from './components/More'
import { Footer } from './components/Footer'
import { useReveal } from './hooks/useReveal'
import { useStickyBar } from './hooks/useStickyBar'

export default function App() {
  const frameRef = useRef<HTMLDivElement>(null)
  const barShown = useStickyBar()
  useReveal(frameRef)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', background: '#0f2e37' }}>
      <div
        ref={frameRef}
        style={{ position: 'relative', width: '100%', maxWidth: 440, background: '#f6eee1', overflow: 'hidden', boxShadow: '0 0 70px rgba(0,0,0,.45)' }}
      >
        <TopBar shown={barShown} />
        <Splash />
        <Brunch />
        <ExploreGrid />
        <Menus />
        <Story />
        <Gallery />
        <Reserve />
        <Visit />
        <More />
        <Footer />
      </div>
    </div>
  )
}
