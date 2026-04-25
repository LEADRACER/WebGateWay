import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { motion } from 'framer-motion'

export const Card = styled(motion.div)`
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 4px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${theme.colors.accentCyan}, transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover {
    border-color: ${theme.colors.borderActive};
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

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
  clip-path: polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%);
  background: ${props => props.color === 'cyan' 
    ? 'rgba(0, 229, 199, 0.1)' 
    : props.color === 'blue'
    ? 'rgba(77, 124, 255, 0.1)'
    : props.color === 'orange'
    ? 'rgba(255, 94, 58, 0.1)'
    : 'rgba(123, 95, 255, 0.1)'
  };
  color: ${props => props.color === 'cyan' 
    ? theme.colors.accentCyan 
    : props.color === 'blue'
    ? theme.colors.accentBlue
    : props.color === 'orange'
    ? theme.colors.accentOrange
    : theme.colors.accentPurple
  };

  svg {
    width: 28px;
    height: 28px;
  }
`
