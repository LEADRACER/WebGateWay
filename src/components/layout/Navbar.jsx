import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ThemeToggle } from '../common/ThemeToggle'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Set scrolled state for styling
      setScrolled(currentScrollY > 50)

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY.current + 10) {
        setIsHidden(true) // Scrolling down
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsHidden(false) // Scrolling up
      }

      // Always show navbar at the top of the page
      if (currentScrollY <= 0) {
        setIsHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
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
    <Nav scrolled={scrolled} isHidden={isHidden}>
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

        <div className="nav-actions">
          <ThemeToggle />
          <MobileMenuBtn onClick={() => setMobileOpen(!mobileOpen)}>
            &#9776;
          </MobileMenuBtn>
        </div>
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
    ? 'var(--bgSecondary)'
    : 'rgba(22, 27, 34, 0.9)'
  };
  backdrop-filter: ${props => props.scrolled ? 'blur(20px)' : 'blur(10px)'};
  border-bottom: ${props => props.scrolled
    ? `1px solid var(--borderSubtle)`
    : '1px solid rgba(58, 68, 80, 0.3)'
  };
  transform: ${props => props.isHidden ? 'translateY(-100%)' : 'translateY(0)'};

  .nav-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
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
    background: linear-gradient(135deg, var(--accentCyan), var(--accentBlue));
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 92% 100%, 0 100%);
    border: 1px solid rgba(0, 212, 170, 0.2);
    transition: all 0.3s ease;

    &:hover {
      border-color: var(--accentCyan);
      box-shadow: 0 0 30px var(--glowCyan);
    }

    span {
      position: relative;
      font-family: 'SF Mono', 'Fira Code', monospace;
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--textPrimary);
      text-shadow: 0 0 20px var(--glowCyan);
    }
  }

  .logo-text {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-weight: 900;
    font-size: 1.5rem;
    letter-spacing: 4px;
    color: var(--textPrimary);
    text-transform: uppercase;

    span {
      color: var(--accentCyan);
      text-shadow: 0 0 25px var(--glowCyan);
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
    background: var(--bgSecondary);
    border: 1px solid var(--borderSubtle);
    border-top: none;
    flex-direction: column;
    padding: 1rem;
  }
`

const NavItem = styled(NavLink)`
  color: var(--textSecondary);
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease;
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
    background: var(--accentCyan);
    transition: width 0.3s ease;
    transform: translateY(-50%);
  }

  &:hover {
    color: var(--accentCyan);
  }

  &:hover::before {
    width: 100%;
  }

  &.active {
    color: var(--accentCyan);
  }

  &.active::before {
    width: 100%;
  }
`

const MobileMenuBtn = styled.button`
  display: none;
  background: transparent;
  border: 1px solid var(--borderActive);
  color: var(--textPrimary);
  padding: 0.5rem 1rem;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 92% 100%, 0 100%);
  border-radius: 6px;
  font-size: 1.5rem;
  line-height: 1;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accentCyan);
    color: var(--accentCyan);
    background: rgba(0, 212, 170, 0.08);
  }

  @media (max-width: 768px) {
    display: block;
  }
`