import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Card = styled(motion.div)`
  background: var(--bgCard);
  border: 1px solid var(--borderSubtle);
  border-radius: 10px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accentCyan), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover {
    border-color: var(--borderActive);
    transform: translateY(-4px);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);

    &::before {
      transform: translateX(100%);
    }
  }
`

export const CardIcon = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 92% 100%, 0 100%);
  background: ${props => props.color === 'cyan' 
    ? 'rgba(0, 212, 170, 0.12)' 
    : props.color === 'blue'
    ? 'rgba(107, 140, 174, 0.15)'
    : props.color === 'orange'
    ? 'rgba(198, 124, 72, 0.15)'
    : 'rgba(139, 123, 184, 0.15)'
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
    ? 'rgba(0, 212, 170, 0.25)'
    : 'transparent'
  };
  border-radius: 10px;
  transition: all 0.3s ease;

  svg {
    width: 28px;
    height: 28px;
  }
`
