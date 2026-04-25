import styled from 'styled-components'
import { theme } from '../styles/theme'
import { Card, CardIcon } from '../components/common/Card'
import {
  Monitor,
  Shield,
  Lock,
  Server,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export const Systems = () => {
  const systems = [
    {
      icon: <Shield />,
      color: 'cyan',
      title: 'Zero Trust Network',
      description: 'Micro-segmentation and continuous verification for all users and devices across the infrastructure.',
      features: ['Identity-based access', 'Device posture checks', 'Continuous authentication']
    },
    {
      icon: <Server />,
      color: 'blue',
      title: 'High Availability',
      description: '99.99% uptime SLA with multi-region failover and automated disaster recovery protocols.',
      features: ['Multi-region deployment', 'Automated failover', 'Real-time replication']
    },
    {
      icon: <CheckCircle />,
      color: 'orange',
      title: 'Compliance Ready',
      description: 'SOC 2 Type II, ISO 27001, HIPAA, and GDPR compliant out of the box with automated reporting.',
      features: ['SOC 2 Type II certified', 'ISO 27001 compliant', 'GDPR ready', 'HIPAA capable']
    }
  ]

  const metrics = [
    { label: 'Uptime SLA', value: '99.99%' },
    { label: 'Response Time', value: '<50ms' },
    { label: 'Data Centers', value: '12' },
    { label: 'Countries', value: '8' }
  ]

  return (
    <SystemsContainer>
      <Section>
        <SectionHeader>
          <Label>Infrastructure</Label>
          <Title>Security Architecture</Title>
          <Description>
            Enterprise-grade infrastructure designed for maximum security and availability.
          </Description>
        </SectionHeader>

        <CardsGrid>
          {systems.map((system) => (
            <Card key={system.title}>
              <CardIcon color={system.color}>
                {system.icon}
              </CardIcon>
              <h3>{system.title}</h3>
              <p>{system.description}</p>
              <FeaturesList>
                {system.features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <CheckCircle size={14} />
                    <span>{feature}</span>
                  </FeatureItem>
                ))}
              </FeaturesList>
            </Card>
          ))}
        </CardsGrid>
      </Section>

      <Section>
        <SectionHeader>
          <Label>Performance Metrics</Label>
          <Title>Global Infrastructure</Title>
          <Description>
            World-class performance backed by our distributed network of secure data centers.
          </Description>
        </SectionHeader>

        <MetricsGrid>
          {metrics.map((metric) => (
            <MetricCard key={metric.label}>
              <MetricValue>{metric.value}</MetricValue>
              <MetricLabel>{metric.label}</MetricLabel>
            </MetricCard>
          ))}
        </MetricsGrid>

        <ArchitectureDiagram>
          <DiagramTitle>Network Topology</DiagramTitle>
          <DiagramDescription>
            Our distributed architecture ensures low-latency access and high availability across all regions.
          </DiagramDescription>
          <DiagramVisual>
            {Array.from({ length: 8 }).map((_, i) => (
              <Node key={i} delay={i * 0.1}>
                <NodeCore />
                <NodeRing />
              </Node>
            ))}
          </DiagramVisual>
        </ArchitectureDiagram>
      </Section>
    </SystemsContainer>
  )
}

const SystemsContainer = styled.div`
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

const FeaturesList = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${theme.colors.borderSubtle};
`

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: 0.5rem;

  svg {
    color: ${theme.colors.accentGreen};
  }
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const MetricCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.colors.accentBlue};
    transform: translateY(-4px);
  }
`

const MetricValue = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 2.5rem;
  font-weight: 900;
  color: ${theme.colors.accentCyan};
`

const MetricLabel = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const ArchitectureDiagram = styled.div`
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 4px;
  padding: 3rem;
  margin-top: 4rem;
  text-align: center;
`

const DiagramTitle = styled.h3`
  font-family: ${theme.fonts.mono};
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${theme.colors.textPrimary};
`

const DiagramDescription = styled.p`
  color: ${theme.colors.textSecondary};
  margin-bottom: 2rem;
  font-size: 0.9rem;
`

const DiagramVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
`

const Node = styled.div`
  position: relative;
  animation: nodePulse 2s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0}s;
`

const NodeCore = styled.div`
  width: 20px;
  height: 20px;
  background: ${theme.colors.accentCyan};
  border-radius: 50%;
  position: relative;
  z-index: 2;
`

const NodeRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 1px solid ${theme.colors.accentCyan};
  border-radius: 50%;
  opacity: 0.3;
`

const animations = `
  @keyframes nodePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`

const StyleInjector = () => {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = animations
    document.head.appendChild(style)
    return () => style.remove()
  }, [])
  return null
}

export { StyleInjector }
