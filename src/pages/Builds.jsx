import { useState, useEffect, useCallback, memo } from 'react'
import { useBuilds } from '../hooks/useBuilds'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../components/common/Button'
import { Card, CardIcon } from '../components/common/Card'
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
  Tag,
  AlertCircle,
  RefreshCw
} from 'lucide-react'

export const Builds = memo(() => {
  const {
    builds,
    loading,
    error,
    refetch,
    createBuild,
    updateBuild,
    deleteBuild,
  } = useBuilds()

  const [selectedBuild, setSelectedBuild] = useState(null)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Modal state management
  const isViewModalOpen = selectedBuild && !isEditModalOpen && !isCreateModalOpen

  const handleBuildClick = useCallback((build) => {
    setSelectedBuild(build)
  }, [])

  // Close all modals
  const closeAllModals = useCallback(() => {
    setSelectedBuild(null)
    setIsCreateModalOpen(false)
    setIsEditModalOpen(false)
  }, [])

  const handleCloseModal = useCallback(() => {
    closeAllModals()
  }, [closeAllModals])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllModals()
      }
    }

    const hasOpenModal = isViewModalOpen || isCreateModalOpen || isEditModalOpen

    if (hasOpenModal) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isViewModalOpen, isCreateModalOpen, isEditModalOpen, closeAllModals])

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true)
    await refetch()
    setIsRefreshing(false)
  }, [refetch])

  const openCreateModal = useCallback(() => {
    setIsCreateModalOpen(true)
  }, [])

  const closeCreateModal = useCallback(() => {
    setIsCreateModalOpen(false)
  }, [])

  const openEditModal = useCallback((build) => {
    setSelectedBuild(build)
    setIsCreateModalOpen(false) // Ensure create modal is closed
    setIsEditModalOpen(true)
  }, [])

  const closeEditModal = useCallback(() => {
    setIsEditModalOpen(false)
    setSelectedBuild(null)
  }, [])

  const handleCreateBuild = useCallback(async (buildData) => {
    const result = await createBuild(buildData)
    if (result.success) {
      closeCreateModal()
    }
    return result
  }, [createBuild, closeCreateModal])

  const handleUpdateBuild = useCallback(async (id, buildData) => {
    const result = await updateBuild(id, buildData)
    if (result.success) {
      closeEditModal()
    }
    return result
  }, [updateBuild, closeEditModal])

  const handleDeleteBuild = useCallback(async (id) => {
    if (window.confirm('Are you sure you want to delete this build?')) {
      const result = await deleteBuild(id)
      if (result.success) {
        closeAllModals()
      }
      return result
    }
  }, [deleteBuild, closeAllModals])

  // Loading state
  if (loading && builds.length === 0) {
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
          <LoadingState>
            <RefreshCw size={48} />
            <LoadingText>Loading builds...</LoadingText>
          </LoadingState>
        </Section>
      </BuildsContainer>
    )
  }

  // Error state
  if (error && builds.length === 0) {
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
          <ErrorState>
            <AlertCircle size={48} />
            <ErrorTitle>Connection Error</ErrorTitle>
            <ErrorText>{error}</ErrorText>
            <Button className="primary" onClick={handleRefresh}>
              <RefreshCw size={18} />
              Retry
            </Button>
          </ErrorState>
        </Section>
      </BuildsContainer>
    )
  }

  return (
    <BuildsContainer>
      <Section>
        <SectionHeader>
          <HeaderContent>
            <Label>Builds & Tools</Label>
            <Title>Open Source Projects</Title>
            <Description>
              Cybersecurity tools and network utilities built for security professionals and enthusiasts. Open source, production-ready, and actively maintained.
            </Description>
          </HeaderContent>
          <HeaderActions>
            <Button className="secondary" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw size={18} />
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
          </HeaderActions>
        </SectionHeader>

        <BuildsGrid>
          {builds.map((build) => (
            <BuildCard
              key={build.id || `build-${Math.random()}`}
              onClick={() => handleBuildClick(build)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
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
                {build.techStack?.map((tech, idx) => (
                  <TechBadge key={`${build.id}-tech-${idx}`}>{tech}</TechBadge>
                ))}
              </BuildTechStack>
            </BuildCard>
          ))}
        </BuildsGrid>
      </Section>

      {/* Build Detail Modal */}
      <AnimatePresence>
        {isViewModalOpen && (
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
                    {selectedBuild.features?.map((feature, index) => (
                      <FeatureItem key={`${selectedBuild.id}-feature-${index}`}>
                        <Shield size={16} />
                        <span>{feature}</span>
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </ModalSection>

                <ModalSection>
                  <ModalSectionTitle>Requirements</ModalSectionTitle>
                  <RequirementList>
                    {selectedBuild.requirements?.map((req, index) => (
                      <RequirementItem key={`${selectedBuild.id}-req-${index}`}>
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
                        {Array.isArray(selectedBuild.releaseNotes) 
                          ? selectedBuild.releaseNotes.join('\n')
                          : selectedBuild.releaseNotes || 'No release notes available.'}
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

      {/* Create Build Modal */}
      {isCreateModalOpen && (
        <CreateEditModal
          type="create"
          onClose={closeCreateModal}
          onSubmit={handleCreateBuild}
        />
      )}

      {/* Edit Build Modal */}
      {isEditModalOpen && selectedBuild && (
        <CreateEditModal
          type="edit"
          build={selectedBuild}
          onClose={closeEditModal}
          onSubmit={(data) => handleUpdateBuild(selectedBuild.id, data)}
        />
      )}
    </BuildsContainer>
  )
})

const CreateEditModal = ({ type, build, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(() => ({
    id: build?.id || '',
    name: build?.name || '',
    version: build?.version || '',
    releaseTag: build?.releaseTag || '',
    releaseUrl: build?.releaseUrl || '',
    description: build?.description || '',
    longDescription: build?.longDescription || '',
    techStack: Array.isArray(build?.techStack) ? build.techStack.join(', ') : (build?.techStack || ''),
    features: Array.isArray(build?.features) ? build.features.join('\n') : (build?.features || ''),
    github: build?.github || '',
    stars: build?.stars || 0,
    language: build?.language || 'JavaScript',
    lastUpdated: build?.lastUpdated || new Date().toISOString().split('T')[0],
    requirements: Array.isArray(build?.requirements) ? build.requirements.join('\n') : (build?.requirements || ''),
    installation: build?.installation || '',
    releaseDate: build?.releaseDate || new Date().toISOString().split('T')[0],
    releaseNotes: Array.isArray(build?.releaseNotes) ? build.releaseNotes.join('\n') : (build?.releaseNotes || ''),
  }))

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      // Basic validation
      if (!formData.name.trim()) {
        throw new Error('Build name is required')
      }
      if (!formData.version.trim()) {
        throw new Error('Version is required')
      }
      if (!formData.description.trim()) {
        throw new Error('Description is required')
      }

      const processedData = {
        ...formData,
        techStack: formData.techStack.split(',').map(s => s.trim()).filter(s => s),
        features: formData.features.split('\n').map(s => s.trim()).filter(s => s),
        requirements: formData.requirements.split('\n').map(s => s.trim()).filter(s => s),
        releaseNotes: formData.releaseNotes.split('\n').filter(s => s.trim()),
        stars: parseInt(formData.stars) || 0,
      }

      await onSubmit(processedData)
    } catch (err) {
      setError(err.message || 'Failed to save build')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <ModalHeader>
          <ModalTitleArea>
            <ModalTitle>{type === 'create' ? 'Create New Build' : 'Edit Build'}</ModalTitle>
          </ModalTitleArea>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>
          {error && (
            <ErrorAlert>
              <AlertCircle size={16} />
              <span>{error}</span>
            </ErrorAlert>
          )}
          <CreateForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>ID *</FormLabel>
              <FormInput
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder="e.g., netvision"
                disabled={type === 'edit'}
                required
              />
            </FormGroup>
            <FormRow>
              <FormGroup>
                <FormLabel>Name *</FormLabel>
                <FormInput
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Project name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Version *</FormLabel>
                <FormInput
                  name="version"
                  value={formData.version}
                  onChange={handleChange}
                  placeholder="v1.0.0"
                  required
                />
              </FormGroup>
            </FormRow>
            <FormGroup>
              <FormLabel>Description *</FormLabel>
              <FormInput
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Short description"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Long Description</FormLabel>
              <FormTextArea
                name="longDescription"
                value={formData.longDescription}
                onChange={handleChange}
                placeholder="Detailed description of the project..."
                rows={3}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Tech Stack (comma-separated)</FormLabel>
              <FormInput
                name="techStack"
                value={formData.techStack}
                onChange={handleChange}
                placeholder="Python, FastAPI, React"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Features (one per line)</FormLabel>
              <FormTextArea
                name="features"
                value={formData.features}
                onChange={handleChange}
                placeholder="• Feature 1\n• Feature 2"
                rows={3}
              />
            </FormGroup>
            <FormRow>
              <FormGroup>
                <FormLabel>GitHub URL</FormLabel>
                <FormInput
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/user/repo"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Release URL</FormLabel>
                <FormInput
                  name="releaseUrl"
                  value={formData.releaseUrl}
                  onChange={handleChange}
                  placeholder="https://github.com/user/repo/releases/tag/v1.0.0"
                />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <FormLabel>Release Tag</FormLabel>
                <FormInput
                  name="releaseTag"
                  value={formData.releaseTag}
                  onChange={handleChange}
                  placeholder="v1.0.0"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Release Date</FormLabel>
                <FormInput
                  name="releaseDate"
                  type="date"
                  value={formData.releaseDate}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <FormLabel>Language</FormLabel>
                <FormInput
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  placeholder="JavaScript"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Stars</FormLabel>
                <FormInput
                  name="stars"
                  type="number"
                  value={formData.stars}
                  onChange={handleChange}
                  min="0"
                />
              </FormGroup>
            </FormRow>
            <FormGroup>
              <FormLabel>Requirements (one per line)</FormLabel>
              <FormTextArea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="• Python 3.8+\n• Node.js 18+"
                rows={2}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Installation Command</FormLabel>
              <FormInput
                name="installation"
                value={formData.installation}
                onChange={handleChange}
                placeholder="Clone and run ./install.sh"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Release Notes</FormLabel>
              <FormTextArea
                name="releaseNotes"
                value={formData.releaseNotes}
                onChange={handleChange}
                placeholder="What's new in this release..."
                rows={4}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Last Updated</FormLabel>
              <FormInput
                name="lastUpdated"
                type="date"
                value={formData.lastUpdated}
                onChange={handleChange}
              />
            </FormGroup>
            <FormActions>
              <Button type="button" className="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="primary" disabled={submitting}>
                {submitting ? 'Saving...' : type === 'create' ? 'Create Build' : 'Update Build'}
              </Button>
            </FormActions>
          </CreateForm>
        </ModalBody>
      </ModalContent>
    </Modal>
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

const HeaderContent = styled.div`
  margin-bottom: 2rem;
`

const HeaderActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 32px 80px var(--accentCyan-12);
    background: var(--bgElevated);
    border-color: var(--accentCyan-25);
  }
`

const BuildHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const BuildIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accentCyan-12), var(--accentCyan-08));
  border: 1px solid var(--accentCyan-20);
  color: var(--accentCyan);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px var(--glowCyan);

  ${BuildCard}:hover & {
    background: linear-gradient(135deg, var(--accentCyan-18), var(--accentCyan-12));
    border-color: var(--accentCyan);
    transform: scale(1.08);
    box-shadow: 0 8px 24px var(--glowCyan);
  }
`

const BuildInfo = styled.div`
  flex: 1;
`

const BuildNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
`

const BuildName = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--textPrimary);
  margin: 0;
  line-height: 1.3;
`

const BuildMetaRow = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
`

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--textMuted);
`

const DownloadArrow = styled.div`
  color: var(--accentCyan);
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.2s ease;

  ${BuildCard}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`

const VersionBadge = styled.span`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, var(--accentCyan-15), var(--accentCyan-10));
  color: var(--accentCyan);
  border-radius: 12px;
  border: 1px solid var(--accentCyan-25);
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
`

const BuildDescription = styled.p`
  color: var(--textSecondary);
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
  line-height: 1.6;
  font-weight: 400;
`

const BuildTechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`

const TechBadge = styled.span`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.375rem 0.875rem;
  background: linear-gradient(135deg, var(--accentCyan-12), var(--accentCyan-08));
  color: var(--accentCyan);
  border-radius: 12px;
  border: 1px solid var(--accentCyan-20);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, var(--accentCyan-18), var(--accentCyan-12));
    border-color: var(--accentCyan);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px var(--glowCyan);
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  backdrop-filter: blur(20px);
`

const ModalContent = styled.div`
  background: var(--bgSecondary);
  border: 1px solid var(--borderSubtle);
  border-radius: 20px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 32px 100px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
`

const ModalHeader = styled.div`
  padding: 2.5rem;
  border-bottom: 1px solid var(--borderSubtle);
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  position: relative;
  background: var(--bgSecondary);
  border-radius: 20px 20px 0 0;
`

const ModalIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--accentCyan-15), var(--accentCyan-10));
  border: 1px solid var(--accentCyan-25);
  color: var(--accentCyan);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px var(--glowCyan);

  &:hover {
    background: linear-gradient(135deg, var(--accentCyan-20), var(--accentCyan-15));
    border-color: var(--accentCyan);
    transform: scale(1.05);
    box-shadow: 0 12px 32px var(--glowCyan);
  }
`

const ModalTitleArea = styled.div`
  flex: 1;
`

const ModalTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--textPrimary);
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
`

const ModalVersion = styled.div`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--accentCyan);
  letter-spacing: 0.5px;
  background: var(--accentCyan-08);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  border: 1px solid var(--accentCyan-20);
`

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--bgElevated);
  border: 1px solid var(--borderSubtle);
  font-size: 1.25rem;
  color: var(--textMuted);
  cursor: pointer;
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &:hover {
    color: var(--textPrimary);
    background: var(--borderSubtle);
    border-color: var(--accentCyan-25);
    transform: scale(1.05);
  }
`

const ModalBody = styled.div`
  padding: 2rem;
  background: var(--bgSecondary);
`

const ModalSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const ModalSectionTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--textPrimary);
  margin-bottom: 1.25rem;
  letter-spacing: 0.5px;
  text-transform: none;
`

const ModalDescription = styled.p`
  color: var(--textSecondary);
  line-height: 1.7;
  font-size: 1rem;
  font-weight: 400;
`

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  margin-bottom: 1rem;
  color: var(--textSecondary);
  font-size: 0.95rem;
  line-height: 1.6;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background: var(--accentCyan-05);
  }

  svg {
    color: var(--accentCyan);
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
  color: var(--textSecondary);
  font-size: 0.9rem;
  padding-left: 0.5rem;
  border-left: 3px solid var(--accentCyan);
`

const InstallationCode = styled.div`
  background: var(--bgDeep);
  border: 1px solid var(--borderSubtle);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.85rem;
  color: var(--accentCyan);
  overflow-x: auto;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3);
`

const ModalFooter = styled.div`
  padding: 2rem 2.5rem;
  border-top: 1px solid var(--borderSubtle);
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  background: var(--bgSecondary);
  border-radius: 0 0 20px 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`

const ReleaseInfo = styled.div`
  background: var(--accentCyan-08);
  border: 1px solid var(--accentCyan-25);
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
  border-bottom: 1px solid var(--borderSubtle);
`

const ReleaseDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.8rem;
  color: var(--textSecondary);

  svg {
    color: var(--accentCyan);
  }
`

const ReleaseTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.8rem;
  color: var(--textSecondary);

  svg {
    color: var(--accentGreen);
  }
`

const ReleaseNotesSection = styled.div``

const ReleaseNotesTitle = styled.h4`
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--textPrimary);
  margin-bottom: 0.75rem;
`

const ReleaseNotesContent = styled.div`
  color: var(--textSecondary);
  font-size: 0.85rem;
  line-height: 1.7;
  max-height: 200px;
  overflow-y: auto;

  h1, h2, h3, h4 {
    font-family: 'SF Mono', 'Fira Code', monospace;
    color: var(--textPrimary);
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  code, pre {
    font-family: 'SF Mono', 'Fira Code', monospace;
    background: var(--bgDeep);
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

const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  color: var(--textMuted);
  gap: 1rem;

  svg {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

const LoadingText = styled.p`
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const ErrorState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  color: var(--textMuted);
  text-align: center;
  gap: 1rem;
`

const ErrorTitle = styled.h3`
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 1.5rem;
  color: var(--textPrimary);
  margin-bottom: 0.5rem;
`

const ErrorText = styled.p`
  color: var(--textSecondary);
  max-width: 400px;
  margin-bottom: 1.5rem;
`

const ErrorAlert = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 69, 58, 0.1);
  border: 1px solid rgba(255, 69, 58, 0.3);
  border-radius: 8px;
  color: #ff453a;
  margin-bottom: 1.5rem;

  svg {
    flex-shrink: 0;
  }

  span {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 0.85rem;
  }
`

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FormLabel = styled.label`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--textSecondary);
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
  display: block;
`

const FormInput = styled.input`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  padding: 0.875rem 1.125rem;
  background: var(--bgElevated);
  border: 1px solid var(--borderSubtle);
  border-radius: 12px;
  color: var(--textPrimary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &:focus {
    outline: none;
    border-color: var(--accentCyan);
    box-shadow: 0 0 0 3px var(--accentCyan-12);
    background: var(--bgPrimary);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: var(--bgDeep);
  }

  &::placeholder {
    color: var(--textMuted);
    font-weight: 400;
  }
`

const FormTextArea = styled.textarea`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  padding: 0.875rem 1.125rem;
  background: var(--bgElevated);
  border: 1px solid var(--borderSubtle);
  border-radius: 12px;
  color: var(--textPrimary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  resize: vertical;
  backdrop-filter: blur(10px);
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: var(--accentCyan);
    box-shadow: 0 0 0 3px var(--accentCyan-12);
    background: var(--bgPrimary);
  }

  &::placeholder {
    color: var(--textMuted);
    font-weight: 400;
  }
`

const FormActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--borderSubtle);
`