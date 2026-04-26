import { createContext, useContext, useState, useEffect, useMemo } from 'react'
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
  // Get initial theme from localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('theme')
    if (saved !== null) {
      return JSON.parse(saved) === 'dark'
    }
    // Fall back to system preference
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true // default to dark
  })

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  const theme = isDark ? darkTheme : lightTheme

  // Persist theme preference and apply data attribute
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    isDark,
    toggleTheme,
    theme
  }), [isDark, toggleTheme, theme])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

