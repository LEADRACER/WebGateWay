import { useState, useEffect, useCallback, memo } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
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
  Eye,
  Calendar,
  Tag
} from 'lucide-react'

export const Builds = memo(() => {
  const [selectedBuild, setSelectedBuild] = useState(null)

  const handleBuildClick = useCallback((build) => {
    setSelectedBuild(build)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedBuild(null)
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal()
      }
    }

    if (selectedBuild) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [selectedBuild, handleCloseModal])

   const builds = [
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
       releaseNotes: `# 🌐 NetVision v4.3.0 — Multi-Subnet & Hop-Based Scanning

## 🚀 What's New
This major update adds **multi-subnet scanning**, **configurable scan durations**, and experimental **hop-based router discovery** to NetVision.

### 🌐 Multi-Subnet Scanning
- ALL SUBNETS Mode: One-click scanning of 5 common private /24 networks
- Custom Target Input with CIDR notation support
- Live Subnet Indicator in sidebar
- Sequential scanning with consolidated results

### ⏱️ Configurable Scan Duration
- Choose between Unlimited, 30 seconds, or 1 minute
- Automatic Nmap timeout adjustment

### 🛣️ Hop-Based Router Scanning (Experimental)
- ICMP traceroute to discover router hops
- Auto-discovers local /24 subnets along path
- Devices tagged with hop_count

### 🎨 UI/UX Enhancements
- Sticky sidebar with live statistics
- Animated scan progress bar
- Improved device cards with port badges
- Enhanced details overlay (480px width)`
     }
   ]

  return (
    <BuildsContainer>
      <Section>
        <SectionHeader>
          <Label>Builds & Tools</Label>
          <Title>Open Source Projects</Title>
          <Description>
            Cybersecurity tools and network utilities built for security professionals and enthusiasts. Open source, production-ready, and actively maintained.
          </Description>
        </SectionHeader>

        <BuildsGrid>
          {builds.map((build) => (
            <BuildCard
              key={build.id}
              onClick={() => handleBuildClick(build)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <BuildHeader>
                <BuildIcon>
                  <Network size={24} />
                </BuildIcon>
                <BuildInfo>
                  <BuildNameRow>
                    <BuildName>{build.name}</BuildName>
                    <VersionBadge>{build.version}</VersionBadge>
                  </BuildNameRow>
                  <BuildMetaRow>
                    <MetaItem>
                      <GitBranch size={12} />
                      <span>{build.language}</span>
                    </MetaItem>
                    <MetaItem>
                      <Star size={12} />
                      <span>{build.stars} stars</span>
                    </MetaItem>
                    <MetaItem>
                      <Zap size={12} />
                      <span>Updated {build.lastUpdated}</span>
                    </MetaItem>
                  </BuildMetaRow>
                </BuildInfo>
                <DownloadArrow>
                  <Download size={20} />
                </DownloadArrow>
              </BuildHeader>

              <BuildDescription>
                {build.description}
              </BuildDescription>

              <BuildTechStack>
                {build.techStack.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </BuildTechStack>
            </BuildCard>
          ))}
        </BuildsGrid>
      </Section>

      <AnimatePresence>
        {selectedBuild && (
          <Modal
            onClick={handleCloseModal}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ModalContent onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
              <ModalHeader>
                <ModalIcon>
                  <Network size={32} />
                </ModalIcon>
                <ModalTitleArea>
                  <ModalTitle id="modal-title">{selectedBuild.name}</ModalTitle>
                  <ModalVersion>Version {selectedBuild.version}</ModalVersion>
                </ModalTitleArea>
                <CloseButton onClick={handleCloseModal} aria-label="Close modal">×</CloseButton>
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
                  <ModalSectionTitle>Quick Install</ModalSectionTitle>
                  <InstallationCode>
                    <code>{selectedBuild.installation}</code>
                  </InstallationCode>
                </ModalSection>

                <ModalSection>
                  <ModalSectionTitle>Release Details</ModalSectionTitle>
                  <ReleaseInfo>
                    <ReleaseMeta>
                      <ReleaseDate>
                        <Calendar size={16} />
                        <span>Released: {selectedBuild.releaseDate || '2026-04-25'}</span>
                      </ReleaseDate>
                      <ReleaseTag>
                        <Tag size={16} />
                        <span>Tag: {selectedBuild.releaseTag || 'v4.3.0'}</span>
                      </ReleaseTag>
                    </ReleaseMeta>
                    <ReleaseNotesSection>
                      <ReleaseNotesTitle>Release Notes</ReleaseNotesTitle>
                      <ReleaseNotesContent>
                        {selectedBuild.releaseNotes || `This release includes important updates and improvements to the project. Check the full release page for changelog details.`}
                      </ReleaseNotesContent>
                    </ReleaseNotesSection>
                  </ReleaseInfo>
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
                  View Source
                </ActionButton>
                <ActionButton
                  as="a"
                  href={selectedBuild.releaseUrl || `${selectedBuild.github}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary"
                >
                  <Download size={16} />
                  Get Release {selectedBuild.version}
                </ActionButton>
              </ModalFooter>
          </ModalContent>
        </Modal>
        )}
      </AnimatePresence>
    </BuildsContainer>
  )
})

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
  background: rgba(0, 212, 170, 0.08);
  border: 1px solid rgba(0, 212, 170, 0.25);
  border-radius: 6px;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 92% 100%, 0 100%);
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const BuildCard = styled(Card)`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
    background: ${theme.colors.bgElevated};
    border-color: ${theme.colors.borderActive};
  }
`

const BuildHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const BuildIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: rgba(0, 212, 170, 0.12);
  border: 1px solid rgba(0, 212, 170, 0.25);
  color: ${theme.colors.accentCyan};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${BuildCard}:hover & {
    background: rgba(0, 212, 170, 0.18);
    border-color: ${theme.colors.accentCyan};
    transform: scale(1.05);
  }
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
  background: rgba(0, 212, 170, 0.12);
  color: ${theme.colors.accentCyan};
  border-radius: 6px;
  border: 1px solid rgba(0, 212, 170, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 212, 170, 0.18);
    border-color: ${theme.colors.accentCyan};
  }
`

const BuildActions = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const ActionButton = styled(Button)`
  flex: 1;
  justify-content: center;
`

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(13, 17, 23, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  backdrop-filter: blur(10px);
`

const ModalContent = styled.div`
  background: ${theme.colors.bgSecondary};
  border: 1px solid ${theme.colors.borderActive};
  border-radius: 12px;
  width: 100%;
  max-width: 850px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
`

const ModalHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${theme.colors.borderSubtle};
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  position: relative;
  background: ${theme.colors.bgSecondary};
  border-radius: 12px 12px 0 0;
`

const ModalIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background: rgba(0, 212, 170, 0.12);
  border: 1px solid rgba(0, 212, 170, 0.3);
  color: ${theme.colors.accentCyan};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 170, 0.18);
    border-color: ${theme.colors.accentCyan};
    transform: scale(1.05);
  }
`

const ModalTitleArea = styled.div`
  flex: 1;
`

const ModalTitle = styled.h2`
  font-family: ${theme.fonts.mono};
  font-size: 1.75rem;
  font-weight: 900;
  color: ${theme.colors.textPrimary};
  margin: 0 0 0.25rem 0;
`

const ModalVersion = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.85rem;
  color: ${theme.colors.accentCyan};
  letter-spacing: 1px;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: ${theme.colors.textMuted};
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    color: ${theme.colors.textPrimary};
    background: ${theme.colors.borderSubtle};
    transform: scale(1.1);
  }
`

const ModalBody = styled.div`
  padding: 2rem;
  background: ${theme.colors.bgSecondary};
`

const ModalSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const ModalSectionTitle = styled.h3`
  font-family: ${theme.fonts.mono};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${theme.colors.textPrimary};
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
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
    color: ${theme.colors.accentCyan};
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
  padding-left: 0.5rem;
  border-left: 3px solid ${theme.colors.accentCyan};
`

const InstallationCode = styled.div`
  background: ${theme.colors.bgDeep};
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 8px;
  padding: 1rem 1.25rem;
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.85rem;
  color: ${theme.colors.accentCyan};
  overflow-x: auto;
`

const ModalFooter = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid ${theme.colors.borderSubtle};
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  background: ${theme.colors.bgSecondary};
  border-radius: 0 0 12px 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 1rem;
  }
`

const BuildNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
`

const BuildMetaRow = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
`

const DownloadArrow = styled.div`
  color: ${theme.colors.accentCyan};
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.2s ease;

  ${BuildCard}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`

const VersionBadge = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.7rem;
  padding: 0.25rem 0.6rem;
  background: rgba(0, 212, 170, 0.15);
  color: ${theme.colors.accentCyan};
  border-radius: 6px;
  border: 1px solid rgba(0, 212, 170, 0.3);
  letter-spacing: 0.5px;
`

const ModalTitleArea = styled.div`
  flex: 1;
`

const ReleaseInfo = styled.div`
  background: rgba(0, 212, 170, 0.08);
  border: 1px solid rgba(0, 212, 170, 0.25);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1rem;
`

const ReleaseMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${theme.colors.borderSubtle};
`

const ReleaseDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.textSecondary};

  svg {
    color: ${theme.colors.accentCyan};
  }
`

const ReleaseTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.textSecondary};

  svg {
    color: ${theme.colors.accentGreen};
  }
`

const ReleaseNotesSection = styled.div``

const ReleaseNotesTitle = styled.h4`
  font-family: ${theme.fonts.mono};
  font-size: 0.9rem;
  font-weight: 600;
  color: ${theme.colors.textPrimary};
  margin-bottom: 0.75rem;
`

const ReleaseNotesContent = styled.div`
  color: ${theme.colors.textSecondary};
  font-size: 0.85rem;
  line-height: 1.7;
  max-height: 200px;
  overflow-y: auto;

  h1, h2, h3, h4 {
    font-family: ${theme.fonts.mono};
    color: ${theme.colors.textPrimary};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  code, pre {
    font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
    background: ${theme.colors.bgDeep};
    padding: 0.125rem 0.375rem;
    border-radius: 3px;
    font-size: 0.8rem;
  }

  pre {
    padding: 1rem;
    overflow-x: auto;
    margin: 0.75rem 0;
  }
`

const ModalContent = styled.div`
  background: ${theme.colors.grey900}; /* Using darker background */
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
  background: ${theme.colors.grey900}; /* Using darker background */
`

const ModalIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background: rgba(0, 212, 170, 0.12);
  border: 1px solid rgba(0, 212, 170, 0.25);
  color: ${theme.colors.accentCyan};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 170, 0.18);
    border-color: ${theme.colors.accentCyan};
  }
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
  background: ${theme.colors.grey900}; /* Using darker background */
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
  border-radius: 8px;
  padding: 1rem 1.25rem;
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.85rem;
  color: ${theme.colors.accentCyan};
  overflow-x: auto;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3);
`

const ModalFooter = styled.div`
  padding: 2rem;
  border-top: 1px solid ${theme.colors.borderSubtle};
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  background: ${theme.colors.grey900}; /* Using darker background */

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 1rem;
  }
`

const BuildNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
`

const BuildMetaRow = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
`

const DownloadArrow = styled.div`
  color: ${theme.colors.accentCyan};
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.2s ease;
  
  ${BuildCard}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`

const VersionBadge = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 0.7rem;
  padding: 0.25rem 0.6rem;
  background: rgba(0, 212, 170, 0.15);
  color: ${theme.colors.accentCyan};
  border-radius: 6px;
  border: 1px solid rgba(0, 212, 170, 0.3);
  letter-spacing: 0.5px;
`

const ModalTitleArea = styled.div`
  flex: 1;
`

const ReleaseInfo = styled.div`
  background: rgba(0, 212, 170, 0.08);
  border: 1px solid rgba(0, 212, 170, 0.25);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1rem;
`

const ReleaseMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${theme.colors.borderSubtle};
`

const ReleaseDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.textSecondary};
  
  svg {
    color: ${theme.colors.accentCyan};
  }
`

const ReleaseTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.textSecondary};
  
  svg {
    color: ${theme.colors.accentGreen};
  }
`

const ReleaseNotesSection = styled.div``

const ReleaseNotesTitle = styled.h4`
  font-family: ${theme.fonts.mono};
  font-size: 0.9rem;
  font-weight: 600;
  color: ${theme.colors.textPrimary};
  margin-bottom: 0.75rem;
`

const ReleaseNotesContent = styled.div`
  color: ${theme.colors.textSecondary};
  font-size: 0.85rem;
  line-height: 1.7;
  max-height: 200px;
  overflow-y: auto;
  
  h1, h2, h3, h4 {
    font-family: ${theme.fonts.mono};
    color: ${theme.colors.textPrimary};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  
  code, pre {
    font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
    background: ${theme.colors.bgDeep};
    padding: 0.125rem 0.375rem;
    border-radius: 3px;
    font-size: 0.8rem;
  }
  
  pre {
    padding: 1rem;
    overflow-x: auto;
    margin: 0.75rem 0;
  }
`
