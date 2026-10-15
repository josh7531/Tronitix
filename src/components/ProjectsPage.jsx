import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ProjectDetailModal from './ProjectDetailModal'

function ProjectsPage({ products, navigate }) {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="section projects-page">
      <div className="container">
        <div className="projects-heading">
          <a className="text-link" href="/" onClick={(event) => { event.preventDefault(); navigate('/') }}>
            <ArrowLeft size={16} aria-hidden="true" /> Back to home
          </a>
          <div className="section-title">
            <span className="eyebrow">SELECTED WORK</span>
            <h1>Built to solve real problems.</h1>
            <p>Explore a selection of products and prototypes developed across hardware, software and connected technology.</p>
          </div>
        </div>

        <div className="cards product-grid">
          {products.map((project) => {
            const { title, category, icon: Icon, text } = project

            return (
              <article className="card product-card" key={title}>
                <div className="card-icon"><Icon /></div>
                <span className="tag">{category}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <button
                  type="button"
                  className="read-more"
                  onClick={() => setSelectedProject(project)}
                >
                  View project details <ArrowRight size={16} />
                </button>
              </article>
            )
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          contactHref="/#contact"
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default ProjectsPage
