import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Builds } from '../pages/Builds'
import { renderWithProviders } from '../test/test-utils'

describe('Builds Component', () => {
  it('renders the page header correctly', () => {
    renderWithProviders(<Builds />)
    expect(screen.getByText('Builds & Tools')).toBeInTheDocument()
    expect(screen.getByText('Open Source Projects')).toBeInTheDocument()
  })

  it('displays the NetVision build card', () => {
    renderWithProviders(<Builds />)
    expect(screen.getByText('NetVision')).toBeInTheDocument()
    expect(screen.getByText('v4.3.0')).toBeInTheDocument()
  })

  it('shows build description', () => {
    renderWithProviders(<Builds />)
    expect(screen.getByText(/Real-time Network Intelligence/i)).toBeInTheDocument()
  })

  it('displays tech stack badges', () => {
    renderWithProviders(<Builds />)
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('FastAPI')).toBeInTheDocument()
  })

  it('opens modal when build card is clicked', () => {
    renderWithProviders(<Builds />)
    const buildCard = screen.getByText('NetVision').closest('div')
    fireEvent.click(buildCard)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Version v4.3.0')).toBeInTheDocument()
  })

  it('closes modal when close button is clicked', () => {
    renderWithProviders(<Builds />)
    const buildCard = screen.getByText('NetVision').closest('div')
    fireEvent.click(buildCard)
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    const closeButton = screen.getByLabelText('Close modal')
    fireEvent.click(closeButton)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes modal when Escape key is pressed', () => {
    renderWithProviders(<Builds />)
    const buildCard = screen.getByText('NetVision').closest('div')
    fireEvent.click(buildCard)
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('displays features list in modal', () => {
    renderWithProviders(<Builds />)
    const buildCard = screen.getByText('NetVision').closest('div')
    fireEvent.click(buildCard)

    expect(screen.getByText('Progressive Discovery with real-time updates')).toBeInTheDocument()
    expect(screen.getByText('Advanced vulnerability scanning using Nmap scripts')).toBeInTheDocument()
  })

  it('displays requirements in modal', () => {
    renderWithProviders(<Builds />)
    const buildCard = screen.getByText('NetVision').closest('div')
    fireEvent.click(buildCard)

    expect(screen.getByText(/Python 3.8+/)).toBeInTheDocument()
    expect(screen.getByText(/Node.js 18+/)).toBeInTheDocument()
  })

  it('has working links to GitHub and releases', () => {
    renderWithProviders(<Builds />)
    const buildCard = screen.getByText('NetVision').closest('div')
    fireEvent.click(buildCard)

    const githubLink = screen.getByText('View Source')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/LEADRACER/NetVision')

    const releaseLink = screen.getByText('Get Release v4.3.0')
    expect(releaseLink).toHaveAttribute('href', 'https://github.com/LEADRACER/NetVision/releases/tag/v4.3.0')
  })
})
