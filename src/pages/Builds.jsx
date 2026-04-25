import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import { Card, CardIcon } from '../components/common/Card'
import { Button } from '../components/common/Button'
import {
  Network,
  Download,
  GitBranch,
  Star,
  Code,
  Shield,
  Zap,
  Eye
} from 'lucide-react'

export const Builds = () => {
  const [selectedBuild, setSelectedBuild] = useState(null)

  const builds = [
    {
      id: 'netvision',
      name: 'NetVision',
      version: 'v4.2',
      description: 'Real-time Network Intelligence & Discovery Dashboard - A high-performance network mapping tool designed for instant visibility and security awareness.',
      longDescription: 'NetVision is a high-performance, industrial-grade network mapping tool designed for instant visibility and security awareness. Built with a FastAPI backend and a React frontend, it provides a seamless, ultra-lightweight experience for discovering devices, services, and vulnerabilities on your local network.',
      techStack: ['Python', 'FastAPI', 'React', 'Nmap', 'WebSockets'],
      features: [
        'Progressive Discovery with real-time updates',
        'Multiple scan profiles (Quick, Deep, Security)',
        'Industrial UI with neutral grey palette',
        'Ultra-lightweight zero-animation architecture',
        'Live WebSockets for low-latency data streaming',
        'Advanced vulnerability scanning using Nmap scripts'
      ],
      github: 'https://github.com/LEADRACER/NetVision.git',
      stars: 0,
      language: 'JavaScript',
      lastUpdated: '2026-04-24',
      requirements: ['Python 3.8+', 'Node.js 18+', 'Nmap'],
      installation: 'Clone repository and run sudo ./run.sh'
    }
  ]

  return (
    <BuildsContainer>
      <Section>
        <SectionHeader>
          <Label>Builds & Tools</Label>
          <Title>My Open Source Projects</Title>
          <Description>
            Cybersecurity tools and network utilities built for security professionals and enthusiasts.
          </Description>
        </SectionHeader>

        <BuildsGrid>
          {builds.map((build) => (
            <BuildCard
              key={build.id}
              onClick={() => setSelectedBuild(build)}
            >
              <BuildHeader>
                <BuildIcon>
                  <Network size={24} />
                </BuildIcon>
                <BuildInfo>
                  <BuildName>{build.name}</BuildName>
                  <BuildVersion>{build.version}</BuildVersion>
                </BuildInfo>
                <BuildMeta>
                  <MetaItem>
                    <Star size={14} />
                    <span>{build.stars}</span>
                  </MetaItem>
                  <MetaItem>
                    <Code size={14} />
                    <span>{build.language}</span>
                  </MetaItem>
                </BuildMeta>
              </BuildHeader>

              <BuildDescription>
                {build.description}
              </BuildDescription>

              <BuildTechStack>
                {build.techStack.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </BuildTechStack>

              <BuildActions>
                <ActionButton
                  as="a"
                  href={build.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary"
                >
                  <GitBranch size={16} />
                  Source
                </ActionButton>
                <ActionButton
                  as="a"
                  href={`${build.github}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary"
                >
                  <Download size={16} />
                  Download
                </ActionButton>
              </BuildActions>
            </BuildCard>
          ))}
        </BuildsGrid>
      </Section>

      {selectedBuild && (
        <Modal onClick={() => setSelectedBuild(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalIcon>
                <Network size={32} />
              </ModalIcon>
              <ModalTitle>{selectedBuild.name}</ModalTitle>
              <ModalVersion>{selectedBuild.version}</ModalVersion>
              <CloseButton onClick={() => setSelectedBuild(null)}>×</CloseButton>
            </ModalHeader>

            <ModalBody>
              <ModalSection>
                <ModalSectionTitle>Overview</ModalSectionTitle>
                <ModalDescription>{selectedBuild.longDescription}</ModalDescription>
              </ModalSection>

              <ModalSection>
                <ModalSectionTitle>Key Features</ModalSectionTitle>
                <FeatureList>
                  {selectedBuild.features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <Shield size={16} />
                      <span>{feature}</span>
                    </FeatureItem>
                  ))}
                </FeatureList>
              </ModalSection>

              <ModalSection>
                <ModalSectionTitle>Requirements</ModalSectionTitle>
                <RequirementList>
                  {selectedBuild.requirements.map((req, index) => (
                    <RequirementItem key={index}>
                      <span>• {req}</span>
                    </RequirementItem>
                  ))}
                </RequirementList>
              </ModalSection>

              <ModalSection>
                <ModalSectionTitle>Installation</ModalSectionTitle>
                <InstallationCode>
                  <code>{selectedBuild.installation}</code>
                </InstallationCode>
              </ModalSection>
            </ModalBody>

            <ModalFooter>
              <ActionButton
                as="a"
                href={selectedBuild.github}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary"
              >
                <GitBranch size={16} />
                View Repository
              </ActionButton>
              <ActionButton
                as="a"
                href={`${selectedBuild.github}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="primary"
              >
                <Download size={16} />
                Get Latest Release
              </ActionButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </BuildsContainer>
  )
}

const BuildsContainer = styled.div`
  min-height: 100vh;
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

const BuildsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
`

const BuildCard = styled(Card)`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`

const BuildHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const BuildIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: rgba(77, 124, 255, 0.1);
  color: ${theme.colors.accentBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const BuildInfo = styled.div`
  flex: 1;
`

const BuildName = styled.h3`
  font-family: ${theme.fonts.mono};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.textPrimary};
  margin: 0;
`

const BuildVersion = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.accentCyan};
  margin-top: 0.25rem;
`

const BuildMeta = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  color: ${theme.colors.textMuted};
`

const BuildDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`

const BuildTechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`

const TechBadge = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.7rem;
  padding: 0.25rem 0.75rem;
  background: rgba(0, 229, 199, 0.1);
  color: ${theme.colors.accentCyan};
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const BuildActions = styled.div`
  display: flex;
  gap: 0.75rem;
`

const ActionButton = styled(Button)`
  flex: 1;
  justify-content: center;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(5, 5, 8, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`

const ModalContent = styled.div`
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 4px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`

const ModalHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${theme.colors.borderSubtle};
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`

const ModalIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background: rgba(77, 124, 255, 0.1);
  color: ${theme.colors.accentBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const ModalTitle = styled.h2`
  font-family: ${theme.fonts.mono};
  font-size: 2rem;
  font-weight: 900;
  color: ${theme.colors.textPrimary};
  margin: 0;
`

const ModalVersion = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 1rem;
  color: ${theme.colors.accentCyan};
  margin-top: 0.25rem;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: ${theme.colors.textMuted};
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${theme.colors.textPrimary};
  }
`

const ModalBody = styled.div`
  padding: 2rem;
`

const ModalSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const ModalSectionTitle = styled.h3`
  font-family: ${theme.fonts.mono};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.textPrimary};
  margin-bottom: 1rem;
`

const ModalDescription = styled.p`
  color: ${theme.colors.textSecondary};
  line-height: 1.7;
  font-size: 0.95rem;
`

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;

  svg {
    color: ${theme.colors.accentGreen};
    margin-top: 0.125rem;
    flex-shrink: 0;
  }
`

const RequirementList = styled.ul`
  list-style: none;
  padding: 0;
`

const RequirementItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
`

const InstallationCode = styled.div`
  background: ${theme.colors.bgDeep};
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 4px;
  padding: 1rem;
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.85rem;
  color: ${theme.colors.accentCyan};
`

const ModalFooter = styled.div`
  padding: 2rem;
  border-top: 1px solid ${theme.colors.borderSubtle};
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`