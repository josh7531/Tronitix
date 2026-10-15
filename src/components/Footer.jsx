function Footer({ route }) {
  const homePath = route === '/' ? '' : '/'

  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <a className="logo" href={`${homePath}#home`} aria-label="Tronitix home">
            <img src="/brand-logo.png" alt="Tronitix" />
          </a>
          <p>Thoughtful engineering for ideas that make a difference.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href={`${homePath}#about`}>About</a>
          <a href="/projects/">Projects</a>
          <a href={`${homePath}#services`}>Services</a>
          <a href={`${homePath}#team`}>Our team</a>
        </div>
        <div>
          <h4>Services</h4>
          <a href={`${homePath}#services`}>Software development</a>
          <a href={`${homePath}#services`}>Hardware prototyping</a>
          <a href={`${homePath}#services`}>IoT integration</a>
          <a href={`${homePath}#services`}>Research & projects</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:tronitix.official@gmail.com">tronitix.official@gmail.com</a>
          <a href={`${homePath}#contact`}>Start a conversation <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} Tronitix. All rights reserved.</div>
    </footer>
  )
}

export default Footer
