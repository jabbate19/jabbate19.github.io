import { NavLink, useLocation } from 'react-router-dom'
import { navLinks, navMeta } from '../../config/nav'
import { siteConfig } from '../../config/site'
import { useMobileDrawer } from '../../hooks/useMobileDrawer'
import './Nav.css'

export function Nav() {
  const { pathname } = useLocation()
  const { open, toggle, close } = useMobileDrawer()
  const meta = navMeta[pathname] ?? navMeta['/'] ?? ''

  return (
    <>
      <nav className="nav">
        <div className="wrap nav-in">
          <NavLink to="/" className="wordmark" onClick={close}>
            <img src="/favicon.svg" alt="" width={22} height={22} aria-hidden="true" />
            {siteConfig.wordmark}
          </NavLink>
          <div className="nav-links">
            {navLinks.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => isActive ? 'active' : undefined}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          <div className="nav-right">
            <span className="nav-side">{meta}</span>
            <button
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={toggle}
              type="button"
            >
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 6h14M3 10h14M3 14h14" /></svg>
            </button>
          </div>
        </div>
      </nav>
      <div id="mobile-drawer" className={`m-drawer ${open ? 'open' : ''}`}>
        {navLinks.map(l => (
          <NavLink key={l.to} to={l.to} onClick={close} className={({ isActive }) => isActive ? 'active' : undefined}>
            {l.label}
          </NavLink>
        ))}
      </div>
    </>
  )
}
