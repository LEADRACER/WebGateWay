import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Builds } from '../pages/Builds'
import { renderWithProviders } from '../test/test-utils'
import * as buildApi from '../api'

// Mock build data
const mockBuilds = [
  {
    id: 'netvision',
    name: 'NetVision',
    version: 'v4.3.0',
    releaseTag: 'v4.3.0',
    releaseUrl: 'https://github.com/LEADRACER/NetVision/releases/tag/v4.3.0',
    description: 'Real-time Network Intelligence & Discovery Dashboard - A high-performance network mapping tool designed for instant visibility and security awareness.',
    longDescription: 'NetVision is a high-performance, industrial-grade network mapping tool designed for instant visibility and security awareness. Built with a FastAPI backend and a React frontend, it provides a seamless, ultra-lightweight experience for discovering devices, services, and vulnerabilities on your local network.',
    techStack: ['Python', 'FastAPI', 'React', 'Nmap', 'WebSockets', 'Scapy'],
    features: [
      'Progressive Discovery with real-time updates',
      'Multiple scan profiles (Quick, Deep, Security)',
      'Industrial UI with neutral grey palette',
      'Ultra-lightweight zero-animation architecture',
      'Live WebSockets for low-latency data streaming',
      'Advanced vulnerability scanning using Nmap scripts',
      'Multi-subnet scanning (ALL SUBNETS mode)',
      'Configurable scan durations (30s, 1min)',
      'Hop-based router discovery (experimental)'
    ],
    github: 'https://github.com/LEADRACER/NetVision',
    stars: 0,
    language: 'JavaScript',
    lastUpdated: '2026-04-24',
    requirements: ['Python 3.8+', 'Node.js 18+', 'Nmap', 'Tshark'],
    installation: 'Clone repository and run sudo ./run.sh',
    releaseDate: '2026-04-25',
    releaseNotes: [
      '# 🌐 NetVision v4.3.0 — Multi-Subnet & Hop-Based Scanning',
      '',
      '## 🚀 What\'s New',
      'This major update adds **multi-subnet scanning**, **configurable scan durations**, and experimental **hop-based router discovery** to NetVision.',
      '',
      '### 🌐 Multi-Subnet Scanning',
      '- ALL SUBNETS Mode: One-click scanning of 5 common private /24 networks',
      '- Custom Target Input with CIDR notation support',
      '- Live Subnet Indicator in sidebar',
      '- Sequential scanning with consolidated results',
      '',
      '### ⏱️ Configurable Scan Duration',
      '- Choose between Unlimited, 30 seconds, or 1 minute',
      '- Automatic Nmap timeout adjustment'
    ]
  }
]

vi.mock('../api')

describe('Builds Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the page header correctly', async () => {
    buildApi.buildService.getAll.mockResolvedValue(mockBuilds)
    renderWithProviders(<Builds />)
    expect(screen.getByText('Builds & Tools')).toBeInTheDocument()
    expect(screen.getByText('Open Source Projects')).toBeInTheDocument()
  })

  it('displays the NetVision build card', async () => {
    buildApi.buildService.getAll.mockResolvedValue(mockBuilds)
    renderWithProviders(<Builds />)
    await screen.findByText('NetVision')
    expect(screen.getByText('v4.3.0')).toBeInTheDocument()
  })

  it('shows build description', async () => {
    buildApi.buildService.getAll.mockResolvedValue(mockBuilds)
    renderWithProviders(<Builds />)
    await screen.findByText(/Real-time Network Intelligence/i)
  })

  it('displays tech stack badges', async () => {
    buildApi.buildService.getAll.mockResolvedValue(mockBuilds)
    renderWithProviders(<Builds />)
    await screen.findByText('Python')
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('FastAPI')).toBeInTheDocument()
  })

  it('opens modal when build card is clicked', async () => {
    buildApi.buildService.getAll.mockResolvedValue(mockBuilds)
    renderWithProviders(<Builds />)
    await screen.findByText('NetVision')
    const buildCard = screen.getByText('NetVision').parentElement
    fireEvent.click(buildCard)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Version v4.3.0')).toBeInTheDocument()
  })

  it('closes modal when close button is clicked', async () => {
    buildApi.buildService.getAll.mockResolvedValue(mockBuilds)
    renderWithProviders(<Builds />)
    await screen.findByText('NetVision')
    const buildCard = screen.getByText('NetVision').parentElement
    fireEvent.click(buildCard)
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    const closeButton = screen.getByLabelText('Close modal')
    fireEvent.click(closeButton)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes modal when Escape key is pressed', async () => {
    buildApi.buildService.getAll.mockResolvedValue(mockBuilds)
    renderWithProviders(<Builds />)
    await screen.findByText('NetVision')
    const buildCard = screen.getByText('NetVision').parentElement
    fireEvent.click(buildCard)
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('displays features list in modal', async () => {
    buildApi.buildService.getAll.mockResolvedValue(mockBuilds)
    renderWithProviders(<Builds />)
    await screen.findByText('NetVision')
    const buildCard = screen.getByText('NetVision').parentElement
    fireEvent.click(buildCard)

    expect(screen.getByText('Progressive Discovery with real-time updates')).toBeInTheDocument()
    expect(screen.getByText('Advanced vulnerability scanning using Nmap scripts')).toBeInTheDocument()
  })

  it('displays requirements in modal', async () => {
    buildApi.buildService.getAll.mockResolvedValue(mockBuilds)
    renderWithProviders(<Builds />)
    await screen.findByText('NetVision')
    const buildCard = screen.getByText('NetVision').parentElement
    fireEvent.click(buildCard)

    expect(screen.getByText(/Python 3.8\+/)).toBeInTheDocument()
    expect(screen.getByText(/Node.js 18\+/)).toBeInTheDocument()
  })

  it('has working links to GitHub and releases', async () => {
    buildApi.buildService.getAll.mockResolvedValue(mockBuilds)
    renderWithProviders(<Builds />)
    
    await screen.findByText('NetVision')
    
    const buildCard = screen.getByText('NetVision').parentElement
    fireEvent.click(buildCard)

    const githubLink = screen.getByText('View Source')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/LEADRACER/NetVision')

    const releaseLink = screen.getByText('Get Release v4.3.0')
    expect(releaseLink).toHaveAttribute('href', 'https://github.com/LEADRACER/NetVision/releases/tag/v4.3.0')
  })
})