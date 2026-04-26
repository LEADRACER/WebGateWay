import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
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
  background: rgba(0, 212, 170, 0.1);
  border: 1px solid rgba(0, 212, 170, 0.3);
  border-radius: 8px;
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.accentCyan};
  margin-bottom: 3rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  box-shadow: 0 0 30px rgba(0, 212, 170, 0.1);
  transition: all 0.3s ease;

  span {
    width: 8px;
    height: 8px;
    background: #4ade80;
    border-radius: 50%;
    box-shadow: 0 0 10px #4ade80;
  }

  &:hover {
    box-shadow: 0 0 40px rgba(0, 212, 170, 0.2);
  }
`

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
  flex-wrap: wrap;
  padding: 2rem;
  background: rgba(0, 212, 170, 0.06);
  border: 1px solid rgba(0, 212, 170, 0.15);
  border-radius: 12px;
  backdrop-filter: blur(12px);
`

const StatValue = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 3rem;
  font-weight: 900;
  color: ${theme.colors.accentCyan};
  line-height: 1;
  text-shadow: 0 0 25px rgba(0, 212, 170, 0.3);
`

const StatLabel = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.7rem;
  color: ${theme.colors.textMuted};
  margin-top: 0.5rem;
  letter-spacing: 2px;
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
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  color: ${theme.colors.accentCyan};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 212, 170, 0.08);
  border: 1px solid rgba(0, 212, 170, 0.25);
  border-radius: 6px;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 92% 100%, 0 100%);
`

const animations = `
  @keyframes statusPulse {
    0%, 100% { 
      box-shadow: 0 0 20px rgba(0, 212, 170, 0.2), 0 0 40px rgba(0, 212, 170, 0.1);
    }
    50% { 
      box-shadow: 0 0 30px rgba(0, 212, 170, 0.3), 0 0 60px rgba(0, 212, 170, 0.15);
    }
  }
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
  gap: 1rem;
`

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${theme.colors.borderSubtle};
`

const TechStack = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  color: ${theme.colors.accentCyan};
  letter-spacing: 1px;
`

const ProjectStatus = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.7rem;
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const animations = `
  @keyframes statusPulse {
    0%, 100% { 
      box-shadow: 0 0 20px rgba(0, 212, 170, 0.2), 0 0 40px rgba(0, 212, 170, 0.1);
    }
    50% { 
      box-shadow: 0 0 30px rgba(0, 212, 170, 0.3), 0 0 60px rgba(0, 212, 170, 0.15);
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