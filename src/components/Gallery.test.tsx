import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery lightbox', () => {
  it('opens a lightbox with the photo when a tile is clicked', () => {
    render(<Gallery />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    fireEvent.click(screen.getAllByRole('button', { name: /view larger/i })[0])

    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    // The larger image inside the dialog carries the tile's alt text.
    expect(within(dialog).getByAltText('Portale main dining room')).toBeInTheDocument()
  })

  it('closes via the close button', () => {
    render(<Gallery />)
    fireEvent.click(screen.getAllByRole('button', { name: /view larger/i })[0])
    fireEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes when Escape is pressed', () => {
    render(<Gallery />)
    fireEvent.click(screen.getAllByRole('button', { name: /view larger/i })[0])
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
