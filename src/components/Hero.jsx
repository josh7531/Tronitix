import { ArrowDown, ArrowRight, BrainCircuit } from 'lucide-react'
import { companyHighlights, heroFloatingCards } from '../data/siteData'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> ENGINEERING WHAT’S NEXT</span>
          <h1>Ideas deserve to become <span>real things.</span></h1>
          <p>We bring hardware, software and connected technology together to turn ambitious ideas into practical products.</p>
          <div className="hero-actions">
            <a className="btn" href="#contact">Let’s build something <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="text-link" href="#products">Explore our work <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <div className="hero-proof" aria-label="How we work">
            {companyHighlights.map(item => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual" aria-label="A connected technology system">
          <div className="orb orb-a" aria-hidden="true"></div>
          <div className="orb orb-b" aria-hidden="true"></div>
          <div className="visual-caption"><span /> Connected by design</div>
          <div className="tech-card main-card">
            <div className="main-card-icon"><BrainCircuit size={30} aria-hidden="true" /></div>
            <span>THE TRONITIX APPROACH</span>
            <strong>One idea.<br />Every system working together.</strong>
            <div className="card-signal" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /></div>
          </div>
          {heroFloatingCards.map((card, index) => {
            const Icon = card.icon
            const extraClass = ['one', 'two', 'three'][index] || ''
            return (
              <div className={`floating-card ${extraClass}`} key={card.label}>
                <Icon size={19} aria-hidden="true" />
                <span>{card.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
