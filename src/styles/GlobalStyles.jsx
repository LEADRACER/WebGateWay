import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

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
    font-family: ${theme.fonts.sans};
    background: ${theme.colors.bgDeep};
    color: ${theme.colors.textPrimary};
    min-height: 100vh;
    overflow-x: hidden;
    line-height: 1.6;
  }

  #root {
    min-height: 100vh;
  }
`
