import { useEffect } from 'react'

// Scroll-reveal: watches every [data-reveal] element under `root` and adds the
// `.is-visible` class (CSS handles the fade/slide) once it enters the viewport.
// Siblings stagger by 80ms — same feel as the source design. Falls back to
// revealing everything if IntersectionObserver is missing or motion is reduced.
export function useReveal(root: React.RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const host = root.current ?? document
    const els = Array.from(host.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (els.length === 0) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealAll = () => els.forEach((el) => el.classList.add('is-visible'))

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      revealAll()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target as HTMLElement
          const sibs = Array.from(el.parentElement?.querySelectorAll('[data-reveal]') ?? [])
          const delay = Math.max(0, sibs.indexOf(el)) * 80
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('is-visible')
          io.unobserve(el)
        })
      },
      { threshold: 0.14 },
    )
    els.forEach((el) => io.observe(el))

    // Safety net: anything still hidden after 1.2s (e.g. tab restored in the
    // background, observer throttled) gets revealed so content is never stuck.
    const safety = window.setTimeout(revealAll, 1200)

    return () => {
      io.disconnect()
      clearTimeout(safety)
    }
  }, [root])
}
