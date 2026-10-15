import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

function Header({ route, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const homePath = route === '/' ? '' : '/'

  const openProjects = (event) => {
    event.preventDefault()
    navigate('/projects/')
    closeMenu()
  }

  return (
    <header className="header">
      <div className="container nav">
        <a className="logo" href={`${homePath}#home`} onClick={closeMenu} aria-label="Tronitix home">
          <img src="/brand-logo.png" alt="Tronitix" />
        </a>
        <button
          className="menu-btn"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {[
            ['Home', 'home'],
            ['About', 'about'],
            ['Services', 'services'],
            ['Team', 'team']
          ].map(([item, id]) => (
            <a key={item} href={`${homePath}#${id}`} onClick={closeMenu}>{item}</a>
          ))}
          <a href={`${homePath}#products`} onClick={closeMenu}>Work</a>
          <a
            href="/projects/"
            className={route === '/projects' ? 'nav-link-current' : ''}
            aria-current={route === '/projects' ? 'page' : undefined}
            onClick={openProjects}
          >
            Projects
          </a>
          <a className="nav-cta" href={`${homePath}#contact`} onClick={closeMenu}>
            Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
