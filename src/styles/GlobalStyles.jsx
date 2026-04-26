import { createGlobalStyle } from 'styled-components'
import { darkTheme, lightTheme } from './themes'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${darkTheme.fonts.sans};
    background: var(--bgDeep);
    color: var(--textPrimary);
    min-height: 100vh;
    overflow-x: hidden;
    line-height: 1.6;
    transition: all 0.3s ease;

    &[data-theme="dark"] {
      --bgDeep: ${darkTheme.colors.bgDeep};
      --bgPrimary: ${darkTheme.colors.bgPrimary};
      --bgSecondary: ${darkTheme.colors.bgSecondary};
      --bgCard: ${darkTheme.colors.bgCard};
      --bgElevated: ${darkTheme.colors.bgElevated};
      --borderSubtle: ${darkTheme.colors.borderSubtle};
      --borderActive: ${darkTheme.colors.borderActive};
      --textPrimary: ${darkTheme.colors.textPrimary};
      --textSecondary: ${darkTheme.colors.textSecondary};
      --textMuted: ${darkTheme.colors.textMuted};
      --accentCyan: ${darkTheme.colors.accentCyan};
      --accentCyanDim: ${darkTheme.colors.accentCyanDim};
      --accentBlue: ${darkTheme.colors.accentBlue};
      --accentBlueDim: ${darkTheme.colors.accentBlueDim};
      --accentOrange: ${darkTheme.colors.accentOrange};
      --accentOrangeDim: ${darkTheme.colors.accentOrangeDim};
      --accentPurple: ${darkTheme.colors.accentPurple};
      --accentPurpleDim: ${darkTheme.colors.accentPurpleDim};
      --accentGreen: ${darkTheme.colors.accentGreen};
      --glowCyan: ${darkTheme.colors.glowCyan};
      --glowBlue: ${darkTheme.colors.glowBlue};
      --grey900: ${darkTheme.colors.grey900};
      --grey800: ${darkTheme.colors.grey800};
      --grey700: ${darkTheme.colors.grey700};
      --grey600: ${darkTheme.colors.grey600};
      --grey500: ${darkTheme.colors.grey500};
      --grey400: ${darkTheme.colors.grey400};
      --grey300: ${darkTheme.colors.grey300};
      --grey200: ${darkTheme.colors.grey200};
      --grey100: ${darkTheme.colors.grey100};
    }

    &[data-theme="light"] {
      --bgDeep: ${lightTheme.colors.bgDeep};
      --bgPrimary: ${lightTheme.colors.bgPrimary};
      --bgSecondary: ${lightTheme.colors.bgSecondary};
      --bgCard: ${lightTheme.colors.bgCard};
      --bgElevated: ${lightTheme.colors.bgElevated};
      --borderSubtle: ${lightTheme.colors.borderSubtle};
      --borderActive: ${lightTheme.colors.borderActive};
      --textPrimary: ${lightTheme.colors.textPrimary};
      --textSecondary: ${lightTheme.colors.textSecondary};
      --textMuted: ${lightTheme.colors.textMuted};
      --accentCyan: ${lightTheme.colors.accentCyan};
      --accentCyanDim: ${lightTheme.colors.accentCyanDim};
      --accentBlue: ${lightTheme.colors.accentBlue};
      --accentBlueDim: ${lightTheme.colors.accentBlueDim};
      --accentOrange: ${lightTheme.colors.accentOrange};
      --accentOrangeDim: ${lightTheme.colors.accentOrangeDim};
      --accentPurple: ${lightTheme.colors.accentPurple};
      --accentPurpleDim: ${lightTheme.colors.accentPurpleDim};
      --accentGreen: ${lightTheme.colors.accentGreen};
      --glowCyan: ${lightTheme.colors.glowCyan};
      --glowBlue: ${lightTheme.colors.glowBlue};
      --grey900: ${lightTheme.colors.grey900};
      --grey800: ${lightTheme.colors.grey800};
      --grey700: ${lightTheme.colors.grey700};
      --grey600: ${lightTheme.colors.grey600};
      --grey500: ${lightTheme.colors.grey500};
      --grey400: ${lightTheme.colors.grey400};
      --grey300: ${lightTheme.colors.grey300};
      --grey200: ${lightTheme.colors.grey200};
      --grey100: ${lightTheme.colors.grey100};
    }
  }

  #root {
    min-height: 100vh;
  }
`

