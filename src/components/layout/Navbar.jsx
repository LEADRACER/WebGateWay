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
    width: 52px;
    height: 52px;
    background: linear-gradient(135deg, var(--accentCyan), var(--accentBlue));
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border: 1px solid var(--accentCyan-25);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 16px var(--glowCyan);

    &:hover {
      border-color: var(--accentCyan);
      box-shadow: 0 8px 24px var(--glowCyan);
      transform: scale(1.05);
    }

    span {
      position: relative;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--textPrimary);
      filter: drop-shadow(0 0 10px var(--glowCyan));
    }
  }

  .logo-text {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    color: var(--textPrimary);

    span {
      color: var(--accentCyan);
      background: linear-gradient(135deg, var(--accentCyan), var(--accentBlue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      filter: drop-shadow(0 0 15px var(--glowCyan));
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
  padding: 0.75rem 1.25rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 0;
    background: var(--accentCyan-10);
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-50%, -50%);
  }

  &:hover {
    color: var(--accentCyan);
    background: var(--accentCyan-05);
    border-color: var(--accentCyan-20);
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }

  &.active {
    color: var(--accentCyan);
    background: var(--accentCyan-08);
    border-color: var(--accentCyan-20);
  }

  &.active::before {
    width: 100%;
    height: 100%;
  }
`

const MobileMenuBtn = styled.button`
  display: none;
  background: var(--bgElevated);
  border: 1px solid var(--borderSubtle);
  color: var(--textPrimary);
  padding: 0.625rem 1rem;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1.25rem;
  line-height: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &:hover {
    border-color: var(--accentCyan);
    color: var(--accentCyan);
    background: var(--accentCyan-05);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: block;
  }
`