import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'motion/react'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { PageTransition } from './components/layout/PageTransition'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ContactPage } from './pages/ContactPage'
import { ResumePage } from './pages/ResumePage'

function AdminRedirect() {
  useEffect(() => {
    window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }, [])
  return null
}

function NotFound() {
  return (
    <div style={{ padding: '80px 0', textAlign: 'center' }}>
      <div className="eyebrow">404</div>
      <h1 style={{ fontSize: 28, letterSpacing: '-.02em' }}>Page not found</h1>
      <p className="sub" style={{ margin: '12px auto 0' }}>The page you looked for does not exist. Try home or projects.</p>
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><ResumePage /></PageTransition>} />
        <Route path="/admin/*" element={<AdminRedirect />} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="wrap">
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
