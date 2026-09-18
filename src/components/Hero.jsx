import { ArrowRight, Bot, BrainCircuit, Cpu, Network } from 'lucide-react'
import { companyHighlights, heroFloatingCards } from '../data/siteData'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="eyebrow">HARDWARE • SOFTWARE • IoT • INNOVATION</span>
          <h1>Tronitix turns <span>ideas</span> into real technology.</h1>
          <p>Tronitix builds integrated hardware and software solutions — from engineering prototypes to connected digital products.</p>
          <div className="hero-actions">
            <a className="btn" href="#products">Explore Our Work <ArrowRight size={18}/></a>
            <a className="btn btn-ghost" href="#contact">Start a Project</a>
          </div>
          <div className="hero-proof">
            {companyHighlights.map(item => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="orb orb-a"></div>
          <div className="orb orb-b"></div>
          <div className="tech-card main-card">
            <BrainCircuit size={54}/>
            <span>Integrated Technology</span>
            <strong>Where hardware meets software.</strong>
          </div>
          {heroFloatingCards.map((card, index) => {
            const Icon = card.icon
            const extraClass = ['one', 'two', 'three'][index] || ''
            return (
              <div className={`floating-card ${extraClass}`} key={card.label}>
                <Icon size={22}/>
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
