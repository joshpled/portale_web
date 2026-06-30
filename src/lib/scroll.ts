// Smooth-scroll to a section by id, matching the original design's small top offset.
export function scrollToId(id: string): void {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 4
  window.scrollTo({ top: y, behavior: 'smooth' })
}
