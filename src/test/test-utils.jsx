import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as ContextProvider } from '../context/ThemeContext'
import { BuildProvider } from '../context/BuildContext'
import { darkTheme } from '../styles/themes'

// All tests should use dark theme for consistency
const testTheme = darkTheme

export const TestWrapper = ({ children }) => (
  <ContextProvider>
    <StyledThemeProvider theme={testTheme}>
      <BuildProvider>
        {children}
      </BuildProvider>
    </StyledThemeProvider>
  </ContextProvider>
)

export const renderWithProviders = (ui, options) => {
  return render(ui, { wrapper: TestWrapper, ...options })
}