import { useEffect, useState } from 'react'

// Returns true once the user has scrolled past ~1.4 viewport heights, which is
// when the floating PORTALE top bar fades in (matching the source design).
export function useStickyBar(): boolean {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 1.4)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return shown
}
