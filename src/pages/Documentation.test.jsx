import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Documentation } from '../pages/Documentation'
import { renderWithProviders } from '../test/test-utils'

describe('Documentation Component', () => {
  it('renders the page header', () => {
    renderWithProviders(<Documentation />)
    expect(screen.getByText('Knowledge Base')).toBeInTheDocument()
    expect(screen.getByText('Technical Documentation')).toBeInTheDocument()
  })

  it('displays category tabs', () => {
    renderWithProviders(<Documentation />)
    expect(screen.getByRole('button', { name: /All Docs/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Getting Started/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /API Reference/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Security/i })).toBeInTheDocument()
  })

  it('shows all documents by default', () => {
    renderWithProviders(<Documentation />)
    expect(screen.getByText('Quick Start Guide')).toBeInTheDocument()
    expect(screen.getByText('Hardening Checklist')).toBeInTheDocument()
    expect(screen.getByText('REST API Reference')).toBeInTheDocument()
  })

  it('filters documents when category is selected', () => {
    renderWithProviders(<Documentation />)
    const securityTab = screen.getByRole('button', { name: /^Security/i })
    fireEvent.click(securityTab)

    expect(screen.getByText('Hardening Checklist')).toBeInTheDocument()
    expect(screen.getByText('Encryption Standards')).toBeInTheDocument()
    expect(screen.queryByText('Quick Start Guide')).not.toBeInTheDocument()
  })

  it('displays document metadata', () => {
    renderWithProviders(<Documentation />)
    expect(screen.getByText('12 min read')).toBeInTheDocument()
    expect(screen.getByText('Updated 2 days ago')).toBeInTheDocument()
  })

  it('shows additional resources section', () => {
    renderWithProviders(<Documentation />)
    expect(screen.getByText('Additional Resources')).toBeInTheDocument()
    expect(screen.getByText('Video Tutorials')).toBeInTheDocument()
    expect(screen.getByText('Best Practices')).toBeInTheDocument()
    expect(screen.getByText('Community Forum')).toBeInTheDocument()
  })
})
