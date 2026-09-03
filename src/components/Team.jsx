import { ArrowRight } from 'lucide-react'
import SectionTitle from './SectionTitle'

function Team({ team }) {
  return (
    <section id="team" className="section team">
      <div className="container">
        <SectionTitle eyebrow="OUR TEAM" title="People behind the technology" text="A multidisciplinary team covering leadership, hardware, software and project operations." />
        <div className="team-grid">
          {team.map(person => (
            <article className="team-card" key={person.name}>
              <div className="member-photo">
                <img src={person.image} alt={person.name} onError={(e) => { e.currentTarget.style.display = 'none' }} />
                <span>{person.name.split(' ').map(x => x[0]).slice(0, 2).join('')}</span>
              </div>
              <div className="member-info">
                <h3>{person.name}</h3>
                <span>{person.role}</span>
                <p>{person.text}</p>
                <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowRight size={14} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
