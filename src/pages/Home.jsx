import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import { Button } from '../components/common/Button'
import { Card, CardIcon } from '../components/common/Card'
import { Terminal } from '../components/common/Terminal'
import {
  Shield,
  Network,
  Lock,
  Clock,
  CheckCircle,
  Server
} from 'lucide-react'

export const Home = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const stats = [
    { value: '4.2M+', label: 'Threats Blocked' },
    { value: '99.97%', label: 'Detection Rate' },
    { value: '247', label: 'Active Nodes' }
  ]

  const modules = [
    {
      icon: <Shield />,
      color: 'cyan',
      title: 'Threat Detection',
      description: 'Real-time behavioral analysis and anomaly detection using machine learning algorithms trained on millions of threat indicators.',
      link: 'Explore Module'
    },
    {
      icon: <Network />,
      color: 'blue',
      title: 'Network Shield',
      description: 'Advanced perimeter defense with deep packet inspection and automated response to intrusion attempts.',
      link: 'Explore Module'
    },
    {
      icon: <Lock />,
      color: 'orange',
      title: 'Data Vault',
      description: 'End-to-end encryption and secure storage with zero-knowledge architecture for maximum data protection.',
      link: 'Explore Module'
    }
  ]

  return (
    <HomeContainer>
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge>
            <span></span>
            SYSTEM STATUS: ONLINE
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cyber<span>Sentinals</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Advanced threat detection and autonomous defense systems for the modern security operations center.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button className="primary" whileHover={{ scale: 1.05 }}>
            <Shield size={18} />
            Launch Console
          </Button>
          <Button className="secondary" whileHover={{ scale: 1.05 }}>
            View Documentation
          </Button>
        </motion.div>

        <StatsBar>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </motion.div>
          ))}
        </StatsBar>
      </HeroSection>

      <Section>
        <SectionHeader>
          <Label>Core Operations</Label>
          <Title>Security Modules</Title>
          <Description>
            Integrated defense systems providing comprehensive protection across all attack vectors.
          </Description>
        </SectionHeader>

        <CardsGrid>
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardIcon color={module.color}>
                  {module.icon}
                </CardIcon>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <a href="#" className="card-link">
                  {module.link} <span>→</span>
                </a>
              </Card>
            </motion.div>
          ))}
        </CardsGrid>
      </Section>

      <Section>
        <Terminal />
      </Section>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  min-height: 100vh;
`

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  position: relative;
  text-align: center;
`

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 229, 199, 0.08);
  border: 1px solid rgba(0, 229, 199, 0.3);
  border-radius: 4px;
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.accentCyan};
  margin-bottom: 3rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: statusPulse 2s ease-in-out infinite;

  span {
    width: 8px;
    height: 8px;
    background: ${theme.colors.accentGreen};
    border-radius: 50%;
    animation: blink 1s ease-in-out infinite;
  }
`

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-top: 4rem;
  flex-wrap: wrap;
`

const StatValue = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 2.5rem;
  font-weight: 900;
  color: ${theme.colors.accentCyan};
  line-height: 1;
`

const StatLabel = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  color: ${theme.colors.textMuted};
  margin-top: 0.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
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

const animations = `
  @keyframes statusPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(0, 229, 199, 0.2); }
    50% { box-shadow: 0 0 40px rgba(0, 229, 199, 0.4); }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
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
