import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styled from 'styled-components'
import { Button } from '../components/common/Button'
import { Card, CardIcon } from '../components/common/Card'
import {
  Network,
  Code,
  Shield,
  Zap
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

   const projects = [
     {
       icon: <Network />,
       color: 'blue',
       title: 'NetVision',
       description: 'Real-time Network Intelligence & Discovery Dashboard - Advanced network mapping tool with FastAPI backend and React frontend.',
       tech: 'Python • React • FastAPI',
       status: 'Latest: v4.3.0'
     },
     {
       icon: <Code />,
       color: 'cyan',
       title: 'Coming Soon',
       description: 'More cybersecurity tools and utilities are in development. Stay tuned for updates.',
       tech: 'TBA',
       status: 'In Development'
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
          Open source cybersecurity tools and network utilities for security professionals and enthusiasts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button className="primary" as="a" href="/builds">
            <Shield size={18} />
            View Builds
          </Button>
          <Button className="secondary" as="a" href="https://github.com/LEADRACER" target="_blank" rel="noopener noreferrer">
            <Code size={18} />
            GitHub Profile
          </Button>
        </motion.div>

        <StatsBar>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <StatValue>1</StatValue>
            <StatLabel>Open Source</StatLabel>
            <StatLabel>Project</StatLabel>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <StatValue>v4.2</StatValue>
            <StatLabel>Latest</StatLabel>
            <StatLabel>Version</StatLabel>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <StatValue>JS</StatValue>
            <StatLabel>Primary</StatLabel>
            <StatLabel>Language</StatLabel>
          </motion.div>
        </StatsBar>
      </HeroSection>

      <Section>
        <SectionHeader>
          <Label>Featured Projects</Label>
          <Title>Open Source Cybersecurity Tools</Title>
          <Description>
            Professional-grade security utilities built for network discovery, vulnerability assessment, and threat intelligence.
          </Description>
        </SectionHeader>

        <CardsGrid>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardIcon color={project.color}>
                  {project.icon}
                </CardIcon>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectMeta>
                  <TechStack>{project.tech}</TechStack>
                  <ProjectStatus>{project.status}</ProjectStatus>
                </ProjectMeta>
                {project.title === 'NetVision' && (
                  <Button className="primary" as="a" href="/builds" style={{ marginTop: '1rem' }}>
                    <Zap size={16} />
                    Explore Build
                  </Button>
                )}
              </Card>
            </motion.div>
          ))}
        </CardsGrid>
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
  padding: 4rem 1.5rem;
  position: relative;
  text-align: center;
`

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: var(--accentCyan-10);
  border: 1px solid var(--accentCyan-25);
  border-radius: 20px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accentCyan);
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 4px 12px var(--accentCyan-15);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  span {
    width: 6px;
    height: 6px;
    background: var(--accentGreen);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--accentGreen);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px var(--accentCyan-20);
  }
`

const mH1 = styled(motion.h1)`
  font-family: 'Inter', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--textPrimary);
  line-height: 1.1;

  span {
    color: var(--accentCyan);
    background: linear-gradient(135deg, var(--accentCyan), var(--accentBlue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 0 20px var(--glowCyan));
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const mP = styled(motion.p)`
  color: var(--textSecondary);
  max-width: 650px;
  margin-bottom: 3rem;
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 400;
`

const mDiv = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
`

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;
  padding: 2.5rem;
  background: var(--bgElevated);
  border: 1px solid var(--borderSubtle);
  border-radius: 16px;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px var(--accentCyan-08);

  @media (max-width: 768px) {
    gap: 2rem;
    padding: 2rem;
  }
`

const StatValue = styled.div`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accentCyan);
  line-height: 1;
  filter: drop-shadow(0 0 15px var(--glowCyan));
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--textMuted);
  letter-spacing: 1px;
  text-transform: uppercase;
`

const Section = styled.section`
  padding: 4rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`

const Label = styled.span`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accentCyan);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: var(--accentCyan-08);
  border: 1px solid var(--accentCyan-20);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`

const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--textPrimary);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`

const Description = styled.p`
  color: var(--textSecondary);
  max-width: 650px;
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 400;
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
`

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--borderSubtle);
`

const TechStack = styled.div`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--accentCyan);
  letter-spacing: 0.5px;
  background: var(--accentCyan-08);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  border: 1px solid var(--accentCyan-15);
`

const ProjectStatus = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--textMuted);
  text-transform: uppercase;
  letter-spacing: 1px;
  background: var(--bgElevated);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  border: 1px solid var(--borderSubtle);
`

const animations = `
  @keyframes statusPulse {
    0%, 100% { 
      box-shadow: 0 0 20px var(--accentCyan-20), 0 0 40px var(--accentCyan-10);
    }
    50% { 
      box-shadow: 0 0 30px var(--accentCyan-30), 0 0 60px var(--accentCyan-15);
    }
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