import { CheckCircle2 } from 'lucide-react'
import SectionTitle from './SectionTitle'

function Capabilities({ capabilityItems }) {
  return (
    <section className="section capabilities">
      <div className="container">
        <SectionTitle eyebrow="CAPABILITIES" title="One team across the technology stack" />
        <div className="cap-grid">
          {capabilityItems.map(([title, text]) => (
            <div className="cap-item" key={title}>
              <CheckCircle2 />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
