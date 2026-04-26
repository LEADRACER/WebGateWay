import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Home } from '../pages/Home'
import { renderWithProviders } from '../test/test-utils'

describe('Home Component', () => {
  it('renders the hero section', () => {
    renderWithProviders(<Home />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Cyber')).toBeInTheDocument()
    expect(screen.getByText('Sentinals')).toBeInTheDocument()
  })

  it('displays the system status badge', () => {
    renderWithProviders(<Home />)
    expect(screen.getByText('SYSTEM STATUS: ONLINE')).toBeInTheDocument()
  })

  it('renders the View Builds button', () => {
    renderWithProviders(<Home />)
    expect(screen.getByText('View Builds')).toBeInTheDocument()
  })

  it('renders the GitHub Profile button', () => {
    renderWithProviders(<Home />)
    expect(screen.getByText('GitHub Profile')).toBeInTheDocument()
  })

  it('displays stats bar with correct values', () => {
    renderWithProviders(<Home />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Open Source')).toBeInTheDocument()
    expect(screen.getByText('Project')).toBeInTheDocument()
  })

  it('shows featured projects section', () => {
    renderWithProviders(<Home />)
    expect(screen.getByText('Featured Projects')).toBeInTheDocument()
  })

  it('displays NetVision project card', () => {
    renderWithProviders(<Home />)
    expect(screen.getByText('NetVision')).toBeInTheDocument()
  })

  it('has working navigation links', () => {
    renderWithProviders(<Home />)
    const buildsButton = screen.getByText('View Builds')
    expect(buildsButton.closest('a')).toHaveAttribute('href', '/builds')
  })
})
