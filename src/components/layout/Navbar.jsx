import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/builds', label: 'Builds' },
    { to: '/docs', label: 'Documentation' }
  ]

  return (
    <Nav scrolled={scrolled}>
      <div className="nav-container">
        <NavLink to="/" className="logo">
          <div className="logo-block">
            <span>C</span>
          </div>
          <span className="logo-text">Cyber<span>Sentinals</span></span>
        </NavLink>

        <NavLinks mobileOpen={mobileOpen}>
          {navItems.map((item) => (
            <NavItem key={item.to} to={item.to}>
              {item.label}
            </NavItem>
          ))}
        </NavLinks>

        <MobileMenuBtn onClick={() => setMobileOpen(!mobileOpen)}>
          &#9776;
        </MobileMenuBtn>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.4s ease;
  background: ${props => props.scrolled
    ? 'rgba(5, 5, 8, 0.9)'
    : 'transparent'
  };
  backdrop-filter: ${props => props.scrolled ? 'blur(20px)' : 'none'};
  border-bottom: ${props => props.scrolled
    ? `1px solid ${theme.colors.borderSubtle}`
    : 'none'
  };

  .nav-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;

  .logo-block {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, ${theme.colors.accentCyan}, ${theme.colors.accentBlue});
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%);

    span {
      position: relative;
      font-family: ${theme.fonts.mono};
      font-weight: 900;
      font-size: 1.2rem;
      color: ${theme.colors.accentCyan};
      text-shadow: 0 0 20px ${theme.colors.glowCyan};
    }
  }

  .logo-text {
    font-family: ${theme.fonts.mono};
    font-weight: 900;
    font-size: 1.5rem;
    letter-spacing: 4px;
    color: ${theme.colors.textPrimary};
    text-transform: uppercase;

    span {
      color: ${theme.colors.accentCyan};
    }
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: ${props => props.mobileOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${theme.colors.bgSecondary};
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px solid ${theme.colors.borderSubtle};
  }
`

const NavItem = styled(NavLink)`
  color: ${theme.colors.textSecondary};
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  font-family: ${theme.fonts.mono};
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  transition: color 0.3s ease;
  border: none;
  background: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 2px;
    background: ${theme.colors.accentCyan};
    transition: width 0.3s ease;
    transform: translateY(-50%);
  }

  &:hover {
    color: ${theme.colors.accentCyan};
  }

  &:hover::before {
    width: 100%;
  }

  &.active {
    color: ${theme.colors.accentCyan};
  }

  &.active::before {
    width: 100%;
  }
`

const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: 1px solid ${theme.colors.borderActive};
  color: ${theme.colors.textPrimary};
  padding: 0.5rem;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%);

  @media (max-width: 768px) {
    display: block;
  }
`