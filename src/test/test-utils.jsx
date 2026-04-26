import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as ContextProvider } from '../context/ThemeContext'
import { darkTheme } from '../styles/themes'

// All tests should use dark theme for consistency
const testTheme = darkTheme

export const TestWrapper = ({ children }) => (
  <ContextProvider>
    <StyledThemeProvider theme={testTheme}>
      {children}
    </StyledThemeProvider>
  </ContextProvider>
)

export const renderWithProviders = (ui, options) => {
  return render(ui, { wrapper: TestWrapper, ...options })
}
