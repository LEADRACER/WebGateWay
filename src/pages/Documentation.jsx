import { useState } from 'react'
import styled from 'styled-components'
import { Card, CardIcon } from '../components/common/Card'
import {
  FileText,
  Shield,
  Server,
  BookOpen,
  Lock,
  Network
} from 'lucide-react'

export const Documentation = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Docs', count: 6 },
    { id: 'getting-started', label: 'Getting Started', count: 2 },
    { id: 'api', label: 'API Reference', count: 3 },
    { id: 'security', label: 'Security', count: 1 }
  ]

  const documents = [
    {
      icon: <FileText />,
      color: 'cyan',
      category: 'getting-started',
      tag: 'Getting Started',
      title: 'Quick Start Guide',
      description: 'Deploy your first security node in under 5 minutes with our automated setup wizard.',
      updated: '2 days ago',
      readTime: '12 min read'
    },
    {
      icon: <Shield />,
      color: 'blue',
      category: 'security',
      tag: 'Security',
      title: 'Hardening Checklist',
      description: 'Complete system hardening procedures for production environments and compliance requirements.',
      updated: '1 week ago',
      readTime: '24 min read'
    },
    {
      icon: <Server />,
      color: 'orange',
      category: 'api',
      tag: 'API',
      title: 'REST API Reference',
      description: 'Complete API documentation for programmatic access to all security modules and endpoints.',
      updated: '3 days ago',
      readTime: '45 min read'
    },
    {
      icon: <BookOpen />,
      color: 'purple',
      category: 'getting-started',
      tag: 'Tutorial',
      title: 'First Deployment Tutorial',
      description: 'Step-by-step guide to deploying your first security stack in production.',
      updated: '5 days ago',
      readTime: '18 min read'
    },
    {
      icon: <Lock />,
      color: 'cyan',
      category: 'security',
      tag: 'Security',
      title: 'Encryption Standards',
      description: 'Detailed documentation of our encryption protocols and key management systems.',
      updated: '1 week ago',
      readTime: '32 min read'
    },
    {
      icon: <Network />,
      color: 'blue',
      category: 'api',
      tag: 'API',
      title: 'Webhooks Guide',
      description: 'How to configure and use webhooks for real-time event notifications.',
      updated: '4 days ago',
      readTime: '15 min read'
    }
  ]

  const filteredDocs = selectedCategory === 'all'
    ? documents
    : documents.filter(doc => doc.category === selectedCategory)

  return (
    <DocumentationContainer>
      <Section>
        <SectionHeader>
          <Label>Knowledge Base</Label>
          <Title>Technical Documentation</Title>
          <Description>
            Complete guides, API references, and deployment instructions for all security modules.
          </Description>
        </SectionHeader>

        <CategoryTabs>
          {categories.map((category) => (
            <CategoryTab
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
              <TabCount>{category.count}</TabCount>
            </CategoryTab>
          ))}
        </CategoryTabs>

        <DocsGrid>
          {filteredDocs.map((doc) => (
            <DocCard key={doc.title}>
              <DocPreview>
                <DocIcon>
                  {doc.icon}
                </DocIcon>
              </DocPreview>
              <DocContent>
                <DocTag>{doc.tag}</DocTag>
                <h3>{doc.title}</h3>
                <p>{doc.description}</p>
                <DocMeta>
                  <span>Updated {doc.updated}</span>
                  <span>{doc.readTime}</span>
                </DocMeta>
              </DocContent>
            </DocCard>
          ))}
        </DocsGrid>
      </Section>

      <Section>
        <SectionHeader>
          <Label>Resources</Label>
          <Title>Additional Resources</Title>
          <Description>
            Supplementary materials, video tutorials, and community resources.
          </Description>
        </SectionHeader>

        <CardsGrid>
          <Card>
            <CardIcon color="cyan">
              <VideoIcon />
            </CardIcon>
            <h3>Video Tutorials</h3>
            <p>Comprehensive video guides covering all aspects of the platform.</p>
            <a href="#" className="card-link">
              Watch Videos <span>→</span>
            </a>
          </Card>
          <Card>
            <CardIcon color="blue">
              <BookIcon />
            </CardIcon>
            <h3>Best Practices</h3>
            <p>Industry best practices and recommended configurations.</p>
            <a href="#" className="card-link">
              View Guide <span>→</span>
            </a>
          </Card>
          <Card>
            <CardIcon color="orange">
              <UsersIcon />
            </CardIcon>
            <h3>Community Forum</h3>
            <p>Join discussions with other security professionals.</p>
            <a href="#" className="card-link">
              Join Forum <span>→</span>
            </a>
          </Card>
        </CardsGrid>
      </Section>
    </DocumentationContainer>
  )
}

const DocumentationContainer = styled.div`
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

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`

const CategoryTab = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 0.875rem 1.5rem;
  background: ${props => props.active
    ? 'linear-gradient(135deg, var(--accentCyan-15), var(--accentCyan-10))'
    : 'var(--bgElevated)'
  };
  color: ${props => props.active
    ? 'var(--accentCyan)'
    : 'var(--textSecondary)'
  };
  border: 1px solid ${props => props.active
    ? 'var(--accentCyan-25)'
    : 'var(--borderSubtle)'
  };
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: var(--accentCyan);
    color: var(--accentCyan);
    background: ${props => props.active
      ? 'linear-gradient(135deg, var(--accentCyan-18), var(--accentCyan-12))'
      : 'var(--accentCyan-05)'
    };
    transform: translateY(-1px);
    box-shadow: 0 4px 12px var(--glowCyan);
  }
`

const TabCount = styled.span`
  background: var(--bgDeep);
  color: var(--textMuted);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  border: 1px solid var(--borderSubtle);
`

const DocsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
`

const DocCard = styled(Card)`
  display: flex;
  flex-direction: column;
`

const DocPreview = styled.div`
  height: 160px;
  background: linear-gradient(135deg, var(--bgElevated), var(--bgCard));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  padding: 1.5rem;
  border-radius: 10px 10px 0 0;
`

const DocIcon = styled.div`
  font-size: 3rem;
  color: var(--accentCyan);
  z-index: 1;
`

const DocContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const DocTag = styled.span`
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: linear-gradient(135deg, var(--accentCyan-12), var(--accentCyan-08));
  color: var(--accentCyan);
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  align-self: flex-start;
  border: 1px solid var(--accentCyan-20);
  border-radius: 12px;
  backdrop-filter: blur(10px);
`

const DocMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--textMuted);
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px solid var(--borderSubtle);

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
`

const VideoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
)

const BookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
)

const UsersIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)