import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => cleanup())

// jsdom doesn't implement matchMedia; useReveal calls it for prefers-reduced-motion.
// Default to "no reduced motion" so the hook follows its normal (IntersectionObserver)
// path — and since jsdom also lacks IntersectionObserver, useReveal falls back to
// revealing everything, which is what we want under test.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
})

// jsdom's scrollTo is a no-op stub that warns; silence it (scroll nav is exercised
// elsewhere — here we only care that handlers don't throw).
window.scrollTo = vi.fn()
