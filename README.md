# CyberSentinals - Open Source Cybersecurity Tools

A showcase website for open source cybersecurity tools and network utilities, featuring NetVision - a real-time network intelligence and discovery dashboard.

## Featured Project: NetVision

### 🛰️ NetVision v4.2
**Real-time Network Intelligence & Discovery Dashboard**

NetVision is a high-performance, industrial-grade network mapping tool designed for instant visibility and security awareness. Built with a **FastAPI** backend and a **React** frontend, it provides a seamless, ultra-lightweight experience for discovering devices, services, and vulnerabilities on your local network.

#### ✨ Key Features
- 🕵️ **Progressive Discovery**: Real-time updates as nodes are found
- 🛠️ **Scan Profiles**: Quick, Deep, and Security scanning modes
- 🎨 **Industrial UI**: Professional grey theme with technical grid
- ⚡ **Ultra-Lightweight**: Zero-animation architecture for maximum speed
- 📡 **Live WebSockets**: Direct, low-latency data streaming

#### 🚀 Quick Start
```bash
# Clone the repository
git clone https://github.com/LEADRACER/NetVision.git
cd NetVision

# Run with automated script
sudo chmod +x run.sh
sudo ./run.sh
```

#### 📋 Requirements
- **Python 3.8+**
- **Node.js 18+**
- **Nmap** (for scanning engine)

---

## Technology Stack

- **Frontend**: React 18, Vite, Styled Components, Framer Motion
- **Backend**: Vercel Serverless Functions
- **Styling**: CSS-in-JS with sci-fi aesthetics
- **Deployment**: Vercel (optimized for serverless)

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   └── layout/           # Layout components (Navbar, Grid)
├── pages/                # Page components
│   ├── Home.jsx         # Landing page with project showcase
│   ├── Builds.jsx       # Detailed builds/tools page
│   └── Documentation.jsx # Usage guides and API docs
├── styles/              # Theme and global styles
└── App.jsx              # Main routing application
```

## Key Features

### 🎨 Sci-Fi Design System
- Dark theme with cyan/blue accent colors
- Geometric block-style typography
- Animated grid backgrounds and particle effects
- Glass-morphism UI elements

### 🛠️ Interactive Build Showcase
- Detailed project cards with tech stacks
- Modal dialogs for comprehensive project info
- Direct GitHub integration with live data
- Download and source code links

### 📱 Responsive & Accessible
- Mobile-first design approach
- Smooth animations and transitions
- Keyboard navigation support
- Screen reader compatibility

## Installation & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LEADRACER/WebGateWay.git
   cd WebGateWay
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment

This project is optimized for **Vercel** deployment:

- Automatic static optimization
- Serverless function support for API endpoints
- Built-in CI/CD with GitHub integration

### Vercel Configuration
The `vercel.json` file includes:
- SPA routing support
- Automatic framework detection
- Optimized build settings

## Adding New Builds

To add a new build/project to the showcase:

1. Update the `builds` array in `src/pages/Builds.jsx`
2. Include repository information and GitHub API details
3. Add project description, tech stack, and features
4. The modal system will automatically display the new build

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/NewBuild`)
3. Add your build to the showcase
4. Test the build locally
5. Submit a pull request

## License

This project is licensed under the MIT License. Individual builds maintain their own licenses.

## Links

- **Live Demo**: [CyberSentinals](https://cybersentinals.vercel.app)
- **NetVision Repository**: [GitHub](https://github.com/LEADRACER/NetVision)
- **Portfolio**: [LEADRACER](https://github.com/LEADRACER)

---

*Built for cybersecurity professionals and open source enthusiasts.*