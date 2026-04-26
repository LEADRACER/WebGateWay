import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Button = styled(motion.button)`
  padding: 0.875rem 2rem;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  border: none;
  outline: none;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &.primary {
    background: linear-gradient(135deg, var(--accentCyan), var(--accentBlue));
    color: var(--bgDeep);
    box-shadow: 0 4px 16px var(--glowCyan);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px var(--glowCyan);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &.secondary {
    background: var(--bgElevated);
    color: var(--textPrimary);
    border: 1px solid var(--borderSubtle);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      border-color: var(--accentCyan);
      color: var(--accentCyan);
      background: var(--accentCyan-05);
      box-shadow: 0 4px 16px var(--glowCyan);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`

