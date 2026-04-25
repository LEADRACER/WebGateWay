# CyberSentinals - Advanced Security Operations Platform

A sophisticated cybersecurity platform built with React.js featuring a sci-fi inspired interface for security operations, threat intelligence, and infrastructure management.

## Features

- **Multi-Page Architecture**: Home, Operations, Intelligence, Systems, Documentation pages
- **Sci-Fi Aesthetic**: Dark theme with glowing cyan accents, geometric patterns, and block-style typography
- **Advanced Animations**: Framer Motion transitions, terminal simulation, particle effects, and scroll reveals
- **Responsive Design**: Mobile-friendly layout with hamburger menu navigation
- **Interactive Components**: Live terminal, animated charts, security modules cards
- **Modular Structure**: Clean separation of concerns with reusable components

## Technology Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Styled Components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: JavaScript ES6+

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components (Button, Card, Terminal)
│   └── layout/           # Layout components (Navbar, GridBackground)
├── pages/                # Page components
│   ├── Home.jsx
│   ├── Operations.jsx
│   ├── Intelligence.jsx
│   ├── Systems.jsx
│   └── Documentation.jsx
├── styles/               # Theme and global styles
├── App.jsx               # Main App component with routing
└── main.jsx              # React entry point
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/LEADRACER/WebGateWay.git
   cd WebGateWay
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Pages Overview

### Home
- Hero section with system status and statistics
- Security modules showcase (Threat Detection, Network Shield, Data Vault)
- Live terminal simulation

### Operations
- Security Operations Center dashboard
- Incident response and vulnerability management
- Live scan progress monitoring

### Intelligence
- Real-time threat intelligence feeds
- IOC database and dark web monitoring
- Campaign tracking and analysis

### Systems
- Infrastructure architecture details
- Zero Trust Network and High Availability
- Compliance certifications (SOC 2, ISO 27001, HIPAA, GDPR)

### Documentation
- Technical documentation with category filtering
- Quick start guides and API references
- Additional resources and community links

## Key Components

### Button
- Gradient animated buttons with hover effects
- Primary and secondary variants
- Sci-fi styling with clipped polygon shapes

### Card
- Interactive cards with hover animations
- Gradient border effects on hover
- Consistent styling across all pages

### Terminal
- Simulated terminal with command input/output
- Color-coded output (success, warning, info)
- Auto-scrolling command simulation

### GridBackground
- Animated canvas background with grid patterns
- Floating particle effects
- Scanning line animation

## Environment Variables

None required for basic functionality.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Designed for cybersecurity professionals and security operations centers
- Inspired by modern SOC platforms and threat intelligence systems
- Built with performance and accessibility in mind