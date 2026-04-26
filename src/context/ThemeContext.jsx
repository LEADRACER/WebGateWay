import { createContext, useContext, useState, useEffect } from 'react'
import { darkTheme, lightTheme } from '../styles/themes'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true) // Default to dark theme

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  const theme = isDark ? darkTheme : lightTheme

  // Apply theme class to document for global styles
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

