import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import { Card, CardIcon } from '../components/common/Card'
import { Terminal } from '../components/common/Terminal'
import {
  Shield,
  Network,
  Lock,
  Server,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react'

export const Operations = () => {
  const [scanProgress, setScanProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + Math.random() * 5
      })
    }, 200)
    return () => clearInterval(timer)
  }, [])

  const operations = [
    {
      icon: <Shield />,
      color: 'cyan',
      title: 'Incident Response',
      description: 'Automated playbooks and manual intervention tools for rapid threat containment and remediation.',
      status: 'Active',
      statusColor: theme.colors.accentGreen
    },
    {
      icon: <Network />,
      color: 'blue',
      title: 'Vulnerability Management',
      description: 'Continuous scanning and assessment of infrastructure with prioritized remediation workflows.',
      status: 'Running',
      statusColor: theme.colors.accentBlue
    },
    {
      icon: <Lock />,
      color: 'orange',
      title: 'Identity Governance',
      description: 'Access control and privilege management with behavioral analytics for insider threat detection.',
      status: 'Monitoring',
      statusColor: theme.colors.accentOrange
    }
  ]

  const scanResults = [
    { label: 'Endpoints Scanned', value: '12,450' },
    { label: 'Vulnerabilities Found', value: '3 Medium' },
    { label: 'Critical Issues', value: '0' },
    { label: 'Scan Duration', value: '2m 34s' }
  ]

  return (
    <OperationsContainer>
      <Section>
        <SectionHeader>
          <Label>Active Operations</Label>
          <Title>Security Operations Center</Title>
          <Description>
            Real-time monitoring and incident response capabilities for enterprise security.
          </Description>
        </SectionHeader>

        <CardsGrid>
          {operations.map((op) => (
            <Card key={op.title}>
              <CardIcon color={op.color}>
                {op.icon}
              </CardIcon>
              <h3>{op.title}</h3>
              <p>{op.description}</p>
              <StatusBadge color={op.statusColor}>{op.status}</StatusBadge>
            </Card>
          ))}
        </CardsGrid>
      </Section>

      <Section>
        <SectionHeader>
          <Label>Live Scan</Label>
          <Title>Deep Vulnerability Assessment</Title>
          <Description>
            Real-time progress of the current security scan operation.
          </Description>
        </SectionHeader>

        <ScanContainer>
          <ProgressBar>
            <ProgressFill progress={scanProgress} />
          </ProgressBar>
          <ProgressText>{Math.round(scanProgress)}% Complete</ProgressText>
          
          <ResultsGrid>
            {scanResults.map((result) => (
              <ResultCard key={result.label}>
                <ResultValue>{result.value}</ResultValue>
                <ResultLabel>{result.label}</ResultLabel>
              </ResultCard>
            ))}
          </ResultsGrid>
        </ScanContainer>
      </Section>

      <Terminal />
    </OperationsContainer>
  )
}

const OperationsContainer = styled.div`
  min-height: 100vh;
`

const Section = styled.section`
  padding: 6rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
`

const StatusBadge = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${props => props.color}20;
  color: ${props => props.color};
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 1rem;
  border-radius: 2px;
`

const ScanContainer = styled.div`
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 4px;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`

const ProgressBar = styled.div`
  height: 8px;
  background: ${theme.colors.bgSecondary};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
`

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${theme.colors.accentCyan}, ${theme.colors.accentBlue});
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
  border-radius: 4px;
`

const ProgressText = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 1rem;
  color: ${theme.colors.accentCyan};
  text-align: center;
  margin-bottom: 2rem;
`

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`

const ResultCard = styled.div`
  background: ${theme.colors.bgSecondary};
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
`

const ResultValue = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.accentCyan};
`

const ResultLabel = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  color: ${theme.colors.textMuted};
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`
