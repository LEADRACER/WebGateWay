import { useTheme } from '../context/ThemeContext'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <ToggleButton
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
    >
      <ToggleTrack isDark={isDark}>
        <ToggleThumb animate={{ x: isDark ? 0 : 40 }}>
          {isDark ? (
            <Moon size={14} />
          ) : (
            <Sun size={14} />
          )}
        </ToggleThumb>
      </ToggleTrack>
    </ToggleButton>
  )
}

const ToggleButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 36px;
  border-radius: 18px;
  transition: all 0.3s ease;
`

const ToggleTrack = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.isDark
    ? 'rgba(32, 216, 192, 0.2)'
    : 'rgba(255, 193, 7, 0.3)'
  };
  border: 1px solid ${props => props.isDark
    ? 'rgba(32, 216, 192, 0.4)'
    : 'rgba(255, 193, 7, 0.5)'
  };
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`

const ToggleThumb = styled(motion.div)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${props => props.isDark
    ? 'var(--accentCyan)'
    : '#ffc107'
  };
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.isDark ? 'var(--bgDeep)' : '#1a3d33'};
  box-shadow: 0 2px 8px ${props => props.isDark
    ? 'var(--glowCyan)'
    : 'rgba(255, 193, 7, 0.4)'
  };
  transition: all 0.3s ease;
`
