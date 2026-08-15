import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import './Footer.css'

export function Footer() {
  return (
    <footer className="foot">
      <span>{siteConfig.year}, {siteConfig.tagline}</span>
      <span className="foot-links">
        <Link to="/projects">projects</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">connect</Link>
      </span>
    </footer>
  )
}
