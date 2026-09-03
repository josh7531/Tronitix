import { useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import SectionTitle from './SectionTitle'

function ProjectsPage({ products, navigate }) {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="section products">
      <div className="container">
        <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:20}}>
          <button className="btn" type="button" onClick={() => navigate('/') }><ArrowLeft size={14} /> Back</button>
          <SectionTitle eyebrow="OUR WORK" title="All projects" text="Complete list of products and projects." />
        </div>

        <div className="cards product-grid">
          {products.map((project) => {
            const { title, category, icon: Icon, text } = project

            return (
              <article
                className="card product-card"
                key={title}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedProject(project)
                  }
                }}
              >
                <div className="card-icon"><Icon /></div>
                <span className="tag">{category}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <button
                  type="button"
                  className="read-more"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProject(project)
                  }}
                >
                  View project details <ArrowRight size={16} />
                </button>
              </article>
            )
          })}
        </div>
      </div>

      {selectedProject && (() => {
        const SelectedIcon = selectedProject.icon

        return (
          <div className="project-detail-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="project-detail-modal" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="close-btn" onClick={() => setSelectedProject(null)} aria-label="Close project details">
                <X size={20} />
              </button>

              <div className="detail-header">
                <div className="card-icon detail-icon"><SelectedIcon /></div>
                <div>
                  <span className="tag">{selectedProject.category}</span>
                  <h3>{selectedProject.title}</h3>
                </div>
              </div>

            <div className="detail-meta">
              <div>
                <span>Project period</span>
                <strong>{selectedProject.period}</strong>
              </div>
              <div>
                <span>Status</span>
                <strong>{selectedProject.achievements ? 'Completed' : 'In progress'}</strong>
              </div>
            </div>

            <p className="detail-summary">{selectedProject.summary}</p>

            <div className="detail-columns">
              <div>
                <h4>Key functions</h4>
                <ul>
                  {selectedProject.functions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4>Achievements</h4>
                <ul>
                  {selectedProject.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

              <a className="btn detail-cta" href="#contact" onClick={() => setSelectedProject(null)}>Discuss a similar project <ArrowRight size={16} /></a>
            </div>
          </div>
        )
      })()}
    </section>
  )
}

export default ProjectsPage
