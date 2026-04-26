import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Card = styled(motion.div)`
  background: var(--bgCard);
  border: 1px solid var(--borderSubtle);
  border-radius: 16px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accentCyan), var(--accentBlue), var(--accentPurple));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    border-color: var(--accentCyan-25);
    transform: translateY(-8px);
    box-shadow: 0 20px 60px var(--accentCyan-08);

    &::before {
      transform: scaleX(1);
    }
  }
`

export const CardIcon = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  background: ${props => props.color === 'cyan'
    ? 'linear-gradient(135deg, var(--accentCyan-12), var(--accentCyan-08))'
    : props.color === 'blue'
    ? 'linear-gradient(135deg, var(--accentBlue-12), var(--accentBlue-08))'
    : props.color === 'orange'
    ? 'linear-gradient(135deg, var(--accentOrange-12), rgba(251, 191, 36, 0.08))'
    : 'linear-gradient(135deg, var(--accentPurple-12), var(--accentPurple-08))'
  };
  color: ${props => props.color === 'cyan'
    ? 'var(--accentCyan)'
    : props.color === 'blue'
    ? 'var(--accentBlue)'
    : props.color === 'orange'
    ? 'var(--accentOrange)'
    : 'var(--accentPurple)'
  };
  border: 1px solid ${props => props.color === 'cyan'
    ? 'var(--accentCyan-25)'
    : 'var(--borderSubtle)'
  };
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px ${props => props.color === 'cyan'
    ? 'var(--glowCyan)'
    : 'rgba(0, 0, 0, 0.05)'
  };

  svg {
    width: 32px;
    height: 32px;
  }

  ${Card}:hover & {
    transform: scale(1.05);
    box-shadow: 0 8px 24px ${props => props.color === 'cyan'
      ? 'var(--glowCyan)'
      : 'rgba(0, 0, 0, 0.1)'
    };
  }
`
