import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { motion } from 'framer-motion'

export const Button = styled(motion.button)`
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-family: ${theme.fonts.mono};
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
    background: linear-gradient(135deg, ${theme.colors.accentCyan}, ${theme.colors.accentBlue});
    color: ${theme.colors.bgDeep};
    clip-path: polygon(0 0, 100% 0, 100% 80%, 92% 100%, 0 100%);
    box-shadow: 0 4px 20px rgba(0, 212, 170, 0.2);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 40px ${theme.colors.glowCyan};
    }
  }

  &.secondary {
    background: transparent;
    color: ${theme.colors.textPrimary};
    border: 1px solid ${theme.colors.borderActive};
    clip-path: polygon(0 0, 100% 0, 100% 80%, 92% 100%, 0 100%);

    &:hover {
      border-color: ${theme.colors.accentCyan};
      color: ${theme.colors.accentCyan};
      background: rgba(0, 212, 170, 0.08);
      box-shadow: 0 0 25px rgba(0, 212, 170, 0.15);
    }
  }
`
