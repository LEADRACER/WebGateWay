import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import { Card, CardIcon } from '../components/common/Card'
import {
  CheckCircle,
  Eye,
  AlertCircle,
  Network,
  Shield,
  Lock,
  Server,
  Database
} from 'lucide-react'

export const Intelligence = () => {
  const [feeds, setFeeds] = useState([])
  const [tools] = useState([
    {
      icon: <Database />,
      color: 'cyan',
      title: 'IOC Database',
      description: '1.2M+ indicators of compromise updated in real-time',
      count: '1,247,892'
    },
    {
      icon: <Eye />,
      color: 'yellow',
      title: 'Dark Web Monitor',
      description: 'Track mentions and data leaks across underground forums',
      count: '24/7'
    },
    {
      icon: <AlertCircle />,
      color: 'orange',
      title: 'Threat Feed',
      description: 'Automated ingestion of 50+ external threat intelligence sources',
      count: '52'
    },
    {
      icon: <Network />,
      color: 'purple',
      title: 'Campaign Tracker',
      description: 'Map and analyze APT campaigns and threat actor activities',
      count: '156'
    }
  ])

  useEffect(() => {
    // Fetch threat intelligence data from our API
    const fetchThreatData = async () => {
      try {
        const response = await fetch('/api/threat-intel')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setFeeds(data)
      } catch (error) {
        console.error('Failed to fetch threat intelligence:', error)
        // Fallback to simulated data if API fails
        setFeeds([
          {
            id: 1,
            type: 'ioc',
            title: 'Malicious IP range detected: 185.130.105.0/24',
            time: new Date().toLocaleTimeString(),
            severity: 'high'
          },
          {
            id: 2,
            type: 'alert',
            title: 'APT29 campaign activity observed in Eastern Europe',
            time: new Date(Date.now() - 5 * 60 * 1000).toLocaleTimeString(),
            severity: 'critical'
          }
        ])
      }
    }

    // Fetch initial data
    fetchThreatData()
    
    // Set up interval to refresh data every 30 seconds
    const interval = setInterval(fetchThreatData, 30000)

    return () => clearInterval(interval)
  }, [])

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return theme.colors.accentOrange
      case 'high': return theme.colors.accentOrange
      case 'medium': return theme.colors.accentBlue
      case 'low': return theme.colors.accentGreen
      default: return theme.colors.textMuted
    }
  }

  return (
    <IntelligenceContainer>
      <Section>
        <SectionHeader>
          <Label>Threat Intelligence</Label>
          <Title>Global Threat Landscape</Title>
          <Description>
            Real-time intelligence feeds and analysis from our global sensor network.
          </Description>
        </SectionHeader>

        <CardsGrid>
          {tools.map((tool) => (
            <Card key={tool.title}>
              <CardIcon color={tool.color}>
                {tool.icon}
              </CardIcon>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <CountBadge>{tool.count}</CountBadge>
            </Card>
          ))}
        </CardsGrid>
      </Section>

      <Section>
        <SectionHeader>
          <Label>Live Feeds</Label>
          <Title>Real-Time Intelligence</Title>
          <Description>
            Latest threat indicators and security alerts from our monitoring systems.
          </Description>
        </SectionHeader>

        <FeedContainer>
          {feeds.map((feed) => (
            <FeedItem key={feed.id} severity={feed.severity}>
              <FeedIcon severity={feed.severity} />
              <FeedContent>
                <FeedTitle>{feed.title}</FeedTitle>
                <FeedMeta>
                  <FeedTime>{feed.time}</FeedTime>
                  <FeedSeverity severity={feed.severity}>{feed.severity.toUpperCase()}</FeedSeverity>
                </FeedMeta>
              </FeedContent>
            </FeedItem>
          ))}
          {feeds.length === 0 && (
            <FeedPlaceholder>
              Loading threat intelligence...
            </FeedPlaceholder>
          )}
        </FeedContainer>
      </Section>
    </IntelligenceContainer>
  )
}

const IntelligenceContainer = styled.div`
  min-height: 100vh;
`

const Section = styled.section`
  padding: 4rem 1.5rem; /* Reduced from 6rem 2rem */
  max-width: 1400px;
  margin: 0 auto;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem; /* Reduced from 4rem */
`

const Label = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  color: ${theme.colors.accentCyan};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 229, 199, 0.05);
  border: 1px solid rgba(0, 229, 199, 0.2);
  clip-path: polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%);
`

const Title = styled.h2`
  font-family: ${theme.fonts.mono};
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: ${theme.colors.textPrimary};
`

const Description = styled.p`
  color: ${theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  font-size: 1rem;
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem; /* Reduced from 1.5rem */
`

const CountBadge = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.accentCyan};
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 229, 199, 0.1);
  border-radius: 4px;
  display: inline-block;
`

const FeedContainer = styled.div`
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 4px;
  max-width: 800px;
  margin: 0 auto;
  max-height: 600px;
  overflow-y: auto;
`

const FeedItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${theme.colors.borderSubtle};
  transition: background 0.2s ease;

  &:hover {
    background: ${theme.colors.bgSecondary};
  }

  &:last-child {
    border-bottom: none;
  }
`

const FeedIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${props => {
    switch (props.severity) {
      case 'critical': return 'rgba(255, 94, 58, 0.2)'
      case 'high': return 'rgba(255, 94, 58, 0.2)'
      case 'medium': return 'rgba(77, 124, 255, 0.2)'
      case 'low': return 'rgba(0, 255, 136, 0.2)'
      default: return theme.colors.bgSecondary
    }
  }};
  color: ${props => getSeverityColor(props.severity)};
`

const FeedContent = styled.div`
  flex: 1;
`

const FeedTitle = styled.div`
  font-size: 0.9rem;
  color: ${theme.colors.textPrimary};
  margin-bottom: 0.25rem;
`

const FeedMeta = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const FeedTime = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  color: ${theme.colors.textMuted};
`

const FeedSeverity = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.7rem;
  padding: 0.125rem 0.5rem;
  background: ${props => getSeverityColor(props.severity)}20;
  color: ${props => getSeverityColor(props.severity)};
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const FeedPlaceholder = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${theme.colors.textMuted};
  font-family: ${theme.fonts.mono};
`
