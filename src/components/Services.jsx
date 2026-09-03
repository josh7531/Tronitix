import { ArrowRight } from 'lucide-react'
import SectionTitle from './SectionTitle'

function Services({ services }) {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionTitle eyebrow="WHAT WE DO" title="Engineering & technology services" text="From a first concept to an integrated solution, our team can work across hardware and software." />
        <div className="cards service-grid">
          {services.map(([title, text, Icon]) => (
            <article className="card service-card" key={title}>
              <div className="card-icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">Learn more <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
