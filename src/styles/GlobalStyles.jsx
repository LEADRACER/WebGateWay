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
      --accentCyan-05: rgba(0, 212, 255, 0.05);
      --accentCyan-08: rgba(0, 212, 255, 0.08);
      --accentCyan-10: rgba(0, 212, 255, 0.1);
      --accentCyan-12: rgba(0, 212, 255, 0.12);
      --accentCyan-15: rgba(0, 212, 255, 0.15);
      --accentCyan-18: rgba(0, 212, 255, 0.18);
      --accentCyan-20: rgba(0, 212, 255, 0.2);
      --accentCyan-25: rgba(0, 212, 255, 0.25);
      --accentCyan-30: rgba(0, 212, 255, 0.3);
      --accentCyan-dim: rgba(8, 145, 178, 0.25);
      --accentBlue-10: rgba(59, 130, 246, 0.1);
      --accentBlue-12: rgba(59, 130, 246, 0.12);
      --accentBlue-15: rgba(59, 130, 246, 0.15);
      --glowCyan-strong: rgba(0, 212, 255, 0.3);
      --glowCyan-soft: rgba(0, 212, 255, 0.15);
      --bgSecondary-alpha: rgba(26, 31, 46, 0.95);
      --bgCard-alpha: rgba(35, 39, 56, 0.95);
      --borderSubtle-alpha: rgba(55, 65, 81, 0.3);
      --textPrimary-alpha: rgba(241, 245, 249, 0.8);
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
      --accentCyan-05: rgba(0, 212, 255, 0.05);
      --accentCyan-08: rgba(0, 212, 255, 0.08);
      --accentCyan-10: rgba(0, 212, 255, 0.1);
      --accentCyan-12: rgba(0, 212, 255, 0.12);
      --accentCyan-15: rgba(0, 212, 255, 0.15);
      --accentCyan-18: rgba(0, 212, 255, 0.18);
      --accentCyan-20: rgba(0, 212, 255, 0.2);
      --accentCyan-25: rgba(0, 212, 255, 0.25);
      --accentCyan-30: rgba(0, 212, 255, 0.3);
      --accentCyan-dim: rgba(8, 145, 178, 0.25);
      --accentBlue-10: rgba(37, 99, 235, 0.1);
      --accentBlue-12: rgba(37, 99, 235, 0.12);
      --accentBlue-15: rgba(37, 99, 235, 0.15);
      --glowCyan-strong: rgba(0, 212, 255, 0.3);
      --glowCyan-soft: rgba(0, 212, 255, 0.15);
      --bgSecondary-alpha: rgba(241, 245, 249, 0.95);
      --bgCard-alpha: rgba(255, 255, 255, 0.95);
      --borderSubtle-alpha: rgba(203, 213, 225, 0.3);
      --textPrimary-alpha: rgba(15, 23, 42, 0.8);
    }
  }

  #root {
    min-height: 100vh;
  }
`

