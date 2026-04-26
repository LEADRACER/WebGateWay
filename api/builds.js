// Mock data for demonstration - in production, this would connect to a database
const mockBuilds = [
  {
    id: 'netvision',
    name: 'NetVision',
    version: 'v4.3.0',
    description: 'Real-time Network Intelligence & Discovery Dashboard - Advanced network mapping tool with FastAPI backend and React frontend.',
    longDescription: 'NetVision is a comprehensive network intelligence platform that provides real-time visibility into network infrastructure, traffic patterns, and security events. Built with modern web technologies and designed for security professionals.',
    language: 'JavaScript',
    stars: 1247,
    lastUpdated: '2026-04-25',
    releaseDate: '2026-04-25',
    releaseTag: 'v4.3.0',
    releaseUrl: 'https://github.com/LEADRACER/NetVision/releases/tag/v4.3.0',
    github: 'https://github.com/LEADRACER/NetVision',
    techStack: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Redis'],
    features: [
      'Real-time network topology mapping',
      'Traffic analysis and anomaly detection',
      'Interactive dashboard with customizable widgets',
      'RESTful API for integration',
      'Role-based access control',
      'Export capabilities (PDF, CSV, JSON)'
    ],
    requirements: [
      'Python 3.8+',
      'Node.js 18+',
      'PostgreSQL 12+',
      'Redis 6+'
    ],
    installation: 'git clone https://github.com/LEADRACER/NetVision.git && cd NetVision && pip install -r requirements.txt && npm install && npm run build'
  }
];

export default function handler(request, response) {
  const { method } = request;

  switch (method) {
    case 'GET':
      // Return all builds
      response.status(200).json({
        data: mockBuilds,
        total: mockBuilds.length,
        timestamp: new Date().toISOString()
      });
      break;

    case 'POST':
      // Create new build (mock implementation)
      const newBuild = {
        ...request.body,
        id: `build-${Date.now()}`,
        lastUpdated: new Date().toISOString().split('T')[0]
      };
      response.status(201).json({
        data: newBuild,
        message: 'Build created successfully'
      });
      break;

    default:
      response.setHeader('Allow', ['GET', 'POST']);
      response.status(405).json({
        error: `Method ${method} not allowed`
      });
  }
}