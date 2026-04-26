import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Button = styled(motion.button)`
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  border: none;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &.primary {
    background: linear-gradient(135deg, var(--accentCyan), var(--accentBlue));
    color: var(--bgDeep);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 92% 100%, 0 100%);
    box-shadow: 0 4px 20px var(--glowCyan);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 40px var(--glowCyan);
    }
  }

  &.secondary {
    background: transparent;
    color: var(--textPrimary);
    border: 1px solid var(--borderActive);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 92% 100%, 0 100%);

    &:hover {
      border-color: var(--accentCyan);
      color: var(--accentCyan);
      background: rgba(0, 212, 170, 0.08);
      box-shadow: 0 0 25px rgba(0, 212, 170, 0.15);
    }
  }
`

