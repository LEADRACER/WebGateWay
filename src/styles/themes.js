// Theme definitions with greenish color schemes
// Each theme exports CSS custom properties for dynamic theming

// Helper to convert hex to RGB
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 0, 0'
}

export const darkTheme = {
  colors: {
    // Dark greenish theme - deep forest & emerald
    bgDeep: '#0a1412',
    bgPrimary: '#0f1d18',
    bgSecondary: '#1a2e26',
    bgCard: '#233830',
    bgElevated: '#2d4a3b',
    borderSubtle: '#3a5c48',
    borderActive: '#5a8a72',
    textPrimary: '#e8f5f0',
    textSecondary: '#a3c5b8',
    textMuted: '#6b8c7a',
    accentCyan: '#20d8c0',
    accentCyanDim: '#18a894',
    accentBlue: '#5a8a72',
    accentBlueDim: '#4a7a62',
    accentOrange: '#c67c48',
    accentOrangeDim: '#a06231',
    accentPurple: '#8b7bb8',
    accentPurpleDim: '#6d5a99',
    accentGreen: '#4a8c4a',
    glowCyan: 'rgba(32, 216, 192, 0.15)',
    glowBlue: 'rgba(90, 138, 114, 0.15)',
    grey900: '#0f1d18',
    grey800: '#1a2e26',
    grey700: '#2a3f34',
    grey600: '#3a5c48',
    grey500: '#6b8c7a',
    grey400: '#a3c5b8',
    grey300: '#c4dcd3',
    grey200: '#e2ebe8',
    grey100: '#f5f8f6'
  },
  fonts: {
    mono: "'SF Mono', 'Fira Code', 'Consolas', monospace",
    sans: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  gridSize: '60px',
  // CSS Custom Properties for this theme
  cssVars: {
    // Backgrounds
    '--bgDeep': '#0a1412',
    '--bgPrimary': '#0f1d18',
    '--bgSecondary': '#1a2e26',
    '--bgCard': '#233830',
    '--bgElevated': '#2d4a3b',
    // Borders
    '--borderSubtle': '#3a5c48',
    '--borderActive': '#5a8a72',
    // Text
    '--textPrimary': '#e8f5f0',
    '--textSecondary': '#a3c5b8',
    '--textMuted': '#6b8c7a',
    // Accents
    '--accentCyan': '#20d8c0',
    '--accentCyanDim': '#18a894',
    '--accentBlue': '#5a8a72',
    '--accentBlueDim': '#4a7a62',
    '--accentOrange': '#c67c48',
    '--accentOrangeDim': '#a06231',
    '--accentPurple': '#8b7bb8',
    '--accentPurpleDim': '#6d5a99',
    '--accentGreen': '#4a8c4a',
    // Glow
    '--glowCyan': 'rgba(32, 216, 192, 0.15)',
    '--glowBlue': 'rgba(90, 138, 114, 0.15)',
    // Grey scale
    '--grey900': '#0f1d18',
    '--grey800': '#1a2e26',
    '--grey700': '#2a3f34',
    '--grey600': '#3a5c48',
    '--grey500': '#6b8c7a',
    '--grey400': '#a3c5b8',
    '--grey300': '#c4dcd3',
    '--grey200': '#e2ebe8',
    '--grey100': '#f5f8f6'
  }
}

export const lightTheme = {
  colors: {
    // Light greenish theme - fresh mint & sage
    bgDeep: '#f0f7f5',
    bgPrimary: '#ffffff',
    bgSecondary: '#f5fbf8',
    bgCard: '#ffffff',
    bgElevated: '#e8f5f0',
    borderSubtle: '#d4e8e2',
    borderActive: '#20d8c0',
    textPrimary: '#1a3d33',
    textSecondary: '#4a7a62',
    textMuted: '#8ba899',
    accentCyan: '#00a080',
    accentCyanDim: '#008570',
    accentBlue: '#5a8a72',
    accentBlueDim: '#4a7a62',
    accentOrange: '#c67c48',
    accentOrangeDim: '#a06231',
    accentPurple: '#8b7bb8',
    accentPurpleDim: '#6d5a99',
    accentGreen: '#2d8a2d',
    glowCyan: 'rgba(0, 160, 128, 0.2)',
    glowBlue: 'rgba(90, 138, 114, 0.2)',
    grey900: '#1a3d33',
    grey800: '#264a40',
    grey700: '#3a5c48',
    grey600: '#4a7a62',
    grey500: '#8ba899',
    grey400: '#b8d4c9',
    grey300: '#d4e8e2',
    grey200: '#e8f5f0',
    grey100: '#f5fbf8'
  },
  fonts: {
    mono: "'SF Mono', 'Fira Code', 'Consolas', monospace",
    sans: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  gridSize: '60px',
  // CSS Custom Properties for this theme
  cssVars: {
    '--bgDeep': '#f0f7f5',
    '--bgPrimary': '#ffffff',
    '--bgSecondary': '#f5fbf8',
    '--bgCard': '#ffffff',
    '--bgElevated': '#e8f5f0',
    '--borderSubtle': '#d4e8e2',
    '--borderActive': '#20d8c0',
    '--textPrimary': '#1a3d33',
    '--textSecondary': '#4a7a62',
    '--textMuted': '#8ba899',
    '--accentCyan': '#00a080',
    '--accentCyanDim': '#008570',
    '--accentBlue': '#5a8a72',
    '--accentBlueDim': '#4a7a62',
    '--accentOrange': '#c67c48',
    '--accentOrangeDim': '#a06231',
    '--accentPurple': '#8b7bb8',
    '--accentPurpleDim': '#6d5a99',
    '--accentGreen': '#2d8a2d',
    '--glowCyan': 'rgba(0, 160, 128, 0.2)',
    '--glowBlue': 'rgba(90, 138, 114, 0.2)',
    '--grey900': '#1a3d33',
    '--grey800': '#264a40',
    '--grey700': '#3a5c48',
    '--grey600': '#4a7a62',
    '--grey500': '#8ba899',
    '--grey400': '#b8d4c9',
    '--grey300': '#d4e8e2',
    '--grey200': '#e8f5f0',
    '--grey100': '#f5fbf8'
  }
}

// Helper function to get CSS variables for a theme
export const getCssVariables = (theme) => {
  return theme.cssVars
}
