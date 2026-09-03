import { BrainCircuit, Code2, Cpu, Lightbulb } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { aboutFeatures } from '../data/siteData'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container two-col">
        <div>
          <SectionTitle eyebrow="ABOUT TRONITIX" title="Innovation through technology" />
          <p className="lead">Tronitix is a startup focused on creating integrated hardware and software products that address today's challenges while exploring tomorrow's technology.</p>
          <p>Our approach combines electronics, embedded systems, IoT, software and product development so that an idea can move from concept to a working prototype.</p>
          <div className="feature-list">
            {aboutFeatures.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon />
                <span>
                  <b>{title}</b>
                  <small>{text}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-panel">
          <div className="panel-icon"><BrainCircuit /></div>
          <h3>Integrated Technology Solutions</h3>
          <p>Designing systems where electronics, embedded intelligence and software work together.</p>
          <div className="mini-flow"><span>IDEA</span><i>→</i><span>DESIGN</span><i>→</i><span>BUILD</span><i>→</i><span>TEST</span></div>
        </div>
      </div>
    </section>
  )
}

export default About
