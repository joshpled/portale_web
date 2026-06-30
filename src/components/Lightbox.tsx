import { useEffect, useRef } from 'react'

interface LightboxProps {
  src: string
  alt: string
  /** Optional caption shown beneath the image (falls back to alt). */
  caption?: string
  onClose: () => void
}

// Full-viewport modal that shows a larger version of a photo.
// Closes on backdrop click, the ✕ button, or Escape. Locks background
// scroll while open and restores focus to the trigger on close.
export function Lightbox({ src, alt, caption, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      prevFocus?.focus()
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Image viewer'}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(8,20,24,.93)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        padding: 20,
        animation: 'fadeIn .2s ease both',
      }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: 'none',
          background: 'rgba(246,238,225,.15)',
          color: '#f6eee1',
          fontSize: 24,
          lineHeight: 1,
          cursor: 'pointer',
        }}
      >
        ×
      </button>

      <img
        src={src}
        alt={alt}
        // Clicks on the image itself shouldn't bubble up and close the modal.
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '100%',
          maxHeight: '82vh',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          borderRadius: 12,
          boxShadow: '0 24px 60px rgba(0,0,0,.5)',
        }}
      />

      {(caption ?? alt) && (
        <p style={{ margin: 0, maxWidth: 440, textAlign: 'center', fontSize: 13, letterSpacing: 0.4, color: '#cbb583' }}>
          {caption ?? alt}
        </p>
      )}
    </div>
  )
}
