// Theme definitions with greenish color schemes
// Each theme exports CSS custom properties for dynamic theming

// Helper to convert hex to RGB
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 0, 0'
}

export const darkTheme = {
  colors: {
    // Modern dark theme - deep navy & electric blue
    bgDeep: '#0a0f1a',
    bgPrimary: '#0f1419',
    bgSecondary: '#1a1f2e',
    bgCard: '#232738',
    bgElevated: '#2a3142',
    borderSubtle: '#374151',
    borderActive: '#00d4ff',
    textPrimary: '#f1f5f9',
    textSecondary: '#cbd5e1',
    textMuted: '#94a3b8',
    accentCyan: '#00d4ff',
    accentCyanDim: '#0891b2',
    accentBlue: '#3b82f6',
    accentBlueDim: '#1d4ed8',
    accentOrange: '#f59e0b',
    accentOrangeDim: '#d97706',
    accentPurple: '#a855f7',
    accentPurpleDim: '#9333ea',
    accentGreen: '#10b981',
    glowCyan: 'rgba(0, 212, 255, 0.25)',
    glowBlue: 'rgba(59, 130, 246, 0.25)',
    grey900: '#0f172a',
    grey800: '#1e293b',
    grey700: '#334155',
    grey600: '#475569',
    grey500: '#64748b',
    grey400: '#94a3b8',
    grey300: '#cbd5e1',
    grey200: '#e2e8f0',
    grey100: '#f1f5f9'
  },
  fonts: {
    mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  gridSize: '60px',
  // CSS Custom Properties for this theme
  cssVars: {
    // Backgrounds
    '--bgDeep': '#0a0f1a',
    '--bgPrimary': '#0f1419',
    '--bgSecondary': '#1a1f2e',
    '--bgCard': '#232738',
    '--bgElevated': '#2a3142',
    // Borders
    '--borderSubtle': '#374151',
    '--borderActive': '#00d4ff',
    // Text
    '--textPrimary': '#f1f5f9',
    '--textSecondary': '#cbd5e1',
    '--textMuted': '#94a3b8',
    // Accents
    '--accentCyan': '#00d4ff',
    '--accentCyanDim': '#0891b2',
    '--accentBlue': '#3b82f6',
    '--accentBlueDim': '#1d4ed8',
    '--accentOrange': '#f59e0b',
    '--accentOrangeDim': '#d97706',
    '--accentPurple': '#a855f7',
    '--accentPurpleDim': '#9333ea',
    '--accentGreen': '#10b981',
    // Glow
    '--glowCyan': 'rgba(0, 212, 255, 0.25)',
    '--glowBlue': 'rgba(59, 130, 246, 0.25)',
    // Grey scale
    '--grey900': '#0f172a',
    '--grey800': '#1e293b',
    '--grey700': '#334155',
    '--grey600': '#475569',
    '--grey500': '#64748b',
    '--grey400': '#94a3b8',
    '--grey300': '#cbd5e1',
    '--grey200': '#e2e8f0',
    '--grey100': '#f1f5f9'
  }
}

export const lightTheme = {
  colors: {
    // Modern light theme - clean slate & electric blue
    bgDeep: '#f8fafc',
    bgPrimary: '#ffffff',
    bgSecondary: '#f1f5f9',
    bgCard: '#ffffff',
    bgElevated: '#e2e8f0',
    borderSubtle: '#cbd5e1',
    borderActive: '#00d4ff',
    textPrimary: '#0f172a',
    textSecondary: '#334155',
    textMuted: '#64748b',
    accentCyan: '#00d4ff',
    accentCyanDim: '#0891b2',
    accentBlue: '#2563eb',
    accentBlueDim: '#1d4ed8',
    accentOrange: '#f59e0b',
    accentOrangeDim: '#d97706',
    accentPurple: '#8b5cf6',
    accentPurpleDim: '#7c3aed',
    accentGreen: '#059669',
    glowCyan: 'rgba(0, 212, 255, 0.3)',
    glowBlue: 'rgba(37, 99, 235, 0.3)',
    grey900: '#0f172a',
    grey800: '#1e293b',
    grey700: '#334155',
    grey600: '#475569',
    grey500: '#64748b',
    grey400: '#94a3b8',
    grey300: '#cbd5e1',
    grey200: '#e2e8f0',
    grey100: '#f1f5f9'
  },
  fonts: {
    mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  gridSize: '60px',
  // CSS Custom Properties for this theme
  cssVars: {
    '--bgDeep': '#f8fafc',
    '--bgPrimary': '#ffffff',
    '--bgSecondary': '#f1f5f9',
    '--bgCard': '#ffffff',
    '--bgElevated': '#e2e8f0',
    '--borderSubtle': '#cbd5e1',
    '--borderActive': '#00d4ff',
    '--textPrimary': '#0f172a',
    '--textSecondary': '#334155',
    '--textMuted': '#64748b',
    '--accentCyan': '#00d4ff',
    '--accentCyanDim': '#0891b2',
    '--accentBlue': '#2563eb',
    '--accentBlueDim': '#1d4ed8',
    '--accentOrange': '#f59e0b',
    '--accentOrangeDim': '#d97706',
    '--accentPurple': '#8b5cf6',
    '--accentPurpleDim': '#7c3aed',
    '--accentGreen': '#059669',
    '--glowCyan': 'rgba(0, 212, 255, 0.3)',
    '--glowBlue': 'rgba(37, 99, 235, 0.3)',
    '--grey900': '#0f172a',
    '--grey800': '#1e293b',
    '--grey700': '#334155',
    '--grey600': '#475569',
    '--grey500': '#64748b',
    '--grey400': '#94a3b8',
    '--grey300': '#cbd5e1',
    '--grey200': '#e2e8f0',
    '--grey100': '#f1f5f9'
  }
}

// Helper function to get CSS variables for a theme
export const getCssVariables = (theme) => {
  return theme.cssVars
}
