import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import App from './App'

describe('App (smoke)', () => {
  it('mounts and renders the main sections', () => {
    render(<App />)
    expect(screen.getByText('Explore Portale')).toBeInTheDocument()
    expect(screen.getByText('Reserve a Table')).toBeInTheDocument()
    expect(screen.getByText(/A doorway/)).toBeInTheDocument()
    // "Visit Us" appears twice — the grid shortcut tile and the section heading.
    expect(screen.getAllByText('Visit Us').length).toBeGreaterThanOrEqual(2)
    // Dinner menu is the default and renders its dishes.
    expect(screen.getByText('Focaccia')).toBeInTheDocument()
  })

  it('switches menu tabs', () => {
    render(<App />)
    // Happy-hour-only item not shown on the default dinner menu.
    expect(screen.queryByText('Marcona Almonds')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Happy Hour' }))
    expect(screen.getByText('Marcona Almonds')).toBeInTheDocument()
    expect(screen.queryByText('Focaccia')).not.toBeInTheDocument()
  })

  it('submits a reservation request and shows confirmation', () => {
    render(<App />)
    const reserve = screen.getByText('Reserve a Table').closest('section')!
    fireEvent.click(within(reserve).getByRole('button', { name: 'REQUEST TABLE' }))
    expect(within(reserve).getByText('Table requested')).toBeInTheDocument()
    expect(within(reserve).getByText(/Party of 2 at 7:00/)).toBeInTheDocument()
  })
})
