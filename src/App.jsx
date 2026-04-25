import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { GridBackground } from './components/layout/GridBackground'
import { Home } from './pages/Home'
import { Operations } from './pages/Operations'
import { Intelligence } from './pages/Intelligence'
import { Systems } from './pages/Systems'
import { Documentation } from './pages/Documentation'
import { GlobalStyles } from './styles/GlobalStyles'
import styled from 'styled-components'
import { theme } from './styles/theme'

const App = () => {
  const location = useLocation()

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.98
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.02
    }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  }

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <GridBackground />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/operations"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Operations />
                </motion.div>
              }
            />
            <Route
              path="/intelligence"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Intelligence />
                </motion.div>
              }
            />
            <Route
              path="/systems"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Systems />
                </motion.div>
              }
            />
            <Route
              path="/docs"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Documentation />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </AppContainer>
    </>
  )
}

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 1;
`

export default App
